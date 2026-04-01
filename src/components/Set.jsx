
import { Card } from "./Card";

import cards from "../data.json";
import { useState } from "react";

import data from "../data.json";
import { useLocation, useParams } from "react-router-dom";

export function Set() {
    const param = useParams();
    console.log(param.id);
    const location = useLocation()
    const set = location.state.set
    let cards = data.filter((item) => (item.setName === set))

    const [step, setStep] = useState(0);
    const handleNext = () => {
        if (step < cards.length - 1) {
            setStep(step + 1);
        }
    }
    const handlePrev = () => {
        if (step > 0) {
            setStep(step - 1);
        }
    }

    return (
        <div>
            <h2>English</h2>
            <Card front={cards[step].front} back={cards[step].back} key={cards[step].id} />

            <div className="control">
                <button onClick={handlePrev} disabled={step == 0 ? true : false} >Назад</button>
                <p>{step + 1} / {cards.length}</p>
                <button onClick={handleNext} disabled={step == cards.length - 1 ? true : false} >Вперед</button>
            </div>
        </div>
    );
}