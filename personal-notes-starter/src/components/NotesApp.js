import React from "react";
import { getInitialData } from '../utils/data';
import NotesList from './NotesList';
import NotesInput from './NotesInput';
import NotesHeader from "./NotesHeader";

class NotesApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
            querytitle: '',
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
        this.onSearchEventHandler = this.onSearchEventHandler.bind(this);
    }

    onAddNotesHandler({ title, body }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        archived: false,
                        createdAt: new Date().toISOString(),
                    }
                ]
            }
        });
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }

    onSearchEventHandler(querytitle) {
        this.setState(() => {
            return {
                querytitle: querytitle
            }
    })
}

render() {
    return (
        <main className="note-app">
            <NotesHeader searchnote={this.onSearchEventHandler}/>
            <div className="app_body">
                <NotesInput addNote={this.onAddNotesHandler} />
                <NotesList notes={this.state.notes} querytitle={this.state.querytitle} onDelete={this.onDeleteHandler} />
            </div>
        </main>
    );
}
}

export default NotesApp;