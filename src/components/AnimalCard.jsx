import { useState } from "react";
import './AnimalCard.css';

function AnimalCard({data}){
    const [isHover, setIsHover]=useState(false);
    const [showResult, setShowResult]=useState(false);

    return(
        <div
            className="animal_card"
            onMouseEnter={()=> setIsHover(true)}
            onMouseLeave={()=> setIsHover(false)}
            onClick={()=> setShowResult(true)}
        >
            {showResult ? (
                <div className="result_content">
                    <h3>{data.resultTitle}</h3>
                    <p>{data.resultDesc}</p>
                </div>
            ) : (
                <div className="img_content">
                    <img
                        src={isHover ? data.imgHover : data.imgNormal}
                        alt={data.name}
                    />
                    <h3 className="animal_name">{data.name}</h3>
                </div>
            )}
        </div>
    )
}

export default AnimalCard;