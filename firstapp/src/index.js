import React from 'react';
import ReactDOM from 'react-dom';
import Person from './components/student.js';
import FormTest from './components/formtest.js';
import "./App.css";
import "./mysass.scss";

ReactDOM.render(<Person name='David Siaw Mensah' age="20" />,document.getElementById("student"));

const myfirstelement=(
 <div>
    <h1>Hello {5+7} this is Something else Again!!!</h1>
    <p>This is a new story</p>
    <strong>Let us not discuss this </strong>
</div>

);
ReactDOM.render(myfirstelement,document.getElementById("root"));
const lsd=(
 <div>
    <h1>Hello {5+7} this is Siaw Again!!!</h1>
    <p>This is a new story</p>
    <strong>Let us not discuss this </strong>
    <strong>This is a new thing </strong>
</div>

);
ReactDOM.render(lsd,document.getElementById("dog"));

ReactDOM.render(<FormTest />,document.getElementById("studform"))