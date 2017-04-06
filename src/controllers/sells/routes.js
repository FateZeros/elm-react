import { Route, Switch } from 'react-router-dom'
import * as routerMap from '../../routes'
import SellsIndex from './SellsIndex'

export default () => (
  <Switch>
    <Route path={routerMap.SELLS_INDEX} component={SellsIndex} />
  </Switch>
)
