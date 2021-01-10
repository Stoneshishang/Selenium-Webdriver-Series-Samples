require('chromedriver');
const webdriver =  require('selenium-webdriver'),
      By = webdriver.By,
      until = webdriver.until;


      const driver = new webdriver.Builder().forBrowser('chrome').build();

      driver.get('https://library-app.firebaseapp.com/');
      
      driver.findElement(By.css('input')).then( (el) =>{
        console.log("test input success!!" + JSON.stringify(el));
      });
      driver.findElement(By.css('.btn-primary')).then( (el) =>{
        console.log("test button success!!" + el);
      });;
      driver.findElement(By.css('nav li')).then( (el) =>{
        console.log("test nav success!!" + el);
      });;

