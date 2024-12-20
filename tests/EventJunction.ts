import { expect, type Locator, type Page } from '@playwright/test';

const { faker } = require('@faker-js/faker');

var fName = faker.person.firstName();
var lName = faker.person.lastName();
var email = faker.internet.email();
var company = faker.company.name();
var title = faker.person.jobTitle(); 

export class EventJunction {
  readonly FnameValidation: Locator;
  readonly LnameValidation: Locator;
  readonly WorkEmailValidation: Locator;
  readonly CompanyValidation: Locator;
  readonly TitleValidation: Locator;
  readonly PhoneValidation: Locator;
  readonly EmailValidation: Locator;
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
  readonly phone: Locator;
  readonly workemail: Locator;
  readonly addselfasattendee: Locator;
  readonly buttonNext: Locator;
  readonly page1: Locator;
  readonly page2: Locator;
  readonly page3: Locator;
  readonly attendeeinfopage: Locator;
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
  readonly attendeeInfoErrorToast: Locator;
  readonly StandardEntryTicket: Locator;
  readonly MembershipEntryTicket: Locator;
  readonly PremiumEntryTicket: Locator;


  constructor(page: Page) {
    this.page = page;
    this.name = page.getByPlaceholder('Name');
    this.email = page.getByPlaceholder('Email');
    this.workemail = page.getByPlaceholder('Work Email');
    this.dietryPreferance = page.getByPlaceholder('Vegan');
    this.disability = page.getByPlaceholder('Visually Impaired');
    this.buttonSave = page.getByRole('button', { name: 'Save' });
    this.buttonApply = page.getByRole('button', { name: 'Apply' });
    // this.buttonSaveNew = page.getByRole('button', { name: 'Save and New' });
    this.buttonSaveNew = page.locator("xpath=//button[normalize-space()='Save & New']");
    this.buttonCancel = page.getByRole('button', { name: 'Cancel' });
    this.buttonAddAttendee = page.getByRole('button', { name: 'Add Attendee' });
    this.firstName = page.getByPlaceholder('First Name');
    this.lastName = page.getByPlaceholder('Last Name');
    this.company = page.getByPlaceholder('Company');
    this.title = page.getByPlaceholder('Job Title');
    this.phone = page.getByPlaceholder('Mobile')
    this.addselfasattendee = page.locator("xpath=//*[@class='slds-checkbox_faux']");
    this.buttonNext = page.getByRole('button', { name: 'Next' });
    this.attendeeinfopage = page.locator("//h1[normalize-space()='Attendee Details']")
    this.page3 = page.locator("xpath=//h1[normalize-space()='Registration: Step 3 of 3']");
    this.page2 = page.locator("xpath=//h1[normalize-space()='Registration: Step 2 of 3']");
    this.page1 = page.locator("xpath=//h1[normalize-space()='Registration: Step 1 of 3']");
    this.CardHolderName = page.getByPlaceholder('Mark Johnson');
    this.CardNumber = page.getByPlaceholder('41921-21823912-1232');
    this.ExpiryMonth=page.getByPlaceholder('10');
    this.ExpiryYear=page.getByPlaceholder('2027');
    this.CardCVV=page.getByPlaceholder('****');
    this.ButtonSubmitPayment = page.getByRole('button', { name: 'Submit Payment' });
    this.ButtonBack = page.locator("xpath=//button[@title='back']//lightning-primitive-icon[@exportparts='icon']");
    this.ButtonEdit = page.getByTitle('edit') ;
    this.ButtonDelete = page.getByTitle('delete');
    // this.FnameValidation = page.locator("xpath=//*[@id='help-message-20']");
    this.FnameValidation = page.getByText("Complete this field.");
    // this.LnameValidation = page.locator("xpath=//*[@id='help-message-23']");
    this.LnameValidation = page.getByText("Complete this field.");
    // this.WorkEmailValidation = page.locator("xpath=//*[@id='help-message-29']");
    this.WorkEmailValidation = page.getByText("Complete this field.");
    // this.CompanyValidation = page.locator("xpath=//*[@id='help-message-32']");
    this.CompanyValidation = page.getByText("Complete this field.");
    // this.TitleValidation = page.locator("xpath=//*[@id='help-message-26']");
    this.TitleValidation = page.getByText("Complete this field.");
    // this.PhoneValidation = page.locator("xpath=//*[@id='help-message-35']");
    this.PhoneValidation = page.getByText("Complete this field.");

    // this.EmailValidation = page.locator("xpath=//*[@id='help-message-140']");
    this.EmailValidation = page.getByText('You have entered an invalid format.');

    // locator for checking the toast if all fields are filled on the attendee registration page
    this.attendeeInfoErrorToast = page.getByText("Please fill all mandatory fields");

    this.StandardEntryTicket =page.locator("xpath=lightning-tile[data-id='a04As000001StDtIAK']");
    // this.StandardEntryTicket =page.locator("xpath=//p[normalize-space()='Standard Entry']");
    this.MembershipEntryTicket = page.locator("xpath=lightning-tile[data-id='a04As000001Tju1IAC']");
    // this.MembershipEntryTicket = page.locator("xpath=//p[normalize-space()='Membership Entry']");
    this.PremiumEntryTicket = page.locator("xpath=lightning-tile[data-id='a04As000001TjvdIAC']");
    // this.PremiumEntryTicket = page.locator("xpath=//p[normalize-space()='Premium Entry']");

  }

