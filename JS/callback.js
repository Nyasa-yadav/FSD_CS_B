function register(cb){
  setTimeout(() => {
    console.log("register");
    cb();
  }, 200);
}

function login(){
  setTimeout(() => {
     console.log("login");
  }, 3000);
}

function displayData(){
  console.log("data");
}

register();
login();
displayData();