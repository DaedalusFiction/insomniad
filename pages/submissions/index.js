import {
    Box,
    Grid,
    List,
    ListItem,
    ListItemText,
    Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import PageLayout from "../../components/layout/PageLayout";
import TextSubmissionsForm from "../../components/submissions/TextSubmissionsForm";
import ImageSubmissionsForm from "../../components/submissions/ImageSubmissionsForm";
import { imageSubmissionsConfig, textSubmissionsConfig } from "../../siteInfo";
import theme from "../../styles/themes/theme";
import Link from "next/link";

const index = () => {
    return (
        <PageLayout name="Submissions">
            <Container className="section">
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Container maxWidth="md">
                            <Box sx={{ marginBottom: "4rem" }}>
                                <Typography variant="h3" component="h2">
                                    Guidelines
                                </Typography>
                                <br />
                                <Typography
                                    sx={{
                                        color: theme.palette.custom.darkMuted,
                                    }}
                                >
                                    This is where we can talk in general about
                                    our submission guidelines. Lorem ipsum,
                                    dolor sit amet consectetur adipisicing elit.
                                    Libero natus assumenda vitae autem ab.
                                    Impedit expedita eius culpa maxime dolore
                                    ipsa neque molestiae enim quas cupiditate,
                                    officiis tempore rem architecto?
                                </Typography>
                                <br />
                                <Typography variant="h4" component="h3">
                                    Section One
                                </Typography>
                                <Typography
                                    sx={{
                                        color: theme.palette.custom.darkMuted,
                                    }}
                                >
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Libero natus assumenda
                                    vitae autem ab. Impedit expedita eius culpa
                                    maxime dolore ipsa neque molestiae enim quas
                                    cupiditate, officiis tempore rem architecto?
                                </Typography>
                                <br />
                                <Typography variant="h4" component="h3">
                                    Section Two
                                </Typography>
                                <Typography
                                    sx={{
                                        color: theme.palette.custom.darkMuted,
                                    }}
                                >
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Libero natus assumenda
                                    vitae autem ab. Impedit expedita eius culpa
                                    maxime dolore ipsa neque molestiae enim quas
                                    cupiditate, officiis tempore rem architecto?
                                </Typography>
                                <br />
                                <Typography variant="h4" component="h3">
                                    Section Three
                                </Typography>
                                <Typography
                                    sx={{
                                        color: theme.palette.custom.darkMuted,
                                    }}
                                >
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Libero natus assumenda
                                    vitae autem ab. Impedit expedita eius culpa
                                    maxime dolore ipsa neque molestiae enim quas
                                    cupiditate, officiis tempore rem architecto?
                                </Typography>
                                <List>
                                    <ListItem>
                                        <ListItemText
                                            sx={{
                                                color: theme.palette.custom
                                                    .darkMuted,
                                            }}
                                        >
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Nulla,
                                            laboriosam!
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText
                                            sx={{
                                                color: theme.palette.custom
                                                    .darkMuted,
                                            }}
                                        >
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Nulla,
                                            laboriosam!
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText
                                            sx={{
                                                color: theme.palette.custom
                                                    .darkMuted,
                                            }}
                                        >
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Nulla,
                                            laboriosam!
                                        </ListItemText>
                                    </ListItem>
                                </List>
                                <Typography variant="h4" component="h3">
                                    Section Four
                                </Typography>
                                <Typography
                                    sx={{
                                        color: theme.palette.custom.darkMuted,
                                    }}
                                >
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Libero natus assumenda
                                    vitae autem ab. Impedit expedita eius culpa
                                    maxime dolore ipsa neque molestiae enim quas
                                    cupiditate, officiis tempore rem architecto?
                                </Typography>
                                <br />
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Typography
                                        variant="caption"
                                        sx={{
                                            color: theme.palette.custom
                                                .darkMuted,
                                            textAlign: "center",
                                        }}
                                    >
                                        Have a question or comment?{" "}
                                        <span
                                            style={{
                                                textDecoration: "underline",
                                            }}
                                        >
                                            <Link href="contact">
                                                Contact us.
                                            </Link>
                                        </span>
                                    </Typography>
                                </Box>
                            </Box>
                        </Container>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextSubmissionsForm
                            config={textSubmissionsConfig}
                            folder="storysubmissions"
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <ImageSubmissionsForm
                            config={imageSubmissionsConfig}
                            folder="imagesubmissions"
                        />
                    </Grid>
                </Grid>
            </Container>
        </PageLayout>
    );
};

export default index;
