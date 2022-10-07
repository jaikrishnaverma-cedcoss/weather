import React, { useRef } from 'react'
import { useState } from 'react';

const Task2 = () => {
    const refinput=useRef()
    const [state,setState] =useState({
        items: [],
        DataisLoaded: false,
        username:""
    });
    const fetchData=()=>{
  let rl='https://api.weatherapi.com/v1/current.json?key=0bab7dd1bacc418689b143833220304&q=$location='+refinput.current.value;
      fetch(rl)
                    .then((res) => res.json())
                    .then((json) => {
                      setState({items: json,
                            DataisLoaded: true
                        });
                    })
                  }
                  console.log(state.items)
    const { DataisLoaded, items } = state;
return( 
      <>
   <div className="row brd20  full " style={{height:"35vh"}}>

</div>
        </>
      );
}

export default Task2