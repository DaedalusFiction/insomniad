import {
    collection,
    getDocs,
    limit,
    orderBy,
    query,
    where,
} from "firebase/firestore";
import React from "react";
import PageLayout from "../../../components/layout/PageLayout";
import { db } from "../../../firebase";
import PublicationsIndex from "../../../components/layout/PublicationsIndex";

const index = ({ fiction }) => {
    return (
        <PageLayout name="Articles">
            <PublicationsIndex publications={fiction} category="article" />
        </PageLayout>
    );
};

export const getServerSideProps = async (context) => {
    const publicationsRef = collection(db, "publications");
    const fictionQuery = query(
        publicationsRef,
        where("categories", "array-contains", "article"),
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
