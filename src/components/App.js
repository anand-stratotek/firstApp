import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

/*
Assignment:-1
Header Component(Sticky)- Logo,search-bar
Body
  Title(Center)
  subtitle(Center)
  paragraph(Center)
Footer(Below)-contact-links
*/

function App() {
  return (
    <>
      <div className='App'>
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
