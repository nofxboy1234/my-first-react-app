let styles = {};
import demo from './Demo.module.css';
import fancyButton from './css-fancy-button.module.css';
Object.assign(styles, fancyButton, demo);

const Demo = () => {
  return (
    <>
      <div className={styles.demo}>Demo</div>
      <div className={styles.fancyButton}>Demo</div>
    </>
  );
};

export default Demo;
