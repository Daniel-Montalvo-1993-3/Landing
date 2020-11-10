import React, { Component } from 'react';
import './cardBases.scss'

class CardBases extends Component {
    state = {  }
    render() { 
        return ( 
            <section className="card-bases">
                <h6 className="title-bases">BASES Y MECÁNICA</h6>
                <p className="subtitle-bases">BASES</p>
                <p className="text-bases">1. Podrán participar hombres y mujeres de nacionalidad mexicana y/o 
                    extranjeros que sean residentes en la República Mexicaba, mayores de 
                    21 años de edad (deberán con identificación oficial vigente con fotografía),
                    que habiten en la República Mexicana, que sean Socios Club Premier (contar 
                    con su número de Socio Club Premier) y que quieran viajar con un acompañante
                    a alguno de los siguientes destinos para disfrutar de un crucero:
                    Caribe, Estados Unidos de América; Alaska y Estados Unidos de América;
                    Europa (Amsterdam, Países Bajos o Barcelona, España) y Hawai, Estados Unidos
                    de América.
                </p>
                <p className="text-bases">Se deberá hacer del conocimiento de las personas participantes que con
                    el objeto de participar, deberán ser socios activos del Club Premier, lo 
                    anterior para proteger el principio de buena fe de las personas participantes
                    y del público.
                </p>
                <p className="text-bases">2. Cualquier persona que aún no sea Socio Club Premier, lo podrá ser registrándose
                    en la página de Internet <a href ="www.clubpremier.com">www.clubpremier.com</a> 
                    o el micrositio del concurso de las páginas de Internet  
                    <a href="www.wradio.com.mx"> www.wradio.com.mx</a> o 
                    <a href="https://www.marthadebayle.com"> https://www.marthadebayle.com</a>
                </p>
                <p className="text-bases">3. Las personas que sean Socios Club Premier deberán actualizar sus datos
                    (nombre, apellido. correo, electrónico, numero telefónico, etcétera) en la 
                    página de internet <a href="www.clubpremier.com">www.clubpremier.com</a>
                </p>
                <p className="text-bases">4. Los gastos de transportación y hospedaje de los participantes que acudirán a la
                    cabina del programa de radio "Martha Debayle en W", correrán por cuenta y cargo
                    de las personas participantes.
                </p>
            </section>
         );
    }
}
 
export default CardBases;