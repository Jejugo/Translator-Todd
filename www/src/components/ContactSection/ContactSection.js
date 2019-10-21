import React, { Component } from 'react'
import ContactForm from './ContactForm/ContactForm';
import './ContactSection.scss';

export default class ContactSection extends Component {
    render() {
        return (
            <section className="contact-section" id="contact">
                <div className="container">
                    <h1 className="contact-section__title">Entre em Contato!</h1>
                    <p className="contact-section__text">blablalalblablblablbal</p>
                    <div className="contact-section__contact-form">
                        <ContactForm></ContactForm>
                    </div>
                </div>
            </section>
        )
    }
}
