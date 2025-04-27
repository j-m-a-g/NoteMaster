function initiateNote(isOpen) {
  hideAndShow("createOrOpenContainer", "noteEditor");
  alterMenuFunctions(false);

  if (isOpen) {
    openNoteFileInput.addEventListener("change",
      function (event) {
        const workingFile = event.target.files[0];
        const fileReader = new FileReader();
        fileReader.onload = function (e) {
          const fileContents = e.target.result;
          console.log(fileContents);
          quill.clipboard.dangerouslyPasteHTML(fileContents);
        }
        fileReader.readAsText(workingFile);
      }
    );
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

function saveNoteProgress() {
  localStorage.setItem("noteProgress", quill.getSemanticHTML());
  localStorage.setItem("noteTitle", document.getElementById("noteName").value)
}

function downloadNote() {
  const currentNoteHTML = quill.getSemanticHTML();
  const noteFile = new Blob([currentNoteHTML], {type: "text/html"});
  noteDownloadLink.download = noteName.value;
  noteDownloadLink.href = URL.createObjectURL(noteFile);
  noteDownloadLink.click();
}
