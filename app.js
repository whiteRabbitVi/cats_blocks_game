<script src="vendor/react.development.js"></script>
<script src="vendor/react-dom.development.js"></script>
<script src="data.js"></script>

<script>
  function App({images = [], visibleItems = [], finishedItems = []}) {
    return React.createElement(
      'section',
      { className: 'game container' },
      React.createElement(Grid, { images, visibleItems, finishedItems })
    );
  }

  function Card({img, text, isVisible, isFinished}) {
    const className = `card ${isVisible ? 'card-show' : ''} ${isFinished ? 'card-finished' : ''}`;
    return React.createElement(
      'li',
      { className },
      React.createElement('img', { src: img, width: "204", height: "144", alt: text }),
      React.createElement('span', null, text)
    );
  }

  function Grid({images, visibleItems, finishedItems}) {
    const cards = images.map((image) =>
      React.createElement(Card, {
        key: image.id,
        img: image.url,
        text: image.description,
        isVisible: visibleItems.includes(image.id),
        isFinished: finishedItems.includes(image.id),
      })
    );
    return React.createElement('ul', { className: 'cards cards-theme-cars' }, cards);
  }

  const container = document.getElementById('root');
  const root = ReactDOM.createRoot(container);
  root.render(
    React.createElement(App, {
      images: images,
      visibleItems: visibleItems,
      finishedItems: finishedItems,
    })
  );
</script>
