/**
 * Creates a new Google script with a random structure and content,
 * leveraging available ScriptsApp properties and methods from the provided documentation.
 *
 * NOTE: Programmatic control over font styles and direct theme color
 * setting (beyond the initial script creation) is NOT available via the ScriptApp API.
 * The script will use Google Scripts' default theme or the last manually applied theme.
 *
 * @returns {string} The URL of the newly created random Google Script.
 */
function createFormFunction(searchString) {
  // --- Configuration for randomness ---
  const SCRIPT_TITLES = searchString
    ? Array(searchString)
    : functionRegistry.fileList;
  const SCRIPT_DESCRIPTIONS = [
    "A randomly generated script to gather insights.",
    "Please fill out this script at your leisure. Content is randomized.",
    "Exploring the possibilities of programmatic script creation.",
    "This script was created by an algorithm. Enjoy!",
    "Your input helps us understand randomness better.",
    "An automated inquiry for diverse data points.",
    "Completely random, yet surprisingly functional.",
  ];
  const QUESTION_WORDS = [
    "Name",
    "Email",
    "Date",
    "Preference",
    "Opinion",
    "Favorite",
    "Quantity",
    "Description",
    "Rating",
    "Contact",
    "Experience",
    "Level",
    "Choice",
    "Details",
    "Location",
    "Time",
    "Duration",
    "Feedback",
  ];
  const CHOICE_WORDS = [
    "Option A",
    "Choice B",
    "Value C",
    "Item D",
    "Selection E",
    "Yes",
    "No",
    "Maybe",
    "Agree",
    "Disagree",
    "Red",
    "Blue",
    "Green",
    "Small",
    "Medium",
    "Large",
  ];

  const MIN_SECTIONS = 1;
  const MAX_SECTIONS = 1;
  const MIN_QUESTIONS_PER_SECTION = 1;
  const MAX_QUESTIONS_PER_SECTION = 1;

  // --- Create the script ---
  const scriptTitle =
    SCRIPT_TITLES[Math.floor(Math.random() * SCRIPT_TITLES.length)];
  const script = globalThis[scriptTitle]; //ScriptApp.newTrigger(scriptTitle).timeBased().everyHours(24).create();
  // const funcXName = script.name;
  // try {
  //   let functionCheck = driveManager(script || scriptTitle, functionRegistry.time);
  // }
  Logger.log(`Random script: ${script?.toString()}`);
  Logger.log(`Script name: ${scriptTitle}`);

  // --- Set Basic script Properties ---
  const scriptDescription =
    SCRIPT_DESCRIPTIONS[Math.floor(Math.random() * SCRIPT_DESCRIPTIONS.length)];

  // Randomly decide to collect email or not
  // script(Math.random() < 0.5);

  // Randomly decide to show progress bar for multi-section scripts
  // if (Math.random() < 0.7) {
  //   script.setProgressBar(true); // Using setProgressBar as found in script methods
  // }

  // --- Add Sections and Questions ---
  const numSections =
    Math.floor(Math.random() * (MAX_SECTIONS - MIN_SECTIONS + 1)) +
    MIN_SECTIONS;

  const questionTitle = `${QUESTION_WORDS[Math.floor(Math.random() * QUESTION_WORDS.length)]} ${Math.random() < 0.5 ? "?" : ""}`;
  const isRequired = six.reqChoice(); //Math.random() < 0.7; // 70% chance of being required

  let fileIndex; //= crmT(scriptTitle)
  let fileParams; //= functionRegistry.paramsList[fileIndex]
  let scriptUrl; //= script()//.getPublishedUrl();
  let mapArr = {};
  let vidTubeTime = six.vidPlaylist(scriptTitle);
  let tubeArr = vidTubeTime?.playlistArr;
  var tubeEngine = vidTubeTime.hardUrl;
  const userSubmit = FormApp.create(scriptTitle)
    .setDescription(six.rule())
    .setConfirmationMessage(encodeURI(tubeEngine));
  const sectionHeaderItem = userSubmit
    .addSectionHeaderItem()
    .setTitle(questionTitle + " (New Section)");
  const checkboxGridItem = userSubmit
    .addCheckboxGridItem()
    .setTitle(questionTitle + " (Black)");
  const gridItem = userSubmit
    .addGridItem()
    .setTitle(questionTitle + " (Radio Grid)");
  const imageItem = userSubmit;
  // .addImageItem()
  // .setTitle(questionTitle + " (Image)");
  const videoItem = userSubmit;
  // Use a valid YouTube video ID
  // if (tubeArr) {
  const videoAlignments = [
    FormApp.Alignment.LEFT,
    FormApp.Alignment.CENTER,
    FormApp.Alignment.RIGHT,
  ];
  if (tubeArr.length > 0) {
    let tubeUrlsArr = [];
    tubeArr.forEach((vidId) => {
      let linkLocation = "https://www.youtube.com/watch?v=" + vidId;
      // tubeUrlsArr.push(linkLocation);
      // let rndTube = Math.floor(Math.random() * (Math.floor(tubeUrlsArr.length)));
      // var tubeVideoUrl = tubeUrlsArr[rndTube];
      videoItem
        .addVideoItem()
        .setTitle(questionTitle)
        // .setHelpText(encodeURI(tubeEngine))
        .setVideoUrl(linkLocation)
        .setWidth(Math.floor(Math.random() * 300) + 400) // 400-700px width
        .setAlignment(
          videoAlignments[Math.floor(Math.random() * videoAlignments.length)],
        );
    });
  }
  // }
  else {
    let tubeArr = six.vidPlaylist(scriptTitle).playlistArr;
    tubeArr.forEach((vidId) => {
      let linkLocation = "https://www.youtube.com/watch?v=" + vidId;
      videoItem
        .addVideoItem()
        .setTitle(questionTitle)
        // .setHelpText(encodeURI(tubeEngine))
        .setVideoUrl(linkLocation)
        // Aretha Franklin, Marvis Staples - Oh Happy Day (Official Music Video)
        // Rick Astley - Never Gonna Give You Up dQw4w9WgXcQ (a classic placeholder)
        .setWidth(Math.floor(Math.random() * 300) + 400) // 400-700px width
        .setAlignment(
          videoAlignments[Math.floor(Math.random() * videoAlignments.length)],
        );
    });
  }
  const imgFile = six.seoPictTime(scriptTitle, functionRegistry.time)?.playList;
  let rndfileImage =
    imgFile[Math.floor(Math.random() * Math.floor(imgFile.length))];
  if (rndfileImage) {
    let deepFileDive = DriveApp.getFilesByName(rndfileImage);
    if (deepFileDive.hasNext()) {
      var nextDFD = deepFileDive?.hasNext();
    }
  }
  if (nextDFD) {
    while (nextDFD) {
      let dFile = deepFileDive;
      // Use a public image URL or provide a Blob
      imageItem.setImage(dFile.getBlob()); // Replace with a real public image ID
      // Or use a placeholder image if you don't want to use DriveApp and have a public URL
      // imageItem.setUrl('https://via.placeholder.com/150'); // This method doesn't exist, must be Blob
      imageItem.setWidth(Math.floor(Math.random() * 300) + 200); // 200-500px width
      const alignments = [
        FormApp.Alignment.LEFT,
        FormApp.Alignment.CENTER,
        FormApp.Alignment.RIGHT,
      ];
      imageItem.setAlignment(
        alignments[Math.floor(Math.random() * alignments.length)],
      );
    }
  } else {
    const alignments = [
      FormApp.Alignment.LEFT,
      FormApp.Alignment.CENTER,
      FormApp.Alignment.RIGHT,
    ];
    let tempSortImg = [];
    imgFile.forEach((piece, imgFileIndex) => {
      // while (piece) {
      var srPiece = piece[piece.indexOf("src2=")];
      var svPiece = piece[piece.indexOf("xmlns=")];
      var srImgRes = [piece.slice(srPiece).toString().split("src2=")]
        .join("")
        .split('"')[1];
      if ([svPiece].indexOf("svg") > -1) {
        var svImgRes = [piece.slice(svPiece).toString().split("xmlns=")]
          .join("")
          .split('"')[1];
      }
      if (piece.indexOf("http") > -1) {
        var elaspeTime = functionRegistry.time;
        var timeToExecute = functionRegistry.timeLeftToExecute;
        if (srImgRes || svImgRes) {
          var imgUrl = srImgRes || svImgRes;
        }
        if ([imgUrl].join("").length > 0) {
          if (tempSortImg.indexOf(imgUrl) !== -1) {
            return;
          } else {
            tempSortImg.push(imgUrl);
          }
        }
        // if (
        //   timeToExecute <= 6 * 60 * 1000 &&
        //   timeToExecute >= 5.98 * 60 * 1000
        // ) {
        //   console.log(
        //     "that function: " +
        //       arguments.callee.caller.name +
        //       "\nthis function: " +
        //       arguments.callee.name +
        //       "\nTime limit six minutes",
        //   );
        // }
        // if (timeToExecute <= 0.05 * 60 * 1000) {
        //   console.log(
        //     "piece: " +
        //       piece[0] +
        //       "\ntimeToExecute: " +
        //       timeToExecute.valueOf(),
        //   );
        //   return;
        // }
        // return piece[0];
      }
      // return;
      // }
    });
    tempSortImg.forEach((priImg) => {
      userSubmit.addPageBreakItem().setTitle("Storyboard");
      userSubmit.addSectionHeaderItem().setTitle("timestamp: " + new Date());
      try {
        imageItem
          .addImageItem()
          .setTitle(questionTitle + ": " + [script]?.join(""))
          .setImage(UrlFetchApp.fetch(priImg))
          .setWidth(Math.floor(Math.random() * 800) + 200) // 200-500px width
          .setAlignment(
            alignments[Math.floor(Math.random() * alignments.length)],
          );
      } catch (error) {
        console.info(error.stack);
      }
    });
    // Use a public image URL or provide a Blob
    // imageItem.setImage(UrlFetchApp.fetch(rndfileImage)); // Replace with a real public image ID
    // Or use a placeholder image if you don't want to use DriveApp and have a public URL
    // imageItem.setUrl('https://via.placeholder.com/150'); // This method doesn't exist, must be Blob
    // imageItem.setWidth(Math.floor(Math.random() * 300) + 200); // 200-500px width
    // const alignments = [
    //   FormApp.Alignment.LEFT,
    //   FormApp.Alignment.CENTER,
    //   FormApp.Alignment.RIGHT,
    // ];
    // imageItem.setAlignment(
    //   alignments[Math.floor(Math.random() * alignments.length)],
    // );
  }
  gridItem.setRows([
    "aBlackR",
    "aBlackRO-O-O",
    "aBlackPawn",
    "aWhitePawn",
    "aWhiteRO-O-O",
    "aWhiteR",
    "bBlackN",
    "bBlackPawn",
    "bWhitePawn",
    "bWhiteN",
    "cBlackB",
    "cBlackPawn",
    "cWhitePawn",
    "cWhiteB",
    "dBlackQ",
    "dBlackPawn",
    "dWhitePawn",
    "dWhiteQ",
    "eBlackK",
    "eBlackKO-O-O",
    "eBlackKO-O",
    "eBlackPawn",
    "eWhitePawn",
    "eWhiteKO-O",
    "eWhiteKO-O-O",
    "eWhiteK",
    "fBlackB",
    "fBlackPawn",
    "fWhitePawn",
    "fWhiteB",
    "gBlackN",
    "gBlackPawn",
    "gWhitePawn",
    "gWhiteN",
    "hBlackR",
    "hBlackRO-O",
    "hBlackPawn",
    "hWhitePawn",
    "hWhiteRO-O",
    "hWhiteR",
  ]);
  gridItem.setColumns([
    "4",
    "3",
    "2",
    "1",
    "8",
    "7",
    "6",
    "5",
    "x",
    "+",
    "#",
    "=",
  ]);
  if (isRequired) gridItem.setRequired(true);
  if (Math.random() < 0.3) {
    gridItem.setValidation(
      FormApp.createGridValidation().requireLimitOneResponsePerColumn().build(),
    );
  }
  checkboxGridItem.setRows(["8", "7", "6", "5", "4", "3", "2", "1"]);
  checkboxGridItem.setColumns(["a", "b", "c", "d", "e", "f", "g", "h"]);
  if (isRequired) checkboxGridItem.setRequired(true);
  if (Math.random() < 0.3) {
    checkboxGridItem.setValidation(
      FormApp.createCheckboxGridValidation()
        .requireLimitOneResponsePerColumn()
        .build(),
    );
  }
  if (Math.random() < 0.7) {
    sectionHeaderItem.setHelpText(
      "This is a random section header for organization.",
    );
  }
  if (isRequired) {
    console.log("isRequired", isRequired);
    // console.info(userEMail);
    if (!script || (script && script?.length === 0)) {
      console.log("!script || (script && script?.length === 0)");
      console.info(script?.toString() || scriptTitle);
      // var tempObj =
      if (!script) {
        console.log("!script");
        mapArr["driveManager"] = [];
        // let funcX = driveManager(scriptTitle, functionRegistry.time);
        let tempObj = six.isMapped(mapArr, [
          "driveManager",
          [scriptTitle, functionRegistry.time],
        ])["driveManager"]; //userSubmit.getPublishedUrl()]);
        scriptUrl = six.resolveParams(tempObj);
      } else {
        console.log("(script && script?.length === 0)");
        mapArr[scriptTitle] = [];
        let tempObj = six.isMapped(mapArr, [scriptTitle])[scriptTitle];
        scriptUrl = six.resolveParams(tempObj);
      }
    } else {
      console.info("script\n", script?.toString() || scriptTitle);
      mapArr[scriptTitle] = [];
      fileIndex = six.crmT(scriptTitle);
      fileParams = functionRegistry.paramsList[fileIndex];
      let tempObj = six.isMapped(mapArr, [scriptTitle, [...fileParams?.parameters]])[
        scriptTitle
      ];
      scriptUrl = six.resolveParams(tempObj);
    }
  } else {
    console.log("isRequired", isRequired);
    if (!script || script.length === 0) {
      console.log("!script || (script && script?.length === 0)");
      if (!script) {
        console.log("!script");
        mapArr["driveManager"] = [];
        // let funcX = driveManager(scriptTitle, functionRegistry.time);
        let tempObj = six.isMapped(mapArr, [
          "driveManager",
          [scriptTitle, functionRegistry.time],
        ])["driveManager"]; //userSubmit.getPublishedUrl()]);
        scriptUrl = six.resolveParams(tempObj);
      } else {
        console.log("(script && script?.length === 0)");
        mapArr[scriptTitle] = [];
        // let funcX = six.driveManager(scriptTitle, functionRegistry.time);
        let tempObj = six.isMapped(mapArr, [scriptTitle])[scriptTitle]; //userSubmit.getPublishedUrl()]);
        scriptUrl = six.resolveParams(tempObj);
      }
    } else {
      console.info("script\n", script?.toString() || scriptTitle);
      fileIndex = six.crmT(scriptTitle);
      fileParams = functionRegistry.paramsList[fileIndex];
      mapArr[scriptTitle] = [];
      scriptUrl = six.isMapped(mapArr, [...fileParams?.parameters]);
    }
  }
  // scriptUrl = userSubmit.getPublishedUrl();
  // break;
  for (let s = 0; s < numSections; s++) {
    // if (s > 0) {
    //   // Add page break for subsequent sections
    //   script
    //     .addPageBreakItem()
    //     .setTitle(
    //       `Section ${s + 1}: ${QUESTION_WORDS[Math.floor(Math.random() * QUESTION_WORDS.length)]} Details`,
    //     )
    //     .setHelpText(
    //       `This is a random section for more ${QUESTION_WORDS[Math.floor(Math.random() * QUESTION_WORDS.length)]} related questions.`,
    //     );
    // }

    const numQuestions =
      Math.floor(
        Math.random() *
          (MAX_QUESTIONS_PER_SECTION - MIN_QUESTIONS_PER_SECTION + 1),
      ) + MIN_QUESTIONS_PER_SECTION;

    for (let q = 0; q < numQuestions; q++) {
      // All EventTypes that have corresponding add...Item() methods and are not UNSUPPORTED
      const eventTypes = [
        // ScriptApp.EventType.CLOCK,
        // ScriptApp.EventType.ON_CHANGE,
        // ScriptApp.EventType.ON_EDIT,
        // ScriptApp.EventType.ON_EVENT_UPDATED,
        // ScriptApp.EventType.ON_FORM_SUBMIT,
        ScriptApp.EventType.ON_OPEN,
      ];
      const rndTMult = Math.floor(Math.random() * eventTypes.length);
      const randomType = eventTypes[rndTMult];
      Logger.log(randomType);

      switch (randomType) {
        case ScriptApp.EventType.ON_OPEN:
          const rndText = six.driveDocBrowser();
          const userText =
            rndText[Math.floor(Math.random() * Math.floor(rndText.length))];
          const textItem = DocumentApp.openByUrl(userText);
          // .addTextItem()
          // .setTitle(questionTitle + " (Short Text)");
          // if (isRequired) {
          //   console.info(textItem.getBody().getText().toString());
          //   if (script.length === 0) {
          //     console.info(script?.toString());
          //     scriptUrl = six.resolveParams(
          //       isMapped({ a: [] }, [scriptTitle])["a"],
          //     );
          //   } else {
          //     fileIndex = six.crmT(scriptTitle);
          //     fileParams = functionRegistry.paramsList[fileIndex];
          //     scriptUrl = six.resolveParams(
          //       six.isMapped({ a: [...fileParams?.parameters] }, [
          //         scriptTitle,
          //         [...fileParams?.parameters],
          //       ])["a"],
          //     );
          //   }
          // } else {
          //   mapArr[scriptTitle] = [];
          //   if (script.length === 0) {
          //     scriptUrl = six.isMapped(mapArr, []);
          //   }
          //   else {
          //     fileIndex = six.crmT(scriptTitle);
          //     fileParams = functionRegistry.paramsList[fileIndex];
          //     mapArr[scriptTitle] = [...fileParams];
          //     scriptUrl = six.isMapped(mapArr, [userText]);
          //   }
          // }
          if (Math.random() < 0.4) {
            // Add random text/number validation
            const validationType = Math.floor(Math.random() * 5); // More text validations
            let validationBuilder = FormApp.createTextValidation(); // ScriptApp.WeekDay; // .requireAllScopes(ScriptApp.AuthMode.FULL);
            switch (validationType) {
              case 0:
                validationBuilder.requireNumber(); //.FRIDAY; //;
                break;
              case 1:
                validationBuilder.requireTextContainsPattern("test"); //.MONDAY; //;
                break;
              case 2:
                validationBuilder.requireTextIsEmail(); //.WEDNESDAY; //;
                break;
              case 3:
                validationBuilder.requireTextIsUrl(); //.THURSDAY; //;
                break;
              case 4:
                validationBuilder.requireTextLengthGreaterThanOrEqualTo(5); //.TUESDAY; //;
                break;
            }
            userSubmit
              .addTextItem()
              .setTitle(questionTitle + "\n" + textItem.getBody().getText()) //.textItem
              // .getBody()
              // .appendListItem
              .setValidation(
                validationBuilder.build(),
                // .withCustomMessage("Please follow the specific text rule.")
                // .build()
              )
              .setHelpText("Please follow the specific text rule.");
          }
          break;

        case ScriptApp.EventType.ON_CHANGE:
          const userChangeSheetId = six.sheetsUrls(scriptTitle);
          // const rndParagraphs = six.driveDocBrowser();
          // const userParagraph = rndParagraphs[Math.floor(Math.random() * Math.floor(rndParagraphs.length))];
          // const paragraphItem = ScriptApp.newTrigger(scriptTitle).forSpreadsheet(userChangeSheetId).onOpen().create(); //ScriptApp.newTrigger(scriptTitle).forDocument(DocumentApp.openByUrl(userParagraph).getId()).onOpen().create();
          // .addParagraphTextItem()
          // .setTitle(questionTitle + " (Long Text)");
          const pChoice = DriveApp.getFileById(userChangeSheetId);
          // if (isRequired) {
          //   console.info(pChoice.toString());
          //   if (script.length === 0) {
          //     console.info(script?.toString());
          //     scriptUrl = six.resolveParams(
          //       isMapped({ a: [] }, [scriptTitle])["a"],
          //     );
          //   } else {
          //     fileIndex = six.crmT(scriptTitle);
          //     fileParams = functionRegistry.paramsList[fileIndex];
          //     scriptUrl = six.resolveParams(
          //       six.isMapped({ a: [...fileParams?.parameters] }, [
          //         scriptTitle,
          //         [...fileParams?.parameters],
          //       ])["a"],
          //     );
          //   }
          // } else {
          //   mapArr[scriptTitle] = [];
          //   if (script.length === 0) {
          //     scriptUrl = six.isMapped(mapArr, []);
          //   }
          //   else {
          //     fileIndex = six.crmT(scriptTitle);
          //     fileParams = functionRegistry.paramsList[fileIndex];
          //     mapArr[scriptTitle] = [...fileParams];
          //     scriptUrl = six.isMapped(mapArr, [pChoice.getMimeType()]);
          //   }
          // }
          if (Math.random() < 0.3) {
            // Add random length validation
            // **** CORRECTED: Use createParagraphTextValidation() ****
            pChoice.getAccess(six.email());
            userSubmit
              .addParagraphTextItem()
              .setTitle(questionTitle + "\n" + pChoice.getDescription())
              .setValidation(
                FormApp.createParagraphTextValidation()
                  .requireTextLengthGreaterThanOrEqualTo(20)
                  .withCustomMessage("Please write at least 20 characters.")
                  .build(),
              );
          }
          break;

        case ScriptApp.EventType.ON_EDIT:
          const userEditSheetId = six.sheetsUrls(scriptTitle);
          // const editTrigger = ScriptApp.newTrigger(scriptTitle).forSpreadsheet(userEditSheetId).onOpen().create();
          // const mcItem = editTrigger;
          // const cbItem = editTrigger;
          // const listItem = editTrigger;
          // .addMultipleChoiceItem()
          // .setTitle(questionTitle + " (Choose One)");
          const mcChoices = [];
          const cbChoices = [];
          const listChoices = [];
          const cChoice = DriveApp.getFileById(userEditSheetId);
          var cCId = cChoice.getId();
          const dChoice = SpreadsheetApp.openById(cCId);
          const dSheets = dChoice.getSheets();
          dSheets.map((sheet) => {
            if (sheet) {
              let sheetName = sheet.getName();
              let endLine = sheet.getLastRow() + 1;
              let endColumn = sheet.getLastColumn() + 1;
              sheet
                .getRange(endLine, 1, 3)
                .setValues([["Row 1"], ["Row 2"], ["Row 3"]]);
              sheet
                .getRange(1, endColumn, 3)
                .setValues([["Disagree"], ["Neutral"], ["Agree"]]);
            }
          });
          // dSheets.map((sheet) =>{
          //   if (sheet) {
          //     let sheetName = sheet.getName()
          //     let endColumn = sheet.getLastColumn() + 1;
          //     sheet.getRange(1,endColumn,3).setValues([["Disagree"], ["Neutral"], ["Agree"]])
          //   }
          // });
          for (let i = 0; i < Math.floor(Math.random() * 3) + 2; i++) {
            // 2-4 choices
            mcChoices.push(
              cChoice.setDescription(
                CHOICE_WORDS[Math.floor(Math.random() * CHOICE_WORDS.length)],
              ),
            );
          }
          for (let i = 0; i < Math.floor(Math.random() * 4) + 2; i++) {
            // 2-5 choices
            cbChoices.push(
              CHOICE_WORDS[Math.floor(Math.random() * CHOICE_WORDS.length)],
            );
          }
          for (let i = 0; i < Math.floor(Math.random() * 3) + 2; i++) {
            // 2-4 choices
            listChoices.push(
              cChoice.setDescription(
                CHOICE_WORDS[Math.floor(Math.random() * CHOICE_WORDS.length)],
              ),
            );
          }
          // cChoice.makeCopy().setDescription(mcChoices);
          // cChoice.makeCopy().setDescription(cbChoices);
          // cChoice.makeCopy().setDescription(listChoices);
          // if (isRequired) script();
          if (Math.random() < 0.3) {
            // Add random checkbox validation
            cChoice.getAccess(six.email());
            // ScriptApp.createCheckboxValidation()
            //   .setHelpText("Select between 1 and 3 options.")
            //   .requireSelectBetween(1, 3)
            //   .build(),
            // );
          }
          // if (isRequired) {
          //   console.info(dChoice.toString());
          //   if (script.length === 0) {
          //     console.info(script?.toString());
          //     scriptUrl = six.resolveParams(
          //       isMapped({ a: [] }, [scriptTitle])["a"],
          //     );
          //   } else {
          //     fileIndex = six.crmT(scriptTitle);
          //     fileParams = functionRegistry.paramsList[fileIndex];
          //     scriptUrl = six.resolveParams(
          //       isMapped({ a: [...fileParams?.parameters] }, [
          //         scriptTitle,
          //         [...fileParams?.parameters],
          //       ])["a"],
          //     );
          //   }
          // } else {
          //   mapArr[scriptTitle] = [];
          //   if (script.length === 0) {
          //     scriptUrl = six.isMapped(mapArr, []);
          //   }
          //   else {
          //     fileIndex = six.crmT(scriptTitle);
          //     fileParams = functionRegistry.paramsList[fileIndex];
          //     mapArr[scriptTitle] = [...fileParams];
          //     scriptUrl = six.isMapped(mapArr, [cChoice.getMimeType()]);
          //   }
          // }; // Randomly add 'Other' option
          // if (Math.random() < 0.2) cbItem.showOtherOption(true); // Randomly add 'Other' option
          break;

        // case ScriptApp.EventType.ON_EVENT_UPDATED:
        //   const userEMail = six.email();
        //   const cbItem = ScriptApp.newTrigger(scriptTitle).forSpreadsheet(userSheetId).onOpen().create();// ScriptApp.newTrigger(scriptTitle).forUserCalendar(userEMail).onEventUpdated()?.create();
        //     // .addCheckboxItem()
        //     // .setTitle(questionTitle + " (Select All That Apply)");
        //   break;

        // case ScriptApp.EventType.ON_FORM_SUBMIT:
        //   const listItem = ScriptApp.newTrigger(scriptTitle).forForm(FormApp.create(scriptTitle).getId()).onFormSubmit().create()
        //     // .addListItem()
        //     // .setTitle(questionTitle + " (Dropdown)");
        //   break;

        case ScriptApp.EventType.CLOCK:
          // const clockTrigger = ScriptApp.newTrigger(scriptTitle).timeBased().everyHours(24).create();
          // const dateItem = clockTrigger
          // const dateTimeItem =  clockTrigger// ScriptApp.newTrigger(scriptTitle).forSpreadsheet(userSheetId).onOpen().create();
          // .addDateItem()
          // .setTitle(questionTitle + " (Date)");
          // if (isRequired) {
          //   // console.info(script?.toString());
          //   if (script.length === 0) {
          //     console.info(script?.toString());
          //     scriptUrl = six.resolveParams(
          //       six.isMapped({ a: [] }, [scriptTitle])["a"],
          //     );
          //   } else {
          //     fileIndex = six.crmT(scriptTitle);
          //     fileParams = functionRegistry.paramsList[fileIndex];
          //     scriptUrl = six.resolveParams(
          //       six.isMapped({ a: [...fileParams?.parameters] }, [
          //         scriptTitle,
          //         [...fileParams?.parameters],
          //       ])["a"],
          //     );
          //   }
          // } else {
          //   mapArr[scriptTitle] = [];
          //   if (script.length === 0) {
          //     scriptUrl = six.isMapped(mapArr, []);
          //   }
          //   else {
          //     fileIndex = six.crmT(scriptTitle);
          //     fileParams = functionRegistry.paramsList[fileIndex];
          //     mapArr[scriptTitle] = [...fileParams];
          //     scriptUrl = six.isMapped(mapArr, [new Date().getDate().toLocaleString()]);
          //   }
          // }; //.setRequired(true);
          // if (isRequired) script();
          // dateItem.setIncludesYear(Math.random() < 0.5); // Randomly include year
          // dateTimeItem.setIncludesYear(Math.random() < 0.5); // Randomly include year
          break;

        // case ScriptApp.ItemType.DATETIME:
        //   const dateTimeItem = script
        //     .addDateTimeItem()
        //     .setTitle(questionTitle + " (Date & Time)");
        //   break;

        case ScriptApp.EventType.ON_EVENT_UPDATED:
          const userEMail = six.email();
          // try {
          //   const durationItem = ScriptApp.newTrigger(scriptTitle).forUserCalendar(userEMail).onEventUpdated().create();
          // }
          // catch (error){
          //   console.warn("No Bueno!", error.stack)
          // }
          // .addDurationItem()
          // .setTitle(questionTitle + " (Duration)");
          // if (isRequired) {
          //   console.info(userEMail);
          //   if (script.length === 0) {
          //     console.info(script?.toString());
          //     // var tempObj =
          //     scriptUrl = six.resolveParams(
          //       isMapped({ a: [] }, [scriptTitle])["a"],
          //     );
          //   }
          //   else {
          //     fileIndex = six.crmT(scriptTitle);
          //     fileParams = functionRegistry.paramsList[fileIndex];
          //     // var tempObj =
          //     scriptUrl = six.resolveParams(
          //       six.isMapped({ a: [...fileParams?.parameters] }, [
          //         scriptTitle,
          //         [...fileParams?.parameters],
          //       ])["a"],
          //     );
          //   }
          // }
          // else {
          //   mapArr[scriptTitle] = [];
          //   if (script.length === 0) {
          //     scriptUrl = six.isMapped(mapArr, []);
          //   }
          //   else {
          //     fileIndex = six.crmT(scriptTitle);
          //     fileParams = functionRegistry.paramsList[fileIndex];
          //     mapArr[scriptTitle] = [...fileParams];
          //     scriptUrl = six.isMapped(mapArr, [userEMail]);
          //   }
          // }
          break;

        // case ScriptApp.ItemType.TIME:
        //   const timeItem = script
        //     .addTimeItem()
        //     .setTitle(questionTitle + " (Time)");
        //   if (isRequired) timeItem.setRequired(true);
        //   break;

        // case ScriptApp.ItemType.SCALE:
        //   const scaleItem = script
        //     .addScaleItem()
        //     .setTitle(questionTitle + " (Rating Scale)");
        //   scaleItem.setLowerBound(1);
        //   scaleItem.setUpperBound(Math.floor(Math.random() * 5) + 5); // Scale of 1 to 5-9
        //   if (Math.random() < 0.5) scaleItem.setLabels("Lowest", "Highest");
        //   if (isRequired) scaleItem.setRequired(true);
        //   break;

        // case ScriptApp.ItemType.RATING:
        //   const ratingItem = script
        //     .addRatingItem()
        //     .setTitle(questionTitle + " (Icon Rating)");
        //   ratingItem.setRatingScaleLevel(Math.floor(Math.random() * 5) + 5); // Scale of 5-9
        //   const ratingIcons = [
        //     ScriptApp.RatingIconType.STAREnum,
        //     ScriptApp.RatingIconType.HEARTEnum,
        //     ScriptApp.RatingIconType.THUMB_UPEnum,
        //   ];
        //   ratingItem.setRatingIcon(
        //     ratingIcons[Math.floor(Math.random() * ratingIcons.length)],
        //   );
        //   if (isRequired) ratingItem.setRequired(true);
        //   break;

        // case ScriptApp.ItemType.GRID:
        //   break;

        // case ScriptApp.ItemType.CHECKBOX_GRID:
        //   break;

        // case ScriptApp.EventType.ON_FORM_SUBMIT:
        //   const userSubmit = FormApp.create(scriptTitle);
        //   const sectionHeaderItem = userSubmit
        //     .addSectionHeaderItem()
        //     .setTitle(questionTitle + " (New Section)");
        //   const checkboxGridItem = userSubmit
        //     .addCheckboxGridItem()
        //     .setTitle(questionTitle + " (Checkbox Grid)");
        //   const gridItem = userSubmit
        //     .addGridItem()
        //     .setTitle(questionTitle + " (Radio Grid)");
        //   const imageItem = userSubmit
        //     // .addImageItem()
        //     // .setTitle(questionTitle + " (Image)");
        //   const videoItem = userSubmit
        //     .addVideoItem()
        //     .setTitle(questionTitle + " (Video)");
        //   // Use a valid YouTube video ID
        //   videoItem.setVideoUrl("https://www.youtube.com/watch?v=dQw4w9WgXcQ"); // Rick Astley - Never Gonna Give You Up (a classic placeholder)
        //   videoItem.setWidth(Math.floor(Math.random() * 300) + 400); // 400-700px width
        //   const videoAlignments = [
        //     FormApp.Alignment.LEFT,
        //     FormApp.Alignment.CENTER,
        //     FormApp.Alignment.RIGHT,
        //   ];
        //   videoItem.setAlignment(
        //     videoAlignments[Math.floor(Math.random() * videoAlignments.length)],
        //   );
        //   let imgFile = six.seoPictTime(scriptTitle, functionRegistry.time).playList;
        //   let rndfileImage = imgFile[Math.floor(Math.random() * (Math.floor(imgFile.length)))];
        //   if (rndfileImage) {
        //     let deepFileDive = DriveApp.getFilesByName(rndfileImage);
        //     var nextDFD = deepFileDive.hasNext()
        //   }
        //   if (nextDFD) {
        //     while (nextDFD) {
        //       let dFile = deepFileDive
        //       // Use a public image URL or provide a Blob
        //       imageItem.setImage(dFile.getBlob()); // Replace with a real public image ID
        //       // Or use a placeholder image if you don't want to use DriveApp and have a public URL
        //       // imageItem.setUrl('https://via.placeholder.com/150'); // This method doesn't exist, must be Blob
        //       imageItem.setWidth(Math.floor(Math.random() * 300) + 200); // 200-500px width
        //       const alignments = [
        //         FormApp.Alignment.LEFT,
        //         FormApp.Alignment.CENTER,
        //         FormApp.Alignment.RIGHT,
        //       ];
        //       imageItem.setAlignment(
        //         alignments[Math.floor(Math.random() * alignments.length)],
        //       );
        //     }
        //   }
        //   else {
        //     imgFile.map((piece) => {
        //       // while (piece) {
        //       var srPiece = piece[piece.indexOf("src2=")];
        //       var svPiece = piece[piece.indexOf("xmlns=")];
        //       var srImgRes = [piece.slice(srPiece).toString().split("src2=")]
        //         .join("")
        //         .split('"')[1];
        //       if ([svPiece].indexOf("svg") > -1) {
        //         var svImgRes = [piece.slice(svPiece).toString().split("xmlns=")]
        //           .join("")
        //           .split('"')[1];
        //       }
        //       if (piece.indexOf("http") > -1) {
        //         var elaspeTime = functionRegistry.time;
        //         var timeToExecute = functionRegistry.timeLeftToExecute;
        //         userSubmit.addPageBreakItem().setTitle([questionTitle].join(""));
        //         userSubmit.addSectionHeaderItem().setTitle(piece);
        //         if (srImgRes || svImgRes) {
        //           var imgUrl = srImgRes || svImgRes;
        //         }
        //         if ([imgUrl].join("").length > 0) {
        //           const alignments = [
        //             FormApp.Alignment.LEFT,
        //             FormApp.Alignment.CENTER,
        //             FormApp.Alignment.RIGHT,
        //           ];
        //           imageItem
        //             .addImageItem()
        //             .setTitle(questionTitle + " storyboard")
        //             .setImage(UrlFetchApp.fetch(imgUrl))
        //             .setWidth(Math.floor(Math.random() * 300) + 200) // 200-500px width
        //             .setAlignment(
        //             alignments[Math.floor(Math.random() * alignments.length)],
        //           );
        //         }
        //         // if (
        //         //   timeToExecute <= 6 * 60 * 1000 &&
        //         //   timeToExecute >= 5.98 * 60 * 1000
        //         // ) {
        //         //   console.log(
        //         //     "that function: " +
        //         //       arguments.callee.caller.name +
        //         //       "\nthis function: " +
        //         //       arguments.callee.name +
        //         //       "\nTime limit six minutes",
        //         //   );
        //         // }
        //         // if (timeToExecute <= 0.05 * 60 * 1000) {
        //         //   console.log(
        //         //     "piece: " +
        //         //       piece[0] +
        //         //       "\ntimeToExecute: " +
        //         //       timeToExecute.valueOf(),
        //         //   );
        //         //   return;
        //         // }
        //         // return piece[0];
        //       }
        //       // return;
        //       // }
        //     });
        //     // Use a public image URL or provide a Blob
        //     // imageItem.setImage(UrlFetchApp.fetch(rndfileImage)); // Replace with a real public image ID
        //     // Or use a placeholder image if you don't want to use DriveApp and have a public URL
        //     // imageItem.setUrl('https://via.placeholder.com/150'); // This method doesn't exist, must be Blob
        //     // imageItem.setWidth(Math.floor(Math.random() * 300) + 200); // 200-500px width
        //     // const alignments = [
        //     //   FormApp.Alignment.LEFT,
        //     //   FormApp.Alignment.CENTER,
        //     //   FormApp.Alignment.RIGHT,
        //     // ];
        //     // imageItem.setAlignment(
        //     //   alignments[Math.floor(Math.random() * alignments.length)],
        //     // );
        //   }
        //   if (isRequired) gridItem.setRequired(true);
        //   if (Math.random() < 0.3) {
        //     gridItem.setValidation(
        //       FormApp.createGridValidation()
        //         .requireLimitOneResponsePerColumn()
        //         .build(),
        //     );
        //   }
        //   checkboxGridItem.setRows(["Feature A", "Feature B", "Feature C"]);
        //   checkboxGridItem.setColumns(["Yes", "No", "N/A"]);
        //   if (isRequired) checkboxGridItem.setRequired(true);
        //   if (Math.random() < 0.3) {
        //     checkboxGridItem.setValidation(
        //       FormApp.createCheckboxGridValidation()
        //         .requireLimitOneResponsePerColumn()
        //         .build(),
        //     );
        //   }
        //   if (Math.random() < 0.7) {
        //     sectionHeaderItem.setHelpText(
        //       "This is a random section header for organization.",
        //     );
        //   }
        //   if (isRequired) {
        //     console.info(userEMail);
        //     if (script.length === 0) {
        //       console.info(script?.toString());
        //       // var tempObj =
        //       scriptUrl = six.resolveParams(
        //         six.isMapped({ a: [] }, [scriptTitle])["a"],
        //       );
        //     } else {
        //       fileIndex = six.crmT(scriptTitle);
        //       fileParams = functionRegistry.paramsList[fileIndex];
        //       // var tempObj =
        //       scriptUrl = six.resolveParams(
        //         six.isMapped({ a: [...fileParams?.parameters] }, [
        //           scriptTitle,
        //           [...fileParams?.parameters],
        //         ])["a"],
        //       );
        //     }
        //   } else {
        //     if (script.length === 0) {
        //       mapArr[scriptTitle] = [];
        //       scriptUrl = six.isMapped(mapArr, []);
        //     }
        //     else {
        //       fileIndex = six.crmT(scriptTitle);
        //       fileParams = functionRegistry.paramsList[fileIndex];
        //       mapArr[scriptTitle] = [...fileParams];
        //       scriptUrl = six.isMapped(mapArr, [userSubmit.getPublishedUrl()]);
        //     }
        //   }
        //   // scriptUrl = userSubmit.getPublishedUrl();
        //   break;

        // case ScriptApp.ItemType.IMAGE:
        //   break;

        // case ScriptApp.ItemType.VIDEO:
        //   break;
      }
    }
  }

  // --- Log and Return Script URL ---
  Logger.log(`Random script Created: ${JSON.stringify(scriptUrl)}`);
  return scriptUrl;
}

