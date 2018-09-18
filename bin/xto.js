#! /usr/bin/env node
/**
 * XadillaX created at 2015-02-08 16:09:27
 *
 * Copyright (c) 2016 xcoder.in, all rights
 * reserved
 */
"use strict";

const color = require("bash-color");

const xto = require("../");

const opts = require("nomnom").option("company", {
    abbr: "c",
    help: "Specify a express company. (name, short name or code)",
    required: true
}).option("number", {
    position: 0,
    help: "The express number.",
    required: true,
    type: "string"
}).script("xto").parse();

const expressNo = opts.number;

const company = xto.getCompanyInfo(opts.company);
if(!company || !xto.isNumberValid(expressNo, company)) {
    console.error("Invalid express number or company.");
    process.exit(1);
}

xto.query(expressNo, company.code, function(err, express) {
    if(err) {
        return console.error(`Error occurred: ${err.message}`);
    }

    const state = xto.stateToText(express.state);
    console.log("");
    console.log(` * 快递公司： ${company.companyname}`);
    console.log(` * 运 单 号： ${expressNo}`);
    console.log(` * 状    态： ${state}`);
    console.log(" ================================== ");

    for(let i = 0; i < express.data.length; i++) {
        const line = ` [${express.data[i].time}] ${express.data[i].context}`;
        console.log(i === 0 ? color.green(line) : line);
    }

    console.log("");
});

