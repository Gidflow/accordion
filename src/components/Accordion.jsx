import React, { useState } from 'react';
import data from "../data.json";
import "./Accordion.css"

//single selection
//multi selection

const Accordion = () => {

    const [selected, setSelected] = useState(null)
    const [multiSelect, setMultiSelect] = useState(false);
    const [multi, setMulti] = useState([]);

   const  handleMultiSelect=(id)=>{
     
    let newMulti = [...multi];
    
    const findIndexOf = newMulti.indexOf(id);
    if(findIndexOf === -1){
        newMulti.push(id)
    }
    else{
        newMulti.splice(findIndexOf, 1)
    }

    setMulti(newMulti);
   }

    const handleSingleSelection = (id) => {

        setSelected(id === selected ? null : id)
        console.log(id)
    }
    return (
        <div className='container'>\
        <button onClick={()=>setMultiSelect(!multiSelect)}>Show multiple</button>
            <div className="accordion">
                {data && data.map(itemData => {
                    return <div key={itemData.id} className="item">
                        <div onClick={multiSelect?()=>handleMultiSelect(itemData.id) :() => handleSingleSelection(itemData.id)} className="title">
                            <h3>{itemData.question}</h3>
                            <span>+</span>
                        </div>

                        {multiSelect ? multi.indexOf(itemData.id)!==-1 && (<div className='content'>
                                {itemData.answer}
                            </div>)
                            :selected === itemData.id && (<div className='content'>
                                {itemData.answer}
                            </div>)
                        }

                    </div>
                })}
            </div>

        </div>
    )
}

export default Accordion