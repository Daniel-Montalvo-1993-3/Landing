import React, { Component } from 'react';

class Card extends Component {
    renderText = () => {
        return(
            this.props.text.map((texto, index) => {
            return <p key={index}>{texto}</p>
            })
        )
    }
    render() { 
        return ( 
            <section className={this.props.variantClass}>
               <h6 id={this.props.titleClass}>{this.props.title}</h6>
                {this.renderText()}
            </section>
         );
    }
}
 
export default Card;