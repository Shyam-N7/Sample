import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import timet from "../../../Design/sample.jpg";
import timet1 from "../../../Design/sample1.jpg";
import timet2 from "../../../Design/sample2.jpg";
import "./index.css";

export default function TimeTableSEM2() {
    const {sem}  = useParams();
    const [img, setImg] = React.useState();
    useEffect(() => {if(sem==="a_sec") {
        setImg(timet);
    }
    else if(sem==="b_sec") {
        setImg(timet1);
    }
    else if(sem==="c_sec") {
        setImg(timet2);
    }}, [sem])
    
    console.log(sem);
    return (
        <img src={img} className="img2"></img>
    );
}
