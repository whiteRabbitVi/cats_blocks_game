// добавление Компонент каунтер в app.js
// function Counter() {
//   const [count, setState] = React.useState(0);
//   const [incCount, setIncCount] = React.useState(0);
  
//   return (
//     <div className="counter-border">
//       <h1>{count}</h1>
//       <div className="button-row">
//         <button 
//           onClick={() => {
//           setState(count + 1) 
//           setIncCount(incCount + 1)
//         }} className="custom-button">+ (click on plus {incCount} times)</button>
    
//         <button onClick={() => {setState(count - 1)}} className="custom-button">-</button>
//       </div>
//     </div>
//   )
// }

// Компонент каунтер
function Counter() {
  const [count, setState] = React.useState(0);
  
  return (
    <h1>{count}</h1>
    <button onClick={() => {setState(count + 1)}} className="custom-button">+</button>
    <button onClick={() => {setState(count - 1)}} className="custom-button">-</button>
  )
}
