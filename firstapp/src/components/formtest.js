import React from 'react';
class studAddForm extends React.Component
{
    constructor(props){
        super(props);
        this.state={
            firstname:"",
            lastname:"",
            email:"",
            program:"",
            admitted_level:"",
            admitted_cohort:"",
            dob:""

        }
    }
    
    fname=(event)=>{
        this.setState({firstname:event.target.value})
    }
     lname=(event)=>{
        this.setState({lastname:event.target.value})
    }
 
    render(){
        return(
            <form>
                <h1>Your Name is {this.state.firstname+" "+this.state.lastname}</h1>
                <p>Enter Firstname</p>
                <input type="text" 
                name="firstname" id="firstname"
                onChange={this.fname} />
                <p>Enter Lastname</p>
                <input type="text" 
                name="lastname" id="lastname"
                onChange={this.lname} />
            </form>
        );
    }
}

export default studAddForm;
