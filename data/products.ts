export type Product = {
  id: string;
  title: string;
  price: number;
  image: string;
};

export const products: Product[] = [
  {
    id: "p1",
    title: "Minimal Tote Bag",
    price: 799,
    image: "https://picsum.photos/seed/tote/600/600",
  },
  {
    id: "p2",
    title: "Steel Water Bottle",
    price: 599,
    image: "https://picsum.photos/seed/bottle/600/600",
  },
  {
    id: "p3",
    title: "Wireless Earbuds",
    price: 1999,
    image: "https://picsum.photos/seed/earbuds/600/600",
  },
  {
    id: "p4",
    title: "Yoga Mat",
    price: 1499,
    image: "https://picsum.photos/seed/yogamat/600/600",
  },
  {
    id: "p5",
    title: "Desk Lamp",
    price: 1299,
    image: "https://picsum.photos/seed/lamps/600/600",
  },
  {
    id: "p6",
    title: "Notebook Set",
    price: 299,
    image: "https://picsum.photos/seed/notebook/600/600",
  },
];
