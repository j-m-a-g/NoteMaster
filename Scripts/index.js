const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],
  ['blockquote', 'code-block'],
  ['link', 'image', 'video', 'formula'],

  [{'list': 'ordered'}, {'list': 'bullet'}, {'list': 'check'}],
  [{'script': 'sub'}, {'script': 'super'}],
  [{'indent': '-1'}, {'indent': '+1'}],
  [{'direction': 'rtl'}],

  [{'header': [1, 2, 3, 4, false, 5, 6]}],

  [{'color': []}, {'background': []}],
  [{'font': []}],
  [{'align': []}],

  ['clean']
];

const quill = new Quill('#editor', {
  modules: {
    toolbar: toolbarOptions
  },
  placeholder: "Start your note-taking here",
  theme: 'snow'
});

const fileMenu = document.getElementById("fileMenu");
const editMenu = document.getElementById("editMenu");
const helpMenu = document.getElementById("helpMenu");

const noteName = document.getElementById("noteName");
const confirmSaveDialog = document.getElementById("confirmSaveDialog");

const dialogFocusBackground = document.getElementById("dialogFocusBackground");

function onLoadTasks() {
  if (localStorage.getItem("noteProgress") !== "<p></p>") {
    hideAndShow("createOrOpenContainer", "noteEditor");
    quill.clipboard.dangerouslyPasteHTML(localStorage.getItem("noteProgress"));

    noteName.value = localStorage.getItem('noteTitle');
    alterMenuFunctions(false);
  }
}

function hideAndShow(hiddenContainer, shownContainer) {
  document.getElementById(hiddenContainer).hidden = true;
  document.getElementById(shownContainer).hidden = false;
}

function toggleDialog(isShown, currentDialog) {
  switch (isShown) {
    case true:
      dialogFocusBackground.hidden = false;
      document.getElementById(currentDialog).hidden = false;
      break;
    case false:
      dialogFocusBackground.hidden = true;
      document.getElementById(currentDialog).hidden = true;
      break;
  }
}

function hideAllMenuDropdowns() {
  fileMenu.hidden = true;
  editMenu.hidden = true;
  helpMenu.hidden = true;
}

function alterMenuFunctions(isDisabled) {
  document.getElementById("save").disabled = isDisabled;
  document.getElementById("downloadNote").disabled = isDisabled;
  document.getElementById("closeNote").disabled = isDisabled;
}

function initiateNote(createNote) {
  switch (createNote) {
    case true:
      hideAndShow("createOrOpenContainer", "noteEditor");
      break;
    case false:
      break;
  }

  alterMenuFunctions(false);
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
