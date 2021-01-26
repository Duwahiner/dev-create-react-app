import { useTheme } from '@emotion/react'
import { Flex } from 'rebass'
import Layout from '../Layout'
import { Strong } from '../Logo/styleComponents'
import { Title } from '../Title'

const Trend = (props) => {
  const theme = useTheme()
  return (
    <Layout>
      <Flex width={1} justifyContent='center' alignItems='center'>
        <Title
          color={theme.colors.yellow}
          fontSize='16px'
          fontFamily='Roboto'
        >
          This is the
          <Strong fontSize='16px' color={theme.colors.text}> trend page </Strong>
        </Title>
      </Flex>
    </Layout>
  )
}

export default Trend
