var RandomBytes = new require('randbytes');
var crypto = require('crypto');

var randomSource = RandomBytes.urandom.getInstance();

// we get a random 32 bytes buffer (from /dev/urandom)
randomSource.getRandomBytes(32, function(buff) {

  //console.log('buff: ' + buff);
  var ts = new Date().getTime();

  // we concat the current timestamp in ms
  buff += ts;

  // we create a sha512 hash and retrieve the hex string
  var hash = crypto.createHmac('sha512', buff).digest('hex');

  // we encode in b64 for key & secret generation
  var b64Hash = new Buffer(hash).toString('base64');
  //console.log('hash: ' + b64Hash);

  var key = b64Hash.substring(0, 32);
  console.log('consumer key: ' + key);

  var secret = b64Hash.substring(32, 80);
  console.log('consumer secret: ' + secret);

});