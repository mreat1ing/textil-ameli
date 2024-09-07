import { IItem } from 'src/interfaces/assortment.interface';

type assortment = { title: string; items: { [x: string]: IItem } };

export default assortment;
