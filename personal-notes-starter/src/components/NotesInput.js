import React from "react";

class NotesInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
            bound: 50,
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        this.setState(() => {
            return {
                title: event.target.value.slice(0, this.state.bound),
            }
        });
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            }
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
    }

    render() {
        return (
                <form className="note-input" onSubmit={this.onSubmitEventHandler}>
                    <h2>Tambah Catatan</h2>
                    <p className="input_title_bound"> Sisa Karakter: {this.state.bound - this.state.title.length} </p>
                    <input className="input_title" type="text" placeholder="Title" value={this.state.title} onChange={this.onTitleChangeEventHandler} />
                    <textarea className="input_body" type="text" placeholder="Desc" value={this.state.body} onChange={this.onBodyChangeEventHandler} />
                    <button type="submit">Tambah</button>
                </form>
        )
    }
}

export default NotesInput;