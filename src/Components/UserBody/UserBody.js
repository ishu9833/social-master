import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const UserBody = (props) => {
    const { title, id, body } = props.user;
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const history = useHistory();
    const handleClick = () => {
        const url = `/user/${id}`;
        history.push(url);

    }
    return (
        <div>
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {title}
                    </Typography>
                    <Typography variant="h5" component="h2">
                       The People of Social Buddy
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        User ID: {id}
                    </Typography>
                    <Typography variant="body2" component="p">
                    Content:  {body}
          <br />
                       
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={() => handleClick(id)} size="small" variant="outlined" color="secondary">See more</Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default UserBody;