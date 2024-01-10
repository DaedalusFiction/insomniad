import { Box, Button, Grid } from "@mui/material";
import React, { useState } from "react";
import StoryPreview from "../home/StoryPreview";
import {
    collection,
    doc,
    getDoc,
    getDocs,
    limit,
    orderBy,
    query,
    startAfter,
    where,
} from "firebase/firestore";
import { db } from "../../firebase";

const PublicationsIndex = ({ publications, category }) => {
    const [shownPublications, setShownPublications] = useState(publications);
    const [buttonIsShowing, setButtonIsShowing] = useState(true);
    const handleLoadMoreDocuments = async () => {
        console.log(shownPublications[shownPublications.length - 1].id);
        const publicationsRef = collection(db, "publications");
        const lastShown = await getDoc(
            doc(
                db,
                "publications",
                shownPublications[shownPublications.length - 1].id
            )
        );
        const poetryQuery = query(
            publicationsRef,
            where("categories", "array-contains", category),
            orderBy("dateUploaded", "desc"),
            limit(12),
            startAfter(lastShown)
        );

        const poetrySnapshot = await getDocs(poetryQuery);
        let poems = [];
        poetrySnapshot.docs.forEach((doc, index) => {
            poems = [...poems, { data: doc.data(), id: doc.id }];
        });
        if (poems.length < 12) {
            setButtonIsShowing(false);
        }
        setShownPublications([...shownPublications, ...poems]);
    };
    return (
        <Box>
            <Grid className="section" container spacing={3}>
                {shownPublications &&
                    shownPublications.map((poem, index) => {
                        return (
                            <Grid key={index} item xs={12} sm={6} md={3}>
                                <StoryPreview
                                    story={poem.data}
                                    category="poetry"
                                />
                            </Grid>
                        );
                    })}
            </Grid>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                {buttonIsShowing && (
                    <Button
                        variant="outlined"
                        onClick={handleLoadMoreDocuments}
                    >
                        Load More
                    </Button>
                )}
            </Box>
        </Box>
    );
};

export default PublicationsIndex;
