import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import MaterialInfoPopup from "./MaterialInfoPopup";
import { SpotLightEmit } from "../CommonFuncs/LightEmit";
import { Hotspots, SpotLights } from "../utils/Spots";

const ObjLoader = () => {
  const [openModal, setOpenModal] = useState(false);
  const [materialInfo, setMaterialInfo] = useState({});
  const [globalObj, setGlobalObj] = useState({});

  const canvasRef = useRef();

  // const moveSpeed = 0.08;
  // const moveVector = new THREE.Vector3();
  // const moveState = {
  //   forward: false,
  //   backward: false,
  //   left: false,
  //   right: false,
  // };

  // Event listeners for keyboard input
  // const onKeyDown = (event) => {
  //   switch (event.key) {
  //     case "ArrowUp":
  //       moveState.forward = true;
  //       break;
  //     case "ArrowDown":
  //       moveState.backward = true;
  //       break;
  //     case "ArrowLeft":
  //       moveState.left = true;
  //       break;
  //     case "ArrowRight":
  //       moveState.right = true;
  //       break;
  //   }
  // };

  // const onKeyUp = (event) => {
  //   switch (event.key) {
  //     case "ArrowUp":
  //       moveState.forward = false;
  //       break;
  //     case "ArrowDown":
  //       moveState.backward = false;
  //       break;
  //     case "ArrowLeft":
  //       moveState.left = false;
  //       break;
  //     case "ArrowRight":
  //       moveState.right = false;
  //       break;
  //   }
  // };

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    100
  );
  const renderer = new THREE.WebGLRenderer();
  // renderer.physicallyCorrectLights = false;

  renderer.setSize(window.innerWidth, window.innerHeight, false);
  renderer.setClearColor(0xffffff);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.minDistance = 0;
  controls.maxDistance = 25;
  controls.dampingFactor = 0.25;
  controls.enableZoom = true;
  controls.enablePan = true;
  controls.rotateSpeed = -0.2; // Reverse the rotation direction
  controls.target.set(-1, 1, 5);
  camera.position.set(-1, 1.5, 10);

  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  useEffect(() => {
    canvasRef.current.appendChild(renderer.domElement);
    canvasRef.current.addEventListener("click", onMouseClick); // Add click event listener to the canvas

    var mtlLoader = new MTLLoader();
    mtlLoader.load("/02.mtl", function (materials) {
      materials.preload();
      materials.side = THREE.DoubleSide;

      var objLoader = new OBJLoader();
      objLoader.setMaterials(materials);
      objLoader.load("/02.obj", function (object) {
        setGlobalObj(object);
        scene.add(object);

        Hotspots.forEach((hotspot) => {
          createHotspot(hotspot);
        });
        // object.traverse(function (child) {
        //   if (child instanceof THREE.Mesh) {
        //     // Check if this mesh has a material with a texture map
        //     if (child.material.map) {
        //       // Adjust the texture scaling
        //       child.material.map.repeat.set(2, 2); // Repeat the texture 2x2 times

        //       // Adjust the texture offset
        //       child.material.map.offset.set(0.5, 0.5); // Offset the texture by 50% horizontally and vertically
        //     }
        //   }
        // });

        // remove z-fighting (flickering)
        // object.traverse((child) => {
        //   if (child instanceof THREE.Mesh) {
        //     child.material.polygonOffset = true;
        //     child.material.polygonOffsetFactor = 1;
        //     child.material.polygonOffsetUnits = 1;
        //     // child.material.depthFunc = THREE.LessEqualDepth; // Adjust the depth function
        //     // child.material.depthTest = true; // Enable depth testing
        //   }
        // });
      });
    });

    // Directional Light
    // const directionalLight = new THREE.DirectionalLight("#f9f9f9", 1);
    // directionalLight.position.set(4, 4, 4);
    // directionalLight.shadow.bias = -0.1;
    // scene.add(directionalLight);

    // document.addEventListener("keydown", onKeyDown, false);
    // document.addEventListener("keyup", onKeyUp, false);

    const animate = () => {
      requestAnimationFrame(animate);
      // moveWithArrows(moveVector, moveState, controls, camera);
      const cameraDirection = camera.getWorldDirection(new THREE.Vector3());
      controls.target.copy(camera.position.clone().add(cameraDirection));

      renderer.render(scene, camera);
    };

    // PointLights?.map((point) => {
    //   PointLightEmit(
    //     scene,
    //     "",
    //     point.pointLightIntensity,
    //     point.pointLightPosition
    //   );
    // });

    SpotLights?.map((spot) => {
      SpotLightEmit(
        scene,
        "",
        spot.spotLightIntensity,
        spot.spotLightPosition,
        spot.spotLightAngle,
        spot.spotLightTargetPosition
      );
    });

    // Spot-light helper
    // let spothelper = new THREE.SpotLightHelper(spotLight);
    // scene.add(spothelper);

    animate();

    const ambientLight = new THREE.AmbientLight("#f9f9f9", 1.8);
    scene.add(ambientLight);

    return () => {
      // document.removeEventListener("keydown", onKeyDown);
      // document.removeEventListener("keyup", onKeyUp);
      document.removeEventListener("onclick", onMouseClick);
    };
  }, []);

  // navigate from one to another hotspot
  const navigateToHotspot = (position) => {
    const startPosition = camera.position.clone();
    const targetPosition = position.clone();
    const duration = 1500; // milliseconds
    let startTime = null;

    const animatePosition = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      // add animation while navigate
      if (elapsed < duration) {
        const progress = elapsed / duration;
        const newPosition = new THREE.Vector3();
        newPosition.lerpVectors(startPosition, targetPosition, progress);
        camera.position.copy(newPosition);

        // Update the controls target to match the camera orientation
        let cameraDirection = targetPosition
          .clone()
          .sub(newPosition)
          .normalize();

        controls.target.copy(newPosition.clone().add(cameraDirection));

        // const cameraDirection = camera.getWorldDirection(new THREE.Vector3());
        // controls.target.copy(position.clone().add(cameraDirection));

        // controls.target.copy(newPosition);
        // camera.position.copy(newCameraPosition);

        requestAnimationFrame(animatePosition);
      } else {
        camera.position.copy(targetPosition);
      }

      renderer.render(scene, camera);
    };

    requestAnimationFrame(animatePosition);
  };

  // hotspot create
  let createHotspot = (hotspot) => {
    const textureLoader = new THREE.TextureLoader();
    const circularTexture = textureLoader.load("/images/kasaLogo.png");

    // Create round with Sphere Geometry
    // const hotspotGeometry = new THREE.SphereGeometry(0.1, 16, 16);
    // const hotspotGeometry = new THREE.PlaneGeometry(0.2, 0.2);

    const hotspotGeometry = new THREE.PlaneGeometry(0.8, 0.4, 1, 1.5);
    const hotspotMaterial = new THREE.MeshBasicMaterial({
      map: circularTexture,
      // color: "#f9f9f9",
      transparent: true, // Set material to transparent
      side: THREE.DoubleSide, // Make the material visible from both sides
      // opacity: 1, // Initial opacity
    });
    const hotspotMesh = new THREE.Mesh(hotspotGeometry, hotspotMaterial);
    hotspotMesh.position.copy(hotspot.hotspotPosition);

    // Rotate the circle to face upwards
    hotspotMesh.rotation.x = -Math.PI / 2;

    scene.add(hotspotMesh);

    // Make hotspots clickable
    hotspotMesh.userData.clickable = true;
    hotspotMesh.userData.position = hotspot.viewPosition;
    hotspotMesh.name = "hotspot";

    // hotspotMesh.addEventListener("click", () => {
    //   // clearInterval(blinkingInterval); // Stop blinking
    //   navigateToHotspot(hotspot.viewPosition);
    // });

    // blinkingInterval = setInterval(() => {
    //   hotspotMesh.material.opacity = 1.2 - hotspotMesh.material.opacity; // Toggle opacity
    // }, 500); // Blink every 500ms
  };

  // const moveWithArrows = (moveVector, moveState, controls, camera) => {
  //   // movement with up, down, left, right arrow throughout the floor
  //   moveVector.set(0, 0, 0);

  //   // get the same camera direction even when turn around 360 degree

  //   // create quaternion to store the camera's orientation
  //   const cameraQuaternion = new THREE.Quaternion();

  //   // to get the camera's global orientation
  //   camera.getWorldQuaternion(cameraQuaternion);

  //   // to store the camera's rotation matrix that represents the camera's rotation
  //   const rotationMatrix = new THREE.Matrix4();
  //   rotationMatrix.makeRotationFromQuaternion(cameraQuaternion);

  //   if (moveState.forward) moveVector.add(new THREE.Vector3(0, 0, -1));
  //   if (moveState.backward) moveVector.add(new THREE.Vector3(0, 0, 1));
  //   if (moveState.left) moveVector.add(new THREE.Vector3(-1, 0, 0));
  //   if (moveState.right) moveVector.add(new THREE.Vector3(1, 0, 0));

  //   // normalize the resulting moveVector
  //   moveVector.normalize();

  //   // scale moveVector to speed
  //   moveVector.multiplyScalar(moveSpeed);

  //   // create clone and apply it to camera's local rotation matrix
  //   const moveVectorLocal = moveVector.clone().applyMatrix4(rotationMatrix);

  //   // get world direction of camera
  //   const cameraDirection = camera.getWorldDirection(new THREE.Vector3());
  //   camera.position.add(moveVectorLocal);

  //   // add target to orbit control to the camera's direction
  //   controls.target.copy(camera.position.clone().add(cameraDirection));
  // };

  // determine the user's mouse point in 3D scene

  const onMouseClick = (event) => {
    event.preventDefault();

    // Calculate mouse position
    const rect = canvasRef.current.getBoundingClientRect();
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    // Set raycaster
    raycaster.setFromCamera(mouse, camera);

    // Find intersected objects
    const intersects = raycaster.intersectObjects(scene.children);

    // Check if any hotspot is clicked
    intersects.forEach((intersect) => {
      if (intersect.object.name === "hotspot") {
        const clickedHotspot = intersect.object;
        navigateToHotspot(clickedHotspot.userData.position);
      } else {
        // set right intersected object among multiple
        const clickedObject = intersects[0].object;
        const clickedMaterial = clickedObject.material;

        // clicked object is frame(Painting) or not
        if (clickedObject?.name?.startsWith("Painting")) {
          if (clickedMaterial) {
            setOpenModal(true);
            setMaterialInfo(clickedMaterial?.[1]);

            // scene.traverse((child) => {
            //   console.log(child, "child--");
            //   if (
            //     child instanceof THREE.Mesh &&
            //     child.material.name == "Floor"
            //   ) {
            //     const newMaterial = clickedMaterial?.[1]?.clone();
            //     newMaterial.name = "Floor";
            //     newMaterial.needUpdate = true;
            //     child.material = newMaterial;
            //   }
            // });
          }
        }
      }
    });
  };

  const onApply = () => {
    // Apply material to the floor
    if (materialInfo) {
      globalObj.traverse((child) => {
        if (child instanceof THREE.Mesh && child.material.name == "Floor") {
          const newMaterial = materialInfo?.clone();
          newMaterial.name = "Floor";
          newMaterial.needUpdate = true;
          child.material = newMaterial;
        }
      });
    }
    setOpenModal(false);
  };

  return (
    <>
      <div ref={canvasRef} />
      {openModal && (
        <MaterialInfoPopup
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
          onApply={(e) => onApply(e)}
          materialInfo={materialInfo}
        />
      )}
    </>
  );
};

export default ObjLoader;
