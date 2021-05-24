import './about.scss'
import { FaGem } from 'react-icons/fa'

const Education = ({ education }) => {

  return (
    <div className='portfolio_resume_panel'>
      <h2 className='portfolio_resume_panel_heading'>{education?.[0].name}</h2>

      {education?.[0]?.data?.length > 0 &&
        education?.[0]?.data?.map(edu => (
          <div className='portfolio_resume_wrapper' key={edu.code}>
            <div className='portfolio_resume_icon'>
              <FaGem />
            </div>
            <div className='portfolio_resume_content'>
              <span className='portfolio_resume_content_date'>{edu.date}</span>
              <h2 className='portfolio_resume_content_title'>{edu.title}</h2>
              <span className='portfolio_resume_content_position'>{edu.position}</span>
              <p>{edu.description}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Education
