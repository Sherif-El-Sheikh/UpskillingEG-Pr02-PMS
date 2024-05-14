import styled from 'styled-components'
import bg1 from '../../assets/images/bg1.png'
import bg2 from '../../assets/images/bg2.png'
import bg3 from '../../assets/images/bg3.png'

const AuthContainer = styled.div<{ $bg: string }>`
  background-image: ${({ $bg }) =>
    `url(${$bg === '1' ? bg1 : $bg === '2' ? bg2 : bg3})`};
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  height: auto;
  min-height: 100vh;

  .auth-wrapper {
    min-height: 100vh;
  }
`

export default AuthContainer
