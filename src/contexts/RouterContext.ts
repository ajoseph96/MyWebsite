import { createContext, useContext } from "react";

export interface IRouterContext {
    goBack: () => void;
    historyPush: (url: string) => void;
    historyReplace: (url: string) => void;
}

export const RouterContext = createContext<IRouterContext | undefined>(undefined);

export const useRouter = (): IRouterContext => {
    const context = useContext(RouterContext);

    if (context === undefined) {
        throw Error("useRouterContext must be used within a RouterContext Provider");
    }

    return context;
};
