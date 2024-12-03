import { test, expect } from '@playwright/test';
import { EventJunction } from './EventJunction';

const { faker } = require('@faker-js/faker');


test('has title', async ({ page }) => {
  await page.goto('https://flow-saas-3661-dev-ed.scratch.my.site.com/s/?eventId=a05As00000AbeaDIET');


  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Home/);
  //Add presteps
});

//Page1 test cases
test('TC6', async ({ page }) => {
  const EvJ = new EventJunction(page);
  await EvJ.goto();
  await EvJ.getStarted();
  await EvJ.fillfirstName(faker.name.firstName());
  await EvJ.fillLastName(faker.name.lastName());
  await EvJ.fillEmail(faker.internet.email());
  await EvJ.fillCompany(faker.company.name());
  await EvJ.fillTitle("QA Manager");
  await EvJ.clickcheckbox();
});




test('TC7', async ({ page }) => {
  // Click the get started link.
  const EvJ = new EventJunction(page);
  await EvJ.goto();
  await EvJ.getStarted();
  await EvJ.fillEmail("abc");
  await EvJ.clickbuttonNext();
  await expect(EvJ.page1).toBeVisible();


});


test('TC9 without title', async ({ page }) => {
  // Click the get started link.
  const EvJ = new EventJunction(page);
  await EvJ.goto();
  await EvJ.getStarted();
  await EvJ.fillfirstName("Aleem");
  await EvJ.fillLastName("Abdul");
  await EvJ.fillEmail("Aleem@examplse.com");
  await EvJ.fillCompany("CloudJunction");
  await EvJ.clickbuttonNext();
  await expect(EvJ.page1).toBeVisible();


});
test('TC9 without company', async ({ page }) => {
  // Click the get started link.
  const EvJ = new EventJunction(page);
  await EvJ.goto();
  await EvJ.getStarted();
  await EvJ.fillfirstName("Aleem");
  await EvJ.fillLastName("Abdul");
  await EvJ.fillEmail("Aleem@examplse.com");
  await EvJ.fillTitle("qa");
  await EvJ.clickbuttonNext();
  await expect(EvJ.page1).toBeVisible();


});
test('TC9 without Email', async ({ page }) => {
  // Click the get started link.
  const EvJ = new EventJunction(page);
  await EvJ.goto();
  await EvJ.getStarted();
  await EvJ.fillfirstName("Aleem");
  await EvJ.fillLastName("Abdul");
  await EvJ.fillTitle("qa");
  await EvJ.fillCompany("CloudJunction");
  await EvJ.clickbuttonNext();
  await expect(EvJ.page1).toBeVisible();


});


test('TC9 without LastName', async ({ page }) => {
  // Click the get started link.
  const EvJ = new EventJunction(page);
  await EvJ.goto();
  await EvJ.getStarted();
  await EvJ.fillfirstName("Aleem");
  await EvJ.fillTitle("qa");
  await EvJ.fillCompany("CloudJunction");
  await EvJ.fillEmail("Aleem@examplse.com");
  await EvJ.clickbuttonNext();
  await expect(EvJ.page1).toBeVisible();


});


test('TC9 without FirstName', async ({ page }) => {
  // Click the get started link.
  const EvJ = new EventJunction(page);
  await EvJ.goto();
  await EvJ.getStarted();
  await EvJ.fillTitle("qa");
  await EvJ.fillCompany("CloudJunction");
  await EvJ.fillEmail("Aleem@examplse.com");
  await EvJ.fillLastName("Abdul");
  await EvJ.clickbuttonNext();
  await expect(EvJ.page1).toBeVisible();


});


test('TC12', async ({ page }) => {
  const EvJ = new EventJunction(page);
  await EvJ.goto();
  await EvJ.getStarted();
  await EvJ.fillfirstName("Aleem");
  await EvJ.fillLastName("Abdul");
  await EvJ.fillEmail("Aleem@examplse.com");
  await EvJ.fillCompany("CloudJunction");
  await EvJ.fillTitle("QA");
  await EvJ.clickbuttonNext();
  await EvJ.getPage2;


});


