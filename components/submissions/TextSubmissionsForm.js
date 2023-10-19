import {
    Button,
    Checkbox,
    FormControlLabel,
    Grid,
    Input,
    TextField,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import Image from "next/image";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { db, storage } from "../../firebase";
import { galleryCategories } from "../../siteInfo";
import theme from "../../styles/themes/theme";
import ButtonWithConfirm from "../general/ButtonWithConfirm";

const TextSubmissionsForm = ({ config, folder }) => {
    const [formData, setFormData] = useState(
        JSON.parse(JSON.stringify(config))
    );
    const [selectedImages, setSelectedImages] = useState([]);
    const [selectedTextFile, setSelectedTextFile] = useState(null);
    const [previews, setPreviews] = useState([]);
    const [isUploading, setIsUploading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [fileError, setFileError] = useState("false");
    const fileInputRef = useRef();
    const textFileInputRef = useRef();
    const [isSubscribing, setIsSubscribing] = useState(true);

    const handleFieldChange = (e, field, index) => {
        const newFieldData = {
            ...formData.fields[index],
            value: e.target.value,
        };

        let newFormDataFields = formData.fields;
        newFormDataFields[index] = newFieldData;
        setFormData({ ...formData, fields: newFormDataFields });
    };

    const handleImagesChange = (e) => {
        setFileError("false");
        if (e.target.files[0].size > 1097152) {
            setFileError("File size must be less than 1MB");
            return;
        }
        setSelectedImages([...selectedImages, e.target.files[0]]);
        setFileError(false);
        if (e.target.files && e.target.files[0]) {
            var reader = new FileReader();

            reader.onload = (e) => {
                if (previews.includes(e.target.result)) {
                    setFileError("Please select another file");
                } else {
                    setPreviews([...previews, e.target.result]);
                }
            };

            reader.readAsDataURL(e.target.files[0]);
        }
        fileInputRef.current.children[0].value = null;
    };

    const handleTextFileChange = (e) => {
        if (e.target.files[0].size > 1097152) {
            setFileError("File size must be less than 1MB");
            return;
        }
        setSelectedTextFile(e.target.files[0]);
    };

    const handleRemovePreview = (preview) => {
        const newPreviews = previews.filter(
            (myPreview) => myPreview !== preview
        );
        setPreviews(newPreviews);
    };

    const handleRemoveSelectedImage = (index) => {
        const newSelectedImages = selectedImages.splice(index, 1);
        setSelectedImages(newSelectedImages);
    };

    const handleUpload = async () => {
        if (formData.fields[0].value === "") {
            setFileError("Please Enter Your Name");
            return;
        }

        var downloadURLs = [];
        let error = false;

        //check to see if image already exists in storage

        //check if markdown file with file name exists

        //check to see if document with selected Title already exists

        setIsUploading(true);
        if (selectedTextFile) {
            const textStorageRef = ref(
                storage,
                `submissions/${selectedTextFile.name}`
            );
            const uploadTextTask = uploadBytesResumable(
                textStorageRef,
                selectedTextFile
            );

            uploadTextTask.on(
                "state_changed",
                () => {},
                () => {},
                async () => {
                    let textFileURL = "";
                    await getDownloadURL(uploadTextTask.snapshot.ref).then(
                        (downloadURL) => {
                            textFileURL = downloadURL;
                        }
                    );

                    await setDoc(doc(db, folder, formData.fields[0].value), {
                        ...formData,
                        id: formData.fields[0].value,
                        textFileURL: textFileURL,
                        fileName: selectedTextFile.name,
                        dateUploaded: Date.now(),
                        subscribed: isSubscribing,
                    });

                    setFormData(JSON.parse(JSON.stringify(config)));
                    setIsUploading(false);
                    setFileError("");
                    setIsSubmitted(true);
                }
            );
        }
    };

    return (
        <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
                <Box
                    sx={{
                        display: "flex",
                        height: "100%",
                        alignItems: "center",
                    }}
                >
                    <Typography variant="h2" component="h3">
                        Submit a story, article, or collection of poems.
                    </Typography>
                </Box>
            </Grid>

            <Grid item xs={12} md={6}>
                {!isSubmitted ? (
                    <Box
                        component="form"
                        noValidate
                        autoComplete="off"
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "1rem",
                            backgroundColor: theme.palette.background.accent,
                            padding: "1em",
                            borderRadius: "5px",
                        }}
                    >
                        {formData.fields.map((field, index) => {
                            return (
                                <TextField
                                    InputLabelProps={{ shrink: true }}
                                    type={field.type}
                                    label={field.name}
                                    key={index}
                                    multiline={field.multiline}
                                    rows={field.rows}
                                    value={field.value}
                                    onChange={(e) => {
                                        handleFieldChange(e, field, index);
                                    }}
                                />
                            );
                        })}
                        <Box>
                            <Button
                                variant="outlined"
                                onClick={() => {
                                    textFileInputRef.current.children[0].click();
                                }}
                            >
                                select Text File
                            </Button>
                            <Input
                                variant="contained"
                                inputProps={{ accept: ".docx,.doc,.pdf" }}
                                type="file"
                                sx={{ display: "none" }}
                                ref={textFileInputRef}
                                onChange={handleTextFileChange}
                            >
                                Select Text File
                            </Input>
                            <br />
                            {selectedTextFile ? (
                                <Typography variant="caption">
                                    {selectedTextFile.name}
                                </Typography>
                            ) : (
                                <Typography variant="caption">
                                    .docx, .doc, or .pdf
                                </Typography>
                            )}
                        </Box>
                        <Box>
                            <FormControlLabel
                                label="Subscribe to Our Newsletter?"
                                control={
                                    <Checkbox
                                        checked={isSubscribing}
                                        id="subscribe"
                                        onChange={(e) => {
                                            setIsSubscribing(e.target.checked);
                                        }}
                                    />
                                }
                            />
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <ButtonWithConfirm
                                handleClick={handleUpload}
                                isDisabled={isUploading}
                                buttonText="Submit"
                                dialogText="Are you sure you want to submit?"
                                notificationText="Submitting..."
                            />
                        </Box>
                    </Box>
                ) : (
                    <Typography>
                        Thank you for your submission! We will read it and get
                        back to you soon!
                    </Typography>
                )}
            </Grid>
        </Grid>
    );
};

export default TextSubmissionsForm;
