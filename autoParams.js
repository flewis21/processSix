const functionRegistry = {
  fileList: [],
  paramsList: [],
  htmlArray: [
    "Untitled",
    "uiAccess",
    "theWorks",
    "theRoll",
    "ssSheets",
    "ssForms",
    "slideCard",
    "Section3.Challenge1",
    "editor",
    "edgarFriendly",
    "cors",
    "cGWI",
    "proMedia",
    "epaWebsite",
    "callBack",
    "oddChances",
    "jsGame",
    "checkOnDay",
    "userInterfaceAccess",
    "styling",
    "popUpOpen",
    "congressLeg",
    "congressMembers",
    "jFundamentals",
    "gnuFree",
    "myGNUFreeJS",
  ],
  initialize: function () {
    for (const key in globalThis) {
      if (typeof globalThis[key] == "function") {
        this.fileList.push(key);
        try {
          const funcString = globalThis[key].toString();
          const params = funcString
            .substring(funcString.indexOf("(") + 1, funcString.indexOf(")"))
            .split(",")
            .map((param) => param.trim())
            .filter((param) => param !== "");
          this.paramsList.push({ name: key, parameters: params });
        } catch (e) {
          Logger.log(`Error processing function: ${key}. Error: ${e}`);
          this.paramsList.push({
            name: key,
            parameters: ["(Unable to parse)"],
          });
        }
      }
    }
  },
  getFileList: function () {
    return this.fileList;
  },
  getParamsList: function () {
    return this.paramsList;
  },
  getHtmlList: function () {
    return this.htmlArray;
  },

  arrVidVals: [],
  vidTree: function () {
    var itemSheet = (function () {
      var ss = (function () {
        var ssApp = SpreadsheetApp;
        var ss = ssApp.openByUrl(
          "https://docs.google.com/spreadsheets/d/1TIzKrqGoZIxpmEt2SH_6IS9E-Yby8JdhD_byZhTjqbo/edit?gid=0#gid=0",
        );
        return ss;
      })();
      var sheet = ss.getSheetByName("001");
      return sheet;
    })();
    var itemArrays = itemSheet.getDataRange().getValues().slice(1);
    this.arrVidVals = itemArrays.map((val) => {
      return {
        Video: val[0],
        Description: val[1],
        "Data Entered": val[3],
        "Last Modified": val[4],
      };
    });
  },
  getVideoList: function () {
    // functionRegistry.gTree();
    return this.arrVidVals;
  },

  arrImgVals: [],
  imgTree: function () {
    var itemSheet = (function () {
      var ss = (function () {
        var ssApp = SpreadsheetApp;
        var ss = ssApp.openByUrl(
          "https://docs.google.com/spreadsheets/d/1V9McFbDwZ4JOuRDGGm3uk-yUX03k4TdyTbWNwHm5M7k/edit?gid=0#gid=0",
        );
        return ss;
      })();
      var sheet = ss.getSheetByName("001");
      return sheet;
    })();
    var itemArrays = itemSheet.getDataRange().getValues().slice(1);
    this.arrImgVals = itemArrays.map((val) => {
      return {
        Image: val[0],
        Description: val[1],
        "Data Entered": val[3],
        "Last Modified": val[4],
      };
    });
  },
  getImageList: function () {
    // functionRegistry.gTree();
    return this.arrImgVals;
  },

  folderTree: [],
  gTree: function () {
    var tree = DriveApp.getFolders(); // Iterator for folders
    // Corrected while loop: Call next() only once per iteration
    while (tree.hasNext()) {
      var folder = tree.next(); // Get the current folder
      // Now check if this 'folder' has files before adding its name
      if (folder) {
        try {
          let fofi = folder.getFiles();
          if (fofi.hasNext()) {
            this.folderTree.push(folder.getName());
          }
        } catch (err) {
          Logger.log("Error getting folder tree", err.stack);
          functionRegistry.gTree();
        }
      }
    }
  },
  getFolderList: function () {
    // functionRegistry.gTree();
    return this.folderTree;
  },

  arrDomainVals: [],
  domainTree: function () {
    var itemSheet = (function () {
      var ss = (function () {
        var ssApp = SpreadsheetApp;
        var ss = ssApp.openByUrl(
          "https://docs.google.com/spreadsheets/d/1-vNcN0vCLcXgMY9uwcKukUgv_4njggRZ6fqoZs-hBFE/edit#gid=138098962",
        );
        return ss;
      })();
      var sheet = ss.getSheetByName("DomainListings");
      return sheet;
    })();
    var itemArrays = itemSheet.getDataRange().getValues().slice(1);
    this.arrDomainVals = itemArrays.map((val) => {
      return {
        Domain: val[0],
        Price: val[1],
        Email: val[2],
      };
    });
  },
  getDomainList: function () {
    // functionRegistry.gTree();
    return this.arrDomainVals;
  },

  maxTime: 6 * 60 * 1000, // This is a simple numerical value
  _startTime: null, // Private variable to store the timestamp when the process begins

  /**
   * Starts the global timer for your process.
   * This should be called only ONCE at the beginning of your main execution.
   */
  startProcessTimer: function () {
    if (this._startTime === null) {
      this._startTime = new Date().getTime();
      console.log(
        "Process timer started at:",
        new Date(this._startTime).toISOString(),
      );
    } else {
      console.warn(
        "Process timer has already started. Call resetProcessTimer() if you want to restart.",
      );
    }
  },

  /**
   * Resets the global timer. Call this if you want to start a completely new execution cycle.
   */
  resetProcessTimer: function () {
    this._startTime = null;
    console.log("Process timer reset.");
  },

  /**
   * Get the elapsed time since the process started.
   * Returns 0 if the timer hasn't been started.
   * @returns {number} Elapsed time in milliseconds.
   */
  get time() {
    if (this._startTime === null) {
      return 0;
    }
    return new Date().getTime() - this._startTime;
  },

  /**
   * Get the time remaining until the 'maxTime' timeout is reached.
   * Returns 'maxTime' if the timer hasn't been started.
   * Ensures the returned value is not negative.
   * @returns {number} Time left to execute in milliseconds.
   */
  get timeLeftToExecute() {
    if (this._startTime === null) {
      return this.maxTime; // Full time remaining if not started
    }
    const elapsed = this.time;
    const remaining = this.maxTime - elapsed;
    return Math.max(0, remaining); // Ensure remaining time doesn't go below zero
  },

  /**
   * Helper to get elapsed time in seconds for easier readability.
   * @returns {number} Elapsed time in seconds.
   */
  get elapsedTimeInSeconds() {
    return Math.floor(this.time / 1000);
  },

  /**
   * Helper to get time left in seconds for easier readability.
   * @returns {number} Time left in seconds.
   */
  get timeLeftInSeconds() {
    return Math.floor(this.timeLeftToExecute / 1000);
  },

  // You can add other functions and properties to functionRegistry here

  // Use a getter for 'time'
  // get time() {
  //   return Math.floor(
  //     (this.maxTime - (new Date().getTime() % (1000 * 60))) / 1000,
  //   );
  // },
  // Use a getter for 'time' to represent the remaining time in the current 6-minute cycle
  // get time() {
  //   // Get the current time in milliseconds since the Unix Epoch
  //   const currentTimeMs = new Date().getTime();

  //   // Calculate how many milliseconds have passed within the *current* 6-minute cycle
  //   // This uses the modulo operator with maxTime
  //   const msPassedInCurrentCycle = currentTimeMs % this.maxTime;

  //   // Calculate the remaining time in milliseconds for the current cycle
  //   const remainingMsInCycle = this.maxTime - msPassedInCurrentCycle;

  //   // Convert the remaining milliseconds to seconds and floor it
  //   return Math.floor(remainingMsInCycle / 1000);
  // },

  // ... other properties or methods ...
};

// Set some global variables
console.log("boilerplate autoParams: line 175");
functionRegistry.initialize();
console.log("boilerplate autoParams: line 177");
functionRegistry.startProcessTimer();