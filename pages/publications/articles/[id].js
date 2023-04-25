import { Box, Container } from "@mui/system";
import {
    collection,
    doc,
    getDoc,
    getDocs,
    limit,
    orderBy,
    query,
    where,
} from "firebase/firestore";
import Image from "next/image";
import NativeImage from "../../../components/general/NativeImage";
import { db } from "../../../firebase";
import { Typography } from "@mui/material";
import PublicationBody from "../../../components/publications/PublicationBody";
import Link from "next/link";
import PublicationHeader from "../../../components/publications/publicationHeader";
import theme from "../../../styles/themes/theme";
import PublicationHero from "../../../components/publications/PublicationHero";

const page = ({ articles, story }) => {
    return (
        <Box>
            <PublicationHero publication={story} />
            <Container>
                <Box sx={{ display: { xs: "flex", md: "none" } }}>
                    <PublicationHeader publication={story} />
                </Box>

                <PublicationBody
                    sidebarCategory="articles"
                    sidebarItems={articles}
                    story={story}
                />
            </Container>
        </Box>
    );
};

export const getServerSideProps = async (context) => {
    const docSnap = await getDoc(doc(db, `publications/${context.params.id}`));
    let story = docSnap.data();

    const publicationsRef = collection(db, "publications");
    const articlesQuery = query(
        publicationsRef,
        where("categories", "array-contains", "article"),
        orderBy("dateUploaded", "desc"),
        limit(3)
    );

    const articlesSnapshot = await getDocs(articlesQuery);

    let articles = [];
    articlesSnapshot.docs.forEach((doc, index) => {
        articles = [...articles, doc.data()];
    });

    return {
        props: {
            articles,
            story,
        },
    };
};

export default page;
