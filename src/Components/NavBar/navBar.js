import React, { Component } from 'react';
import './navBar.scss';
import $ from 'jquery';

class NavBar extends Component {
    state = { windowWidth: 0 }

    handleScroll() {
        const sections = document.querySelectorAll("section[id]");
        let scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 200;
            let sectionId = current.getAttribute("id");

            if (
                scrollY > sectionTop &&
                scrollY <= sectionTop + sectionHeight
              ){
                let a= document.querySelector(".navbar a[href*=" + sectionId + "]");
                let li = a.parentElement;
                li.classList.add("active");
              } else {
                let a= document.querySelector(".navbar a[href*=" + sectionId + "]");
                let li = a.parentElement;
                li.classList.remove("active");

              }
            });

        
        if ($("#menu").offset().top > 56) {
            $("#menu").addClass("nav-bg-darkBlue");
        } else {
            $("#menu").removeClass("nav-bg-darkBlue");
        }
    }
    handleResize = () =>{
        this.setState({ windowWidth: window.innerWidth})
        if(this.state.windowWidth <= 575){
            $("#menu").addClass("bg-blue");
        }
        else{
            $("#menu").removeClass("bg-blue");
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('resize', this.handleResize);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('resize', this.handleResize);
    }
    setActive = (e) => {
        let li = e.target.parentElement;
        
        if (li.classList.contains("active")) {
            return false;
        } else {
            let links = li.parentElement.children;
            for (let i = 0; i < links.length; i++) {
                links[i].classList.remove("active");
            }
            li.classList.add("active");
        }
    }
    renderLinks = () => {
        return (
            this.props.data.links.map((link, index) => {
                return (
                    <li className={index === 0 ? 'nav-item active' : 'nav-item'}
                        key={index}>
                        <a className="nav-link" href={`#${link.toLowerCase()}`}
                            onClick={this.setActive}
                        >{link}</a>
                    </li>
                )
            })
        )
    }
    render() {
        return (
            <nav className={`navbar navbar-expand-sm navbar-dark ${this.props.data.variant}`} id="menu">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        {this.renderLinks()}
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavBar;