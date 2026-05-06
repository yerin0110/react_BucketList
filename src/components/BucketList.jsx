import './BucketList.css'

function BucketList({data, onDelete, onToggle}){
    return(
        <div className={`bucket_item ${data.isDone ? 'done' : ''}`}>
            <div className="bucket_content" onClick={()=>onToggle(data.id)}>
                <span className="checkbox">
                    {data.isDone ? '🛫' : '🧳'}
                </span>
                <div className="text_box">
                    <div className="country_box">
                        📍
                        <p className="country_text">{data.country}</p>
                        -
                        <p className="region_text">{data.region}</p>
                    </div>
                    <p className="activity_text">{data.activity}</p>
                </div>
            </div>
            <button className="del_btn" onClick={()=>onDelete(data.id)}>삭제</button>
        </div>
    )
}

export default BucketList;