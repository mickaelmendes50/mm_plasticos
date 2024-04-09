import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import {Grid} from "@mui/material";
import Image from "next/image";
import logo from '../../images/logo-test.jpg'

export default function About() {
    return (
        <Container maxWidth="md">
            <Grid container spacing={8} sx={{padding: 4}}>
                <Grid item xs={7}>
                    <Typography variant="h4" component="h1" sx={{ mb: 2, color: '#ffde00' }}>
                        Quem somos
                    </Typography>
                    <Typography sx={{ mb: 2 }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam ac ex eu pulvinar. In egestas tempus turpis quis bibendum. Vestibulum velit felis, commodo ac ornare vitae, convallis et eros. Sed commodo tincidunt orci non efficitur. Quisque gravida varius massa, quis laoreet nisi pulvinar eu. In hac habitasse platea dictumst
                    </Typography>
                </Grid>
                <Grid item xs={5}>
                    <Image
                        width={200}
                        height={200}
                        src={logo}
                        alt={'logo'}
                        style={{ alignSelf: 'center' }} >
                    </Image>
                </Grid>
            </Grid>
        </Container>
    );
}
