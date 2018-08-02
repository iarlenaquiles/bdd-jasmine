var Hello = function() {};

Hello.prototype.sayHi = function(name) {
  return 'my name is ' + name + ' and I\'m learning Jasmine!';
};

module.exports = Hello;