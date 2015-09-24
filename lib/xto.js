/**
 * XadillaX created at 2015-02-02 13:50:18
 *
 * Copyright (c) 2015 Huaban.com, all rights
 * reserved
 */
var inner = require("./inner");
var companies = require("./companies");

var getCompanyInfo = exports.getCompanyInfo = companies.getCompanyInfo;

exports.companies = require("../const/namemapper");

/**
 * is express id valid
 * @param {String} num the express id
 * @param {Object} companyObject the company object
 * @return {Boolean} is this express id valid
 */
var isNumberValid = exports.isNumberValid = function(num, companyObject) {
    if(companyObject.freg) {
        return (new RegExp(companyObject.freg)).test(num);
    }
    return true;
};

/**
 * query for express
 * @param {String} num the express id
 * @param {String} company express company name, short name or code
 * @param {Function} callback the callback function
 */
exports.query = function(num, company, callback) {
    var companyObject = getCompanyInfo(company);
    if(!companyObject) {
        return process.nextTick(function() {
            callback(new Error("This company is not supported yet."));
        });
    }

    if(!isNumberValid(num, companyObject)) {
        return process.nextTick(function() {
            callback(new Error("Invalid express number."));
        });
    }

    inner.query(num, companyObject.code, callback);
};

/**
 * state to text
 * @param {Number} state the express state
 * @return {String} the translated state
 */
exports.stateToText = function(state) {
    state = parseInt(state);
    var value = "未知";
    switch(state) {
        case 0: value = "在途中"; break;
        case 1: value = "已发货"; break;
        case 2: value = "疑难件"; break;
        case 3: value = "已签收"; break;
        case 4: value = "已退货"; break;
        case 5: value = "派送中"; break;
    }

    return value;
};
