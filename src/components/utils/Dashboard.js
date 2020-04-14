import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
// import logo from './logo.png'
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from '@material-ui/core/Paper';
import logo from "./logo.png";
import "./Dashboard.css";
import TitleBar from "./TitleBar";
import { Link } from "@material-ui/core";

const useStyles = makeStyles({
  grid: {
      padding: '15px',
  },
  media: {
    height: 180
  },
  cardHeight:{
    maxWidth: 345,
    height : 380
  },
  paper: {
    margin: '10px',
    padding: '10px',
    textAlign: 'center',
    color: 'white',
  },
});

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <TitleBar name="Reactive Miner" tags={['Data Mining', 'Machine Learning', 'Regression', 'Classification', 'Clustering']} logo={logo} />
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            Reactive Miner implements Most of the Machine Learning Algorithms along with high quality and highly informative
            Graphs and Plots which help the user to Understand the Results of those Machine Learning Algorithms.
            It Provides a high level function for all the analysis tasks done by a User. Reactive miner is easy to use and understand for a Beginner.
            This project proposed a real-time interactive data mining and visualization system using GPU programming technologies. 
            To acquire data from different database platforms, we created a general programming interface using a TCP/IP.
            To provide intuitive operation interfaces, Reactive Miner utilizes the GUI methods for interactive data mining and visualization.
          </Paper>
        </Grid>
        <Grid className={classes.grid} item xs={12} sm={6} md={3} lg={3}>
          <Card className={classes.cardHeight} spacing={4}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={require("./images/tensorflow.png")}
                title="Tensorflow JS"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  TensorFlow.JS
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  TensorFlow.js is an hardware-accelerated JavaScript library
                  for training and deploying ML models.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              {/* <Link to="https://www.tensorflow.org/js" > */}
              <Button size="small" color="primary">
                <Link href="https://www.tensorflow.org/js">See More</Link>
              </Button>
              {/* </Link>  */}
            </CardActions>
          </Card>
        </Grid>
        <Grid className={classes.grid} item xs={12} sm={6} md={3} lg={3}>
          <Card className={classes.cardHeight} spacing={4}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={require("./images/react.png")}
                title="React JS"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  React
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  React is a JavaScript library for building user interfaces. It
                  is maintained by Facebook and a large Community.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              {/* <Link to="https://www.tensorflow.org/js" > */}
              <Button size="small" color="primary">
                <Link href="https://reactjs.org/">See More</Link>
              </Button>
              {/* </Link>  */}
            </CardActions>
          </Card>
        </Grid>
        <Grid className={classes.grid} item xs={12} sm={6} md={3} lg={3}>
          <Card className={classes.cardHeight} spacing={4}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={require("./images/d3.png")}
                title="D3.JS"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  D3.JS
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  D3.js is a JavaScript library for producing dynamic,
                  interactive data visualizations in web browsers.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                <Link href="https://d3js.org/">See More</Link>
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid className={classes.grid} item xs={12} sm={6} md={3} lg={3}>
          <Card className={classes.cardHeight} spacing={4}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={require("./images/materialui.png")}
                title="Material UI"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Material UI
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Material UI provides React components implementing <Link href="https://material.io/">Google's Material Design</Link>
                  specification
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              {/* <Link to="https://www.tensorflow.org/js" > */}
              <Button size="small" color="primary">
                <Link href="https://material-ui.com/">See More</Link>
              </Button>
              {/* </Link>  */}
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
