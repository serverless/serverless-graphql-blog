#serverless-graphql-blog

# Sample GraphQL queries

List of author names
```
curl -XPOST -d '{"query": "{ authors { name } }"}' https://dtean5w252.execute-api.us-east-1.amazonaws.com/development/resource/graphql
```

Returns:
```
{
  "data":{
    "authors":[
      {"name":"Kevin"}
    ]
  }
}
```

Get List of posts with id and title
```
curl -XPOST -d '{"query": "{ posts { id, title } }"}' https://dtean5w252.execute-api.us-east-1.amazonaws.com/development/resource/graphql
```

Returns:
```
{
  "data": {
    "posts": [
      { "id":"1",
        "title":"First Post Title"
      }
    ]
  }
}
```

Get List of posts with id, title and *nested* author name
```
curl -XPOST -d '{"query": "{ posts { id, title, author { name } } }"}' https://dtean5w252.execute-api.us-east-1.amazonaws.com/development/resource/graphql
```

Returns:
```
{
  "data": {
    "posts": [
      { "id":"1",
        "title":"First Post Title",
        "author":{
          "name":"Kevin"
        }
      }
    ]
  }
}
```

Get List of posts with post, author and comments information (for a Post with no comments, i.e. comments:[])
```
curl -XPOST -d '{"query": "{ posts { id, title, author { id, name }, comments { id, content, author { name } } } }"}' https://dtean5w252.execute-api.us-east-1.amazonaws.com/development/resource/graphql
```

Returns
```
{
  "data":{
    "posts":[
    {
      "id":"1",
        "title":"First Post Title",
        "author":{
          "id":"1",
          "name":"Kevin"
        },
        "comments":[]
    }
    ]
  }
}
```


# Sample GraphQL Mutations
Create Post
```
curl -XPOST -d '{"mutation": "mutation createNewPost { post: createPost (id: \"5\", title: \"Fifth post!\", bodyContent: \"Test content\", author: \"1\") { id, title } }"}' https://dtean5w252.execute-api.us-east-1.amazonaws.com/development/resource/graphql
```

Returns:
```
{
  "data":{
    "post":{
      "id":"5",
      "title":"Fifth post!"
    }
  }
}
```
