import { devices, PlaywrightTestConfig } from '@playwright/test';

const capabilities ={
  browserName : "chrome",
  browserVersion: "latest",
  "LT:Options":{
    platform: "Windows 10",
    build: "Playwright Test from config",
    name: "Playwright Test -1",
    user: "kumarmanjunath264",
    accessKey: "Qdyc7JnkkJ7teddCryzEgutimX1BKuGklI3rgQDV7KIDvM65SA",
    network: true,
    video: true,
    console: true,
    tunnel: false,

  },
};


const config: PlaywrightTestConfig ={

  projects: [
    {
        name: "chrome:latest:MacOS Catalina@lambdatest",
        use: {
            viewport: { width: 1920, height: 1080 },
        },
    },
    {
        name: "chrome:latest:Windows 10@lambdatest",
        use: {
            viewport: { width: 1280, height: 720 },
        },
    },
    {
        name: "chrome",
        use: {
            ...devices["Desktop Chrome"]
        }
    },
    {
        name: "firefox",
        use: {
            ...devices["Desktop Firefox"]
        }
    }
],

      
  testMatch: ["tests/Scenario1.test.ts"],
  use: {
    connectOptions: {

      wsEndpoint:`wss://cdp.lambdatest.com/playwright?capabilities=
           ${encodeURIComponent(JSON.stringify(capabilities))}`,
    },
    headless:false,
    screenshot: "on",
    video: "on"
  },
  reporter: [["dot"], ["json", {
    outputFile: "jsonReports/jsonReport.json"
  }],["html",{
    open: "never"
  }]]
};


export default config;