"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var KEY = 'AIzaSyC9QVBcLijogVwREev3DL5CXjZU16odAes';

var _default = _axios["default"].create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 15,
    key: KEY
  }
});

exports["default"] = _default;