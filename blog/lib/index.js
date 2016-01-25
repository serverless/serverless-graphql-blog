import { graphql } from 'graphql';
import Schema from './schema';

export function graphql(event, cb) {

  graphql(Schema, event.query).then( function(result) {
    return cb(null, result);
  });

}
