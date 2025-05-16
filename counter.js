
// Компонент каунтер
function Counter() {
  const [count, setState] = React.useState(0);
  
  return (
    <h1>{count}</h1>
    <button onClick={() => {setState(count + 1)}} className="custom-button">+</button>
    <button onClick={() => {setState(count - 1)}} className="custom-button">-</button>
  )
}
