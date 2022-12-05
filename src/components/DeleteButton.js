import React from 'react';

function DeleteButton({ id, onDelete }) {
    return <button className='item_delete' onClick={() => onDelete(id)}>X</button>
}

export default DeleteButton;