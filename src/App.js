import './App.scss';
import Header from './components/Header';
import Section_about from './components/Section_about';
import Section_main from './components/Section_main';
import Section_skills from './components/Section_skills';
import Section_portfolio from './components/Section_portfolio';
import Section_contacts from './components/Section_contacts';

function App() {
  return (
    <>
      <body className="root">
        <Header />
        <hr></hr>
        <Section_main />
        <Section_about />
        <Section_skills />
        <Section_portfolio />
        <Section_contacts />
      </body>
    </>
  );
}

export default App;
