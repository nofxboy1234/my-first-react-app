import classes, { dylan2 } from './example.module.css';

const Example = () => {
  return (
    <>
      <div className={classes.dylan}>
        Example using default css-modules imports
      </div>
      <div className={dylan2}>Example using named css-modules imports</div>
    </>
  );
};

export default Example;
