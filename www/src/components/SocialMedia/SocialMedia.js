import React, { Component } from 'react';
import {
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  WhatsappIcon,
  LinkedinIcon,
  PinterestIcon,
  VKIcon,
  OKIcon,
  RedditIcon,
  TumblrIcon,
  LivejournalIcon,
  MailruIcon,
  ViberIcon,
  WorkplaceIcon,
  LineIcon,
  PocketIcon,
  InstapaperIcon,
  EmailIcon,
} from 'react-share';
import "./SocialMedia.scss";

class SocialMedia extends Component {

  constructor(props){
    super(props);
    this.state={
      hasHovered: false
    };

    this.hoverAction = this.hoverAction.bind(this);
    this.turnOffSocial = this.turnOffSocial.bind(this);
  }

  hoverAction(){
    this.setState((previousState) => ({
      hasHovered: true
    }));
  }

  turnOffSocial(e){
    e.preventDefault();
    this.setState((previousState) => ({
      hasHovered: false
    }));
  }


  render() {

    const { hasHovered } = this.state

    return (
      <>
        <div className="social-media__wrapper">
          <div className={!hasHovered ? `social-media flex` : `social-media smaller flex`} onMouseEnter={this.hoverAction} onClick={this.turnOffSocial}>
            <p className="social-media__text">{hasHovered ? `X` : `SOCIAL`}</p>
          </div>
        </div>

        <div className={ hasHovered ? `social-icons` : `social-icons--disabled`}>
          <ul className="social-icons__list">
            <li className="social-icons__list_item">
              <FacebookIcon className="social-icons__list_item_icon" round={true} />
            </li>
            <li className="social-icons__list_item">
              <WhatsappIcon className="social-icons__list_item_icon" round={true} />
            </li>
            <li className="social-icons__list_item">
              <EmailIcon className="social-icons__list_item_icon" round={true} />
            </li>
            <li className="social-icons__list_item">
              <LinkedinIcon className="social-icons__list_item_icon" round={true} />
            </li>
          </ul>
        </div>
      </>
    )
  }
}

export default SocialMedia;