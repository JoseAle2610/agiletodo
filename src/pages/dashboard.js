import {HomeTemplate} from 'templates/HomeTemplate'

import {Tasks} from 'components/Tasks'
import {Goals} from 'components/Goals'


export default function Dashboard() {

  return (
    <HomeTemplate title='AgileTodo - Dashboard'>

      <Goals apiUrl={'https://62c0e85fc134cf51ced58604.mockapi.io/api/goals'}/>
      <Tasks apiUrl={'https://62c0e85fc134cf51ced58604.mockapi.io/api/tasks'}/>
      
    </HomeTemplate>
  )
}
