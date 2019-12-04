const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '172.46.2.204',
    port: 50541
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