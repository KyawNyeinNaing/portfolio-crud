import styled from 'styled-components'
import { Row, Col } from '../core'
import './about.scss'

const ProgressBar = styled.div`
  width: ${props => props?.skill}%;
`

const Skills = ({ skills }) => {
  return (
    <div className='portfolio_resume_panel'>
      <h2 className='portfolio_resume_panel_heading'>{skills?.[0]?.name}</h2>

      <Row>
        {skills?.[0]?.skills?.length > 0 &&
          skills?.[0]?.skills?.map(skill => (
            <Col md='6'>
              <div className='portfolio_progress_panel'>
                <div className='portfolio_progress_heading'>
                  <h5 className='portfolio_progress_heading'>{skill?.language}</h5>
                  <span>{skill?.skill} %</span>
                </div>
                <div className='portfolio_progress_wrapper'>
                  <ProgressBar className='portfolio_progress_bar' skill={skill?.skill} />
                </div>
              </div>
            </Col>
          ))
        }
      </Row>
    </div>
  )
}

export default Skills
