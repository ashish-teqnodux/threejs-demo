// import React, { useRef } from "react";
// import * as THREE from "three";

// const FPSControls = ({ camera, domElement }) => {
//   const moveState = {
//     forward: false,
//     backward: false,
//     left: false,
//     right: false,
//   };

//   const moveSpeed = 0.1;
//   const moveVector = new THREE.Vector3();

//   const onKeyDown = (event) => {
//     switch (event.key) {
//       case "ArrowUp":
//         moveState.forward = true;
//         break;
//       case "ArrowDown":
//         moveState.backward = true;
//         break;
//       case "ArrowLeft":
//         moveState.left = true;
//         break;
//       case "ArrowRight":
//         moveState.right = true;
//         break;
//     }
//   };

//   const onKeyUp = (event) => {
//     switch (event.key) {
//       case "ArrowUp":
//         moveState.forward = false;
//         break;
//       case "ArrowDown":
//         moveState.backward = false;
//         break;
//       case "ArrowLeft":
//         moveState.left = false;
//         break;
//       case "ArrowRight":
//         moveState.right = false;
//         break;
//     }
//   };

//   const update = () => {
//     moveVector.set(0, 0, 0);

//     if (moveState.forward) moveVector.z -= 1;
//     if (moveState.backward) moveVector.z += 1;
//     if (moveState.left) moveVector.x -= 1;
//     if (moveState.right) moveVector.x += 1;

//     moveVector.normalize();
//     moveVector.applyQuaternion(camera.quaternion);
//     moveVector.multiplyScalar(moveSpeed);

//     camera.position.add(moveVector);
//   };

//   // Attach event listeners
//   const domRef = useRef();
//   domRef.current = domElement;

//   React.useEffect(() => {
//     domRef.current.addEventListener("keydown", onKeyDown, false);
//     domRef.current.addEventListener("keyup", onKeyUp, false);

//     return () => {
//       domRef.current.removeEventListener("keydown", onKeyDown);
//       domRef.current.removeEventListener("keyup", onKeyUp);
//     };
//   }, []);

//   return { update };
// };

// export default FPSControls;
