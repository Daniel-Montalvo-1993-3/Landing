import React, { Component } from 'react';
import './landing.scss';

class LandingContainer extends Component {
    render() { 
        return ( 
            <section style={{position: "relative"}} id={this.props.data.id}>
                <div className={this.props.data.clase}></div>
                {this.props.children}
            </section>
         );
    }
}
 
export default LandingContainer;