import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import DynamicTyping from '../../components/DynamicTyping';
import About from '../../components/About';
import Timeline from '../../components/Timeline/Timeline';
import homeConfig from '../../assets/configs/homeConfig';

const Home = () => {
    return (
        <section>
            <Container maxWidth="xl" className="home-content" id="home">
                <Grid container justifyContent="center" alignItems="center" className="home-header">
                    <Grid item xs={12} style={{ textAlign: 'center' }}>
                        <Typography variant="h1" sx={{ color: '#f5f5f5', fontSize: '3em' }}>
                            {homeConfig.greeting}
                        </Typography>
                        <Box sx={{ textAlign: 'center', mt: 2 }}>
                            <DynamicTyping titles={homeConfig.titles} />
                        </Box>
                        <Box sx={{ mt: 4 }}>
                            <About about={homeConfig.about} />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Container maxWidth="xl" className="resume-content" id="resume" sx={{ mt: 6 }}>
                <Box sx={{ width: '100%', maxWidth: '960px', mx: 'auto' }}>
                    <Timeline items={homeConfig.workTimeline} />
                </Box>
            </Container>
        </section>
    );
}

export default Home;
