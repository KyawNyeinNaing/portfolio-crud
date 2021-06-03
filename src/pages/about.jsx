import { useEffect, useState } from 'react'
import Link from 'next/link'
import Layout from '@/layouts/Layout'
import { Education, Experience, Skill } from '@/components/about'
import { Button, Col, Container, Row, Section } from '@/components'

import '@/styles/about.scss'

import { GiArchiveResearch } from 'react-icons/gi'

import { resume, projects } from '../../data'

const About = () => {
  const [show, setShow] = useState('education')
  const [theme, setTheme] = useState()

  const filteredEdu = resume?.filter(resume => resume?.name === 'Educations')
  const filteredExp = resume?.filter(resume => resume?.name === 'Experience')
  const filteredSkill = resume?.filter(resume => resume?.name === 'Skills')

  useEffect(() => {
    let currentOffset = document.querySelector('#project')?.offsetTop - 100
    setTheme(localStorage.getItem('theme'))
    // window.scrollTo(0, currentOffset)
  }, [])

  return (
    <Layout title='About' className='poryfolio_about'>
      <Section>
        <Container>
          <Row>
            <Col md='4'>
              <div className='portfolio_img'>
                <img src='./uploads/about.jpg' alt='about' />
              </div>
            </Col>

            <Col md='8'>
              <div className='portfolio_detail_panel'>
                <h2 className='portfolio_detail_panel_heading'>
                  Biography
                </h2>
                <p>
                  I am a person who is positive about every spect of life. There are many things I like to do, to see,
                  and to experience. I like to read, I like to think, I like to travel, and so on, And, I like to laugh. I
                  always wanted to be a great developer.
                  This is a brief introduction of myself.
                </p>
                <p>
                  I graduated with my degree in Mathematics last 6 years ago. I choose that field of study because of I 've always been interested in developing websites, web app and application.
                </p>
                <div className='portfolio_detail_panel_row'>
                  <div className='portfolio_detail_panel_label'>Name</div>
                  <div className='portfolio_detail_panel_value'>Kyaw Nyein Naing</div>
                </div>
                <div className='portfolio_detail_panel_row'>
                  <div className='portfolio_detail_panel_label'>Date of birth</div>
                  <div className='portfolio_detail_panel_value'>March 27, 1995</div>
                </div>
                <div className='portfolio_detail_panel_row'>
                  <div className='portfolio_detail_panel_label'>Address</div>
                  <div className='portfolio_detail_panel_value'>Thingangyun, Yangon, Myanmar.</div>
                </div>
                <div className='portfolio_detail_panel_row'>
                  <div className='portfolio_detail_panel_label'>Email</div>
                  <div className='portfolio_detail_panel_value'>
                    <Link href='mailto:thetpai.tp27@gmail.com'>thetpai.tp27@gmail.com</Link>
                  </div>
                </div>
                <div className='portfolio_detail_panel_row'>
                  <div className='portfolio_detail_panel_label'>Phone</div>
                  <div className='portfolio_detail_panel_value'>
                    <Link href='tel:+959420170266'>+959-42017-026-6</Link>
                  </div>
                </div>

                <div className='portfolio_detail_panel_row'>
                  <div className='portfolio_detail_panel_profile'>
                    <h5>Profile</h5>
                    <ul>
                      <li>I have 5 years of relevant frontend development experience.</li>
                      <li>3 years of front-end web programming experience with JavaScript, CSS3, HTML5.</li>
                      <li>2 years of production experience with SPA framework like ReactJS, understand SPA and familiar with REST APIs.</li>
                      <li>I am Proficient in web and mobile frontend development; ReactJS, JavaScript, JSON, HTML 5, CSS, GIT</li>
                      <li>I have experience with React.JS/ Next.JS along with Redux</li>
                      <li>I am understanding on backend technology such as Laravel</li>
                    </ul>
                  </div>
                </div>

                <div className='portfolio_complete_project'>
                  <p><span>20</span> Projects Complete</p>
                  <Link href='/cv.zip'>
                    <a className='portfolio_download' download>
                      Download CV
                    </a>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>

      <Section>
        <Container>
          <Row>
            <Col md='3'>
              <nav className='portfolio_sidenav_sticky'>
                <div className='portfolio_sidenav_wrap'>
                  <div
                    className={`portfolio_sidenav_label ${show === 'education' && 'active'}`}
                    onClick={() => setShow('education')}>Education</div>
                  <div
                    className={`portfolio_sidenav_label ${show === 'experience' && 'active'}`}
                    onClick={() => setShow('experience')}>Experience</div>
                  <div
                    className={`portfolio_sidenav_label ${show === 'skill' && 'active'}`}
                    onClick={() => setShow('skill')}>Skills</div>
                </div>
              </nav>
            </Col>
            <Col md='9'>
              {show === 'education' && <Education education={filteredEdu} />}
              {show === 'experience' && <Experience experience={filteredExp} />}
              {show === 'skill' && <Skill skills={filteredSkill} />}
            </Col>
          </Row>
        </Container>
      </Section>

      <Section>
        <Container>
          <Row>
            <Col space='12'>
              <div className='portfolio_service_wrapper'>
                <h1 className='portfolio_service_heading'>Services</h1>
                <p className='portfolio_service_desc'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                <Row className='portfolio_service_row'>
                  <Col md='5'>
                    <div className='portfolio_service'>
                      <GiArchiveResearch />
                      <div className='portfolio_service_desc'>
                        <h5 className='portfolio_service_desc_title'>
                          Web Developer
                        </h5>
                        <p>
                          A small river named Duden flows by their place and supplies it with the necessary regelialia.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>

      <Section>
        <div className='portfolio_hireme'
          style={
            { backgroundImage: 'url("/uploads/bg_img.jpg")' }
          }
        >
          <div className={`portfolio_hireme_overlay ${theme === 'dark' ? 'dark' : ''}`} />
          <Container>
            <Row>
              <Col space='12'>
                <div className='portfolio_hireme_heading_wrap'>
                  <h2 className='portfolio_hireme_heading'>I'm <span>Avaliable</span> for freelancing</h2>
                  <Link href='https://www.upwork.com/freelancers/~01dd380cc605cafebc'>
                    <a target='_blank'>
                      <Button className='primary'>Hire Me</Button>
                    </a>
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Section>

      <Section id='project' style={{ paddingBottom: 0 }}>
        <div className='portfolio_project_wrapper'>
          <h2 className='portfolio_project_heading'>Projects</h2>
          <p>That's what I did more projects</p>

          <div className='portfolio_project_row'>
            {projects?.length > 0 &&
              projects?.map(project => (
                <Col className='portfolio_project_col' md='4' key={project.project_name}>
                  <Link href={project?.project_link}>
                    <a target='_blank'>
                      <div className='portfolio_project_image'
                        style={
                          { backgroundImage: `url(${project?.project_image})` }
                        }
                      >
                        <div className='portfolio_overlay' />
                        <div className='portfolio_project_name'>
                          <h3>{project?.project_name}</h3>
                          <span>{project?.project_type}</span>
                        </div>
                      </div>
                    </a>
                  </Link>
                </Col>
              ))
            }
          </div>
        </div>
      </Section>
    </Layout>
  )
}

export default About