const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  // server message if idling for too long
  conn.on('data', (data) => {
    console.log(data);
  });
  conn.on('connect', () => {
    console.log('Successfully connnected to game server');
    conn.write('Name: KTL');
  });
  return conn;
}

module.exports = {connect};