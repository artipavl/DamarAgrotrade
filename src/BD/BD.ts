export type product = {
  id: string;
  imgs: string[];
  title: string;
  price: number;
  value: number;
  unit: string;
  availability: boolean;
  description: string;
  reviews: review[];
  producer: producer;
};

export type review = {
  id: string;
  body: string;
  userName: string;
};

export type producer = {
  name: string;
  logo: string;
};

export const BD: product[] = [
  {
    id: '1',
    title: 'Петунія Софістика F1',
    price: 20,
    imgs: [
      'https://raw.githubusercontent.com/artipavl/DamarAgrotrade/main/src/img/product/Rectangle.png',
      'https://raw.githubusercontent.com/artipavl/DamarAgrotrade/main/src/img/product/Rectangle.png',
      'https://raw.githubusercontent.com/artipavl/DamarAgrotrade/main/src/img/product/Rectangle.png',
      'https://raw.githubusercontent.com/artipavl/DamarAgrotrade/main/src/img/product/Rectangle.png',
    ],
    value: 1,
    availability: true,
    unit: 'шт',
    producer: {
      name: 'ФМС Украина',
      logo: '....',
    },
    description: '',
    reviews: [
      {
        id: '1',
        body: 'test',
        userName: 'TEST',
      },
    ],
  },
  {
    id: '2',
    title: 'Петунія Софістика F2',
    price: 74,
    imgs: [
      'https://raw.githubusercontent.com/artipavl/DamarAgrotrade/main/src/img/product/Rectangle.png',
      'https://raw.githubusercontent.com/artipavl/DamarAgrotrade/main/src/img/product/Rectangle.png',
      'https://raw.githubusercontent.com/artipavl/DamarAgrotrade/main/src/img/product/Rectangle.png',
      'https://raw.githubusercontent.com/artipavl/DamarAgrotrade/main/src/img/product/Rectangle.png',
    ],
    value: 1,
    availability: true,
    unit: 'шт',
    producer: {
      name: 'ФМС Украина',
      logo: '....',
    },
    description: '',
    reviews: [
      {
        id: '1',
        body: 'test',
        userName: 'TEST',
      },
    ],
  },
  {
    id: '3',
    title: 'Петунія Софістика F3',
    price: 43,
    imgs: [
      'https://raw.githubusercontent.com/artipavl/DamarAgrotrade/main/src/img/product/Rectangle.png',
      'https://raw.githubusercontent.com/artipavl/DamarAgrotrade/main/src/img/product/Rectangle.png',
      'https://raw.githubusercontent.com/artipavl/DamarAgrotrade/main/src/img/product/Rectangle.png',
      'https://raw.githubusercontent.com/artipavl/DamarAgrotrade/main/src/img/product/Rectangle.png',
    ],
    value: 1,
    availability: true,
    unit: 'шт',
    producer: {
      name: 'ФМС Украина',
      logo: '....',
    },
    description: '',
    reviews: [
      {
        id: '1',
        body: 'test',
        userName: 'TEST',
      },
    ],
  },
  {
    id: '4',
    title: 'Петунія Софістика F4',
    price: 80,
    imgs: [
      'https://raw.githubusercontent.com/artipavl/DamarAgrotrade/main/src/img/product/Rectangle.png',
      'https://raw.githubusercontent.com/artipavl/DamarAgrotrade/main/src/img/product/Rectangle.png',
      'https://raw.githubusercontent.com/artipavl/DamarAgrotrade/main/src/img/product/Rectangle.png',
      'https://raw.githubusercontent.com/artipavl/DamarAgrotrade/main/src/img/product/Rectangle.png',
    ],
    value: 1,
    availability: true,
    unit: 'шт',
    producer: {
      name: 'ФМС Украина',
      logo: '....',
    },
    description: '',
    reviews: [
      {
        id: '1',
        body: 'test',
        userName: 'TEST',
      },
    ],
  },
  {
    id: '5',
    title: 'Петунія Софістика F5',
    price: 67,
    imgs: [
      'https://raw.githubusercontent.com/artipavl/DamarAgrotrade/main/src/img/product/Rectangle.png',
      'https://raw.githubusercontent.com/artipavl/DamarAgrotrade/main/src/img/product/Rectangle.png',
      'https://raw.githubusercontent.com/artipavl/DamarAgrotrade/main/src/img/product/Rectangle.png',
      'https://raw.githubusercontent.com/artipavl/DamarAgrotrade/main/src/img/product/Rectangle.png',
    ],
    value: 1,
    availability: true,
    unit: 'шт',
    producer: {
      name: 'ФМС Украина',
      logo: '....',
    },
    description: '',
    reviews: [
      {
        id: '1',
        body: 'test',
        userName: 'TEST',
      },
    ],
  },
  {
    id: '6',
    title: 'Петунія Софістика F6',
    price: 12,
    imgs: [
      'https://raw.githubusercontent.com/artipavl/DamarAgrotrade/main/src/img/product/Rectangle.png',
      'https://raw.githubusercontent.com/artipavl/DamarAgrotrade/main/src/img/product/Rectangle.png',
      'https://raw.githubusercontent.com/artipavl/DamarAgrotrade/main/src/img/product/Rectangle.png',
      'https://raw.githubusercontent.com/artipavl/DamarAgrotrade/main/src/img/product/Rectangle.png',
    ],
    value: 1,
    availability: true,
    unit: 'шт',
    producer: {
      name: 'ФМС Украина',
      logo: '....',
    },
    description: '',
    reviews: [
      {
        id: '1',
        body: 'test',
        userName: 'TEST',
      },
    ],
  },
  {
    id: '7',
    title: 'Петунія Софістика F7',
    price: 30,
    imgs: [
      'https://raw.githubusercontent.com/artipavl/DamarAgrotrade/main/src/img/product/Rectangle.png',
      'https://raw.githubusercontent.com/artipavl/DamarAgrotrade/main/src/img/product/Rectangle.png',
      'https://raw.githubusercontent.com/artipavl/DamarAgrotrade/main/src/img/product/Rectangle.png',
      'https://raw.githubusercontent.com/artipavl/DamarAgrotrade/main/src/img/product/Rectangle.png',
    ],
    value: 1,
    availability: true,
    unit: 'шт',
    producer: {
      name: 'ФМС Украина',
      logo: '....',
    },
    description: '',
    reviews: [
      {
        id: '1',
        body: 'test',
        userName: 'TEST',
      },
    ],
  },
  {
    id: '8',
    title: 'Скор 250 ЕС к.э.',
    price: 200,
    imgs: [
      'https://raw.githubusercontent.com/artipavl/DamarAgrotrade/main/src/img/product/Rectangle.png',
      'https://raw.githubusercontent.com/artipavl/DamarAgrotrade/main/src/img/product/Rectangle.png',
      'https://raw.githubusercontent.com/artipavl/DamarAgrotrade/main/src/img/product/Rectangle.png',
      'https://raw.githubusercontent.com/artipavl/DamarAgrotrade/main/src/img/product/Rectangle.png',
    ],
    value: 1,
    availability: true,
    unit: 'шт',
    producer: {
      name: 'ФМС Украина',
      logo: '....',
    },
    description: '',
    reviews: [
      {
        id: '1',
        body: 'test',
        userName: 'TEST',
      },
    ],
  },
  {
    id: '9',
    title: 'Скор 200 ЕС к.э.',
    price: 150,
    imgs: [
      'https://raw.githubusercontent.com/artipavl/DamarAgrotrade/main/src/img/product/Rectangle.png',
      'https://raw.githubusercontent.com/artipavl/DamarAgrotrade/main/src/img/product/Rectangle.png',
      'https://raw.githubusercontent.com/artipavl/DamarAgrotrade/main/src/img/product/Rectangle.png',
      'https://raw.githubusercontent.com/artipavl/DamarAgrotrade/main/src/img/product/Rectangle.png',
    ],
    value: 1,
    availability: true,
    unit: 'шт',
    producer: {
      name: 'ФМС Украина',
      logo: '....',
    },
    description: '',
    reviews: [
      {
        id: '1',
        body: 'test',
        userName: 'TEST',
      },
    ],
  },
  {
    id: '10',
    title: 'Скор 175 ЕС к.э.',
    price: 175,
    imgs: [
      'https://raw.githubusercontent.com/artipavl/DamarAgrotrade/main/src/img/product/Rectangle.png',
      'https://raw.githubusercontent.com/artipavl/DamarAgrotrade/main/src/img/product/Rectangle.png',
      'https://raw.githubusercontent.com/artipavl/DamarAgrotrade/main/src/img/product/Rectangle.png',
      'https://raw.githubusercontent.com/artipavl/DamarAgrotrade/main/src/img/product/Rectangle.png',
    ],
    value: 1,
    availability: true,
    unit: 'шт',
    producer: {
      name: 'ФМС Украина',
      logo: '....',
    },
    description: '',
    reviews: [
      {
        id: '1',
        body: 'test',
        userName: 'TEST',
      },
    ],
  },
  {
    id: '11',
    title: 'Скор 125 ЕС к.э.',
    price: 125,
    imgs: [
      'https://raw.githubusercontent.com/artipavl/DamarAgrotrade/main/src/img/product/Rectangle.png',
      'https://raw.githubusercontent.com/artipavl/DamarAgrotrade/main/src/img/product/Rectangle.png',
      'https://raw.githubusercontent.com/artipavl/DamarAgrotrade/main/src/img/product/Rectangle.png',
      'https://raw.githubusercontent.com/artipavl/DamarAgrotrade/main/src/img/product/Rectangle.png',
    ],
    value: 1,
    availability: true,
    unit: 'шт',
    producer: {
      name: 'ФМС Украина',
      logo: '....',
    },
    description: '',
    reviews: [
      {
        id: '1',
        body: 'test',
        userName: 'TEST',
      },
    ],
  },
  {
    id: '12',
    title: 'Скор 50 ЕС к.э.',
    price: 50,
    imgs: [
      'https://raw.githubusercontent.com/artipavl/DamarAgrotrade/main/src/img/product/Rectangle.png',
      'https://raw.githubusercontent.com/artipavl/DamarAgrotrade/main/src/img/product/Rectangle.png',
      'https://raw.githubusercontent.com/artipavl/DamarAgrotrade/main/src/img/product/Rectangle.png',
      'https://raw.githubusercontent.com/artipavl/DamarAgrotrade/main/src/img/product/Rectangle.png',
    ],
    value: 1,
    availability: true,
    unit: 'шт',
    producer: {
      name: 'ФМС Украина',
      logo: '....',
    },
    description: '',
    reviews: [
      {
        id: '1',
        body: 'test',
        userName: 'TEST',
      },
    ],
  },
  {
    id: '13',
    title: 'Скор 300 ЕС к.э.',
    price: 300,
    imgs: [
      'https://raw.githubusercontent.com/artipavl/DamarAgrotrade/main/src/img/product/Rectangle.png',
      'https://raw.githubusercontent.com/artipavl/DamarAgrotrade/main/src/img/product/Rectangle.png',
      'https://raw.githubusercontent.com/artipavl/DamarAgrotrade/main/src/img/product/Rectangle.png',
      'https://raw.githubusercontent.com/artipavl/DamarAgrotrade/main/src/img/product/Rectangle.png',
    ],
    value: 1,
    availability: true,
    unit: 'шт',
    producer: {
      name: 'ФМС Украина',
      logo: '....',
    },
    description: '',
    reviews: [
      {
        id: '1',
        body: 'test',
        userName: 'TEST',
      },
    ],
  },
  {
    id: '14',
    title: 'Скор 325 ЕС к.э.',
    price: 325,
    imgs: [
      'https://raw.githubusercontent.com/artipavl/DamarAgrotrade/main/src/img/product/Rectangle.png',
      'https://raw.githubusercontent.com/artipavl/DamarAgrotrade/main/src/img/product/Rectangle.png',
      'https://raw.githubusercontent.com/artipavl/DamarAgrotrade/main/src/img/product/Rectangle.png',
      'https://raw.githubusercontent.com/artipavl/DamarAgrotrade/main/src/img/product/Rectangle.png',
    ],
    value: 1,
    availability: true,
    unit: 'шт',
    producer: {
      name: 'ФМС Украина',
      logo: '....',
    },
    description: '',
    reviews: [
      {
        id: '1',
        body: 'test',
        userName: 'TEST',
      },
    ],
  },
  {
    id: '15',
    title: 'Скор 350 ЕС к.э.',
    price: 350,
    imgs: [
      'https://raw.githubusercontent.com/artipavl/DamarAgrotrade/main/src/img/product/Rectangle.png',
      'https://raw.githubusercontent.com/artipavl/DamarAgrotrade/main/src/img/product/Rectangle.png',
      'https://raw.githubusercontent.com/artipavl/DamarAgrotrade/main/src/img/product/Rectangle.png',
      'https://raw.githubusercontent.com/artipavl/DamarAgrotrade/main/src/img/product/Rectangle.png',
    ],
    value: 1,
    availability: true,
    unit: 'шт',
    producer: {
      name: 'ФМС Украина',
      logo: '....',
    },
    description: '',
    reviews: [
      {
        id: '1',
        body: 'test',
        userName: 'TEST',
      },
    ],
  },
];
