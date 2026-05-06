import { useState } from "react";
import './PhotoSlider.css';

function PhotoSlider(){
    const images=[
        "https://images.unsplash.com/photo-1684134549350-be5fd0d8feaa?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8JUVCJUI2JTg4JUVBJUI1JUFEJUVDJTgyJUFDfGVufDB8fDB8fHww",
        'https://media.istockphoto.com/id/181865427/ko/%EC%82%AC%EC%A7%84/cheomseongdae-in-%EA%B2%BD%EC%A3%BC-%ED%95%9C%EA%B5%AD.webp?a=1&b=1&s=612x612&w=0&k=20&c=QBNEeo6F0Phh2l673kYfv6rxwAyYAMHnfgPwFY0XL0w=',
        'https://media.istockphoto.com/id/2238178293/ko/%EC%82%AC%EC%A7%84/%EB%8F%99%EA%B6%81%EA%B3%BC-%EC%9B%94%EC%A7%80-%EC%97%B0%EB%AA%BB-%EA%B2%BD%EC%A3%BC-%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD.webp?a=1&b=1&s=612x612&w=0&k=20&c=82LXpKlrVCjivmPKt01c6yLLdAfD4sEZfgtY0OoQUco=',
        'https://media.istockphoto.com/id/1696531942/ko/%EC%82%AC%EC%A7%84/%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD-%EA%B2%BD%EC%A3%BC%EC%9D%98-%EC%9C%A0%EB%AA%85%ED%95%9C-%EC%B2%9C%EB%A7%88%EC%B4%9D-%EA%B3%B5%EC%9B%90%EC%9D%98-%EC%A0%84%EB%A7%9D.webp?a=1&b=1&s=612x612&w=0&k=20&c=ULZ-XaZy4JAPE0toVNt7yKjTmOTFgAsvqwoIUsjd7Aw=',
        'https://i.namu.wiki/i/m7L2tuYgaL2iZtu8oSzJheS0klREKD0kIa8Vn8wlDQdBOBqe71rkYVJIoOtv7iEJwh_GnApn04HSdx9ZbIed1RZYk86Mbsauc_EabVfxpFHcLxL1VlmXPdwiAivsuRNVcZmw4k3zUC4q9qCQRhSoKA.webp'
    ];

    const titles=['불국사', '첨성대', '동궁과 월지', '천마총', '문무대왕릉'];
    const [currentIndex, setCurrenIndex]=useState(0);
    
    const changePhoto=()=>{
        let nextIndex=currentIndex+1;

        if(nextIndex === images.length){
            nextIndex=0;
        }
        setCurrenIndex(nextIndex);
    }

    return(
        <div className="slider_box" onClick={changePhoto}>
            <img src={images[currentIndex]} alt={images[currentIndex]} className="cultural_image" />
            <h3>{titles[currentIndex]}</h3>
            <p>👆 클릭해서 다음 맛집 보기</p>
        </div>
    );
}

export default PhotoSlider;