  async goto() {
    await this.page.goto('https://flow-saas-3661-dev-ed.scratch.my.site.com/s/?eventId=a05As00000AbSdtIAF');}

  async ClickButtonBack(){
    await this.getStarted();
    await expect(this.ButtonBack).toBeVisible();
    await this.ButtonBack.click();
  }

  async CheckToast(){
    await expect(this.attendeeInfoErrorToast).toBeVisible();
  }

  async ClickButtonEdit(){
    await this.getStarted();
    await expect(this.ButtonEdit).toBeVisible();
    await this.ButtonEdit.click();
  }

  async ClickButtonDelete(){
    await this.getStarted();
    await expect(this.ButtonDelete).toBeVisible();
    await this.ButtonDelete.click();
  }
  
  async getStarted() {
    // await expect(this.page1).toBeVisible();
  }

  async getPage1() {
    await expect(this.page1).toBeVisible();
  }

  async getPage2() {
    await expect(this.page2).toBeVisible();
  }

  async getPage3() {
    await expect(this.page3).toBeVisible();
  }

  async getattendeeinfopage(){
    await expect(this.attendeeinfopage).toBeVisible();
  }



  async fillPromocode(text: string) {
    await this.getStarted();
    await expect(this.Promocode).toBeVisible();
    await this.Promocode.fill(text);
  }
  async fillEmail(text: string) {
    await this.getStarted();
    await expect(this.email).toBeVisible();
    await this.email.fill(text);
  }

  async fillWorkEmail(text: string) {
    await this.getStarted();
    await expect(this.workemail).toBeVisible();
    await this.workemail.fill(text);
  }

  async fillDietPreference(text: string) {
    await this.getStarted();
    await expect(this.dietryPreferance).toBeVisible();
    await this.dietryPreferance.fill(text);
  }

  async fillName(text: string) {
    await this.getStarted();
    await expect(this.name).toBeVisible();
    await this.name.fill(text);
  }

  async fillfirstName(text: string) {
    await this.getStarted();
    await expect(this.firstName).toBeVisible();
    await this.firstName.fill(text);
  }

  async fillLastName(text: string) {
    await this.getStarted();
    await expect(this.lastName).toBeVisible();
    await this.lastName.fill(text);
  }

  async fillCompany(text: string) {
    await this.getStarted();
    await expect(this.company).toBeVisible();
    await this.company.fill(text);
  }

  async fillTitle(text: string) {
    await this.getStarted();
    await expect(this.title).toBeVisible();
    await this.title.fill(text);
  }

