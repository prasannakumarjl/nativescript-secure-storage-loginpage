var SecureStorage = require("@nativescript/secure-storage").SecureStorage;
var util = require("../utility/util");

var label;

var page;
var secureStorage = new SecureStorage();

exports.homepageLoaded = (args)=>{
    console.log("home page started loading");
  
    page = args.object;
    label = page.getViewById("welcometext");
    

    secureStorage.get({
      key: "username"
    }).then(
      function(value) {
        console.log("Got value: " + value);
        
        label.text = "Welcome "+value+"!";
  
      }
    );
  
    console.log("home page finished loading");
    
}

