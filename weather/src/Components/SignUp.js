// import React from 'react'

// function SignUp() {
    
//         const initialState ={
//             Firstname:"",
//              Lastname:"", 
//              Email:"", 
//              Password:"", 
//              ConfirmPassword: "", 
//         }
//         const[value, setValue] = useState(initialState);
    
//         const handleChange= (e) => {
//             const {id, value} = e.target; setValue((prevState)=> ({prevState, [id]: value, }));
    
//         };
    
//         const handleSubmit = (e) => {
//             setValue()
//             e.preventDefault();
    
//         };
        
//         return (
//         <div>
//          <form onSubmit={handleSubmit}>
//                 <h1>Create Account</h1>
//                 <label for="fname">First name:</label> <br />
//                 <input  type="text" id="Firstname" className="fname" value={value.Firstname} onChange={handleChange} /> <br />
//                 <label for="lname"> Last name: </label> <br />
//                 <input  type="text" id="Lastname" className="lname" value={value.Lastname} onChange={handleChange}/><br />
//                 <label for= "email">Email:</label><br />
//                 <input type="email" id="Email" className="email" value={value.Email} /><br />
//                 <label for= "password">Password:</label><br/>
//                 <input type= "password" id= "Password" className= "password" value={value.Password} onChange={handleChange}/><br />
//                 <label for= "cpassword">Confirm Password:</label><br />
//                 <input  type= "password" id= "ConfirmPassword" className= "password" value={value.ConfirmPassword} onChange={handleChange}/><br/>
//                 <input type= 'Submit' />
    
//          </form>
     
       
//         </div>
//     )
// }

// export default SignUp
