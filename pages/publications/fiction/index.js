import { Divider, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import {
    collection,
    getDocs,
    limit,
    orderBy,
    query,
    where,
} from "firebase/firestore";
import React from "react";
import StoryPreview from "../../../components/home/StoryPreview";
import PageLayout from "../../../components/layout/PageLayout";
import { db } from "../../../firebase";
import PublicationsIndex from "../../../components/layout/PublicationsIndex";

const index = ({ fiction }) => {
    return (
        <PageLayout name="Fiction">
            <PublicationsIndex publications={fiction} category="fiction" />
        </PageLayout>
    );
};

export const getServerSideProps = async (context) => {
    const publicationsRef = collection(db, "publications");
    const fictionQuery = query(
        publicationsRef,
        where("categories", "array-contains", "fiction"),
        orderBy("dateUploaded", "desc"),
        limit(12)
    );

    const fictionSnapshot = await getDocs(fictionQuery);

    let fiction = [];
    fictionSnapshot.docs.forEach((doc, index) => {
        fiction = [...fiction, { data: doc.data(), id: doc.id }];
    });

    return {
        props: {
            fiction,
        },
    };
};

export default index;
