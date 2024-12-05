import { test, expect } from '@playwright/test';
import { EventJunction } from './EventJunction';

const { faker } = require('@faker-js/faker');

var fName = faker.person.firstName();
var lName = faker.person.lastName();
var email = faker.internet.email();
var company = faker.company.name();
var title = faker.person.jobTitle(); 

test('has title', async ({ page }) => {
  await page.goto('https://flow-saas-3661-dev-ed.scratch.my.site.com/s/?eventId=a05As00000AbSdtIAF');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Home/);
  //Add presteps
});


//Page1 test cases
test('TC6', async ({ page }) => {
  const EvJ = new EventJunction(page);
  await EvJ.goto();
  await EvJ.getStarted();
  await EvJ.fillfirstName(fName);
  await EvJ.fillLastName(lName);
  await EvJ.fillEmail(email);
  await EvJ.fillCompany(company);
  await EvJ.fillTitle(title);
  await expect(page.locator("xpath=//*[@class='slds-checkbox_faux']")).toBeVisible();
  await EvJ.clickcheckbox();
  await expect(EvJ.addselfasattendee).toBeChecked();
});


test('TC7 - Verify the validation for email field in page 1', async ({ page }) => {
  const EvJ = new EventJunction(page);
  await EvJ.goto();
  await EvJ.getStarted();
  await EvJ.fillEmail('abc');
  await EvJ.clickbuttonNext();
  await expect(EvJ.page1).toBeVisible();
});


test('TC9 - Verify that leaving the Name, Email or Title, Company field blank shows an error message (without title)', async ({ page }) => {
  // Click the get started link.
  const EvJ = new EventJunction(page);
  await EvJ.goto();
  await EvJ.getStarted();
  await EvJ.fillfirstName(fName);
  await EvJ.fillLastName(lName);
  await EvJ.fillEmail(email);
  await EvJ.fillCompany(company);
  await EvJ.clickbuttonNext();
  await expect(EvJ.fillTitleValidation).toBeVisible();
  await expect(EvJ.page1).toBeVisible();
});


test('TC9 - Verify that leaving the Name, Email or Title, Company field blank shows an error message (without company)', async ({ page }) => {
  const EvJ = new EventJunction(page);
  await EvJ.goto();
  await EvJ.getStarted();
  await EvJ.fillfirstName(fName);
  await EvJ.fillLastName(lName);
  await EvJ.fillEmail(email);
  await EvJ.fillTitle(title);
  await EvJ.clickbuttonNext();
  await expect(EvJ.fillCompanyValidation).toBeVisible();
  await expect(EvJ.page1).toBeVisible();
});


test('TC9 - Verify that leaving the Name, Email or Title, Company field blank shows an error message (without Email)', async ({ page }) => {
  // Click the get started link.
  const EvJ = new EventJunction(page);
  await EvJ.goto();
  await EvJ.getStarted();
  await EvJ.fillfirstName(fName);
  await EvJ.fillLastName(lName);
  await EvJ.fillTitle(title);
  await EvJ.fillCompany(company);
  await EvJ.clickbuttonNext();
  await expect(EvJ.fillEmailValidation).toBeVisible();
  await expect(EvJ.page1).toBeVisible();
});


test('TC9 -Verify that leaving the Name, Email or Title, Company field blank shows an error message (without LastName)', async ({ page }) => {
  const EvJ = new EventJunction(page);
  await EvJ.goto();
  await EvJ.getStarted();
  await EvJ.fillfirstName(fName);
  await EvJ.fillTitle(title);
  await EvJ.fillCompany(company);
  await EvJ.fillEmail(email);
  await EvJ.clickbuttonNext();
  await expect(EvJ.fillLnameValidation).toBeVisible();
  await expect(EvJ.page1).toBeVisible();
});


test('TC9 -Verify that leaving the Name, Email or Title, Company field blank shows an error message (without FirstName)', async ({ page }) => {
  const EvJ = new EventJunction(page);
  await EvJ.goto();
  await EvJ.getStarted();
  await EvJ.fillTitle(title);
  await EvJ.fillCompany(company);
  await EvJ.fillEmail(email);
  await EvJ.fillLastName(lName);
  await EvJ.clickbuttonNext();
  await expect(EvJ.fillFnameValidation).toBeVisible();
  await expect(EvJ.page1).toBeVisible();
});


