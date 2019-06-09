var wemore = require('wemore');
var exec = require('child_process').exec;

var i = 0;

var devicesPath = process.cwd() + "/devices.json";
var devices = require(devicesPath);

Object.keys(devices).forEach(deviceName => {
  var device = devices[deviceName];
  var port = 9000 + i++;
  var wemo = wemore.Emulate({ friendlyName: deviceName, port: port, uuid: device.uuid, serial: device.serial });

  wemo.on('listening', () => {
    console.log(deviceName, "listening on port", port, new Date());
  });

  wemo.on('state', function(binaryState, self, sender) {
    console.log(deviceName, "set to", binaryState);
  });

  wemo.on('on', (self, sender) => {
    var command = device.oncommand;
    console.log(deviceName, "on", new Date());
    exec(command, (error) => { if (error) console.log(error); });				
  });

  wemo.on('off', (self, sender) => {
    var command = device.offcommand;
    console.log(deviceName, "off", new Date());
    exec(command, (error) => { if (error) console.log(error); });
  });
});

