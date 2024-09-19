import React from "react";

const Square = ({ colorValue,hexValue,isDark}) => {
    return (
        <section>

          
            {/* style={{
                backgroundColor: colorValue,
                color: isDark ? "white" : "black"
            }} */}

          <p> {colorValue ?  colorValue : "Empty Value"}</p>
          <p> {hexValue ?  hexValue : "Null"}</p>
          <p>{ isDark ? "white" : "black"}</p>

    

        </section>

    )
}    
/* Square.defaultProps = {
    colorValue: "Empty Value"
      
    } */





export default Square;