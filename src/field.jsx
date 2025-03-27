import { useEffect, useState } from "react";
import Mole from "./mole";
import Hole from "./hole";
import "./index.css";

export default function Field({ score, setScore }) {
    const [moleIndex, setMoleIndex] = useState(null);

    useEffect(() => {
        spawnMole();
    }, []);

    function spawnMole() {
        const random = Math.floor(Math.random() * 9);
        setMoleIndex(random);
        console.log("Mole at index:", random);
    }

    function moleWhacked() {
        setScore(score + 1);
        spawnMole();
    }

    console.log("Current moleIndex:", moleIndex);

    return (
        <section className="field">
            <ul>
                {Array.from({ length: 9 }).map((_, index) => (
                    <li key={index}>
                        <Hole>
                            {index === moleIndex && <Mole onClick={moleWhacked} />}
                        </Hole>
                    </li>
                ))}
            </ul>
        </section>
    );
}
