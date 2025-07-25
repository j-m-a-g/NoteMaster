function initiateNote(isOpen) {
  hideAndShow("createOrOpenContainer", "noteEditor");
  alterMenuFunctions(false);

  switch (isOpen) {
    case true:
      const fileReader = new FileReader();
      fileReader.onload = () => {
        quill.clipboard.dangerouslyPasteHTML(fileReader.result);
      };

      fileReader.readAsText(event.target.files[0]);
      // Removes the "C:\fakepath\" prefix and ".htm" or ".html" suffix as
      // well as periods
      noteName.value = openNoteFileInput.value
        .replaceAll("C:\\fakepath\\", "")
        .replaceAll(".htm", "")
        .replaceAll(".html", "")
        .replaceAll(".", "");
      break;
    case false:
      // Resets the editor's state
      quill.setContents();
      break;
  }

  updateStatusBar();
  alterWindowTitle(false);
}

function confirmSave() {
  if (noteName.value !== "") {
    document.getElementById("saveDocumentHeading").innerHTML =
      `Save '${noteName.value}'?`;
  } else {
    document.getElementById("saveDocumentHeading").innerHTML =
      "Save 'Untitled'?";
  }

  // Determines whether the note editor is empty or the user
  // has inputted text
  if (quill.getLength() !== 1 || noteName.value !== "") {
    confirmSaveDialog.hidden = false;
  } else {
    hideAndShow("noteEditor", "createOrOpenContainer");
    alterMenuFunctions(true);
    alterWindowTitle(true);
  }
}

function handleAnotherOpen() {
  if (quill.getLength() !== 1 || noteName.value !== "") {
    isOpeningAnotherNote = true;
    if (noteName.value !== "") {
      document.getElementById("saveDocumentHeading").innerHTML =
        `Save '${noteName.value}?'`;
    } else {
      document.getElementById("saveDocumentHeading").innerHTML =
        "Save 'Untitled'?";
    }

    confirmSaveDialog.hidden = false;
  } else {
    openNoteFileInput.click();
  }
}

function doNotSave() {
  hideAndShow("noteEditor", "createOrOpenContainer");
  alterMenuFunctions(true);
  alterWindowTitle(true);

  localStorage.setItem("noteProgress", "<p></p>");
  noteName.value = "";

  // Handles a pending task after the previous code has executed
  if (isOpeningAnotherNote) {
    openNoteFileInput.click();
    isOpeningAnotherNote = false;
  }
}

function saveNoteProgress() {
  localStorage.setItem("noteProgress", quill.getSemanticHTML());
  localStorage.setItem("noteTitle", document.getElementById("noteName").value);
  displaySnackbar("Saved note progress!");
}

function printNoteOperation() {
  const temporaryPrintWindow = window.open("", "_blank", "popup");
  temporaryPrintWindow.document.write(
    `${downloadNotePrefixAndSuffix[0]}${quill.getSemanticHTML()}${downloadNotePrefixAndSuffix[1]}`
  );
  temporaryPrintWindow.document.close();
  temporaryPrintWindow.print();
}

function downloadNoteOperation(asPlainText) {
  let noteFile;

  if (asPlainText) {
    noteFile = new Blob([quill.getText()], { type: "text/plain" });
  } else {
    noteFile = new Blob(
      [
        `${downloadNotePrefixAndSuffix[0]}${quill.getSemanticHTML()}${downloadNotePrefixAndSuffix[1]}`
      ],
      { type: "text/html" }
    );
  }

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
}

function convertWordToNote() {
  const fileReader = new FileReader();
  fileReader.onload = async (event) => {
    mammoth
      .convertToHtml({ arrayBuffer: event.target.result }, mammothJSOptions)
      .then((result) => {
        convertedFileOutput = result.value;
        downloadConvertedNote.hidden = false;
      })
      .catch(() => {
        throwAppError(
          "The file you are trying to view does not seem like a Word document. Ensure the file extension is correct and try again."
        );
        closeCurrentFile();
        wordDocumentToNoteButton.disabled = false;
      });
  };

  fileReader.readAsArrayBuffer(event.target.files[0]);
}

