import {Grid, List, ListItemText, Divider, Typography, ListItem} from '@mui/material';
import React, { FC } from 'react';
import { AboutWrapper } from './about.styled';

interface AboutProps {}

const About: FC<AboutProps> = () => (
 <AboutWrapper data-testid="About">
    <Grid container spacing={2} mt={4} p={4}>
        {/*<Grid xs={6}>*/}
        {/*    <img src="https://media.licdn.com/dms/image/D4D03AQH9uIGdq_1aPw/profile-displayphoto-shrink_400_400/0/1663839878181?e=1691020800&v=beta&t=lXNnNjhIgDwlgNDRUBp27VXKevTlvQhMP1DVj65D8EE" alt=""/>*/}
        {/*</Grid>*/}
        <Grid xs={6}>
            <Typography variant="h3">
                About Me
            </Typography>
            <Typography variant="subtitle1">
                Seasoned <strong>Software Engineer</strong> with 10 years of progressive experience. Wears many hats with the aim of getting things done.
            </Typography>
            <List component="nav">
                <ListItem>
                    <ListItemText primary="Denis Rwelamila" secondary="Name" />
                </ListItem>
                <Divider />
                <ListItem divider>
                    <ListItemText primary="rwelamila.jr@gamil.com" secondary="Email" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Software Engineer" secondary="Occupation"/>
                </ListItem>
            </List>
        </Grid>
    </Grid>
 </AboutWrapper>
);

export default About;
