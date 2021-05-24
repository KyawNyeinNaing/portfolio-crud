import Head from 'next/head'
import Link from 'next/link'
import MessengerCustomerChat from 'react-messenger-customer-chat'
import { useEffect, useState } from 'react'
import { Main, Copyright, Container, Row, Col, MenuIcon } from '../components'
import { openDrawer, closeDrawer } from '../components/utils'

import { FcInfo } from 'react-icons/fc'
import { BsToggleOn, BsToggleOff } from 'react-icons/bs'
import { FaPhoneAlt, FaMailBulk, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'

import './layout.scss'

const Layout = ({ children, title, keyword, desc, className }) => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', localStorage.getItem('theme'))
    setTheme(localStorage.getItem('theme'))

    window.addEventListener('openDrawer', openDrawer())

  }, [])

  const switchTheme = () => {
    if (theme === 'light') {
      saveTheme('dark')
    } else {
      saveTheme('light')
    }
  }

  const saveTheme = (theme) => {
    localStorage.setItem('theme', theme)
    setTheme(theme)
    document.documentElement.setAttribute('data-theme', theme)
  }

  return (
    <article className={className}>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='keywords' content={keyword} />
        <meta name='description' content={desc} />
        <meta charSet='utf-8' />
        <title>{title}</title>
      </Head>
      <header className='portfolio_header'>
        <nav className='portfolio_nav'>
          <Container>
            <Row>
              <Col space='12'>
                <div className='portfolio_nav_wrapper'>
                  <Link href='/'>
                    <a className='portfolio_nav_logo'>
                      <div className='portfolio_nav_logo_name'>
                        <span>T</span>hetPai
                      </div>
                    </a>
                  </Link>
                  <ul>
                    <li onClick={() => closeDrawer()}>
                      <FcInfo />
                      <Link href='/about'>About</Link>
                    </li>
                    <li onClick={() => closeDrawer()}>
                      <FcInfo />
                      <Link href='/about#project'>Projects</Link>
                    </li>
                    <li onClick={() => closeDrawer()}>
                      <FcInfo />
                      <Link href="/contact">Contact me</Link>
                    </li>
                    <li className='themeSwitcher' onClick={switchTheme}>
                      {theme === 'dark' && <BsToggleOn className='themeSwitcher_svg' />}
                      {theme === 'light' && <BsToggleOff className='themeSwitcher_svg' />}
                    </li>
                  </ul>
                  <MenuIcon className='menu-btn portfolio_menu_btn'>
                    <div className="menu-icon" />
                  </MenuIcon>
                </div>
              </Col>
            </Row>
          </Container>
        </nav>
      </header>
      <Main>
        {children}
      </Main>
      <footer className='portfolio_footer'>
        <Copyright data='Thet Pai'>
          <Container>
            <Row>
              <Col md='6'>
                <div className='portfolio_footer_contact_pannel'>
                  <h2 className='portfolio_nav_logo_heading'>About</h2>
                  <p>I always wanted to be a great developer.</p>

                  <div className='portfolio_footer_contact_social'>
                    <Link href='https://www.facebook.com/kyawnyein.naing.7'>
                      <a target='_blank'>
                        <FaFacebookF />
                      </a>
                    </Link>
                    <Link href='https://twitter.com/ThetPai95'>
                      <a target='_blank'>
                        <FaTwitter />
                      </a>
                    </Link>
                    <Link href='https://www.instagram.com/oo_thet_pai/'>
                      <a target='_blank'>
                        <FaInstagram />
                      </a>
                    </Link>
                  </div>
                </div>
              </Col>
              <Col md='6'>
                <div className='portfolio_footer_contact_pannel'>
                  <h2 className='portfolio_nav_logo_heading'>Have a Quations?</h2>
                  <div className='portfolio_footer_contact'>
                    <FaPhoneAlt />
                    <div className='portfolio_footer_contact_text'>
                      <Link href='tel:+959420170266'>
                        <a>+959-42017-026-6</a>
                      </Link>
                    </div>
                  </div>
                  <div className='portfolio_footer_contact'>
                    <FaMailBulk />
                    <div className='portfolio_footer_contact_text'>
                      <Link href='mailto:thetpai.tp27@gmail.com'>
                        <a>thetpai.tp27@gmail.com</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Copyright>
        {/* <MessengerCustomerChat pageId="101864742086719" appId='289516996157636' /> */}
      </footer>
    </article>
  )
}

Layout.defaultProps = {
  title: 'My Porifolio',
  keyword: 'Web Development, Programming',
  desc: 'Get the latest news in web dev'
}

export default Layout