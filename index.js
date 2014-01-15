/*global require, module, Buffer */

var evs = require('event-stream');
var g_util = require('gulp-util');
var js_hints  = /([\/][\*][\s*]jshint\s.+[\*\/])/g;
var js_global = /([\/][\*][\s*]global\s.+[\*\/])/g;

module.exports = function () {

    function processImports(file) {
        var contents;

        // I'm no stream guru yet - so I have no idea if this can be done.....yet....
        if (file.isStream()) {
            this.emit('error', new g_util.PluginError('gulp-hint-not', 'Yikes - sorry about this, but streams are not supported yet.'));
        }

        if (file.isBuffer()) {
            contents = String(file.contents)
                .replace(js_hints, "")
                .replace(js_global, "");
            file.contents = new Buffer(contents);
        }

        this.emit('data', file);
    }

    return evs.through(processImports);
};
