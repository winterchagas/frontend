import React, {Component} from 'react';
import Footer from '../Footer/Footer.jsx';
import {Link} from 'react-router-dom';

import './style.scss'

class AboutUs extends Component {

  generateTopButtons(){
    return (
      <div className="top_buttons">
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>
    )
  }

  generateAnimation (question1,question2,question3,question4) {
    return (
      <div className="animation">
        <div className="content__container">
          <ul className="content__container__list">
            <li className="content__container__list__item">{question1}</li>
            <li className="content__container__list__item">{question2}</li>
            <li className="content__container__list__item">{question3}</li>
            <li className="content__container__list__item">{question4}</li>
          </ul>
        </div>
      </div>
    )
  }

  generateHeaderArea(questions){
    return(
      <section className="header_area">
        {this.generateTopButtons()}
        {this.generateAnimation(questions[0],questions[1],questions[2],questions[3])}
      </section>
    )
  }

  generateInfo (title,body) {
    return (
      <div className="info-area">
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    )
  }



  render() {
    return (
      <div className="about_us-container">
        <div>
            {this.generateHeaderArea(
              [
              'Are you actively looking for job?',
              'How you track your job application?',
              'What are challenges you face?',
              'Are you already part of fast growing Open Source world?'
              ]
            )}
            {this.generateInfo(
              'Vision',
              'Build egoless, collaborative community who continuously track, learn from job application experience and succeed'
            )}
            {this.generateInfo(
              'Our Team',
              'Team of passioned engineers with same core values, driving for impact everyday'
            )}
        </div>
        <div className="footer-bottom">
            <Footer/>
        </div>
      </div>
    );
  }
}

export default AboutUs;