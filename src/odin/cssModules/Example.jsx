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
    </>
  );
};

export default Example;
