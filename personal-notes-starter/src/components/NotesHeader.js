import React from "react";
import NotesSearch from "./NotesSearch";

function NotesHeader({searchnote}) {
    return (
        <div className="app_header">
            <h1>MyNote</h1>
            <NotesSearch onsearch={searchnote}/>
        </div>
    )
}

export default NotesHeader;