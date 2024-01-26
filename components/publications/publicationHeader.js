import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import theme from "../../styles/themes/theme";

const PublicationHeader = ({ publication }) => {
    return (
        <Box
            sx={{
                padding: "3rem 0",
            }}
        >
            <Box
                sx={{
                    backgroundColor: {
                        xs: "white",
                        md: theme.palette.secondary.main,
                    },
                    padding: { xs: "0", md: "3rem 7rem" },
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        gap: ".25em",
                        justifyContent: "center",
                    }}
                >
                    {publication.subCategories.map((subCategory, index) => {
                        return (
                            <Typography key={index} variant="caption">
                                [{subCategory}]
                            </Typography>
                        );
                    })}
                </Box>
                <Typography
                    sx={{
                        textAlign: "center",
                        margin: ".25em 0",
                        textTransform: "uppercase",
                        // maxWidth: "12ch",
                    }}
                    variant="h1"
                >
                    {publication.fields[0].value}
                </Typography>
                <Typography sx={{ textAlign: "center", fontStyle: "italic" }}>
                    by
                </Typography>
                <Typography
                    sx={{
                        textAlign: "center",
                        margin: ".5em 0",
                        "&:hover": {
                            textDecoration: "underline",
                        },
                    }}
                    variant="h4"
                >
                    <Link href={`/contributors/${publication.fields[1].value}`}>
                        {publication.fields[1].value}
                    </Link>
                </Typography>
            </Box>
        </Box>
    );
};

export default PublicationHeader;