test('TC14', async ({ page }) => {
  const EvJ = new EventJunction(page);
  await EvJ.goto();
  await EvJ.getStarted();
  await EvJ.fillfirstName("Aleem");
  await EvJ.fillLastName("Abdul");
  await EvJ.fillEmail("Aleem@examplse.com");
  await EvJ.fillCompany("CloudJunction");
  await EvJ.fillTitle("QA");
  await EvJ.clickbuttonNext();
  await EvJ.getPage2;
  await EvJ.clickAddAttendee();
  await EvJ.fillfirstName("Peter");
  await EvJ.fillLastName("Pan");
  await EvJ.fillEmail("peter@pan.com");
  await EvJ.fillTitle("engineer");
  await EvJ.clickbuttonSave();
  await EvJ.getPage2;


});


test('TC149', async ({ page }) => {
  const EvJ = new EventJunction(page);
  await EvJ.goto();
  await EvJ.getStarted();
  await EvJ.fillfirstName("Aleem");
  await EvJ.fillLastName("Abdul");
  await EvJ.fillEmail("Aleem@examplse.com");
  await EvJ.fillCompany("CloudJunction");
  await EvJ.fillTitle("QA");
  await EvJ.clickbuttonNext();
  await EvJ.getPage2;
  await EvJ.clickAddAttendee();
  await EvJ.fillfirstName("Peter");
  await EvJ.fillLastName("Pan");
  await EvJ.fillEmail("peter@pan.com");
  await EvJ.fillTitle("engineer");
  await EvJ.clickbuttonSaveNew();
  //checkforattendeeinformation


});
//PAGE3 testcases Attendee registeration
//Verify that the Attendee registration page has fields: 'Name', 'Email', 'Dietary Preferance',
//'Disability Needs' and 'Ticket Type'
test('TC27', async ({ page }) => {
  // Click the get started link.
  await expect.soft(page.getByPlaceholder('First Name')).toBeVisible();
  await expect.soft(page.getByPlaceholder('Last Name')).toBeVisible();
  await expect.soft(page.getByPlaceholder('Email')).toBeVisible();
  await expect.soft(page.getByPlaceholder('Title')).toBeVisible();
  await expect.soft(page.getByPlaceholder('Vegan')).toBeVisible();
  await expect.soft(page.getByPlaceholder('Visually Impaired')).toBeVisible();
});


test('TC8', async ({ page }) => {
  // Click the get started link.
  const EvJ = new EventJunction(page);
  await EvJ.goto();
  await EvJ.getStarted();
  await EvJ.fillEmail("abc");
  await EvJ.clickbuttonSave();
 //await expect(EvJ.page3).toBeVisible();


});


test('TC148', async ({ page }) => {
  // Click the get started link.
  const EvJ = new EventJunction(page);
  await EvJ.goto();
  await EvJ.getStarted();
  await EvJ.fillEmail("abc");
  await EvJ.clickbuttonSaveNew();
 //await expect(EvJ.page3).toBeVisible();


});


test('TC22', async ({ page }) => {
  const EvJ = new EventJunction(page);
  await EvJ.goto();
  await EvJ.getStarted();
  await EvJ.fillfirstName("Aleem");
  await EvJ.fillLastName("Abdul");
  await EvJ.fillEmail("Aleem@examplse.com");
  await EvJ.fillCompany("CloudJunction");
  await EvJ.fillTitle("QA");
  await EvJ.clickbuttonNext();
  await EvJ.getPage2;
  await EvJ.clickAddAttendee();
  await EvJ.fillfirstName("Peter");
  await EvJ.fillLastName("Pan");
  await EvJ.fillEmail("peter@pan.com");
  await EvJ.fillTitle("engineer");
  await EvJ.fillDisability("Visually Repaired");
  await EvJ.fillDietPreference("Vegan");
  await EvJ.clickbuttonSave();
  await EvJ.getPage2;
 
  await expect.soft(page.getByRole('heading', { name: 'Peter Pan - Standard Entry' }).first()).toBeVisible();
  await expect.soft(page.getByRole('heading', { name: '(123) 129-0121 | peter@pan.com | Tesla' }).first()).toBeVisible();
  await expect.soft(page.locator("text=' Vegan'").first()).toBeVisible();
  await expect.soft(page.locator("text=' Visually Repaired'").first()).toBeVisible();
});


