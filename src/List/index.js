import React from 'react';
import ListItem from "../ListItem";

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
                            <ListItem texto={item.text}></ListItem>
                        )
                    })
                }
            </ul>

        )
    }
}

export default List;