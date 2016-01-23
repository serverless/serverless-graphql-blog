import Promise from 'bluebird';
import AWS from 'aws-sdk';
const dynamoConfig = {
  sessionToken:    process.env.AWS_SESSION_TOKEN,
  region:          process.env.AWS_REGION
};
const docClient = new AWS.DynamoDB.DocumentClient(dynamoConfig);

export function getPosts() {
  return new Promise(function(resolve, reject) {
    var params = {
      TableName: 'serverless-graphql-blog-posts-development',
      AttributesToGet: [
        'id',
        'title',
        'bodyContent',
      ]
    };

    docClient.scan(params, function(err, data) {
      if (err) return reject(err);
      return resolve(data["Items"]);
    });

  });
}
