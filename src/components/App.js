import React from 'react';
import BookList from './BookList';
import BookAdd from './BookAdd';

const App = ()=>{
  return(
    <div className='container'>
      <BookList />
      <BookAdd />

    </div>
  );
}

export default App;
