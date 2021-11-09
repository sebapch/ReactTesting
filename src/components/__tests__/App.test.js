
import React from 'react';
import App from '../App';
import {shallow} from 'enzyme';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList'

let wrapped;
beforeEach(()=>{
    wrapped = shallow(<App />);
});

it('Shows the comment box', ()=> {

    expect(wrapped.find(CommentBox).length).toEqual(1);
    
}); 
it('Shows the list box', ()=> {

    expect(wrapped.find(CommentList).length).toEqual(1);
}); 