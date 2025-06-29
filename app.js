// Получаем контейнер для рендеринга приложения
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App images={images} />)

// Компонент приложения
function App({ images = [] }) {
  const [finishedItems, setFinishedItems] = React.useState([]);
  const [stepsCount, setStepsCount] = React.useState(0)
  
  const checkItems = (firstItem, secondItem) => {
      firstItem = images.find(({id}) => id === firstItem);
      secondItem = images.find(({id}) => id === secondItem);
      if (firstItem.url === secondItem.url) {
        setFinishedItems((items) => [...items, firstItem.id, secondItem.id])
      }
      setStepsCount((i) => i + 1);
    };

  const isWin = finishedItems.length === images.length;
  
  return (
    <div>
      <section className="container game">
        <Progress value={finishedItems.length} max={images.length} stepsCount={stepsCount}/>
        <Grid 
          images={images} 
          finishedItems={finishedItems}
          checkItems={checkItems} 
        />
        {isWin && <Modal 
          stepsCount={stepsCount}
          setFinishedItems={setFinishedItems}
          setStepsCount={setStepsCount}
      />}
      </section>
        <Counter />
    </div>
  )
}

// Компонент прогресса
    function Progress({ value, max, stepsCount }) {
      return (
      <>
            <div className="progress-wrapper">
              <div className="progress" style={{ width: `${(value / max) * 100}%` }}></div>
            </div>

            <p className="progress-description">
              Открыто <span>{value / 2}</span> / <span>{max / 2}</span>
            </p>

            <div className="steps">Шаг {stepsCount}</div>
        </>
      );
    }

// Компонент сетки карточек
  function Grid({images, finishedItems, checkItems}) {
    const [selectedItems, setSelectedItems] = React.useState([]);
    
    const handleCardClick = (id) => {
        if (finishedItems.includes(id)) {
          return;
        }
        switch (selectedItems.length) {
          case 0:
            setSelectedItems([id]);
            break;
          case 1:
            setSelectedItems((items) => [...items, id]);
            checkItems(selectedItems[0], id);
            setTimeout(() => {
              setSelectedItems([]);
            }, 800);
            break;
          default:
            setSelectedItems([]);
        }
      };

    return <ul className="cards">
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
      </ul>
  }

// Компонент карточки
function Card({ url, description, id, isSelected, isFinished, onCardClick }) {
  const className = `${isSelected ? 'card-show' : ''} ${isFinished ? 'card-finished' : ''}`;
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
  )
}

// Компонент модальное окно
function Modal({stepsCount, setStepsCount, setFinishedItems}) {
      const handleModalClick = () => {
        setFinishedItems([]);
        setStepsCount(0);
      }

      return (
        <div className="modal">
          <div className="modal-box">
            <h3 className="modal-caption">Победа!</h3>
            <p className="modal-description">Вы собрали все пары за {stepsCount} шагов</p>
            <button onClick={handleModalClick} className="button modal-button" type="button">Новая игра</button>
          </div>
        </div>
      )
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