// Executes after the convertWordToNote function as the fileReader.onload event is
// asynchronous
function downloadConversion() {
  const convertedFileOutputBlob = new Blob(
    [
      `${downloadNotePrefixAndSuffix[0]}${convertedFileOutput.toString()}${downloadNotePrefixAndSuffix[1]}`
    ],
    { type: "text/html" }
  );
  noteDownloadLink.download = convertWordToNoteInput.value
    .replaceAll("C:\\fakepath\\", "")
    .replaceAll(".docx", "")
    .replaceAll(".doc", "");
  noteDownloadLink.href = URL.createObjectURL(convertedFileOutputBlob);
  noteDownloadLink.click();

  downloadConvertedNote.hidden = true;
  wordDocumentToNoteButton.disabled = false;
}

function launchExample() {
  initiateNote(false);
  quill.clipboard.dangerouslyPasteHTML(
    "<h1 class='ql-align-center'>The&nbsp;Business&nbsp;Cycle</h1><h3><strong>Overview</strong></h3><p>The&nbsp;business&nbsp;cycle&nbsp;examines&nbsp;the&nbsp;fluctuation&nbsp;of&nbsp;economic&nbsp;activity&nbsp;which&nbsp;repeats&nbsp;over&nbsp;time&nbsp;and&nbsp;explores&nbsp;the&nbsp;different&nbsp;stages&nbsp;of&nbsp;expansion&nbsp;and&nbsp;contraction.&nbsp;There&nbsp;are&nbsp;a&nbsp;number&nbsp;of&nbsp;<u>economic&nbsp;indicators</u>&nbsp;which&nbsp;measure&nbsp;prosperity,&nbsp;including:</p><ul><li>GDP</li><li>employment</li><li>profit</li><li>and&nbsp;interest&nbsp;rates.</li></ul><p>There&nbsp;are&nbsp;times&nbsp;when&nbsp;the&nbsp;business&nbsp;cycle&nbsp;is&nbsp;doing&nbsp;well&nbsp;with&nbsp;the&nbsp;economic&nbsp;indicators&nbsp;with&nbsp;high&nbsp;wages,&nbsp;booming&nbsp;GDP,&nbsp;and&nbsp;low&nbsp;unemployment&nbsp;rate&nbsp;(prosperity,&nbsp;boom,&nbsp;or&nbsp;peak).&nbsp;But&nbsp;a&nbsp;war,&nbsp;pandemic,&nbsp;tariffs,&nbsp;change&nbsp;in&nbsp;leadership,&nbsp;new&nbsp;innovation,&nbsp;and&nbsp;so&nbsp;forth.&nbsp;As&nbsp;a&nbsp;result,&nbsp;there&nbsp;are&nbsp;times&nbsp;where&nbsp;they&nbsp;are&nbsp;not&nbsp;doing&nbsp;well.</p><p></p><h3><strong>The&nbsp;1920s&nbsp;and&nbsp;1930s</strong></h3><p>During&nbsp;the&nbsp;1920s,&nbsp;the&nbsp;economic&nbsp;indicators&nbsp;were&nbsp;doing&nbsp;amazing&nbsp;for&nbsp;people.</p><p>On&nbsp;October&nbsp;29,&nbsp;1929,&nbsp;the&nbsp;<u>stock&nbsp;market&nbsp;crash</u>&nbsp;occurred,&nbsp;where&nbsp;prices&nbsp;went&nbsp;down&nbsp;and&nbsp;the&nbsp;economy&nbsp;abruptly&nbsp;dropped.&nbsp;On&nbsp;September&nbsp;1,&nbsp;1939,&nbsp;WWII&nbsp;begins,&nbsp;allowing&nbsp;the&nbsp;economy&nbsp;to&nbsp;start&nbsp;to&nbsp;recover&nbsp;because&nbsp;of&nbsp;the&nbsp;war&nbsp;effort.&nbsp;The&nbsp;ideal&nbsp;business&nbsp;cycle&nbsp;deals&nbsp;with&nbsp;changes&nbsp;that&nbsp;are&nbsp;not&nbsp;as&nbsp;drastic;&nbsp;i.e.&nbsp;minimizing&nbsp;the&nbsp;severity&nbsp;of&nbsp;periods&nbsp;of&nbsp;recession&nbsp;compared&nbsp;to&nbsp;those&nbsp;of&nbsp;prosperity.</p><p></p><h3><strong>Key&nbsp;Terms</strong></h3><table style='border: 1px solid #000;'><tbody><tr><td data-row='1'><em>Term</em></td><td data-row='1'><em>Definition</em></td></tr><tr><td data-row='2'>GDP</td><td data-row='2'>The&nbsp;amount&nbsp;or&nbsp;total&nbsp;output&nbsp;a&nbsp;country&nbsp;produces&nbsp;or&nbsp;provides&nbsp;services&nbsp;in&nbsp;a&nbsp;given&nbsp;year.</td></tr><tr><td data-row='3'>Economic&nbsp;Indicator</td><td data-row='3'>Includes&nbsp;measures&nbsp;of&nbsp;prosperity&nbsp;such&nbsp;as&nbsp;wages,&nbsp;profit,&nbsp;GDP,&nbsp;employment,&nbsp;and&nbsp;interest&nbsp;rates.</td></tr><tr><td data-row='4'>Inflationary&nbsp;Period</td><td data-row='4'>The&nbsp;economy&nbsp;begins&nbsp;to&nbsp;shrink&nbsp;and&nbsp;slow&nbsp;down&nbsp;as&nbsp;of&nbsp;inflation.&nbsp;Prices&nbsp;go&nbsp;up&nbsp;but&nbsp;wages&nbsp;remain&nbsp;the&nbsp;same.</td></tr><tr><td data-row='5'>Recession&nbsp;(Lasts&nbsp;from&nbsp;6&nbsp;months&nbsp;to&nbsp;1.5&nbsp;years)</td><td data-row='5'>The&nbsp;economy&nbsp;has&nbsp;and&nbsp;economic&nbsp;indicators&nbsp;have&nbsp;really&nbsp;slowed&nbsp;down.&nbsp;Wages&nbsp;are&nbsp;low,&nbsp;probability&nbsp;is&nbsp;low,&nbsp;more&nbsp;people&nbsp;are&nbsp;out&nbsp;of&nbsp;work,&nbsp;and&nbsp;things&nbsp;become&nbsp;more&nbsp;expensive.</td></tr><tr><td data-row='6'>Trough</td><td data-row='6'>Lowest&nbsp;point&nbsp;of&nbsp;economic&nbsp;movement.&nbsp;It&nbsp;is&nbsp;vitally&nbsp;struggling.&nbsp;We&nbsp;do&nbsp;not&nbsp;know&nbsp;when&nbsp;things&nbsp;are&nbsp;at&nbsp;its&nbsp;worst&nbsp;until&nbsp;the&nbsp;recovery&nbsp;period.</td></tr><tr><td data-row='7'>Recovery&nbsp;Period</td><td data-row='7'>We&nbsp;cannot&nbsp;foretell&nbsp;what&nbsp;will&nbsp;improve&nbsp;the&nbsp;economy,&nbsp;but&nbsp;companies&nbsp;might&nbsp;want&nbsp;to&nbsp;invest&nbsp;in&nbsp;a&nbsp;country&nbsp;or&nbsp;develop&nbsp;a&nbsp;new&nbsp;innovation&nbsp;to&nbsp;do&nbsp;so.</td></tr><tr><td data-row='8'>Depression&nbsp;(Lasts&nbsp;for&nbsp;over&nbsp;2&nbsp;years)</td><td data-row='8'>Prolonged&nbsp;recession</td></tr></tbody></table>"
  );
  noteName.value = "Unit 3 - The Business Cycle Notes";
  updateStatusBar();
  alterWindowTitle(false);
}

