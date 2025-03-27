import "./index.css";

export default function ResetButton({ setIsPlaying }) {
    return (
        <section className="resetButton">
            <button onClick={() => setIsPlaying(false)}>Return to menu</button>
        </section>
    );
}

