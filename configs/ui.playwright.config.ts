import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig, cucumberReporter } from 'playwright-bdd';
import dotenv from "dotenv"; 
import {resolve, join} from 'path';
import { trace } from 'console';
import { channel } from 'diagnostics_channel';
import { report } from 'process';
const timeout = 60 * 100

/**
 * See https://playwright.dev/docs/test-configuration.
 */

dotenv.config();
if(process.env.ENV_FILE_NAME){
  dotenv.config({
    path:resolve(__dirname, '..', 'env', process.env.ENV_FILE_NAME),
    override:true
  })
}
// dotenv.config({ path: path.resolve(__dirname, '.env') });



const testDir = defineBddConfig({
  featuresRoot : resolve(__dirname,'..'),
  features: ['../features/*.feature'],
  steps: ['../Steps/*.{ts,js}','../Hooks/hooks.ts'],
  outputDir: '../.features-gen',
  aiFix:{
    promptAttachment:true,
  }
});


const config = {
  use: {
    browserName:'chromium',
    trace:'off',
    headless:false,
    launchOptions: 
    {
      args:[
          "--start-maximized",
          "--disable-plugins",
          "--disable-extensions",
          "--edge-skip-compat-layer-relaunch"
        ],timeout:Number.parseInt('0',10)
    },
    ignoreHttpsErrors: true,
    screenshot: 'only-on-failure',
    channel: 'msedge',
    video: 'retain-on-failure',
    viewport: null,
  },
  testDir:testDir,
  // expect:
  // {
  //   timeout: process.env.EXPECT_TIMEOUT
  // },
  report:[cucumberReporter('html', { outputFile: '../cucumber-report/index.html',externalAttachments:true}), ['html',{open:'never'}]],

  projects: 
  [
    {
      name: 'local',
      testMatch: '*.spec.js',
      testIgnore:''
    }
  ]
}
export default config
  

