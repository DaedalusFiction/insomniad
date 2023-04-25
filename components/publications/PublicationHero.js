import { Box, Container, Typography } from "@mui/material";
import React from "react";
import NativeImage from "../general/NativeImage";
import PublicationHeader from "./publicationHeader";

const PublicationHero = ({ publication }) => {
    return (
        <Container maxWidth="xl" disableGutters>
            <Box sx={{ position: "relative" }}>
                <Box sx={{ zIndex: "-1" }}>
                    <NativeImage
                        maxSize={3000}
                        image={{ url: publication.URLs[0], alt: "article" }}
                    />
                </Box>
                <Container>
                    <Box sx={{ display: "flex", justifyContent: "end" }}>
                        <Typography variant="caption">
                            {publication.fields[4].value}
                        </Typography>
                    </Box>
                </Container>
                <Box
                    sx={{
                        position: "absolute",
                        display: { xs: "none", md: "flex" },
                        top: "30vh",
                        left: "0",
                        height: "100%",
                        width: "100%",
                        zIndex: "2",

                        justifyContent: "center",
                    }}
                >
                    <PublicationHeader publication={publication} />
                </Box>
            </Box>
        </Container>
    );
};

export default PublicationHero;
