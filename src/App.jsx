import "./App.sass";
import { useEffect } from "react";
import { FaTwitter} from "react-icons/fa";
import Quote from "./Quote.jsx";
import { cambiarQuote, cambiarColorYOp, tweet } from "./funciones.jsx";

function App() {
  useEffect(() => {
    cambiarQuote();
    cambiarColorYOp();
  }, []);

  return (
    <>
      <div id="quote-box">
        <Quote></Quote>
        <div className="buttons">
          <div className="but-izq">
            <a href="twitter.com/intent/tweet" target="_blank" id="tweet-quote" onClick={()=>{
              tweet()
            }}>
              <FaTwitter className="twitter" />
            </a>
            
          </div>
          <button
            id="new-quote"
            onClick={() => {
              cambiarQuote();
              cambiarColorYOp();
            }}
          >
            New quote
          </button>
        </div>
      </div>
      <div className="me">
        <a href="codepen.io/pancho3025" className="project-author">
          by francisco
        </a>
      </div>
    </>
  );
}

export default App;

/*
  Me falta toda la funcionalidad, esto sería:
  1_ cambiar la frase y el autor con una api cuando de click https://github.com/lukePeavey/quotable#get-random-quotes
  2_ cambiar los colores de fondo y de texto a un color random que estará en un array cuando de click
  3_ aprender lo de twitter y facebook
*/
