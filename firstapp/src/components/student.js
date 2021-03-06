import React from 'react';

class Person extends React.Component{
    constructor(props){
        super(props);
        this.state={
            country:"Ghana",
            age:45
        };
        
    }
    changeCountry=()=>{
        if(this.state.country=="Ghana"){
            this.setState({country:"Nigeria"});
        }else{
            this.setState({country:"Ghana"});
        }
        
    }
    static getDerivedStateFromProps(props,state){
        return {age:props.age}
    }
    render(){
        return (
            <div style={{background:'#eee'},{padding:10+'px'},{border:1+'px solid #eee'}}>
                <h3 style={{fontSize:1.4+'em'}}>{this.props.name}</h3>
                <h4>Age: {this.state.age}&nbsp;&nbsp;&nbsp;&nbsp; Rating:3.4</h4>
                <h4>Gender: Male&nbsp;&nbsp;&nbsp;&nbsp; Nationality: {this.state.country}</h4>
                <button type="button" onClick={this.changeCountry}>Change Country</button>
            </div>
        );
    }
}

export default Person;