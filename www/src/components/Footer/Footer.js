import React, { Component } from 'react'
import './Footer.scss';

export default class Footer extends Component {
    render() {
        return (
            <section className="footer">
                <div className="footer__container flex">
                    <div className="footer__container_column footer__container_left-column">
                        <p>blablabla</p>
                        <p>blablabla</p>
                        <p>blablabla</p>
                        <p>blablabla</p>
                    </div>
                    <div className="footer__container_column footer__container_right-column">
                        <p>blablabla</p>
                        <p>blablabla</p>
                        <p>blablabla</p>
                        <p>blablabla</p>
                    </div>
                </div>
            </section>
        )
    }
}
