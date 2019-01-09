import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={pic01} alt="" /></span>
          <p>I'm a web developer based in Portland, Oregon. My background is primarily rooted in JavaScript, Ruby, and Python. I also have experience using technologies like Git, Ruby On Rails, React, Angular, and SQL. I am constantly adding to this list and love embracing oppurtunities to learn about new languages, frameworks, and development tools. If you're interested in checking out my latest coding endeavors, feel free to check out my <a href="https://github.com/masenmatthews">GitHub</a></p>

          <p>My main passion for web development lies in the realm of accessibility. I want to make the web a more inclusive place for people with disabilities and I ultimately dream of finding a place in the tech industry that allows me to help disabled individuals succeed with technology. Similarly, I'm passionate about using technology as a means of fostering social change, sustainability, and socioeconomic mobility for those in need.</p>

          <p>Builiding community inside and outside of the tech world is important to me as well. One of my more recent accomplishments has involved starting and operating a social organization called Portland Future Leaders In Tech (pdxFLIT). We host monthly events and operate as a welcoming, safe space for new developers and tech affiliates while providing mentorship and education oppurtunities. You can learn more about pdxFLIT <a href="https://www.meetup.com/pdxFLIT-Portland-Future-Leaders-In-Tech/">here!</a></p>

          <p>My hobbies and interests outside of technology primarily consist of activities related to food and music. I can generally be found frequenting shows at Portland venues like Wonder Ballroom and Doug Fir Lounge, playing guitar, and diving into the newest and loudest bands popping up across the horizon. I also enjoy concocting new recipes and exploring all of the wonderful food options that the city has to offer.</p>

          <p></p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <h3>AccessiReference</h3>
          <p>AccessiReference is designed to act as a simple, convienent reference for accessibility functionality. The goal of this app is to make it easy for developers to learn more about accessible design choices so that they can practice adding accessibility features to their applications. This application is currently in progress. It is being completed while I work through Deque University's online web accessibility curriculum.</p>

          <h3>Northwest Coffee Company</h3>
          <p>NWCC is a sample site made for a fictitious coffee marketplace. It utilizes the Faker Ruby gem to seed the items and reviews into the database. Creating this site helped me learn more about Ruby On Rails, styling, and databases.</p>

          <h3>Angular Study App</h3>
          <p>This is a collaborative study app that was made with Angular 2. The app has blog, forum, and live chat features to help collaborators succeed. It also possesses authentication functionality, hosting and database features through Firebase, and Materialize styling.</p>

          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
