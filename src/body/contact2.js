// import React from 'react';
// import {Button , Form  , Label , Input , Col, FormGroup} from 'reactstrap';
// import {useForm } from 'react-hook-form'
// // import { yupResolver } from '@hookform/resolvers/yup';
// // import * as yup from 'yup';

// // import { zodResolver } from '@hookform/resolvers/zod';
// // import * as z from 'zod';

// // const schema = z.object({
// //   name: z.string().nonempty({ message: 'Required' }),
// //   age: z.number().min(10),
// // });

// // const schema = yup.object().shape({

// //     name :yup.string().required()
// //     // password : yup.string().required().min(5),
// //     // name: yup.string().required(),
  
// // }).required();


// const Contact2 = () => { 

//     // const { register, handleSubmit } = useForm({
//     //     resolver: yupResolver(schema),
//     // });

//     const {
//     register,
//     handleSubmit,
//     formState: { errors }
//   } = useForm({
//     // resolver: zodResolver(schema), 
//   });

//         document.title = "Restaurant-Contact";

         

//        const onSubmit = (data) =>console.log(data);
  
//         return(
//             <div className="container">
//                 <div className="row row-content" style={{paddingLeft:"20px" , textAlign:"left "}}>
//                     <div className="col-12">
//                         <h3>send us your feedback</h3>
//                     </div>
//                     <div className="col-12 col-md-7">
//                         <Form onSubmit={handleSubmit(onSubmit)}>
//                             <FormGroup row>
//                                 <Label htmlFor="firstname" md={12}>First Name</Label>
//                                 <Col md={12}>
//                                     <Input 
//                                         type="text" 
//                                         name="firstname" 
//                                         placeholder="First Name" 
//                                         //  {...register('name')}
//                                         // {...register('firstname')}
//                                          {...register("name", { required: 'Required name' })}
                                                                                    
//                                         // ref={register}

//                                     />

//                                  {errors.name?.message && <p style={{color:"red"}}>{errors.name?.message}</p>}
                                   

//                                 </Col>
//                             </FormGroup>

//                              <FormGroup row>
//                                 <Label htmlFor="lastname" md={12}>Last Name</Label>

//                                 <Col md={12}>

//                                     <Input 
//                                         type="text" 
//                                         name="lastname" 
//                                         placeholder="Last Name" 
//                                          {...register("name", { required: 'Required name' })}
                                        
                                        
//                                         // ref={register}
                                        
//                                     />

//                                 </Col>
//                             </FormGroup>

//                             <FormGroup row>
//                                 <Label htmlFor="telnum" md={12}>Contact tel.</Label>

//                                 <Col md={12}>

//                                     <Input 
//                                         type="tel" 
//                                         name="telnum" 
//                                         placeholder="Tel. Number" 
//                                          {...register("telnum", { required: 'Required phone' })}
                                       
                                        
//                                         // ref={register}
                                        
//                                     />

//                                 </Col>
//                             </FormGroup>

//                             <FormGroup row>
//                                 <Label htmlFor="email" md={12}>Email</Label>

//                                 <Col md={12}>

//                                     <Input 
//                                         type="email" 
//                                         name="email" 
//                                         placeholder="Email" 
//                                          {...register("email", { required: 'Required email' })}
                                       
                                        
//                                         // ref={register}
                                        
//                                     />

//                                 </Col>
//                             </FormGroup>

//                             <FormGroup row>
                                
//                                 <Col md={{size:12}}>
//                                     <FormGroup check>
//                                         <Label check>

//                                              <Input 
//                                                 type="checkbox" 
//                                                 name="agree" 
                                                
                                               
//                                                 // ref={register}
//                                             />        

//                                              <strong>May we contact you?</strong> 

//                                         </Label>
//                                     </FormGroup>
//                                 </Col>

//                                 <Col >
                                    
//                                     <Input 
//                                         type="select" 
//                                         name="contactType"  
                                     
                                       
//                                         style={{display:"block", width:"100%" , background:"white", padding:"6px",border:"1px solid #e6dfdf", borderRadius:"5px"}}
                                        
//                                     >

//                                         <option>tel.</option>
//                                         <option>Email</option>

//                                     </Input>
//                                 </Col>
//                             </FormGroup> 


//                             <FormGroup row>
//                                 <Label htmlFor="message" md={12}>Your Feedback</Label>

//                                 <Col md={12}>

//                                     <Input 
//                                         type="textarea" 
//                                         name="message"  
                                    
//                                         rows="12"
//                                          {...register("message", { required: 'Required message' })}
                                      
                                        
                                        
//                                     />

                                   
//                                 </Col>  
//                             </FormGroup>

//                               <FormGroup >
//                                    <Col md={{size:6, offset:2}}>
//                                         <Button type="submit" color="primary">

//                                                 Send feedback
//                                         </Button>

//                                    </Col>
                               
//                             </FormGroup>

//                         </Form>
//                     </div>

//                 </div>

//             </div>
//         );
//     }


// export default Contact2;


import React from 'react';
import {Button , Form  , Label , Input , Col, FormGroup} from 'reactstrap';
import {useForm } from 'react-hook-form'
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';

