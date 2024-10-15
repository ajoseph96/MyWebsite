import { Suspense } from "react";
import AppRoutes from "./AppRoutes";
const App = () => {
    return (
        <Suspense>
            <main>
                <AppRoutes />

            </main>
        </Suspense>
    )
}

export default App;