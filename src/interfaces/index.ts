export interface IProduct {
  id: number;
  title: string;
  category: string;
  quantity: string | null;
  price: number;
  discount_price: number | null;
  img: string;
  section: string;
}
