import { RouterContext } from "@contexts";
import {FunctionComponent, PropsWithChildren, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const RouterProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
    const navigate = useNavigate();

    const goBack = (): void => {
        navigate(-1);
    };
    const historyPush = useCallback(
        (url: string) => {
            navigate(url);
        },
        [navigate]
    );

    const historyReplace = useCallback(
        (url: string) => {
            navigate(url, { replace: true });
        },
        [navigate]
    );
    return (
        <RouterContext.Provider
            value={{
                goBack,
                historyPush,
                historyReplace,
            }}>
                {children}
            </RouterContext.Provider>
    );
};
