import Scoreboard from "./scoreboard";
import "./index.css";
import Field from "./field";

export default function GamePage({
    isPlaying,
    setIsPlaying,
    score,
    setScore
}) {
    if (!isPlaying) {
        return null;
    } else {
        return (
            <>
                <main>
                    <Field setScore={setScore} score={score} />
                </main>
                <section>
                    <Scoreboard score={score} setIsPlaying={setIsPlaying} />
                </section>
            </>
        )
    }
}