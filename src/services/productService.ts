import { Client } from '../client';
import { IParameter } from '../interfaces/IParameter';
import { IProduct } from '../interfaces/IProduct';

const paginateAllProducts = async (
  pageNumber: number,
  params?: IParameter,
): Promise<IProduct[]> => {
  let currentPage = pageNumber;

  const client: Client = Client.getInstance();

  const response: IProduct[] = await client.get<IProduct[]>('sealed', {
    pageSize: 250,
    page: currentPage,
    ...params,
  });

  if (response.length === 0) {
    return response;
  } else {
    currentPage = currentPage + 1;

    return response.concat(await paginateAllProducts(currentPage));
  }
};

export const getAllProducts = async (
  params?: IParameter,
): Promise<IProduct[]> => {
  const startingPage = 1;

  const response: IProduct[] = await paginateAllProducts(startingPage, params);

  return response;
};

export const findProductByID = async (id: string): Promise<IProduct> => {
  const client: Client = Client.getInstance();

  const response: IProduct = await client.get<IProduct>('sealed', id);

  return response;
};

export const findProductsByQueries = async (
  params: IParameter,
): Promise<IProduct[]> => {
  const client: Client = Client.getInstance();

  const response: IProduct[] = await client.get<IProduct[]>('sealed', params);

  return response;
};
