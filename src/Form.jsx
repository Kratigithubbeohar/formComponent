import {useState} from 'react';
export default function Form(){
    let [formData,setFormData] = useState({
        fullName:"",
        userName:'',
        password:'',
    });
    // let handleNameChange = (event)=>{
    //     setFullName(event.target.value);
    // }
    // let handleUserName = (event)=>{
    //     setUserName(event.target.value);
    // }
    let handleInputChange = (event)=>{
        let fieldName = event.target.name;
        let newVal = event.target.value;
        setFormData((currData)=>{
            //computed property name
            return {...currData,[fieldName]: newVal};
        });
    };
    let handleSubmit = (event)=>{
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullName:"",
            userName:'',
            password:'',
        });
    }
    return (
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="fullname">Full Name</label>
            <input type="text" placeholder="enter you name"  value={formData.fullName}
            onChange = {handleInputChange}
            id="fullname" 
            name="fullName"/>
            <br />
            <label htmlFor="username">username</label>
            <input type="text" placeholder="enter you name"  value={formData.userName} 
            onChange = {handleInputChange}
            id="username"
            name="userName" /><br />
            <label htmlFor="password">password</label>
            <input type="password" placeholder="enter you password"  value={formData.password} 
            onChange = {handleInputChange}
            id="password"
            name="password" /><br />
            <button>Submit</button>
        </form>
    )
}
