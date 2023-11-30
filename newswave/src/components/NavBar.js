import React from 'react'
import { Link } from 'react-router-dom'


export default function NavBar() {
  return (
    <div>
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">NewsWave</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/business">Business</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment">Entertainment</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/tech">Tech</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/politics">Politics</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/finance">Finance</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/world">World</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sports">Sport</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/economics">Economics</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/science">Science</Link>
                </li>
  

              </ul>

            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}



