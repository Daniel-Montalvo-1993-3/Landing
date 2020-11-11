import React, { Component } from 'react';
import './cardPremio.scss'
import arrayAwards from '../../Data/dataAwardsCards'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

class CardPremio extends Component {
    renderCards = () => {
        return(
            arrayAwards.map((card,index) => {
                return(
                    <div key={index} className="card-award">
                        <LazyLoadImage effect="blur" src={card.image} alt={card.title} className="img-awards"/>
                        <p className="title-card-award">{card.title}</p>
                        <p className="text-card-description">{card.description}</p>
                    </div>
                )
            })
        )
    }
    render() { 
        return ( 
            <section className="container-deck">
                <div className="container-text-award">
                    <h6 className="title-award">PREMIO</h6>
                    <p className="text-award">Elige un destino, tu premio incluye: Vuelo redondo
                        para dos personas saliendo desde Ciudad de México, hotel
                        4 estrellas en el destino una noche antes y una después 
                        del crucero, traslado aeropuerto-hotel-aeropuerto, crucero 
                        en una (1) cabina interior para dos personas por 7 dias.*
                    </p>
                </div>
                {this.renderCards()}
            </section>
         );
    }
}
 
export default CardPremio;