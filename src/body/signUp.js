import React, { useState } from  'react'

const SignUp = (props) =>{

    const [email , setEmail] = useState('');
    
    let errorsObj = {email:'',password : ''};
    const [errors , setErrors] = useState(errorsObj);
    const [password , setPassword] = useState('');
    


    function onSignUp(e){
        e.preventDefault();
        let error = false;
        const errorObj = {...errorsObj};

        if(email ===''){

            errorObj.email ="email is Requied";
            error = true;

        }

         if(password ===''){

            errorObj.password ="password is Requied";
            error = true;

        }
        setErrors(errorObj);

        if(!error){
            console.log("form submit" , email);
          
                if(setErrors != ""){
                    console.log("sdsdsd");
                    
                   
                    
                }
            


            // setPassword = "",
        }

    }

    return(
        
        <div className="container my-5" style={{width: "100%", textAlign: "center"}}>
           

            <div className="shadow p-3 px-5 border border-gray-400 " style={{display:" inline-block",  margin:" 0 auto"}}>
                <h1 className="text-2x1 font-extraBold ">
                    Sign Up
                </h1>

                <form  style={{margin:"auto"}} onSubmit={onSignUp}>

                    <div className="p-3">
                        <label style={{display:"block",textAlign:"left"}}>Email</label>
                        <div>
                            <input 
                                type="text"
                                 name="email" 
                                className="border border-gray-600 p-1 "
                                value = {email}
                                onChange = {(e)=>setEmail(e.target.value)}
                            
                            /> 
                            {errors.email && <div style={{display:"block",textAlign:"left",color:"red"}}>{errors.email}</div>}
                        </div>
                        
                    </div>
                     <div className="p-3">
                        <label  style={{display:"block",textAlign:"left"}}>Password</label>
                        <div>
                            <input 
                                type="password"
                                name="password"
                                className="border border-gray-600 p-1"
                                value = {password}
                                onChange = {(e)=>setPassword(e.target.value)}
                            
                            />
                             {errors.password && <div style={{display:"block",textAlign:"left",color:"red"}}>{errors.password}</div>}
                        </div>
                        
                    </div>

                    <div className="p-3" >
                        <button type="submit" className=" text-white px-3 py-2" style={{background:"green" , border:"none",display:"block",textAlign:"left" }}>
                            sign up 
                        </button>
                    </div>

                </form>
            </div>

        </div>
    )


}


export default SignUp;