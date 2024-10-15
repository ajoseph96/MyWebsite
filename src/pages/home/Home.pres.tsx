import { FunctionComponent } from "react";
import { Counter } from "@components"; 
import styles from "./Home.module.scss";
import { useRouter } from "@contexts";



const HomePage: FunctionComponent = () => {
    const{historyPush} = useRouter();
    return (
        <div className={styles.root}>
            Hello World From Home Page!
            <button onClick ={() => historyPush("/test")}>Go to Test!</button>
            <Counter />
        </div>
    )
}

export default HomePage;