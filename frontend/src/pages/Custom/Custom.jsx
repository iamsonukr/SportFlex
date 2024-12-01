import React, { useEffect, useState } from 'react';
import './custom.css'
import { lanYardImages } from '../../../public/images/lanyard/lanyardImages';

const Custom = () => {

  const [name, setName] = useState('Your Name');
  const [bgColor, setBgColor] = useState('');
  const [color, setColor] = useState('white');
  const [font, setFont] = useState('Arial');
  const [startIcon, setStartIcon] = useState('')
  const [endIcon, setEndIcon] = useState('')
  const [selectedWristband, setSelectedWristband] = useState({ id: 1, image: './lanyard/lanyard1.webp' });
  
  useEffect(() => {
    if (name.length > 14) {
      window.alert("Not more than 14 char are allowed")
      setName(name.slice(0, -1))
    }
  }, [name])

  const Custom = [
    { id: 0, image: lanYardImages[0], design: 'Custom Red' },
    { id: 1, image: lanYardImages[1], design: 'Custom Blue' },
    { id: 2, image: lanYardImages[2], design: 'Custom Green' },
    { id: 3, image: lanYardImages[3], design: 'Custom Yellow' },
    { id: 4, image: lanYardImages[4], design: 'Woven' },
    { id: 5, image: lanYardImages[5], design: 'Tubular' },
    { id: 6, image: lanYardImages[6], design: 'Blank Polyester' },
    { id: 7, image: lanYardImages[7], design: 'Blank Tubular' },
    { id: 8, image: lanYardImages[8], design: 'Cord' },
    { id: 9, image: lanYardImages[9], design: 'Crimson Wave' },
    { id: 10, image: lanYardImages[10], design: 'Emerald Shine' },
    { id: 11, image: lanYardImages[11], design: 'Ocean Breeze' },
    { id: 12, image: lanYardImages[0], design: 'Sunset Glow' } // Repeats lanYardImages[0]
];


  const handleWristbandClick = (wristband) => {
    setSelectedWristband(wristband);
    setBgColor('#FEFFD2')

  };

  const resetHandle = () => {
    setName('');
    setFont('')
    setColor('');
    setStartIcon('')
    setEndIcon('')
  }

  return (
    <div>
      {/* <h2>Choose a Wristband Style</h2> */}
      <div className="formOptions">
        <div className="display">
          <WristbandPreview selectedWristband={selectedWristband} name={name} color={color} font={font} startIcon={startIcon} endIcon={endIcon} />
        </div>
        <div className='formItems' >
          {/* Type */}
          <div className="SelectType">
            <p className='FormHeadTitle'>1. Please Select the type of band you want</p>
            <div className='selectBand'>
              {Custom.map((wristband) => (
                <div className='imgBoxItems'  >
                  <img className='optionImg'
                    key={wristband.id}
                    src={wristband.image}
                    alt={`Wristband ${wristband.id}`}
                    onClick={() => handleWristbandClick(wristband)}
                    style={{ cursor: 'pointer' }}
                  />
                  <span >{wristband.design}</span>
                </div>

              ))}
            </div>
          </div>

          <p className='FormHeadTitle'>2. Customize your message</p>
          <div className="custom-message">
            {/* msg line one */}
            <div className="message-row">
              <div className="msg">
                <p>Your Message Here</p>
                <input type="text" className="msgBox" max={1} onChange={(e) => setName(e.target.value)} value={name} />
              </div>
              <div className="select-font">
                <p>Choose your font .</p>
                <select name="" id="" placeholder="select font" onChange={(e) => setFont(e.target.value)} value={font}>
                  <option value="Arial">Arial</option>
                  <option value="Verdana">Verdana</option>
                  <option value="Georgia">Georgia</option>
                  <option value="Tahoma">Tahoma</option>
                  <option value="Trebuchet MS">Trebuchet MS</option>
                  <option value="Times New Roman">Times New Roman</option>
                  <option value="Helvetica">Helvetica</option>
                  <option value="Courier New">Courier New</option>
                  <option value="Arial Black">Arial Black</option>
                  <option value="Impact">Impact</option>
                  <option value="Lucida Console">Lucida Console</option>
                  <option value="Lucida Sans Unicode">Lucida Sans Unicode</option>
                </select>

              </div>
            </div>

            {/* message line four */}
            <div className="message-row">
              <div className="select-font">
                <p>Imprint Color</p>
                <select name="" id="" placeholder="select font" onChange={(e) => setColor(e.target.value)} value={color}>
                  <option value="white">White</option>
                  <option value="mediumturquoise">Green</option>
                  <option value="yellow">Yellow</option>
                  <option value="aqua">Aqua</option>
                  <option value="orange">Orange</option>
                  <option value="lightsteelblue">Blue</option>
                  <option value="red">Red</option>
                  <option value="pink">Pink</option>
                  <option value="purple">Purple</option>
                  <option value="brown">Brown</option>
                  <option value="gray">Gray</option>
                  <option value="black">Black</option>
                  <option value="hotpink">Hot Pink</option>
                  <option value="blueviolet">Blue Violet</option>
                  <option value="springgreen">Spring Green</option>
                  <option value="gold">Gold</option>

                </select>
              </div>
            </div>
            {/* msg line two */}
            <div className="message-row">
              <div className="select-font">
                <p>Select Start Icon</p>
                <select name="" id="" placeholder="select font" onChange={(e) => setStartIcon(e.target.value)} value={startIcon}>
                  <option value=""></option>
                  <option value="💎">💎</option>
                  <option value="🏐">🏐</option>
                  <option value="⚽">⚽</option>
                  <option value="🎲">🎲</option>
                  <option value="♟️">♟️</option>
                  <option value="🎵">🎵</option>
                  <option value="⚔️">⚔️</option>
                  <option value="🛡️">🛡️</option>
                  <option value="💡">💡</option>
                  <option value="🪙">🪙</option>
                  <option value="✒️">✒️</option>
                  <option value="🍥">🍥</option>
                  <option value="🍦">🍦</option>
                  <option value="🧊">🧊</option>
                  <option value="🍓">🍓</option>
                  <option value="🌺">🌺</option>
                  <option value="🌼">🌼</option>
                  <option value="🌻">🌻</option>
                  <option value="🍁">🍁</option>
                  <option value="🍂">🍂</option>
                  <option value="🏵️">🏵️</option>
                  <option value="🌷">🌷</option>
                  <option value="🌍">🌍</option>
                  <option value="🚩">🚩</option>
                  <option value="🏳️‍🌈">🏳️‍🌈</option>
                  <option value="🏳️">🏳️</option>
                  <option value="♨️">♨️</option>
                  <option value="🌙">🌙</option>
                  <option value="🌕">🌕</option>
                  <option value="☀️">☀️</option>
                  <option value="⭐">⭐</option>
                  <option value="🌈">🌈</option>
                  <option value="⚡">⚡</option>
                  <option value="❄️">❄️</option>
                  <option value="🔥">🔥</option>
                  <option value="💧">💧</option>
                  <option value="💥">💥</option>
                  <option value="💮">💮</option>
                  <option value="❌">❌</option>
                  <option value="⚜️">⚜️</option>
                  <option value="🔰">🔰</option>
                  <option value="☢️">☢️</option>
                  <option value="☣️">☣️</option>
                  <option value="💠">💠</option>
                  <option value="🌐">🌐</option>
                </select>
              </div>
              <div className="select-font">
                <p>Select End Icon</p>
                <select name="" id="" placeholder="select font" onChange={(e) => setEndIcon(e.target.value)} value={endIcon}>
                  <option value=""></option>
                  <option value="💎">💎</option>
                  <option value="🏐">🏐</option>
                  <option value="⚽">⚽</option>
                  <option value="🎲">🎲</option>
                  <option value="♟️">♟️</option>
                  <option value="🎵">🎵</option>
                  <option value="⚔️">⚔️</option>
                  <option value="🛡️">🛡️</option>
                  <option value="💡">💡</option>
                  <option value="🪙">🪙</option>
                  <option value="✒️">✒️</option>
                  <option value="🍥">🍥</option>
                  <option value="🍦">🍦</option>
                  <option value="🧊">🧊</option>
                  <option value="🍓">🍓</option>
                  <option value="🌺">🌺</option>
                  <option value="🌼">🌼</option>
                  <option value="🌻">🌻</option>
                  <option value="🍁">🍁</option>
                  <option value="🍂">🍂</option>
                  <option value="🏵️">🏵️</option>
                  <option value="🌷">🌷</option>
                  <option value="🌍">🌍</option>
                  <option value="🚩">🚩</option>
                  <option value="🏳️‍🌈">🏳️‍🌈</option>
                  <option value="🏳️">🏳️</option>
                  <option value="♨️">♨️</option>
                  <option value="🌙">🌙</option>
                  <option value="🌍">🌍</option>
                  <option value="">🌍</option>
                  <option value="🌕">🌕</option>
                  <option value="☀️">☀️</option>
                  <option value="⭐">⭐</option>
                  <option value="🌈">🌈</option>
                  <option value="⚡">⚡</option>
                  <option value="❄️">❄️</option>
                  <option value="🔥">🔥</option>
                  <option value="💧">💧</option>
                  <option value="💥">💥</option>
                  <option value="💮">💮</option>
                  <option value="❌">❌</option>
                  <option value="⚜️">⚜️</option>
                  <option value="🔰">🔰</option>
                  <option value="☢️">☢️</option>
                  <option value="☣️">☣️</option>
                  <option value="💠">💠</option>
                  <option value="🌐">🌐</option>
                </select>

              </div>
            </div>
            {/* message line three */}
            <div className="message-row">
              <div className="select-font">
                <p>Imprint Options</p>
                <select name="" id="" placeholder="select font">
                  <option value="">One Side</option>
                  <option value="">Two Side</option>
                  {/* <option value="">🎨</option> */}
                </select>
              </div>
              <div className="select-font">
                <p>Number of Impring Colors</p>
                <select name="" id="" placeholder="select font">
                  <option value="">One Color</option>
                  <option value="">two Color</option>
                  <option value="">Three Color</option>
                </select>

              </div>
            </div>


            <div className="message-row">
              <p>Order Notes</p>
              <br />
              <textarea name="" id="" className='noteBox'>

              </textarea>
            </div>
            <div className="message-row ">


              <button name="" id="" className='resetBtn' onClick={resetHandle}>
                Reset
              </button>
            </div>

          </div>


          {/* Choose color */}
          <p className='FormHeadTitle'>3. Please select the color you want</p>
          <div className='color'>
            <div className="color1">
              <div className="gold"></div>
              <input type="text" placeholder='quantity' />

            </div>
            <div className="color1">
              <div className="black"></div>
              <input type="text" placeholder='quantity' />

            </div>
            <div className="color1">
              <div className="brown"></div>
              <input type="text" placeholder='quantity' />

            </div>
            <div className="color1">
              <div className="pink"></div>
              <input type="text" placeholder='quantity' />

            </div>

          </div>



          {/* select Size */}
          <div className="lanSize">
            <p className='FormHeadTitle'>4. Please Select the size you want</p>
            <p><pre>Width</pre></p>
            <div className="lanWidth">
              <div className="landW1">
                <p>1 inch <span className='SUnit'>25 mm</span></p>
                <input type="radio" name="width" className="radio-input" />
              </div>
              <div className="landW1">
                <p>3/4 inch <span className='SUnit'>20 mm</span></p>
                <input type="radio" name="width" className="radio-input" />
              </div>
              <div className="landW1">
                <p>5/8 inch <span className='SUnit'>15 mm</span></p>
                <input type="radio" name="width" className="radio-input" />
              </div>
              <div className="landW1">
                <p>7/8 inch <span className='SUnit'>11 mm</span></p>
                <input type="radio" name="width" className="radio-input" />
              </div>
            </div>  

            {/* Lenght */}
            <p>Length</p>
            <div className="lanLenght">
              <div className="landL1">
                <p>Small <span className='SUnit'>30 inch</span></p>
                <input type="radio" name="length" className="radio-input" />
              </div>
              <div className="landL1">
                <p>Standard <span className='SUnit'>36 inch</span></p>
                <input type="radio" name="length" className="radio-input" />
              </div>
              <div className="landL1">
                <p>Large <span className='SUnit'>42 inch</span></p>
                <input type="radio" name="length" className="radio-input" />
              </div>
              <div className="landL1">
                <p>Extra Large <span className='SUnit'>48 inch</span></p>
                <input type="radio" name="length" className="radio-input" />
              </div>
            </div>
          </div>
          {/* size end here */}

          {/* Attachment Style */}
          <p className='FormHeadTitle'>5. Please select the Attachment you want</p>
          <div className='color'>
            <div className="attachment1">
              <img src="./attacchment/attact1.webp" alt="hello" />
              <input type="radio" name="attachment" placeholder='quantity' />

            </div>
            <div className="attachment1">
              <img src="./attacchment/attact2.webp" alt="" />
              <input type="radio" name="attachment" placeholder='quantity' />

            </div>
            <div className="attachment1">
              <img src="./attacchment/attact3.webp" alt="" />
              <input type="radio" name="attachment" placeholder='quantity' />

            </div>
            <div className="attachment1">
              <img src="./attacchment/attact4.webp" alt="" />
              <input type="radio" name="attachment" placeholder='quantity' />
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

// WristbandPreview.js
const WristbandPreview = ({ selectedWristband, name, color, font, startIcon, endIcon }) => {
  useEffect(()=>{

    console.log(selectedWristband)
    
  })
  return (
    <div>
      {/* <h2>Preview</h2> */}
    
      {selectedWristband.id < 4 ? (
        <>
          <img src={selectedWristband.image} alt="Selected Wristband" />
          <div className="infoBox">
            {name ? <p>Message : <span style={{}} >{" " + name + " "} </span></p> : " "}

            {/* {color != 'white' ? <p>Color : <span style={{ color: color }} >{color} </span></p> : <p>Color : <span >{color} </span></p>} */}
            { (color && color != 'white')  
            ? <p>Color : <span style={{ color: color }} >{color} </span></p> 
            : <p>Color : <span >{color} </span></p>}

            {font ? <p >Font :<span style={{ fontFamily: font }} >{font} </span> </p> : ""}
            {startIcon ? <p>Start Icon: {startIcon}</p> : ""}
            {endIcon ? <p>End Icon: {endIcon}</p> : ""}
          </div>
          <p className='name1' style={{ color: color, fontFamily: font }} >{startIcon}{' ' + name + ' '}{endIcon}</p>
          <p className='name2' style={{ color: color, fontFamily: font }}>{startIcon}{' ' + name + ' '}{endIcon}</p>
          <p className='name3' style={{ color: color, fontFamily: font }}>{startIcon}{' ' + name + ' '}{endIcon}</p>
        </>
      ) : (
        <img src={selectedWristband.image} alt="Selected Wristband" />
      )}
    </div>
  );
};

export default Custom;