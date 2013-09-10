/**
 * Created with JetBrains WebStorm.
 * User: xadillax
 * Date: 9/10/13
 * Time: 2:24 AM
 * xto - To track your express.
 */
var spider = require("nodegrassex");
var util = require("./util");
exports.query = function(num, company, callback) {
    var url = "http://baidu.kuaidi100.com/query?";
    url += "type=" + company + "&";
    url += "postid=" + num + "&";

    var self = this;
    spider.get(url, function(data, status, respheader) {
        /**
         * Some error get.
         */
        if(status !== 200) {
            util.callCallback(false, "Wrong status", {}, callback, self);
            return;
        }

        try {
            var json = JSON.parse(data);
        } catch(e) {
            util.callCallback(false, "Wrong data", {}, callback, self);
            return;
        }

        if(json["data"] === undefined) {
            util.callCallback(false, "Wrong data", {}, callback, self);
            return;
        }

        /**
         * OK.
         */
        util.callCallback(true, "", json, callback, self);
        return;
    }, {}, "utf8").on("error", function(e) {
        util.callCallback(false, "Error while getting data: " + e.message, {}, callback, self);
    });
};
