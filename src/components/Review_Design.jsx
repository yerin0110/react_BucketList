import { useState } from "react";
import './Review_Design.css';

function Review_Design({data}){
    const [isHover, setIsHover]=useState(false);
    const [showResult, setShowResult]=useState(false);

    return(
        <div
            className="review_card"
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
                        alt={data.title}
                    />
                    <div className="review_title">{data.resultTitle}</div>
                    <div className="score">{data.score}</div>
                    <div className="com">{data.title}</div>
                </div>
            )}
        </div>
    )
}

export default Review_Design;