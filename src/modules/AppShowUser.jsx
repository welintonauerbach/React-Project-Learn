import React from "react";
import "./AppShowUser.css"

// Classe mostra os dados do usuário
class AppShowUser extends React.Component {

  componentDidMount(){
    console.log("Componente ShowUser montado");
  }

  render() {
    const { id, name, document, pass } = this.props;

    return (
      <div className="show-user" key={id}>
        <ul>
          <li>Id: {id}</li>
          <li>Nome: {name}</li>
          <li>Documento: {document}</li>
          <li>Senha: {pass}</li>
        </ul>        
      </div>
    );
  }
}

export default AppShowUser;