const { Options } = require("selenium-webdriver/chrome");

require('chromedriver');
const webdriver =  require('selenium-webdriver'),
      By = webdriver.By,
      until = webdriver.until;


      const driver = new webdriver.Builder().forBrowser('chrome').build();

      driver.get('https://library-app.firebaseapp.com/');
      
      driver.findElement(By.css('input')).sendKeys('user@email.com');
      driver.findElement(By.css('.btn-primary')).click();
      // driver.findElements(By.css('nav li')).then((elements)=>{
      //   elements.map((el)=>{
      //     el.getText().then((txt)=>{
      //       console.log('the text of the navbar element is: ' + txt);
      //     })
      //   })
      // });

      async function message(){
        await driver.wait(until.elementsLocated(By.css('.alert-success'),10000));
        await driver.findElement(By.css('.alert')).getText().then((txt)=>{
          console.log("Alert success text is: " + txt );
        })
      }

      message();

      
      

