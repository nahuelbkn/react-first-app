import React from 'react';


class Counter extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            count: 0
        }
    }

    handlerClick = () => {
        this.setState({count: 1});
    }

    render()
    {
        return (
            <React.Component>
                <div className="card text-white bg-danger" style={{maxWidth: "18rem"}}>
                    <div className="card-body">
                        <h5 className="card-title">{this.state.count}</h5>
                    </div>
                    <button onClick={this.handlerClick} type="button" className="btn btn-success">Sumar 1</button>
                </div>
            </React.Component>
        )
    }
}

export default Counter;