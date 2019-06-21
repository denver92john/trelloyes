import React from 'react';

class AddItemForm extends React.Component {
    render() {
        return (
            <form onSubmit={this.onSubmitForm}>
                <input 
                    name='itemToAdd'
                    type='text'
                    placeholder='carrots'
                    aria-label='Shopping list item'
                />
                <button type='submit'>Add Item</button>
            </form>
        );
    }
}

export default AddItemForm;