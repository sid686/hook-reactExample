import React, { useEffect, useRef, useState } from 'react'


const Dropdown=(props)=>{

    const [open,setOpen]=useState(false);

    const ref=useRef()

    useEffect(()=>{
        const onBodyClick=(event)=>{

            if (ref.current && ref.current.contains(event.target)){
                return
            }
            setOpen(false);
        }

        document.body.addEventListener('click',onBodyClick)
        return(()=>{
            document.removeEventListener('click',onBodyClick);
        })

    },[])

    const renderOptions=props.options.map((option)=>{
        if(option.value===props.selected.value){
            return null;
        }
        return(
            <div key={option.value}
            onClick={()=>props.onSelectedChnage(option)}
             className='item'>
                {option.label}
            </div>
        )

    })
    return (
        <div ref={ref} className='ui form'>
            <div className='field'>
                <label className='label' label="Select a color">{props.label}</label>
                    <div   onClick={()=>setOpen(!open)}
                     className={`ui selection dropdown ${open?'visible active':""}`}>
                        <i className='dropdown icon'></i>
                        <div className='text'>{props.selected.label}</div>
                        <div className={`menu ${open?'visible transition':""}`}>
                            {renderOptions}
                        </div>
                    </div>
                
            </div>
            
        </div>
    )
}

export default Dropdown