test('TC12 - Clicking on the next button on Contact details', async ({ page }) => {
  const EvJ = new EventJunction(page);
  await EvJ.goto();
  await EvJ.getStarted();
  await EvJ.fillfirstName(fName);
  await EvJ.fillLastName(lName);
  await EvJ.fillEmail(email);
  await EvJ.fillCompany(company);
  await EvJ.fillTitle(title);
  await EvJ.clickbuttonNext();
  await EvJ.getPage2();


});


// test('TC14', async ({ page }) => {
//   const EvJ = new EventJunction(page);
//   await EvJ.goto();
// //   await EvJ.getStarted();
//   await EvJ.fillfirstName("Aleem");
//   await EvJ.fillLastName("Abdul");
//   await EvJ.fillEmail("Aleem@examplse.com");
//   await EvJ.fillCompany("CloudJunction");
//   await EvJ.fillTitle("QA");
//   await EvJ.clickbuttonNext();
// //   await EvJ.getPage2();
//   await EvJ.clickAddAttendee();
//   await EvJ.getattendeeinfopage();
//   await EvJ.fillfirstName("Peter");
//   await EvJ.fillLastName("Pan");
//   await EvJ.fillEmail("peter@pan.com");
//   await EvJ.fillTitle("engineer");
//   await EvJ.clickbuttonSave();
//   await EvJ.getPage2();
// });


test('TC14 - Dietary preferences and disability needs fields should be optional', async ({ page }) => {
    const EvJ = new EventJunction(page);
    await EvJ.goto();
    // await EvJ.getStarted();
    await EvJ.fillfirstName(fName);
    await EvJ.fillLastName(lName);
    await EvJ.fillEmail(email);
    await EvJ.fillCompany(company);
    await EvJ.fillTitle(title);
    await EvJ.clickbuttonNext();
    //await EvJ.getPage2();
    await EvJ.clickAddAttendee();
    await EvJ.getattendeeinfopage();
    await EvJ.fillfirstName(fName);
    await EvJ.fillLastName(lName);
    await EvJ.fillEmail(email);
    await EvJ.fillTitle(title);
    await EvJ.clickbuttonSave();
    await EvJ.getPage2();
  });


test('TC149 - Verify that dietary preferences and disability needs fields are optional', async ({ page }) => {
  const EvJ = new EventJunction(page);
  await EvJ.goto();
  await EvJ.getStarted();
  await EvJ.fillfirstName(fName);
  await EvJ.fillLastName(lName);
  await EvJ.fillEmail(email);
  await EvJ.fillCompany(company);
  await EvJ.fillTitle(title);
  await EvJ.clickbuttonNext();
  await EvJ.getPage2();
  await EvJ.clickAddAttendee();
  await EvJ.fillfirstName(fName);
  await EvJ.fillLastName(lName);
  await EvJ.fillEmail(email);
  await EvJ.fillTitle(title);
  await EvJ.clickbuttonSaveNew();
  //checkforattendeeinformation
});
//PAGE3 testcases Attendee registeration
//Verify that the Attendee registration page has fields: 'Name', 'Email', 'Dietary Preferance',
//'Disability Needs' and 'Ticket Type'


test('TC27 - Verify visiblility of fields Name, Email, Dietary Preferance, Disability Needs, Ticket Type' , async ({ page }) => {
  // Click the get started link.
  await expect.soft(page.getByPlaceholder('First Name')).toBeVisible();
  await expect.soft(page.getByPlaceholder('Last Name')).toBeVisible();
  await expect.soft(page.getByPlaceholder('Email')).toBeVisible();
  await expect.soft(page.getByPlaceholder('Title')).toBeVisible();
  await expect.soft(page.getByPlaceholder('Vegan')).toBeVisible();
  await expect.soft(page.getByPlaceholder('Visually Impaired')).toBeVisible();
});


// TC8 and TC148 are same
test('TC8  - Verify the validation for email field in add attendee page', async ({ page }) => {
  // Click the get started link.
  const EvJ = new EventJunction(page);
  await EvJ.goto();
  await EvJ.getStarted();
  await EvJ.fillEmail("abc");
  await EvJ.clickbuttonSave();
 //await expect(EvJ.page3).toBeVisible();
});


test('TC148 - Verify the validation for email field in add attendee page', async ({ page }) => {
  // Click the get started link.
  const EvJ = new EventJunction(page);
  await EvJ.goto();
  await EvJ.getStarted();
  await EvJ.fillEmail("abc");
  await EvJ.clickbuttonSaveNew();
 //await expect(EvJ.page3).toBeVisible();
});


