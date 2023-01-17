import React from 'react';
import PropTypes from 'prop-types';

function NoteDetail({ title, body, createdAt}) {

  return (
<>
    <div className="note-detail">
      <h3 className="detail_note_header">Detail Catatan</h3>
    <h2 className="note-detail_title">
        {title}
    </h2>
    <h5 className="note-item_createdAt">{createdAt}</h5>
        <div className="note-body">
            <p className="note-item_body">{body}</p>
        </div>
</div>

</>

  );
}

 
NoteDetail.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default NoteDetail;