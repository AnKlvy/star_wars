
import * as React from 'react';




export const Gridd = ({children}) => {
  return (
    <Grid container spacing={2}>
    
    <Grid item xs={4}>
      {children}
    </Grid>
   
  </Grid>
  );
}
