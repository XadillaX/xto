/**
 * XadillaX created at 2015-02-02 14:11:23
 *
 * Copyright (c) 2016 xcoder.in, all rights
 * reserved
 */
var should = require("should");
var xto = require("../");

describe("# query", function() {
    this.timeout(0);

    it("should get express status", function(done) {
        xto.query("1000159522", "flysman", function(err, express) {
            should(err).be.eql(undefined);

            console.log(express);
            express.should.match({
                message: "ok",
                nu: "1000159522",
                ischeck: "1",
                com: "flysman",
                // updatetime: /\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}/,
                status: "200",
                condition: "F00",
                data: function(it) {
                    it.length.should.be.eql(9);
                },
                state: "3"
            });
            done();
        });
    });

    it("should get no number error", function(done) {
        xto.query("1234567890111", "EMS", function(err) {
            err.should.be.instanceof(Error);
            err.message.should.be.eql("单号不存在或者已经过期");
            done();
        });
    });

    it("should get number not match error", function(done) {
        xto.query("ldksfjadf", "shentong", function(err) {
            err.should.be.instanceof(Error);
            err.message.should.be.eql("Invalid express number.");
            done();
        });
    });

    it("should get no company error", function(done) {
        xto.query("哔哩哔哩", "德玛西亚", function(err) {
            err.should.be.instanceof(Error);
            err.message.should.be.eql("This company is not supported yet.");
            done();
        });
    });

    it("should convert state", function() {
        xto.stateToText(0).should.be.eql("在途中");
        xto.stateToText("1").should.be.eql("已发货");
        xto.stateToText("2").should.be.eql("疑难件");
        xto.stateToText("3.").should.be.eql("已签收");
        xto.stateToText("4").should.be.eql("已退货");
        xto.stateToText(5).should.be.eql("派送中");
        xto.stateToText(-1).should.be.eql("未知");
    });
});
