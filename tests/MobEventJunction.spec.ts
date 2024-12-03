import { test, expect } from '@playwright/test';
import { MobEventJunction } from './MobEventJunction';
const { faker } = require('@faker-js/faker');

test.describe('iPhone Automation', () => {
  test('TC6 - Registration Form on iPhone', async ({ page }) => {
    const EvJ = new MobEventJunction(page);
    await EvJ.goto();
    await EvJ.getStarted();

    // Fill attendee information using faker
    await EvJ.fillfirstName(faker.name.firstName());
    await EvJ.filllastName(faker.name.lastName());
    await EvJ.fillEmail(faker.internet.email());
    await EvJ.fillCompany(faker.company.name());
    await EvJ.fillTitle('QA Manager');

    // Tap the checkbox and save
    await EvJ.clickcheckbox();
    await EvJ.clickbuttonNext();

    // Validate navigation to the next page
    await expect(EvJ.page2).toBeVisible();
  });
});
