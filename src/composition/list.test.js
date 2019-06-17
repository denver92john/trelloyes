import React from 'react';
import ReactDOM from 'react-dom';
import List from './list';
import renderer from 'react-test-renderer';
import STORE from '../store'

describe('List component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List 
            key={2} header='First Header' cards={['b']} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<List 
                key={2} header='First Header' cards={['b']} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

});

/*
Note: If your test for the List component fails examine the error message carefully. What is the component expecting as a prop? How can you invoke the component with the required prop in your test?
*/