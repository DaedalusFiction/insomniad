import { doc } from "firebase/firestore";
import React, { useEffect, useState } from "react";

import { marked } from "marked";
import { Box, Grid, StepContext, Typography } from "@mui/material";
import PreviewsSidebar from "./PreviewsSidebar";
import Link from "next/link";

const PublicationBody = ({ sidebarItems, story, sidebarCategory }) => {
    useEffect(() => {
        async function getStory() {
            if (story) {
                const xhr = new XMLHttpRequest();
                xhr.responseType = "text";
                xhr.onload = (event) => {
                    let markdowntext = xhr.response;
                    if (markdowntext.charAt(0) === `"`) {
                        markdowntext = markdowntext.substring(1);
                    }
                    const newBody = marked.parse(markdowntext);
                    document.getElementById("storyBody").innerHTML = newBody;
                };
                xhr.open("GET", story.markdownURL);
                xhr.send();
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }
        getStory();
    }, [story]);
    return (
        <Grid container className="section" spacing={8}>
            <Grid item xs={12} md={8}>
                <div
                    style={{ whiteSpace: "pre-wrap" }}
                    id="storyBody"
                    className="storyBody"
                ></div>
                <Typography
                    sx={{
                        marginTop: "3em",
                        fontStyle: "italic",
                    }}
                >
                    Published{" "}
                    {new Date(story.dateUploaded).toLocaleDateString("en-us", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                    })}
                </Typography>
                <Typography
                    variant="body2"
                    sx={{
                        fontSize: "1rem",
                        margin: "2rem 0",
                    }}
                >
                    Want to help <strong>The Rumen</strong> grow? Share us on
                    social media, tell your friends, or{" "}
                    <span style={{ textDecoration: "underline" }}>
                        <Link
                            href="https://buymeacoffee.com/therumen"
                            target="_BLANK"
                            rel="noreferrer"
                        >
                            buy us a coffee!
                        </Link>
                    </span>
                </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
                <Box className="sticky">
                    <PreviewsSidebar
                        sidebarCategory={sidebarCategory}
                        sidebarItems={sidebarItems}
                    />
                </Box>
            </Grid>
        </Grid>
    );
};

export default PublicationBody;
