/**
 * XadillaX created at 2014-11-15 00:16
 *
 * Copyright (c) 2016 xcoder.in, all rights
 * reserved.
 */
"use strict";

require("sugar");
const xto = require("../");
const companies = xto.companies;

companies.forEach(function(ele) {
    console.log(`+ ${ele.companyname} (${ele.shortname}, ${ele.code}) `);
});
