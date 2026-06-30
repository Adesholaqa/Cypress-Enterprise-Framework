import HomePage from '../../Pages/HomePage';
import SignupPage from '../../Pages/SignupPage';


describe('sign up test', () => {

    it("should open homepage screen and click sign up", () => {

        cy.fixture('user').then((user) => {

            const timestamp = Date.now();
            user.email = `adex${timestamp}@yopmail.com`;

            cy.writeFile('cypress/fixtures/loginUser.json', {
                email: user.email
            });
            //sign up info withs selector on the first page

            HomePage.open();
            HomePage.clickLogin();
            SignupPage.enterSignupName(user.name);
            SignupPage.enterSignupEmail(user.email);
            SignupPage.clickSignupButton();

            cy.url().should('include', '/signup');


            //SignupPage.enterAccountName (user.name);
            // SignupPage.enterAccountEmail (user.email);

            //sign up info and its locator or selector  on the Account info page 

            SignupPage.enterAccountPassword(user.password);
            SignupPage.selectDay(user.day);
            SignupPage.selectMonth(user.month);
            SignupPage.selectYear(user.year);
            SignupPage.enterFirstName(user.firstname);
            SignupPage.enterLastName(user.lastname);
            SignupPage.enterCompany(user.company);
            SignupPage.enterAddress(user.address);
            SignupPage.selectCountry(user.country);
            SignupPage.enterStateField(user.state);
            SignupPage.enterCityField(user.city);
            SignupPage.enterZipCodeField(user.zipcode);
            SignupPage.enterMobileNumberField(user.mobileNumber)
            SignupPage.clickCreateAccountButton();

            cy.contains('Account Created!').should('be.visible');

            // cy.url().should('include', '/account_created');



            SignupPage.clickContinueButton()

        });



    });
});