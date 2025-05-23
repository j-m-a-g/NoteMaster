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

  onlineDesignView.hidden = true;
  onlineDesignView.src = "";
  onlineDesignViewer.hidden = true;

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
  additionalVideoControls.hidden = true;

  webpageURLBar.value = "";
  webpageView.hidden = true;
  webpageView.src = "Pages/noWebpageNavigated.html";
  webpageViewer.hidden = true;

  incorrectWordFormatting.hidden = true;
  wordDocumentView.hidden = true;
  wordDocumentView.innerHTML = "";
  wordDocumentViewer.hidden = true;

  codeFileViewer.hidden = true;
  codeFileView.hidden = true;
  codeFileViewerStatusBar.hidden = true;

  cloudFileView.hidden = true;
  cloudFileView.src = "";
  cloudFileViewer.hidden = true;

  closeFile.disabled = true;
  chooseViewer.hidden = false;
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

function viewCodeFile() {
  const fileReader = new FileReader();
  fileReader.onload = () => {
    codeFileViewCodeEditor.session.setValue(fileReader.result);
  }
  fileReader.readAsText(event.target.files[0]);

  codeFileViewerStatusBar.hidden = false;
  tasksOnceFileOpen("codeFileView", "codeFileInput");
}

function checkURLInput(URLInputObject) {
  if (document.getElementById(URLInputObject).value === "") {
    document.getElementById("noURLWarning").hidden = false;
    return false
  } else {
    return true
  }
}

function parseCloudDocumentURL() {
  if (checkURLInput('URLToCloudFile')) {
    if (onedriveOrigin.checked) {
      const DriveURLArray = URLToCloudFile.value.split("");
      let resultingURL = "";

      // Removes the URL arguments that come after the path to
      // the document (i.e. after "&action")
      for (let a = 0; a < DriveURLArray.length; a++) {
        if (DriveURLArray[a] === "&" && DriveURLArray[a + 1] === "a" && DriveURLArray[a + 2] === "c" && DriveURLArray[a + 3] === "t" && DriveURLArray[a + 4] === "i" && DriveURLArray[a + 5] === "o" && DriveURLArray[a + 6] === "n") {
          while (true) {
            if (a !== DriveURLArray.length) {
              DriveURLArray[a] = "";
              a++;
            } else {
              break;
            }
          }
        }
      }

      for (let c = 0; c < DriveURLArray.length; c++) {
        resultingURL += DriveURLArray[c];
      }

      toggleDialog(false, "insertCloudURLDialog");
      cloudFileView.src = resultingURL + "&action=embedview";
    } else {
      const GoogleURLArray = URLToCloudFile.value.replace("https://docs.google.com/", "").replace("https://drive.google.com", "").split("");
      let documentID = "";

      // Parses the URL to retrieve the document ID
      for (let b = 0; b < GoogleURLArray.length; b++) {
        if (GoogleURLArray[b - 1] === "/" && GoogleURLArray[b] === "d" && GoogleURLArray[b + 1] === "/") {
          while (true) {
            if (GoogleURLArray[b + 2] !== "/") {
              documentID += GoogleURLArray[b];
              b++;
            } else {
              documentID += GoogleURLArray[b];
              documentID += GoogleURLArray[b + 1];
              break;
            }
          }
        }
      }

      // Throws an error if documentID has not been changed from
      // its original declaration
      if (documentID === "") {
        toggleDialog(false, "insertCloudURLDialog");
        throwAppError("This Google Drive document URL is invalid. Please ensure you are copying the link to it from your browser's address bar and try again");
        closeCurrentFile();
      } else {
        toggleDialog(false, "insertCloudURLDialog");
        cloudFileView.src = "https://docs.google.com/viewer?srcid=" + documentID.replace("d/", "") + "&pid=explorer&efh=false&a=v&chrome=false&embedded=true";
      }
    }

    toggleViewer(true, "cloudFileViewer");
    tasksOnceFileOpen("cloudFileView", null);
    addHistoryEntry("URLToCloudFile");
  }
}
