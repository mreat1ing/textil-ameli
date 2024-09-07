export interface IItem {
  name: string;
  src: string;
  image: string;
  key: string;
}

interface IAssortment {
  url: string;
  title: string;
  items: IItem[];
}

export default IAssortment;
