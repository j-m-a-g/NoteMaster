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

const quill = new Quill('#mainEditor', {
  modules: {
    toolbar: toolbarOptions
  },
  placeholder: "Start your note-taking here",
  theme: 'snow'
});

const anotherNoteViewQuill = new Quill("#anotherNoteView", {
  readOnly: true,
  modules: {
    toolbar: null
  },
  theme: 'snow',
});

const copyHistoryQuill = new Quill("#copyHistoryEditor", {
  readOnly: true,
  modules: {
    toolbar: null
  },
  theme: 'snow',
});

const noteHTMLCodeEditor = ace.edit("noteHTML");
noteHTMLCodeEditor.setTheme("ace/theme/monokai");
noteHTMLCodeEditor.session.setMode("ace/mode/html");
noteHTMLCodeEditor.setReadOnly(true);
noteHTMLCodeEditor.session.setUseWrapMode(true);

function onLoadTasks() {
  if (localStorage.getItem("noteProgress") !== "<p></p>" && localStorage.getItem(("noteProgress")) !== null) {
    hideAndShow("createOrOpenContainer", "noteEditor");
    quill.clipboard.dangerouslyPasteHTML(localStorage.getItem("noteProgress"));

    noteName.value = localStorage.getItem('noteTitle');
    alterMenuFunctions(false);
  }

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

function hideAndShow(hiddenContainer, shownContainer) {
  document.getElementById(hiddenContainer).hidden = true;
  document.getElementById(shownContainer).hidden = false;
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

function toggleDialog(isShown, currentDialog) {
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

function appendViewingHistory() {
  // Resets the table's state to prevent duplication
  viewingHistoryTable.innerHTML = "";

  const headRow = document.createElement("tr");
  const timeHead = document.createElement("td");
  const nameHead = document.createElement("td");
  timeHead.innerHTML = "TIME";
  nameHead.innerHTML = "DOCUMENT NAME";

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
  toggleDialog(true, "applicationError");
  errorMessage.innerHTML = messageText;
}

function get12HourTime() {
  let hour = "";
  let minute = "";
  let suffix = "";

  // Removes the standard 24-hour format
  if (currentDate.getHours() > 12) {
    hour = currentDate.getHours() - 12;
  } else {
    hour = currentDate.getHours().toString().replace("0", "");
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