test('TC22 - Save button adds the attendee to the main registration page with the right details', async ({ page }) => {
  const EvJ = new EventJunction(page);
  await EvJ.goto();
  await EvJ.getStarted();
  await EvJ.fillfirstName(fName);
  await EvJ.fillLastName(lName);
  await EvJ.fillEmail(email);
  await EvJ.fillCompany("CloudJunction");
  await EvJ.fillTitle("QA");
  await EvJ.clickbuttonNext();
  await EvJ.getPage2();
  await EvJ.clickAddAttendee();
  await EvJ.fillfirstName("Peter");
  await EvJ.fillLastName("Pan");
  await EvJ.fillEmail("peter@pan.com");
  await EvJ.fillTitle("engineer");
  await EvJ.fillDisability("Visually Repaired");
  await EvJ.fillDietPreference("Vegan");
  await EvJ.clickbuttonSave();
  await EvJ.getPage2();
 
  await expect.soft(page.getByRole('heading', { name: 'Peter Pan - Standard Entry' }).first()).toBeVisible();
  await expect.soft(page.getByRole('heading', { name: '(123) 129-0121 | peter@pan.com | Tesla' }).first()).toBeVisible();
  await expect.soft(page.locator("text=' Vegan'").first()).toBeVisible();
  await expect.soft(page.locator("text=' Visually Repaired'").first()).toBeVisible();
});


test('TC144 - Functionality of back button in page 3', async ({ page }) => {
  // Click the get started link.
  const EvJ = new EventJunction(page);
  await EvJ.goto();
  await EvJ.getStarted();
  await EvJ.topage2();
  await EvJ.topage3();
  //await EvJ.clickButtonBack();
  await EvJ.getPage2();
});


test('TC144.1 - Functionality of back button in page 3', async ({ page }) => {
  // Click the get started link.
  const EvJ = new EventJunction(page);
  await EvJ.goto();
  await EvJ.getStarted();
  await EvJ.topage2();
  //await EvJ.clickButtonBack();
  await EvJ.getPage1();
});


test('TC144.2 - Functionality of back button in page 2', async ({ page }) => {
  // Click the get started link.
  const EvJ = new EventJunction(page);
  await EvJ.goto();
  await EvJ.getStarted();
  //await EvJ.clickButtonBack();
  //await EvJ.checkhomepage();
});


test('TC144.3 - Functionality of back button in page 1', async ({ page }) => {
  // Click the get started link.
  const EvJ = new EventJunction(page);
  await EvJ.goto();
  await EvJ.getStarted();
  await EvJ.clickbuttonCancel();
  //await EvJ.checkhomepage();
});


test('TC143 - Functionality of back button in page 4', async ({ page }) => {
  // Click the get started link.
  const EvJ = new EventJunction(page);
  await EvJ.goto();
  await EvJ.getStarted();
  await EvJ.clickbuttonCancel();
  //await EvJ.checkhomepage();s
});


test('TC142 - Validation on Expired promo code', async ({ page }) => {
  // Click the get started link.
  const EvJ = new EventJunction(page);
  await EvJ.goto();
  await EvJ.getStarted();
  await EvJ.topage2();
  await EvJ.topage3();
  await EvJ.fillPromocode("OFF50"); //Expiry date is past
  await EvJ.clickbuttonApply();
  //await EvJ.checkforError();
});


test('TC141,TC140,137 - Calculation - Delete Attendee, Add Attendee, Change Ticket Category changes formula field value ', async ({ page }) => {
  // Click the get started link.
  const EvJ = new EventJunction(page);
  await EvJ.goto();
  await EvJ.getStarted();
  await EvJ.topage2();
  await EvJ.clickAddAttendee();
  await EvJ.fillfirstName(fName);
  await EvJ.fillLastName(lName); //Expiry date is past
  await EvJ.fillTitle(title);
  //await EvJ.SelectTicket();
  await EvJ.clickbuttonSave();
  //await EvJ.checkTotal();
  //await EvJ.clickbuttonEdit();
  //await EvJ.checkTotal();
  //await EvJ.clickbuttonDelete();
  //await EvJ.checkTotal();
});


