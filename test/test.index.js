/**
 * 测试 文件
 * @author ydr.me
 * @create 2016-05-17 12:13
 */


'use strict';

var localStorage = require('../src/index.js');

var storageKey1 = 'storageKey1';
var storageKey2 = 'storageKey2';
var storageVal1 = 'storageVal';
var storageVal2 = {a: 1, b: 2};


describe('测试文件', function () {


    it('.set/.get', function () {
        expect(localStorage.set(storageKey1, storageVal1)).toEqual(true);
        expect(localStorage.get(storageKey1)).toEqual(storageVal1);
    });

    it('.setJSON/.getJSON', function () {
        expect(localStorage.setJSON(storageKey2, storageVal2)).toEqual(true);
        expect(localStorage.getJSON(storageKey2)).toEqual(storageVal2);
    });

    it('.remove/.size', function () {
        expect(localStorage.size()).toEqual(2);
        expect(localStorage.remove(storageKey1)).toEqual(true);
        expect(localStorage.size()).toEqual(1);
    });

    it('.clear/.size', function () {
        expect(localStorage.clear()).toEqual(true);
        expect(localStorage.size()).toEqual(0);
    });
});
