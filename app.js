import { images, visibleItems, finishedItems } from './data.js';

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
