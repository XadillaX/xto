/*!
 * Http-Https Request - nodegrass
 * Copyright(c) 2012 Sk ScottKiss
 * MIT Licensed
 */

/**
 * Module dependencies.
 */
var http = require('http'),
    https = require('https'),
    querystring = require('querystring'),
    iconv = require('iconv-lite');



function NodeGrass(){}
//Get Method Request
//Support HTTP and HTTPS request,and Automatic recognition
//@Param url
//@Param callback
NodeGrass.prototype.get = function(url,callback, reqheaders, charset){
    var protocol = getProtocol(url);
    var _defaultCharSet = 'utf8';
    var content = "";
    if(typeof charset === 'string' ){
        _defaultCharSet = charset;
    }
    if(typeof(reqheaders) === "string" && charset === undefined) {
        _defaultCharSet = reqheaders;
    }
    var newheader = {};
    if(reqheaders !== undefined && typeof(reqheaders) === "object") {
        for(var ele in reqheaders) {
            newheader[ele.toLowerCase()] = reqheaders[ele];
        }
    }
    newheader["content-length"] = 0;
    // console.log(_defaultCharSet);
    var options = {
        host:getHost(url),
        port:getPort(url),
        path:getPath(url),
        headers:newheader
    };
    if(protocol === 'http'){
        return http.get(options,function(res){
            if(_defaultCharSet==="gbk"){
                res.setEncoding('binary');
            }else{
                res.setEncoding(_defaultCharSet);
            }
            var status = res.statusCode;
            var headers = res.headers;
            res.on('data',function(chunk){
                content+=chunk;
            });
            res.on('end',function(){
                if(_defaultCharSet==="gbk"){
                    content = iconv.decode(new Buffer(content,'binary'),'gbk');
                }
                callback(content,status,headers);
            });
        });

    }else if(protocol === 'https'){
        return https.get(options,function(res){
            var status = res.statusCode;
            var headers = res.headers;
            if(_defaultCharSet==="gbk"){
                res.setEncoding('binary');
            }else{
                res.setEncoding(_defaultCharSet);
            }
            res.on('data',function(chunk){
                content+=chunk;
            });
            res.on('end',function(){
                if(_defaultCharSet==="gbk"){
                    content = iconv.decode(new Buffer(content,'binary'),'gbk');
                }
                callback(content,status,headers);
            });
        });
    }else{
        throw "sorry,this protocol do not support now";
    }

}

//Post Method Request
//Support HTTP and HTTPS request,and Automatic recognition
//@Param url
//@Param callback
//@Param header
//@param postdata
NodeGrass.prototype.post = function(url,callback,reqheaders,data,charset){
    var protocol = getProtocol(url);
    var _defaultCharSet = 'utf8';
    var content = "";
    if(typeof charset === 'string' ){
        _defaultCharSet = charset;
    }

    //console.log(reqheaders);
    data = querystring.stringify(data);
    //console.log(data);

    if(protocol==='http'){
        var options={
            host:getHost(url),
            port:getPort(url),
            path:getPath(url),
            method:'POST',
            headers:reqheaders
        };
        //console.log(options);
        var req = http.request(options,function(res){
            var status = res.statusCode;
            var headers = res.headers;
            if(_defaultCharSet==="gbk"){
                res.setEncoding('binary');
            }else{
                res.setEncoding(_defaultCharSet);
            }
            res.on('data',function(chunk){
                content+=chunk;
            });
            res.on('end',function(){
                if(_defaultCharSet==="gbk"){
                    content = iconv.decode(new Buffer(content,'binary'),'gbk');
                }
                callback(content,status,headers);
            });
        });
        req.write(data+"\n");
        req.end();
        return req;


    }else if(protocol==='https'){
        var options={
            host:getHost(url),
            port:443,
            path:getPath(url),
            method:'POST',
            headers:reqheaders
        };
        var req = https.request(options,function(res){
            var status = res.statusCode;
            var headers = res.headers;
            if(_defaultCharSet==="gbk"){
                res.setEncoding('binary');
            }else{
                res.setEncoding(_defaultCharSet);
            }
            res.on('data',function(chunk){
                content+=chunk;
            });
            res.on('end',function(){
                if(_defaultCharSet==="gbk"){
                    content = iconv.decode(new Buffer(content,'binary'),'gbk');
                }
                callback(content,status,headers);
            });

        });
        req.write(data+"\n");
        req.end();
        return req;

    }else{
        throw "sorry,this protocol do not support now";
    }
}

//Parse the url,get the path
//e.g. http://www.google.com/path/another -> /path/another
function getPath(url){
    var pathPattern = /\w+:\/\/([^\/]+)(\/.+)(\/$)?/i;
    var fullPath = url.match(pathPattern);
    return fullPath?fullPath[2]:'/';
}

//Parse the url, get the port
//e.g. http://www.google.com/path/another -> 80
//     http://foo.bar:8081/a/b -> 8081
function getPort(url) {
    var hostPattern = /\w+:\/\/([^\/]+)(\/)?/i;
    var domain = url.match(hostPattern);

    var pos = domain[1].indexOf(":");
    if(pos !== -1) {
        domain[1] = domain[1].substr(pos + 1);
        return parseInt(domain[1]);
    } else if(url.toLowerCase().substr(0, 5) === "https") return 443;
    else return 80;
}

//Parse the url,get the host name
//e.g. http://www.google.com/path/another -> www.google.com
function getHost(url){
    var hostPattern = /\w+:\/\/([^\/]+)(\/)?/i;
    var domain = url.match(hostPattern);

    var pos = domain[1].indexOf(":");
    if(pos !== -1) {
        domain[1] = domain[1].substring(0, pos);
    }

    //console.log(domain[1]);
    return domain[1];
}

//Get the Protocol
//http://www.google.com/path/another => http
function getProtocol(url){
    return url.substring(0,url.indexOf(":"));
}
var nodegrass = new NodeGrass();
nodegrass.NodeGrass = NodeGrass;
module.exports = nodegrass;
