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

    // Removes the "C:\fakepath\" prefix and ".htm" or ".html" suffix
    const trimFakePath = openNoteFileInput.value.replace("C:\\fakepath\\", "");
    const trimFileExtension = trimFakePath.replace(".htm", "");
    noteName.value = trimFileExtension.replace(".html", "");
  } else {
    // Resets the editor's state
    quill.setContents();
  }

  updateStatusBar();
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

  noteName.value = "";

  // Handles a pending task after the previous code has executed
  if (isOpeningAnotherNote) {
    openNoteFileInput.click();
    isOpeningAnotherNote = false;
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
}

function launchExample() {
  initiateNote(false);
  quill.clipboard.dangerouslyPasteHTML("<h1>The&nbsp;Business&nbsp;Cycle</h1><h3><strong>Overview</strong></h3><p>The&nbsp;business&nbsp;cycle&nbsp;examines&nbsp;the&nbsp;fluctuation&nbsp;of&nbsp;economic&nbsp;activity&nbsp;which&nbsp;repeats&nbsp;over&nbsp;time&nbsp;and&nbsp;explores&nbsp;the&nbsp;different&nbsp;stages&nbsp;of&nbsp;expansion&nbsp;and&nbsp;contraction.&nbsp;There&nbsp;are&nbsp;a&nbsp;number&nbsp;of&nbsp;<u>economic&nbsp;indicators</u>&nbsp;which&nbsp;measure&nbsp;prosperity,&nbsp;including:</p><ul><li>GDP</li><li>employment</li><li>profit</li><li>and&nbsp;interest&nbsp;rates.</li></ul><p>There&nbsp;are&nbsp;times&nbsp;when&nbsp;the&nbsp;business&nbsp;cycle&nbsp;is&nbsp;doing&nbsp;well&nbsp;with&nbsp;the&nbsp;economic&nbsp;indicators&nbsp;with&nbsp;high&nbsp;wages,&nbsp;booming&nbsp;GDP,&nbsp;and&nbsp;low&nbsp;unemployment&nbsp;rate&nbsp;(prosperity,&nbsp;boom,&nbsp;or&nbsp;peak).&nbsp;but&nbsp;a&nbsp;war,&nbsp;pandemic,&nbsp;tariffs,&nbsp;change&nbsp;in&nbsp;leadership,&nbsp;new&nbsp;innovation,&nbsp;and&nbsp;so&nbsp;forth.&nbsp;As&nbsp;a&nbsp;result,&nbsp;there&nbsp;are&nbsp;times&nbsp;where&nbsp;they&nbsp;are&nbsp;not&nbsp;doing&nbsp;well.</p><p></p><h3><strong>The&nbsp;1920s&nbsp;and&nbsp;1930s</strong></h3><p>During&nbsp;the&nbsp;1920s,&nbsp;the&nbsp;economic&nbsp;indicators&nbsp;were&nbsp;doing&nbsp;amazing&nbsp;for&nbsp;people.</p><p>On&nbsp;October&nbsp;29,&nbsp;1929,&nbsp;the&nbsp;<u>stock&nbsp;market&nbsp;crash</u>&nbsp;occurred,&nbsp;where&nbsp;prices&nbsp;went&nbsp;down&nbsp;and&nbsp;the&nbsp;economy&nbsp;abruptly&nbsp;dropped.&nbsp;On&nbsp;September&nbsp;1,&nbsp;1939,&nbsp;WWII&nbsp;begins,&nbsp;allowing&nbsp;the&nbsp;economy&nbsp;to&nbsp;start&nbsp;to&nbsp;recover&nbsp;because&nbsp;of&nbsp;the&nbsp;war&nbsp;effort.&nbsp;The&nbsp;ideal&nbsp;business&nbsp;cycle&nbsp;deals&nbsp;with&nbsp;changes&nbsp;that&nbsp;are&nbsp;not&nbsp;as&nbsp;drastic;&nbsp;i.e.&nbsp;minimizing&nbsp;the&nbsp;severity&nbsp;of&nbsp;periods&nbsp;of&nbsp;recession&nbsp;compared&nbsp;to&nbsp;those&nbsp;of&nbsp;prosperity.</p><p></p><h3><strong>Key&nbsp;Terms</strong></h3><p><em>GDP</em>:&nbsp;The&nbsp;amount&nbsp;or&nbsp;total&nbsp;output&nbsp;a&nbsp;country&nbsp;produces&nbsp;or&nbsp;provides&nbsp;services&nbsp;in&nbsp;a&nbsp;given&nbsp;year.</p><p></p><p><em>Economic&nbsp;Indicators</em>:&nbsp;Includes&nbsp;measures&nbsp;of&nbsp;prosperity&nbsp;such&nbsp;as&nbsp;wages,&nbsp;profit,&nbsp;GDP,&nbsp;employment,&nbsp;and&nbsp;interest&nbsp;rates.</p><p></p><p><em>Inflationary&nbsp;Period</em>:&nbsp;The&nbsp;economy&nbsp;begins&nbsp;to&nbsp;shrink&nbsp;and&nbsp;slow&nbsp;down&nbsp;as&nbsp;of&nbsp;inflation.&nbsp;Prices&nbsp;go&nbsp;up&nbsp;but&nbsp;wages&nbsp;remain&nbsp;the&nbsp;same.</p><p></p><p><em>Recession&nbsp;(Lasts&nbsp;from&nbsp;6&nbsp;months&nbsp;to&nbsp;1.5&nbsp;years)</em>:&nbsp;The&nbsp;economy&nbsp;has&nbsp;and&nbsp;economic&nbsp;indicators&nbsp;have&nbsp;really&nbsp;slowed&nbsp;down.&nbsp;Wages&nbsp;are&nbsp;low,&nbsp;probability&nbsp;is&nbsp;low,&nbsp;more&nbsp;people&nbsp;are&nbsp;out&nbsp;of&nbsp;work,&nbsp;and&nbsp;things&nbsp;become&nbsp;more&nbsp;expensive.</p><p></p><p><em>Trough</em>:&nbsp;Lowest&nbsp;point&nbsp;of&nbsp;economic&nbsp;movement.&nbsp;It&nbsp;is&nbsp;vitally&nbsp;struggling.&nbsp;We&nbsp;do&nbsp;not&nbsp;know&nbsp;when&nbsp;things&nbsp;are&nbsp;at&nbsp;its&nbsp;worst&nbsp;until&nbsp;the&nbsp;recovery&nbsp;period.</p><p></p><p><em>Recovery&nbsp;Period</em>:&nbsp;We&nbsp;cannot&nbsp;foretell&nbsp;what&nbsp;will&nbsp;improve&nbsp;the&nbsp;economy,,&nbsp;but&nbsp;companies&nbsp;might&nbsp;want&nbsp;to&nbsp;invest&nbsp;in&nbsp;a&nbsp;country&nbsp;or&nbsp;develop&nbsp;a&nbsp;new&nbsp;innovation&nbsp;to&nbsp;do&nbsp;so.</p><p></p><p><em>Depression&nbsp;(Lasts&nbsp;for&nbsp;over&nbsp;2&nbsp;years)</em>:&nbsp;Prolonged&nbsp;recession.</p><style>body { font-family: sans-serif } .ql-font-serif { font-family: serif } .ql-font-monospace { font-family: monospace }</style>");
  noteName.value = "Unit 3 - The Business Cycle Notes";
  updateStatusBar();
}

function updateStatusBar() {
  if (quill.getLength() === 1) {
    characterCount.innerHTML = "<span class='helperText'>Characters (Including spaces)</span> 0";
  } else {
    characterCount.innerHTML = "<span class='helperText'>Characters (Including spaces)</span> " + quill.getLength();
  }

  if (quill.getText() === "\n") {
    wordCount.innerHTML = "<span class='helperText'>Words</span> 0";
  } else {
    wordCount.innerHTML = "<span class='helperText'>Words</span> " + (quill.getText().split(/\s+/).length - 1);
  }
}
