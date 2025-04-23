const fileMenu = document.getElementById("fileMenu");
const editMenu = document.getElementById("editMenu");

function hideAndShow(hiddenContainer, shownContainer) {
  document.getElementById(hiddenContainer).hidden = true;
  document.getElementById(shownContainer).hidden = false;
}

function hideAllMenuDropdowns() {
  fileMenu.hidden = true;
  editMenu.hidden = true;
}

function toggleMenuDropdown(currentDropdown) {
  if (document.getElementById(currentDropdown).hidden) {
    document.getElementById(currentDropdown).hidden = false;
  }
  else {
    document.getElementById(currentDropdown).hidden = true;
  }
}
