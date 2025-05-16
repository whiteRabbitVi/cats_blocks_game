// Получаем контейнер для рендеринга приложения
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <App images={images} visibleItems={visibleItems} finishedItems={finishedItems} />
);

// Компонент приложения
function App({ images = [], visibleItems = [], finishedItems = [] }) {
  return (
    <section className="container game">
      <Grid images={images} visibleItems={visibleItems} finishedItems={finishedItems} />
    </section>
    <section className="container game">
      <Counter />
    </section>
  );
}

// Компонент карточки
function Card({ img, text, isVisible, isFinished }) {
  const className = `card ${isVisible ? 'card-show' : ''} ${isFinished ? 'card-finished' : ''}`;
  return (
    <li className={className}>
      <img className="img" src={img} width="204" height="144" alt="Котик" />
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

// Компонент каунтер
function Counter() {
  const [count, setState] = React.useState(0);
  
  return (
    <h1>{count}</h1>
    <button onClick={() => {setState(count + 1)}} className="custom-button">+</button>
    <button onClick={() => {setState(count - 1)}} className="custom-button">-</button>
  )
}
