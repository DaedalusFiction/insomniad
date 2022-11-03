import { Box, Grid, Typography } from "@mui/material";
import SizedImage from "../../../components/general/SizedImage";
import { studioContent } from "../../../siteInfo";
import PageLayout from "../../../components/layout/PageLayout";
import AboutNavbar from "../../../components/about/AboutNavbar";

const index = () => {
    return (
        <PageLayout name="MISSION STATEMENT">
            <AboutNavbar />
            <Box className="section">
                <Grid container spacing={6}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h3">
                            {studioContent.header}
                        </Typography>
                        <br />
                        <Typography sx={{ whiteSpace: "pre-wrap" }}>
                            {studioContent.content}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <SizedImage
                            height="30rem"
                            width="100%"
                            image={studioContent.imageOne}
                        />
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: { xs: "start", md: "end" },
                            }}
                        >
                            <Typography variant="caption">
                                {studioContent.imageOne.alt}
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </PageLayout>
    );
};

export default index;
