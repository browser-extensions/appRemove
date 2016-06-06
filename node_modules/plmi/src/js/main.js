/**
 * 主文件入口
 * 
 * @auther zan
 * 
 * 2016年1月12日 11:53:38
 */


// import '../styles.css'

import '!style!css!sass!../scss/main.scss'

import '!style!css!sass!./layer/scss/main.scss'

var PD = require('./dom/dom.js');

var PL = require('./layer/index.js');

window.PD = PD;

window.PL = PL;





