/**
 * XadillaX created at 2015-02-02 14:11:23
 *
 * Copyright (c) 2015 Huaban.com, all rights
 * reserved
 */
var xto = require("../");
var companies = xto.companies;

function query(object) {
    xto.query(object.testnu, object.code, function(err) {
        if(err) {
            return console.error(object.companyname + " error: " + err.message);
        }

        console.log(object.companyname + " succeeded.");
    });
}

for(var i = 0; i < companies.length; i++) {
    var company = companies[i];
    query(company);
}

