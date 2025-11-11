/* eslint-disable @typescript-eslint/no-require-imports */
export const notes: Note[] = [
  {
    id: 1,
    image: require("@/assets/images/thumb/x3.png"),
    title: "jual ikan",
    description: "maasasadasdasd",
    date: "12313",
  },
  {
    id: 2,
    image: require("@/assets/images/thumb/x2.png"),
    title: "jual ikan",
    description: "maasasadasdasd",
    date: "12313",
  },
  {
    id: 3,
    image: require("@/assets/images/thumb/x1.png"),
    title: "jual ikan",
    description: "maasasadasdasd",
    date: "12313",
  },
  {
    id: 4,
    image: require("@/assets/images/thumb/x3.png"),
    title: "jual ikan",
    description: "maasasadasdasd",
    date: "12313",
  },
];

export type Note = {
  id: number;
  image: number;
  title: string;
  description: string;
  date: string;
};
