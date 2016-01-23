var _graphql = require('graphql');
import Schema from './schema';

export function graphql(event, cb) {

  _graphql.graphql(Schema, event.query).then( function(result) {
    console.log('RESULT: ', result);
    return cb(null, result);
  });

}
