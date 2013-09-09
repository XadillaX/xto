/**
 * Created with JetBrains WebStorm.
 * User: xadillax
 * Date: 9/10/13
 * Time: 1:34 AM
 * xto - To track your express.
 */
exports.mapper = require("./lib/namemapper");

exports.getCompanyInfo = function(company) {
    for(var i = 0; i < this.mapper.length; i++) {
        if(company === this.mapper[i]["companyname"] || company === this.mapper[i]["shortname"] ||
            company === this.mapper[i]["code"])
        {
            return this.mapper[i];
        }
    }

    return null;
}

exports.query = function(num, company, callback) {
    //company = company.toLowerCase();
    var exists = false;
    for(var i = 0; i < this.mapper.length; i++) {
        if(company === this.mapper[i]["companyname"] || company === this.mapper[i]["shortname"] ||
            company === this.mapper[i]["code"])
        {
            exists = true;
            break;
        }
    }
    if(!exists) {
        if(callback !== undefined) {
            callback.bind(this)(false, "This company is not supported yet.", []);
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
            callback.bind(this)(false, "Can't find the company or broken file.", []);
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

exports.stateToText = function(state) {
    switch(state) {
        case 0 : return "在途中";
        case 1 : return "已发货";
        case 2 : return "疑难件";
        case 3 : return "已签收";
        case 4 : return "已退货";
    }
}
