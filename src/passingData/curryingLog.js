import _ from 'lodash';

function log(date, importance, message) {
  console.log(
    `[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`
  );
}

log = _.curry(log);

// log(new Date(), 'DEBUG', 'some debug');
// log(new Date())('DEBUG')('some debug');

let logNow = log(new Date());
logNow('INFO', 'message');

let debugNow = logNow('DEBUG');
debugNow('message');
