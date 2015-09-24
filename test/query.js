/**
 * XadillaX created at 2015-02-02 14:11:23
 *
 * Copyright (c) 2015 Huaban.com, all rights
 * reserved
 */
var should = require("should");
var xto = require("../");

describe("# query", function() {
    this.timeout(0);

    it("should get express status", function(done) {
        xto.query("0001355", "santaisudi", function(err, express) {
            should(err).be.eql(undefined);
            express.should.match({
                message: "ok",
                nu: "0001355",
                ischeck: "0",
                com: "santaisudi",
                updatetime: /\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}/,
                status: "200",
                condition: "00",
                data: function(it) {
                    it.length.should.be.eql(11);
                },
                state: "0"
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
