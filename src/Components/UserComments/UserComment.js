import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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

const UserComment = () => {

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    

    const { userId } = useParams();
    const [comment, setComment] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${userId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setComment(data))
    }, []);
    // console.log(comment);
    return (
        [
        comment.length > 0 &&  <div>
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  Post ID: {comment[0].postId}
                </Typography>
                <Typography variant="h5" component="h2">
                   Name : {comment[0].name}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    Email : {comment[0].email}
                    <br/>

                    ID: {comment[0].id}
                </Typography>
                <Typography variant="body2" component="p">
                    Content: {comment[0].body}
                <br />
                    
                </Typography>
            </CardContent>
        </Card>
        <br/>

        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  Post ID: {comment[1].postId}
                </Typography>
                <Typography variant="h5" component="h2">
                   Name : {comment[1].name}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    Email : {comment[1].email}
                    <br/>

                    ID: {comment[1].id}
                </Typography>
                <Typography variant="body2" component="p">
                    Content: {comment[1].body}
                <br />
                    
                </Typography>
            </CardContent>
        </Card>
        <br/>
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  Post ID: {comment[2].postId}
                </Typography>
                <Typography variant="h5" component="h2">
                   Name : {comment[2].name}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    Email : {comment[2].email}
                    <br/>

                    ID: {comment[2].id}
                </Typography>
                <Typography variant="body2" component="p">
                    Content: {comment[2].body}
                <br />
                  
                </Typography>
            </CardContent>
        </Card>
        <br/>
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  Post ID: {comment[3].postId}
                </Typography>
                <Typography variant="h5" component="h2">
                   Name : {comment[3].name}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    Email : {comment[3].email}
                    <br/>

                    ID: {comment[3].id}
                </Typography>
                <Typography variant="body2" component="p">
                    Content: {comment[3].body}
                <br />
                </Typography>
            </CardContent>
        </Card>
        <br/>
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  Post ID: {comment[4].postId}
                </Typography>
                <Typography variant="h5" component="h2">
                   Name : {comment[4].name}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    Email : {comment[4].email}
                    <br/>

                    ID: {comment[4].id}
                </Typography>
                <Typography variant="body2" component="p">
                    Content: {comment[4].body}
                <br />
                   
                </Typography>
            </CardContent>
        </Card>

        </div>
        
        ]
    );
};

export default UserComment;