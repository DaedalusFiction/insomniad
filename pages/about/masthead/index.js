import { Box, Divider, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import SizedImage from "../../../components/general/SizedImage";
import { leadProfile, secondaryProfiles } from "../../../siteInfo";
import PageLayout from "../../../components/layout/PageLayout";
import AboutNavbar from "../../../components/about/AboutNavbar";
import Profile from "../../../components/about/Profile";

const index = () => {
    return (
        <PageLayout name="MASTHEAD">
            <Container maxWidth="md" disableGutters>
                <AboutNavbar />
                <Box className="section">
                    <Grid container spacing={6}>
                        <Grid item key={index} xs={12} md={6}>
                            <Profile profile={secondaryProfiles[0]}>
                                <Typography>
                                    James Cole is an author, poet, filmmaker,
                                    scientist, and profesor based out of
                                    Morgantown, WV. He graduated from The
                                    College of William and Mary in 2018 with a
                                    degree in neuroscience and a bunch of
                                    unnecessary credits in creative writing and
                                    medieval studies. In 2023 he earned his
                                    Ph.D. in neuroscience from the University of
                                    Virginia. He currently teaches psychology
                                    and neuroscience at West Virginia
                                    University, with a special interest in the
                                    science of sleep, sensation, and
                                    neuroaesthetics.
                                </Typography>
                                <br />
                                <Typography>
                                    His own writings appear in a number of
                                    publications, including Oddball Magazine,
                                    Poetica Review, and The Artemis Journal,
                                    among others. In 2019 he released his first
                                    poetry collection, Crow, come home with
                                    VerbalEyze Press. More of his exploits can
                                    be found at his website:{" "}
                                    <span
                                        style={{ textDecoration: "underline" }}
                                    >
                                        <a href="https://jamescoleauthor.com">
                                            jamescoleauthor.com.
                                        </a>
                                    </span>
                                </Typography>
                                <br />
                                <Typography>
                                    James is the founder of Charlottesville
                                    Poetry Critique Circle, Poetry Live!
                                    Showcase, and formerly a creative writing
                                    teacher at WriterHouse. When he is not
                                    stressing about comma splices he has been
                                    known to suffer horrific deaths in historic
                                    short films, whack people with longswords,
                                    and clap way too loud for buskers.
                                </Typography>
                            </Profile>
                        </Grid>
                        <Grid item key={index} xs={12} md={6}>
                            <Profile profile={secondaryProfiles[1]}>
                                <Typography>
                                    David Sorensen is a writer, musician, and
                                    web developer living in central Virginia.
                                    His stories have appeared in a number of
                                    literary magazines, including New Reader
                                    Magazine, The Squawk Back, Infinite Rust,
                                    and, depending on how gullible you are,
                                    Harper&rsquo;s and The New Yorker. His
                                    upcoming novel, Unconventional Desire, will
                                    probably never actually be released or even
                                    finished.
                                </Typography>
                                <br />
                                <Typography>
                                    For anyone who is interested, David&rsquo;s
                                    favorite writers include David Foster
                                    Wallace, Dave Eggers, Douglas Coupland, Kurt
                                    Vonnegut, Thomas Mann, and Ivan Turgenev. He
                                    also likes trashy memoirs, by anyone.
                                </Typography>
                            </Profile>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </PageLayout>
    );
};

export default index;
