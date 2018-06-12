var mongoose = require('mongoose');

module.exports = mongoose.model('User', {
  questions: [[]],
  posq: [[]],
  negq: [[]],
  improvements: [[]],
  optionsentences: [],
  errortext: [],
  errortext2: [],
  welcome: [],
  start: [],
  start1: [],
  start2: [],
  nameq: [],
  done: []
});
