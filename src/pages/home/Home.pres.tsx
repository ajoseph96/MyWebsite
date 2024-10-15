import { FunctionComponent } from "react";
import { Counter } from "@components"; 
import styles from "./Home.module.scss";



const HomePage: FunctionComponent = () => {
    return (
        <div className={styles.root}>
            Hello World From Home Page!
            <Counter />
        </div>
    )
}

export default HomePage;