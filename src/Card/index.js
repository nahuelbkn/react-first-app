import React from 'react';

class Card extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            card_title: this.props.title,
            random: this.props.random,
            listOfTechnologies: this.props.techList
        };
    }

    render()
    {
        return (
            <div className="card" style={{width: '18rem'}}>
                <img src="https://miro.medium.com/max/700/0*oZLL-N4dGNlBe4Oh.png" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{this.state.card_title}</h5>
                    <p className="card-text">{this.state.random}</p>
                </div>
                <ul className="list-group list-group-flush">
                    {
                        this.state.listOfTechnologies.map(function(tech)
                        {
                            return (
                                <li className="list-group-item">{tech}</li>
                            );
                        })
                    }
                </ul>
                <div className="card-body">
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
            </div>
        );
    }
}

export default Card;