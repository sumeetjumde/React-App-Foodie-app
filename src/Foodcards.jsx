import React from "react";
import { makeStyles, createStyles, Theme, } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Listfood from "./Listfoods";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        flexGrow: 1,
        
       
      },
      paper: {
        padding: theme.spacing(2),
        
        maxWidth: 500,
        marginLeft:"20px",
        marginRigth:"20px"
      },
    image: {
        width: 128,
        height: 128,
      },
      img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
      }
  }),
);


function Foods(props){ 
  console.log(props);
  const classes = useStyles();
  return(
    <div className={classes.root}>
    <Grid container spacing={1}>
      <Grid item xs={12} sm={4} lg={4} md={4} xl={4} >
        <Paper className={classes.paper}> 
        <Grid item>
          <ButtonBase className={classes.image}>
            <img className={classes.img} alt="complex" src={props.img}/> 
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1">
              {props.fname}
              </Typography>
              <Typography variant="body2" gutterBottom>
              {props.hname}
              </Typography>
              <Typography variant="body2" color="textSecondary">
               {props.id}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" style={{ cursor: 'pointer' }}>
                ADD TO CART
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">${props.price}</Typography>
          </Grid>
        </Grid>
        </Paper>
      </Grid>

      <Grid item xs={12} sm={4} lg={4} md={4} xl={4}>
        <Paper className={classes.paper}>
        <Grid item>
          <ButtonBase className={classes.image}>
            <img className={classes.img} alt="complex" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&w=1000&q=80" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12}  sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1">
              Blueberry Cheesecake
              </Typography>
              <Typography variant="body2" gutterBottom>
              Bake O'Clock
              </Typography>
              <Typography variant="body2" color="textSecondary">
                ID: 1023432
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" style={{ cursor: 'pointer' }}>
                ADD TO CART
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">$9.00</Typography>
          </Grid>
        </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={4} lg={4} md={4} xl={4}>
        <Paper className={classes.paper}>
        <Grid item>
          <ButtonBase className={classes.image}>
            <img className={classes.img} alt="complex" src="https://img.freepik.com/free-photo/delicious-vietnamese-food-including-pho-ga-noodles-spring-rolls-white-table_181624-34062.jpg?size=626&ext=jpg" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12}  sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1">
              Blueberry Cheesecake
              </Typography>
              <Typography variant="body2" gutterBottom>
              Bake O'Clock
              </Typography>
              <Typography variant="body2" color="textSecondary">
                ID: 1023432
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" style={{ cursor: 'pointer' }}>
                ADD TO CART
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">$9.00</Typography>
          </Grid>
        </Grid>
        </Paper>
      </Grid>
    </Grid>
  </div>
  )
}

export default Foods;