import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import bgimg from '../src/images/discountbg.jpg'

function App() {
  const [ogpri,setOgpri]=useState(0)
  const [dsper,setDsper]=useState(0)
  const [dspri,setDspri]=useState(0)
  const [svpri,setSvpri]=useState(0)
  const calculate=(e)=>{
    const sav = (ogpri*dsper)/100
    setSvpri(sav)
    const dis = ogpri-sav
    setDspri(dis)
  }
  const reset=(e)=>{
    setOgpri(0)
    setDsper(0)
    setDspri(0)
    setSvpri(0)
  }
  const backgroundStyle = {
    backgroundImage: `url(${bgimg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  };
  return (
    <div style={backgroundStyle} className="App">
      <div style={{width:'100%', height:'100%'}} className="row py-5">
        <h2 className='mt-3'>Discount Calculator</h2>
        <p style={{color:'rgb(12, 34, 12)', textShadow:'0.5px 0.5px 1px'}} className='text-center my-3 ms-1'>Use the discount calculator to find out the exact amount you will save!</p>
        <div id='row1' className="row my-4 justify-content-center">
          <div style={{backgroundColor:'rgb(255,255,255,0.8)'}} id='col2' className="col-4 mx-4">
          <TextField onChange={(e)=>setOgpri(e.target.value)} value={ogpri||""} id="filled-basic" label="Original Price (&#8377;)" variant="filled" /><br /><br />
          <TextField onChange={(e)=>setDsper(e.target.value)} value={dsper||""} id="filled-basic" label="Discount Percentage" variant="filled" /><br /><br />
          <Button id='btn' onClick={e=>calculate(e)} variant="contained">Calculate</Button>
          <Button id='btn' onClick={e=>reset(e)} variant="contained">Reset</Button>
          </div>
          <div style={{backgroundColor:'rgb(255,255,255,0.8)'}} id='col1' className="col-4 mx-4">
            <div id='r1' className="row mt-4 mx-3">
              <h4>Discounted Price</h4>
              <p id='p1'>&#8377; {dspri}</p>
            </div>
            <div className="row text-center mt-5 mx-2">
              <div className="col mx-3">
                <h6>Amount Saved</h6>
                <p id='p2'>&#8377; {svpri}</p>
              </div>
              <div className="col mx-3">
                <h6>Original Price</h6>
                <p id='p2'>&#8377; {ogpri}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;