test('TC138,139 - Calculation - Add/Change Promo Code changes formula field value)', async ({ page }) => {
  // Click the get started link.
  const EvJ = new EventJunction(page);
  await EvJ.goto();
  await EvJ.getStarted();
  await EvJ.topage2();
  await EvJ.topage3();
  await EvJ.fillPromocode("OFF90");
  await EvJ.clickbuttonApply();
  //await EvJ.checkforError;
  //const x = await EvJ.checkTotal();
  await EvJ.fillPromocode("OFF40");
  await EvJ.clickbuttonApply();
  //check x * 60 percent
  await EvJ.fillPromocode("OFF10");
  await EvJ.clickbuttonApply();
  //check (x * 60 percent) - 10
  //await EvJ.RemovePromocode("OFF10");
  //check x * 60 percent
});


test('TC119 -  1 tickets left, 2 attendees are registring then validation should show', async ({ page }) => {
  // Click the get started link.
  const EvJ = new EventJunction(page);
  await EvJ.goto();
  await EvJ.getStarted();
  await EvJ.topage2();
  await EvJ.clickAddAttendee();
  await EvJ.fillfirstName(fName);
  await EvJ.fillLastName(lName);
  await EvJ.fillEmail(email);
  await EvJ.fillTitle(title);
  await EvJ.clickbuttonSave();
  await EvJ.clickbuttonNext();
  //await EvJ.checkforError();
});


test('TC115 - Discount cap should apply when promo code discount exceeds the discount cap', async ({ page }) => {
  // Click the get started link.
  const EvJ = new EventJunction(page);
  await EvJ.goto();
  await EvJ.getStarted();
  await EvJ.topage2();
  await EvJ.topage3();
  await EvJ.fillPromocode("ALLOFF");
  await EvJ.clickbuttonApply();
  //await EvJ.checkforError;
  //const x = await EvJ.checkTotal();
  //check (x - 1)
});


test('TC113 - Validation to have atleast one attendee in registeration', async ({ page }) => {
  // Click the get started link.
  const EvJ = new EventJunction(page);
  await EvJ.goto();
  await EvJ.getStarted();
  await EvJ.topage2();
  await EvJ.clickbuttonCheckout();
  //await EvJ.checkforError();
});


test('TC110 - Two attendees should not have same email address', async ({ page }) => {
  // Click the get started link.
  const EvJ = new EventJunction(page);
  await EvJ.goto();
  await EvJ.getStarted();
  await EvJ.topage2();
  await EvJ.clickAddAttendee();
  await EvJ.fillfirstName("xyz");
  await EvJ.fillLastName("abc");
  await EvJ.fillEmail("Aleem@examplse.com");
  await EvJ.fillTitle(title);
  await EvJ.clickbuttonSave();
  //await EvJ.checkforError();
});


test('TCTC111.2 - 1 promocode for redemption is left and 2 attendees are registering ', async ({ page }) => {
  // Click the get started link.
  const EvJ = new EventJunction(page);
  await EvJ.goto();
  await EvJ.getStarted();
  await EvJ.topage2();
  await EvJ.clickAddAttendee();
  await EvJ.fillfirstName(fName);
  await EvJ.fillLastName(lName);
  await EvJ.fillEmail(email);
  await EvJ.fillTitle(title);
  await EvJ.clickbuttonSave();
  await EvJ.clickAddAttendee();
  await EvJ.fillfirstName(fName);
  await EvJ.fillLastName(lName);
  await EvJ.fillEmail(email);
  await EvJ.fillTitle(title);
  await EvJ.clickbuttonSave();
  await EvJ.clickbuttonCheckout();
  await EvJ.fillPromocode("2LEFT");
  await EvJ.clickbuttonApply();
  //await EvJ.checkforError();
});


test('TC111.2 - 0 promocode for redemption is left and 1 attendees are registering ', async ({ page }) => {
  // Click the get started link.
  const EvJ = new EventJunction(page);
  await EvJ.goto();
  await EvJ.getStarted();
  await EvJ.topage2();
  await EvJ.clickbuttonCheckout();
  await EvJ.fillPromocode("0LEFT");
  await EvJ.clickbuttonApply();
  //await EvJ.checkforError();
});


test('TC111 - Promocode can not be used twice ', async ({ page }) => {
  // Click the get started link.
  const EvJ = new EventJunction(page);
  await EvJ.goto();
  await EvJ.getStarted();
  await EvJ.topage2();
  await EvJ.clickbuttonCheckout();
  await EvJ.fillPromocode("1LEFT");
  await EvJ.clickbuttonApply();
  //clear promocode
  await EvJ.fillPromocode("1LEFT");
  await EvJ.clickbuttonApply();
  //await EvJ.checkforError();
});


