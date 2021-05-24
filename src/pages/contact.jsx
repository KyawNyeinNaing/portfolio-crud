import Link from 'next/link'
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import Layout from '../layouts/Layout'
import { Col, Container, Row, Section, Button, Loading } from '@/components'
import Input from '../components/form/Input'
import TextArea from '../components/form/TextArea'
import'../styles/contact.scss'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { FcHome, FcCallback, FcFeedback, FcGlobe } from 'react-icons/fc'

const Contact = () => {

  let initialValues = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }

  const onDataSubmit = (values, actions) => {
    actions.setSubmitting(true)
    setTimeout(async () => {
      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values)
        })

        if (res.status === 200) {
          actions.resetForm({ name: '', email: '', phone: '', subject: '', message: '' })
          toast.success('Your email has been sent!', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000
          })
        } else {
          toast.error('Email not sent!', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000
          });
        }
      } catch (error) {
        console.log('error', error)
      }
    }, 1000)
  }

  return (
    <Layout title='Contact Me' className='poryfolio_me'>
      <Section>
        <Container>
          <Row>
            <Col space='12'>
              <div className='portfolio_contact_heading_wrapper'>
                <h2 className='portfolio_contact_heading'>
                  Contact Me
              </h2>
                <p>Please contact me via email or phone</p>
              </div>
            </Col>
            <Col md='3'>
              <div className='portfolio_contact_col'>
                <div className='portfolio_contact_icon'>
                  <FcHome />
                </div>
                <div className='portfolio_contact'>
                  <h3>Address</h3>
                  <p>1/302 shwekainery house place, Yangon.</p>
                </div>
              </div>
            </Col>
            <Col md='3'>
              <div className='portfolio_contact_col'>
                <div className='portfolio_contact_icon'>
                  <FcCallback />
                </div>
                <div className='portfolio_contact'>
                  <h3>Contact Number</h3>
                  <Link href='tel:+959420170266'>
                    <a>+959-42017-026-6</a>
                  </Link>
                </div>
              </div>
            </Col>
            <Col md='3'>
              <div className='portfolio_contact_col'>
                <div className='portfolio_contact_icon'>
                  <FcFeedback />
                </div>
                <div className='portfolio_contact'>
                  <h3>Email Address</h3>
                  <Link href='mailto:thetpai.tp27@gmail.com'>
                    <a target='_blank'>thetpai.tp27@gmail.com</a>
                  </Link>
                </div>
              </div>
            </Col>
            <Col md='3'>
              <div className='portfolio_contact_col'>
                <div className='portfolio_contact_icon'>
                  <FcGlobe />
                </div>
                <div className='portfolio_contact'>
                  <h3>Website</h3>
                  <a>coming</a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>

      <Section>
        <Container>
          <Row>
            <Col md='6'>
              <div className='portfolio_contact_form_image'
                style={
                  { backgroundImage: 'url("/uploads/contact.jpg")' }
                }
              />
            </Col>
            <Col md='6'>
              <div className='portfolio_contact_form'>
                <Formik
                  enableReinitialize
                  initialValues={initialValues}
                  validationSchema={
                    Yup.object({
                      name: Yup.string()
                        .max(20, 'Must be 20 characters or less')
                        .required('Your Name is required'),
                      email: Yup.string()
                        .email('Invalid email address')
                        .required('Email is required'),

                      subject: Yup.string()
                        .required('Attention is required'),
                      message: Yup.string()
                        .max(200, "Your message is too long!")
                        .required('Message is required')
                    })
                  }
                  onSubmit={(values, actions) => onDataSubmit(values, actions)}
                >
                  {formikProps => (
                    <Form>
                      <Input label="Your Name" name="name" type="text" placeholder="Enter your name" require={true} />
                      <Input label="Your Email" name="email" type="email" placeholder="Enter your email" require={true} />
                      <Input label="Subject" name="subject" type="text" placeholder="Subject" require={true} />
                      <TextArea label="Message" name="message" type="text" require={true} rows_height="150" />
                      <Button className='primary' type="submit">
                        {formikProps.isSubmitting ? <Loading /> : 'Send Message'}
                      </Button>
                    </Form>
                  )}
                </Formik>
                <ToastContainer />
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </Layout>
  )
}

export default Contact
