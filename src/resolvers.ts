
import items from './data/mockData';

const resolvers = {
  allItems: () => items,
  getItemById: ({ id }: { id: string }) => items.find((item) => item.id === id),
};

export default resolvers;
