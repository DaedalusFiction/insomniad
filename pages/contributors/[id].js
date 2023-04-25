import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { doc, getDoc } from "firebase/firestore";
import React from "react";
import PageLayout from "../../components/layout/PageLayout";
import { db } from "../../firebase";
import NativeImage from "../../components/general/NativeImage";

const page = ({ contributor }) => {
    return (
        <>
            {contributor ? (
                <PageLayout name={contributor.name}>
                    <Container maxWidth="md" className="section">
                        <Grid container spacing={6}>
                            <Grid item xs={12} md={4}>
                                {contributor.URLs && (
                                    <NativeImage
                                        maxSize={800}
                                        image={{
                                            url: contributor.URLs[0],
                                            alt: contributor.name,
                                        }}
                                    />
                                )}
                            </Grid>
                            <Grid item xs={12} md={contributor.URLs ? 8 : 12}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        height: "100%",
                                        alignItems: "center",
                                    }}
                                >
                                    <Typography>{contributor.bio}</Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </PageLayout>
            ) : (
                <PageLayout name="Bio Not Found">
                    <Container className="section">
                        <Typography sx={{ textAlign: "center" }}>
                            The bio for this contributor cannot be found.
                        </Typography>
                    </Container>
                </PageLayout>
            )}
        </>
    );
};

export const getServerSideProps = async (context) => {
    const docSnap = await getDoc(doc(db, `contributors/${context.params.id}`));
    let contributor = false;
    if (docSnap.exists()) {
        contributor = docSnap.data();
    }
    return {
        props: {
            contributor,
        },
    };
};

export default page;
