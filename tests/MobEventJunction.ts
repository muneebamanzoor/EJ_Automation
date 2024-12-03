

import { expect, type Locator, type Page } from '@playwright/test';


export class MobEventJunction {
  readonly page: Page;
  readonly name: Locator;
  readonly email: Locator;
  readonly dietryPreferance: Locator;
  readonly disability: Locator;
  readonly buttonSave: Locator;
  readonly buttonApply: Locator;
  readonly buttonSaveNew: Locator;
  readonly buttonCancel: Locator;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly company: Locator;
  readonly title: Locator;
  readonly addselfasattendee: Locator;
  readonly buttonNext: Locator;
  readonly page1: Locator;
  readonly page2: Locator;
  readonly page3: Locator;
  readonly buttonCheckout: Locator;
  readonly buttonAddAttendee: Locator;
  readonly ButtonBack: Locator;
  readonly ButtonEdit: Locator;
  readonly ButtonDelete: Locator;
  readonly Promocode: Locator;
  readonly ConfirmPay: Locator;
  readonly CardHolderName: Locator;
  readonly CardNumber: Locator;
  readonly ExpiryMonth: Locator;
  readonly ExpiryYear: Locator;
  readonly CardCVV: Locator;
  readonly ButtonSubmitPayment: Locator;




  constructor(page: Page) {
    this.page = page;
    this.name = page.getByPlaceholder('Name');
    this.email = page.getByPlaceholder('Email');
    this.dietryPreferance = page.getByPlaceholder('Vegan');
    this.disability = page.getByPlaceholder('Visually Impaired');
    this.buttonSave = page.getByRole('button', { name: 'Save' });
    this.buttonApply = page.getByRole('button', { name: 'Apply' });
    this.buttonSaveNew = page.getByRole('button', { name: 'Save and New' });
    this.buttonCancel = page.getByRole('button', { name: 'Cancel' });
    this.buttonAddAttendee = page.getByRole('button', { name: 'Add Attendee' });
    this.firstName = page.getByPlaceholder('First Name');
    this.lastName = page.getByPlaceholder('Last Name');
    this.company = page.getByPlaceholder('Company');
    this.title = page.getByPlaceholder('Title');
    this.addselfasattendee = page.locator('xpath=//span[@class="slds-checkbox_faux"]');
    this.buttonNext = page.getByRole('button', { name: 'Next' });
    this.page3 = page.getByRole('heading', { name: 'Step 3 of 3' });
    this.page2 = page.getByRole('heading', { name: 'Step 2 of 3' });
    this.page1 = page.getByRole('heading', { name: 'Step 1 of 3' });
    this.CardHolderName = page.getByPlaceholder('Mark Johnson');
    this.CardNumber = page.getByPlaceholder('41921-21823912-1232');
    this.ExpiryMonth=page.getByPlaceholder('10');
    this.ExpiryYear=page.getByPlaceholder('2027');
    this.CardCVV=page.getByPlaceholder('****');
    this.ButtonSubmitPayment = page.getByRole('button', { name: 'Submit Payment' });
    this.ButtonEdit =page.getByTitle('back') ;
    this.ButtonEdit =page.getByTitle('edit') ;
    this.ButtonDelete = page.getByTitle('delete');


  }


  async goto() {
    await this.page.goto('https://flow-saas-3661-dev-ed.scratch.my.site.com/s/?eventId=a05As00000AbeaDIET');
  }

  async ClickButtonBack(){
    await this.getStarted();
    await expect(this.ButtonBack).toBeVisible();
    await this.ButtonBack.click();
  }

  async ClickButtonDelete(){
    await this.getStarted();
    await expect(this.ButtonDelete).toBeVisible();
    await this.ButtonDelete.click();
  }
    
  async getStarted() {
    //click a event then check
    await expect(this.page1).toBeVisible();
  }


  async getPage1() {
    //click a event then check
    await expect(this.page1).toBeVisible();
  }
  async getPage2() {
    //click a event then check
    await expect(this.page2).toBeVisible();
  }
  async getPage3() {
    //click a event then check
    await expect(this.page3).toBeVisible();
  }



  async fillEmail(text: string) {
    await this.getStarted();
    await this.email.scrollIntoViewIfNeeded();
    await expect(this.email).toBeVisible();
    await this.email.fill(text);
  }


  async fillfirstName(text: string) {
    await this.getStarted();
    await this.firstName.scrollIntoViewIfNeeded();
    await expect(this.firstName).toBeVisible();
    await this.firstName.fill(text);
  }


  async filllastName(text: string) {
    await this.getStarted();
    await this.lastName.scrollIntoViewIfNeeded();
    await expect(this.lastName).toBeVisible();
    await this.lastName.fill(text);
  }

  async fillCompany(text: string) {
    await this.getStarted();
    await this.company.scrollIntoViewIfNeeded();
    await expect(this.company).toBeVisible();
    await this.company.fill(text);
  }


  async fillTitle(text: string) {
    await this.getStarted();
    await this.title.scrollIntoViewIfNeeded();
    await expect(this.title).toBeVisible();
    await this.title.fill(text);
  }


  async ClickButtonEdit(){
    await this.getStarted();
    await expect(this.ButtonEdit).toBeVisible();
    await this.ButtonEdit.click();
  }


//  async clickbuttonSave(){
//   await this.getStarted();
//   await expect(this.buttonSave.last()).toBeVisible();
//   await this.buttonSave.last().click();
//  }

 async clickbuttonSave() {
  await this.getStarted();
  await expect(this.buttonSave).toBeEnabled(); // Ensure button is enabled
  await this.buttonSave.last().tap();
}

 async clickbuttonApply(){
  await this.getStarted();
  await expect(this.buttonApply).toBeVisible();
  await this.buttonApply.click();
 }


 async clickbuttonSaveNew(){
  await this.getStarted();
  await expect(this.buttonSaveNew).toBeVisible();
  await this.buttonSaveNew.click();
 }


 async clickbuttonNext(){
  await this.getStarted();
  await expect(this.buttonNext).toBeVisible();
  await this.buttonNext.tap();
 }
 


 async clickbuttonCancel(){
  await this.getStarted();
  await expect(this.buttonCancel).toBeVisible();
  await this.buttonCancel.tap();
 }


 async clickcheckbox(){
  await this.getStarted();
  await expect(this.addselfasattendee).toBeVisible();
  await this.addselfasattendee.tap();
 }


 async clickAddAttendee(){
  await this.getStarted();
  await expect(this.buttonAddAttendee).toBeVisible();
  await this.buttonAddAttendee.click();
 }
 async clickbuttonCheckout(){
  await this.getStarted();
  await expect(this.buttonCheckout).toBeVisible();
  await this.buttonCheckout.click();
 }

 async clickbuttonconfirmpay(){
  await this.getStarted();
  await expect(this.ConfirmPay).toBeVisible();
  await this.ConfirmPay.click();


 }

};