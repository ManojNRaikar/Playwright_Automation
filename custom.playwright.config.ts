import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig, cucumberReporter } from 'playwright-bdd';
import dotenv from "dotenv"; 
import path from 'path';
dotenv.config();
dotenv.config({ path: path.resolve(__dirname, '.env') });

const testDir = defineBddConfig({
  features: ['features/*.feature'],
  steps: ['Steps/*.{ts,js}','Hooks/hooks.ts'],
  aiFix:
  {
    promptAttachment:true,
  }
});

export default defineConfig({
  testDir,
  workers:1,
  reporter: [
        ['html',{open:'always'}], // Playwright's built-in HTML reporter
        ['allure-playwright'], // Allure reporter
        cucumberReporter('html', {
        outputFile: 'cucumber-report/index.html',
        externalAttachments: true,}) // Cucumber repoter
      ],
  
  use: {
    screenshot: 'on',
    trace: 'on',
    headless: false,
    viewport: null,
    // colorScheme: 'dark',
    launchOptions: 
    {
      args:[
          // "--start-maximized",
          "--disable-plugins",
          "--disable-extensions",
          "--edge-skip-compat-layer-relaunch"
        ],timeout:Number.parseInt('0',10)
    },
    channel:process.env.CHANNEL,
  },


  projects: [
    
    // chromium
    // {
    //   name: 'chromium',
    //   use: { ...devices['Desktop Chrome'] },
    // },

    //Edge
    {
      name: 'Microsoft Edge',
      use: { ...devices['Desktop Edge']}
    }

  ],


});
