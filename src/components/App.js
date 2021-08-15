import React, { Children } from 'react';
import Footer from './Footer';
import Header from './Header';

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
    <div className='App'>
      This is my App component
      <ul
        style={{
          color: 'blue',
          margin: '10px',
        }}
      >
        <li>
          <Footer />
        </li>
        <li>
          <Footer />
        </li>
        <li>
          <Header />
        </li>
        <li>
          <Header />
        </li>
        <li>
          <Header />
        </li>
      </ul>
    </div>
  );
}

export default App;
