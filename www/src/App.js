import React, { Component } from "react";
import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import FirstSection from "./components/FirstSection/FirstSection";
import SecondSection from "./components/SecondSection/SecondSection";
import ContactForm from "./components/ContactSection/ContactSection";
import Footer from "./components/Footer/Footer";
import SocialMedia from "./components/SocialMedia/SocialMedia";
// import { Launcher } from "react-chat-window";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      messageList: [],
      scrollPos: null,
      show: true,
      sections: [
        {position: null, name: 'first-section'},
        {position: null, name: 'second-section'},
        {position: null, name: 'contact-section'}
      ]
    };

    this._onMessageWasSent = this._onMessageWasSent.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.setSectionsPosition = this.setSectionsPosition.bind(this);
  }

  _onMessageWasSent(message) {
    this.setState({
      messageList: [...this.state.messageList, message]
    });
  }

  _sendMessage(text) {
    if (text.length > 0) {
      this.setState({
        messageList: [
          ...this.state.messageList,
          {
            author: "them",
            type: "text",
            data: {
              text
            }
          }
        ]
      });
    }
  }

  handleScroll(event) {
    this.setState({
      show: document.body.getBoundingClientRect().top === 0
    });
  }

  setSectionsPosition(name){}
  //   this.setState((prevState) => ({
  //     sections: [...prevState.sections.map(section => {
  //       return section.name === name
  //     })]
  //   }));
  // }

  componentDidUpdate(prevProps, prevState) {
		if(this.state.messageList.length !== prevState.messageList.length){
			axios.post('http://localhost:3000/whatsapp', this.state.messageList);
		}
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    const { show } = this.state;

    return (
      <div className="app">
        <NavBar show={show}></NavBar>
        <Banner></Banner>
        <FirstSection setSectionsPosition={this.setSectionsPosition}></FirstSection>
        <SecondSection setSectionsPosition={this.setSectionsPosition}></SecondSection>
        <ContactForm setSectionsPosition={this.setSectionsPosition}></ContactForm>
        <Footer></Footer>
        <SocialMedia></SocialMedia>
        {/* <Launcher
          agentProfile={{
            teamName: "Conversa",
            imageUrl:
              "https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png"
          }}
          onMessageWasSent={this._onMessageWasSent}
          messageList={this.state.messageList}
          showEmoji
        /> */}
      </div>
    );
  }
}

export default App;
