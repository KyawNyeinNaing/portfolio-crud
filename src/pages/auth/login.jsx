import styled from 'styled-components'
import { MdCancel } from 'react-icons/md'
import { InputGroup, Input, Label, Button, colors, fontSize } from '@/components'
import { HiUserCircle, HiLockClosed } from 'react-icons/hi'
import '@/styles/login.scss'

const Login = () => {
  return (
    <LoginWrapper image='/uploads/background.jpg'>
      <div className='register_form_container'>
        <div className='register_form_wrapper'>
          <div className='register_form_logo'>
            <h1>Sign In</h1>
          </div>
          <div className='register_form_input'>
            <div className='register_form_icon_wrap'>
              <HiUserCircle />
            </div>
            <input className='input' type='text' placeholder='User Name' />
            <MdCancel color='#4b4b4b' />
          </div>
          <div className='register_form_input'>
            <div className='register_form_icon_wrap'>
              <HiLockClosed />
            </div>
            <input className='input' type='password' placeholder='Password' />
            <MdCancel color='#4b4b4b' />
          </div>
          <div className='register_form_footer'>
            <div className='register_form_footer_flex'>
              <div className='register_form_footer_left'>
                <InputGroup className='custom-check custom_check_group'>
                  <Input type="checkbox" name="check" id='rememberMe' />
                  <Label htmlFor='rememberMe'>
                    <span>Remember Me</span>
                  </Label>
                </InputGroup>
                <p className='register_form_forgot'>Forgot Your Password?</p>
                <p className='click_here'>
                  <span>Click Here</span>
                </p>
              </div>
              <div className='register_form_footer_right'>
                <LoginButton color='#00aaff'>Login</LoginButton>
                <LoginButton color='#3b5998'>Login with Facebook</LoginButton>
                <LoginButton color='#ea4335'>Login with Gmail</LoginButton>
              </div>
            </div>
            <Button style={{ width: '100%' }}>Create an Account</Button>
          </div>
        </div>
      </div>
    </LoginWrapper>
  )
}

const LoginWrapper = styled.div`
  height: 100vh;
  background-image: url("${props => props?.image && props.image}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  input {
    color: var(--white);
  }
`

const LoginButton = styled(Button)`
  min-width: 100%;
  color: ${colors.white};
  margin-bottom: 15px;
  font-size: ${fontSize.md}px;
  background-color: transparent;
  background-color: ${props => props.color};
`

export default Login