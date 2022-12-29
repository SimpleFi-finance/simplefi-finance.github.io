import React from "react";
import { Routes, Route } from "react-router-dom";
import { Careers, Landing } from "../../Features";

export const Router = (): React.ReactElement => {
    return (
        <Routes>
            <Route path="/" element={<Landing />}/>
            <Route path="/careers" element={<Careers />}/>
        </Routes>
    )
} 