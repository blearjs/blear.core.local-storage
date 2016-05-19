/**
 * 永久存储
 * @author ydr.me
 * @create 2015-02-02 15:17
 */



'use strict';

var storage = require('blear.core._storage');

/**
 * 获取 storage
 * @static get
 * @param key {String} 存储键
 * @returns {string}
 */


/**
 * 设置 storage
 * @static set
 * @param key {String} 存储键
 * @param val {String} 存储值
 * @returns {boolean}
 */

storage(window.localStorage, exports);
