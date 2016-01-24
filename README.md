#serverless-graphql-blog

# Sample GraphQL queries


Get List of posts with id and title
```
curl -XPOST -d '{"query": "{ posts { id, title } }"}' https://dtean5w252.execute-api.us-east-1.amazonaws.com/development/resource/graphql
```
