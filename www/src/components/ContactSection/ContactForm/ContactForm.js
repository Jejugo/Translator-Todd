import React, { Component, Fragment } from 'react'
import axios from 'axios';
import './ContactForm.scss';

export default class ContactForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: '',
            subject: '',
            text: '',
            sampleFile: null
        };

        this.handleInputs = this.handleInputs.bind(this);
        this.insertFile = this.insertFile.bind(this);
        this.submitValue = this.submitValue.bind(this);
    }

    handleInputs(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    insertFile(e){
        e.preventDefault();
        this.setState({
            sampleFile: e.target.files[0]
        });
    }

    submitValue(e){
        const { file } = this.state;
        e.preventDefault();

        //could have used the state directly, but since I need to pass a file along with it. Its best to use FormData()
        const data = new FormData();
        Object.keys(this.state).map((key, value) => {
            data.append(`${key}`, this.state[key])
        })
        axios({
        url: 'http://localhost:3000/register',
        method: 'POST',
        data: data
        })
    }

    render() {

        const { name, subject, text } = this.state;

        return (
            <React.Fragment>
                <form className="contact-form flex container" onSubmit={(e) => this.submitValue(e)}>
                    <div className="contact-form__block flex column">
                        <label htmlFor="name" className="contact-form__label">Nome: </label>
                        <input name="name" id="name" className="contact-form__input" placeholder="Digite seu nome" onChange={(e) => this.handleInputs(e)} value={name}/>
                    </div>
                    <div className="contact-form__block flex column">
                        <label htmlFor="name" className="contact-form__label">Assunto: </label>
                        <input name="subject" id="name" className="contact-form__input" placeholder="Digite o assunto"onChange={(e) => this.handleInputs(e)} value={subject}/>
                    </div>
                    <div className="contact-form__block flex column">
                        <label htmlFor="name"className="contact-form__label">Texto: </label>
                        <textarea name="text" id="name" className="contact-form__textarea" placeholder="Digite sobre o que quer falar" onChange={(e) => this.handleInputs(e)} value={text}/>
                    </div>
                    <div className="contact-form__send-buttons flex">
                        <input type="file" name="sampleFile" onChange={this.insertFile}/>
                        <button className="contact-form__submit"> Enviar </button>
                    </div>

                </form>
            </React.Fragment>
        )
    }
}
