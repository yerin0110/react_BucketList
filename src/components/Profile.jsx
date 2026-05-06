import './Profile.css'

function Card({id, name, tribe, va_jap, va_ko, desc, img, selected, setSelected}){
    const isSelected=selected===id;

    return(
        <div className={`card ${isSelected ? 'selected' : ''}`} onClick={()=>setSelected(id)}>
            <div className="card-name">{name}</div>

            <img src={img} alt={name} />

            <div className='card-body'>
                <div className="card-tribe">종족: {tribe}</div>

                <div className="card-va">
                    <img src="https://i.namu.wiki/i/0zopF6Vmd3FDKDgQVtQtNaOo4umYMkCQYOHZVi58LOQZm7M1WpAgWjAgTZgh1w9iPg6-mcshG0GlORB2G1je2Ch8Tm3MDXnYILDTBwcZKSuYsQ6Y7Ou3zNr_p5t2t_NCZB-FOjmWS11B5fzqfhuqGQ.svg" alt="일본 성우" />
                    : {va_jap}
                </div>
                <div className="card-va">
                    <img src="https://i.namu.wiki/i/f0MOAY4BB01m-tAcob43D0i1bKaQx2cu-Z16z3H6PoT2g_3ZYYX4k1ykSTUcYc-JkUVVqhocAp4-KJp3MVWBXX6WbK57-RQlZlovWa3lwnYxWoNkAzwDUnwq5XqboeektuW9g11S90IzCszWc6u4cA.svg" alt="한국 성우" />
                    : {va_ko}
                </div>

                <div className="card-desc">{desc}</div>

                <button>자세히 보기</button>
            </div>
        </div>
    )
}

export default Card;