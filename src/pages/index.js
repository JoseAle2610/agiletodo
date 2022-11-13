import Link from "next/link";
import { HomeTemplate } from "templates/HomeTemplate";
import { NavbarContainer } from "uicomponents/Navbar";

export default function Home () {
  return (
    <HomeTemplate title='AgileTodo - Home'>
      <NavbarContainer></NavbarContainer>
      <div className="is-flex is-justify-content-center is-align-items-center is-flex-direction-column" style={{minHeight: '80vh'}}>
        <h1 className='is-size-1 is-inline-block has-text-weight-bold '>
          AgileTodo
        </h1>
        <p>La app mas comoda para organizar tus metas y tareas</p>
        <div className="buttons m-4">
          <Link href='login'>
            <a className="button is-primary">Login</a>
          </Link>
          <Link href='dashboard'>
            <a className="button is-primary is-outlined">SingUp</a>
          </Link>
        </div>
        <div className="tags">
          <span className="tag is-light">Fork</span>
          <span className="tag is-light">Star</span>
          <span className="tag is-light">Github</span>
        </div>

      </div>
    </HomeTemplate>
  )
}
