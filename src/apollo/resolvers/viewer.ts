import Viewer from '../models/Viewer';

export default {
  Query: {
    viewer: (_parent, _args, _context, _info) => {
      const viewers = Viewer.all();
      return viewers[0];
    },
  },
};
