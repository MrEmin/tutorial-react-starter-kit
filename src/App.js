import { useEffect } from "react";
import logo from "./logo.svg";

function App() {

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      // analytici bilgilendir
    }
  })

  // .env dosyalarının başı her zaman REACT_APP_ şeklinde başlamalıdır. Devamında kendi isimlendirmelerimizi yapmalıyız.

  // .env'de daha çok public olan key'leri kullanmalıyız, api url'leri zaten public. Private key'leri env içerisine yazmamalıyız. Bu işlem client side bir işlem olduğu için herkes görebilmektedir.

  return (
    <div className="App">
      <h3>{process.env.NODE_ENV}</h3> {/* ortam değişkenleri - environment variables*/}

      <p>
        {process.env.REACT_APP_API_URL}
      </p>

      {/* production ortramında çalışması için */}
      {process.env.NODE_ENV === "production" && (
        <>
          <img src="/logo192.png" alt="" />
          <img src={logo} alt="" />
        </>
      )}
    </div>
  );
}

export default App;
