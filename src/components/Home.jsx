import React , {Fragment, useState} from "react";
import face from "../assets/images/face.svg"
import arrow from "../assets/images/arrow.svg"
import UserForm from "./UserForm";
import UserInfo from "./UserInfo";

const UserCard = () => {
    const [isClicked, setclicked] = useState(true);
    const [name, setName] = useState("")

    const rotate = ()=>{
        let icon = document.getElementById("arrow");
        setclicked(!isClicked);
        if(isClicked){
            icon.classList.add("rotate");
            icon.classList.remove("normal")
        }else{
            setName("show")
            icon.classList.add("normal");
            icon.classList.remove("rotate");
        }
        
       
    }

    return (
        <Fragment>
        
             <div className="user-container">
                <img className="face-img" src={face} alt="face"/>
                <h1>Front-end Challenge!</h1>
                <p>This is the design that you will need to code up and impress us.</p>
                <div className="img-dot">
                    <img id="arrow" onClick={rotate}  src={arrow} alt="arrow"/>
                </div>
                
             </div>
             {
                isClicked? <UserForm name={name} /> : <UserInfo />
             }
             
            
        </Fragment>
    )
   }
   
   export default UserCard;