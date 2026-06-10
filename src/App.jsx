
import Card from "./components/Card"

function App() {

  // const user = {
  //   name: "Calvin Bowen",
  //   cardNumber: "5352737277262241",
  //   expiryD: 3,
  //   expiryM: 2022,
  //   CVC: 873,
  //   balance: 6000,
  // }
  const users = [
  {
    name: "calvin bowen",
    cardNumber: "2312212367532241",
    expiryD: 3,
    expiryM: 2022,
    CVC: "291",
    balance: 6000,
  },
  {
    name: "anna smith",
    cardNumber: "2938471029384712",
    expiryD: 11,
    expiryM: 2025,
    CVC: "012",
    balance: 12500,
  },
  {
    name: "luka giorgadze",
    cardNumber: "1938750192837567",
    expiryD: 7,
    expiryM: 2026,
    CVC: "731",
    balance: 3400,
  }
];


  return (
    <div>
      <Card users = {users}/>
    </div>
  )
}

export default App
