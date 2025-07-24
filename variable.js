let accountEmail = "prema1234@gmail.com";
var accountPassword = "prema1234";
const accountId = "1234";
accountCity = "Jaipur";
let accountState;

// accountId = 2 // not allowed

accountEmail = "prema@.com";
accountPassword = "12345";
accountCity = "Delhi";

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scop
*/ 

console.table([accountId, accountEmail, accountPassword, accountCity, accountstate]);

