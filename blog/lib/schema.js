import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLList,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';

import { getPosts, getAuthor, getAuthors } from './dynamo';

const Author = new GraphQLObjectType({
  name: "Author",
  description: "Author of the blog post",
  fields: () => ({
      id: {type: GraphQLString},
      name: {type: GraphQLString}
    })
});

const Post = new GraphQLObjectType({
  name: "Post",
  description: "Blog post content",
  fields: () => ({
    id: {type: GraphQLString},
    title: {type: GraphQLString},
    bodyContent: {type: GraphQLString},
    author: {
      type: Author,
      resolve: function({author}) {
        return getAuthor(author);
      }
    }
  })
});

const Query = new GraphQLObjectType({
  name: 'BlogSchema',
  description: "Root of the Blog Schema",
  fields: () => ({
    posts: {
      type: new GraphQLList(Post),
      description: "List of posts in the blog",
      resolve: function(source, {category}) {
        return getPosts();
      }
    },
    authors: {
      type: new GraphQLList(Author),
      description: "List of Authors",
      resolve: function() {
        return getAuthors();
      }
    },
    author: {
      type: Author,
      description: "Get Author by id",
      args: {
        id: {type: new GraphQLNonNull(GraphQLString)}
      },
      resolve: function(source, {id}) {
        return getAuthor(author);
      }
    }
  })
});

const Schema = new GraphQLSchema({
  query: Query
});

export default Schema;
