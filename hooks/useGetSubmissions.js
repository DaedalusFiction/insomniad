import { useState, useEffect } from "react";
import { collection, query, orderBy, getDocs, limit } from "firebase/firestore";
import { db } from "../firebase";

function useGetSubmissions(updateCounter, folder) {
    const [submissions, setSubmissions] = useState(null);

    useEffect(() => {
        async function getSubmissions() {
            const q = query(
                //change this based on Firebase file structure
                collection(db, folder),
                orderBy("dateUploaded", "desc"),
                limit(70)
            );

            const docsSnap = await getDocs(q);
            let newSubmissions = [];
            docsSnap.docs.forEach((doc, index) => {
                newSubmissions = [...newSubmissions, doc];
            });
            setSubmissions(newSubmissions);
        }

        getSubmissions();
    }, [folder, updateCounter]);
    return [submissions];
}

export default useGetSubmissions;
