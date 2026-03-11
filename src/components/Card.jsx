import{ useState } from "react";

export function Card({ front, back }) {
    const [checkCard, setCheckCard] = useState(false)
    const handClick = () => {
        setCheckCard(!checkCard);
    }

    const className = `card ${checkCard ? 'card-check' : ' '}`;
    return (
    <div className={className} onClick={handClick} data-back={back}>
        {front}
        </div>
    );
}


