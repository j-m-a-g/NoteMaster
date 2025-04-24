const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  ['blockquote', 'code-block'],
  ['link', 'image', 'video', 'formula'],

  [{ 'header': 1 }, { 'header': 2 }],               // custom button values
  [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'list': 'check' }],
  [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
  [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
  [{ 'direction': 'rtl' }],                         // text direction

  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  [{ 'font': [] }],
  [{ 'align': [] }],

  ['clean']                                         // remove formatting button
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

const editor = document.getElementById("editor");
const noteName = document.getElementById("noteName");
const confirmSaveDialog = document.getElementById("confirmSaveDialog");

const dialogFocusBackground = document.getElementById("dialogFocusBackground");

function onLoadTasks() {
  if (localStorage.getItem("noteProgress") != "<p></p>") {
    hideAndShow("createOrOpenContainer", "noteEditor");
    quill.clipboard.dangerouslyPasteHTML(localStorage.getItem("noteProgress"));

    noteName.value = localStorage.getItem('noteTitle');
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

function toggleMenuDropdown(currentDropdown) {
  if (document.getElementById(currentDropdown).hidden) {
    document.getElementById(currentDropdown).hidden = false;
  }
  else {
    document.getElementById(currentDropdown).hidden = true;
  }
}

function initiateNote(createNote) {
  switch (createNote) {
    case true:
      hideAndShow("createOrOpenContainer", "noteEditor");
      break;
    case false:
      break;
  }

  document.getElementById("closeNote").disabled = false;
}

function confirmSave() {
  if (noteName.value != "") {
    document.getElementById("saveDocumentHeading").innerHTML = "Save \'" + noteName.value + "\'?";
  }
  else {
    document.getElementById("saveDocumentHeading").innerHTML = "Save \'Untitled\'?";
  }

  // Determines whether the note editor is empty or the user
  // has inputted text
  if (quill.getLength() != 1 || noteName.value != "") {
    confirmSaveDialog.hidden = false;
  }
  else {
    hideAndShow("noteEditor", "createOrOpenContainer");
    document.getElementById("closeNote").disabled = true;
  }
}
