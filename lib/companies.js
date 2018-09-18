/**
 * XadillaX created at 2015-02-02 13:56:39
 *
 * Copyright (c) 2016 xcoder.in, all rights
 * reserved
 */
"use strict";

const map = require("../const/namemapper");

const _companiesName = {};
const _companiesShort = {};
const _companiesCode = {};

for(let i = 0; i < map.length; i++) {
    const company = map[i];
    _companiesName[company.companyname] = company;
    _companiesShort[company.shortname] = company;
    _companiesCode[company.code] = company;
}

/**
 * get company information
 * @param {String} company company name, short name or code
 * @return {Object} the company information
 */
exports.getCompanyInfo = function(company) {
    return _companiesCode[company] ||
        _companiesShort[company] ||
        _companiesName[company];
};
