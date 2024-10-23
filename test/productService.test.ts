import type { IParameter, IProduct } from '../src/interfaces';
import { findProductByID, findProductsByQueries } from '../src/sdk';

describe('Product Service', () => {
  it('should get a single product using query parameters', async () => {
    const params: IParameter = { q: 'name:"Crown Zenith Booster Pack"' };

    const result: IProduct[] = await findProductsByQueries(params);

    expect(result[0].name).toEqual('Crown Zenith Booster Pack');
  });

  it('should get a single product using a product id', async () => {
    const result: IProduct = await findProductByID('swsh12pt5-s1');

    expect(result.name).toEqual('Crown Zenith Booster Pack');
  });

  it('should get a maximum of 250 products given a page number by default', async () => {
    const totalProducts = 250;

    const results: IProduct[] = await findProductsByQueries({ page: 1 });

    expect(results).toHaveLength(totalProducts);
  });
});
