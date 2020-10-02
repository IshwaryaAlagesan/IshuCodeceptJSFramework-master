
Feature('Registration_Feature');

Scenario('1. Registration page_check the Title', async(I) => {
    
    baseurl = 'http://myRingGoTest:W4t3Rf4lls@myrgo-preprod.ctt.co.uk/register'
    I.amOnPage(baseurl);
    I.see('Register for a RingGo account');
    I.seeTitleEquals("RingGo Cashless Parking Solution: Register for a RingGo account");
});

Scenario('2. Registration page_MobileNumber field should not accept alpthabets', async(I) => {
    I.fillField("//input[@id='field-Member_CLI']", "0123abc");
    I.pressKey('Tab');
    // I.wait(2);
    I.retry(3).see("Phone number is invalid",'#climsgbox')
});

Scenario('3. Registration page_MobileNumber field should not accept special characters', async(I) => {
    I.fillField("//input[@id='field-Member_CLI']", "0123$$");
    I.pressKey('Tab');
    I.retry(3).see("Phone number is invalid");
});

Scenario('4. Registration page_MobileNumber throw error for re-use same number', async(I) => {
    I.fillField("//input[@id='field-Member_CLI']", "0123456789");
    I.pressKey('Tab');
    I.retry(3).see("Number is already in use. If this is your number, please login, retrieve your PIN or reset your password .");
});

Scenario('5. Registration page_MobileNumber valid success message', async(I) => {
    I.fillField("//input[@id='field-Member_CLI']", "1234562222");
    I.pressKey('Tab');
    I.retry(3).see("Number available to register");
});

Scenario('6. Registration page_Email address Invalid', async(I) => {
    I.fillField("//input[@id='field-Member_Email']", "Dummy");
    I.pressKey('Tab');
    I.retry(3).see("Email is invalid");
});

Scenario('7. Registration page_Email address existing message', async(I) => {
    I.fillField("//input[@id='field-Member_Email']", "test@test.com");
    I.pressKey('Tab');
    I.retry(3).see("Email is already in use");
});

Scenario('8. Registration page_Email address valid success message ', async(I) => {
    I.fillField("//input[@id='field-Member_Email']", "testnew@test1.com");
    I.pressKey('Tab');
    I.retry(3).see("Email available to register");
});

Scenario('9. Registration page_Password without Cap letter', async(I) => {
    I.fillField("//input[@id='field-MemberPassword']", "password123");
    I.pressKey('Tab');
    I.retry(3).see("The password does not meet the correct format.");
});

Scenario('10. Registration page_Password without small letter', async(I) => {
    I.fillField("//input[@id='field-Member_Email']", "password123");
    I.pressKey('Tab');
    I.retry(3).see("The password does not meet the correct format.");
});

Scenario('11. Registration page_Password without number', async(I) => {
    I.fillField("//input[@id='field-Member_Email']", "Password");
    I.pressKey('Tab');
    I.retry(3).see("The password does not meet the correct format.");
});

Scenario('12. Registration page_Password valid', async(I) => {
    I.fillField("//input[@id='field-Member_Email']", "Password123");
    I.pressKey('Tab');
});