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

const quill = new Quill('#mainEditor', {
  modules: {
    toolbar: toolbarOptions
  },
  placeholder: "Start your note-taking here",
  theme: 'snow'
});

const anotherNoteViewQuill = new Quill("#anotherNoteView", {
  readOnly: true,
  modules: {
    toolbar: null
  },
  theme: 'snow',
});

function onLoadTasks() {
  if (localStorage.getItem("noteProgress") !== "<p></p>" && localStorage.getItem(("noteProgress")) !== null) {
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

function toggleViewer(isShown, currentViewer) {
  switch (isShown) {
    case true:
      document.getElementById(currentViewer).hidden = false;
      viewersContainer.hidden = false;
      chooseViewer.hidden = true;
      break;
    case false:
      document.getElementById(currentViewer).hidden = true;
      viewersContainer.hidden = true;
      chooseViewer.hidden = false;
      break
  }
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

function toggleMenuCheck(imageObject) {
  if (document.getElementById(imageObject).src.includes("Assets/Images/check_000000.svg")) {
    document.getElementById(imageObject).removeAttribute("src");
  } else {
    document.getElementById(imageObject).src = "Assets/Images/check_000000.svg"
  }
}

function alterMenuFunctions(isDisabled) {
  document.getElementById("closeNote").disabled = isDisabled;
  document.getElementById("downloadNote").disabled = isDisabled;
  document.getElementById("save").disabled = isDisabled;
  document.getElementById('showHTMLEditor').disabled = isDisabled;
}
