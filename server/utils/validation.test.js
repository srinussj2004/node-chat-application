const expect = require('expect');
const{isRealString} = require('./validation');

describe('isRealString', () =>{
  it('should reject non string values',() =>{
    var name = 323;
    var result = isRealString(name);
    console.log(result);
    expect(result).toBe(false);
  });
  it('should reject with only spaces',() =>{
    var name = '  ';
    var result = isRealString(name);
    expect(result).toBe(false);
  });
  it('should allow with spaces',() =>{
    var name = ' dfdfd ';
    var result = isRealString(name);
    expect(result).toBe(true);
  });
});
