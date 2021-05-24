import Link from 'next/link'
import styled from 'styled-components'
import Layout from '@/layouts/Layout'
import { Section, Container, Row, Col } from '@/components'
import { useEffect } from 'react'
import { FaLongArrowAltDown } from 'react-icons/fa'
import '@/styles/home.scss'

const HomeLayout = styled(Layout)`
  position: fixed;
  width: 100%;
  background: url('${props => props?.data}') no-repeat center / cover;

  header {
    background-color: transparent;
  }
`

const Home = () => {
  useEffect(() => {
    var TxtRotate = function (el, toRotate, period) {
      this.toRotate = toRotate
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000
      this.txt = ''
      this.tick()
      this.isDeleting = false
    };

    TxtRotate.prototype.tick = function () {
      var i = this.loopNum % this.toRotate.length
      var fullTxt = this.toRotate[i];

      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1)
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1)
      }

      this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

      var that = this
      var delta = 300 - Math.random() * 100

      if (this.isDeleting) { delta /= 2; }

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period
        this.isDeleting = true
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false
        this.loopNum++
        delta = 500
      }

      setTimeout(function () {
        that.tick();
      }, delta)
    };

    const select = document.querySelector('.txt-rotate')

    const toRotate = select?.getAttribute('data-rotate')
    const period = select?.getAttribute('data-period')
    if (toRotate) {
      new TxtRotate(select, JSON.parse(toRotate), period)
    }
  }, [])

  return (
    <HomeLayout title='Portfolio' data='/uploads/banner.jpg'>
      <Section>
        <Container>
          <Row>
            <Col space='12'>
              <div className='portfolio_banner'>
                <span className='portfolio_banner_subheading'>Hi!</span>
                <div className='portfolio_profile'>
                  <div className='portfolio_img'>
                    <img className='portfolio_profile_img' src='/icons/profile_img.jpg' alt='profile' />
                  </div>
                  <h1>Welcome from my site</h1>
                </div>
                <h2>
                  <span className="txt-rotate" data-period="2000" data-rotate='["I am a web developer", "I love a code"]'></span>
                </h2>
              </div>

              <div className='portfolio_mouse'>
                <div className='portfolio_mouse_icon'>
                  <Link href='/about'>
                    <a>
                      <FaLongArrowAltDown />
                    </a>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </HomeLayout>
  )
}

export default Home
