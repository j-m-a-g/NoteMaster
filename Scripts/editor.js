const fileMenu = document.getElementById("fileMenu");
const editMenu = document.getElementById("editMenu");
const helpMenu = document.getElementById("helpMenu");

const dialogFocusBackground = document.getElementById("dialogFocusBackground");

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
