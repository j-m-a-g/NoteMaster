function tasksOnceFileOpen(unhiddenView) {
  // Allows the user to have the option of closing the
  // viewed file and hides the "No File Selected" indication
  closeFile.disabled = false;
  noFileSelected.hidden = true;

  // Displays the viewer for the corresponding file type
  document.getElementById(unhiddenView).hidden = false;
}

function closeCurrentFile() {
  // Resets the state of all the file viewers
  pdfViewer.hidden = true;
  pdfView.hidden = true;
  pdfView.src = "";

  imageViewer.hidden = true;
  imageView.hidden = true;
  imageView.src = "";

  textViewer.hidden = true;
  textView.hidden = true;
  textView.innerHTML = "";
  textViewActions.hidden = true;

  webpageViewer.hidden = true;
  webpageView.hidden = true;
  webpageURLBar.value = "";

  noFileSelected.hidden = false;
  viewersContainer.hidden = true;
  chooseViewer.hidden = false;
  closeFile.disabled = true;
}

function readTextFile() {
  const workingFile = event.target.files[0];
  const fileReader = new FileReader();
  fileReader.onload = () => {
    const fileContents = fileReader.result;
    textView.innerHTML = fileContents;
  }
  fileReader.readAsText(workingFile);
}

function readHTMLNote() {
  const workingFile = event.target.files[0];
  const fileReader = new FileReader();
  fileReader.onload = () => {
    const fileContents = fileReader.result;
    anotherNoteViewQuill.clipboard.dangerouslyPasteHTML(fileContents);
  }
  fileReader.readAsText(workingFile);

  tasksOnceFileOpen("anotherNoteView");
}
