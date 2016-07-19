var moment = require('moment');

console.log(moment().format());
 var now = moment();
 console.log(' current timestam', now.unix());
 var timestamp = 1468956283;
 var currentMoment = moment.unix(timestamp);
 console.log('current moment', currentMoment.format('MMM D, Y, HH:mm:s A '));
 console.log('current moment', currentMoment.format('MMMM Do, YYYY,@ h:mm A '));
