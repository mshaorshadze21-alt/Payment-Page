import { useState } from "react"
import { Toaster, toast } from "react-hot-toast";

const Card = ({user}) => {

    const [amount, setAmount] = useState("")
    // const [name, setName] = ("")
    // const [cradNumber, setCardNumber] = ("")
    // const [expireD, setExpireD] = ("")
    // const [expireM, setExpireM] = ("")
    // const [cvc, setCvc] = ("")
    const [balance, setBalance] =useState (user.balance)
    

    function payment (e) {
        e.preventDefault();
        const name = e.target.name.value;
        const cardNumber = e.target.cardNumber.value;
        const expiryD = e.target.expiryD.value;
        const expiryM = e.target.expiryM.value;
        const cvc = e.target.CVC.value;
        
        

        console.log(name, cardNumber)
        if (balance < Number(amount)) {
            toast.error("ანგარიშზე არ არის საკმარისი თანხა")
        }else{
            if (name == user.name && cardNumber == user.cardNumber && expiryD == user.expiryD && expiryM == user.expiryM && cvc == user.CVC) {
                
                setBalance(balance - Number(amount))

                toast.success("გადახდა შესრულებულია")
            }else{
                toast.error("მონაცემები არასწორია")
            }
        }
    }
  return (
    <div className="flex justify-center items-center w-full h-screen">
        <div className="w-220 h-160 bg-red-200 relative">
            <h1 className="text-5xl font-bold text-indigo-950 absolute top-5 left-15">Payment Page</h1>
            <div className="w-160 h-110 flex justify-center items-center mt-25 ml-15 p-10 bg-white">
                <div className="w-5/8 flex flex-col justify-around items-start gap-10 pr-20">
                    <h1 className="text-3xl font-bold text-indigo-950">Payment</h1>
                        <input type="number" placeholder="amount" name="amount" onChange={(e)=>{setAmount(e.target.value) }}/>
                    <div className="flex w-full justify-between items-center ">
                        <span className="text-lg font-semibold ">Amount to pay:</span>
                        <span className="text-xl font-bold text-indigo-600">${amount}</span>
                    </div>

                    <div className="flex w-full items-center gap-4 mt-20">
                        <input type="checkbox"/>
                        <label htmlFor="">Remember bank card</label>
                    </div>
                </div>
                <form onSubmit={(e)=>payment(e)} className="w-3/8 h-full flex flex-col gap-5">
                    <h1 className="text-2xl font-bold text-indigo-950">Card Details</h1>

                    <div className="flex flex-col gap-7">
                        <div>
                            <label htmlFor="" className="text-md text-gray-700">Cardholder's Name</label>
                            <input type="text" name="name" className="border-b-2" placeholder="Calvin Bowen"/>
                        </div>

                        <div>
                            <label htmlFor="" className="text-md text-gray-700">Card Number (5352737277262241)</label>
                            <input type="number" name="cardNumber" className="border-b-2" placeholder="5352737277262241"/>
                        </div>

                        <div className="flex justify-center items-center gap-10">
                            <div>
                                <div className="flex flex-col">
                                    <label htmlFor="" className="text-md text-gray-700">Expiry Date</label>
                                </div>
                            
                            
                                <div className="flex gap-4">
                                    <input type="number" className=" w-10 border-b-2" placeholder="03" name="expiryD"/>
                                    <input type="number" className=" w-15 border-b-2" placeholder="2022" name="expiryM"/>
                                </div>
                            </div>

                            <div className="flex flex-col mt-4 ">
                                <label htmlFor="" className="text-sm text-gray-700">CVC/CVV</label>
                                <input type="password" placeholder="***" className=" w-15 border-b-2" name="CVC"/>
                            </div>
                            
                        
                        </div>

                        <button type="submit"  className="w-fit h-fit px-5 py-2 rounded-lg bg-blue-500 text-md font-bold text-white">Pay now</button>
                    </div>
                </form>
            </div>

        </div>

        <Toaster position-top-right/>
    </div>
  )
}

export default Card