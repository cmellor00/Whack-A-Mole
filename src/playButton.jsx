import "./index.css";

export default function PlayButton({ setIsPlaying }) {
    return (
        <section className="playButton">
            <button onClick={() => setIsPlaying(true)}>Play Game</button>
        </section>
    );
}