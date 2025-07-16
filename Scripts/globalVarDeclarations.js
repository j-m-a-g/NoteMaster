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
	"</div><style>body { font-family: sans-serif } td { word-break: break-word } h1, h2, h3, h4, h5, h6 { font-weight: normal } .ql-font-serif { font-family: serif } .ql-font-monospace { font-family: monospace }</style>"
];
const gettingStartedDarkMode = document.getElementById(
	"gettingStartedDarkMode"
);
const insertOnlineImageInput = document.getElementById(
	"insertOnlineImageInput"
);
const programmingLanguageMode = document.getElementById(
	"programmingLanguageMode"
);
const startFromScratchOptions = document.getElementById(
	"startFromScratchOptions"
);
const symbolList = [
	["¡", "Inverted Exclamation Mark"],
	["¢", "Cent"],
	["£", "Pound"],
	["¤", "Currency"],
	["¥", "Yen"],
	["¦", "Broken Bar"],
	["§", "Section"],
	["¨", "Diaeresis"],
	["©", "Copyright"],
	["«", "Left Double Angle Quotation Mark"],
	["¬", "Not"],
	["®", "Registered"],
	["¯", "Macron"],
	["°", "Degree"],
	["±", "Plus-Minus"],
	["²", "Squared"],
	["³", "Cubed"],
	["´", "Acute"],
	["µ", "Micro"],
	["¶", "Pilcrow"],
	["·", "Middle Dot"],
	["¸", "Cedilla"],
	["¹", "Superscript One"],
	["º", "Masculine Ordinal Indicator"],
	["»", "Right Double Angle Quotation Mark"],
	["¼", "One Quarter"],
	["½", "One Half"],
	["¾", "Three Quarters"],
	["¿", "Inverted Question Mark"],
	["À", "Latin Uppercase A With Grave"],
	["Á", "Latin Uppercase A With Acute"],
	["Â", "Latin Uppercase A With Circumflex"],
	["Ã", "Latin Uppercase A With Tilde"],
	["Ã", "Latin Uppercase A With Tilde"],
	["Ã", "Latin Uppercase A With Diaeresis"],
	["Å", "Latin Uppercase A With Ring"],
	["Æ", "Latin Uppercase AE"],
	["Ç", "Latin Uppercase C With Cedilla"],
	["È", "Latin Uppercase E With Grave"],
	["É", "Latin Uppercase E With Acute"],
	["Ê", "Latin Uppercase E With Circumflex"],
	["Ê", "Latin Uppercase E With Circumflex"],
	["Ë", "Latin Uppercase E With Diaeresis"],
	["Ì", "Latin Uppercase I With Grave"],
	["Í", "Latin Uppercase I With Acute"],
	["Í", "Latin Uppercase I With Acute"],
	["Î", "Latin Uppercase I With Circumflex"],
	["Î", "Latin Uppercase I With Circumflex"],
	["Ï", "Latin Uppercase I With Diaeresis"],
	["Ð", "Latin Uppercase Eth"],
	["Ñ", "Latin Uppercase N With Tilde"],
	["Ò", "Latin Uppercase O With Grave"],
	["Ó", "Latin Uppercase O With Acute"],
	["Ô", "Latin Uppercase O With Circumflex"],
	["Õ", "Latin Uppercase O With Tilde"],
	["Ö", "Latin Uppercase O With Diaeresis"],
	["×", "Multiplication"],
	["Ø", "Latin Uppercase O With Stroke"],
	["Ù", "Latin Uppercase U With Grave"],
	["Ú", "Latin Uppercase U With Acute"],
	["Û", "Latin Uppercase U With Circumflex"],
	["Ü", "Latin Uppercase U With Diaeresis"],
	["Ý", "Latin Uppercase Y With Acute"],
	["Þ", "Latin Uppercase Thom"],
	["ß", "Latin Lowercase Sharp S"],
	["à", "Latin Lowercase A With Grave"],
	["á", "Latin Lowercase A With Acute"],
	["â", "Latin Lowercase A With Circumflex"],
	["ã", "Latin Lowercase A With Tilde"],
	["ä", "Latin Lowercase A With Diaeresis"],
	["å", "Latin Lowercase A With Ring"],
	["æ", "Latin Lowercase AE"],
	["ç", "Latin Lowercase C With Cedilla"],
	["è", "Latin Lowercase E With Grave"],
	["é", "Latin Lowercase E With Acute"],
	["ê", "Latin Lowercase E With Circumflex"],
	["ë", "Latin Lowercase E With Diaeresis"],
	["ì", "Latin Lowercase I With Grave"],
	["í", "Latin Lowercase I With Acute"],
	["î", "Latin Lowercase I With Circumflex"],
	["ï", "Latin Lowercase I With Diaeresis"],
	["ð", "Latin Lowercase Eth"],
	["ñ", "Latin Lowercase N With Tilde"],
	["ò", "Latin Lowercase O With Grave"],
	["ó", "Latin Lowercase O With Acute"],
	["ô", "Latin Lowercase O With Circumflex"],
	["õ", "Latin Lowercase O With Tilde"],
	["ö", "Latin Lowercase O With Diaeresis"],
	["÷", "Division"],
	["ø", "Latin Lowercase O With Stroke"],
	["ù", "Latin Lowercase U With Grave"],
	["ú", "Latin Lowercase U With Acute"],
	["û", "Latin Lowercase U With Circumflex"],
	["ü", "Latin Lowercase U With Diaeresis"],
	["ý", "Latin Lowercase Y With Acute"],
	["þ", "Latin Lowercase Thom"],
	["ÿ", "Latin Lowercase Y With Diaeresis"],
	["Ā", "Latin Uppercase A With Macron"],
	["ā", "Latin Lowercase A With Macron"],
	["Ă", "Latin Uppercase A With Breve"],
	["ă", "Latin Lowercase A With Breve"],
	["Ą", "Latin Uppercase A With Ogonek"],
	["ą", "Latin Lowercase A With Ogonek"],
	["Ć", "Latin Uppercase C With Acute"],
	["ć", "Latin Lowercase C With Acute"],
	["Ĉ", "Latin Uppercase C With Circumflex"],
	["ĉ", "Latin Lowercase C With Circumflex"],
	["Ċ", "Latin Uppercase C With Dot"],
	["ċ", "Latin Lowercase C With Dot"],
	["Č", "Latin Uppercase C With Caron"],
	["č", "Latin Lowercase C With Caron"],
	["ď", "Latin Lowercase D With Caron"]
];
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
const insertOnlineImage = document.getElementById("insertOnlineImage");
const insertSymbol = document.getElementById("insertSymbol");
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
const originalDownloadSuffix = downloadNotePrefixAndSuffix[1];
const pageBackgroundColor = document.getElementById("pageBackgroundColor");
const pageSetupStyle = document.getElementById("pageSetupStyle");
const pageTextColor = document.getElementById("pageTextColor");
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
const symbolsDisplay = document.getElementById("symbolsDisplay");
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
const URLToPDFInput = document.getElementById("URLToPDFInput");
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
