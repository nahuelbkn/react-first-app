import React from 'react';

class List extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            arrayItems: [
                {
                    text: "Cras",
                    active: true
                },
                {
                    text: "Dapibus",
                    active: false
                },
                {
                    text: "Morbi",
                    active: false
                },
                {
                    text: "Porta",
                    active: false
                }
            ]
        }
    }

    render()
    {
        return (
            <ul className="list-group">
                {
                    this.state.arrayItems.map(function(item){
                        return (
                            <li className={`list-group-item ${ item.active ? `active` : ``} `}>{item.text}</li>
                        )
                    })
                }
            </ul>

        )
    }
}

export default List;