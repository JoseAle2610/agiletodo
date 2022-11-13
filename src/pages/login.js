import {HomeTemplate} from 'templates/HomeTemplate'

export default function Login () {
  return (
    <HomeTemplate title='AgileTodo - Login'>
      <div className="columns is-multiline">
        <div className="column is-8 is-offset-2 register">
          <div className="columns">
            <div className="column left">
              <h1 className="title is-1">Super Cool Website</h1>
              <h2 className="subtitle colored is-4">Lorem ipsum dolor sit amet.</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis ex deleniti aliquam tempora libero excepturi vero soluta odio optio sed.</p>
            </div>
            <div className="column right has-text-centered">
              <h1 className="title is-4">Sign up today</h1>
              <p className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
              <form>
                <div className="field">
                  <div className="control">
                    <input className="input is-medium" type="text" placeholder="Name" />
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <input className="input is-medium" type="email" placeholder="Email" />
                  </div>
                </div>
                <button className="button is-block is-primary is-fullwidth is-medium">Submit</button>
                <br />
                <small><em>Lorem ipsum dolor sit amet consectetur.</em></small>
              </form>
            </div>
          </div>
        </div>
        <div className="column is-8 is-offset-2">
          <br />
          <nav className="level">
            <div className="level-left">
              <div className="level-item">
                <span className="icon">
                  <i className="fab fa-twitter"></i>
                </span> &emsp;
                <span className="icon">
                  <i className="fab fa-facebook"></i>
                </span> &emsp;
                <span className="icon">
                  <i className="fab fa-instagram"></i>
                </span> &emsp;
                <span className="icon">
                  <i className="fab fa-github"></i>
                </span> &emsp;
                <span className="icon">
                  <i className="fas fa-envelope"></i>
                </span>
              </div>
            </div>
            <div className="level-right">
              <small className="level-item">
                &copy; Super Cool Website. All Rights Reserved.
              </small>
            </div>
          </nav>
        </div>
      </div>
      <style jsx>{`

:root {
      --brandColor: hsl(166, 67%, 51%);
      --background: rgb(247, 247, 247);
      --textDark: hsla(0, 0%, 0%, 0.66);
      --textLight: hsla(0, 0%, 0%, 0.33);
    }

    body {
      background: var(--background);
      height: 100vh;
      color: var(--textDark);
    }

    .field:not(:last-child) {
      margin-bottom: 1rem;
    }

    .register {
      margin-top: 10rem;
      background: white;
      border-radius: 10px;
    }

    .left,
    .right {
      padding: 4.5rem;
    }

    .left {
      border-right: 5px solid var(--background);
    }

    .left .title {
      font-weight: 800;
      letter-spacing: -2px;
    }

    .left .colored {
      color: var(--brandColor);
      font-weight: 500;
      margin-top: 1rem !important;
      letter-spacing: -1px;
    }

    .left p {
      color: var(--textLight);
      font-size: 1.15rem;
    }

    .right .title {
      font-weight: 800;
      letter-spacing: -1px;
    }

    .right .description {
      margin-top: 1rem;
      margin-bottom: 1rem !important;
      color: var(--textLight);
      font-size: 1.15rem;
    }

    .right small {
      color: var(--textLight);
    }

    input {
      font-size: 1rem;
    }

    input:focus {
      border-color: var(--brandColor) !important;
      box-shadow: 0 0 0 1px var(--brandColor) !important;
    }

    .fab,
    .fas {
      color: var(--textLight);
      margin-right: 1rem;
    }
        `}
  </style>
    </HomeTemplate>
  )
}
