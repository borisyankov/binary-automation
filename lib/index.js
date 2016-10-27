'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _binaryLiveApi = require('binary-live-api');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Binary = function Binary(token) {
    var _this = this;

    _classCallCheck(this, Binary);

    this.getTickHistory = function (symbol) {
        _this.symbol = symbol;
        return api.getTickHistory(symbol);
    };

    this.print = function () {
        console.log('Symbol: ', _this.symbol);
        console.log(_this.ticks);
        console.log(_this.candles);
    };

    this.ticks = [];
    this.candles = [];
    this.symbol;
    this.api = new _binaryLiveApi.LiveApi(token);
};

exports.default = Binary;