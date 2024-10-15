import { FunctionComponent, lazy } from "react";
import { Navigate, Route, Routes } from "react-router";

const Home = lazy(() => import("./pages/home/Home.pres"));
const Test = lazy(() => import("./pages/test-page/Test.pres"));

const AppRoutes: FunctionComponent = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/test" element={<Test />} />
            <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
    );
};

export default AppRoutes;
