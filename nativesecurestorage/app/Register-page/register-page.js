var SecureStorage = require("@nativescript/secure-storage").SecureStorage;
var util = require("../utility/util");
var page;
var usernametfreg,passwordtfreg;
var registerbutton;
var secureStorage = new SecureStorage();

exports.registerpageLoaded = (args) => {
    console.log("registerpage loading......");

  page = args.object;
  usernametfreg=page.getViewById("usernametfreg");
  passwordtfreg=page.getViewById("passwordtfreg");
  registerbutton=page.getViewById("registerbtn");


  console.log("registerpage loaded!~");

}


exports.submit = () => {
    console.log("tapped registerbutton");
    var bool;
    var uname = usernametfreg.text;
    var pass = passwordtfreg.text;
    console.log("username ~ "+uname);
    console.log("password ~ "+pass);
    console.log("username length ~ "+uname.length);
    console.log("password length ~ "+pass.length);

    if(uname.length>3){
        if(pass.length>3){
            console.log("continue register");
            secureStorage.set({
                key: "username",
                value: usernametfreg.text 
            }).then(
                function(success){
                console.log("Successfully set a value? " + success);
                bool = true;
                }
            );
            secureStorage.set({
                key: "password",
                value: passwordtfreg.text 
            }).then(
                function(success){
                console.log("Successfully set a value? " + success);
                if(bool){
                    util.navigateTo("main-page",false);
                }
                
                }
            );
        }else{
            console.log("Enter valid password");
        }
    }
    else{
        console.log("Enter valid username");
    }

    
      

}