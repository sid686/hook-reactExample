import React, { useState } from 'react'
import DropDown from'./Dropdown'
import Convert from'./Convert'

const options=[
    {
        label:"Dutch",
        value:"de"
    },
    {
        label:"Arabic",
        value:"ar"
    },{
        label:"Hindi",
        value:"hi"
    }
    
]

const Transalte=()=>{
    const [language,setLaguage]=useState(options[0])
    const [text,setText]=useState('')
    return (
        <div>
            <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
        <DropDown  selected={language}
        label="select a language"
        options={options}
        onSelectedChnage={setLaguage}
        ></DropDown>
        <hr></hr>
        <h3 className='ui header'>Output Text</h3>
        <Convert text={text} language={language}></Convert></div>
    )

    
}

export default Transalte