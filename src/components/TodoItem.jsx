import './TodoItem.css';

function TodoItem({data, onDelete, onToggle}){
    return(
        <div className={`todo_item ${data.isDone ? 'done' : ''}`}>
            <div className="todo_content" onClick={()=>onToggle(data.id)}>
                <span className="checkbox">
                {data.isDone ? '✅' : '⬜'}
                </span>
                <p className="todo_text">{data.text}</p>
            </div>
            <button className="delete_btn" onClick={()=>onDelete(data.id)}>삭제</button>
        </div>
    )
}

export default TodoItem;