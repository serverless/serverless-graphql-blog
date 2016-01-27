import { graphql } from 'graphql';
import Schema from './schema';

export function runGraphQL(event, cb) {

  let query = event.query;

  // patch to allow queries from GraphiQL
  // like the initial introspectionQuery
  if (event.query && event.query.hasOwnProperty('query')) {
    query = event.query.query.replace("\n", ' ', "g");
  }

  graphql(Schema, query).then( function(result) {
    //console.log('RESULT: ', result);
    return cb(null, result);
  });

}
