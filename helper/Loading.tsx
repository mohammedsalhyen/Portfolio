"use client"
import React from 'react';
import Lottie from "lottie-react";
import load from "../public/animation/load.json"
function Loading() {
    return (
        <div className="flex-center h-screen">
            <Lottie animationData={load} loop={true} />
        </div>
    );
}

export default Loading;