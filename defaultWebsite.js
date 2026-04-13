/**
 * Creates a new Function with a random structure and content,
 * leveraging available ScriptsApp properties and methods from the provided documentation.
 *
 * NOTE: Programmatic control over font styles and direct theme color
 * setting (beyond the initial script creation) is NOT available via the ScriptApp API.
 * The script will use Google Scripts' default theme or the last manually applied theme.
 *
 * @returns {object} The newly created random Google Script.
 */
function createRandomFunction(searchString) {
  // --- Configuration for randomness ---
  var executed = 0;
  const SCRIPT_TITLES = searchString
    ? Array(searchString)
    : functionRegistry.fileList;
  // --- Create the script ---
  console.log("SCRIPT_TITLES",executed++);
  const scriptTitle =
    SCRIPT_TITLES[Math.floor(Math.random() * SCRIPT_TITLES.length)];
  const script = globalThis[scriptTitle]; //ScriptApp.newTrigger(scriptTitle).timeBased().everyHours(24).create();
  Logger.log(`Random script: ${script?.toString()}`);
  Logger.log(`Script name: ${scriptTitle}`);
  const isRequired = six.reqChoice(); //Math.random() < 0.7; // 70% chance of being required
  console.log("isRequired",executed++);

  let fileIndex; //= crmT(scriptTitle)
  let fileParams; //= functionRegistry.paramsList[fileIndex]
  let scriptUrl; //= script()//.getPublishedUrl();
  let mapArr = {};
  if (isRequired) {
    console.log("isRequired", isRequired);
    // console.info(userEMail);
    if (!script || (script && script?.length === 0)) {
      console.log("!script || (script && script?.length === 0)");
      // console.info(script?.toString() || scriptTitle);
      // var tempObj =
      if (!script) {
        console.log("!script",!script);
        mapArr["driveManager"] = [];
        // let funcX = six.driveManager(scriptTitle, functionRegistry.time);
        let tempObj = six.isMapped(mapArr, [
          "driveManager",
          [scriptTitle, functionRegistry.time],
        ])["driveManager"]; //userSubmit.getPublishedUrl()]);
        console.log("tempObj",executed++);
        Logger.log(`Mapping this script: ${JSON.stringify(tempObj)}`);
        scriptUrl = six.resolveParams(tempObj);
        console.log("scriptUrl",executed++);
      } else {
        console.log("(script && script?.length === 0)",script?.length === 0);
        mapArr[scriptTitle] = [];
        let tempObj = six.isMapped(mapArr, [scriptTitle])[scriptTitle];
        console.log("tempObj",executed++);
        Logger.log(`Mapping this script: ${JSON.stringify(tempObj)}`);
        scriptUrl = six.resolveParams(tempObj);
        console.log("scriptUrl",executed++);
      }
    } else {
      // console.info("script\n", script?.toString() || scriptTitle);
      mapArr[scriptTitle] = [];
      fileIndex = six.crmT(scriptTitle);
      console.log("fileIndex",executed++);
      fileParams = functionRegistry.paramsList[fileIndex];
      console.log("fileParams",executed++);
      let tempObj = six.isMapped(mapArr, [scriptTitle, [...fileParams?.parameters]])[
        scriptTitle
      ];
      console.log("tempObj",executed++);
      console.log(`Mapping this script: ${JSON.stringify(tempObj)}`);
      scriptUrl = six.resolveParams(tempObj);
      console.log("scriptUrl",executed++);
    }
  } else {
    console.log("isRequired", isRequired);
    if (!script || script.length === 0) {
      console.log("!script || (script && script?.length === 0)");
      if (!script) {
        console.log("!script",!script);
        mapArr["driveManager"] = [];
        // let funcX = six.driveManager(scriptTitle, functionRegistry.time);
        let tempObj = six.isMapped(mapArr, [
          "driveManager",
          [scriptTitle, functionRegistry.time],
        ])["driveManager"]; //userSubmit.getPublishedUrl()]);
        console.log("tempObj",executed++);
        Logger.log(`Mapping this script: ${JSON.stringify(tempObj)}`);
        scriptUrl = six.resolveParams(tempObj);
        console.log("scriptUrl",executed++);
      } else {
        console.log("(script && script?.length === 0)",script?.length === 0);
        mapArr[scriptTitle] = [];
        // let funcX = six.driveManager(scriptTitle, functionRegistry.time);
        let tempObj = six.isMapped(mapArr, [scriptTitle])[scriptTitle]; //userSubmit.getPublishedUrl()]);
        console.log("tempObj",executed++);
        Logger.log(`Mapping this script: ${JSON.stringify(tempObj)}`);
        scriptUrl = six.resolveParams(tempObj);
        console.log("scriptUrl",executed++);
      }
    } else {
      // console.info("script\n", script?.toString() || scriptTitle);
      fileIndex = six.crmT(scriptTitle);
      console.log("fileIndex",executed++);
      fileParams = functionRegistry.paramsList[fileIndex];
      console.log("fileParams",executed++);
      mapArr[scriptTitle] = [];
      scriptUrl = six.isMapped(mapArr, [...fileParams?.parameters]);
      console.log("scriptUrl",executed++);
    }
  }
  // --- Log and Return Script URL ---
  Logger.log(`Random script Created: ${JSON.stringify(scriptUrl)}`);
  return scriptUrl;
}