/**
 * Creates a new Google Form with a random structure and content,
 * leveraging available FormsApp properties and methods from the provided documentation.
 *
 * NOTE: Programmatic control over font styles and direct theme color
 * setting (beyond the initial form creation) is NOT available via the FormsApp API.
 * The form will use Google Forms' default theme or the last manually applied theme.
 *
 * @returns {string} The URL of the newly created random Google Form.
 */
function createRandomForm() {
  // --- Configuration for randomness ---
  const FORM_TITLES = [
    "Random Survey",
    "Quick Feedback Form",
    "Daily Check-in",
    "Mystery Questionnaire",
    "Event Registration",
    "Project Status Update",
    "Abstract Data Collection",
    "Whimsical Inquiry",
    "Customer Poll",
    "Service Evaluation",
    "Product Interest Form",
  ];
  const FORM_DESCRIPTIONS = [
    "A randomly generated form to gather insights.",
    "Please fill out this form at your leisure. Content is randomized.",
    "Exploring the possibilities of programmatic form creation.",
    "This form was created by an algorithm. Enjoy!",
    "Your input helps us understand randomness better.",
    "An automated inquiry for diverse data points.",
    "Completely random, yet surprisingly functional.",
  ];
  const QUESTION_WORDS = [
    "Name",
    "Email",
    "Date",
    "Preference",
    "Opinion",
    "Favorite",
    "Quantity",
    "Description",
    "Rating",
    "Contact",
    "Experience",
    "Level",
    "Choice",
    "Details",
    "Location",
    "Time",
    "Duration",
    "Feedback",
  ];
  const CHOICE_WORDS = [
    "Option A",
    "Choice B",
    "Value C",
    "Item D",
    "Selection E",
    "Yes",
    "No",
    "Maybe",
    "Agree",
    "Disagree",
    "Red",
    "Blue",
    "Green",
    "Small",
    "Medium",
    "Large",
  ];

  const MIN_SECTIONS = 1;
  const MAX_SECTIONS = 3;
  const MIN_QUESTIONS_PER_SECTION = 2;
  const MAX_QUESTIONS_PER_SECTION = 7;

  // --- Create the Form ---
  const formTitle = FORM_TITLES[Math.floor(Math.random() * FORM_TITLES.length)];
  const form = FormApp.create(formTitle);
  Logger.log(`Created new form: ${form.getTitle()} - ${form.getEditUrl()}`);

  // --- Set Basic Form Properties ---
  const formDescription =
    FORM_DESCRIPTIONS[Math.floor(Math.random() * FORM_DESCRIPTIONS.length)];
  form.setDescription(formDescription);

  // Randomly decide to collect email or not
  form.setCollectEmail(Math.random() < 0.5);

  // Randomly decide to show progress bar for multi-section forms
  if (Math.random() < 0.7) {
    form.setProgressBar(true); // Using setProgressBar as found in Form methods
  }

  // --- Add Sections and Questions ---
  const numSections =
    Math.floor(Math.random() * (MAX_SECTIONS - MIN_SECTIONS + 1)) +
    MIN_SECTIONS;

  for (let s = 0; s < numSections; s++) {
    if (s > 0) {
      // Add page break for subsequent sections
      form
        .addPageBreakItem()
        .setTitle(
          `Section ${s + 1}: ${QUESTION_WORDS[Math.floor(Math.random() * QUESTION_WORDS.length)]} Details`,
        )
        .setHelpText(
          `This is a random section for more ${QUESTION_WORDS[Math.floor(Math.random() * QUESTION_WORDS.length)]} related questions.`,
        );
    }

    const numQuestions =
      Math.floor(
        Math.random() *
          (MAX_QUESTIONS_PER_SECTION - MIN_QUESTIONS_PER_SECTION + 1),
      ) + MIN_QUESTIONS_PER_SECTION;

    for (let q = 0; q < numQuestions; q++) {
      // All ItemTypes that have corresponding add...Item() methods and are not UNSUPPORTED
      const itemTypes = [
        FormApp.ItemType.TEXT,
        FormApp.ItemType.PARAGRAPH_TEXT,
        FormApp.ItemType.MULTIPLE_CHOICE,
        FormApp.ItemType.CHECKBOX,
        FormApp.ItemType.LIST,
        FormApp.ItemType.DATE,
        FormApp.ItemType.DATETIME,
        FormApp.ItemType.DURATION,
        FormApp.ItemType.TIME,
        FormApp.ItemType.SCALE,
        FormApp.ItemType.RATING,
        FormApp.ItemType.GRID,
        FormApp.ItemType.CHECKBOX_GRID,
        FormApp.ItemType.SECTION_HEADER, // Can add section headers within sections
        FormApp.ItemType.IMAGE,
        FormApp.ItemType.VIDEO,
      ];
      const randomType =
        itemTypes[Math.floor(Math.random() * itemTypes.length)];

      const questionTitle = `${QUESTION_WORDS[Math.floor(Math.random() * QUESTION_WORDS.length)]} ${Math.random() < 0.5 ? "?" : ""}`;
      const isRequired = Math.random() < 0.7; // 70% chance of being required

      switch (randomType) {
        case FormApp.ItemType.TEXT:
          const textItem = form
            .addTextItem()
            .setTitle(questionTitle + " (Short Text)");
          if (isRequired) textItem.setRequired(true);
          if (Math.random() < 0.4) {
            // Add random text/number validation
            const validationType = Math.floor(Math.random() * 5); // More text validations
            let validationBuilder = FormApp.createTextValidation();
            switch (validationType) {
              case 0:
                validationBuilder.requireNumber();
                break;
              case 1:
                validationBuilder.requireTextContainsPattern("test");
                break;
              case 2:
                validationBuilder.requireTextIsEmail();
                break;
              case 3:
                validationBuilder.requireTextIsUrl();
                break;
              case 4:
                validationBuilder.requireTextLengthGreaterThanOrEqualTo(5);
                break;
            }
            textItem.setValidation(
              validationBuilder
                .withCustomMessage("Please follow the specific text rule.")
                .build(),
            );
          }
          break;

        case FormApp.ItemType.PARAGRAPH_TEXT:
          const paragraphItem = form
            .addParagraphTextItem()
            .setTitle(questionTitle + " (Long Text)");
          if (isRequired) paragraphItem.setRequired(true);
          if (Math.random() < 0.3) {
            // Add random length validation
            // **** CORRECTED: Use createParagraphTextValidation() ****
            paragraphItem.setValidation(
              FormApp.createParagraphTextValidation()
                .requireTextLengthGreaterThanOrEqualTo(20)
                .withCustomMessage("Please write at least 20 characters.")
                .build(),
            );
          }
          break;

        case FormApp.ItemType.MULTIPLE_CHOICE:
          const mcItem = form
            .addMultipleChoiceItem()
            .setTitle(questionTitle + " (Choose One)");
          const mcChoices = [];
          for (let i = 0; i < Math.floor(Math.random() * 3) + 2; i++) {
            // 2-4 choices
            mcChoices.push(
              mcItem.createChoice(
                CHOICE_WORDS[Math.floor(Math.random() * CHOICE_WORDS.length)],
              ),
            );
          }
          mcItem.setChoices(mcChoices);
          if (isRequired) mcItem.setRequired(true);
          if (Math.random() < 0.2) mcItem.showOtherOption(true); // Randomly add 'Other' option
          break;

        case FormApp.ItemType.CHECKBOX:
          const cbItem = form
            .addCheckboxItem()
            .setTitle(questionTitle + " (Select All That Apply)");
          const cbChoices = [];
          for (let i = 0; i < Math.floor(Math.random() * 4) + 2; i++) {
            // 2-5 choices
            cbChoices.push(
              cbItem.createChoice(
                CHOICE_WORDS[Math.floor(Math.random() * CHOICE_WORDS.length)],
              ),
            );
          }
          cbItem.setChoices(cbChoices);
          if (isRequired) cbItem.setRequired(true);
          if (Math.random() < 0.3) {
            // Add random checkbox validation
            cbItem.setValidation(
              FormApp.createCheckboxValidation()
                .setHelpText("Select between 1 and 3 options.")
                .requireSelectBetween(1, 3)
                .build(),
            );
          }
          if (Math.random() < 0.2) cbItem.showOtherOption(true); // Randomly add 'Other' option
          break;

        case FormApp.ItemType.LIST:
          const listItem = form
            .addListItem()
            .setTitle(questionTitle + " (Dropdown)");
          const listChoices = [];
          for (let i = 0; i < Math.floor(Math.random() * 3) + 2; i++) {
            // 2-4 choices
            listChoices.push(
              listItem.createChoice(
                CHOICE_WORDS[Math.floor(Math.random() * CHOICE_WORDS.length)],
              ),
            );
          }
          listItem.setChoices(listChoices);
          if (isRequired) listItem.setRequired(true);
          break;

        case FormApp.ItemType.DATE:
          const dateItem = form
            .addDateItem()
            .setTitle(questionTitle + " (Date)");
          if (isRequired) dateItem.setRequired(true);
          dateItem.setIncludesYear(Math.random() < 0.5); // Randomly include year
          break;

        case FormApp.ItemType.DATETIME:
          const dateTimeItem = form
            .addDateTimeItem()
            .setTitle(questionTitle + " (Date & Time)");
          if (isRequired) dateTimeItem.setRequired(true);
          dateTimeItem.setIncludesYear(Math.random() < 0.5); // Randomly include year
          break;

        case FormApp.ItemType.DURATION:
          const durationItem = form
            .addDurationItem()
            .setTitle(questionTitle + " (Duration)");
          if (isRequired) durationItem.setRequired(true);
          break;

        case FormApp.ItemType.TIME:
          const timeItem = form
            .addTimeItem()
            .setTitle(questionTitle + " (Time)");
          if (isRequired) timeItem.setRequired(true);
          break;

        case FormApp.ItemType.SCALE:
          const scaleItem = form
            .addScaleItem()
            .setTitle(questionTitle + " (Rating Scale)");
          scaleItem.setBounds(1, Math.floor(Math.random() * 5) + 5); // Scale of 1 to 5-9
          if (Math.random() < 0.5) scaleItem.setLabels("Lowest", "Highest");
          if (isRequired) scaleItem.setRequired(true);
          break;

        case FormApp.ItemType.RATING:
          const ratingItem = form
            .addRatingItem()
            .setTitle(questionTitle + " (Icon Rating)");
          ratingItem.setRatingScaleLevel(Math.floor(Math.random() * 5) + 5); // Scale of 5-9
          const ratingIcons = [
            FormApp.RatingIconType.STAREnum,
            FormApp.RatingIconType.HEARTEnum,
            FormApp.RatingIconType.THUMB_UPEnum,
          ];
          ratingItem.setRatingIcon(
            ratingIcons[Math.floor(Math.random() * ratingIcons.length)],
          );
          if (isRequired) ratingItem.setRequired(true);
          break;

        case FormApp.ItemType.GRID:
          const gridItem = form
            .addGridItem()
            .setTitle(questionTitle + " (Radio Grid)");
          gridItem.setRows(["Row 1", "Row 2", "Row 3"]);
          gridItem.setColumns(["Disagree", "Neutral", "Agree"]);
          if (isRequired) gridItem.setRequired(true);
          if (Math.random() < 0.3) {
            gridItem.setValidation(
              FormApp.createGridValidation()
                .requireLimitOneResponsePerColumn()
                .build(),
            );
          }
          break;

        case FormApp.ItemType.CHECKBOX_GRID:
          const checkboxGridItem = form
            .addCheckboxGridItem()
            .setTitle(questionTitle + " (Checkbox Grid)");
          checkboxGridItem.setRows(["Feature A", "Feature B", "Feature C"]);
          checkboxGridItem.setColumns(["Yes", "No", "N/A"]);
          if (isRequired) checkboxGridItem.setRequired(true);
          if (Math.random() < 0.3) {
            checkboxGridItem.setValidation(
              FormApp.createCheckboxGridValidation()
                .requireLimitOneResponsePerColumn()
                .build(),
            );
          }
          break;

        case FormApp.ItemType.SECTION_HEADER:
          const sectionHeaderItem = form
            .addSectionHeaderItem()
            .setTitle(questionTitle + " (New Section)");
          if (Math.random() < 0.7) {
            sectionHeaderItem.setHelpText(
              "This is a random section header for organization.",
            );
          }
          break;

        case FormApp.ItemType.IMAGE:
          const imageItem = form
            .addImageItem()
            .setTitle(questionTitle + " (Image)");
          // Use a public image URL or provide a Blob
          imageItem.setImage(
            DriveApp.getFileById("YOUR_PUBLIC_IMAGE_FILE_ID_HERE").getBlob(),
          ); // Replace with a real public image ID
          // Or use a placeholder image if you don't want to use DriveApp and have a public URL
          // imageItem.setUrl('https://via.placeholder.com/150'); // This method doesn't exist, must be Blob
          imageItem.setWidth(Math.floor(Math.random() * 300) + 200); // 200-500px width
          const alignments = [
            FormApp.Alignment.LEFT,
            FormApp.Alignment.CENTER,
            FormApp.Alignment.RIGHT,
          ];
          imageItem.setAlignment(
            alignments[Math.floor(Math.random() * alignments.length)],
          );
          break;

        case FormApp.ItemType.VIDEO:
          const videoItem = form
            .addVideoItem()
            .setTitle(questionTitle + " (Video)");
          // Use a valid YouTube video ID
          videoItem.setVideoUrl("https://www.youtube.com/watch?v=dQw4w9WgXcQ"); // Rick Astley - Never Gonna Give You Up (a classic placeholder)
          videoItem.setWidth(Math.floor(Math.random() * 300) + 400); // 400-700px width
          const videoAlignments = [
            FormApp.Alignment.LEFT,
            FormApp.Alignment.CENTER,
            FormApp.Alignment.RIGHT,
          ];
          videoItem.setAlignment(
            videoAlignments[Math.floor(Math.random() * videoAlignments.length)],
          );
          break;
      }
    }
  }

  // --- Log and Return Form URL ---
  const formUrl = form.getPublishedUrl();
  Logger.log(`Random Form Created: ${formUrl}`);
  return formUrl;
}

