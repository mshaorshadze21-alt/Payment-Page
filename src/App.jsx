
import Card from "./components/Card"

function App() {

  const user = {
    name: "Calvin Bowen",
    cardNumber: "5352737277262241",
    expiryD: 3,
    expiryM: 2022,
    CVC: 873,
    balance: 6000,
  }


  return (
    <div>
      <Card user = {user}/>
    </div>
  )
}

export default App
