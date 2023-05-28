import React, {FC} from 'react';
import {LandingPageWrapper} from './landingPage.styled';
import {Grid, Paper, styled} from "@mui/material";
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
            </div>
        </Grid>
    </LandingPageWrapper>
);

export default LandingPage;
