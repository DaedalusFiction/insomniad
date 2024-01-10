import {
    collection,
    getDocs,
    limit,
    orderBy,
    query,
    where,
} from "firebase/firestore";
import PageLayout from "../../../components/layout/PageLayout";
import { db } from "../../../firebase";
import PublicationsIndex from "../../../components/layout/PublicationsIndex";

const index = ({ poems }) => {
    return (
        <PageLayout name="Poetry">
            <PublicationsIndex publications={poems} category="poetry" />
        </PageLayout>
    );
};

export const getServerSideProps = async () => {
    const publicationsRef = collection(db, "publications");
    const poetryQuery = query(
        publicationsRef,
        where("categories", "array-contains", "poetry"),
        orderBy("dateUploaded", "desc"),
        limit(12)
    );

    const poetrySnapshot = await getDocs(poetryQuery);
    let poems = [];
    poetrySnapshot.docs.forEach((doc, index) => {
        poems = [...poems, { data: doc.data(), id: doc.id }];
    });

    return {
        props: {
            poems,
        },
    };
};

export default index;
