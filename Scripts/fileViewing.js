const mammothJSOptions = {
  styleMap: [
    "table => table[class='wordDocumentTable']",
    "comment-reference => sup"
  ]
}

function tasksOnceFileOpen(unhiddenView, fileInputObject) {
  // Allows the user to have the option of closing the
  // viewed file and hides the "No File Selected" indication
  closeFile.disabled = false;
  noFileSelected.hidden = true;

  // Displays the viewer for the corresponding file type
  document.getElementById(unhiddenView).hidden = false;

  if (document.getElementById(fileInputObject) !== null) {
    fileName.innerHTML = document.getElementById(fileInputObject).value.replace("C:\\fakepath\\", "");

    fileSize.innerHTML = ((event.target.files[0].size) / 1048576).toFixed(2) + " MB";
    fileLastModified.innerHTML = new Date(event.target.files[0].lastModified).toString().slice(0, 21);
  } else {
    viewerStatusBar.hidden = true;
  }

  // Adds the current file to Viewing History
  if (fileName.innerHTML !== "---") {
    fileViewingHistoryNames.push(fileName.innerHTML);
  }
  fileViewingHistoryTimes.push(get12HourTime());
}

function closeCurrentFile() {
  // Resets the state of all the file viewers
  URLToTubeVideo.value = "";
  tubeVideoView.hidden = true;
  tubeVideoView.src = "";
  tubeVideoViewer.hidden = true;
  anotherNoteView.hidden = true;
  anotherNoteViewQuill.setContents();
  anotherNoteViewer.hidden = true;
  imageView.hidden = true;
  imageView.src = "";
  imageViewer.hidden = true;
  pdfView.hidden = true;
  pdfView.src = "";
  pdfViewer.hidden = true;
  textView.hidden = true;
  textView.innerHTML = "";
  textViewActions.hidden = true;
  textViewer.hidden = true;
  videoView.hidden = true;
  videoView.src = "";
  videoViewer.hidden = true;
  webpageURLBar.value = "";
  webpageView.hidden = true;
  webpageView.src = "Pages/noWebpageNavigated.html";
  webpageViewer.hidden = true;
  wordDocumentView.hidden = true;
  wordDocumentView.innerHTML = "";
  wordDocumentViewer.hidden = true;

  chooseViewer.hidden = false;
  closeFile.disabled = true;
  noFileSelected.hidden = false;
  viewerStatusBar.hidden = false;
  viewersContainer.hidden = true;

  // Resets the state of the status bar
  fileName.innerHTML = "---";
  fileSize.innerHTML = "---";
  fileLastModified.innerHTML = "---";
}

function readTextFile() {
  const fileReader = new FileReader();
  fileReader.onload = () => {
    textView.innerHTML = fileReader.result;
  }
  fileReader.readAsText(event.target.files[0]);
}

function readWordDocument() {
  const fileReader = new FileReader();
  fileReader.onload = (event) => {
    mammoth.convertToHtml({arrayBuffer: event.target.result}, mammothJSOptions).then((result) => {
      wordDocumentView.innerHTML = result.value;
    }).catch(() => {
      throwAppError("The file you are trying to view does not seem like a Word document. Ensure the file extension is correct and try again.");
      closeCurrentFile();
    });
  }
  fileReader.readAsArrayBuffer(event.target.files[0]);
}

function readHTMLNote() {
  const fileReader = new FileReader();
  fileReader.onload = () => {
    anotherNoteViewQuill.clipboard.dangerouslyPasteHTML(fileReader.result);
  }
  fileReader.readAsText(event.target.files[0]);

  tasksOnceFileOpen("anotherNoteView", 'anotherNoteFileInput');
}

function checkURLInput(URLInputObject) {
  if (document.getElementById(URLInputObject).value === "") {
    document.getElementById("noURLWarning").hidden = false;
    return false
  } else {
    return true
  }
}
