import { useEffect } from "react";
import logo from "./logo.svg";
import Test from "./Test";
import { Title } from "./Components";
import Bootstrap from "./Bootstrap";
import Tailwind from "./Tailwind";

// Module css kullandığımız için bu artık bir objedir.
import styles from './App.module.css'
import './tailwind.css';

function App() {
  console.log(styles);

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      // analytici bilgilendir
    }
  })

  // .env dosyalarının başı her zaman REACT_APP_ şeklinde başlamalıdır. Devamında kendi isimlendirmelerimizi yapmalıyız.

  // .env'de daha çok public olan key'leri kullanmalıyız, api url'leri zaten public. Private key'leri env içerisine yazmamalıyız. Bu işlem client side bir işlem olduğu için herkes görebilmektedir.

  return (
    <div className={styles.App}>
      <Title>{process.env.NODE_ENV}</Title> {/* ortam değişkenleri - environment variables*/}
      <Title theme="dark">{process.env.NODE_ENV}</Title>

      <p>
        {process.env.REACT_APP_API_URL}
      </p>
      <Test/>

      {/* production ortramında çalışması için */}
      {process.env.NODE_ENV === "production" && (
        <>
          <img src="/logo192.png" alt="" />
          <img src={logo} alt="" />
        </>
      )}
      <Bootstrap/>
      <Tailwind/>
    </div>
  );
}

export default App;
