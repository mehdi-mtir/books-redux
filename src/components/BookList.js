import React from 'react';
import { connect } from 'react-redux';

class BookList extends React.Component{

  render(){
    return (
    <ul>
      {
        this.props.books.map(
          (book)=>{
            return <li key={book.iban}>{book.title} -- {book.prix}</li>
          }
        )
      }
    </ul>
    );
  }

}

const mapStateToProps = (state)=>{
  console.log(state);
  return {books : state.books}
}

export default connect(mapStateToProps)(BookList);
