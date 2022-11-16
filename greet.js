let firstname=process.argv[2];
firstname=firstname[0].toUpperCase()+firstname.substring(1);  //steve
let lastname=process.argv[3];
lastname=lastname[0].toUpperCase()+lastname.substring(1);
console.log(firstname);
console.log(lastname);