import React from 'react';
import './list.css';
import Card from './card';

/*
class List extends React.Component {
    render() {
        console.log(this.props);
        return (
            <section className='List'>
                <header>
                    {this.props.header}
                </header>
                <div className='List-cards'>
                    {this.props.cards}
                </div>
            </section>
        );
    }
}
*/

function List(props) {
    return (
        <section className='List'>
            <header className='List-header'>
                <h2>
                    {props.header}
                </h2>
            </header>
            <div className='List-cards'>
                {props.cards.map(card => 
                    <Card 
                        key={card.id}
                        id={card.id}
                        title={card.title}
                        content={card.content}
                        onClickDelete={props.onClickDelete}
                    />
                )}
                <button
                    type='button'
                    className='List-add-button'
                    onClick={() => props.onClickRandom(props.id)}
                >
                    + Add Random Card
                </button>
            </div>
        </section>
    );
}

List.defaultProps = {
    onClickRandom: () => {}
}

export default List;