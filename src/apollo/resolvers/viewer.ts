import Viewer from '../models/Viewer';

export default {
  Query: {
    viewer: (_parent: any, _args: any, _context: any, _info: any) => {
      const viewers = Viewer.all();
      return viewers[0];
    },
  },
};
