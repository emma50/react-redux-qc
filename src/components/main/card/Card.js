import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const data = [
  {
    id: 1,
    name: 'Tony Tony',
    comment: 'Probably the most random thing you have ever seen!',
    img: './images/person.png',
    title: 'xyz',
  },
  {
    id: 2,
    name: 'Chilo Chilo',
    comment: 'Wow! This was really an awesome some package the one you need',
    img: './images/person.png',
    title: 'abc',
  },
  {
    id: 3,
    name: 'Emma Emma',
    comment: 'Probably the most random thing you have ever seen!',
    img: './images/person.png',
    title: 'stu dsdofgfbgknkgmnkgmflddieuttwywhddgsgtwtwgsjospsosjsggdjfjkdppsksndbvcbcmcmxmznzhahwterefdgfjgkhphpo',
  },
];

const useStyles = makeStyles((theme) => ({
  div: {
    paddingTop: '50px',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      flexDirection: 'row',
      paddingLeft:'19.25%',
      paddingRight: '20.25%',
      paddingBottom: '50px',
      paddingTop: 0,
    },
  },
  testimonial: {
    'textAlign': 'center', 
    'fontWeight': 500, 
    'textTransform': 'uppercase',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  desktopTestimonial: {
    'textAlign': 'center', 
    'fontWeight': 500, 
    'fontSize': 'x-large',
    'textTransform': 'uppercase',
    'paddingTop': '20px',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  root: {
    maxWidth: 234,
    margin: `${theme.spacing(4)}px auto`,
    [theme.breakpoints.up('sm')]: {
      marginTop: `${theme.spacing(1)}px`,
    },
  },
  media: {
    height: 0,
    paddingTop: '66.25%',
  },
}));

export default function MediaCard() {
  const classes = useStyles();

  return (
    <div>
      <Typography className={classes.desktopTestimonial}>
        Testimonials
      </Typography>
      <div className={classes.div}>
        <Typography className={classes.testimonial}>
          Testimonials
        </Typography>
        {data.map((item) => {
          return (
            <Card className={classes.root} key={item.id}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={item.img}
                  title={item.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h4">
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {item.comment}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          )
        })}
      </div>
    </div>
  );
}