var expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () =>{
  it('should generate correct message',() =>{

    var from = 'Sree';
    var text = 'Hello message';
    var message = generateMessage(from,text);

    expect(typeof message.createdAt).toBe('number');
    expect(typeof message.text).toBe('string');
    expect(typeof message.from).toBe('string');

  });
});

describe('generateLocationMessage', () =>{
  it('should generate correct location object',() =>{

    var from = 'Sreeni';
    var latitude = 15;
    var longitude = 22;
    var url = 'https://google.com/mpas?q=15,22';
    var message = generateLocationMessage(from, latitude, longitude);

    expect(typeof message.createdAt).toBe('number');
    expect(typeof message.url).toBe('string');
    expect(typeof message.from).toBe('string');
  });
});
