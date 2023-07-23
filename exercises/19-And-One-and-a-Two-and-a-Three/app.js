let contact = {
    fullname: "Jane Doe",
    phone: "321-321-4321",
    email: "test@test.com"
}
let newContact = [];

for (let key in contact) {
    // Code goes here
    /*
    if(key=="fullname") newContact[key]="John Doe";
    else if(key=="phone") newContact[key]="123-123-2134";
    else if(key=="email") newContact[key]="test@nowhere.com";
    */
   console.log(key+" : "+contact[key]);

}
console.log(newContact);

