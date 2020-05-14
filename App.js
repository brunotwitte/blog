import React , {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import firebase from './firebase';



import Home  from './components/Home';
import './global.css';
import Header from './components/Header';

class App extends Component{

//esse  fucncao com esse reder e para saber se tem conxao com o firebase 
// ele faz uma conexao se existir uma conexa ele conecta se nao eele mostra a funcao <h1> carregando......

state = {

  firebaseInitialized: false
  
};

//esse component didimiunt ele faz uma requisicao se esta logado e troca e fica
componentDidMount(){

  firebase.isInitialized().then(resultado =>{
      //Devolve o usario
      this.setState({
        firebaseInitialized: resultado});

  })

}

 render(){
return this.state.firebaseInitialized !== false ? (
 <BrowserRouter>
     <Header/>
    <Switch>
     <Route exact path="/" component={Home}/>
     </Switch>
 </BrowserRouter>
    ) : (
      <h1>Carregando.......</h1>
    ) ;

  }
}
export default App;
