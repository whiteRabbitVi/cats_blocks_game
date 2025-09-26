const cats = [{
  'id': 'YdAqiUkUoWA',
  'url': 'img/cats-1.jpg',
  'description': 'pink petaled flower',
}, {
  'id': 'hX_hf2lPpUU',
  'url': 'img/cats-2.jpg',
  'description': 'green leaf',
}, {
  'id': 'w1JE5duY62M',
  'url': 'img/cats-3.jpg',
  'description': 'red and white petaled flower close-up photography',
}, {
  'id': '3tYZjGSBwbk',
  'url': 'img/cats-4.jpg',
  'description': 'white daisy in bloom during daytime',
}, {
  'id': 'NoXUQ54pDac',
  'url': 'img/cats-5.jpg',
  'description': 'white-and-pink flowers',
}, {
  'id': 'OZhYgZh0bAg',
  'url': 'img/cats-6.jpg',
  'description': 'white and purple flower petals',
}, {
  'id': 'YdAqiUkUoWA1',
  'url': 'img/cats-1.jpg',
  'description': 'pink petaled flower',
}, {
  'id': 'hX_hf2lPpUU1',
  'url': 'img/cats-2.jpg',
  'description': 'green leaf',
}, {
  'id': 'w1JE5duY62M1',
  'url': 'img/cats-3.jpg',
  'description': 'red and white petaled flower close-up photography',
}, {
  'id': '3tYZjGSBwbk1',
  'url': 'img/cats-4.jpg',
  'description': 'white daisy in bloom during daytime',
}, {
  'id': 'NoXUQ54pDac1',
  'url': 'img/cats-5.jpg',
  'description': 'white-and-pink flowers',
}, {
  'id': 'OZhYgZh0bAg1',
  'url': 'img/cats-6.jpg',
  'description': 'white and purple flower petals',
}];

const cars = [{
  'id': 'YdAqiUkUoWA',
  'url': 'img/cars-1.jpg',
  'description': '',
}, {
  'id': 'hX_hf2lPpUU',
  'url': 'img/cars-2.jpg',
  'description': '',
}, {
  'id': 'w1JE5duY62M',
  'url': 'img/cars-3.jpg',
  'description': '',
}, {
  'id': '3tYZjGSBwbk',
  'url': 'img/cars-4.jpg',
  'description': '',
}, {
  'id': 'NoXUQ54pDac',
  'url': 'img/cars-5.jpg',
  'description': '',
}, {
  'id': 'OZhYgZh0bAg',
  'url': 'img/cars-6.jpg',
  'description': '',
}];

const flowers = [{
  'id': 'YdAqiUkUoWA',
  'url': 'img/flowers-1.jpg',
  'description': '',
}, {
  'id': 'hX_hf2lPpUU',
  'url': 'img/flowers-2.jpg',
  'description': '',
}, {
  'id': 'w1JE5duY62M',
  'url': 'img/flowers-3.jpg',
  'description': '',
}, {
  'id': '3tYZjGSBwbk',
  'url': 'img/flowers-4.jpg',
  'description': '',
}, {
  'id': 'NoXUQ54pDac',
  'url': 'img/flowers-5.jpg',
  'description': '',
}, {
  'id': 'OZhYgZh0bAg',
  'url': 'img/flowers-6.jpg',
  'description': '',
}];

const imageCollection = {
  cats, cars, flowers
};

const results = [
  { name: 'Аня', stepsCount: 16 },
  { name: 'Вася', stepsCount: 12 },
  { name: 'Петя', stepsCount: 19 }
];

const getImages = (type) => {
  // Формирование тематического набора данных
  const images = imageCollection[type]
  const set = []
  images.forEach(image => {
    set.push({...image})
    set.push({...image, id: `${image.id}-1`})
  })

  // Перемешивание данных
  if (RANDOMIZED) {
    set.sort(() => 0.5 - Math.random())
  }

  return set;
};


