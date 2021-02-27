import { from, of } from 'rxjs'; 
import { map, filter } from 'rxjs/operators';

const sourceValues = [3,1,2];

const source = from(sourceValues);

source.subscribe(console.log);

const products = [
  {id: 1, product: 'Milk', price: 20},
  {id: 2, product: 'Bread', price: 15},
  {id: 3, product: 'Eggs', price: 36}
];

const mockHttpService = {
  getProductById: (id) => {
    from(products).pipe(
      filter((product) => product.id = id)
    );
  }
};
