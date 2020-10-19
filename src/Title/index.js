import React from 'react';


class Title extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            title: this.props.title
        }
    }

    render()
    {
        return (
            <React.Fragment>
                {
                    this.state.title && (
                        <h1 className="display-4">{ this.state && this.state.title && this.state.title.toUpperCase() }</h1>
                    )
                }
            </React.Fragment>
        )
    }
}

export default Title;