import React from "react";
import PropTypes from 'prop-types';


class NoteInput extends React.Component{
    constructor(props){
        super(props);

        this.state={
            note:{title:'', body:''},
            titleLimit : {inputTitle: '', limit: 50, char: 50}
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event){
        if (event.target.value.length <= 50) {
        this.setState((previousState)=>{
            return{
                note:{
                    ...previousState.note,
                    title : event.target.value,
                },
                titleLimit : {
                    ...previousState.titleLimit,
                    inputTitle: event.target.value,
                    char: previousState.titleLimit.limit - event.target.value.length
                },
            }
        });
    }
    }

    onBodyChangeEventHandler(event){
        this.setState((previousState)=>{

            return{
                ...previousState,
                note:{
                    ...previousState.note,
                    body: event.target.value,
                }
            }
        });
    }

    onSubmitEventHandler(event){
        event.preventDefault();
        this.props.addNote(this.state.note);
        this.setState((previousState)=>{
            return{
                note:{
                    title:'',
                    body:'',
                },
                titleLimit : {
                    ...previousState.titleLimit,
                    inputTitle: '',
                    char: 50
                }
            }
        });
    }

    render(){
        return(
            <>
            <div className="container_form">
                <form className='note-input' onSubmit={this.onSubmitEventHandler}>
                    <h3 className="title_form_input">Form Tambah Catatan</h3>
                        <div className="character-limit">
                            <p className={`note-input__title__char-limit ${this.state.titleLimit.char === 0 ? '0' : ''}`}>Sisa karakter: {this.state.titleLimit.char}</p>
                        </div>
                        <input type="text" placeholder="Judul Catatan" value={this.state.note.title} onChange={this.onTitleChangeEventHandler}/>
                        <input type="text" placeholder="Isi Catatan" value={this.state.note.body} onChange={this.onBodyChangeEventHandler}/>
                    <button type="submit">Tambah</button>
                </form>
            </div>
            </>
        )
    };
}

NoteInput.propTypes={
    addNote : PropTypes.func.isRequired
}

export default NoteInput;