test('TC109 - Individual can not use group promos ', async ({ page }) => {
  // Click the get started link.
  const EvJ = new EventJunction(page);
  await EvJ.goto();
  await EvJ.getStarted();
  await EvJ.topage2();
  await EvJ.clickbuttonCheckout();
  await EvJ.fillPromocode("GRP20");
  await EvJ.clickbuttonApply();
  //await EvJ.checkforError();
});


test('TC95/96/97 - Total tickets should update when attendee is added/Edited/Deleted ', async ({ page }) => {
  // Click the get started link.
  const EvJ = new EventJunction(page);
  await EvJ.goto();
  await EvJ.getStarted();
  await EvJ.topage2();
  await EvJ.clickAddAttendee();
  await EvJ.fillfirstName(fName);
  await EvJ.fillLastName(lName);
  await EvJ.fillEmail(email);
  await EvJ.fillTitle(title);
  await EvJ.clickbuttonSave();
  //await EvJ.Checktotal();
  //await EvJ.clickedit();
  await EvJ.fillfirstName(fName);
  await EvJ.fillLastName(lName);
  await EvJ.fillEmail(email);
  await EvJ.fillTitle(title);
  await EvJ.clickbuttonSave();
  //await EvJ.Checktotal();
  //await EvJ.clickbuttonDelete();
  //await EvJ.Checktotal();
});


test('TC58 - Verify that clicking "Cancel" on the checkout page redirects to the Main Registration Page', async ({ page }) => {
    const EvJ = new EventJunction(page);
    await EvJ.goto(); //
    await EvJ.getStarted();
    await EvJ.fillfirstName(fName);
    await EvJ.fillLastName(lName);
    await EvJ.fillEmail(email);
    await EvJ.fillCompany(company);
    await EvJ.fillTitle(title);
    await EvJ.clickbuttonNext();
    await EvJ.getPage2(); //
    await EvJ.clickAddAttendee();
    await EvJ.fillfirstName(fName);
    await EvJ.fillLastName(lName);
    await EvJ.fillEmail(email);
    await EvJ.fillTitle(title);
    await EvJ.clickbuttonCancel();
    await EvJ.getPage2(); //
  });


test('TC31 - Verify order summary includes all added attendees and their ticket details', async ({ page }) => {
    const EvJ = new EventJunction(page);
    await EvJ.goto(); //
    await EvJ.getStarted();
    await EvJ.fillfirstName(fName);
    await EvJ.fillLastName(lName);
    await EvJ.fillEmail(email);
    await EvJ.fillCompany(company);
    await EvJ.fillTitle(title);
    await EvJ.clickbuttonNext();
    await EvJ.getPage2(); // main registration page
    await EvJ.clickAddAttendee();
    await EvJ.fillfirstName(fName);
    await EvJ.fillLastName(lName);
    await EvJ.fillEmail(email);
    await EvJ.fillTitle(title);
    await EvJ.clickbuttonSave();
    await EvJ.getPage2(); // main registration page

    await EvJ.clickbuttonCheckout(); // clicking checkout button
    await EvJ.getPage3(); // checkout page with order summary section

    const attendee1 = await page.locator("xpath='//lightning-layout[3]/slot[1]/lightning-layout-item[1]/slot[1]/div[1]'").innerText();
    const attendee2 = await page.locator("xpath='//lightning-layout[4]//slot[1]//lightning-layout-item[1]//slot[1]//div[1]'").innerText();

    expect(attendee1).toContain('1 x Standard Entry');
    expect(attendee2).toContain('1 x Full Access'); 
  });


test('TC38 - Verify that changes made in "Edit" mode are saved correctly', async ({ page }) => {
    const EvJ = new EventJunction(page);
    await EvJ.goto();
    await EvJ.getStarted();
    await EvJ.fillfirstName(fName);
    await EvJ.fillLastName(lName);
    await EvJ.fillEmail(email);
    await EvJ.fillCompany(company);
    await EvJ.fillTitle(title);
    await EvJ.clickbuttonNext();
    await EvJ.getPage2();
    await EvJ.ClickButtonEdit();
    await EvJ.fillfirstName(fName);
    await EvJ.fillLastName(lName);
    await EvJ.fillEmail(email);
    await EvJ.fillTitle(title);
    const actualname = await page.locator("Fname").innerText();
    await EvJ.clickbuttonSave();
 
    await EvJ.getPage2();
    const expectedname = await page.locator("xpath='lightning-layout-item[@class='slds-size_12-of-12 slds-small-size_12-of-12 slds-medium-size_12-of-12 slds-large-size_10-of-12']//lightning-layout-item[1]//lightning-layout[1]//lightning-layout-item[1]//h1[1]'").innerText();
    expect(expectedname).toContain(actualname);

    await EvJ.ClickButtonEdit();
    await expect(actualname).toContain(expectedname);
   
  });


