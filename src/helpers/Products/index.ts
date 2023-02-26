import axios from "axios";

export type ApiResponse = {
  results: GetProductsProps[];
}

export type GetProductsProps = {
  _id: number;
  title: string;
  thumbnail: string;
  price: number;
  description: string;
  tag: string;
}

export default async function GetProducts(): Promise<GetProductsProps[]> {
  const URL = "https://api.mercadolibre.com/sites/MLB/search?q=bike&limit=10";
  let response = await (await axios.get(URL)).data as ApiResponse;

  const products = response.results.map((el) => {
    return {
      ...el,
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. `,
      tag: 'Bicycle'
    }
  });

  return products;
}
