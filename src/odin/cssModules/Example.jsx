import styles, { dylan2 } from './example.module.css';
import './example2.css';
import ExampleChild from './ExampleChild';

const Example = () => {
  return (
    <>
      <div className={styles.dylan}>
        Example using default css-modules imports
      </div>
      <div className={dylan2}>Example using named css-modules imports</div>
      <div className="hello-bye">Example using standard css import</div>
      <div className={styles.className}>
        Example using composed css selectors
      </div>
      <div className={styles.otherClassName}>
        Example using composed css selectors
      </div>
      <div id={styles.cat}>Cat</div>
      <p>dog</p>
      <ExampleChild />
    </>
  );
};

export default Example;
