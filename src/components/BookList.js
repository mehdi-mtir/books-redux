import React from 'react';
import { connect } from 'react-redux';
import { deleteBook , updateIndex} from '../actions';

class BookList extends React.Component{

  onDelete = (event)=>{
    //console.log(event.target.dataset.indice);
    this.props.deleteBook(event.target.dataset.indice);
  }

  onShow = (event)=>{
    this.props.updateIndex(+event.target.dataset.indice);
  }

  render(){
    return (
      <div>
      <h1>Liste des livres</h1>
      <input type="button" className="btn btn-success" value="Ajouter" data-indice='-1' onClick={this.onShow}  />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">IBAN</th>
            <th scope="col">Title</th>
            <th scope="col">Date de publication</th>
            <th scope="col">Prix</th>
            <th scope="col">Editer</th>
            <th scope="col">Supprimer</th>
          </tr>
        </thead>
        <tbody>

        {
          this.props.state.books.map(
          (book, index) => {
            return (
              <tr key={index}>
                <th scope="row">{book.iban}</th>
                <td>{book.title}</td>
                <td>{book.date_publication}</td>
                <td>{book.prix}</td>
                <td><input type="button" className="btn btn-info" value="Editer" data-indice={index} onClick={this.onShow} /></td>
                <td><input type="button" className="btn btn-danger" value="Supprimer" data-indice={index} onClick={this.onDelete}/></td>
              </tr>
            )
          })
        }

        </tbody>
      </table>
      </div>
    );

  }

}

const mapStateToProps = (state)=>{
  //console.log(state);
  return state;
}

export default connect(mapStateToProps, {deleteBook, updateIndex})(BookList);
