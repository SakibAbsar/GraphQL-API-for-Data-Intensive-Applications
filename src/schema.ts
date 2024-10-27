
import { buildSchema } from 'graphql';

const schema = buildSchema(`
  type Query {
    allItems: [Item]
    getItemById(id: ID!): Item
  }

  type Item {
    id: ID!
    name: String
    description: String
    price: Float
  }
`);

export default schema;
