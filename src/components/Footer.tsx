import Container from "@mui/material/Container";
import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { ImWhatsapp } from "react-icons/im";

export default function Footer() {
    return(
        <Container maxWidth="lg">
            <Grid container spacing={8} >
                <Grid item xs={4}>
                    <Typography variant="h6" component="h1" sx={{ mb: 2, color: '#ffde00', fontWeight: 'bold' }}>
                        Endereço
                    </Typography>
                    <Typography sx={{ mb: 2 }}>
                        Rua José Clemente Pereira - St. Candida de Morais, Goiânia - GO, 74463-290
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="h6" component="h1" sx={{ mb: 2, color: '#ffde00', fontWeight: 'bold' }}>
                        Atendimento
                    </Typography>
                    <Typography sx={{ mb: 2 }}>
                        Segunda à Sexta:
                        8h às 18:00
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="h6" component="h1" sx={{ mb: 2, color: '#ffde00', fontWeight: 'bold' }}>
                        Fale conosco
                    </Typography>
                    <Typography sx={{ display: 'flex' }} >
                        <ImWhatsapp size={28} style={{paddingRight: 8}}/>
                        (62) 99167-0290
                    </Typography>
                    <Typography sx={{ display: 'flex' }} >
                        <ImWhatsapp size={28} style={{paddingRight: 8}}/>
                        (62) 98436-0282
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
}