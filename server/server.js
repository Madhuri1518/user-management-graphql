const { ApolloServer } = require("apollo-server");
const resolvers = require("./resolvers");
const schema = require("./schema");
const UserDataAPI = require("./datasources/user");

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  dataSources: () => {
    return {
      UserDataAPI: new UserDataAPI(),
    };
  },
});

server.listen().then(({ url }) => {
  console.log(`server ready at ${url}`);
});
