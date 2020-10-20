import React from 'react';
import "./index.css";


class KeyReviewer extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            pass1: "",
            pass2: ""
        }
    }

    handlerPass1 = (event) => {
        this.setState({pass1: event.target.value});
    }

    handlerPass2 = (event) => {
        this.setState({pass2: event.target.value});
    }

    render()
    {
        return (
            <React.Fragment>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input onChange={this.handlerPass1} type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword2">Repeat Password</label>
                    <input onChange={this.handlerPass2} type="password" className="form-control" id="exampleInputPassword2" />
                </div>

                {
                    ( this.state.pass1 && this.state.pass2 ) && (
                        this.state.pass1 == this.state.pass2 ? <h3> Contraseñas iguales </h3> : <h3> Contraseñas no iguales </h3>
                    )
                }
            </React.Fragment>
        )
    }
}

export default KeyReviewer;