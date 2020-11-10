import React, { Component } from 'react';
import './cardRegistro.scss'

class CardRegistro extends Component {
    render() {
        return (
            <section className="card-registro">
                <h6 className="title-registro">¡EL REGISTRO SE HA CERRADO!</h6>
                <p className="text-muted">El registro se ha cerrado.</p>
                <p className="text-muted">Espera proximas noticias del Game Show.</p>
            </section>
        );
    }
}

export default CardRegistro;