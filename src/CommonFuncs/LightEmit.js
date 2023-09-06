import * as THREE from "three";
import { Constants } from "../utils/Constants";

export const PointLightEmit = (
  scene,
  pointLightColor = 0xffffff,
  pointLightIntensity = 1,
  pointLightPosition
) => {
  const pointLight = new THREE.PointLight(pointLightColor, pointLightIntensity);
  pointLight.position.set(
    pointLightPosition.x,
    pointLightPosition.y,
    pointLightPosition.z
  );
  pointLight.castShadow = true;
  scene.add(pointLight);
};

export const SpotLightEmit = (
  scene,
  spotLightColor = 0xffffff,
  spotLightIntensity = 1,
  spotLightPosition,
  spotLightAngle,
  spotLightTargetPosition
) => {
  const spotLight = new THREE.SpotLight(spotLightColor, spotLightIntensity);
  spotLight.position.set(
    spotLightPosition.x,
    spotLightPosition.y,
    spotLightPosition.z
  ); // Position it where the ceiling lights would be
  // spotLight.angle = Math.atan(15 / (2 * 4));
  spotLight.angle = spotLightAngle; // Set the cone angle
  spotLight.penumbra = Constants.spotLightPenumbra; // Softness of the edges
  spotLight.decay = Constants.spotLightDecay; // Light decay
  spotLight.distance = Constants.spotLightDistance; // Light range

  // Set the spotlight's target to the origin (0, 0, 0)
  spotLight.target.position.set(
    spotLightTargetPosition.x,
    spotLightTargetPosition.y,
    spotLightTargetPosition.z
  );
  scene.add(spotLight.target); // Add the target to the scene

  // Set the spotlight's direction along the negative y-axis (towards the floor)
  // spotLight.target.position.y = -15; // Adjust this value as needed

  // Add shadow casting to the spotlight
  spotLight.castShadow = true;
  spotLight.shadow.mapSize.width = 512;
  spotLight.shadow.mapSize.height = 512;
  spotLight.shadow.camera.near = 10;
  spotLight.shadow.camera.far = 200;
  // spotLight.shadow.camera.fov = 45;

  scene.add(spotLight);

  // const spotLight = new THREE.SpotLight(0xffffff, 4);
  // spotLight.position.set(-1, 2.2, 5.2); // Position it where the ceiling lights would be
  // // spotLight.angle = Math.atan(15 / (2 * 4));
  // spotLight.angle = Math.PI / 3; // Set the cone angle
  // spotLight.penumbra = 0.1; // Softness of the edges
  // spotLight.decay = 2; // Light decay
  // spotLight.distance = 40; // Light range

  // // Set the spotlight's target to the origin (0, 0, 0)
  // spotLight.target.position.set(-1, -1, 4.2);
  // scene.add(spotLight.target); // Add the target to the scene

  // // Add shadow casting to the spotlight
  // spotLight.castShadow = true;
  // spotLight.shadow.mapSize.width = 512;
  // spotLight.shadow.mapSize.height = 512;
  // spotLight.shadow.camera.near = 10;
  // spotLight.shadow.camera.far = 200;
  // spotLight.shadow.camera.fov = 0;

  // scene.add(spotLight);
};
