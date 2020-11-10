import React, { Component } from 'react';

class LandingContainer extends Component {
    render() { 
        return ( 
            <section style={{position: "relative"}} id={this.props.data.id}>
                <div style={this.props.data.variantStyle}></div>
                {this.props.children}
            </section>
         );
    }
}
 
export default LandingContainer;