function updateStatusBar() {
  if (quill.getLength() === 1) {
    characterCount.innerHTML =
      "<span class='helperText'>Characters (Including spaces) </span> <span class='copyOnClick' onclick='navigator.clipboard.writeText(this.innerHTML); displaySnackbar(copiedToClipboardString)'>0</span>";
  } else {
    characterCount.innerHTML = `<span class='helperText'>Characters (Including spaces) </span> <span class='copyOnClick' onclick='navigator.clipboard.writeText(this.innerHTML); displaySnackbar(copiedToClipboardString)'>${quill.getLength()}</span>`;
  }

  if (quill.getText() === "\n") {
    wordCount.innerHTML =
      "<span class='helperText'>Words </span> <span class='copyOnClick' onclick='navigator.clipboard.writeText(this.innerHTML); displaySnackbar(copiedToClipboardString)'>0</span>";
  } else {
    wordCount.innerHTML = `<span class='helperText'>Words </span> <span class='copyOnClick' onclick='navigator.clipboard.writeText(this.innerHTML); displaySnackbar(copiedToClipboardString)'>${quill.getText().split(/\s+/).length - 1}</span>`;
  }

  mainEditorZoom.innerHTML = `<span class='helperText'>Zoom </span>${Math.floor((mainEditorFontSize / 13) * 100)}%`;
}

