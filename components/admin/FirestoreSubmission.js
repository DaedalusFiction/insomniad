import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import { deleteDoc, doc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import Link from "next/link";
import React, { useState } from "react";
import { db, storage } from "../../firebase";
import theme from "../../styles/themes/theme";
import ButtonWithConfirm from "../general/ButtonWithConfirm";

const FirestoreSubmission = ({
    updateCounter,
    setUpdateCounter,
    submission,
    folder,
}) => {
    const [expanded, setExpanded] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    const handleDelete = async () => {
        let url = submission.data().textFileURL;

        await deleteObject(ref(storage, url));

        await deleteDoc(doc(db, folder, submission.id));
        setUpdateCounter(updateCounter + 1);
    };
    return (
        <Box
            sx={{
                border: "1px solid " + theme.palette.custom.darkMuted,
                padding: "1rem",
                margin: ".5rem 0",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <Typography>
                    {submission.data().id} - {submission.data().fileName}
                </Typography>
                <Box>
                    <IconButton onClick={toggleExpand}>
                        {expanded ? (
                            <ArrowUpward style={{ color: "black" }} />
                        ) : (
                            <ArrowDownward style={{ color: "black" }} />
                        )}
                    </IconButton>
                </Box>
            </Box>
            {expanded && (
                <Box
                    sx={{
                        backgroundColor: theme.palette.secondary.main,
                        border: "1px solid " + theme.palette.custom.darkMuted,
                        padding: "1rem",
                        display: "flex",
                        flexDirection: "column",
                        gap: ".75rem",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <Typography>
                            File Name: {submission.data().fileName}
                        </Typography>
                        <a
                            href={submission.data().textFileURL}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Button variant="contained">Download</Button>
                        </a>
                    </Box>
                    <Divider />
                    {submission.data().fields.map((field, index) => {
                        return (
                            <Typography key={index}>
                                {`${field.name}: ${field.value}`}
                            </Typography>
                        );
                    })}
                    <ButtonWithConfirm
                        buttonText="Delete"
                        dialogText="Delete this item?"
                        notificationText="Deleting..."
                        handleClick={handleDelete}
                        isDisabled={isDisabled}
                    />
                </Box>
            )}
        </Box>
    );
};

export default FirestoreSubmission;
