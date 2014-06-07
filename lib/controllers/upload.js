'use strict';

var formidable = require('formidable');
var exec = require('child_process').exec;

exports.upload = function(req, res) {
    var form = new formidable.IncomingForm;
    form.keepExtensions = true;
    form.uploadDir = 'tmp/';
 
    form.parse(req, function(err, fields, files){
      if (err) return res.end('You found error');
      // do something with files.image etc
        console.log(files);
        var child = exec(__dirname + '/../../flipbook ' + files.file.path,
                     function (error, stdout, stderr) {
                         console.log('stdout: ' + stdout);
                         console.log('stderr: ' + stderr);
                         if (error !== null) {
                             console.log('exec error: ' + error);
                         }
                         res.end('Done');
                     });
    });
 
    form.on('progress', function(bytesReceived, bytesExpected) {
        console.log(bytesReceived + ' ' + bytesExpected);
    });
 
    form.on('error', function(err) {
        res.writeHead(200, {'content-type': 'text/plain'});
        res.end('error:\n\n'+util.inspect(err));
    });
  
};
