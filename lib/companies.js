/**
 * XadillaX created at 2015-02-02 13:56:39
 *
 * Copyright (c) 2015 Huaban.com, all rights
 * reserved
 */
var map = require("../const/namemapper");
var _companiesName = {};
var _companiesShort = {};
var _companiesCode = {};

for(var i = 0; i < map.length; i++) {
    var company = map[i];
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