/**
 * Creates a new Google Form with a random structure and content,
 * leveraging available FormsApp properties and methods from the provided documentation.
 *
 * NOTE: Programmatic control over font styles and direct theme color
 * setting (beyond the initial form creation) is NOT available via the FormsApp API.
 * The form will use Google Forms' default theme or the last manually applied theme.
 *
 * @returns {string} The URL of the newly created random Google Form.
 */
function createProcessForm(searchString) {
  // --- Configuration for randomness ---
  var executed = 0;
  const FORM_TITLES = searchString
    ? Array(searchString)
    : functionRegistry.fileList;
  console.log("FORM_TITLES = " + FORM_TITLES, executed++);
  const FORM_DESCRIPTIONS = [
    "A randomly generated script to gather insights.",
    "Please fill out this script at your leisure. Content is randomized.",
    "Exploring the possibilities of programmatic script creation.",
    "This script was created by an algorithm. Enjoy!",
    "Your input helps us understand randomness better.",
    "An automated inquiry for diverse data points.",
    "Completely random, yet surprisingly functional.",
  ];
  const QUESTION_WORDS = [
    "Name",
    "Email",
    "Date",
    "Preference",
    "Opinion",
    "Favorite",
    "Quantity",
    "Description",
    "Rating",
    "Contact",
    "Experience",
    "Level",
    "Choice",
    "Details",
    "Location",
    "Time",
    "Duration",
    "Feedback",
  ];
  // --- Create the script ---
  const formTitle =
    FORM_TITLES[Math.floor(Math.random() * FORM_TITLES.length)];
  const form = globalThis[formTitle]; //ScriptApp.newTrigger(formTitle).timeBased().everyHours(24).create();
  Logger.log(`Random script: ${form?.toString()}`);
  Logger.log(`Script name: ${formTitle}`);

  const questionTitle = `${QUESTION_WORDS[Math.floor(Math.random() * QUESTION_WORDS.length)]} ${Math.random() < 0.5 ? "?" : ""}`;
  
  const userSubmit = FormApp.create(formTitle)
  const sectionHeaderItem = userSubmit
    .addSectionHeaderItem()
    .setTitle(questionTitle + " (New Section)");
  const imageItem = userSubmit;
  const imgFile = six.seoPictTime(formTitle, functionRegistry.time)?.playList;
  console.log("imgFile = " + imgFile, executed++);
  let rndfileImage =
    imgFile[Math.floor(Math.random() * Math.floor(imgFile.length))];
  if (rndfileImage) {
    let deepFileDive = DriveApp.getFilesByName(rndfileImage);
    if (deepFileDive.hasNext()) {
      var nextDFD = deepFileDive?.hasNext();
    }
  }
  if (nextDFD) {
    while (nextDFD) {
      let dFile = deepFileDive;
      // Use a public image URL or provide a Blob
      imageItem.setImage(dFile.getBlob()); // Replace with a real public image ID
      // Or use a placeholder image if you don't want to use DriveApp and have a public URL
      // imageItem.setUrl('https://via.placeholder.com/150'); // This method doesn't exist, must be Blob
      imageItem.setWidth(Math.floor(Math.random() * 300) + 200); // 200-500px width
      const alignments = [
        FormApp.Alignment.LEFT,
        FormApp.Alignment.CENTER,
        FormApp.Alignment.RIGHT,
      ];
      imageItem.setAlignment(
        alignments[Math.floor(Math.random() * alignments.length)],
      );
    }
  } else {
    const alignments = [
      FormApp.Alignment.LEFT,
      FormApp.Alignment.CENTER,
      FormApp.Alignment.RIGHT,
    ];
    let tempSortImg = [];
    imgFile.forEach((piece, imgFileIndex) => {
      var srPiece = piece[piece.indexOf("src2=")];
      var svPiece = piece[piece.indexOf("xmlns=")];
      var srImgRes = [piece.slice(srPiece).toString().split("src2=")]
        .join("")
        .split('"')[1];
      if ([svPiece].indexOf("svg") > -1) {
        var svImgRes = [piece.slice(svPiece).toString().split("xmlns=")]
          .join("")
          .split('"')[1];
      }
      if (piece.indexOf("http") > -1) {
        // var elaspeTime = functionRegistry.time;
        // var timeToExecute = functionRegistry.timeLeftToExecute;
        if (srImgRes || svImgRes) {
          var imgUrl = srImgRes || svImgRes;
        }
        if ([imgUrl].join("").length > 0) {
          if (tempSortImg.indexOf(imgUrl) !== -1) {
            return;
          } else {
            tempSortImg.push(imgUrl);
          }
        }
      }
    });
    tempSortImg.forEach((priImg) => {
      userSubmit.addPageBreakItem().setTitle("Storyboard");
      userSubmit.addSectionHeaderItem().setTitle("timestamp: " + new Date());
      try {
        imageItem
          .addImageItem()
          .setTitle(questionTitle + ": " + [script]?.join(""))
          .setImage(UrlFetchApp.fetch(priImg))
          .setWidth(Math.floor(Math.random() * 800) + 200) // 200-500px width
          .setAlignment(
            alignments[Math.floor(Math.random() * alignments.length)],
          );
      } catch (error) {
        console.info(error.stack);
      }
    });
    // Use a public image URL or provide a Blob
    // imageItem.setImage(UrlFetchApp.fetch(rndfileImage)); // Replace with a real public image ID
    // Or use a placeholder image if you don't want to use DriveApp and have a public URL
    // imageItem.setUrl('https://via.placeholder.com/150'); // This method doesn't exist, must be Blob
  }
  if (Math.random() < 0.7) {
    sectionHeaderItem.setHelpText(
      "This is a random section header for organization.",
    );
  }
}

