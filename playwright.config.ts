import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

const envName = process.env.ENV || 'qa';

dotenv.config({
  path: path.resolve(process.cwd(), `env/.env.${envName}`)
});

export default defineConfig({

  
  testDir: './tests',
  timeout:60000,

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 2 : 1,

  // testMatch:["tests/blaze.test.ts"],

  reporter: [
    ['dot'],
    ['list'],
    ['line'],
    ['html'],
    ['allure-playwright']
  ],

  globalTimeout:180000,

  expect:{
    timeout:10000
  },
  


  use: {
    trace: 'on-first-retry',
    headless: process.env.HEADLESS !== 'false',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    navigationTimeout:15000,
    actionTimeout: 10000
    
  },

  projects: [
    {
      name: 'Chromium',
      use: {
        ...devices['Desktop Chrome']
      }
    },

    // {
    //   name: 'Edge',
    //   use: {
    //     ...devices['Desktop Edge'],
    //     channel: 'msedge'
    //   }
    // },

    {
      name: 'Brave',
      use: {
        browserName: 'chromium',
        channel: undefined,
        launchOptions: {
          executablePath:
            'C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe'
        }
      }
    }
  ]
});