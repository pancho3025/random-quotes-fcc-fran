import ReactDOMServer from "react-dom/server";
import { FaQuoteLeft } from "react-icons/fa";
let colores = [
  "#66aacc",
  "#98c466",
  "#bfe09a",
  "#e0d09a",
  "#1e5832",
  "#581e53",
  "#215c54",
  "#2a2b25",
  "#582c1e",
  "#916d3e",
  "#57ad9f",
  "#83676f",
];
let x;
export function cambiarQuote() {
  fetch("https://api.quotable.io/quotes/random")
    .then((res) => res.json())
    .then((data) => {
      setTimeout(() => {
        document.querySelector(".text").innerHTML =
          ReactDOMServer.renderToString(<FaQuoteLeft />) +
          " " +
          data[0].content;
        document.getElementById("author").innerHTML = "- " + data[0].author;
      }, 400);
      x = data[0];
    });
}

export function cambiarColorYOp() {
  const texto = document.querySelector(".text");
  const autor = document.getElementById("author");
  const twitter = document.querySelector(".twitter");
  const boton = document.getElementById("new-quote");
  const body = document.body;
  texto.style.opacity = "0";
  autor.style.opacity = "0";
  setTimeout(() => {
    texto.style.opacity = "1";
    autor.style.opacity = "1";
  }, 701);

  let x = colores[Math.floor(Math.random() * colores.length)];
  texto.style.color = x;
  autor.style.color = x;
  twitter.style.background = x;
  boton.style.background = x;
  
  body.style.background = x;
}

// twitter facebook  #new-quote y body

export function tweet() {
  const tweet = document.getElementById("tweet-quote");
  tweet.setAttribute(
    "href",
    "https://twitter.com/intent/tweet?hashtags=quotes&text=" +
      '"' +
      x.content +
      '" ' +
      x.author
  );
}

