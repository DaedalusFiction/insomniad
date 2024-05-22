import { Button } from "@mui/material";

const GenerateNewsletter = ({ publications }) => {
    const handleGenerateNewsletter = () => {
        const newsletterTemplate = `
             <!DOCTYPE html>
    <html>
        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="format-detection" content="address=no" />
            <meta name="format-detection" content="telephone=no" />
            <meta name="format-detection" content="email=no" />
            <meta name="x-apple-disable-message-reformatting" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link
                href="https://fonts.googleapis.com/css2?family=Playfair+Display+SC:wght@900&display=swap"
                rel="stylesheet"
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre&family=Raleway:wght@300;700&display=swap"
                rel="stylesheet"
            />
    
            <title>The Rumen -- Monthly Newsletter</title>
            <!-- Style goes here -->
            <style type="text/css">
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                h1,
                h2,
                h3,
                h4,
                h5 {
                    font-family: "Playfair Display SC", serif;
                }
    
                h1 {
                    font-size: 3rem;
                }
                h2,
                h3,
                h4 {
                    font-size: 2.5rem;
                    margin-bottom: 0.5rem;
                    line-height: 1em;
                }
                p,
                a {
                    font-family: "Raleway", sans-serif;
                    margin: 0 auto;
                    color: black !important;
                }
                .dark a {
                    color: white !important;
                }
                .btn {
                    border-radius: 4px;
                    background-color: #ffb09e;
                    display: block;
                    text-decoration: none;
                    width: fit-content;
                    padding: 1em 2em;
                    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
                    font-size: 1.5rem;
                    font-weight: 700;
                    margin: 0 auto;
                    transition: 300ms;
                }
                .btn:hover {
                    background-color: #dad6a6;
                }
                .wrapper {
                    margin: 0 auto;
                    max-width: 1000px;
                    padding: 2rem 0;
                }
                .hero {
                    background: linear-gradient(#ffb09e, #ffb09e);
                    background-position: 0 15rem;
                    background-repeat: no-repeat;
                    padding: 2rem;
                    border-radius: 5px;
                }
                .author-name {
                    font-size: 0.8rem;
                    font-style: italic;
                }
                .bg-preview {
                    background-color: #ffb09e;
                }
                .dark {
                    background-color: rgb(128, 45, 31);
                }
                .dark h4,
                .dark p,
                .dark a {
                    color: #fffceb !important;
                }
                .text-center {
                    text-align: center;
                }
                .link {
                    font-weight: 700;
                    color: black;
                }
    
                .section {
                    margin: 1.5rem 0;
                    padding: 2rem 1rem;
                    border-radius: 5px;
                }
                .p-4 {
                    padding: 1.5rem;
                }
    
                .italic {
                    font-style: italic;
                }
                .img-container {
                    margin: 1rem;
                }
                @media screen and (min-width: 912px) {
                    .section {
                        margin: 1.5rem 0rem;
                        padding: 2rem 3rem;
                    }
                    .img-container {
                        display: inline-block;
                        width: 40%;
                        vertical-align: top;
    
                        margin: 1rem;
                    }
                    .text-container {
                        display: inline-block;
                        width: 50%;
                        margin: 1rem;
                    }
                    .text-wrapper {
                        max-width: 65ch;
                        margin: 0 auto;
                    }
                }
            </style>
        </head>
        <body style="margin: 0; padding: 0; background-color: #341a05">
            <!-- Main table -->
            <table border="0" cellspacing="0" cellpadding="0" width="100%">
                <tr>
                    <td style="padding: 0 40px">
                        <!-- Child table -->
                        <table
                            align="center"
                            border="0"
                            cellspacing="0"
                            cellpadding="0"
                            width="100%"
                            style="width: 100%; min-width: 100%"
                        >
                            <tr>
                                <td>
                                    <div
                                        class="wrapper"
                                        style="
                                            background-color: rgb(248, 239, 239);
                                            padding: 1rem;
                                            margin-top: 2rem;
                                            border-radius: 5px;
                                        "
                                    >
                                        <h1 class="text-center">The Rumen</h1>
                                        <p class="text-center">
                                            LATEST POETRY AND PROSE
                                        </p>
    
                                        <div class="hero">
                                            <img
                                                src=${
                                                    publications[0].data.URLs[0]
                                                }
                                                width="100%"
                                                height="auto"
                                                style="
                                                    margin: 0;
                                                    padding: 0;
                                                    border: none;
                                                    display: block;
                                                    margin-bottom: 2rem;
                                                "
                                                border="0"
                                                alt=${
                                                    publications[0].data
                                                        .fields[4].value
                                                }
                                            />
                                            <div style="padding: 2rem">
                                                <h2 class="text-center">
                                                    ${
                                                        publications[0].data
                                                            .fields[0].value
                                                    }
                                                </h2>
    
                                                <p class="author-name text-center">
                                                    by ${
                                                        publications[0].data
                                                            .fields[1].value
                                                    }
    
                                                    <br />
                                                </p>
                                                <br/>
                                                <p
                                                    style="
                                                        width: fit-content;
                                                        margin: 0 auto;
                                                    "
                                                >
                                                    ${
                                                        publications[0].data
                                                            .fields[2].value
                                                    }
                                                </p>
                                                <br />
                                                <p class="text-center">
                                                    <a
                                                        href=${
                                                            "https://www.therumen.com/publications/" +
                                                            publications[0].id
                                                                .split(" ")
                                                                .join("%20")
                                                        }
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        class="link"
                                                        >Continue Reading</a
                                                    >
                                                </p>
                                            </div>
                                        </div>
                                        <div class="section">
                                            <div>
                                                <div class="img-container">
                                                    <div>
                                                        <img
                                                            src=${
                                                                publications[1]
                                                                    .data
                                                                    .URLs[0]
                                                            }
                                                            width="100%"
                                                            height="auto"
                                                            style="
                                                                margin: 0;
                                                                padding: 0;
                                                                border: none;
                                                                display: block;
                                                            "
                                                            border="0"
                                                            alt=${
                                                                publications[1]
                                                                    .data
                                                                    .fields[4]
                                                                    .value
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                                <div class="text-container">
                                                    <div>
                                                        <h3>${
                                                            publications[1].data
                                                                .fields[0].value
                                                        }</h3>
                                                        <p class="author-name">
                                                            by ${
                                                                publications[1]
                                                                    .data
                                                                    .fields[1]
                                                                    .value
                                                            }
                                                        </p>
                                                        <br />
                                                        <p>
                                                            ${
                                                                publications[1]
                                                                    .data
                                                                    .fields[2]
                                                                    .value
                                                            }
                                                        </p>
                                                        <br />
                                                        <a
                                                            href="https://www.therumen.com/publications/${publications[1].id
                                                                .split(" ")
                                                                .join("%20")}"
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            class="link"
                                                            >Continue Reading</a
                                                        >
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="section bg-preview">
                                            <div>
                                                <div class="text-container">
                                                    <h3>${
                                                        publications[2].data
                                                            .fields[0].value
                                                    }</h3>
                                                    <p class="author-name">
                                                        by ${
                                                            publications[2].data
                                                                .fields[1].value
                                                        }
                                                    </p>
                                                    <br />
                                                    <p>
                                                        ${
                                                            publications[2].data
                                                                .fields[2].value
                                                        }
                                                    </p>
                                                    <br />
                                                    <a
                                                        href="https://www.therumen.com/publications/${publications[2].id
                                                            .split(" ")
                                                            .join("%20")}"
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        class="link"
                                                        >Continue Reading</a
                                                    >
                                                </div>
                                                <div class="img-container">
                                                    <div>
                                                        <img
                                                            src=${
                                                                publications[2]
                                                                    .data
                                                                    .URLs[0]
                                                            }
                                                            width="100%"
                                                            height="auto"
                                                            style="
                                                                margin: 0;
                                                                padding: 0;
                                                                border: none;
                                                                display: block;
                                                            "
                                                            border="0"
                                                            alt=${
                                                                publications[2]
                                                                    .data
                                                                    .fields[4]
                                                                    .value
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
    
                                        <div class="section">
                                            <div>
                                                <div class="img-container">
                                                    <div>
                                                        <img
                                                            src=${
                                                                publications[3]
                                                                    .data
                                                                    .URLs[0]
                                                            }
                                                            width="100%"
                                                            height="auto"
                                                            style="
                                                                margin: 0;
                                                                padding: 0;
                                                                border: none;
                                                                display: block;
                                                            "
                                                            border="0"
                                                            alt=${
                                                                publications[3]
                                                                    .data
                                                                    .fields[4]
                                                                    .value
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                                <div class="text-container">
                                                    <div>
                                                        <h3>
                                                            ${
                                                                publications[3]
                                                                    .data
                                                                    .fields[0]
                                                                    .value
                                                            }
                                                        </h3>
                                                        <p class="author-name">
                                                            by ${
                                                                publications[3]
                                                                    .data
                                                                    .fields[1]
                                                                    .value
                                                            }
                                                        </p>
                                                        <br />
                                                        <p>
                                                            ${
                                                                publications[3]
                                                                    .data
                                                                    .fields[2]
                                                                    .value
                                                            }
                                                        </p>
                                                        <br />
                                                        <a
                                                            href="https://www.therumen.com/publications/${publications[3].id
                                                                .split(" ")
                                                                .join("%20")}"
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            class="link"
                                                            >Continue Reading</a
                                                        >
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
    
                                        <section class="section dark">
                                            <h4 class="text-center">
                                                Take Your Writing to the Next Level
                                            </h4>
                                            <br />
                                            <p class="text-center text-wrapper">
                                                Red Brick Inc., the creators of The
                                                Rumen, are pleased to offer
                                                beautiful, modern
                                                <strong
                                                    >AUTHOR PORTFOLIO
                                                    WEBSITES</strong
                                                >
                                                at a fraction of the cost of their
                                                standard sites!
                                            </p>
    
                                            <br />
    
                                            <p class="text-center text-wrapper">
                                                If you are an author or professional
                                                writer and would like to learn more
                                                about how you can take advantage of
                                                this offer, please visit Red Brick
                                                Inc. today!
                                            </p>
                                            <br />
                                            <br />
                                            <div class="btn">
                                                <a
                                                    href="https://redbrickinc.com/portfolio"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    style="
                                                        text-decoration: none !important;
                                                    "
                                                    >GET STARTED!</a
                                                >
                                            </div>
                                        </section>
                                        <section class="section">
                                            <div>
                                                <p class="text-center text-wrapper">
                                                    <strong>The Rumen </strong>is a
                                                    collaboration between writers,
                                                    poets, and artists from a
                                                    variety of demographics and
                                                    backgrounds. Like the guts of an
                                                    ungulate, we want
                                                    <strong>The Rumen </strong>to be
                                                    a space for ideas and
                                                    experiences to digest, ferment,
                                                    and transform.
                                                </p>
                                                <br />
                                                <p class="text-center text-wrapper">
                                                    We are especially interested in
                                                    publishing contributors from
                                                    historically underrepresented
                                                    people groups.
                                                </p>
                                                <br />
                                                <p class="text-center text-wrapper">
                                                    Want to help
                                                    <strong>The Rumen</strong> grow?
                                                    Share us on social media, tell
                                                    your friends, or
                                                    <a
                                                        href="https://www.buymeacoffee.com/therumen"
                                                        target="_blank"
                                                        rel="noreferrer"
                                                    >
                                                        buy us a coffee!
                                                    </a>
                                                </p>
                                            </div>
                                        </section>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
            <!-- Footer -->
        </body>
    </html>
    
           `;
        const blob = new Blob([newsletterTemplate], { type: "text/html" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `rumen-newsletter`;
        link.click();
    };
    return (
        <Button variant="contained" onClick={handleGenerateNewsletter}>
            Download Newsletter
        </Button>
    );
};

export default GenerateNewsletter;
