import React, { Component, Fragment } from 'react'
import './NavBar.scss';
import classNames from 'classnames';

export default class NavBar extends Component {

    constructor(props){
        super(props);
        this.state={
            navbarClass: '',
            navOptions: [
                {id: 1, name: 'Quem sou eu', alias: 'about'},
                {id: 2, name: 'Traduções', alias: 'translate'},
                {id: 3, name: 'Contato', alias: 'contact'},
            ]
        }
        this.scroll = this.scroll.bind(this);

    }

    scroll(name){
        name === 'about' ? window.scrollTo({top: 900, behavior: 'smooth' }) :
        name === 'translate' ? window.scrollTo({top: 1500, behavior: 'smooth' }) : 
        name === 'contact' ? window.scrollTo({top: 2100, behavior: 'smooth' }) : null;
    }

    componentDidUpdate(prevProps, prevState){
        if(this.props.show !== prevProps.show){
            const { show } = this.props;
            show ? this.setState({navbarClass: 'navbar'}) : this.setState({navbarClass: 'navbar-stick'}) 
        }
    }

    componentDidMount(){
        const { show } = this.props;
        show ? this.setState({navbarClass: 'navbar'}) : this.setState({navbarClass: 'navbar-stick'}) 
    }

    render() {

        const { navbarClass, navOptions } = this.state;
        const navLinks = navOptions.map(item => {
            return(
                <Fragment>
                    <li className="navbar__content_list--item">
                        <a href="#" className="navbar__content_list--link" onClick={() => this.scroll(item.alias)}>{item.name}</a>
                    </li>
                </Fragment>
            )
        });

        return (
            <div className={classNames(navbarClass, 'flex')}>
                <nav className="navbar__content flex">
                    <span className="navbar__content_title">Tarcisio Góes</span>
                    <ul className="navbar__content_list flex">
                        {navLinks}
                    </ul>
                </nav>
            </div>
        )
    }
}
