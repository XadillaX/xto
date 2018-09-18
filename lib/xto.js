/**
 * XadillaX created at 2015-02-02 13:50:18
 *
 * Copyright (c) 2016 xcoder.in, all rights
 * reserved
 */
"use strict";

const companies = require("./companies");
const inner = require("./inner");

const getCompanyInfo = exports.getCompanyInfo = companies.getCompanyInfo;

exports.companies = require("../const/namemapper");

/**
 * is express id valid
 * @param {String} num the express id
 * @param {Object} companyObject the company object
 * @return {Boolean} is this express id valid
 */
const isNumberValid = exports.isNumberValid = function(num, companyObject) {
    if(companyObject.freg) {
        return (new RegExp(companyObject.freg)).test(num);
    }
    return true;
};

/**
 * query for express
 * @param {String} num the express id
 * @param {String} company express company name, short name or code
 * @param {Function} [callback] the callback function
 * @return {Promise | void} - a promise or void
 */
exports.query = function(num, company, callback) {
    const companyObject = getCompanyInfo(company);
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

    if(!callback || !(callback instanceof Function)) {
        if(!global.Promise) {
            const msg = "Your Node runtime does support ES6 Promises. " +
                "Set 'global.Promise' to your preferred implementation of promises.";
            throw new Error(msg);
        }
        return new Promise((resolve, reject) => {
            const executor = (err, result) => {
                if(err) return reject(err);
                resolve(result);
            };
            inner.query(num, companyObject.code, executor);
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
    if(isNaN(state)) return "未知";
    let value = "未知";
    switch(state - "0") {
    case 0: value = "在途中"; break;
    case 1: value = "已发货"; break;
    case 2: value = "疑难件"; break;
    case 3: value = "已签收"; break;
    case 4: value = "已退货"; break;
    case 5: value = "派送中"; break;
    default: break;
    }

    return value;
};
