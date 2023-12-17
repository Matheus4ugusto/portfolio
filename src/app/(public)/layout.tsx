"use client"

import GlobalStyles from "@/styles/global";
import Providers from "@/app/providers";
import React from "react";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <Providers>
            <GlobalStyles/>
            {children}
        </Providers>

    );
}
