// import React from "react";
// import "./index.css";
// import { useNavigate } from "react-router-dom";

// export default function MarksUploadSem4() {
//     const navigate = useNavigate();
//     return (
//         <div className="HomepageBody">
//             <div className="sem1_title">Semester-1</div>
//             <div className="Marks_upload_container">
//                 <div className="marks_upload_title1">
//                     Your Semester-1 Marks
//                 </div>
//                 <div className="subject_names">
//                     Subject 1 marks : <input className="marks_input_login" type="number" id='subj1' name='Subject 1' /><br />
//                     Subject 2 marks : <input className="marks_input_login" type="number" id='subj2' name='Subject 2' /><br />
//                     Subject 3 marks : <input className="marks_input_login" type="number" id='subj3' name='Subject 3' /><br />
//                     Subject 4 marks : <input className="marks_input_login" type="number" id='subj4' name='Subject 4' /><br />
//                     Subject 5 marks : <input className="marks_input_login" type="number" id='subj5' name='Subject 5' /><br />
//                     Subject 6 marks : <input className="marks_input_login" type="number" id='subj6' name='Subject 6' /><br />
//                     Subject 7 marks : <input className="marks_input_login" type="number" id='subj7' name='Subject 7' /><br />
//                     Subject 8 marks : <input className="marks_input_login" type="number" id='subj8' name='Subject 8' /><br />
//                     Subject 9 marks : <input className="marks_input_login" type="number" id='subj9' name='Subject 9' /><br />
//                 </div>
//                 <button className="save_button" onClick={() => alert("Saved successfully")}>Save</button><br />
//             </div>
//             <div className="message_for_the_day">
//                 <span onClick={() => navigate("/messagefortheday")}>
//                     Message for the day
//                 </span>
//             </div>
//         </div>
//     );
// }



import React, {useState} from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const MarksUploadSem1 = () => {

    const [subj1, setsubj1] = useState('')
    const [subj2, setsubj2] = useState('')
    const [subj3, setsubj3] = useState('')
    const [subj4, setsubj4] = useState('')
    const [subj5, setsubj5] = useState('')
    const [subj6, setsubj6] = useState('')
    const [subj7, setsubj7] = useState('')
    const [subj8, setsubj8] = useState('')
    const [subj9, setsubj9] = useState('')

    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        if (!subj1 || !subj2 || !subj3 || !subj4 || !subj5 || !subj6 || !subj7 || !subj8 || !subj9) {
          toast.error('Please enter all fields', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            // transition: Bounce,
          });
          return;
        }
        axios.post('http://localhost:3001/marksupload/sem1', { subj1, subj2, subj3, subj4, subj5, subj6, subj7, subj8, subj9 })
          .then(result => {
            console.log(result);
            if (result.status === 200) {
              toast.success('Saved Successfully', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                // transition: Bounce,
              });
              return;
            }
          })
          .catch(error => {
            console.log(error);
          });
      }

    // const buttonAnimation = () => {
    //     const button = document.querySelector(".save_button");
    //     button.style.transform = "scale(1.07)";
    //     button.style.boxShadow = "0 0 8px 8px #abc0a1be";
    //     button.style.outline = "1px solid #b0c4b186";

    //     setTimeout(() => {
    //         button.style.transform = "scale(1)";
    //         button.style.boxShadow = "none";
    //         button.style.outline = "none";
    //     }, 200);
    // };

    const messageAnimation = () => {
        const message = document.querySelector(".message_for_the_day");
        message.style.transform = "scale(1.07)";
        message.style.boxShadow = "0 0 8px 8px #abc0a1be";
        message.style.outline = "3px solid #b0c4b186";
    
        setTimeout(() => {
          message.style.transform = "scale(1)";
          message.style.boxShadow = "none";
          message.style.outline = "none";
        }, 200);
      };

      const navigateWithDelay = () => {
        setTimeout(() => {
          navigate("/messagefortheday");
        }, 500);
      };
    

    return (
        <div className="HomepageBody">
            <div className="sem1_title">Semester-1</div>
            <div className="Marks_upload_container">
                <div className="marks_upload_title1">
                    Your Semester-1 Marks
                </div>
                <div className="subject_names">
                    <form onSubmit={handleSubmit}>
                    Subject 1 marks : <input className="marks_input_login" type="number" id='subj1' name='Subject 1' onChange={e => setsubj1(e.target.value)}/><br />
                    Subject 2 marks : <input className="marks_input_login" type="number" id='subj2' name='Subject 2' onChange={e => setsubj2(e.target.value)}/><br />
                    Subject 3 marks : <input className="marks_input_login" type="number" id='subj3' name='Subject 3' onChange={e => setsubj3(e.target.value)}/><br />
                    Subject 4 marks : <input className="marks_input_login" type="number" id='subj4' name='Subject 4' onChange={e => setsubj4(e.target.value)}/><br />
                    Subject 5 marks : <input className="marks_input_login" type="number" id='subj5' name='Subject 5' onChange={e => setsubj5(e.target.value)}/><br />
                    Subject 6 marks : <input className="marks_input_login" type="number" id='subj6' name='Subject 6' onChange={e => setsubj6(e.target.value)}/><br />
                    Subject 7 marks : <input className="marks_input_login" type="number" id='subj7' name='Subject 7' onChange={e => setsubj7(e.target.value)}/><br />
                    Subject 8 marks : <input className="marks_input_login" type="number" id='subj8' name='Subject 8' onChange={e => setsubj8(e.target.value)}/><br />
                    Subject 9 marks : <input className="marks_input_login" type="number" id='subj9' name='Subject 9' onChange={e => setsubj9(e.target.value)}/><br />
                    </form>
                </div>
                <button className="save_button" type="submit">Save</button>      
            </div>
            <div className="message_for_the_day">
                <span onClick={() => { messageAnimation(); navigateWithDelay(); }}>
                    Message for the day
                </span>
            </div>
        </div>
    );
};

export default MarksUploadSem1;