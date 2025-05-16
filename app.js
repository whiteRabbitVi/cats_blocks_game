const images = [{
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

// списки выделенных и отгаданных карточек для отладки
const visibleItems = ['hX_hf2lPpUU', '3tYZjGSBwbk'];
const finishedItems = ['YdAqiUkUoWA', 'YdAqiUkUoWA1', 'w1JE5duY62M', 'w1JE5duY62M1'];


// Получаем контейнер для рендеринга приложения
ReactDOM.render(
  <App images={images} visibleItems={visibleItems} finishedItems={finishedItems} />,
  document.getElementById('root')
);

// Компонент приложения
function App({ images = [], visibleItems = [], finishedItems = [] }) {
  return (
    <section className="game">
      <h1>Игра Мемори</h1>
      <Grid images={images} visibleItems={visibleItems} finishedItems={finishedItems} />
    </section>
  );
}

// Компонент карточки
function Card({ img, text, isVisible, isFinished }) {
  const className = `card ${isVisible ? 'card-show' : ''} ${isFinished ? 'card-finished' : ''}`;
  return (
    <li className={className}>
      <img src={img} width="204" height="144" alt="Котик" />
      <span>{text}</span>
    </li>
  );
}

// Компонент сетки карточек
function Grid({ images, visibleItems, finishedItems }) {
  const cards = images.map((image) => (
    <Card
      key={image.id}
      img={image.url}
      text={image.description}
      isVisible={visibleItems.includes(image.id)}
      isFinished={finishedItems.includes(image.id)}
    />
  ));
  return <ul className="cards">{cards}</ul>;
}
