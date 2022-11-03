import React, { useState } from 'react'
import {Color} from "./"

// const Picker = () => {
//   const [selectedColor, setSelectedColor] = useState("red")
//   const selectColor = (colorName) => {
//     setSelectedColor(colorName)
//   }
//   return (
//     <div id="container">
//       <div id="navbar">
//         <div>Currently selected: </div>
//         <div className={selectedColor}>{selectedColor}</div>
//       </div>
//       <div id="colors-list">
//         <Color color="green" selectColor={selectColor}/>
//         <Color color ="blue" selectColor={selectColor}/>
//         <Color color = "red" selectColor={selectColor}/> 
//       </div>
//     </div>
//   );
// }

const Picker = () => {
  const [selectedColor, setSelectedColor] = useState("red")
  const selectColor = (colorName) => {
    setSelectedColor(colorName)
  }
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color color="green" selectColor={selectColor}/>
        <Color color ="blue" selectColor={selectColor}/>
        <Color color = "red" selectColor={selectColor}/> 
      </div>
    </div>
  );
}

export default Picker