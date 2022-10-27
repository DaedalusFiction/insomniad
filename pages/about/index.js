import { Box, Button, Grid, Link, Typography } from "@mui/material";
import { Container } from "@mui/system";
import SizedImage from "../../components/general/SizedImage";
import { aboutContent, pages, secondaryProfiles } from "../../siteInfo";
import PageLayout from "../../components/layout/PageLayout";
import AboutNavbar from "../../components/about/AboutNavbar";

const index = () => {
    return (
        <PageLayout name="ABOUT US">
            <AboutNavbar />
            <Box className="section">
                <Grid container spacing={6}>
                    <Grid item xs={12} md={6}>
                        <SizedImage
                            height="30rem"
                            width="100%"
                            image={aboutContent.image}
                        />
                        <Typography variant="caption">
                            {aboutContent.image.alt}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h3">Our Roots</Typography>
                        <br />
                        <Typography>
                            The Rumen was founded in 2022 by author and poet
                            James Cole, writer and web developer David Sorensen,
                            and visual artist Chandler McGraw.
                        </Typography>
                        <br />
                        <Typography>
                            There isn&rsquo;t much else to say besides that we
                            hope you like what we&rsquo;re putting out there.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </PageLayout>
    );
};

export default index;
