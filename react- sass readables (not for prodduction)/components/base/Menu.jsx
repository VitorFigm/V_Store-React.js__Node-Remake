import React from 'react'
import state_f from '../../general_functions'


export default ()=>(
    <>
    <div id="menu_screen" className="initial_state">
        <div id="screen_to_onclick_event" 
            onClick={()=>{
                state_f.initial('menu_screen')
                state_f.initial('menu')
            }}    
        ></div>
        <div id="menu" className="initial_state">
            <button id="menu_close_btn"
                onClick={()=>{
                    state_f.initial('menu_screen')
                    state_f.initial('menu')
                }}    
            > <img/> </button>
            <div id="menu_items">
                <a href="">Visit my Website</a>
                <a href="https://github.com/VitorFigm" target="_blank" rel="noopener noreferrer">Visit my github</a>
                <a href="">Contact me</a>
            </div>
        </div> 
    </div>
    </>
    )