import React , {Fragment,useState} from "react";
import mars from "../assets/images/mars-symbol.svg"
import marsWhite from "../assets/images/mars-symbol--white.svg"
import venus from "../assets/images/venus-symbol.svg"
import venusWhite from "../assets/images/venus-symbol--white.svg"
import calendar from "../assets/images/calendar.svg"
import card from "../assets/images/card.svg"
import cardWhite from "../assets/images/card--white.svg"

const UserForm = (props) => {

    const [formData, setFormData] = useState({
        name: "",
        gender: "",
        dob: "",
        email: "",
        mobile: "",
        customer_id: "",
        membership: ""
      });
      const [isValidEmail, setIsValidEmail] = useState(false);

      const handleEmailChange = e =>{
        setIsValidEmail(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value));
      }
   
      const handleInputChange = event => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
        event.target.name == "email"?handleEmailChange(event): null
      };

    return (
        <Fragment>
            <form className={"form "}>
                <div className="form-group">
                    <label htmlFor="name">Name </label>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="gender">Gender </label>
                    <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                    checked={formData.gender === "male"}
                    onChange={handleInputChange}
                    className="radio"
                    
                    />
                    <label htmlFor="male" id="gender"><spn className={formData.gender === "male"? 'dot active': ' dot'}>
                        <img src={formData.gender === "male"? marsWhite:mars} /></spn> Male</label>
                    <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    checked={formData.gender === "female"}
                    onChange={handleInputChange}
                    className ="radio"
                    
                    
                    />
                    <label htmlFor="female" id="gender"><span className={formData.gender === "female"? 'dot active': ' dot'}>
                        <img src={formData.gender === "female"? venusWhite:venus} /></span>Female</label>
    
                </div>
                <div className="form-group">
                    <label htmlFor="dob">Date of Birth</label>
                    <input
                    type="text"
                    id="dob"
                    name="dob"
                    placeholder="01/02/1983"
                    value={formData.dob}
                    onFocus={e => (e.target.type = 'date')}
                    onChange={handleInputChange}
                    className="form-control"
                    />
                    <img src={calendar} className="custom-date"/>
                </div>
                <div className="form-group">
                    <span className={!isValidEmail && formData.email != ""?"error-dot": ""}></span>
                    <label htmlFor="email">Email </label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="example@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={!isValidEmail && formData.email != ""? "form-control error-box": "form-control" }
                    />
                    { !isValidEmail && formData.email != ""? <p className="error-text ">Invalid email address</p>: null}
                </div>
                <div className="form-group">
                    <label htmlFor="mobile">Mobile</label>
                    <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    placeholder="+266 (59)123 456 "
                    value={formData.mobile}
                    onChange={handleInputChange}
                    className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="customer-id">Customer ID</label>
                    <input
                    type="text"
                    id="customer-id"
                    name="customer_id"
                    placeholder="576302-ERD0434 45 "
                    value={formData.customer_id}
                    onChange={handleInputChange}
                    className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="mebership">Membership</label>
                    <input
                    type="radio"
                    id="classic"
                    name="membership"
                    value="classic"
                    checked={formData.membership === "classic"}
                    onChange={handleInputChange}
                    className="radio"
                    
                    />
                    <label htmlFor="classic" id="membership"><spn className={formData.membership === "classic"? 'dot active': ' dot'}>
                        <img src={formData.membership === "classic"? cardWhite : card} /></spn> Classic</label>
                    <input
                    type="radio"
                    id="Silver"
                    name="membership"
                    value="Silver"
                    checked={formData.membership === "Silver"}
                    onChange={handleInputChange}
                    className ="radio"
                    
                    
                    />
                    <label htmlFor="Silver" id="membership"><spn className={formData.membership === "Silver"? 'dot active': ' dot'}>
                        <img src={formData.membership === "Silver"? cardWhite: card} /></spn> Silver</label>
                    
                    <input
                    type="radio"
                    id="Gold"
                    name="membership"
                    value="Gold"
                    checked={formData.membership === "Gold"}
                    onChange={handleInputChange}
                    className ="radio"
                    
                    
                    />
                    <label htmlFor="Gold" id="membership"><spn className={formData.membership === "Gold"? 'dot active': ' dot'}>
                        <img src={formData.membership === "Gold"? cardWhite:card} /></spn>Gold</label>

                
               </div>
               <div className=" submit">
                        <button className="cancel-btn">cancel</button>
                        <button className="save-btn">Save</button>
               </div>
            </form>
        </Fragment>
       
    )
   }
   
   export default UserForm;