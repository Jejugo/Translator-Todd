import React, { Component } from 'react'
import './SecondSection.scss';
export default class SecondSection extends Component {
    render() {
        return (
            <section className="translation" id="translation">
                <div className="container">
                    <div className="translation--simultaneous">
                        <h1 className="translation__title"> Tradução Simultanea </h1>
                        <p className="translation__text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id dui a ipsum auctor ornare et vitae massa. Pellentesque efficitur, quam a dictum facilisis, neque enim blandit nunc, quis suscipit orci lacus blandit neque. Vestibulum sollicitudin luctus ex, sit amet iaculis est condimentum nec. Pellentesque magna elit, congue quis turpis ac, dapibus pellentesque purus. Donec sed dictum nibh. Vestibulum in dignissim arcu, eget aliquet orci. Donec id feugiat purus. Donec et augue iaculis, suscipit neque et, aliquam odio. Sed cursus, nunc eu vulputate feugiat, arcu elit maximus dolor, eget lacinia libero augue non justo. Ut sed vehicula arcu. Phasellus scelerisque tincidunt consequat. Curabitur vestibulum laoreet luctus. Nam finibus ligula sed ornare cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu libero imperdiet, scelerisque lacus at, tincidunt diam. Curabitur ut mauris malesuada, porttitor mi sed, interdum mi. </p>
                    </div>
                    <div className="translation--docs">
                        <h1 className="translation__title"> Tradução de Documentos </h1>
                        <p className="translation__text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id dui a ipsum auctor ornare et vitae massa. Pellentesque efficitur, quam a dictum facilisis, neque enim blandit nunc, quis suscipit orci lacus blandit neque. Vestibulum sollicitudin luctus ex, sit amet iaculis est condimentum nec. Pellentesque magna elit, congue quis turpis ac, dapibus pellentesque purus. Donec sed dictum nibh. Vestibulum in dignissim arcu, eget aliquet orci. Donec id feugiat purus. Donec et augue iaculis, suscipit neque et, aliquam odio. Sed cursus, nunc eu vulputate feugiat, arcu elit maximus dolor, eget lacinia libero augue non justo. Ut sed vehicula arcu. Phasellus scelerisque tincidunt consequat. Curabitur vestibulum laoreet luctus. Nam finibus ligula sed ornare cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu libero imperdiet, scelerisque lacus at, tincidunt diam. Curabitur ut mauris malesuada, porttitor mi sed, interdum mi. </p>
                    </div>
                </div>
            </section>
        )
    }
}
