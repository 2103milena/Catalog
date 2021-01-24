// import React from "react";
// import classes from './_dencripted.module.scss';
// import { useDencrypt } from "use-dencrypt-effect";

// const values = ["Movies", "Games", "Series"];


// const Example = () => {
//   const { result, dencrypt } = useDencrypt();

//     const titleHandler1 = () => {
//       return dencrypt(values[0]);
//     }

//     const titleHandler2 = () => {
//       return dencrypt(values[1]);
//     }

//     const titleHandler3 = () => {
//       return dencrypt(values[2]);
//     }

//   return (
//     <div>
//       <button onClick={titleHandler1}>click</button>
//       <button onClick={titleHandler2}>click2</button>
//       <button onClick={titleHandler3}>click3</button>
//       <span className={classes.Example}>{result}</span>
//     </div>

//   )
// };

// export default Example;

 // let i = 0;

    // const action = setInterval(() => {
    //   dencrypt(values[i]);

    //   i = i === values.length - 1 ? 0 : i + 1;
    // }, 2000);

    // return () => clearInterval(action);