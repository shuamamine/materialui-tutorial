import * as React from 'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
export default function Create() {
    
    return ( 
        <>
             <div>
                 <Typography color="secondary" variant="h5" align="center" gutterBottom>
                    Create a New Note
                 </Typography> 
                 <Button variant="contained" color="success" type="submit" onClick={() => {
    alert('clicked');
  }}>Submit</Button>        
            </div> 
        </>   
      );
}
 