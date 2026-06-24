import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
import dotenv from 'dotenv';
import path from 'path';

const envName = process.env.ENV || 'qa';

dotenv.config({ 
  path: path.resolve(__dirname, `./env/.env.${envName}`) 
});


export default defineConfig({
  testDir: './tests',

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 3 : undefined,

  reporter: 'html',

  use: 
  {
    trace: 'on',
    headless: process.env.HEADLESS !== 'false',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  
  },


  projects: [

  {
    name: 'Firefox',
    use: {
      ...devices['Desktop Firefox'],
    },
  },

  {
    name: 'Chromium',
    use: {
      ...devices['Desktop Chrome'],
    },
  },

  {
    name: 'Edge',
    use: {
      ...devices['Desktop Edge'],
      channel: 'msedge',
    },
  },

  {
  name: 'Brave',
  use: {
    browserName: 'chromium',
    launchOptions: {
      executablePath:
        'C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe'
    }
  }
}

],

});
