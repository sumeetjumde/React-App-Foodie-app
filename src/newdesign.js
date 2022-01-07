import React from 'react';
import { Typography } from '@material-ui/core';
import { HomeIcon } from '@material-ui/icons';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { ButtonGroup } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import { Checkbox } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { width } from '@material-ui/system';

const Apps=()=>{

    return(
        <div>
        <Typography variant="h1">
            Hello World!
        </Typography>
        <AddIcon color="secondary"/>
        <DeleteIcon color="primary"/>
        
        <TextField
          variant="outlined"
          color="secondary"
          type="time"
          label="time"

        />
        
        <ButtonGroup>
        <Button variant="contained" color="primary" startIcon={<SaveIcon/>}>
          submit
        </Button>
        <Button variant="contained" color="primary" startIcon={<DeleteIcon/>}>
          Delete
        </Button>
        </ButtonGroup>
        
        <Checkbox/>  
        </div>
    )
}

export default Apps;

