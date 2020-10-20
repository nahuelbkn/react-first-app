import React from 'react';
import "./index.css";


class FormItem extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            isValid: false
        }
    }

    handlerChange = (event) => {
        //console.log(event.target.checkValidity());
        this.setState( { isValid: event.target.checkValidity() } );
        console.log("Hola!");
    }

    render()
    {
        return (
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input onChange={this.handlerChange} type="email" required className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                {
                    this.state.isValid && (
                        <small id="emailHelp" className="form-text text-muted valido">Es valido el MAIL</small>
                    )
                }
                {
                    !this.state.isValid && (
                        <small id="emailHelp" className="form-text text-muted invalido">Es invalido el MAIL</small>
                    )
                }
            </div>


        )
    }
}

export default FormItem;