import styles from "../styles/Home.module.css";
import MhImage from "./Masthead/MhImage";
import MhDescription from "./Masthead/MhDescription";
import MhCard from "./Masthead/MhCard";


const Masthead = () => {
 return (
    <main className={styles.main}>
      <MhImage/>
      <MhDescription/>
     <MhCard/>
    </main>
  );
};

export default Masthead;
