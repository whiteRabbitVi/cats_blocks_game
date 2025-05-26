// Получаем контейнер для рендеринга приложения
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <App images={images} />
);

// Компонент приложения
function App({ images = []) {
  const [stepCount, setStepCount] = React.useState(0)
  const checkItems = () => {
    setStepCount((i) => i + 1);
  }
  
  return (
    <div>
      <section className="container game">
        <div className="steps">Шаг {stepsCount}</div>
        <Grid images={images} checkItems={checkItems} value={stepsCount} />
      </section>
        <Counter />
    </div>
  );
}

// Компонент сетки карточек
function Grid({ images, visibleItems, finishedItems }) {
  const [selectedItems, setSelectedItems] = React.useState([])
  const handleCardClick = ((id) => {
    if (selectedItems.includes(id)) {
      return;
    }
    checkItems();
    setSelectedItems((items) => [...items, id]);
  }
  ));
  
  return <ul className="cards">{cards}
    {images.map((item) => (
      <Card 
        key={item.id}
        id={item.id}
        url={item.url}
        description={item.description}
        isFinished={finishedItems.includes(item.id)}
        isSelected={selectedItems.includes(item.id)}
        onCardClick={handleCardClick}
      />
    ))} 
    </ul>;
}

// Компонент карточки
function Card({ img, text, checkItems, isSelected, isFinished }) {
  const className = `card ${isSelected ? 'card-show' : ''} ${isFinished ? 'card-finished' : ''}`;
  const handleClick = () => {
        if (isFinished) {
          return;
        }
        onCardClick(id);
      };
  
  return (
    <li className={`card ${className}`} onClick={handleClick}>
          <img
            width="204" height="144"
            src={url}
            alt={description}
          />
        </li>
  );
}


// Компонент каунтер
function Counter() {
  const [count, setState] = React.useState(0);
  const [incCount, setIncCount] = React.useState(0);
  
  return (
    <div className="counter-border">
      <h1>{count}</h1>
      <div className="button-row">
        <button 
          onClick={() => {
          setState(count + 1) 
          setIncCount(incCount + 1)
        }} className="custom-button">+ (click on plus {incCount} times)</button>
    
        <button onClick={() => {setState(count - 1)}} className="custom-button">-</button>
      </div>
    </div>
  )
}
