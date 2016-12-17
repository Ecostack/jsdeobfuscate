#! /usr/bin/env node
'use strict';
var fs = require('fs');
var execfile = require(__dirname + '/execfile');
var JSO = execfile(__dirname + '/node_modules/js-beautify/js/lib/unpackers/javascriptobfuscator_unpacker.js').JavascriptObfuscator;
var MO = execfile(__dirname + '/node_modules/js-beautify/js/lib/unpackers/myobfuscate_unpacker.js').MyObfuscate;
var PACKER = execfile(__dirname + '/node_modules/js-beautify/js/lib/unpackers/p_a_c_k_e_r_unpacker.js').P_A_C_K_E_R;
var URL = execfile(__dirname + '/node_modules/js-beautify/js/lib/unpackers/urlencode_unpacker.js').Urlencoded;

if (process.argv.length < 3) {
    return console.error('Please give input file as parameter');
}

var data = fs.readFileSync(process.argv[2], 'utf8')

if (MO.detect(data)) {
    data = MO.unpack(data);
}

if (PACKER.detect(data)) {
    data = PACKER.unpack(data);
}

if (JSO.detect(data)) {
    data = JSO.unpack(data);
}

if (URL.detect(data)) {
    data = URL.unpack(data);
}

console.log(data);
