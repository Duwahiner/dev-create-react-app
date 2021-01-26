import { Switch, Route } from 'react-router-dom'
import { withTheme } from '@emotion/react'
import { Flex } from 'rebass'
import HomePage from './pages/HomePage'
import ExplorePage from './pages/ExplorePage'
import TrendPage from './pages/TrendPage'
import LibraryPage from './pages/LibraryPage'
import ContactPage from './pages/ContactPage'

const App = withTheme(({ theme }) => {
  return (
    <Flex>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/explore' component={ExplorePage} />
        <Route exact path='/trend' component={TrendPage} />
        <Route exact path='/library' component={LibraryPage} />
        <Route exact path='/contact' component={ContactPage} />
      </Switch>
    </Flex>
  )
})

export default App
