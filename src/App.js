
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";

export const App = () => {
  const [color, setColor] = useColor("hex", "#c14229ff");
  
  return (
    <div className="container">
      
    <table>
    <tr>
      <th>

      <div style={{background: "#000000a2",padding: "20px",margin: "20px", borderRadius:"12px",}}>
      <h2><b>RGBA NORMALIZED</b> "{(parseFloat(color.rgb.r)/255).toFixed(3)} {(parseFloat(color.rgb.g)/255).toFixed(3)} {(parseFloat(color.rgb.b)/255).toFixed(3)} {parseFloat(color.rgb.a).toFixed(2)}"</h2>
            
        <table>
        <tr>
          <th>
            <div> 
              <ColorPicker width={250} height={200} color={color} alpha onChange={setColor} hideRGB hideHSV dark />
            </div>
          </th>
          <th>
            <div style={{background: color.hex, paddingTop: "50px", margin: "auto", borderRadius:"12px", height:320, width:250}}>
              
            </div>
          </th>
          <th>
            </th>
        </tr>
        </table>
      </div>
      </th>
      <th>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <a href="https://rustplugins.net/support"><img src={require('./support2.png')} /></a>
      </th>
      </tr>
      </table>
  </div>
  );
};



export default App;