  async fillPhone(text: string) {
    await this.getStarted();
    await expect(this.phone).toBeVisible();
    await this.phone.fill(text);
  }

  async checkValidationfirstPage() {
    await this.getStarted();
    await expect(this.FnameValidation || this.LnameValidation || this.CompanyValidation || this.WorkEmailValidation || this.TitleValidation || this.PhoneValidation).toBeVisible();
    // await expect(this.fillCompanyValidation)
  }

  async checkEmailValidationAttendeePage() {
    await this.getStarted();
    await expect(this.EmailValidation).toBeVisible();
    // await expect(this.fillCompanyValidation)
  }

  async fillDisability(text: string) {
    await this.getStarted();
    await expect(this.disability).toBeVisible();
    await this.disability.fill(text);
  }

 async clickbuttonSave(){
  await this.getStarted();
  await expect(this.buttonSave.last()).toBeVisible();
  await this.buttonSave.last().click();
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
 
 async clickPremiumEntryTicket(){
  await this.getStarted();
  await expect(this.PremiumEntryTicket).toBeVisible();
  await this.PremiumEntryTicket.click();
 }

 async clickMembershipEntryTicket(){
  await this.getStarted();
  await expect(this.MembershipEntryTicket).toBeVisible();
  await this.MembershipEntryTicket.click();
 }

 async clickStandardEntryTicket(){
  await this.getStarted();
  await expect(this.StandardEntryTicket).toBeVisible();
  await this.StandardEntryTicket.click();
 }


 async clickbuttonNext(){
  await this.getStarted();
  await expect(this.buttonNext).toBeVisible();
  await this.buttonNext.click();
 }

 async clickbuttonCancel(){
  await this.getStarted();
  await expect(this.buttonCancel).toBeVisible();
  await this.buttonCancel.click();
 }

 async clickcheckbox(){
  await this.getStarted();
  await expect(this.addselfasattendee).toBeVisible();
  await this.addselfasattendee.click();
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
async topage2(){
  await this.getStarted();
  await this.fillfirstName(fName);
  await this.fillLastName(lName);
  await this.fillWorkEmail(email);
  await this.fillCompany(company);
  await this.fillTitle(title);
  await this.fillPhone('0787827');
  await this.clickcheckbox();
  await expect(this.buttonNext).toBeVisible();
  await this.buttonNext.click();
  await this.getPage2();
 }

  async topage3(){
    await this.goto();
  await this.getStarted();
  await this.topage2();
  await expect(this.buttonCheckout).toBeVisible();
  await this.buttonCheckout.click();
  await this.getPage3();
 }

 async topage4(){
  await this.getStarted();
  await this.topage2();
  await this.topage3();
  await expect(this.ConfirmPay).toBeVisible();
  await this.ConfirmPay.click();

 }

 async SelectTicket(){
  await (this.StandardEntryTicket.click() ||this.PremiumEntryTicket.click() ||this.MembershipEntryTicket.click())
 };

 async fillCardHolderName(text: string) {
  await this.getStarted();
  await expect(this.CardHolderName).toBeVisible();
  await this.CardHolderName.fill(text);
}

async fillCardNumber(text: string) {
  await this.getStarted();
  await expect(this.CardNumber).toBeVisible();
  await this.CardNumber.fill(text);
}

async fillExpiryMonth(text: string) {
  await this.getStarted();
  await expect(this.ExpiryMonth).toBeVisible();
  await this.ExpiryMonth.fill(text);
}

async fillExpiryYear(text: string) {
  await this.getStarted();
  await expect(this.ExpiryYear).toBeVisible();
  await this.ExpiryYear.fill(text);
}

async fillCardCVV(text: string) {
  await this.getStarted();
  await expect(this.CardCVV).toBeVisible();
  await this.CardCVV.fill(text);
}

async clickbuttonSubmitPayment(){
  await this.getStarted();
  await expect(this.ButtonSubmitPayment).toBeVisible();
  await this.ButtonSubmitPayment.click();
 }

}


