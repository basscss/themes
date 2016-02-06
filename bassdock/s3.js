
var fs = require('fs');
var path = require('path');
var s3 = require('s3');
var pkg = require('./package.json');

function updatePkg() {
  pkg.doctor_mark.cdn = '//d2v52k3cl9vedd.cloudfront.net/bassdock/' + pkg.version + '/bassdock.min.css'
  fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2));
};

function upload() {
  var options = require('./aws.json');
  var params = {
    localFile: path.join(__dirname, './css/bassdock.min.css'),
    s3Params: {
      Bucket: options.bucket, 
      Key: 'bassdock/' + pkg.version + '/bassdock.min.css',
      ACL: 'public-read',
    }
  };

  var client = s3.createClient({
    s3Options: {
      accessKeyId: options.key,
      secretAccessKey: options.secret,
    }
  });

  var uploader = client.uploadFile(params);
  uploader.on('error', function(err) {
    console.error("unable to upload:", err.stack);
  });
  uploader.on('progress', function() {
    console.log("progress", uploader.progressMd5Amount, uploader.progressAmount, uploader.progressTotal);
  });
  uploader.on('end', function() {
    console.log("done uploading");
    updatePkg();
  });

};

upload();

