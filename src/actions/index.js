//créateurs d'action
export const addBook = (book) =>{
  return {
    //objet action a retourner
    type : 'ADD_BOOK',
    payload : { book }
  }
}

export const editBook= (indice, book) =>{
  return {
    type : 'EDIT_BOOK',
    payload : {indice, book }
  }
}

export const deleteBook = (indice) =>{
  return {
    type : 'DELETE_BOOK',
    payload : { indice }
  }
}

export const updateIndex = (indice) => {

  return {
    type : 'UPDATE_INDEX',
    payload : { indice }
  }

}

/*
export const showBookToEdit = (indice) => {
  return {
    type : 'BOOK_TO_EDIT',
    payload : {indice}
  }
}*/
