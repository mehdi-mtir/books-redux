import React from 'react';
import BookList from './BookList';
import BookAdd from './BookAdd';
import BookEdit from './BookEdit';
import { connect } from 'react-redux';

const App = (props)=>{
  let actionForm = '';
    if(props.state.currentIndex === -1)
     actionForm = (<BookAdd />);

    if(props.state.currentIndex >= 0)
      actionForm = (<BookEdit />);

  return(
    <div className='container'>
      <BookList />
      {actionForm}
    </div>
  );
}



const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(App);
