const {Builder,By} = require('selenium-webdriver');

const driver = new Builder().forBrowser('firefox').build();

async function radioButton() {
    try {
        await driver.get('https://rori4.github.io/selenium-practice/#/pages/practice/radio-button-form');
        await driver.findElement(By.css('#title')).sendKeys('titulotitulotitulotitulotitulotitulotitulo');
        await driver.findElement(By.css('#description')).sendKeys('esto es una descricpion');
        await driver.findElement(By.css('div:nth-child(1) > label > span.custom-control-indicator')).click();
        await driver.findElement(By.css('#submit')).click();
    } catch (error) {
        console.log(error);
    }
}

radioButton();