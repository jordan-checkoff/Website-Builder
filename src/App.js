import './App.css';
import Navbar from './components/Navbar';
import Logo from './components/Logo';
import Menu from './components/Menu';

const name = "Checkoff Design";

const pages = [{
              name: "Google",
              link: "http://www.google.com"
              },
            {
              name: "Wikipedia",
              link: "http://www.wikipedia.com"
            }]

const logo = "https://common.northwestern.edu/v8/css/images/northwestern.svg";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar links={pages} spread={"separate"} >
          <Logo img={logo} />
          <Menu pages={pages} />
        </Navbar>
      </header>
      <div className={'strip'}>
      <h1>My h1</h1>
      <p>My pfjaslk;dfjlkasdjfklasdjf kld;sfj aksdjf; My pfjaslk;dfjlkasdjfklasdjf kld;sfj aksdjf;My pfjaslk;dfjlkasdjfklasdjf 
        kld;sfj aksdjf;My pfjaslk;dfjlkasdjfklasdjf kld;sfj aksdjf;My pfjaslk;dfjlkasdjfklasdjf kld;sfj aksdjf;My pfjaslk;dfjlka
        sdjfklasdjf kld;sfj aksdjf; My pfjaslk;dfjlkasdjfklasdjf kld;sfj aksdjf;My pfjaslk;dfjlkasdjfklasdjf kld;sfj aksdjf;My p
        fjaslk;dfjlkasdjfklasdjf kld;sfj aksdjf;My pfjaslk;dfjlkasdjfklasdjf kld;sfj aksdjf;My pfjaslk;dfjlkasdjfklasdjf kld;sfj
         aksdjf; My pfjaslk;dfjlkasdjfklasdjf kld;sfj aksdjf;My pfjaslk;dfjlkasdjfklasdjf kld;sfj aksdjf;My pfjaslk;dfjlkasdjfkl
         asdjf kld;sfj aksdjf;My pfjaslk;dfjlkasdjfklasdjf kld;sfj aksdjf;</p>
      <h2>My h1</h2>
      <p>My pfjaslk;dfjlkasdjfklasdjf kld;sfj aksdjf; My pfjaslk;dfjlkasdjfklasdjf kld;sfj aksdjf;My pfjaslk;dfjlkasdjfklasdjf 
        kld;sfj aksdjf;My pfjaslk;dfjlkasdjfklasdjf kld;sfj aksdjf;My pfjaslk;dfjlkasdjfklasdjf kld;sfj aksdjf;My pfjaslk;dfjlka
        sdjfklasdjf kld;sfj aksdjf; My pfjaslk;dfjlkasdjfklasdjf kld;sfj aksdjf;My pfjaslk;dfjlkasdjfklasdjf kld;sfj aksdjf;My p
        fjaslk;dfjlkasdjfklasdjf kld;sfj aksdjf;My pfjaslk;dfjlkasdjfklasdjf kld;sfj aksdjf;My pfjaslk;dfjlkasdjfklasdjf kld;sfj
         aksdjf; My pfjaslk;dfjlkasdjfklasdjf kld;sfj aksdjf;My pfjaslk;dfjlkasdjfklasdjf kld;sfj aksdjf;My pfjaslk;dfjlkasdjfkl
         asdjf kld;sfj aksdjf;My pfjaslk;dfjlkasdjfklasdjf kld;sfj aksdjf;</p>
      <h2>My h1</h2>
      <p>My pfjaslk;dfjlkasdjfklasdjf kld;sfj aksdjf; My pfjaslk;dfjlkasdjfklasdjf kld;sfj aksdjf;My pfjaslk;dfjlkasdjfklasdjf 
        kld;sfj aksdjf;My pfjaslk;dfjlkasdjfklasdjf kld;sfj aksdjf;My pfjaslk;dfjlkasdjfklasdjf kld;sfj aksdjf;My pfjaslk;dfjlka
        sdjfklasdjf kld;sfj aksdjf; My pfjaslk;dfjlkasdjfklasdjf kld;sfj aksdjf;My pfjaslk;dfjlkasdjfklasdjf kld;sfj aksdjf;My p
        fjaslk;dfjlkasdjfklasdjf kld;sfj aksdjf;My pfjaslk;dfjlkasdjfklasdjf kld;sfj aksdjf;My pfjaslk;dfjlkasdjfklasdjf kld;sfj
         aksdjf; My pfjaslk;dfjlkasdjfklasdjf kld;sfj aksdjf;My pfjaslk;dfjlkasdjfklasdjf kld;sfj aksdjf;My pfjaslk;dfjlkasdjfkl
         asdjf kld;sfj aksdjf;My pfjaslk;dfjlkasdjfklasdjf kld;sfj aksdjf;</p>
      <h3>My h1</h3>
      <p>My pfjaslk;dfjlkasdjfklasdjf kld;sfj aksdjf; My pfjaslk;dfjlkasdjfklasdjf kld;sfj aksdjf;My pfjaslk;dfjlkasdjfklasdjf 
        kld;sfj aksdjf;My pfjaslk;dfjlkasdjfklasdjf kld;sfj aksdjf;My pfjaslk;dfjlkasdjfklasdjf kld;sfj aksdjf;My pfjaslk;dfjlka
        sdjfklasdjf kld;sfj aksdjf; My pfjaslk;dfjlkasdjfklasdjf kld;sfj aksdjf;My pfjaslk;dfjlkasdjfklasdjf kld;sfj aksdjf;My p
        fjaslk;dfjlkasdjfklasdjf kld;sfj aksdjf;My pfjaslk;dfjlkasdjfklasdjf kld;sfj aksdjf;My pfjaslk;dfjlkasdjfklasdjf kld;sfj
         aksdjf; My pfjaslk;dfjlkasdjfklasdjf kld;sfj aksdjf;My pfjaslk;dfjlkasdjfklasdjf kld;sfj aksdjf;My pfjaslk;dfjlkasdjfkl
         asdjf kld;sfj aksdjf;My pfjaslk;dfjlkasdjfklasdjf kld;sfj aksdjf;</p>
         </div>
    </div>
  );
}

export default App;
