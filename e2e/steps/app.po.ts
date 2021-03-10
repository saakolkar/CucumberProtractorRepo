import {  by, element } from 'protractor';


export class AppPage {


    public searchpeople(string) {
        
        element(by.id('query')).sendKeys(string);

        element(by.xpath("//button[text()='Search']")).click();

    }

    public getPeoplename() {

        return element(by.xpath("//h6")).getText();


    }


    public getgender() {


        return element(by.xpath("//div[text()='Gender:']/following-sibling::div")).getText();
    }

    public getBirthyear() {
        return element(by.xpath("//div[text()='Birth year:']/following-sibling::div")).getText();
    }

    public getEyecolor() {

       return element(by.xpath("//div[contains(text(),'Eye')]/following-sibling::div")).getText();

    }

    public getskincolor() {
        return element(by.xpath("//div[text()='Skin color:']/following-sibling::div")).getText();
    }
    // planet search opoerations


    public selectPlanetoption() {

        element(by.xpath("//input[@id='planets']")).click();
    }


    public searchPlanet(string) {
        element(by.id('query')).sendKeys(string);

        element(by.xpath("//button[text()='Search']")).click();

    }
    public getPlanetName() {
        return element(by.xpath("//h6")).getText();
    }

    public getplanetpopulation() {
        return element(by.xpath("//div[text()='Population:']/following-sibling::div")).getText();
    }


    public getplanetclimet() {
        return element(by.xpath("//div[text()='Climate:']/following-sibling::div")).getText();
    }



    public getplanetGravity() {
        return element(by.xpath("//div[text()='Gravity:']/following-sibling::div")).getText();
    }


}