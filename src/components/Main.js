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
          <h1 className="major">About</h1>
          <span className="image main"><img src={masen} alt="Masen Matthews" /></span>
            <p>I'm a software developer based in Portland, Oregon. My background is primarily rooted in JavaScript, Ruby, and Python. I also have experience using technologies like Git, Ruby On Rails, React, Angular, and SQL. I am constantly adding to this list and love embracing oppurtunities to learn about new languages, frameworks, and development tools. My immediate goals are centered around finding a full time position in the world of tech that allows me to learn, grow, and work alongside a team of inpsiring people. I'm quick to embrace challenges and I find gratification in diving into the unknown. If you're interested in checking out my latest coding endeavors, feel free to take a look at my <a href="https://github.com/masenmatthews" target="_">GitHub</a></p>

            <p>A large part of my passion for software development lies in the realm of accessibility. I want to make the web a more inclusive place for people with disabilities and I ultimately dream of finding a place in the tech industry that allows me to work in this capacity. Similarly, I'm passionate about using technology as a means of fostering social change, sustainability, and socioeconomic mobility for those in need.</p>

            <p>Builiding community inside and outside of the tech world is important to me as well. One of my more recent accomplishments has involved starting and operating a community organization called Portland Future Leaders In Tech (pdxFLIT). We host monthly events and operate as a welcoming, safe space for new developers and tech affiliates while providing mentorship and education oppurtunities. You can learn more about pdxFLIT <a href="https://www.meetup.com/pdxFLIT-Portland-Future-Leaders-In-Tech/" target="_">here!</a></p>

            <p>My hobbies and interests outside of technology primarily consist of activities related to food and music. I can generally be found frequenting shows at Portland venues like Wonder Ballroom and Doug Fir Lounge, playing guitar, and diving into the newest and loudest bands popping up across the horizon. I also enjoy concocting new recipes and exploring all of the wonderful food options that the city has to offer.</p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h1 className="major">Work</h1>
          <span className="image main"><img src={code} alt="Laptop with coding window open on the display." /></span>
          <h2 className="major">Personal projects</h2>

          <h3>Northwest Coffee Company</h3>
          <h4><a href="https://github.com/masenmatthews/Rails_Northwest_Coffee_Company" target="_">Repository |</a><a href="https://murmuring-wildwood-94431.herokuapp.com/" target="_"> Live Preview</a></h4>
          <p>NWCC is a sample site made for a fictitious coffee marketplace. The site has CRUD functionality that pushes into a SQL database, which has associations between products and reviews. It also utilizes the Faker gem to seed the products and reviews into the database, which you can see when you visit the site. Creating this app helped me learn more about Ruby On Rails, styling, and databases.</p>

          <h3> Portland Future Leaders In Tech (pdxFLIT)</h3> 
          <h4><a href = "https://github.com/PDXFlit/website" target = "_"> Repository | </a>
          <a href="https://pdxflit.com/" target= "_"> Live Preview</a></h4> 
          <p>I helped build the main pdxFLIT site, which showcases the local <a href = "https://www.meetup.com/pdxFLIT-Portland-Future-Leaders-In-Tech/"
          target = "_"> meetup </a> that I started in April 2018 and continue to run. We are working on adding open source documentation to the site so that we can help people get into the world of open source make their first contributions. My specific contributions to this site included styling, making the "about" and "contact" pages, and writing the organization's Code of Conduct. I have also played a role in merging branches and reviewing pull requests. This site utilizes React and Gatsby.</p>

          <h3>Angular Study App</h3>
          <h4><a href="https://github.com/masenmatthews/Angular_Study_App" target="_">Repository |</a><a href="https://angular-teameek-study-app.firebaseapp.com" target="_"> Live Preview</a></h4>
          <p>This is a collaborative study app that was made with Angular 2. The app has blog, forum, and live chat features to help collaborators succeed. On the software side, it possesses authentication features and CRUD functionality. The site utilizes Firebase for hosting and database functionality and it is styled with Materialize CSS.</p>

          <h3>React Weather App</h3>
          <h4><a href="https://github.com/masenmatthews/React-Weather-App" target="_">Repository |</a><a href="https://agitated-franklin-55a50d.netlify.com/" target="_"> Live Preview</a></h4>
          <p>This is a simple weather app that was built with React. It pulls weather data from the OpenWeather API when the user enters a city and the country that it is in. This project helped me learn more about React, state, and pulling data from APIs.</p>

          <h3>BookPlace (in progress)</h3>
          <h4><a href="https://github.com/masenmatthews/CS50W-Project1" target="_">Repository |</a> Live Preview Coming Soon</h4>
          <p>This is a site that I'm building as I go through Harvard's CS50W EdX course. It utilizes Python, Flask, SQLAlchemy, and PostgreSQL. It also draws data from the Goodreads API.</p>

          <h2 className="major">Talks</h2>
          <h3>Donut.js (11/2018)</h3>
          <h3>Developing for All: The Who, What, and Why of Accessibility in Technology</h3>
          <h4>< a href="https://www.youtube.com/watch?v=3Ktk7UOmdqs&index=2&list=PLclEcT4yxER43F0Nwhc30A4nwJujcATjl" target = "_" > Video recording </a></h4>
          <p>A talk that I gave at a Portland Meetup about the importance of accessibility in technology.</p>

          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
        <h1 className="major">Contact</h1>
        <span className="image main"><img src={letter} alt="Pen on paper" /></span>
          <p>Interested in connecting? I can be reached at masenmatthews@gmail.com. Alternatively, feel free to reach out on Twitter, GitHub, or LinkedIn using the buttons below.
          </p>
          <ul className="icons">
            <li><a href="https://twitter.com/masen_matthews?lang=en" target="_" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="https://github.com/masenmatthews" target="_" className="icon fa-github"><span className="label">GitHub</span></a></li>
            <li><a href="https://www.linkedin.com/in/masen-matthews-codes/" target="_" className="icon fa-linkedin"><span className="label">GitHub</span></a></li>
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
