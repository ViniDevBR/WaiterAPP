export interface IProduct {
  _id: string;
  name: string;
  description: string;
  imagePath: string;
  price: number;
  ingredients: Array<IngredientsProps>
}

interface IngredientsProps {
  name: string;
  icon: string;
  _id: string;
}
