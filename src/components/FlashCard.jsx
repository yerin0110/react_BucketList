// import { useState } from "react";
// import './FlashCard.css'

// function FlashCard({data, onCorrect}){
//     const [isFlipped, setIsFlipped]=useState(false);
//     const [isScore, setIsScore]=useState(false);
//     const [isCheck, setIsCheck]=useState(false);

//     const flipCard=()=>{
//         if(!isFlipped){
//             setIsFlipped(true);
//         }
//     };

//     const handleCorrectClick=(e)=>{
//         e.stopPropagation();

//         if(!isScore){
//             onCorrect();
//             setIsScore(true);
//         }
//     };

//     return(
//         <div
//             className={isFlipped ? 'flash_card flipped' : 'flash_card'}
//             onClick={flipCard}
//         >
//             <div className="card_content">
                        
//                 {isFlipped ? (
//                     <div className="answer_wrap">
//                         <div className="btn_group">
//                             <button className="answer_btn1" onClick={handleCorrectClick}>O</button>
//                             <button className="answer_btn2" onClick={handleCorrectClick}>X</button>
//                         </div>
//                         {!isScore ? (
//                             <div>
//                                 <p className="answer">정답입니다!</p>
//                                 <p className="answer_text">{data.answer}</p>
//                             </div>
//                         ) : (
//                             <div className="wrong_wrap">
//                                 <p className="wrong_text">틀렸습니다</p>
//                                 <div className="btn_group">
//                                     <button className="retry_btn">다시 풀기</button>
//                                     <button className="show_btn">정답 확인</button>
//                                 </div>
//                             </div>
//                         )}
//                     </div>
//                 ) : (
//                     <p className="question_text">{data.question}</p>
//                 )}
//             </div>
//         </div>
//     )
// }

// export default FlashCard;

import { useState } from "react";
import './FlashCard.css';

function FlashCard({ data, onCorrect }) {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isScore, setIsScore] = useState(false);
    const [isWrong, setIsWrong] = useState(false); 

    const handleAnswerClick = (e, userChoice) => {

        if (userChoice === data.correctAnswer) {
            if (!isScore) {
                onCorrect();
                setIsScore(true);
            }
            setIsWrong(false);
            setIsFlipped(true);
        } else {
            setIsWrong(true);
        }
    };

    const handleRetry = (e) => {
        e.stopPropagation();
        setIsWrong(false);
    };

    const handleShowAnswer = (e) => {
        e.stopPropagation();
        setIsFlipped(true);
    };

    return (
        <div className={`flash_card ${isFlipped ? 'flipped' : ''}`}>
            <div className="card_content">
                {isFlipped ? (
                    <div className="answer_wrap">
                        <p className="answer_label">🎉 정답입니다</p>
                        <p className="answer_text">{data.answer}</p>
                    </div>
                ) : (
                    <div className="question_wrap">
                        
                        {!isWrong ? (
                            <>
                                <p className="question_text">{data.question}</p>
                                <div className="btn_group">
                                    <button className="answer_btn1" onClick={(e) => handleAnswerClick(e, true)}>O</button>
                                    <button className="answer_btn2" onClick={(e) => handleAnswerClick(e, false)}>X</button>
                                </div>
                            </>
                        ) : (
                            <div className="wrong_wrap">
                                <p className="wrong_msg">틀렸습니다</p>
                                <div className="btn_group">
                                    <button className="retry_btn" onClick={handleRetry}>다시 풀기</button>
                                    <button className="show_btn" onClick={handleShowAnswer}>정답 확인</button>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default FlashCard;