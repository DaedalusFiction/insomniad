import { Box, Divider, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import SizedImage from "../../../components/general/SizedImage";
import { leadProfile, secondaryProfiles } from "../../../siteInfo";
import PageLayout from "../../../components/layout/PageLayout";
import AboutNavbar from "../../../components/about/AboutNavbar";

const index = () => {
    return (
        <PageLayout name="MASTHEAD">
            <AboutNavbar />
            <Box className="section">
                <Grid container spacing={6}>
                    {/* <Grid item xs={12} md={6}>
                        <SizedImage
                            height="30rem"
                            width="100%"
                            image={leadProfile.image}
                        />
                        <Typography variant="caption">
                            {leadProfile.image.alt}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h3">{leadProfile.name}</Typography>
                        <br />
                        <Typography sx={{ whiteSpace: "pre-wrap" }}>
                            {leadProfile.content}
                        </Typography>
                    </Grid> */}
                    {secondaryProfiles.map((profile, index) => {
                        return (
                            <Grid item key={index} xs={12} md={4}>
                                <Box>
                                    <SizedImage
                                        image={profile.image}
                                        height="25rem"
                                        width="100%"
                                    />
                                    <br />
                                    <Typography
                                        variant="h4"
                                        sx={{ textAlign: "center" }}
                                    >
                                        {profile.name}
                                    </Typography>
                                    <Divider
                                        sx={{
                                            maxWidth: "10rem",
                                            margin: "0 auto 1rem auto",
                                        }}
                                    />
                                    <Typography sx={{ whiteSpace: "pre-wrap" }}>
                                        {profile.content}
                                    </Typography>
                                </Box>
                            </Grid>
                        );
                    })}
                </Grid>
            </Box>
        </PageLayout>
    );
};

export default index;