test('TC10 - Verify that an error message is displayed for missing ticket type', async ({ page }) => {
    const EvJ = new EventJunction(page);
    await EvJ.goto(); //
    await EvJ.getStarted();
    await EvJ.fillfirstName(fName);
    await EvJ.fillLastName(lName);
    await EvJ.fillEmail(email);
    await EvJ.fillCompany(company);
    await EvJ.fillTitle(title);
    await EvJ.clickbuttonNext();
    await EvJ.getPage2(); // main registration page
    await EvJ.clickAddAttendee();
    await EvJ.fillfirstName(fName);
    await EvJ.fillLastName(lName);
    await EvJ.fillEmail(email);
    await EvJ.fillTitle(title);
    await EvJ.clickbuttonSave();

    const errorMessage = await page.locator('text="Please select a ticket type"');
    await expect(errorMessage).toBeVisible();
});


test('TC55 - Verify that clicking "Cancel" closes the registration window', async ({ page }) => {
  const EvJ = new EventJunction(page);
  await EvJ.goto(); //
  await EvJ.getStarted();
  await EvJ.fillfirstName(fName);
  await EvJ.fillLastName(lName);
  await EvJ.fillEmail(email);
  await EvJ.fillCompany(company);
  await EvJ.fillTitle(title);
  await EvJ.clickbuttonNext();
  await EvJ.getPage2(); 
  await EvJ.clickAddAttendee();
  await EvJ.getattendeeinfopage
  await EvJ.fillfirstName(fName);
  await EvJ.fillLastName(lName);
  await EvJ.fillEmail(email);
  await EvJ.fillTitle(title);
  await EvJ.clickbuttonCancel();
  await expect(EvJ.attendeeinfopage).toBeHidden();
});


test('TC40 - Verify that entering a member-specific discount voucher validates user membership', async ({ page }) => {
    const EvJ = new EventJunction(page);
    await EvJ.goto(); //
    await EvJ.getStarted();
    await EvJ.fillfirstName(fName);
    await EvJ.fillLastName(lName);
    await EvJ.fillEmail(email);
    await EvJ.fillCompany(company);
    await EvJ.fillTitle(title);
    await EvJ.clickbuttonNext();
    await EvJ.getPage2(); // main registration page
    await EvJ.clickAddAttendee();
    await EvJ.fillfirstName(fName);
    await EvJ.fillLastName(lName);
    await EvJ.fillEmail(email);
    await EvJ.fillTitle("engineer");
    await EvJ.clickbuttonSave();
    await EvJ.getPage2(); // main registration page

    await EvJ.clickbuttonCheckout(); // clicking checkout button
 
    await EvJ.fillPromocode("MEMBER15"); // promocode will be changed once the list of promo code is provided
    await EvJ.clickbuttonApply();
    const successMessage = page.locator('text="Discount Applied Succesfully!"');
    await expect(successMessage).toBeVisible();
});


test('TC41 - Verify that non-members see an error when using a member-only voucher', async ({ page }) => {
  const EvJ = new EventJunction(page);
  await EvJ.topage3();
  await EvJ.fillPromocode("MEMBER15");
  await EvJ.clickbuttonApply();
  const errorMessage = page.locator('text="Discount Code is only valid for Members"'); //text will be changed once the error text is finalized
  await expect(errorMessage).toBeVisible();
});


test('TC90 - Duplicate attendee should not be created for the same registration', async ({ page }) => {
  const EvJ = new EventJunction(page);
  await EvJ.topage2();
  await EvJ.clickAddAttendee();
  await EvJ.fillfirstName(fName);
  await EvJ.fillLastName(lName);
  await EvJ.fillEmail(email);
  await EvJ.fillTitle(title);
  await EvJ.clickbuttonSave();
  const errorMessage = page.locator('text="Attendee is already registered!"'); //text will be changed once the error text is finalized
  await expect(errorMessage).toBeVisible();
});



