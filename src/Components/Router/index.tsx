import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Careers, Landing } from "../../Features";

export const Router = (): React.ReactElement => {
    return (
        <Routes>
            <Route path="/" element={<Landing />}/>
            <Route path="/careers" element={<Careers />}/>
            {/* <Route path="/api/documentation" element={<APIDocs />}/> */}
            {/* <Route path="/subgraphs/documentation" element={<SubgraphsDocs />}/> */}
            <Route path="*" element={<Navigate to="/" replace />}/>
        </Routes>
    )
} 