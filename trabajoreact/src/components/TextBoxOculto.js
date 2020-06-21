import React from 'react';

export default class HideableText extends React.Component {
    constructor (props) {
        super(props);
    }
    render (){
        return (
            <div>
                <button>Cambiar</button>
                Algo aqui
            </div>
        );
    }
}