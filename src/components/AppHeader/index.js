import React from 'react'
import deployButton from '../../assets/logo.svg'
import logo from '../../assets/ck_logo.jpg'
import github from '../../assets/github.svg'
import styles from './AppHeader.css' // eslint-disable-line

const AppHeader = (props) => {
  return (
    <header className='app-header'>
      <div className='app-title-wrapper'>
        <div className='app-title-wrapper'>
          <div className='app-left-nav'>
            <img src={logo} className='app-logo' alt='logo' style={{ borderRadius: '50%' }} />
            <div className='app-title-text'>
              <h1 className='app-title'>CK's ToDo</h1>
              <p className='app-intro'>
                Using FaunaDB & Netlify functions
              </p>
            </div>
          </div>
        </div>
        <div className='deploy-button-wrapper'>
          <div className='view-src'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://github.com/crazykay/netlifyApp'>
              <img className='github-icon' src={github} alt='view repo on github' />
              View the source
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default AppHeader
