import { Suspense } from "react";
import AppRoutes from "./AppRoutes";
import { RouterProvider } from "@providers";
const App = () => {
    return (
        <Suspense>
            <RouterProvider>
                <main>
                    <AppRoutes />
                </main>
            </RouterProvider>
        </Suspense>
    );
};

export default App;