function prepareToShare() {
  const linkParameters = new URLSearchParams(
    `name=${noteName.value}&markup=${quill.getSemanticHTML()}`
  );
  shareCopyLink.value = `${window.location.href}?${linkParameters.toString().replaceAll("&", "%26").replace("%26", "&").replace("=", "paramEqual").replace("=", "paramEqual").replaceAll("=", "").replaceAll("paramEqual", "=")}`;
}

function saveNoteForLater() {
  const savedNoteContainer = document.createElement("div");
  const notePreviewContainer = document.createElement("div");
  const notePreview = document.createElement("span");
  const noteTitleContainer = document.createElement("div");
  const noteTitle = document.createElement("span");
  const noteTitleDate = document.createElement("span");
  const deleteSaved = document.createElement("a");

  savedNoteContainer.className = "savedNote";

  notePreviewContainer.className = "savedNotePreview";
  notePreview.className = "savedNotePreview helperText";
  notePreview.innerHTML = quill.getText();

  noteTitleContainer.className = "savedNoteTitle";
  noteTitle.className = "savedNoteTitle";
  if (noteName.value === "") {
    noteTitle.innerHTML = "Untitled";
  } else {
    noteTitle.innerHTML = noteName.value;
  }

  noteTitle.title = noteTitle.innerHTML;

  noteTitleDate.className = "helperText";
  noteTitleDate.innerHTML = `Saved ${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()} at ${get12HourTime()}`;

  deleteSaved.className = "hyperlinkButton";
  deleteSaved.innerHTML = "Delete";

  savedNoteContainer.setAttribute(
    "onclick",
    `initiateNote(false); quill.clipboard.dangerouslyPasteHTML('${quill.getSemanticHTML()}'); noteName.value = '${noteTitle.innerHTML}'`
  );
  deleteSaved.setAttribute(
    "onclick",
    "(this.parentNode).parentNode.removeAttribute('onclick'); savedForLater.removeChild((this.parentNode).parentNode); localStorage.setItem('savedNotes', savedForLater.innerHTML); displaySnackbar('Note deleted')"
  );

  notePreviewContainer.appendChild(notePreview);
  noteTitleContainer.appendChild(noteTitle);
  noteTitleContainer.appendChild(noteTitleDate);
  noteTitleContainer.appendChild(document.createElement("br"));
  noteTitleContainer.appendChild(deleteSaved);

  savedNoteContainer.appendChild(notePreviewContainer);
  savedNoteContainer.appendChild(noteTitleContainer);
  savedForLater.appendChild(savedNoteContainer);

  doNotSave();
  confirmSaveDialog.hidden = true;
  savedForLaterDetails.click();
  savedForLaterDetails.open = true;
  localStorage.setItem("savedNotes", savedForLater.innerHTML);
}

