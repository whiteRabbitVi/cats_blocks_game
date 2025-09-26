// Получаем контейнер для рендеринга приложения
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App getImages={getImages} results={results} />)

// Компонент приложения
function App({ results, getImages }) {
  const [page, setPage] = React.useState(AppRoute.InitialPage);
  const [result, setResult] = React.useState(0);
  const [images, setImages] = React.useState([])
  const [type, setType] = React.useState(null);

  const showResults = (stepsCount) => {
    setResult(stepsCount);
    setPage(AppRoute.Results);
    };

  const handleReset = () => {
    setResult(0);
    setImages([]);
    setPage(AppRoute.InitialPage);
    };

  const handleStart = (type) => {
    setType(type);
    setImages(getImages(type));
    setPage(AppRoute.Game);
  }
  
  const getPage = (route) => {
    switch (route) {
      case AppRoute.InitialPage:
        return <InitialPage onStart={handleStart} />
      case AppRoute.Game:
        return <GamePage images={images} onShowResults={showResults} type={type} />;
      case AppRoute.Results:
        return (
          <ResultsPage
            stepsCount={result}
            onResetGame={handleReset}
            results={results}
          />
        );
      default:
        return null;
    }
  };
  return getPage(page);
}

// Функции сравнения карточек и определения победы
 const useGame = (images) => {
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

  return {
    finishedItems,
    stepsCount,
    checkItems,
    isWin
  };
 }

// Компонент Стартовая страница
function InitialPage({onStart}) {
      const handleStart = (type) => {
        onStart(type)
      }

      return (
              <section className="rules container">
                <h2>Добро пожаловать!</h2>
                <p>Memory — игра для тренировки визуальной памяти</p>
                <div className="rules-panel">
                  <h3>Правила игры</h3>
                  <ul className="rules-list">
                    <li>В наборе есть множество карточек – по две штуки с одним и тем же рисунком.</li>
                    <li>Нужно разложить карточки «рубашкой» вверх на столе, а затем переворачивать по две.</li>
                    <li>Если они совпадают – игрок забирает их и получает ещё один ход.</li>
                  </ul>
                </div>
                <button className="ico-button ico-button-cats" type="button" onClick={() => handleStart("cats")}>Котики</button>
                <button className="ico-button ico-button-flowers" type="button" onClick={() => handleStart("flowers")}>Цветочки</button>
                <button className="ico-button ico-button-cars" type="button"onClick={() => handleStart("cars")}>Машины</button>
              </section>
      );
    }

// Родительский компонент для прогресс-бара, сетки, модалки результата
    function GamePage({images = [], onShowResults, type}) {
      const {
        finishedItems,
        stepsCount,
        checkItems,
        isWin,
      } = useGame(images);

      const handleResultsClick = () => {
        onShowResults(stepsCount);
      };

      return (
        <section className="game container">
          <Progress value={finishedItems.length / 2} max={images.length / 2} />
          <div className="steps">Шаг {stepsCount}</div>
          <Grid
            images={images}
            finishedItems={finishedItems}
            checkItems={checkItems}
            type={type}
          />
          {isWin && (
            <Modal>
              <h3 className="modal-caption">Победа!</h3>
              <p className="modal-description">Теперь давайте узнаем результаты этой партии</p>
              <button className="button modal-button" type="button" onClick={handleResultsClick}>Показать результаты</button>
            </Modal>
          )}
        </section>
      );
    }

// Компонент прогресса
    function Progress({ value, max }) {
      return (
      <>
            <div className="progress-wrapper">
              <div className="progress" style={{ width: `${(value / max) * 100}%` }}></div>
            </div>
              <p className="progress-description">Открыто {value} / {max}</p>
        </>
      );
    }

// Компонент сетки карточек
  function Grid({images = [], finishedItems, checkItems, type}) {
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

    return <ul className={`cards cards-theme-${type}`}>
        {images.map((item) => (
                <Card
                    key={item.id}
                    item={item}
                    description={item.description}
                    isSelected={selectedItems.includes(item.id)}
                    isFinished={finishedItems.includes(item.id)}
                    onCardClick={handleCardClick}
                />
        ))}
      </ul>
  }

// Компонент карточки
function Card({ item, isSelected, isFinished, onCardClick }) {
  const {id, url, description} = item;
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
function Modal({children}) {
      return (
        <div className="modal">
          <div className="modal-box">
            {children}
          </div>
        </div>
      );
}

