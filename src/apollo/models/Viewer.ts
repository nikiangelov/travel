interface Viewer {
  id: number;
  name: string;
  status: string;
}

class Viewer {
  static all(): Viewer[] {
    return [
      {
        id: 1,
        name: 'viewr name 1',
        status: 'asd',
      },
      {
        id: 2,
        name: 'viewr name 2',
        status: 'asdasda',
      },
    ];
  }
}

export default Viewer;
