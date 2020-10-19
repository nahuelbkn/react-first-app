import React from 'react';


class ListItem extends React.Component
{
    constructor()
    {
        super();
        this.state = {
        }
    }

    render()
    {
        return (
            <li className={"list-group-item"}>{this.props.texto}</li>
        )
    }
}

export default ListItem;