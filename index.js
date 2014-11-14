/**
 * Created with JetBrains WebStorm.
 * User: xadillax
 * Date: 9/10/13
 * Time: 1:34 AM
 * xto - To track your express.
 */
exports.mapper = require("./lib/namemapper");

/**
 * get company info
 * @param company
 * @returns {*}
 */
exports.getCompanyInfo = function(company) {
    for(var i = 0; i < this.mapper.length; i++) {
        if(company === this.mapper[i]["companyname"] || company === this.mapper[i]["shortname"] ||
            company === this.mapper[i]["code"])
        {
            return this.mapper[i];
        }
    }

    return null;
};

/**
 * is one number valid
 * @param num
 * @param companyObject
 * @returns {boolean}
 */
exports.isNumberValid = function(num, companyObject) {
    if(companyObject["freg"] !== undefined) {
        var reg = new RegExp(companyObject["freg"]);
        return reg.test(num);
    }
};

/**
 * query an express.
 * @param num
 * @param company
 * @param callback
 */
exports.query = function(num, company, callback) {
    var company_object = null;
    var exists = false;
    for(var i = 0; i < this.mapper.length; i++) {
        if(company === this.mapper[i]["companyname"] || company === this.mapper[i]["shortname"] ||
            company === this.mapper[i]["code"])
        {
            company_object = this.mapper[i];
            exists = true;
            break;
        }
    }
    if(!exists) {
        if(callback !== undefined) {
            callback.bind(this)(false, "This company is not supported yet.", {});
        }
        return;
    }

    if(!this.isNumberValid(num, company_object)) {
        if(callback !== undefined) {
            callback.bind(this)(false, "Invalid number.", {});
        }
        return;
    }

    try {
        var c = require("./lib/inner");
    } catch(e) {
        /**
         * If no such company file.
         */
        if(callback !== undefined) {
            callback.bind(this)(false, "Can't find the company or broken file.", {});
        }
        return;
    }

    try {
        c.query(num, company, callback);
    } catch(e) {
        if(callback !== undefined) {
            callback.bind(this)(false, e.message, {});
        }
        return;
    }
};

/**
 * state to text.
 * @param state
 * @returns {string}
 */
exports.stateToText = function(state) {
    state = parseInt(state);
    var value = "未知";
    switch(state) {
        case 0 : value = "在途中"; break;
        case 1 : value = "已发货"; break;
        case 2 : value = "疑难件"; break;
        case 3 : value = "已签收"; break;
        case 4 : value = "已退货"; break;
    }

    return value;
};
