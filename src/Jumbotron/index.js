import React from 'react';

class Jumbotron extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            display_4: "Esto es un Jumbotron",
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
                <h1 className="display-4">{this.state.display_4}</h1>
                <p className="lead">{this.state.lead}</p>
                <hr className="my-4" />
                <p>{this.state.infoExtra}</p>
        <a className="btn btn-primary btn-lg" href="#" role="button">{this.state.textButton}</a>
            </div>
        );
    }
}

export default Jumbotron;