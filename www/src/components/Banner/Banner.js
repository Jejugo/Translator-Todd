import React, { Component } from 'react'
import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from 'react-awesome-slider/src/styles';
import './Banner.scss'

export default class Banner extends Component {

    render() {
        return (
            <div className="banner">
                <AwesomeSlider 
                play={true} 
                cancelOnInteraction={false} 
                interval={6000} 
                cssModule={AwsSliderStyles}>
                    <div data-src="src/utils/img/translate_1.jpg"></div>
                    <div data-src="src/utils/img/translate_2.jpg"></div>
                    <div data-src="src/utils/img/translate_1.jpg"></div>
                    <div data-src="src/utils/img/translate_2.jpg"></div>
                </AwesomeSlider>
            </div>
        )
    }
}
