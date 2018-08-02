var Hello =  require('../hello.js');

describe('Hello', function() {

  var hello = new Hello();

  it('says my name', function() {
    expect(hello.sayHi('Fabeni')).toEqual('my name is Fabeni and I\'m learning Jasmine!');
  });

});