import React, { useEffect } from "react";
import { Button, Form, Input, message } from "antd";
import {  Link , useNavigate } from "react-router-dom";
import Divider from "../../components/Divider";
import { RegisterUser} from "../../apicalls/users";
/* Background Image*/
import backgroundImage from "../../pages/images/5.jpg";




const rules = [
    {
        required: true,
        message: "required",
    },
];
function Register() {
   
    const navigate = useNavigate();  
    const onFinish = async(values)=>{
        try{
            const response = await RegisterUser(values);
            navigate('/login');
            if (response.success){
                message.success(response.message);
            }else{
                throw new Error(response.message);
            }
            message.success(response.message);
        }catch(error){
            message.error(error.message);
        }
    }
  
    useEffect(() => {
        if (localStorage.getItem("token")){
            navigate('/');
        }
      },[])

    return (
        
          /* Image Coding */
       <div
       className="flex h-screen items-center justify-center"
       style={{
         backgroundImage: `url(${backgroundImage})`,
         backgroundSize: "cover",
         backgroundRepeat: "no-repeat",
       }}
     >

            <div className="h-screen flex justify-center items-center">
            <div className="bg-white p-5 rounded w-[450px]">

                <h1 className="text-2xl">
                    Email Marketing<span className="text-gray-400 text-2xl">-Register</span>
                </h1>
                < Divider />

                <Form layout="vertical"
                  onFinish={onFinish}  
                >

                    <Form.Item label="Name" name="name" rules={rules}>
                        <Input placeholder="Name" />
                    </Form.Item>


                    <Form.Item label="Email" name="email" rules={rules}>
                        <Input placeholder="Email" />
                    </Form.Item>

                    <Form.Item label="Password" name="password" rules={rules} >
                        <Input type="password" placeholder="Password" />
                    </Form.Item>

                    <Button type="primary" htmlType="submit" block className="mt-2">
                        Register
                    </Button>

                    <div className="mt-5 text-center">
                        <span className="text-gray-500">
                            Already have an account? <Link to="/login">Login</Link>
                        </span>
                    </div>
                </Form>
            </div>
        </div>
        </div>
    )
}


export default Register;