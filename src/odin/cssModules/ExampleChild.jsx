// import './exampleChild.css';
import styles from './exampleChild.module.css';

const ExampleChild = () => {
  return (
    <>
      <div className="">Child</div>
      <p className={styles.cat}>cat</p>
      <div className={styles.duke}>duke</div>
      <p>duke</p>
    </>
  );
};

export default ExampleChild;
