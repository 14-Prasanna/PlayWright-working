import { test, expect } from '@playwright/test';
import path from 'path';

test.describe('File Upload and Download', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://demoqa.com/upload-download');
    });

    test('File Upload Assertion', async ({ page }) => {

        const filePath = path.join(process.cwd(), 'sample.txt');

        await page.locator('#uploadFile').setInputFiles(filePath);

        await expect(page.locator('#uploadedFilePath'))
            .toContainText('sample.txt');

    });

    test('File Download Assertion', async ({ page }) => {

        const downloadPromise = page.waitForEvent('download');

        await page.locator('#downloadButton').click();

        const download = await downloadPromise;

        expect(download.suggestedFilename()).toBe('sampleFile.jpeg');

        const filePath = await download.path();

        expect(filePath).not.toBeNull();

    });

});