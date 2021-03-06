import { createElement, Fragment, useState } from "react";
import "./tailwind.css";
import Button from "./components/Button";
import Tab from "./components/Tab";

function Btn(props) {
  return <button>{props.text}</button>;
}

function App() {
  //jsx olmasaydı react'i bu şekilde kullanırdık.
  
  const name = "Muhammet";
  const todos = ["todo1", "todo2", "todo3"];

  const [activeTab, setActiveTab] = useState(1)
  console.log(activeTab);

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
        <button onClick={() => setActiveTab(2)}>
          Aktif Tabı Değiştir
        </button>
        <Tab activeTab={activeTab} setActiveTab={setActiveTab}>
          <Tab.Panel title='Profil'>1. tab</Tab.Panel>
          <Tab.Panel title='Hakkında'>2. tab</Tab.Panel>
          <Tab.Panel title='Ayarlar'>3. tab</Tab.Panel>
        </Tab>
      </div>

      <div style={{ padding: 20 }}>
        <Button>Buton örneği</Button>
        <Button variant="success">Buton örneği</Button>
        <Button variant="danger">Buton örneği</Button>
        <Button variant="warning">Buton örneği</Button>
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
