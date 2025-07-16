const toolbarOptions = [
  ["bold", "italic", "underline", "strike"],
  ["blockquote", "code-block"],
  ["link", "image", "video"],

  [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
  [{ script: "sub" }, { script: "super" }],
  [{ indent: "-1" }, { indent: "+1" }],

  [{ header: [1, 2, 3, 4, false, 5, 6] }],

  [{ color: [] }, { background: [] }],
  [{ font: [] }],
  [
    { align: "" },
    { align: "center" },
    { align: "right" },
    { align: "justify" }
  ],

  ["clean"]
];

// Note editor on the right side
const quill = new Quill("#mainEditor", {
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

function shiftProgressValue(progressObject, currentValue, maxValue, stepValue) {
  if (currentValue < maxValue) {
    document.getElementById(progressObject).value = currentValue;
    currentValue += stepValue;
    setTimeout(
      shiftProgressValue,
      1,
      progressObject,
      currentValue,
      maxValue,
      stepValue
    );
  }
}

// Sets the height of certain elements dependent on the height
// of a user's browser window
function dynamicallySetHeight() {
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
  document.getElementById(currentViewer).hidden = !isShown;
  viewersContainer.hidden = !isShown;
  chooseViewer.hidden = isShown;
}

function toggleDialog(isShown, currentDialog, focusedElement) {
  dialogFocusBackground.hidden = !isShown;
  document.getElementById(currentDialog).hidden = !isShown;

  if (focusedElement !== null) {
    document.getElementById(focusedElement).focus();
  }
}

function toggleMenuCheck(imageObject) {
  if (
    document
      .getElementById(imageObject)
      .src.includes("Assets/Images/check_000000.svg")
  ) {
    document.getElementById(imageObject).src = uncheckedImageSource;
  } else {
    document.getElementById(imageObject).src = checkedImageSource;
  }
}

function alterMenuFunctions(isDisabled) {
  document.getElementById("closeNote").disabled = isDisabled;
  document.getElementById("downloadAsPlainText").disabled = isDisabled;
  document.getElementById("downloadNote").disabled = isDisabled;
  document.getElementById("hideEditor").disabled = isDisabled;
  document.getElementById("insertDate").disabled = isDisabled;
  document.getElementById("insertOnlineImageButton").disabled = isDisabled;
  document.getElementById("insertSymbolButton").disabled = isDisabled;
  document.getElementById("insertTableButton").disabled = isDisabled;
  document.getElementById("insertTime").disabled = isDisabled;
  document.getElementById("printNote").disabled = isDisabled;
  document.getElementById("quillRedo").disabled = isDisabled;
  document.getElementById("quillUndo").disabled = isDisabled;
  document.getElementById("save").disabled = isDisabled;
  document.getElementById("saveForLater").disabled = isDisabled;
  document.getElementById("showHTMLEditor").disabled = isDisabled;
}

function applyPercentageSizes() {
  chooseViewer.style.width = viewingSize.value.toString() + "%";
  viewersContainer.style.width = viewingSize.value.toString() + "%";
  createOrOpenContainer.style.width = editorSize.value.toString() + "%";
  noteEditor.style.width = editorSize.value.toString() + "%";
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
  localStorage.setItem("viewingSizeValue", viewingSize.value);
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

function displaySnackbar(snackbarText) {
  // Shows the snack-bar from its, "display" style of "none"
  snackbar.style.display = "flex";
  snackbarMessage.innerHTML = snackbarText; // Applies the argument from the snackBarText parameter

  // Hides the snack-bar once again after a 7.5 second delay
  setTimeout(() => (snackbar.style.display = "none"), 7500);
}

function get12HourTime() {
  let hour;
  let minute;
  let suffix;

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
  if (currentDate.getHours() < 12) {
    suffix = " AM";
  } else {
    suffix = " PM";
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

function addUnicodeCharacters() {
  for (let s = 0; s < symbolList.length; s++) {
    for (let t = 0; t < symbolList[s].length; t++) {
      const symbolBox = document.createElement("div");
      const symbolTitle = document.createElement("h3");

      symbolTitle.style.textAlign = "center";
      symbolTitle.innerHTML = symbolList[s][0];

      symbolBox.className = "symbolContainer";
      symbolBox.title = symbolList[s][1];
      symbolBox.setAttribute(
        "onclick",
        "quill.insertText(quill.getSelection(focus), '" +
          symbolList[s][0] +
          "')"
      );
      symbolBox.appendChild(symbolTitle);

      symbolsDisplay.appendChild(symbolBox);
      break;
    }
  }
}

function onLoadTasks() {
  try {
    // Dark Mode
    if (localStorage.getItem("darkMode") === "true") {
      darkModeToggle.click();
      gettingStartedDarkMode.checked = true;
    }

    dynamicallySetHeight();
    updateStatusBar();
    addUnicodeCharacters();

    if (currentDate.getHours() < 12) {
      userGreeting.innerHTML = "Good Morning 😎";
    } else if (currentDate.getHours() >= 12 && currentDate.getHours() < 18) {
      userGreeting.innerHTML = "Good Afternoon 🌞";
    } else {
      userGreeting.innerHTML = "Good Evening 🌚";
    }

    if (
      localStorage.getItem("noteProgress") !== "<p></p>" &&
      localStorage.getItem("noteProgress") !== null
    ) {
      hideAndShow("createOrOpenContainer", "noteEditor");
      quill.clipboard.dangerouslyPasteHTML(
        localStorage.getItem("noteProgress")
      );

      noteName.value = localStorage.getItem("noteTitle");
      alterMenuFunctions(false);
    }

    // GET STARTED WINDOW
    if (localStorage.getItem("finishedGetStarted") !== "true") {
      toggleDialog(true, "gettingStarted", null);
    }

    // WRITING INSIGHTS
    if (localStorage.getItem("totalWordCountArray") === null) {
      addedWordCountArray = [];
      localStorage.setItem(
        "totalWordCountArray",
        JSON.stringify(addedWordCountArray)
      );
    }

    if (localStorage.getItem("totalCharacterCountArray") === null) {
      addedCharacterCountArray = [];
      localStorage.setItem(
        "totalCharacterCountArray",
        JSON.stringify(addedCharacterCountArray)
      );
    }

    // SHARED NOTE CHECK
    if (
      workingURLParameters.has("name") ||
      workingURLParameters.has("markup")
    ) {
      initiateNote(false);
      noteName.value = workingURLParameters.get("name");
      quill.clipboard.dangerouslyPasteHTML(
        decodeURIComponent(workingURLParameters.get("markup"))
      );

      // Removes the parameters from being displayed in a user's address
      // bar for security reasons
      history.pushState(null, "", window.location.href.split("?")[0]);
    }

    // RETRIEVE SAVED NOTES
    if (localStorage.getItem("savedNotes") !== null) {
      savedForLater.innerHTML = localStorage.getItem("savedNotes");
      savedForLaterDetails.click();
      savedForLaterDetails.open = true;
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

    // Code Editor Theme
    if (localStorage.getItem("selectedCodeEditorTheme") !== null) {
      codeEditorTheme.value = localStorage.getItem("selectedCodeEditorTheme");
      noteHTMLCodeEditor.setTheme("ace/theme/" + codeEditorTheme.value);
      codeFileViewCodeEditor.setTheme("ace/theme/" + codeEditorTheme.value);
    }

    // Viewing and Editor Size
    if (localStorage.getItem("viewingSizeValue") !== null) {
      viewingSize.value = localStorage.getItem("viewingSizeValue");
      adjustViewingAndEditorSizes();
    }

    // Typing Target
    if (localStorage.getItem("storedTypingTarget") !== null) {
      if (localStorage.getItem("customTarget") === "false") {
        typingTarget.hidden = false;
        typingTarget.value = localStorage.getItem("storedTypingTarget");
      } else if (localStorage.getItem("customTarget") === "true") {
        customTypingTarget.hidden = false;
        customTypingTarget.value = localStorage.getItem("storedTypingTarget");
      }

      setTypingTarget.click();
      snackbar.style.display = "none";
    }

    appLoad.hidden = true;
  } catch (error) {
    throwAppError(error);
  }
}
