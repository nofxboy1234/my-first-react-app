import _ from 'lodash';

function log(date, importance, message) {
  console.log(
    `[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`
  );
}

log = _.curry(log);
log(new Date(), 'DEBUG', 'some debug');
