var SecureStorage = require("@nativescript/secure-storage").SecureStorage;
var util = require("./utility/util");

var page;
var usernametf,passwordtf;
var loginbutton;
var secureStorage = new SecureStorage();

exports.pageLoaded = (args) =>{
  console.log("mainpage loading......");

  page = args.object;
  usernametf=page.getViewById("usernametf");
  passwordtf=page.getViewById("passwordtf");
  loginbutton=page.getViewById("loginbtn");

  console.log("mainpage loaded!~");
}

exports.newuser = () => {
  console.log("pressed new usr");
  util.navigateTo("Register-page/register-page",false);
}

exports.submit = () => {
  var tempname = null;
  var temppass = null;
  var uname = usernametf.text;
  var pass = passwordtf.text;
  console.log("username ~ "+uname);
  console.log("password ~ "+pass); 
  secureStorage.get({
    key: "username"
  }).then(
    function(value) {
      console.log("Got value: " + value);
      tempname=value;

    }
  );
  secureStorage.get({
    key: "password"
  }).then(
    function(value) {
      console.log("Got value: " + value);
      temppass=value;
      if(tempname==uname&&temppass==pass){
        console.log("move to next page");
        util.navigateTo("Homepage/homepage",false);
      }else{
        console.log("Enter Valid useraname and password");
      }

    }
  );

    if(tempname==uname&&temppass==pass){
      console.log("move to next page");
      util.navigateTo("Homepage/homepage",false);
    } else {
      alert("Enter Valid useraname and password");
    }
  
}