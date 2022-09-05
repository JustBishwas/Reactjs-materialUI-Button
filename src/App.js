import './App.css';
import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import SaveIcon from  '@material-ui/icons/Save';
import DeleteIcon from  '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextField from '@material-ui/core/TextField';
import {makeStyles, ThemeProvider} from '@material-ui/core/styles'
import { createTheme } from '@material-ui/core/styles'
import { orange } from '@material-ui/core/colors'
import 'fontsource-roboto' ;
import Typography  from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/core/Menu';






const useStyles = makeStyles({
      root: {
          background : 'linear-gradient(45deg, #3f51b5, #f50057)',
          border : 0 ,
          borderRadius : 15,
          boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
          color : 'white',
          padding : '5   30px', 
          marginBottom : '2%'
        }
      });

      const theme = createTheme({
        Typography:{
          padding : '20px',
          h3:{
            fontSize : 36,
          },
          subtitle2:{
          fontSize : 24,
          },
          platte : {
            primary: {
              main: orange[500],
            }
          }
        }
      }) 

      const inputstyles = makeStyles({
        root : {
          border : 2 ,
          borderRadius : 3,
          boxShadow: '0 1px 0px 0px #f50057',
          color : 'white',
          padding : '5   30px', 
        }
      })

      const typostyles = makeStyles({
        root:{
          margin:'2%' 
        }
      })

function ButtonStyled(){
  const classes = useStyles();
  return <Button className={classes.root} >Test Styled Button </Button>
}

function Checkboxexample(){
  const [checked , setchecked] = React.useState(true);
  return(
      <FormControlLabel 
        control={
      <Checkbox
      checked={checked}
      icon = {<SaveIcon />}
      CheckedIcon={<SaveIcon/>}
      onChange={(e) => setchecked(e.target.checked)}
      inputProps={{
        'aria-label': 'secondary checkbox'
      }} />
        } 
        label = "Testing checkbox"
      />
  )
}

function App() {
  const inputstyle = inputstyles();
  const typostyle = typostyles();
  return (
  
    <ThemeProvider theme={theme}>
    <Container maxWidth = "xl">
    <div className="App">
      <header className="App-header">

        <AppBar color="secondary">
          <Toolbar>
            <IconButton>
              <MenuIcon />
            </IconButton>
            <Typography variant = "h4" > MUI Themeing </Typography>
           <Button>Login</Button>
          </Toolbar>
        </AppBar>

      <Typography variant='h3' className={typostyle.root}>
         Welcome to MUI
      </Typography>
      <Typography variant='subtitle2' component="div" className={typostyle.root}>
         Learn how to use Material UI
      </Typography>
        <ButtonStyled />

        <Grid container spacing={6} justify="center" >
          <Grid item xl={2}>
              <Paper style= {{height : 75 ,  width :50, marginBottom:20,    }}/>
          </Grid>
          <Grid item xl={2}>
              <Paper style= {{height : 75 ,  width :50, marginBottom:20,    }}/>
          </Grid>
          <Grid item xl={2}>
              <Paper style= {{height : 75 ,  width :50, marginBottom:20,   }}/>
          </Grid>
      </Grid>

        <TextField
        className={inputstyle.root}
        variant='outlined'  
        color = "secondary"
        type = "email"
        label="Email " 
        placeholder = "example@example.com"
        />
        <Checkboxexample />
        <ButtonGroup>
          <Button  startIcon= {<SaveIcon />}
            variant="contained" 
            color="primary" 
            size="large" >
                  Save
          </Button>
          <Button  startIcon= {<DeleteIcon />}
            variant="contained" 
            color="secondary"  
            size="large" >
                  Discard
          </Button>
        </ButtonGroup>
       
      </header>
    </div>
    </Container>
    </ThemeProvider>
  );
}

export default App;
