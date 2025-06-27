const additionalVideoControls = document.getElementById(
	"additionalVideoControls"
);
const appSectionSizesContainer = document.getElementById(
	"appSectionSizesContainer"
);
const characterCountVisualMax = document.getElementById(
	"characterCountVisualMax"
);
const codeFileViewerStatusBar = document.getElementById(
	"codeFileViewerStatusBar"
);
const convertWordToNoteInput = document.getElementById(
	"convertWordToNoteInput"
);
const customStylesheetImport = document.getElementById(
	"customStylesheetImport"
);
const downloadNotePrefixAndSuffix = [
	"<div style='word-wrap: break-word'>",
	"</div><style>body { font-family: sans-serif } td { word-break: break-word } .ql-font-serif { font-family: serif } .ql-font-monospace { font-family: monospace }</>"
];
const programmingLanguageMode = document.getElementById(
	"programmingLanguageMode"
);
const startFromScratchOptions = document.getElementById(
	"startFromScratchOptions"
);
const totalCharacterCountDisplay = document.getElementById(
	"totalCharacterCountDisplay"
);
const viewerStatusBarIndicator = document.getElementById(
	"viewerStatusBarIndicator"
);
const wordDocumentToNoteButton = document.getElementById(
	"wordDocumentToNoteButton"
);
const adjustAppSectionSizes = document.getElementById("adjustAppSectionSizes");
const adjustedHeight = (window.innerHeight - 35).toString() + "px";
const anotherNoteFileInput = document.getElementById("anotherNoteFileInput");
const anotherNoteView = document.getElementById("anotherNoteView");
const anotherNoteViewer = document.getElementById("anotherNoteViewer");
const appLoad = document.getElementById("appLoad");
const appSectionsTable = document.getElementById("appSectionsTable");
const autoSave = document.getElementById("autoSave");
const autoSaveCheck = document.getElementById("autoSaveCheck");
const characterCount = document.getElementById("characterCount");
const characterCountVisual = document.getElementById("characterCountVisual");
const checkedImageSource = "Assets/Images/check_000000.svg";
const chooseViewer = document.getElementById("chooseViewer");
const closeFile = document.getElementById("closeFile");
const cloudFileView = document.getElementById("cloudFileView");
const cloudFileViewer = document.getElementById("cloudFileViewer");
const codeEditorTheme = document.getElementById("codeEditorTheme");
const codeFileInput = document.getElementById("codeFileInput");
const codeFileView = document.getElementById("codeFileView");
const codeFileViewer = document.getElementById("codeFileViewer");
const confirmSaveDialog = document.getElementById("confirmSaveDialog");
const confirmViewerClose = document.getElementById("confirmViewerClose");
const copiedToClipboard = document.getElementById("copiedToClipboard");
const copiedToClipboardString = "Copied to clipboard";
const createdTable = document.getElementById("createdTable");
const createOrOpenContainer = document.getElementById("createOrOpenContainer");
const currentDate = new Date();
const customEmbedViewer = document.getElementById("customEmbedViewer");
const customStylesheet = document.getElementById("customStylesheet");
const customTypingTarget = document.getElementById("customTypingTarget");
const darkModeCheck = document.getElementById("darkModeCheck");
const darkModeStylesheet = document.getElementById("darkModeStylesheet");
const darkModeToggle = document.getElementById("darkModeToggle");
const dialogFocusBackground = document.getElementById("dialogFocusBackground");
const downloadConvertedNote = document.getElementById("downloadConvertedNote");
const editorSize = document.getElementById("editorSize");
const embeddedCode = document.getElementById("embeddedCode");
const errorMessage = document.getElementById("errorMessage");
const fileLastModified = document.getElementById("fileLastModified");
const fileName = document.getElementById("fileName");
const fileSize = document.getElementById("fileSize");
const fileViewingHistoryNames = [];
const fileViewingHistoryTimes = [];
const hideEditorCheck = document.getElementById("hideEditorCheck");
const hideViewingCheck = document.getElementById("hideViewingCheck");
const historyTableContainer = document.getElementById("historyTableContainer");
const iframes = document.getElementsByTagName("iframe");
const imageFileInput = document.getElementById("imageFileInput");
const imageView = document.getElementById("imageView");
const imageViewer = document.getElementById("imageViewer");
const importOwnStylesheet = document.getElementById("importOwnStylesheet");
const insertCloudURLDialog = document.getElementById("insertCloudURLDialog");
const insertTable = document.getElementById("insertTable");
const lastViewedWebpages = [];
const localDocuments = document.getElementById("localDocuments");
const mainEditor = document.getElementById("mainEditor");
const mainEditorZoom = document.getElementById("mainEditorZoom");
const markdownFileInput = document.getElementById("markdownFileInput");
const markdownFileView = document.getElementById("markdownFileView");
const noFileSelected = document.getElementById("noFileSelected");
const noteDownloadLink = document.getElementById("noteDownloadLink");
const noteEditor = document.getElementById("noteEditor");
const noteHTML = document.getElementById("noteHTML");
const noteName = document.getElementById("noteName");
const onedriveOrigin = document.getElementById("onedriveOrigin");
const onlineDesignView = document.getElementById("onlineDesignView");
const onlineDesignViewer = document.getElementById("onlineDesignViewer");
const onlineDocuments = document.getElementById("onlineDocuments");
const openNoteFileInput = document.getElementById("openNoteFileInput");
const pdfFileInput = document.getElementById("pdfFileInput");
const pdfView = document.getElementById("pdfView");
const pdfViewer = document.getElementById("pdfViewer");
const resetTypingTarget = document.getElementById("resetTypingTarget");
const revertToDefaultStyle = document.getElementById("revertToDefaultStyle");
const savedForLater = document.getElementById("savedForLater");
const savedForLaterDetails = document.getElementById("savedForLaterDetails");
const setTypingTarget = document.getElementById("setTypingTarget");
const shareCopyLink = document.getElementById("shareCopyLink");
const snackbar = document.getElementById("snackbar");
const snackbarMessage = document.getElementById("snackbarMessage");
const tableColumns = document.getElementById("tableColumns");
const tableRows = document.getElementById("tableRows");
const textFileInput = document.getElementById("textFileInput");
const textView = document.getElementById("textView");
const textViewActions = document.getElementById("textViewActions");
const textViewer = document.getElementById("textViewer");
const textViewFont = document.getElementById("textViewFont");
const totalWordCountDisplay = document.getElementById("totalWordCountDisplay");
const tubeVideoView = document.getElementById("tubeVideoView");
const tubeVideoViewer = document.getElementById("tubeVideoViewer");
const typingTarget = document.getElementById("typingTarget");
const uncheckedImageSource = "Assets/Images/menu_dropdown_placeholder.svg";
const URLToCloudFile = document.getElementById("URLToCloudFile");
const URLToOnlineDesign = document.getElementById("URLToOnlineDesign");
const URLToTubeVideo = document.getElementById("URLToTubeVideo");
const userGreeting = document.getElementById("userGreeting");
const videoFileInput = document.getElementById("videoFileInput");
const videoView = document.getElementById("videoView");
const videoViewer = document.getElementById("videoViewer");
const viewersContainer = document.getElementById("viewersContainer");
const viewerStatusBar = document.getElementById("viewerStatusBar");
const viewingHistoryTable = document.getElementById("viewingHistoryTable");
const viewingSize = document.getElementById("viewingSize");
const webpageURLBar = document.getElementById("webpageURLBar");
const webpageView = document.getElementById("webpageView");
const webpageViewer = document.getElementById("webpageViewer");
const wordCount = document.getElementById("wordCount");
const wordCountVisual = document.getElementById("wordCountVisual");
const wordCountVisualMax = document.getElementById("wordCountVisualMax");
const wordDocumentView = document.getElementById("wordDocumentView");
const wordDocumentViewer = document.getElementById("wordDocumentViewer");
const wordFileInput = document.getElementById("wordFileInput");
const wordsOrCharacters = document.getElementById("wordsOrCharacters");
const wordWrap = document.getElementById("wordWrap");
const wordWrapCheck = document.getElementById("wordWrapCheck");
const workingURLParameters = new URLSearchParams(window.location.search);
let addedCharacterCount = 0;
let addedCharacterCountArray = [];
let addedWordCount = 0;
let addedWordCountArray = [];
let codeFileViewFontSize = 12;
let convertedFileOutput;
let isOpeningAnotherNote = false;
let mainEditorFontSize = 13;
let printTitle;
let textViewFontSize = 14;
