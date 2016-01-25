import { graphql } from 'graphql';
import Schema from './schema';

export function runGraphQL(event, cb) {

  let queryOrMutation = event.mutation || event.query;

  graphql(Schema, queryOrMutation).then( function(result) {
    console.log('RESULT: ', result);
    return cb(null, result);
  });

}
