import React from 'react';
import NotesItem from './NotesItem';

function NotesList({ notes, onDelete, querytitle }) {
    return (
        <div className='list'>
            <h2>Daftar Catatan</h2>
            {notes.length > 0 ? (
                <div className="note-list">
                    {
                        notes.filter((note) => note.title.includes(querytitle.toLowerCase()))
                        .map((note) => (
                            <NotesItem key={note.id} id={note.id} onDelete={onDelete} {...note} />
                        ))
                    }
                </div>
            ) : <div className="empty-message"><h3>Tidak ada list catatan</h3></div>}
        </div>
    );
}

export default NotesList;