import './Home.css';

import AppModuleA from '../../modules/app-module01/AppModule';

function Home() {
  return (
    <div className="App">
        <h1>Estudo de React Fundamentos</h1>
        
        { /*// exemplo de Componente Blog Posts */ }
        <AppModuleA fromName='App-Module News Blog Posts' />        
            
    </div>
  );
}

export default Home;
