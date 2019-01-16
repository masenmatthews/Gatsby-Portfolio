import React from 'react'
import PropTypes from 'prop-types'

import masen from '../images/masenmatthews.jpg'
import code from '../images/code.jpg'
import letter from '../images/letter.jpeg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={masen} alt="picture of Masen Matthews" /></span>
            <p>I'm a web developer based in Portland, Oregon. My background is primarily rooted in JavaScript, Ruby, and Python. I also have experience using technologies like Git, Ruby On Rails, React, Angular, and SQL. I am constantly adding to this list and love embracing oppurtunities to learn about new languages, frameworks, and development tools. If you're interested in checking out my latest coding endeavors, feel free to check out my <a href="https://github.com/masenmatthews">GitHub</a></p>

            <p>My main passion for web development lies in the realm of accessibility. I want to make the web a more inclusive place for people with disabilities and I ultimately dream of finding a place in the tech industry that allows me to help disabled individuals succeed with technology. Similarly, I'm passionate about using technology as a means of fostering social change, sustainability, and socioeconomic mobility for those in need.</p>

            <p>Builiding community inside and outside of the tech world is important to me as well. One of my more recent accomplishments has involved starting and operating a social organization called Portland Future Leaders In Tech (pdxFLIT). We host monthly events and operate as a welcoming, safe space for new developers and tech affiliates while providing mentorship and education oppurtunities. You can learn more about pdxFLIT <a href="https://www.meetup.com/pdxFLIT-Portland-Future-Leaders-In-Tech/">here!</a></p>

            <p>My hobbies and interests outside of technology primarily consist of activities related to food and music. I can generally be found frequenting shows at Portland venues like Wonder Ballroom and Doug Fir Lounge, playing guitar, and diving into the newest and loudest bands popping up across the horizon. I also enjoy concocting new recipes and exploring all of the wonderful food options that the city has to offer.</p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          <span className="image main"><img src={code} alt="Black and white photo of a laptop with coding window open on the display." /></span>
          <h3>AccessiReference</h3>
          <h4><a href="https://github.com/masenmatthews/AccessiReference">Repository |</a><a href="https://practical-nightingale-ecd7dc.netlify.com/"> Live Preview</a></h4>
          <p>AccessiReference is designed to act as a simple, convienent reference for accessibility functionality. The goal of this app is to make it easy for developers to learn more about accessible design choices so that they can practice adding accessibility features to their applications. This application is currently in progress. It is being completed while I work through Deque University's online web accessibility curriculum.</p>

          <h3>Northwest Coffee Company</h3>
          <h4><a href="https://github.com/masenmatthews/Rails_Northwest_Coffee_Company">Repository |</a><a href="https://murmuring-wildwood-94431.herokuapp.com/"> Live Preview</a></h4>
          <p>NWCC is a sample site made for a fictitious coffee marketplace. It utilizes the Faker Ruby gem to seed the items and reviews into the database. Creating this site helped me learn more about Ruby On Rails, styling, and databases.</p>

          <h3>Angular Study App</h3>
          <h4><a href="https://github.com/masenmatthews/Angular_Study_App">Repository |</a><a href="https://angular-teameek-study-app.firebaseapp.com"> Live Preview</a></h4>
          <p>This is a collaborative study app that was made with Angular 2. The app has blog, forum, and live chat features to help collaborators succeed. It also possesses authentication functionality, hosting and database features through Firebase, and Materialize styling.</p>

          <h3>React Weather App</h3>
          <h4><a href="https://github.com/masenmatthews/React-Weather-App">Repository |</a><a href="#"> Live Preview Coming Soon</a></h4>
          <p>This is a simple weather app that was built with React. It pulls weather data from the OpenWeather API when the user enters a city and the country that it is in. This project has helped me learn more about React, state, and pulling data from APIs.</p>

          <h3>More projects coming soon!</h3>

          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
        <h2 className="major">Contact</h2>
        <span className="image main"><img src={letter} alt="Black and white photo of a laptop with coding window open on the display." /></span>
          <p>Interested in connecting? I can be reached at masenmatthews@gmail.com. Alternatively, feel free to reach out on Twitter, GitHub, or LinkedIn using the buttons below.
          </p>
          <ul className="icons">
            <li><a href="https://twitter.com/masen_matthews?lang=en" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="https://github.com/masenmatthews" className="icon fa-github"><span className="label">GitHub</span></a></li>
            <li><a href="https://www.linkedin.com/in/masen-matthews-codes/" className="icon fa-linkedin"><span className="label">GitHub</span></a></li>
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
