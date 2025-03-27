import { useState } from "react";
import WelcomePage from "./welcome.jsx";
import "./index.css";
import GamePage from "./game.jsx";




export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);

  return <>
    <header>
      <h1>Whack-A-Mole!!!</h1>
    </header>
    <section>
      <WelcomePage isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
    </section>
    <section>
      <GamePage isPlaying={isPlaying} setIsPlaying={setIsPlaying} score={score} setScore={setScore} />
    </section>
  </>;
}
