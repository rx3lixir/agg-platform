export interface Billboard {
  id: string;
  name: string;
  imageUrl: string;
}

export interface Category {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface Event {
  id: number;
  name: string;
  description: string;
  category_id: number;
  date: string;
  time: string;
  location: string;
  price: number;
  image: string;
  source: string;
}

export interface Image {
  id: string;
  url: string;
}
