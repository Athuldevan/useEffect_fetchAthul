import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [quotes, setQuotes] = useState([]);
  useEffect(() => {
    fetch(`https://dummyjson.com/quotes`)
      .then((res) => res.json())
      .then((data) => {
        data.quotes.map((advice) =>
          setQuotes((advices) => [...advices, advice])
        );
        console.log(quotes);
      });
  }, []);

  return (
    <div>
      {quotes.map((obj) => (
        <h1 className="h1" key={Math.random() * 5 + 15}>
          {obj.quote}
        </h1>
      ))}
    </div>
  );
}
