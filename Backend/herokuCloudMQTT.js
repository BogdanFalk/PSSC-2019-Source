var mqtt = require('mqtt')
var url = require('url')
let logging = require(__dirname+"/logging.js")


var mqtt_url = url.parse("mqtt://giruzqus:0WSzZTInshqj@farmer.cloudmqtt.com:10472");
var auth = (mqtt_url.auth || ':').split(':');

// Create a client connection
var client = mqtt.connect(mqtt_url, {
  username: auth[0],
  password: auth[1]
});

client.on('connect', function() { // When connected

  // subscribe to a topic
  client.subscribe('api/mqtt/vote', function() {
    // when a message arrives, do something with itd
    client.on('message', function(topic, message, packet) {
      logging.LOG(__filename,21,"Received '" + logging.textColor.Blue +message + logging.textColor.Green+ "' on '" + topic + "'");
    });
  });

  // publish a message to a topic
  client.publish('api/mqtt/vote', 'my message', function() {
    logging.LOG(__filename,27,"Message is published");
    // client.end(); // Close the connection when published
  });

  
});