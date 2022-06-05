import { createElement, Fragment } from "react";
import "./tailwind.css";
import Button from "./components/Button";

function Btn(props) {
  return <button>{props.text}</button>;
}

function App() {
  //jsx olmasaydı react'i bu şekilde kullanırdık.
  const name = "Muhammet";
  const todos = ["todo1", "todo2", "todo3"];
  /* const h1 = createElement("h1", null, "prototurk.com");
  const ul = createElement('ul', null, todos.map(todo => createElement('li', null, todo)))
  const button = createElement(Button, {
    texxt: 'Buton texti'
  }, null) //burda illa html etiketi kullanmaya gerek yok. Kendi Button komponentimizden react komponenti türettik.
  return createElement(
    "main",
    {
      className: "test",
      id: "main",
    },
    h1, ul
  ); */

  // bu ise jsx kullanımı. Jsx ile html gibi yazmak çok daha kolaydır.

  const searchFunction = () => {
    alert("hello!");
  };

  return (
    <>
      <div style={{padding: 20}}>
        <Button>
          Buton örneği
        </Button>
        <Button text="Buton örneği" variant="success" />
        <Button text="Buton örneği" variant="danger" />
        <Button text="Buton örneği" variant="warning" />
      </div>
      <h1 tabIndex="3" style={{ color: "red", backgroundColor: "yellow" }}>
        prototurk.com
      </h1>
      <label htmlFor="search" tabIndex="2" onClick={() => alert("merhaba!")}>
        Arama
      </label>
      <input type="text" id="search" tabIndex="1"></input>{" "}
      {/* tab'a bastığında ilk buna fokuslanır. */}
      <ul>
        {name + " Emin"}

        {/* uzun hali */}
        {todos.map(function (todo, index) {
          return <li key={index}>{todo}</li>;
        })}

        {/* kısa hali, arrow function kullandık. Eğer =>'den sonra {} açarsak geriye return döndürmeliyiz. Ama () açarsak gruplamış oluruz ve içine yazdıklarımız return olarak döner. Eğer ({}) böyle yaparsak her elementi obje olarak döndürmüş oluruz.*/}
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
