"use client";

import { Inter } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const inter = Inter({
	weight: ["400", "600", "700"],
	subsets: ["latin", "cyrillic"]
});

const theme = createTheme({
	typography: {
		fontFamily: inter.style.fontFamily
	},
	cssVariables: true
});

export default theme;
