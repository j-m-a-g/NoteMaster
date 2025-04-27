function tasksOnceFileOpen() {
  closeFile.disabled = false;
  noFileSelected.hidden = true;
  
  imageView.hidden = false;
}

function closeCurrentFile() {
  imageViewer.hidden = true;
  imageView.hidden = true;
  imageView.src = "";

  noFileSelected.hidden = false;
  viewersContainer.hidden = true;
  chooseViewer.hidden = false;
  closeFile.disabled = true;
}

function retryFileInput() {
  if (imageViewer.hidden === false) {
    imageFileInput.click();
  }
}
