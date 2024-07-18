
import styles from "../CSS/fareTypes.module.css"
const FareTypes = () => {
  return (
    <div className={styles.container}>
      <div className={styles.div}>
        <div className={styles.first}>Select a fare type</div>
        <div className={styles.selectBox}>
          <input type="radio" name="fares" />
          <p>Regular fees</p>
        </div>
        <div className={styles.selectBox}>
          <input type="radio" name="fares" />
          <p>Armed Forces</p>
        </div>
        <div className={styles.selectBox}>
          <input type="radio" name="fares" />
          <p>Student fares</p>
        </div>
        <div className={styles.selectBox}>
          <input type="radio" name="fares" />
          <p>Senior Citizen</p>
        </div>
        <div className={styles.selectBox}>
          <input type="radio" name="fares" />
          <p>Double seat</p>
        </div>
      </div>
     
    </div>
  );
};


export default FareTypes