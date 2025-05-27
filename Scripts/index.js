const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],
  ['blockquote', 'code-block'],
  ['link', 'image', 'video', 'formula'],

  [{'list': 'ordered'}, {'list': 'bullet'}, {'list': 'check'}],
  [{'script': 'sub'}, {'script': 'super'}],
  [{'indent': '-1'}, {'indent': '+1'}],
  [{'direction': 'rtl'}],

  [{'header': [1, 2, 3, 4, false, 5, 6]}],

  [{'color': []}, {'background': []}],
  [{'font': []}],
  [{'align': []}],

  ['clean']
];

// Note editor on the right side
const quill = new Quill('#mainEditor', {
  modules: {
    toolbar: toolbarOptions
  },
  placeholder: "Start your note-taking here",
  theme: "snow"
});

// Editor on the right side for viewing notes
const anotherNoteViewQuill = new Quill("#anotherNoteView", {
  readOnly: true,
  modules: {
    toolbar: null
  },
  theme: "snow"
});

// Displays the user their Viewing History as a table to be copied
const copyHistoryQuill = new Quill("#copyHistoryEditor", {
  readOnly: true,
  modules: {
    toolbar: null
  },
  theme: "snow"
});

const insertTableQuill = new Quill("#insertTableEditor", {
  readOnly: true,
  modules: {
    toolbar: null
  },
  placeholder: "You haven't created a table yet",
  theme: "snow"
});

const noteHTMLCodeEditor = ace.edit("noteHTML");
noteHTMLCodeEditor.session.setMode("ace/mode/html");
noteHTMLCodeEditor.setReadOnly(true);
noteHTMLCodeEditor.session.setUseWrapMode(true);

const codeFileViewCodeEditor = ace.edit("codeFileView");
codeFileViewCodeEditor.session.setMode("ace/mode/plain_text");
codeFileViewCodeEditor.setReadOnly(true);
codeFileViewCodeEditor.session.setUseWrapMode(true);

function onLoadTasks() {
  if (localStorage.getItem("noteProgress") !== "<p></p>" && localStorage.getItem(("noteProgress")) !== null) {
    hideAndShow("createOrOpenContainer", "noteEditor");
    quill.clipboard.dangerouslyPasteHTML(localStorage.getItem("noteProgress"));

    noteName.value = localStorage.getItem('noteTitle');
    alterMenuFunctions(false);
  }

  dynamicallySetHeight();

  // USER PREFERENCES
  // Auto Save
  if (localStorage.getItem("autoSaveEnabled") === "true") {
    autoSave.click();
  }

  // Word Wrap
  if (localStorage.getItem("wordWrapEnabled") === "true") {
    wordWrap.click();
  }

  // Viewing and Editor Size
  if (localStorage.getItem("viewingSizeValue") !== null) {
    viewingSize.value = localStorage.getItem("viewingSizeValue");
    adjustViewingAndEditorSizes();
  }
}

// Sets the height of certain elements dependent on the height
// of a user's browser window
function dynamicallySetHeight() {
  const adjustedHeight = (window.innerHeight - 34).toString() + "px";
  appSectionsTable.style.height = adjustedHeight;
  anotherNoteView.style.height = adjustedHeight;
  wordDocumentView.style.height = adjustedHeight;
  noteEditor.style.height = adjustedHeight;
  codeFileView.style.height = adjustedHeight;

  for (let iframe = 0; iframe < iframes.length; iframe++) {
    iframes[iframe].style.height = window.innerHeight + "px";
  }
}

function hideAndShow(hiddenContainer, shownContainer) {
  document.getElementById(hiddenContainer).hidden = true;
  document.getElementById(shownContainer).hidden = false;
}

function alterWindowTitle(isNoteClosed) {
  switch (isNoteClosed) {
    case true:
      document.title = "NoteMaster";
      break;
    case false:
      if (noteName.value === "") {
        document.title = "Untitled - NoteMaster";
      } else {
        document.title = noteName.value + " - NoteMaster";
      }
      break;
  }
}

function toggleViewer(isShown, currentViewer) {
  switch (isShown) {
    case true:
      document.getElementById(currentViewer).hidden = false;
      viewersContainer.hidden = false;
      chooseViewer.hidden = true;
      break;
    case false:
      document.getElementById(currentViewer).hidden = true;
      viewersContainer.hidden = true;
      chooseViewer.hidden = false;
      break
  }
}

