import React from "react";

function NotesItemContent({ title, body, createdAt }) {
    return (
        <div className="item_content">
            <h3 className="item_title">{title}</h3>
            <p className="item_body">{body}</p>
            <p className="item_date">{createdAt}</p>
        </div>
    )
}

export default NotesItemContent;