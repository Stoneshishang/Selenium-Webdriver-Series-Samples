const { Options } = require("selenium-webdriver/chrome");

require('chromedriver');
const webdriver =  require('selenium-webdriver'),
      By = webdriver.By,
      until = webdriver.until;


      const driver = new webdriver.Builder().forBrowser('chrome').build();

      driver.get('https://library-app.firebaseapp.com/');

      let submitBtn = driver.findElement(By.css('.btn-primary'))
      driver.findElement(By.css('input')).sendKeys('user');
      
      // driver.findElements(By.css('nav li')).then((elements)=>{
      //   elements.map((el)=>{
      //     el.getText().then((txt)=>{
      //       console.log('the text of the navbar element is: ' + txt);
      //     })
      //   })
      // });

      //test I changed the no-reply email link to my github account on Nina's Mackbook Pro
      //based on the link https://docs.github.com/en/free-pro-team@latest/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address

      async function message(){
        await driver.wait(()=>{
          return submitBtn.getCssValue('opacity').then((result)=>{
            return result == 1;
          });
        },10000)

        submitBtn.click();

        await driver.wait(until.elementsLocated(By.css('.alert-success'),10000));
        await driver.findElement(By.css('.alert')).getText().then((txt)=>{
          console.log("Alert success text is: " + txt );
        })
      }

      message();

      
      
      

