/**
 * XadillaX created at 2015-09-24 10:13:45 With ♥
 *
 * Copyright (c) 2015 Souche.com, all rights
 * reserved.
 */
require("should");
var trueCompanies = require("../const/namemapper");
var companies = require("../lib/companies");

describe("# companies information", function() {
    for(var i = 0; i < trueCompanies.length; i++) {
        (function(company) {
            it("should get " + company.companyname + " information", function() {
                // company name may not be unique...
                // companies.getCompanyInfo(company.companyname).should.be.eql(company);

                companies.getCompanyInfo(company.code).should.be.eql(company);

                // company short name may not be unique...
                // companies.getCompanyInfo(company.shortname).should.be.eql(company);
            });
        })(trueCompanies[i]); /* jshint ignore: line */
    }
});
