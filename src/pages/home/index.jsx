import styles from "./home.module.css";
import MainProfile from "../../components/MainProfile"
import AboutMe from "../../components/AboutMe"

export default function Home() {
    return (
        <div>
            <MainProfile />
            <AboutMe />
        </div>
    )
}