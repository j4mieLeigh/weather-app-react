import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Bordeaux" />
        <footer>
          Coded 👩‍💻 by{" "}
          <a
            href="https://github.com/j4mieLeigh"
            target="_blank"
          >
            Jamie Leigh
          </a>{" "}
          | Open-sourced 👋 on{" "}
          <a
            href="https://github.com/j4mieLeigh/weather-app-react"
            target="_blank"
          >
            Github
          </a>{" "}
          | Hosted 🥳 by{" "}
          <a
            href="https://preeminent-gumdrop-b73ad5.netlify.app/"
            target="_blank"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