function saveWritingCounts() {
  addedWordCountArray = JSON.parse(localStorage.getItem("totalWordCountArray"));
  addedWordCountArray.push(quill.getText().split(/\s+/).length - 1);
  if (addedWordCountArray.length >= 2) {
    addedWordCount += Math.abs(addedWordCountArray[1] - addedWordCountArray[0]);
    addedWordCountArray.splice(0, 1);
    localStorage.setItem("totalWordCount", addedWordCount);
  } else {
    addedWordCount += addedWordCountArray[0];
  }

  addedCharacterCountArray = JSON.parse(
    localStorage.getItem("totalCharacterCountArray")
  );
  addedCharacterCountArray.push(quill.getLength());
  if (addedCharacterCountArray.length >= 2) {
    addedCharacterCount += Math.abs(
      addedCharacterCountArray[1] - addedCharacterCountArray[0]
    );
    addedCharacterCountArray.splice(0, 1);
    localStorage.setItem("totalCharacterCount", addedCharacterCount);
  } else {
    addedCharacterCount += addedCharacterCountArray[0];
  }

  localStorage.setItem("totalWordCount", addedWordCount);
  localStorage.setItem(
    "totalWordCountArray",
    JSON.stringify(addedWordCountArray)
  );
  localStorage.setItem("totalCharacterCount", addedCharacterCount);
  localStorage.setItem(
    "totalCharacterCountArray",
    JSON.stringify(addedCharacterCountArray)
  );

  // Check if the user has reached their typing target if set
  if (localStorage.getItem("storedTypingTarget") !== null) {
    if (
      wordsOrCharacters.value === "words" &&
      Number(localStorage.getItem("totalWordCount")) >=
        Number(localStorage.getItem("storedTypingTarget"))
    ) {
      displaySnackbar("Typing Target reached");
      typingTarget.disabled = false;
      customTypingTarget.disabled = false;
      wordsOrCharacters.disabled = false;
      resetTypingTarget.hidden = true;
      setTypingTarget.hidden = false;
      localStorage.setItem("storedTypingTarget", null);
      localStorage.setItem("customTarget", true);
    } else if (
      wordsOrCharacters.value === "characters" &&
      Number(localStorage.getItem("totalCharacterCount")) >=
        Number(localStorage.getItem("storedTypingTarget"))
    ) {
      displaySnackbar("Typing Target reached");
      typingTarget.disabled = false;
      customTypingTarget.disabled = false;
      wordsOrCharacters.disabled = false;
      resetTypingTarget.hidden = true;
      setTypingTarget.hidden = false;
      localStorage.setItem("storedTypingTarget", null);
      localStorage.setItem("customTarget", true);
    }
  }
}

function displayWritingInsights() {
  totalWordCountDisplay.innerHTML = localStorage.getItem("totalWordCount");
  shiftProgressValue(
    "wordCountVisual",
    0,
    localStorage.getItem("totalWordCount"),
    2
  );
  wordCountVisual.max = 10 ** localStorage.getItem("totalWordCount").length;
  wordCountVisualMax.innerHTML = wordCountVisual.max;

  totalCharacterCountDisplay.innerHTML = localStorage.getItem(
    "totalCharacterCount"
  );
  shiftProgressValue(
    "characterCountVisual",
    0,
    localStorage.getItem("totalCharacterCount"),
    10
  );
  characterCountVisual.max =
    10 ** localStorage.getItem("totalCharacterCount").length;
  characterCountVisualMax.innerHTML = characterCountVisual.max;
}

function configureTypingGoal(isReset) {
  typingTarget.disabled = !isReset;
  customTypingTarget.disabled = !isReset;
  wordsOrCharacters.disabled = !isReset;

  switch (isReset) {
    case true:
      resetTypingTarget.hidden = isReset;
      setTypingTarget.hidden = !isReset;
      localStorage.setItem("storedTypingTarget", null);
      localStorage.setItem("customTarget", !isReset);
      displaySnackbar("Typing target reset");
      break;
    case false:
      setTypingTarget.hidden = !isReset;
      resetTypingTarget.hidden = isReset;
      if (typingTarget.hidden === true) {
        localStorage.setItem("storedTypingTarget", customTypingTarget.value);
        localStorage.setItem("customTarget", isReset);
      } else {
        localStorage.setItem("storedTypingTarget", typingTarget.value);
        localStorage.setItem("customTarget", !isReset);
      }

      localStorage.setItem("typingTargetQuantity", wordsOrCharacters.value);

      displaySnackbar("Typing target set");
      break;
  }
}

function addDownloadNoteStyle(styleSelector, styleRule) {
  downloadNotePrefixAndSuffix[1] = `${downloadNotePrefixAndSuffix[1].replace("</style>", "")} ${styleSelector} { ${styleRule} }`;
}

