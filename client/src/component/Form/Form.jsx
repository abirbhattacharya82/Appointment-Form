import React from "react";
import './Form.css';
import axios from 'axios';
function Form()
{
    function book()
    {
        const name=document.getElementById('name');
        const phone=document.getElementById('phone');
        const email=document.getElementById('email');
        const date=document.getElementById('date');

        document.getElementById('inp1').style.display="none";
        document.getElementById('inp2').style.display="none";
        document.getElementById('inp3').style.display="none";
        document.getElementById('inp4').style.display="none";
        document.getElementById('inp5').style.display="none";

        axios.get(`http://localhost:8000/fix_appointment?name=${name}&phone=${phone}&email=${email}&date=${date}`)
        .then((response) => {
            if(response.data.status==='200')
            {
                alert("Appointment Fixed");
                document.getElementById('inp1').style.display="block";
                document.getElementById('inp2').style.display="block";
                document.getElementById('inp3').style.display="block";
                document.getElementById('inp4').style.display="block";
                document.getElementById('inp5').style.display="block";
            }
            else
            {
                alert("Appointment Not Fixed");
                document.getElementById('inp1').style.display="block";
                document.getElementById('inp2').style.display="block";
                document.getElementById('inp3').style.display="block";
                document.getElementById('inp4').style.display="block";
                document.getElementById('inp5').style.display="block";
            }
        })
        .catch((error) => {
            alert("Appointment Not Fixed")
            document.getElementById('inp1').style.display="block";
            document.getElementById('inp2').style.display="block";
            document.getElementById('inp3').style.display="block";
            document.getElementById('inp4').style.display="block";
            document.getElementById('inp5').style.display="block";
        });
    }
    return(
        <div className="Form">
            <div className="Heading">
                Appointment Form
            </div>
            <div className="Inputs" id="inp1">
                <div className="Label">Name</div><div className="Input"><input type="text" id="name"/></div>
            </div>
            <div className="Inputs" id="inp2">
                <div className="Label">Email</div><div className="Input"><input type="email" id="email" /></div>
            </div>
            <div className="Inputs" id="inp3">
                <div className="Label">Phone No</div><div className="Input"><input type="phone" id="phone" /></div>
            </div>
            <div className="Inputs" id="inp4">
                <div className="Label">Date</div><div className="Input"><input type="date" id="date" /></div>
            </div>
            <div className="ButtonArea" id="inp5"><button onClick={book}>Book Appointment</button></div>
        </div>
    )
};
export default Form;