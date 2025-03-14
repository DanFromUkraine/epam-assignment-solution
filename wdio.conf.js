exports.config = {
  runner: "local",
  specs: ["./test/specs/**/*.js"],
  exclude: [],
  capabilities: [
    {
      maxInstances: 5,
      browserName: "chrome",
      acceptInsecureCerts: true,
      "goog:chromeOptions": {
        args: ["--window-size=1920,1080"],
      },
    },
    {
      maxInstances: 5,
      browserName: "MicrosoftEdge",
      acceptInsecureCerts: true,
      "ms:edgeOptions": {
        args: ["--window-size=1920,1080"],
      },
    },
  ],
  logLevel: "info",
  bail: 0,
  baseUrl: "https://www.saucedemo.com",
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ["chromedriver", "edgedriver"],
  framework: "mocha",
  reporters: [
    "spec",
    [
      "allure",
      {
        outputDir: "allure-results",
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
      },
    ],
  ],

  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
  before: function (capabilities, specs) {
    // Create global logger
    global.logger = {
      info: (msg) => console.log(`[INFO] ${msg}`),
      warn: (msg) => console.warn(`[WARN] ${msg}`),
      error: (msg) => console.error(`[ERROR] ${msg}`),
    };
  },
};
