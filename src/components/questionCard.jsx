import React from 'react'
import {Box,Grid,Typography,Button,makeStyles} from '@material-ui/core';
import theme from "../theme"
import { BorderRight } from '@material-ui/icons';
//import { differenceInMinutes } from '../date-fns';
//
const useStyles = makeStyles((theme)=>({
    wrapper:{
        border:'1px solid #e8e8e8',
        cursor:"pointer",
        transition:"0.5s",
        "&:hover" :{
            boxShadow:"0px 5px 25px rgba(0,0,0,0.5)",
            borderLeft:"6px solid #802f9c"//blue
        }
    },
    companyName : {
        fontSize:"13.5px",
        backgroundColor:theme.palette.primary.main,
        padding:theme.spacing(0.75),
        borderRadius:"5px",
        display:"inline-block",
        fontWeight:600,
    },
    skillChip:{
        margin: theme.spacing(0.5),
        padding: theme.spacing(0.75),
        fontSize:"14.5px",
        borderRadius:"5px",
        fontWeight:600,
        backgroundColor:theme.palette.secondary.main,
        color:"#fff"
    }
}));

const QuestionCard = (props) => {
    const classes = useStyles(theme);
    return (
      <Box p={1} className = {classes.wrapper}>
          <Grid container alignItems="center">

              <Grid item xs>
                  <Typography variant="h6">{props.question}</Typography>
              </Grid>

              <Grid item container direction="column" alignItems="flex-end" xs>
                  <Grid item>
                      <Typography variant="caption">{props.topic}</Typography>
                  </Grid>
                  <Grid item>
                      <Box mt={2}>
                          <Button variant="contained">
                              Link
                          </Button>
                      </Box>
                  </Grid>
              </Grid>

          </Grid>
      </Box>
    )
}

export default QuestionCard
