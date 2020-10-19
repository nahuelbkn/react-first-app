import React from 'react';
import Title from '../Title';

class Jumbotron extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            title: this.props.titulo,
            lead: "Esta es una unidad de héroe simple, un componente de estilo jumbotron simple para llamar la atención sobre el contenido o la información destacados.",
            infoExtra: "Utiliza clases de utilidad para la tipografía y el espaciado para espaciar el contenido dentro del contenedor más grande.",
            textButton: "Aprender más",
            linkButton: "#"
        }
    }

    render()
    {
        return (
            <div className="jumbotron">
                <Title title={this.state.title}></Title>
                <p className="lead">{this.state.lead}</p>
                <hr className="my-4" />
                <p>{this.state.infoExtra}</p>
        <a className="btn btn-primary btn-lg" href="#" role="button">{this.state.textButton}</a>
            </div>
        );
    }
}

export default Jumbotron;