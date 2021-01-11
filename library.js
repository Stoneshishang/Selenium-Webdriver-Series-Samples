const { Options } = require("selenium-webdriver/chrome");

require('chromedriver');
const webdriver =  require('selenium-webdriver'),
      By = webdriver.By,
      until = webdriver.until;


      const driver = new webdriver.Builder().forBrowser('chrome').build();

      driver.get('https://library-app.firebaseapp.com/');
      
      driver.findElement(By.css('input'));
      driver.findElement(By.css('.btn-primary')).getText().then((txt)=>{
        console.log("Text of the btn is " + txt);
      });
      driver.findElements(By.css('nav li')).then((elements)=>{
        console.log('elements are: ' + elements);
        elements.map((el)=>{
          el.getText().then((txt)=>{
            console.log('the text of the navbar element is: ' + txt);
          })
        })
      });
      

