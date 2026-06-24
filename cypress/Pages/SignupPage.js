import BasePage from "./BasePage";

class SignupPage extends BasePage {

    signupNameField = '[data-qa="signup-name"]';
    signupEmailField = '[data-qa="signup-email"]';
    signupButton = '[data-qa="signup-button"]';
    signupPassword = '[data-qa="password"]';
    dayDropDown = '[data-qa="days"]';
    monthDropDown = '[data-qa="months"]';
    yearDropDown = '[data-qa="years"]';

    firstNameField = '[data-qa="first_name"]';
    lastNameField = '[name="last_name"]';
    companyField = '[data-qa="company"]';
    addressField = '[data-qa="address"]';
    countryField = '[data-qa="country"]';
    stateField = '[data-qa="state"]';
    cityField = '[data-qa="city"]';
    zipCodeField = '[data-qa="zipcode"]';
    mobileNumberField = '[data-qa="mobile_number"]';
    accountNameField = '[data-qa="name"]'
    //accountEmailField = '[data-qa="email"]'
    creatAccountButton = '[data-qa="create-account"]'

    continueButton = '[data-qa="continue-button"]'


    enterSignupName(name) {
        this.type(this.signupNameField, name);

    }

    enterSignupEmail(signupemail) {
        this.type(this.signupEmailField, signupemail);
    }

    clickSignupButton() {
        this.click(this.signupButton);
    }

    enterAccountName(name) {
        this.type(this.accountNameField, name);
    }

    //enterAccountEmail(email) {
    // this.type(this.accountEmailField, email);
    //  }

    enterAccountPassword(password) {
        this.type(this.signupPassword, password);
    }

    selectDay(day) {
        this.select(this.dayDropDown, day);
    }

    selectMonth(month) {
        this.select(this.monthDropDown, month);
    }

    selectYear(year) {
        this.select(this.yearDropDown, year);
    }

    enterFirstName(name) {
        this.type(this.firstNameField, name);
    }

    enterLastName(name) {
        this.type(this.lastNameField, name);
    }

    enterCompany(company) {
        this.type(this.companyField, company);
    }

    enterAddress(address) {
        this.type(this.addressField, address);
    }

    selectCountry(country) {
        this.select(this.countryField, country);
    }

    enterStateField(state) {
        this.type(this.stateField, state);
    }

    enterCityField(city) {
        this.type(this.cityField, city);
    }

    enterZipCodeField(zipcode) {
        this.type(this.zipCodeField, zipcode);
    }

    enterMobileNumberField(number) {
        this.type(this.mobileNumberField, number);
    }

    clickCreateAccountButton() {
        this.click(this.creatAccountButton);
    }

    clickContinueButton() {
        this.click(this.continueButton);
    }


}

export default new SignupPage();