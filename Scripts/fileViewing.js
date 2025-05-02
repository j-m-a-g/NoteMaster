function tasksOnceFileOpen(unhiddenView) {
  closeFile.disabled = false;
  noFileSelected.hidden = true;

  document.getElementById(unhiddenView).hidden = false;
}

function closeCurrentFile() {
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
