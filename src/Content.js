//import React, { useState } from 'react'
//import ItemsList from './ItemsList';
//import LineItem from './LineItem';

import ItemsList from './ItemsList';

 
const Content = ({items,handleCheck,handleDelete}) => {
   

      
    return(
        <main>
            {(items.length)?(
         
                    <ItemsList

                            items={items}
                            handleCheck={handleCheck}
                            handleDelete={handleDelete}
                     />
                    
            ):(
                
                
          
                <p style={{marginTop:'10rem'}}>No items</p>
            )}
       
            
        </main>
    )
}

export default Content;