import { test, expect } from '@playwright/test';

test('opens Services and verifies Client Work page is visible', async ({ page }) => {
  await page.goto('https://www.epam.com/');

  const acceptAll = page.getByRole('button', { name: /Accept All/i });
  if (await acceptAll.isVisible().catch(() => false)) {
    await acceptAll.click();
  }

  await page.getByRole('button', { name: /Services/i }).click();
  await page.getByRole('link', { name: /Explore Our Client Work/i }).click();

  await expect(page.getByText('Client Work', { exact: true })).toBeVisible();
});
