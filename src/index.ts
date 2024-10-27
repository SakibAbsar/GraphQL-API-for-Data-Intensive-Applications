
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema';
import resolvers from './resolvers';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/graphql`);
});
