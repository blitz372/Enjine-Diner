export interface Product {
  name: string;
  image: string;
  description: string;
  option: Option;
  sides: Side[];
}

export interface Option {
  name: string;
  limit: number;
  choices: string[];
}

export interface Side {
  name: string;
  modifierName: string;
  options: string[];
}

export interface SideChange {
  side: string;
  modifierName: string;
  sideModifier: string | number;
}

export interface Order {
  product: string;
  quantity: number;
  option: OrderOption;
  side: SideChange | null;
  requests: string;
}

export interface OrderOption {
  name: string;
  selected: string[];
}
