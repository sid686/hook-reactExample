import React, { useState } from 'react';
import Accordion from'./Component/Accordion'
import Dropdown from './Component/Dropdown';
import Search from './Component/Serch';
import Transalte from './Component/Translate';
import Route from'./Component/Route';
import Header from'./Component/Header';


const items=[
    {
        title:'React',
        content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry'
    },
    {
        title:'WHy use React',
        content:"Lorem",
    },
    {
        title:'WHy use Reactas',
        content:"Lorem",
    }
]

const options=[
    {
        label:'The color Red',
        value:'red'
    },
    {
        label:'The color Green',
        value:'green'
    },
    {
        label:'The color Blue',
        value:'Blue'
    },
]

{ /*const showAccordian=()=>{
    if(window.location.pathname==='/')
    {
        return <Accordion items={items}></Accordion>
    }
}

const showList=()=>{
    if(window.location.pathname==='/list')
    {
        return <Search></Search>
    }
}

const dropDown=()=>{
    if(window.location.pathname==='/dropdown')
    {
        return <Dropdown></Dropdown>
    }
}

const showTranslate=()=>{
    if(window.location.pathname==='/translate')
    {
        return <Transalte></Transalte>
    }
}
*/}

const App=()=>{
    const[selected,setSelected]=useState(options[0])
    { /* const[selected,setSelected]=useState(options[0])
    const[showDropdown,setShowDropdown]=useState(true);*/}
    return (
    <div>
{ /*
        <button onClick={()=>{setShowDropdown(!showDropdown)}}>Toggle DropDown</button>
       
       <Accordion items={items}></Accordion> 
                 <Search></Search> 
                 { showDropdown?
        <Dropdown selected={selected} 
        onSelectedChnage={setSelected}
        options={options}></Dropdown>:null

                 }*/}
                 <Header></Header>
                 <Route path='/'>
                <Accordion items={items} ></Accordion>
                 </Route>
                 <Route path='/list'>
                 <Search></Search>
                 </Route>
                 <Route path='/translate'>
                 <Transalte></Transalte>
                 </Route>
                 <Route path='/dropdown'>
                 <Dropdown selected={selected} 
        onSelectedChnage={setSelected}
        options={options}></Dropdown>
                 </Route>
    </div>)
}

export default App