import React, { Component } from 'react';

class Header extends Component {
   constructor(props) {
      super(props);
   };

  render() {
   const { data } = this.props;
    if(data){
      var {data: {name, occupation, companyName, clientName, currentRole }} = this.props;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#skills">Skills</a></li>
            <li><a className="smoothscroll" href="#extraCurriculars">Extra-Curricular</a></li>
            <li><a className="smoothscroll" href="#extraCurriculars">Awards</a></li>
            <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">{name}</h1>
    <h3>I'm a passionate <span>{occupation}</span>, currently working with <span>{companyName}</span> for a client <span>{clientName}</span> as a <span>{currentRole}.</span></h3>
            <hr />
            <ul className="social">
               {networks}
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
