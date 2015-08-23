#! /usr/bin/env node

/**
 * XadillaX created at 2015-02-08 16:09:27
 *
 * Copyright (c) 2015 Huaban.com, all rights
 * reserved
 */
var color = require("bash-color");
var xto = require("../");
var opts = require("nomnom")
    .option("company", {
        abbr: "c",
        help: "Specify a express company. (name, short name or code)",
        required: true
    })
    .option("number", {
        position: 0,
        help: "The express number.",
        required: true,
        type: "string"
    })
    .script("xto")
    .parse();

var expressNo = opts.number;

var company = xto.getCompanyInfo(opts.company);
if(!company || !xto.isNumberValid(expressNo, company)) {
    return console.error("Invlid express number or company.");
}

xto.query(expressNo, company.code, function(err, express) {
    if(err) {
        return console.error("Error occurred: " + err.message);
    }

    var state = xto.stateToText(express.state);
    console.log("");
    console.log(" * 快递公司：" + company.companyname);
    console.log(" * 运 单 号：" + expressNo);
    console.log(" * 状    态：" + state);
    console.log(" ==================================");

    for(var i = 0; i < express.data.length; i++) {
        var line = " [" + express.data[i].time + "] " + express.data[i].context;
        console.log(i === 0 ? color.green(line) : line);
    }

    console.log("");
});

