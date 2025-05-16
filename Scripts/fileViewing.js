const mammothJSOptions = {
  styleMap: [
    "table => table[class='wordDocumentTable']",
    "comment-reference => sup"
  ]
}

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
  pdfView.hidden = true;
  pdfView.src = "";
  pdfViewer.hidden = true;

  imageView.hidden = true;
  imageView.src = "";
  imageViewer.hidden = true;

  textView.hidden = true;
  textView.innerHTML = "";
  textViewActions.hidden = true;
  textViewer.hidden = true;

  wordDocumentView.hidden = true;
  wordDocumentView.innerHTML = "";
  wordDocumentViewer.hidden = true;

  webpageURLBar.value = "";
  webpageView.hidden = true;
  webpageView.src = "Pages/noWebpageNavigated.html";
  webpageViewer.hidden = true;

  URLToTubeVideo.value = "";
  tubeVideoView.hidden = true;
  tubeVideoView.src = "";
  tubeVideoViewer.hidden = true;

  chooseViewer.hidden = false;
  closeFile.disabled = true;
  noFileSelected.hidden = false;
  viewersContainer.hidden = true;
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

function readWordDocument() {
  const fileReader = new FileReader();
  fileReader.onload = (event) => {
    const arrayBuffer = event.target.result;
    mammoth.convertToHtml({arrayBuffer: arrayBuffer}, mammothJSOptions).then((result) => {
      wordDocumentView.innerHTML = result.value;
    }).catch(() => {
      throwAppError("The file you are trying to view does not seem like a Word document. Ensure the file extension is correct and try again.");
      closeCurrentFile();
    });
  }
  fileReader.readAsArrayBuffer(event.target.files[0]);
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

function checkURLInput(URLInputObject) {
  if (document.getElementById(URLInputObject).value === "") {
    document.getElementById("noURLWarning").hidden = false;
    return false
  } else {
    return true
  }
}
