import './about.scss'
import { FaGem } from 'react-icons/fa'

const Experience = ({ experience }) => {
  console.log(experience)

  return (
    <div className='portfolio_resume_panel'>
      <h2 className='portfolio_resume_panel_heading'>{experience?.[0]?.name}</h2>

      {experience?.[0]?.data?.length > 0 &&
        experience?.[0]?.data?.map(exp => (
          <div className='portfolio_resume_wrapper'>
            <div className='portfolio_resume_icon'>
              <FaGem />
            </div>
            <div className='portfolio_resume_content'>
              <span className='portfolio_resume_content_date'>{exp.date}</span>
              <h2 className='portfolio_resume_content_title'>{exp.title}</h2>
              <span className='portfolio_resume_content_position'>{exp.position}</span>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Experience
