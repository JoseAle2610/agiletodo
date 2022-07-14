import {HomeTemplate} from 'templates/HomeTemplate'
import {Tasks} from 'components/Tasks'
import {Goals} from 'components/Goals'


export default function Home() {

  return (
    <HomeTemplate title='AgileTodo'>

      <Goals apiUrl={'https://62c0e85fc134cf51ced58604.mockapi.io/api/goals'}/>
      <Tasks apiUrl={'https://62c0e85fc134cf51ced58604.mockapi.io/api/tasks'}/>
      
    </HomeTemplate>
  )
}
