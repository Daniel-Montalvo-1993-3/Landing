import React, { Component } from 'react';
import './crucero.scss'
import nube from '../../Images/nube.svg'
import gana from '../../Images/crucero-gana.svg'
import premier from '../../Images/logopremier.svg'
import crucero from '../../Images/cruceroslinea.png'

class Crucero extends Component {
    render() { 
        return ( 
            <section>
                <img className="nube1" src={nube} alt="nube"/>
                <img className="nube2" src={nube} alt="nube"/>
                <img className="nube3" src={nube} alt="nube"/>
                <img className="gana" src={gana} alt="gana"/>
                <img className="premier" src={premier} alt="premier"/>
                <p className="letterY">Y</p>
                <img className="crucero" src={crucero} alt="crucero"/>
                <p className="texto-crucero">¿CARIBE, ALASKA, EUROPA O HAWAII?ELIGE EL
                    DESTINO QUE MÁS QUIERAS Y CLUB PREMIER SE 
                    ENCARGA DEL VUELO, EL HOSPEDAJE Y EL CRUCERO.
                </p>
                <button className="btn-participa">PARTICIPAR AHORA</button>
                <p className="texto-permiso">PERMISO SEGOB DGRTC/1916/2019</p>
            </section>
         );
    }
}
 
export default Crucero;