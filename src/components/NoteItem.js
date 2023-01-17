import React from "react";
import DeleteButton from "./DeleteButton";
import { Link } from "react-router-dom";
import { showFormattedDate } from "../utils";
import PropTypes from 'prop-types';


function NoteItem ({id, title, createdAt, body, onDelete}){
    return(
        <div className="note-item">
            <h2 className="note-item_title">
                <Link className="title_reff" to={`/notes/${id}`}>{title}</Link>
            </h2>
            <h5 className="note-item_createdAt">
                {showFormattedDate(createdAt)}
            </h5>
            <div className="note-body">
                <p className="note-item_body">{body}</p>
            </div>
                <DeleteButton id={id} onDelete={onDelete}/>
        </div>
    );
}

NoteItem.propTypes={
    id:PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    
}

export default NoteItem;