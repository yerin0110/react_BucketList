import './ProfileSlider.css';

function ProfileSlider({currentImg, currentName, onSliderClick}){
    return(
        <div className='slider_box' onClick={onSliderClick}>
            <img src={currentImg} alt={currentName} className="character_image" />
            <h3>{currentName}</h3>
            <p>👆 클릭해서 다음 캐릭터 보기</p>
        </div>
    )
}

export default ProfileSlider;