function toggleDialog(isShown, currentDialog, focusedElement) {
  switch (isShown) {
    case true:
      dialogFocusBackground.hidden = false;
      document.getElementById(currentDialog).hidden = false;
      break;
    case false:
      dialogFocusBackground.hidden = true;
      document.getElementById(currentDialog).hidden = true;
      break;
  }

  if (focusedElement !== null) {
    document.getElementById(focusedElement).focus();
  }
}

function toggleMenuCheck(imageObject) {
  if (document.getElementById(imageObject).src.includes("Assets/Images/check_000000.svg")) {
    document.getElementById(imageObject).removeAttribute("src");
  } else {
    document.getElementById(imageObject).src = "Assets/Images/check_000000.svg"
  }
}

function alterMenuFunctions(isDisabled) {
  document.getElementById("closeNote").disabled = isDisabled;
  document.getElementById("downloadNote").disabled = isDisabled;
  document.getElementById("save").disabled = isDisabled;
  document.getElementById('showHTMLEditor').disabled = isDisabled;
}

function applyPercentageSizes() {
  chooseViewer.style.width = (viewingSize.value).toString() + '%';
  viewersContainer.style.width = (viewingSize.value).toString() + '%';
  createOrOpenContainer.style.width = (editorSize.value).toString() + '%';
  noteEditor.style.width = (editorSize.value).toString() + '%';
}

function adjustViewingAndEditorSizes() {
  // Disallows the user from manually surpassing the defined input limits
  if (viewingSize.value > viewingSize.max) {
    viewingSize.value = viewingSize.max;
  } else if (viewingSize.value < viewingSize.min) {
    viewingSize.value = viewingSize.min;
  }

  editorSize.value = 100 - viewingSize.value;
  applyPercentageSizes();
  localStorage.setItem('viewingSizeValue', viewingSize.value);
}

function addHistoryEntry(valueObject) {
  fileViewingHistoryNames.push(document.getElementById(valueObject).value);
  fileViewingHistoryTimes.push(get12HourTime());
}

function appendViewingHistory() {
  // Resets the table's state to prevent duplication
  viewingHistoryTable.innerHTML = "";

  const headRow = document.createElement("tr");
  const timeHead = document.createElement("td");
  const nameHead = document.createElement("td");
  timeHead.innerHTML = "<b>Time</b>";
  nameHead.innerHTML = "<b>Document</b>";

  headRow.appendChild(timeHead);
  headRow.appendChild(nameHead);
  viewingHistoryTable.appendChild(headRow);

  // Iterates through the history-storing arrays and adds their values to the table
  for (let a = 0; a < fileViewingHistoryNames.length; a++) {
    const historyRow = document.createElement("tr");
    const historyTime = document.createElement("td");
    const historyName = document.createElement("td");

    historyTime.innerHTML = fileViewingHistoryTimes[a];
    historyName.innerHTML = fileViewingHistoryNames[a];

    historyRow.appendChild(historyTime);
    historyRow.appendChild(historyName);
    viewingHistoryTable.appendChild(historyRow);
  }
}

function throwAppError(messageText) {
  toggleDialog(true, "applicationError", null);
  errorMessage.innerHTML = messageText;
}

function get12HourTime() {
  let hour = "";
  let minute = "";
  let suffix = "";

  // Removes the standard 24-hour format
  if (currentDate.getHours() > 12) {
    hour = currentDate.getHours() - 12;
  } else if (currentDate.getHours() < 10) {
    hour = currentDate.getHours().toString().replace("0", "");
  } else {
    hour = currentDate.getHours();
  }

  // Accounts for minutes 1-9
  if (currentDate.getMinutes() < 10) {
    minute = "0" + currentDate.getMinutes();
  } else {
    minute = currentDate.getMinutes();
  }

  // Adds, "AM" or "PM"
  if (currentDate.getTime() >= 12) {
    suffix = " PM";
  } else {
    suffix = " AM";
  }

  return hour + ":" + minute + suffix;
}

function createTable() {
  createdTable.innerHTML = "";
  for (let rows = 0; rows < tableRows.value; rows++) {
    const currentRow = document.createElement("tr");
    for (let columns = 0; columns < tableColumns.value; columns++) {
      const currentColumn = document.createElement("td");

      // Accounts for the fact that the last cell must contain text to be copied
      if (columns === tableColumns.value - 1 && rows === tableRows.value - 1) {
        currentColumn.innerHTML = "ㅤ";
      }

      currentRow.appendChild(currentColumn);
    }
    createdTable.appendChild(currentRow);
  }

  insertTableQuill.clipboard.dangerouslyPasteHTML(tableSourceHTML.innerHTML);
}
