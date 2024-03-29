import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { Button, Divider, Fade, Grid, Slide } from "@mui/material";
import Link from "next/link";
import theme from "../../styles/themes/theme";
import { useEffect, useState } from "react";
import { navigateToTop } from "../../utility/navigateToTop";
import { pages, siteName, navbar } from "../../siteInfo";
import { useRouter } from "next/router";

const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [expanded, setExpanded] = useState(false);
    const [titleFontSize, setTitleFontSize] = useState("2.75rem");
    const router = useRouter();
    const currentPage = router.pathname.split("/")[1];
    const path = router.pathname.split("/");

    const [trigger, setTrigger] = useState(true);

    useEffect(() => {
        const threshold = 30;
        let lastScrollY = window.pageYOffset;
        let ticking = false;

        const updateScrollDir = () => {
            const scrollY = window.pageYOffset;

            if (Math.abs(scrollY - lastScrollY) < threshold) {
                ticking = false;
                return;
            }
            setTrigger(scrollY > lastScrollY ? false : true);
            setTitleFontSize(scrollY < lastScrollY ? "2.75rem" : "1.75rem");
            lastScrollY = scrollY > 0 ? scrollY : 0;
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateScrollDir);
                ticking = true;
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [trigger]);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = (e) => {
        setAnchorElNav(null);
    };

    const handleMouseEnter = () => {
        setExpanded(false);
    };

    const handleMouseLeave = () => {
        setExpanded(false);
    };

    return (
        <Slide
            direction="down"
            in={true}
            sx={{
                position: "fixed",
                top: "0",
                zIndex: "100",
                display: { xs: "inherit", xl: "flex" },
            }}
        >
            <AppBar position="static" onMouseLeave={handleMouseLeave}>
                <Container sx={{ padding: ".5rem 0" }} maxWidth="xl">
                    <Box
                        sx={{
                            display: { xs: "flex", xl: "none" },
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <Typography
                            variant="h3"
                            noWrap
                            onClick={() => {
                                navigateToTop();
                            }}
                            sx={{
                                fontSize: "1.75rem",
                                marginLeft: "1rem",
                                fontWeight: 700,
                                color: theme.palette.custom.light,
                                fontFamily: "Playfair Display SC Black",
                            }}
                        >
                            <Link href="/" style={{ color: "inherit" }}>
                                The Rumen
                            </Link>
                        </Typography>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", xl: "none" },
                            }}
                        >
                            {pages.map((page, index) => {
                                return (
                                    <MenuItem
                                        onClick={() => {
                                            navigateToTop();
                                            handleCloseNavMenu();
                                        }}
                                        key={index}
                                    >
                                        <Typography textAlign="center">
                                            <Link href={page.href}>
                                                {page.name}
                                            </Link>
                                        </Typography>
                                    </MenuItem>
                                );
                            })}
                        </Menu>
                    </Box>

                    {/* desktop view */}
                    <Box sx={{ display: { xs: "none", xl: "inherit" } }}>
                        <Grid container>
                            <Grid item xs={4}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        height: "100%",
                                        gap: ".5rem",
                                    }}
                                >
                                    {/* <Box sx={{ height: "100%" }}>
                                        <NativeImage
                                            image={navbar.image}
                                            maxSize={85}
                                        />
                                    </Box> */}
                                    <Link href="/">
                                        <Typography
                                            // className="nav-link"
                                            variant="h3"
                                            onClick={() => {
                                                navigateToTop();
                                            }}
                                            sx={{
                                                margin: "0",
                                                transition: "300ms",
                                                fontSize: titleFontSize,
                                                // letterSpacing: ".15em",
                                                textAlign: "center",
                                                cursor: "pointer",
                                                color:
                                                    currentPage === ""
                                                        ? theme.palette.custom
                                                              .light
                                                        : theme.palette.custom
                                                              .lightMuted,
                                                "&:hover": {
                                                    color: theme.palette.custom
                                                        .light,
                                                },
                                                fontFamily:
                                                    "Playfair Display SC Black",
                                            }}
                                        >
                                            {siteName}
                                        </Typography>
                                    </Link>
                                </Box>
                            </Grid>
                            <Grid item xs={8}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        width: "100%",
                                        height: "100%",
                                        justifyContent: "end",
                                        gap: "1em",
                                    }}
                                >
                                    {pages.map((page, index) => (
                                        <Link key={index} href={page.href}>
                                            <Button
                                                onMouseEnter={handleMouseEnter}
                                                sx={{
                                                    color: path.includes(
                                                        page.name
                                                            .split(" ")
                                                            .join("")
                                                    )
                                                        ? theme.palette.custom
                                                              .light
                                                        : theme.palette.custom
                                                              .lightMuted,
                                                    "&:hover": {
                                                        color: theme.palette
                                                            .custom.light,
                                                    },
                                                }}
                                            >
                                                {page.name}
                                            </Button>
                                        </Link>
                                    ))}

                                    <Link href={navbar.buttonOne.href}>
                                        <Button
                                            color="secondary"
                                            variant={navbar.buttonOne.variant}
                                        >
                                            {navbar.buttonOne.text}
                                        </Button>
                                    </Link>
                                </Box>
                            </Grid>
                        </Grid>
                        {expanded && (
                            <Box sx={{ padding: ".5rem 0" }}>
                                <Divider />
                                <Fade in={expanded}>
                                    <Grid container>
                                        <Grid item xs></Grid>
                                        <Grid item xs={6}>
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    justifyContent:
                                                        "space-between",
                                                    gap: "1em",
                                                    width: "100%",
                                                }}
                                            >
                                                {pages.map((page, index) => {
                                                    return (
                                                        <Box key={index}>
                                                            {page.subPages
                                                                .length > 0 &&
                                                                page.subPages.map(
                                                                    (
                                                                        subPage,
                                                                        index
                                                                    ) => {
                                                                        return (
                                                                            <Typography
                                                                                key={
                                                                                    index
                                                                                }
                                                                                sx={{
                                                                                    textTransform:
                                                                                        "capitalize",
                                                                                    margin: ".5em 0",
                                                                                    transition:
                                                                                        "150ms",
                                                                                    color: theme
                                                                                        .palette
                                                                                        .custom
                                                                                        .lightMuted,
                                                                                    "&:hover":
                                                                                        {
                                                                                            color: theme
                                                                                                .palette
                                                                                                .custom
                                                                                                .light,
                                                                                        },
                                                                                }}
                                                                            >
                                                                                <Link
                                                                                    href={
                                                                                        subPage.href
                                                                                    }
                                                                                >
                                                                                    {
                                                                                        subPage.name
                                                                                    }
                                                                                </Link>
                                                                            </Typography>
                                                                        );
                                                                    }
                                                                )}
                                                        </Box>
                                                    );
                                                })}
                                            </Box>
                                        </Grid>

                                        <Grid item xs></Grid>
                                    </Grid>
                                </Fade>
                            </Box>
                        )}
                    </Box>
                </Container>
            </AppBar>
        </Slide>
    );
};
export default Navbar;
