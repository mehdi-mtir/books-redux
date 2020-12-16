import { combineReducers } from 'redux';

const bookReducer = (oldListBooks = [{iban : 'A123', title : 'test', date_publication : '16/12/2020', prix : 100}], action) => {
  if(action.type === 'ADD_BOOK'){
    return [...oldListBooks, action.payload.book];
  }
  if(action.type === 'EDIT_BOOK'){
    const book = oldListBooks;
    book[action.payload.indice] = action.payload.book;
    return book;
  }
  if(action.type === 'DELETE_BOOK'){
    return oldListBooks.filter(
      (book, index)=>{
        return index !== action.payload.indice;
      }
    );
  }

  return (oldListBooks);
}

export default combineReducers(
  {books : bookReducer}
);
