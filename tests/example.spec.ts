import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();
let env=process.env.ENV
let baseurl=process.env[`${env}_url`] as string;
test('has title', async ({ page }) => {
  await page.goto(baseurl);

  // Expect a title "to contain" a substring.
 // await expect(page).toHaveTitle(/Playwright/);
});


