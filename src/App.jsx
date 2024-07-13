
import './App.css'

function App() {
  let userName ="mohamed Rabie";
  let age =25;
function welcome (username){
alert(username)
}
  return (
    <>
     <h2>{userName}</h2>
     <p>{age}</p>
     <button onClick={()=>welcome(userName)}>Welcome</button>
    </>
  )
}

export default App
