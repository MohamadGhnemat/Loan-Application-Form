import React, { useState } from 'react'
import "./FormStyles.css"
import Modal from './Modal'
function LoanForm() {
 const [errorMessage,setErrorMessage]=useState(null)
 const [showModal,setShowModal]=useState(false)
  const [loanInputs,setLoanInputs]=useState({
    name:"",
    phoneNumber:"",
    age:"",
    isEmployee:false,
    salaryRange:"",
    
   
  })
  function handleFormSubmit(e){
    e.preventDefault()
    setErrorMessage(null)
    const {age,phoneNumber} =loanInputs
   if(age <18 || age > 100){
    setErrorMessage("The age is not allowed")
   }else if(phoneNumber.length  < 10 || phoneNumber.length  >12   ){
    setErrorMessage("Phone Number Format Is Incorrect")
   }

    setShowModal(true)
  
  }
  const btnIsDisabled =loanInputs.name===""|| loanInputs.age==="" || loanInputs.phoneNumber===""
  // let btnClasses ="";
  // if(btnIsDisabled){
  //   btnClasses="disabled"
  // }else {
  //   btnClasses=""
  // }
  function handleDivClick(){
    
    if(showModal){
      setShowModal(false)
    }
    
  }
  return (
    <div onClick={handleDivClick} className='flex'  style={{flexDirection:"column"}} >
        <form id='loan-form' className='flex' style={{flexDirection:"column"}}>
            <h1>Requesting a Loan</h1>
            <hr />
             <label>Name: </label> 
             <input value={loanInputs.name} onChange={(e) => setLoanInputs({...loanInputs,name:e.target.value})}   />
             <label>Phone Number: </label>
             <input value={loanInputs.phoneNumber} onChange={(e) => setLoanInputs({...loanInputs,phoneNumber:e.target.value})}  />
             <label>Age: </label>
             <input value={loanInputs.age} onChange={(e) => setLoanInputs({...loanInputs,age:e.target.value})}  />
             <label style={{marginTop:"30px"}}>Are You An Employee? </label>
             <input type='checkbox' checked={loanInputs.isEmployee}  onChange={(e) => setLoanInputs({...loanInputs,isEmployee:e.target.checked})} />
             <label>Salary: </label>
             <select value={loanInputs.salaryRange} onChange={(e) => setLoanInputs({...loanInputs,salaryRange:e.target.value})} >
                <option>less than 500$</option>
                <option>between 500$ and 2000$</option>
                <option>above 2000$</option>
              
            </select>
            <button className={btnIsDisabled ?'disabled':""} onClick={handleFormSubmit} disabled={btnIsDisabled} id='submit-loan-btn' > Submit </button>
           
        </form>
        <Modal errorMessage={errorMessage} isVisible={showModal} /> 
    </div>
  )
}

export default LoanForm