function applyPageSetup(resetToDefault) {
  // Resets the state of the <style> tag used for altering
  // the page's default styling
  pageSetupStyle.innerHTML = "";
  downloadNotePrefixAndSuffix[1] = originalDownloadSuffix;

  if (resetToDefault) {
    // Headings
    for (let headingNumber = 0; headingNumber < 7; headingNumber++) {
      const headingVariable = `heading${headingNumber}`;
      let currentFontSize = 0;

      document.getElementById(`${headingVariable}Family`).value = "sans-serif";
      switch (headingNumber) {
        case 0:
          currentFontSize = 13;
          break;
        case 1:
          currentFontSize = 26;
          break;
        case 2:
          currentFontSize = 19.5;
          break;
        case 3:
          currentFontSize = 15;
          break;
        case 4:
          currentFontSize = 13;
          break;
        case 5:
          currentFontSize = 10.75;
          break;
        case 6:
          currentFontSize = 8.75;
          break;
      }

      document.getElementById(`${headingVariable}Color`).value = "#000000";
      document.getElementById(`${headingVariable}Size`).value = currentFontSize;
      document.getElementById(`${headingVariable}Bold`).checked = false;
      document.getElementById(`${headingVariable}Italics`).checked = false;
      document.getElementById(`${headingVariable}Strike`).checked = false;
    }

    // Page Background and Text Color
    pageBackgroundColor.value = "#FFFFFF";
    pageTextColor.value = "#000000";

    mainEditor.removeAttribute("style");
    downloadNotePrefixAndSuffix[1] = originalDownloadSuffix;
  } else {
    // Headings
    for (let headingNumber = 0; headingNumber < 7; headingNumber++) {
      const headingVariable = `heading${headingNumber}`;
      let headingName = "";

      if (headingNumber === 0) {
        headingName = "p";
      } else {
        headingName = `h${headingNumber}`;
      }

      pageSetupStyle.innerHTML += `#mainEditor ${headingName} { font-family: ${document.getElementById(`${headingVariable}Family`).value}; font-size: ${document.getElementById(`${headingVariable}Size`).value}px; color: ${document.getElementById(`${headingVariable}Color`).value} }`;
      addDownloadNoteStyle(
        headingName,
        `font-family: ${document.getElementById(`${headingVariable}Family`).value}; font-size: ${document.getElementById(`${headingVariable}Size`).value}px; color: ${document.getElementById(`${headingVariable}Color`).value}`
      );

      if (document.getElementById(`${headingVariable}Bold`).checked) {
        pageSetupStyle.innerHTML += `#mainEditor ${headingName} { font-weight: bold } `;
        addDownloadNoteStyle(headingName, "font-weight: bold");
      } else {
        pageSetupStyle.innerHTML += `#mainEditor ${headingName} { font-weight: normal } `;
        addDownloadNoteStyle(headingName, "font-weight: normal");
      }

      if (document.getElementById(`${headingVariable}Italics`).checked) {
        pageSetupStyle.innerHTML += `#mainEditor ${headingName} { font-style: italic } `;
        addDownloadNoteStyle(headingName, "font-style: italic");
      } else {
        pageSetupStyle.innerHTML += `#mainEditor ${headingName} { font-style: normal } `;
        addDownloadNoteStyle(headingName, "font-style: normal");
      }

      if (document.getElementById(`${headingVariable}Strike`).checked) {
        pageSetupStyle.innerHTML += `#mainEditor ${headingName} { text-decoration: line-through } `;
        addDownloadNoteStyle(headingName, "text-decoration-line: line-through");
      } else {
        pageSetupStyle.innerHTML += `#mainEditor ${headingName} { text-decoration: none } `;
        addDownloadNoteStyle(headingName, "text-decoration: none");
      }
    }

    // Page Background and Text Color
    mainEditor.style.backgroundColor = pageBackgroundColor.value;
    mainEditor.style.color = pageTextColor.value;
    addDownloadNoteStyle(
      "html",
      `background-color: ${pageBackgroundColor.value}; color: ${pageTextColor.value}`
    );
  }

  toggleDialog(false, "pageSetup", null);
  displaySnackbar("Page setup applied");
}
