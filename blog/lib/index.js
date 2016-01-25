import { graphql } from 'graphql';
import Schema from './schema';

export function runGraphQL(event, cb) {

  graphql(Schema, event.query).then( function(result) {
    return cb(null, result);
  });

}
