import { ArrowDownward } from "@mui/icons-material";
import { Grid, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import useGetSubmissions from "../../hooks/useGetSubmissions";
import FirestoreSubmission from "./FirestoreSubmission";

const FirestoreSubmissionsListing = ({
    folder,
    updateCounter,
    setUpdateCounter,
}) => {
    const [submissions] = useGetSubmissions(updateCounter, folder);
    return (
        <Box>
            <Typography variant="h3" sx={{ textAlign: "center" }}>
                Manage Story and Poetry Submissions
            </Typography>
            <br />
            {submissions &&
                submissions.map((submission, index) => {
                    return (
                        <FirestoreSubmission
                            folder={folder}
                            updateCounter={updateCounter}
                            setUpdateCounter={setUpdateCounter}
                            submission={submission}
                            key={index}
                        />
                    );
                })}
        </Box>
    );
};

export default FirestoreSubmissionsListing;