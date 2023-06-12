import { Button } from "@mui/material";
import { doc, updateDoc } from "firebase/firestore";
import { ref } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import ButtonWithConfirm from "../general/ButtonWithConfirm";

const RejectionButton = ({ updateCounter, setUpdateCounter, submission }) => {
    const [isDisabled, setIsDisabled] = useState(true);
    useEffect(() => {
        if (!submission.data().isRejected) {
            setIsDisabled(false);
        }
    }, [submission]);
    const handleSendRejection = () => {
        const name = submission.data().fields[0].value.split(" ")[0]; //first name
        const genre = submission.data().fields[2].value.toLowerCase(); //genre
        const email = submission.data().fields[1].value; //email
        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "teardownthismall@gmail.com",
            Password: "78D72148D61B4ADC965C62BD127E5A6B31D1",
            To: email,
            From: "info@therumen.com",
            Subject: "Your submission to The Rumen",
            Body: `Dear ${name}, <br><br>We at The Rumen wanted to thank you for submitting your work to our publication. It is always an honor to read these submissions, and in an era with so many online journals we appreciate you taking the time to share your work with us. And though we do not feel your ${genre} is quite what we are looking for at this time we trust that it will find a home elsewhere. Note that our selection process is very subjective, and that this rejection is not a mark against the quality of your writing. <br><br>Thank you once again, and good luck with future submissions!<br><br>Best,<br>James Cole`,
        }).then((message) => {
            const docRef = doc(db, "storysubmissions", submission.data().id);
            const updateTask = updateDoc(docRef, { isRejected: true });
            setIsDisabled(true);
            setUpdateCounter(updateCounter + 1);
        });
    };
    return (
        <ButtonWithConfirm
            buttonText="Send Rejection Email"
            dialogText="Are you sure you wan to reject this?"
            notificationText="Rejecting..."
            handleClick={handleSendRejection}
            isDisabled={isDisabled}
        />
    );
};
// <Button
//     variant="contained"
//     onClick={handleSendRejection}
//     disabled={isDisabled}
// >
//     Reject
// </Button>

export default RejectionButton;
