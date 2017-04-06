import { Route, Switch } from 'react-router-dom'
import * as routerMap from '../../routes'
import FindsIndex from './FindsIndex'

export default () => (
  <Switch>
    <Route path={routerMap.FINDS_INDEX} component={FindsIndex} />
  </Switch>
)
