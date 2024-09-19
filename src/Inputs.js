import colorNames from 'colornames';


const Inputs = ({
 colorValue,setColourValue,setHexValue,isDark,setIsDark    

})=> {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <label>
                Enter a color:
                <input
                   autoFocus
                    type="text"
                    placeholder='add color value'
                    required
                    value={colorValue}
                    onChange={(e) => {
                    
                        setColourValue(e.target.value);
                      
                        setHexValue(colorNames(e.target.value));
                       // setIsDark(hexValue.isDark);
                    }}
                />
                                <br></br>
                                <br></br>
                                <br></br>


                <button type='button' onClick={() => setIsDark(!isDark)}>Toggle Text Color </button>
            </label>



        </form>

     );        
}
export default Inputs; 