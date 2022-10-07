import React, { useEffect, useRef } from 'react'
import { useState } from 'react';
const Task1 = () => {
  const refinput = useRef()
  const [state, setState] = useState({
    items: [],
    DataisLoaded: false,
    username: ""
  });
  useEffect(() => {
    let rl = 'https://api.weatherapi.com/v1/current.json?key=0bab7dd1bacc418689b143833220304&q=$location=lucknow';
    fetch(rl)
      .then((res) => res.json())
      .then((json) => {
        setState({
          items: json,
          DataisLoaded: true
        });
      })
  }
    , [])
  const fetchData = (e) => {
    e.preventDefault()
    let rl = 'https://api.weatherapi.com/v1/current.json?key=0bab7dd1bacc418689b143833220304&q=$location=' + e.target.city.value;
    fetch(rl)
      .then((res) => res.json())
      .then((json) => {
        setState({
          items: json,
          DataisLoaded: true
        });
      })
  }
  console.log(state.items)
  const { DataisLoaded, items } = state;
  if (!DataisLoaded) return <div>
    <h1> Pleses wait some time.... </h1> </div>;
  return (
    <>
      <div className="col brd20 dbg p1 full main1 flexSB flexAIC">
        <form className="row main1Upper w99 flexAIC flexSB">
          <button style={{ background: "transparent", color: "white" }}><i class="fa fa-bars" aria-hidden="true"></i></button>
          <p className='city'>{items.location.name}<span className="state">/{items.location.region}</span><span className="country">/{items.location.country}</span></p>
          <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
        </form>
        <div className="row main1Middle full flexJCC">
          <div className="row w60 box    flexSB">
            <div className="col w50 flexAIC">
              <img src={items.current.condition.icon} className=" icons" style={{ minWidth: "180px" }}></img>
            </div>
            <div className="col w50 flexSA ">
              <p className="h1">Today ({items.current.condition.text})</p>
              <p className='h11'>{items.location.localtime}</p>
              <p className="h2">{items.current.temp_c}&#x2103;/{items.current.temp_f}&#x2109;</p>
            </div>
          </div>
        </div>
        <div className="row main1Foot full flexJCC">
          <form className="searchbox w40 brd10 lbg row flexAIC flexSB" onSubmit={fetchData}>
            <input className='brd10 w90' placeholder='Enter City Name...' name="city" style={{ paddingLeft: "3%" }} type="text" />
            <button className='m3' type='submit'><i class="fa fa-search dfont " aria-hidden="true"></i></button>
          </form>
        </div>
      </div>
      <div className="row full flexSA footbox" style={{marginTop:"50px"}}>
        <div className="col w50 flexAIC">
        <table className='w50' style={{ color: "white" }}>
          {
            Object.keys(items.current).map((keys, index) => {
              if(keys=="condition")
              return ""
              return <tr key={keys}><td>{keys.toUpperCase().replace("_", " ")}</td><td>: {items.current[keys]}</td></tr>
            })
          }
        </table>
        </div>
        <div className="col w50 flexAIC">
        <table className='w50' style={{ color: "white" }}>
          {
            Object.keys(items.location).map((keys, index) => <tr key={keys}><td>{keys.toUpperCase().replace("_", " ")}</td><td>: {items.location[keys]}</td></tr>)
          }
        </table>
        </div>

      </div>
    </>
  )
}

export default Task1