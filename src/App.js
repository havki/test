import './App.css';
import Block from './components/block/Block';
import Header from './components/header/Header';

function App() {
 
  let mok =  [1,2,3,4]

  return (
    <div className="App">
      <section className="container flex-wrapper">
          <Header/>
          {
            mok.map((item)=>{
              return(

                <Block/>
              )
            })
          }
      </section>
    </div>
  );
}

export default App;
