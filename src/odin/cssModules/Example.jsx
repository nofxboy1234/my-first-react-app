import classes, { dylan2 } from './example.module.css';
import './example2.css';

const Example = () => {
  return (
    <>
      <div className={classes.dylan}>
        Example using default css-modules imports
      </div>
      <div className={dylan2}>Example using named css-modules imports</div>
      <div className="hello-bye">Example using standard css import</div>
      <div className={classes.className}>
        Example using composed css selectors
      </div>
      <div className={classes.otherClassName}>
        Example using composed css selectors
      </div>
    </>
  );
};

export default Example;
