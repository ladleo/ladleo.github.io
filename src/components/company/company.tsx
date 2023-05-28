import React, {FC} from 'react';
import {CompanyWrapper} from './company.styled';
import {Grid, ImageListItem, ImageListItemBar, Typography} from "@mui/material";

interface CompanyProps {
}

const itemData = [
    {
        img: 'https://ramani.io/static/media/ramaniLogo.6aaaa2f61ff851cff114a810613efa03.svg',
        title: 'Ramani.io Company',
        url: 'https://ramani.io/home'
    },
    {
        img: 'https://tunzaa.co.tz/images/tunzaa_logo.png',
        title: 'TUNZAA',
        url: 'https://tunzaa.co.tz/'
    },
    {
        img: 'https://media.licdn.com/dms/image/C4D0BAQEknuUWxLiksg/company-logo_200_200/0/1595410336551?e=1693440000&v=beta&t=HPhdXTFy551iFixrgOLQajMtBFXPg8JYBeEjXuJeLFY',
        title: 'AIMGROUP',
        url: 'https://www.linkedin.com/company/aim-group_2/?originalSubdomain=sl'
    },
    {
        img: 'https://www.ucc.co.tz/image-cache/scale/120x120/2022/02/22/s4s1J9bxoLLRydZqBiv3x0f46DVznVsD3jjVrhvN.png',
        title: 'UCC',
        url: 'https://www.ucc.co.tz/'
    },
    {
        img: '#',
        title: 'Thinkers Technology',
        url: '#'
    },
    {
        img: '#',
        title: 'Tujenge Technologies',
        url: '#'
    },
];

const Company: FC<CompanyProps> = () => (
    <CompanyWrapper data-testid="Company">
        <Typography variant="h3" p={6} sx={{fontFamily: 'Oxygen'}}>
            Companies that helped me horn my skills
        </Typography>
        <Grid container spacing={3} px={3}>
            {itemData.map((item) => (
                <Grid item xs={3}>
                    <ImageListItem key={item.img}>
                        <img
                            src={item.img}
                            srcSet={item.img}
                            alt={item.title}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            title={item.title}
                        />
                    </ImageListItem>
                </Grid>
            ))}
        </Grid>
    </CompanyWrapper>
);

export default Company;
