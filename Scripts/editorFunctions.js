function initiateNote(isOpen) {
  hideAndShow("createOrOpenContainer", "noteEditor");
  alterMenuFunctions(false);

  if (isOpen) {
    const workingFile = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = () => {
      const fileContents = fileReader.result;
      quill.clipboard.dangerouslyPasteHTML(fileContents);
    }
    fileReader.readAsText(workingFile);
  } else {
    // Resets the editor's state
    quill.setContents();
  }
}

function confirmSave() {
  if (noteName.value !== "") {
    document.getElementById("saveDocumentHeading").innerHTML = "Save \'" + noteName.value + "\'?";
  } else {
    document.getElementById("saveDocumentHeading").innerHTML = "Save \'Untitled\'?";
  }

  // Determines whether the note editor is empty or the user
  // has inputted text
  if (quill.getLength() !== 1 || noteName.value !== "") {
    confirmSaveDialog.hidden = false;
  } else {
    hideAndShow("noteEditor", "createOrOpenContainer");
    alterMenuFunctions(true);
  }
}

function handleAnotherOpen() {
  if (quill.getLength() !== 1 || noteName.value !== "") {
    isOpeningAnotherNote = true;
    if (noteName.value !== "") {
      document.getElementById("saveDocumentHeading").innerHTML = "Save \'" + noteName.value + "\'?";
    } else {
      document.getElementById("saveDocumentHeading").innerHTML = "Save \'Untitled\'?";
    }

    confirmSaveDialog.hidden = false;
  } else {
    openNoteFileInput.click();
  }
}

function doNotSave() {
  hideAndShow('noteEditor', 'createOrOpenContainer');
  alterMenuFunctions(true);
  localStorage.setItem('noteProgress', '<p></p>');

  // Handles a pending task after the previous code has executed
  if (isOpeningAnotherNote) {
    openNoteFileInput.click();
    isOpeningAnotherNote = false;
  }
  if (isExiting) {
    window.close();
  }
}

function saveNoteProgress() {
  localStorage.setItem("noteProgress", quill.getSemanticHTML());
  localStorage.setItem("noteTitle", document.getElementById("noteName").value)
}

function downloadNote() {
  const currentNoteHTML = quill.getSemanticHTML();
  const noteFile = new Blob([currentNoteHTML + "<style>body { font-family: sans-serif } .ql-font-serif { font-family: serif } .ql-font-monospace { font-family: monospace }</style>"], {type: "text/html"});
  if (noteName.value === "") {
    noteDownloadLink.download = "Untitled";
  } else {
    noteDownloadLink.download = noteName.value;
  }
  noteDownloadLink.href = URL.createObjectURL(noteFile);
  noteDownloadLink.click();

  // Handles a pending task after the previous code has executed
  if (isOpeningAnotherNote) {
    openNoteFileInput.click();
  }
  if (isExiting) {
    window.close();
  }
}
