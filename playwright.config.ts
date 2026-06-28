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

  workers: process.env.CI ? 3 : undefined,

  reporter: [
    ['html'],
    ['allure-playwright']
  ],

  use: {
    trace: 'on-first-retry',
    headless: process.env.HEADLESS !== 'false',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },

  projects: [
    {
      name: 'Firefox',
      use: {
        ...devices['Desktop Firefox']
      }
    },

    {
      name: 'Chromium',
      use: {
        ...devices['Desktop Chrome']
      }
    },

    {
      name: 'Edge',
      use: {
        ...devices['Desktop Edge'],
        channel: 'msedge'
      }
    },

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