import React from "react";

function NotesSearch ({ search, onsearch }) {
    return (
    <div className="item-search">
        <input className="item_search" type='search' placeholder="Cari Judul Catatan.." value={search} onChange={(querytitle) => onsearch(querytitle.target.value)}></input>
    </div>
    )
}

export default NotesSearch;