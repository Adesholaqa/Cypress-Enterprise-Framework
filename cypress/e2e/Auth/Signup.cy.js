import HomePage from '../../Pages/HomePage';
import SignupPage from '../../Pages/SignupPage';


describe('sign up test', () => {

    it("should open homepage screen and click sign up", () => {
       
        cy.fixture('user').then((user) => {

            const timestamp = Date.now();
            user.email = `adex${timestamp}@yopmail.com` ;

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
        SignupPage.selectDay("16");
        SignupPage.selectMonth("6");
        SignupPage.selectYear("1992");
        SignupPage.enterFirstName('david')
        SignupPage.enterLastName('john');
        SignupPage.enterCompany('Adejosh');
        SignupPage.enterAddress('olakunle street, lajuwon close, lagos nigeria');
        SignupPage.selectCountry('United States');
        SignupPage.enterStateField('Lagos');
        SignupPage.enterCityField('Lagos');
        SignupPage.enterZipCodeField('100001');
        SignupPage.enterMobileNumberField('08045678354')
        SignupPage.clickCreateAccountButton();

        cy.contains('Account Created!').should('be.visible');

       // cy.url().should('include', '/account_created');

        

        SignupPage.clickContinueButton()

        });
       
      

    });
});