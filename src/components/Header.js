import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-diamond"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Masen Matthews</h1>
                <p>Full stack web developer with a passion for accessibility, community, and advocacy.</p>
            </div>
        </div>
        <nav>
            <ul>
              <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>About</a></li>
              <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Work</a></li>
              <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
