const userinfo = require('./information');



var cowsay = require("cowsay");

console.log(cowsay.say({
    text : (`Hi, my name is ${userinfo.etudiant.nom} and I'm from ${userinfo.etudiant.campus}`),
    e : "oO",
    T : "U "
}));