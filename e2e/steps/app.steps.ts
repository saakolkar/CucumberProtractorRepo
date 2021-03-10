
import { browser } from 'protractor';
import { defineSupportCode, setDefaultTimeout } from 'cucumber';
import { AppPage } from './app.po';
import { expect } from 'chai';


setDefaultTimeout(60 * 20000);

defineSupportCode(({ Given, When, Then, Before }) => {
    let app: AppPage;

    Before(() => {
        app = new AppPage();
    });

    Given('The app is open on {string}', async (string) => {
        await browser.sleep(2000);
        await browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(5000);
        await browser.get('http://' + string + ':4200/');
        await browser.sleep(5000);


    });


    // Scenario# search people
    When('I search valid {string}', async (string) => {


        await browser.sleep(5000);
        app.searchpeople(string);

        await browser.sleep(5000);


    });

    Then('I verify that searched {string} has {string},{string},{string},{string}', async (pPeoplename, pGentder, pBirthYear, pEyeColor, pSkinColor) => {



        expect(await app.getPeoplename()).to.equal(pPeoplename);
        expect(await app.getgender()).to.equal(pGentder);
        expect(await app.getBirthyear()).to.equal(pBirthYear);
        expect(await app.getEyecolor()).to.equal(pEyeColor);
        expect(await app.getskincolor()).to.equal(pSkinColor);


    });

    // Scrnario#2 - Search Planet 


    When('I search valid planet {string}', async (pPlanetName) => {

        app.selectPlanetoption();

        app.searchPlanet(pPlanetName);
        await browser.sleep(5000);
    });

    Then('I verify that searched planet {string} has {string},{string},{string}', async (pPlanetname, pPopulation, pClimate, pGravity) => {

        expect(await app.getPlanetName()).to.equal(pPlanetname);
        expect(await app.getplanetpopulation()).to.equal(pPopulation);
        expect(await app.getplanetclimet()).to.equal(pClimate);
        expect(await app.getplanetGravity()).to.equal(pGravity);


    });



})


