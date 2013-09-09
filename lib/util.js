/**
 * Created with JetBrains WebStorm.
 * User: xadillax
 * Date: 9/10/13
 * Time: 2:22 AM
 * xto - To track your express.
 */
exports.baseHeader = {
    "content-type"      : "application/x-www-form-urlencoded",
    "content-length"    : 0,
    "user-agent"        : "xto query client"
};

exports.stringifyData = function(data) {
    var qs = require("querystring");
    return qs.stringify(data);
};

exports.getDataLength = function(data) {
    var str = this.stringifyData(data);
    return str.length;
};

exports.getBaseHeader = function(postdata, ext) {
    var header = this.baseHeader;

    if(typeof(postdata) === "int") {
        header["content-length"] = postdata;
    } else if(typeof(postdata) === "string") {
        header["content-length"] = postdata.length;
    } else if(typeof(postdata) === "object") {
        header["content-length"] = this.getDataLength(postdata);
    } else if(postdata === undefined) {
        header["content-length"] = 0;
    }

    if(typeof(ext) === "object") {
        for(ele in ext) {
            header[ele] = ext[ele];
        }
    }

    return header;
};

exports.callCallback = function(status, msg, obj, cb, self) {
    if(cb !== undefined && typeof cb === "function") {
        cb.bind(self)(status, msg, obj);
    }
};
