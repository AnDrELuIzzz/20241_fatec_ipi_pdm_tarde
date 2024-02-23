import React from 'react'
import  ReactDOM  from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'


const App = () => {
    return (
      <div className="container border rounded mt-2">
        <div className="row">
          <div className="col-12">
            <h1 className="display-5 text-center"> Seus pedidos</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-lg-4">
            <div className="card">
              <div className="card-header text-muted">20/04/2023</div>
              <div className="card-body d-flex">
                <div d-flex align-items-center>
                  <i className="fa-solid fa-house fa-2x"></i>
                </div>
                <div className=" flex-grow-1 ms-2 border">
                  <h4 className="text-center">Livro</h4>
                  <p>Concret Mathematics - Donald Kunth</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-4">
            <div className="card">
              <div className="card-header text-muted">20/04/2023</div>
              <div className="card-body d-flex">
                <div d-flex align-items-center>
                  '<i class="fa-solid fa-gamepad  fa-2x"></i>
                </div>
                <div className=" flex-grow-1 ms-2 border">
                  <h4 className="text-center">Gamepad</h4>
                  <p>Ipega</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-4">
            <div className="card">
              <div className="card-header text-muted">20/04/2023</div>
              <div className="card-body d-flex">
                <div d-flex align-items-center>
                  <i class="fa-solid fa-laptop fa-2x"></i>
                </div>
                <div className=" flex-grow-1 ms-2 border">
                  <h4 className="text-center">Laptop</h4>
                  <p>Lenovo Ideapad S145</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)