import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const schema = z.object({
  name: z.string().nonempty({ message: 'Required' }),
  age: z.number().min(10),
  lastname : z.string().nonempty({ message: 'Required lastname' }),
  email: z.string().nonempty({ message: 'Required mail' }),
});

// const schema = yup.object().shape({

//     name :yup.string().required()
//     // password : yup.string().required().min(5),
//     // name: yup.string().required(),
  
// }).required();


const Contact2 = () => { 

    // const { register, handleSubmit } = useForm({
    //     resolver: yupResolver(schema),
    // });

    const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(schema), 
  });

        document.title = "Restaurant-Contact";

         

    //    const onSubmit = (data) =>console.log(data);
  
        return(
            // <div className="container">
            //     <div className="row row-content" style={{paddingLeft:"20px" , textAlign:"left "}}>
            //         <div className="col-12">
            //             <h3>send us your feedback</h3>
            //         </div>
            //         <div className="col-12 col-md-7">
                        <form onSubmit={handleSubmit((d) => console.log(d))}> 
                        
                            {/* <FormGroup row> */}
                                {/* <label htmlFor="firstname" md={12}>First Name</label> */}
                                {/* <Col md={12}> */}
                                    <input 
                                        type="text" 
                                        name="firstname" 
                                        placeholder="First Name" 
                                        //  {...register('name')}
                                        // {...register('firstname')}
                                         {...register('name')} 
                                                                                    
                                        // ref={register}

                                    />
                                   <br/>
                                    
                                    {errors.name?.message && <p >{errors.name?.message}</p>} 
                                    
                                    <br/>
                                     <input type="number" {...register('age', { valueAsNumber: true })} />

                                    {errors.age?.message && <p>{errors.age?.message}</p>}<br/><br/>

                                     <input 
                                        type="text" 
                                        name="lastname" 
                                        placeholder="Last Name" 
                                         {...register("lastname")}  
                                        
                                        // ref={register}  
                                    />
                                    <br/>

                                    {errors.lastname?.message && <p>{errors.lastname?.message}</p>} 
                                                                            <br/>


                                     <input 
                                        type="email" 
                                        name="email" 
                                        placeholder="Email" 
                                         {...register("email")}
                                       
                                        
                                        // ref={register}
                                        
                                    />

                                             

                                    {errors.email?.message && <p>{errors.email?.message}</p>} 
                                    <br/><br/>
                                  

                                {/* </Col> */}
                            {/* </FormGroup> */}

                             {/* <FormGroup > */}
                                   {/* <Col md={{size:6, offset:2}}> */}
                                        <input type="submit" />

                                            
                                   {/* </Col> */}
                               
                            {/* </FormGroup> */}


                         </form>

                       

                        /* <form>

                             <FormGroup row>
                                <Label htmlFor="lastname" md={12}>Last Name</Label>

                                <Col md={12}>

                                    <Input 
                                        type="text" 
                                        name="lastname" 
                                        placeholder="Last Name" 
                                         {...register("name", { required: 'Required name' })}
                                        
                                        
                                        // ref={register}
                                        
                                    />

                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="telnum" md={12}>Contact tel.</Label>

                                <Col md={12}>

                                    <Input 
                                        type="tel" 
                                        name="telnum" 
                                        placeholder="Tel. Number" 
                                         {...register("telnum", { required: 'Required phone' })}
                                       
                                        
                                        // ref={register}
                                        
                                    />

                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="email" md={12}>Email</Label>

                                <Col md={12}>

                                    <Input 
                                        type="email" 
                                        name="email" 
                                        placeholder="Email" 
                                         {...register("email", { required: 'Required email' })}
                                       
                                        
                                        // ref={register}
                                        
                                    />

                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                
                                <Col md={{size:12}}>
                                    <FormGroup check>
                                        <Label check>

                                             <Input 
                                                type="checkbox" 
                                                name="agree" 
                                                
                                               
                                                // ref={register}
                                            />        

                                             <strong>May we contact you?</strong> 

                                        </Label>
                                    </FormGroup>
                                </Col>

                                <Col >
                                    
                                    <Input 
                                        type="select" 
                                        name="contactType"  
                                     
                                       
                                        style={{display:"block", width:"100%" , background:"white", padding:"6px",border:"1px solid #e6dfdf", borderRadius:"5px"}}
                                        
                                    >

                                        <option>tel.</option>
                                        <option>Email</option>

                                    </Input>
                                </Col>
                            </FormGroup> 


                            <FormGroup row>
                                <Label htmlFor="message" md={12}>Your Feedback</Label>

                                <Col md={12}>

                                    <Input 
                                        type="textarea" 
                                        name="message"  
                                    
                                        rows="12"
                                         {...register("message", { required: 'Required message' })}
                                      
                                        
                                        
                                    />

                                   
                                </Col>  
                            </FormGroup>

                              <FormGroup >
                                   <Col md={{size:6, offset:2}}>
                                        <Button type="submit" color="primary">

                                                Send feedback
                                        </Button>

                                   </Col>
                               
                            </FormGroup>

                        </form> */
                    /* </div>

                </div>


            </div> */
        );
    }


export default Contact2;

