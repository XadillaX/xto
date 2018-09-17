/**
 * XadillaX created at 2013-09-10 02:24:18
 *
 * Copyright (c) 2016 xcoder.in, all rights
 * reserved
 */

const spidex = require('spidex');
const qs = require('querystring');
const zlib = require('zlib');

require('sugar');

const device = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) ';
const kit = 'AppleWebKit/537.36 (KHTML, like Gecko) ';
const core = 'Chrome/40.0.2214.94 Safari/537.36';
const UA = `${device}${kit}${core}`;
const baseUri = 'http://baidu.kuaidi100.com/query?';

spidex.setDefaultUserAgent(UA);

/**
 * query for express
 * @param {String} num post id
 * @param {String} company company type
 * @param {Function} callback the callback function
 */
exports.query = function(num, company, callback) {
  let queryObject = {
    type: company,
    postid: num,
    id: 4,
    valicode: '',
    temp: Math.random(),
    sessionid: '',
  };

  let header = {
    'accept': '*/*',
    'accept-encoding': 'gzip, deflate, sdch',
    'accept-language': 'zh-CN,zh;q=0.8,en-US;q=0.6,en;q=0.4,sv;q=0.2,zh-TW;q=0.2',
    'connection': 'keep-alive',
    'host': 'www.kuaidi100.com',
  };

  let url = baseUri + qs.stringify(queryObject);

  spidex.get(url, {
    timeout: 60000,
    charset: 'binary',
    header: header,
  }, function(data, status) {
    if (status !== 200) {
      return callback(new Error('Server returns a wrong status. ' + status));
    }

    zlib.unzip(data, function(err, buff) {
      if (err) return callback(err);
      data = buff.toString('utf8');

      let json;
      try {
        json = JSON.parse(data);
      } catch (e) {
        return callback(e);
      }

      if (undefined === json.data || null === json.data ||
                (Array.isArray(json.data) ? json.data.length : 0) === 0) {
        let msg = json.message || 'Unknown error.';
        if (msg.indexOf('：') !== -1) {
          msg = msg.substr(msg.indexOf('：') + 1);
        }
        return callback(new Error(msg));
      }

      return callback(undefined, json);
    });
  }).on('error', callback);
};
