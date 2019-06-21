import React from 'react';
import './card.css';

/*
class Card extends React.Component {
    static defaultProps = {};
    render() {
        console.log(this.props);
        return (
            <div className='Card'>
                <button>delete</button>
                <h3>{this.props.title}</h3>
                <p>{this.props.content}</p>
            </div>
        );
    }
}
*/

function Card(props) {
    return (
        <div className='Card'>
            <button 
                type='button' 
                onClick={() => props.onClickDelete(props.id)}
            >
                delete
            </button>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    );
}

Card.propTypes = {
    onClickDelete: () => {}
}

export default Card;