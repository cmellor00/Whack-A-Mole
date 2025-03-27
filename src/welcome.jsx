import "./index.css";
import Instructions from "./instructions";
import PlayButton from "./playButton";

export default function WelcomePage({
    setIsPlaying,
    isPlaying
}) {
    if (isPlaying) {
        return null;
    } else {
        return (
            <section className="welcomePage">
                <Instructions />
                <PlayButton setIsPlaying={setIsPlaying} />
            </section>
        );
    }
}