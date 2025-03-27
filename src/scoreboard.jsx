import "./index.css";
import ResetButton from "./restartButton";

export default function Scoreboard({
    score,
    setIsPlaying,

}) {
    return (
        <section className="scoreboard">
            <h2>Score: {score}</h2>
            <ResetButton setIsPlaying={setIsPlaying} />
        </section>
    );
}