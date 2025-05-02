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

  noFileSelected.hidden = false;
  viewersContainer.hidden = true;
  chooseViewer.hidden = false;
  closeFile.disabled = true;
}
