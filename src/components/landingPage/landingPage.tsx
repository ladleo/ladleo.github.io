import React, {FC} from 'react';
import {LandingPageWrapper} from './landingPage.styled';
import {Button, Grid, Icon, IconButton} from "@mui/material";
import Typography from "@mui/material/Typography";

interface LandingPageProps {
}

const LandingPage: FC<LandingPageProps> = () => (
    <LandingPageWrapper data-testid="LandingPage">
        <Grid container>
            <div>
                <Typography variant="h6" sx={{fontFamily: 'Oxygen'}}>
                    HEY! I AM
                </Typography>
                <Typography variant="h3" sx={{fontFamily: 'Oxygen'}}>
                    Denis Rwelamila
                </Typography>
                <Typography variant="h5" sx={{fontFamily: 'Oxygen'}} mt={1}>
                    I am an Engineer(Software)
                </Typography>
                <br/>
                <Button variant="contained" href="mailto:rwelamila.jr@gmail.com">
                    CONTACT ME
                </Button>
            </div>
        </Grid>
        <div style={{ margin: "auto"}}>
            <IconButton href="#skills">
                <Icon fontSize="large" color="primary">keyboard_double_arrow_down</Icon>
            </IconButton>
        </div>
    </LandingPageWrapper>
);

export default LandingPage;