test('TC144 Functionality of back in page 3', async ({ page }) => {
  // Click the get started link.
  const EvJ = new EventJunction(page);
  await EvJ.goto();
  await EvJ.getStarted();
  await EvJ.topage2();
  await EvJ.topage3();
  //await EvJ.clickButtonBack();
  await EvJ.getPage2();


});


test('TC144.1 - Functionality of back in page 3', async ({ page }) => {
  // Click the get started link.
  const EvJ = new EventJunction(page);
  await EvJ.goto();
  await EvJ.getStarted();
  await EvJ.topage2();
  //await EvJ.clickButtonBack();
  await EvJ.getPage1();


});


test('TC144.2 Functionality of back in page 2', async ({ page }) => {
  // Click the get started link.
  const EvJ = new EventJunction(page);
  await EvJ.goto();
  await EvJ.getStarted();
  //await EvJ.clickButtonBack();
  //await EvJ.checkhomepage();


});


test('TC144.3 Functionality of back in page 1', async ({ page }) => {
  // Click the get started link.
  const EvJ = new EventJunction(page);
  await EvJ.goto();
  await EvJ.getStarted();
  await EvJ.clickbuttonCancel();
  //await EvJ.checkhomepage();
 


});


test('TC143 Functionality of back in page 4', async ({ page }) => {
  // Click the get started link.
  const EvJ = new EventJunction(page);
  await EvJ.goto();
  await EvJ.getStarted();
  await EvJ.clickbuttonCancel();
  //await EvJ.checkhomepage();s
 


});


