import logo from './logo.svg';
import './App.css';

function App() {
  const appf = () => {

    const btnLogin = document.getElementById("btnLogin")

    const d = document.getElementById("divLogin")
    if (document.cookie) {
    const user = document.cookie.split("=") [1]; 
    d.textContent = `Hello ${user}, I know who you are.`; 
    btnLogin.style.display="none";
    }

btnLogin.addEventListener("click", e=>{
const user = prompt("Who are you?")
fetch(`${document.location.href}login?user=${user}`)
.then(a=>a.text())
.then(a=>alert(a))
.catch(e=>console.log(e))
})

  }

  return (
    <div className="App" onClick={appf}>
      <div id = 'divLogin'></div>
      <button id = 'btnLogin'>login</button>
      </div>
  );
}

export default App;
