import { useState } from "react";
import "./Card.css";


function Card({id,Image,info,name,price,removeTour}){
    const [readmore,setreadmore]=useState(false);
    const description = readmore ? info:`${info.substring(0,200)}...`;
    function readmorehandler(){
        setreadmore(!readmore);
    }
    
    return(
       
        <div className="card">
                <img src={Image} alt="error" className="image"/>
                
                <div className="Tour-info">
                <div className="tour-details">
                    <h4 className="price">{price}</h4>
                    <h4 className="city">{name}</h4>
                </div>

                <div className="description">
                    {description}
                    <span className="more" onClick={readmorehandler}>
                        {readmore?`Showless`:`Read more`}
                    </span>
                </div>
</div>

               
                <button className="btn" onClick={() => removeTour(id)}>Not Interested</button>
        </div>
       
    );

}

export default Card;
