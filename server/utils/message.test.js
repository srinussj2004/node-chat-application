var expect = require('expect');
var {generateMessage} = require('./message');

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
