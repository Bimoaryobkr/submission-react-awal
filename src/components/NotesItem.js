import React from 'react';
import NotesItemContent from './NotesItemContent';
import DeleteButton from './DeleteButton';

function NotesItem({ title, createdAt, body, id, onDelete }) {
    return (
        <div className="note-item">
            <NotesItemContent title={title} body={body} createdAt={createdAt} />
            <DeleteButton id={id} onDelete={onDelete} />
        </div>
    );
}

export default NotesItem;