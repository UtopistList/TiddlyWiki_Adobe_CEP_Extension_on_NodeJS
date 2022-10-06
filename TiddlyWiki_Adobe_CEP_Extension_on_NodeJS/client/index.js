/* Create an instance of CSInterface. */
var csInterface = new CSInterface();

/* Write a helper function to pass instructions to the ExtendScript side. */
function openDoc() {
  csInterface.evalScript("openDocument()");
}

/* 1) Create an instance of CSInterface. */
var csInterface = new CSInterface();

/* 2) Use a CEP method to open the server extension. */
csInterface.requestOpenExtension("com.my.localserver", "");