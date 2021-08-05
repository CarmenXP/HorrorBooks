import React from 'react';
import './Comments.css'
import SendIcon from '@material-ui/icons/Send';

export default function Comments() {
    return (
        <div className="container-comment">
            <h3>Dejanos tu comentario</h3>
            <div className="comments">
                <p>Primer comentario</p>
            </div>
            <div className="box-comments">
                <h3>Déjanos tu comentario</h3>
               
                    <form>
                        <textarea className="comment" ></textarea>
                        
                        <button className="send-button"><SendIcon/></button>
                    </form>
                
            </div>

        </div>
    )
}
