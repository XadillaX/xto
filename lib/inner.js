/**
 * Created with JetBrains WebStorm.
 * User: xadillax
 * Date: 9/10/13
 * Time: 2:24 AM
 * xto - To track your express.
 */
require("sugar");
var spidex = require("spidex");
var qs = require("querystring");
var zlib = require("zlib");

spidex.setDefaultUserAgent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) " +
                           "AppleWebKit/537.36 (KHTML, like Gecko) " +
                           "Chrome/40.0.2214.94 Safari/537.36");
var baseUri = "http://baidu.kuaidi100.com/query?";

/**
 * query for express
 * @param {String} num post id
 * @param {String} company company type
 * @param {Function} callback the callback function
 */
exports.query = function(num, company, callback) {
    var queryObject = {
        type: company,
        postid: num,
        id: 4,
        valicode: "",
        temp: Math.random(),
        sessionid: ""
    };

    var header = {
        accept: "*/*",
        "accept-encoding": "gzip, deflate, sdch",
        "accept-language": "zh-CN,zh;q=0.8,en-US;q=0.6,en;q=0.4,sv;q=0.2,zh-TW;q=0.2",
        connection: "keep-alive",
        host: "baidu.kuaidi100.com",
        referer: "http://baidu.kuaidi100.com/",
        cookie: "inputpostid={num}; comcode={com}".assign({ num: num, com: company })
    };

    var url = baseUri + qs.stringify(queryObject);

    spidex.get(url, {
        timeout: 60000,
        charset: "binary",
        header: header
    }, function(data, status/**, respheader*/) {
        if(status !== 200) {
            return callback(new Error("Server returns a wrong status. " + status));
        }

        zlib.unzip(data, function(err, buff) {
            if(err) return callback(err);
            data = buff.toString("utf8");

            var json;
            try {
                json = JSON.parse(data);
            } catch(e) {
                return callback(e);
            }

            if(undefined === json.data) {
                var msg = json.message || "Unknown error.";
                if(msg.indexOf("：") !== -1) {
                    msg = msg.substr(msg.indexOf("：") + 1);
                }
                return callback(new Error(msg));
            }

            return callback(undefined, json);
        });
    }).on("error", callback);
};