test('TC142 expired promo code', async ({ page }) => {
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


test('TC141,TC140,137 Calculation', async ({ page }) => {
  // Click the get started link.
  const EvJ = new EventJunction(page);
  await EvJ.goto();
  await EvJ.getStarted();
  await EvJ.topage2();
  await EvJ.clickAddAttendee();
  await EvJ.fillfirstName("Hamil");
  await EvJ.fillLastName("ton"); //Expiry date is past
  await EvJ.fillTitle("CEO");
  //await EvJ.SelectTicket();
  await EvJ.clickbuttonSave();
  //await EvJ.checkTotal();
  //await EvJ.clickbuttonEdit();
  //await EvJ.checkTotal();
  //await EvJ.clickbuttonDelete();
  //await EvJ.checkTotal();


});


test('TC138,139 Calculation', async ({ page }) => {
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


test('TC119 Calculation', async ({ page }) => {
  // Click the get started link.
  const EvJ = new EventJunction(page);
  await EvJ.goto();
  await EvJ.getStarted();
  await EvJ.topage2();
  await EvJ.clickAddAttendee();
  await EvJ.fillfirstName("peter");
  await EvJ.fillLastName("paul");
  await EvJ.fillEmail("xgjad@cmas.com");
  await EvJ.fillTitle("Manager");
  await EvJ.clickbuttonSave();
  await EvJ.clickbuttonNext();
  //await EvJ.checkforError();
});


test('TC115 Discount cap applies Calculation', async ({ page }) => {
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


test('TC113 Validation of atleast one attendee', async ({ page }) => {
  // Click the get started link.
  const EvJ = new EventJunction(page);
  await EvJ.goto();
  await EvJ.getStarted();
  await EvJ.topage2();
  await EvJ.clickbuttonCheckout();
  //await EvJ.checkforError();
});


test('TC110 2 attendees should not have same Email', async ({ page }) => {
  // Click the get started link.
  const EvJ = new EventJunction(page);
  await EvJ.goto();
  await EvJ.getStarted();
  await EvJ.topage2();
  await EvJ.clickAddAttendee();
  await EvJ.fillfirstName("xyz");
  await EvJ.fillLastName("abc");
  await EvJ.fillEmail("Aleem@examplse.com");
  await EvJ.fillTitle("Investor");
  await EvJ.clickbuttonSave();
  //await EvJ.checkforError();
});


test('TCTC111.2 1 promocode for redemption is left and 2 attendees are registering ', async ({ page }) => {
  // Click the get started link.
  const EvJ = new EventJunction(page);
  await EvJ.goto();
  await EvJ.getStarted();
  await EvJ.topage2();
  await EvJ.clickAddAttendee();
  await EvJ.fillfirstName("Roman");
  await EvJ.fillLastName("Abrahamovic");
  await EvJ.fillEmail("Abrahamovic@example.com");
  await EvJ.fillTitle("Investor");
  await EvJ.clickbuttonSave();
  await EvJ.clickAddAttendee();
  await EvJ.fillfirstName("French");
  await EvJ.fillLastName("Loren");
  await EvJ.fillEmail("loren@french.com");
  await EvJ.fillTitle("Broker");
  await EvJ.clickbuttonSave();
  await EvJ.clickbuttonCheckout();
  await EvJ.fillPromocode("2LEFT");
  await EvJ.clickbuttonApply();
  //await EvJ.checkforError();
});


test('TCTC111.2 0 promocode for redemption is left and 1 attendees are registering ', async ({ page }) => {
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


test('TCTC111 Promocode can be used twice ', async ({ page }) => {
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


test('TC111 Individual can not use group promos ', async ({ page }) => {
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


test('TC95 Total tickets should update when attendee is added/Edited/Deleted ', async ({ page }) => {
  // Click the get started link.
  const EvJ = new EventJunction(page);
  await EvJ.goto();
  await EvJ.getStarted();
  await EvJ.topage2();
  await EvJ.clickAddAttendee();
  await EvJ.fillfirstName("German");
  await EvJ.fillLastName("Boey");
  await EvJ.fillEmail("Boey@German.com");
  await EvJ.fillTitle("Brewer");
  await EvJ.clickbuttonSave();
  //await EvJ.Checktotal();
  //await EvJ.clickedit();
  await EvJ.fillfirstName("German");
  await EvJ.fillLastName("Boey");
  await EvJ.fillEmail("Boey@German.com");
  await EvJ.fillTitle("Brewer");
  await EvJ.clickbuttonSave();
  //await EvJ.Checktotal();
  //await EvJ.clickbuttonDelete();
  //await EvJ.Checktotal();
});




test('TC58 - Verify that clicking "Cancel" on the checkout page redirects to the Main Registration Page', async ({ page }) => {
    const EvJ = new EventJunction(page);
    await EvJ.goto(); //
    await EvJ.getStarted();
    await EvJ.fillfirstName("Muneeba");
    await EvJ.fillLastName("Manzoor");
    await EvJ.fillEmail("muneeba@examplse.com");
    await EvJ.fillCompany("CloudJunction");
    await EvJ.fillTitle("QA");
    await EvJ.clickbuttonNext();
    await EvJ.getPage2; //
    await EvJ.clickAddAttendee();
    await EvJ.fillfirstName("Peter");
    await EvJ.fillLastName("Pan");
    await EvJ.fillEmail("peter@pan.com");
    await EvJ.fillTitle("engineer");
    await EvJ.clickbuttonCancel();
    await EvJ.getPage2; //
 
  });






test('TC31 - Verify order summary includes all added attendees and their ticket details', async ({ page }) => {
    const EvJ = new EventJunction(page);
    await EvJ.goto(); //
    await EvJ.getStarted();
    await EvJ.fillfirstName("Muneeba");
    await EvJ.fillLastName("Manzoor");
    await EvJ.fillEmail("muneeba@examplse.com");
    await EvJ.fillCompany("CloudJunction");
    await EvJ.fillTitle("QA");
    await EvJ.clickbuttonNext();
    await EvJ.getPage2; // main registration page
    await EvJ.clickAddAttendee();
    await EvJ.fillfirstName("Peter");
    await EvJ.fillLastName("Pan");
    await EvJ.fillEmail("peter@pan.com");
    await EvJ.fillTitle("engineer");
    await EvJ.clickbuttonSave();
    await EvJ.getPage2; // main registration page


    await EvJ.clickbuttonCheckout(); // clicking checkout button
    await EvJ.getPage3; // checkout page with order summary section


    const attendee1 = await page.locator("//lightning-layout[3]/slot[1]/lightning-layout-item[1]/slot[1]/div[1]").innerText();
    const attendee2 = await page.locator("//lightning-layout[4]//slot[1]//lightning-layout-item[1]//slot[1]//div[1]").innerText();


    expect(attendee1).toContain('1 x Standard Entry');
    expect(attendee2).toContain('1 x Full Access');
 
  });




test('TC38 - Verify that changes made in "Edit" mode are saved correctly', async ({ page }) => {
    const EvJ = new EventJunction(page);
    await EvJ.goto();
    await EvJ.getStarted();
    await EvJ.fillfirstName("Muneeba");
    await EvJ.fillLastName("Manzoor");
    await EvJ.fillEmail("muneeba@examplse.com");
    await EvJ.fillCompany("CloudJunction");
    await EvJ.fillTitle("QA");
    await EvJ.clickbuttonNext();
    await EvJ.getPage2;
    await EvJ.ClickButtonEdit();
    await EvJ.fillfirstName("Henry");
    await EvJ.fillLastName("Clinton");
    await EvJ.fillEmail("henryclinton@yopmail.com");
    await EvJ.fillTitle("QA engineer");
    const actualname = await page.locator("Fname").innerText();
    await EvJ.clickbuttonSave();
 
    await EvJ.getPage2;
    const expectedname = await page.locator("lightning-layout-item[@class='slds-size_12-of-12 slds-small-size_12-of-12 slds-medium-size_12-of-12 slds-large-size_10-of-12']//lightning-layout-item[1]//lightning-layout[1]//lightning-layout-item[1]//h1[1]").innerText();
    expect(expectedname).toContain(actualname);


    await EvJ.ClickButtonEdit();
    await expect(actualname).toContain(expectedname);
   
  });




test('TC10 - Verify that an error message is displayed for missing ticket type', async ({ page }) => {
    const EvJ = new EventJunction(page);
    await EvJ.getPage2();
    await EvJ.clickAddAttendee();
    await EvJ.fillfirstName("Henry");
    await EvJ.fillLastName("Clinton");
    await EvJ.fillEmail("henryclinton@yopmail.com");
    await EvJ.fillTitle("QA engineer");
    await EvJ.clickbuttonSave();


    const errorMessage = await page.locator('text="Please select a ticket type"');
    await expect(errorMessage).toBeVisible();
});


test('TC55 - Verify that clicking "Cancel" closes the registration window', async ({ page }) => {
  const EvJ = new EventJunction(page);
  await EvJ.getPage2();
  await EvJ.getPage3();
  await EvJ.clickAddAttendee();
  await EvJ.fillfirstName("Henry");
  await EvJ.fillLastName("Clinton");
  await EvJ.fillEmail("henryclinton@yopmail.com");
  await EvJ.fillTitle("QA engineer");
  await EvJ.clickbuttonCancel();
  await expect(EvJ.page2).toBeHidden()
});


test('TC40 - Verify that entering a member-specific discount voucher validates user membership', async ({ page }) => {
  const EvJ = new EventJunction(page);
  await EvJ.topage3();
 
  await EvJ.fillPromocode("MEMBER15"); // promocode will be changed
  await EvJ.clickbuttonApply();
  const successMessage = page.locator('text="Discount Applied Succesfully!"');
  await expect(successMessage).toBeVisible();


});




test('TC41 - Verify that non-members see an error when using a member-only voucher', async ({ page }) => {
  const EvJ = new EventJunction(page);
  await EvJ.topage3();


  await EvJ.fillPromocode("MEMBER15");
  await EvJ.clickbuttonApply();
  const errorMessage = page.locator('text="Discount Code is only valid for Members"');
  await expect(errorMessage).toBeVisible();
});




test('TC90 - Duplicate attendee should not be created for the same registration', async ({ page }) => {
  const EvJ = new EventJunction(page);
  await EvJ.topage2();
  await EvJ.clickAddAttendee();
  await EvJ.fillfirstName("Henry");
  await EvJ.fillLastName("Clinton");
  await EvJ.fillEmail("henryclinton@yopmail.com");
  await EvJ.fillTitle("QA engineer");
  await EvJ.clickbuttonSave();
  const errorMessage = page.locator('text="Attendee is already registered!"');
  await expect(errorMessage).toBeVisible();


});
