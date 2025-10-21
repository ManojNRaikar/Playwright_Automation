import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig, cucumberReporter } from 'playwright-bdd';
import dotenv from "dotenv"; 
import path from 'path';
dotenv.config();
dotenv.config({ path: path.resolve(__dirname, '.env') });

const testDir = defineBddConfig({
  features: ['features/*.feature'],
  steps: ['Steps/*.{ts,js}','Hooks/hooks.ts'],
});

export default defineConfig({
  testDir,
  reporter: [
    cucumberReporter('html', {
      outputFile: 'cucumber-report/index.html',
      externalAttachments: true,
    }),
    ['html', { open: 'never' }],
  ],
  
  use: {
    screenshot: 'on',
    trace: 'on',
    headless: false,
    launchOptions: 
    {
      args:[
          "--start-maximized",
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
