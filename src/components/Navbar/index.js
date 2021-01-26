import { useTheme } from '@emotion/react'
import { NavLink } from 'react-router-dom'
import { Box, Flex } from 'rebass'
import { useUrl } from '../../hooks'
import { TextItems } from './styleComponents'

const NavBar = (props) => {
  const theme = useTheme()
  const [url] = useUrl()

  return (
    <Flex
      width={1}
      justifyContent='flex-end'
      alignItems='center'
    >
      <Box ml='0px' display='inline'>
        <NavLink
          to='/'
          activeStyle={{ color: '#ffffff' }}
        >
          <TextItems
            color={url === '/' ? theme.text.primary : theme.colors.textMenu}
          > HOME
          </TextItems>
        </NavLink>
      </Box>

      <Box ml='30px' display='inline'>
        <NavLink to='/explore'>
          <TextItems
            color={url === '/explore' ? theme.text.primary : theme.colors.textMenu}
          > EXPLORE
          </TextItems>
        </NavLink>
      </Box>

      <Box ml='30px' display='inline'>
        <NavLink to='/trend'>
          <TextItems
            color={url === '/trend' ? theme.text.primary : theme.colors.textMenu}
          > TREND
          </TextItems>
        </NavLink>
      </Box>

      <Box ml='30px' display='inline'>
        <NavLink to='/library'>
          <TextItems
            color={url === '/library' ? theme.text.primary : theme.colors.textMenu}
          > LIBRARY
          </TextItems>
        </NavLink>
      </Box>

      <Box ml='30px' display='inline'>
        <NavLink to='/contact'>
          <TextItems
            color={url === '/contact' ? theme.text.primary : theme.colors.textMenu}
          > CONTACT
          </TextItems>
        </NavLink>
      </Box>
    </Flex>
  )
}

export default NavBar
