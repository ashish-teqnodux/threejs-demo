import { Constants } from "./Constants";
import * as THREE from "three";

export const PointLights = [
  {
    pointLightIntensity: Constants.pointLightIntensity,
    pointLightPosition: { x: -3.066386, y: 3.51233, z: 0.078593 },
  },
  {
    pointLightIntensity: Constants.pointLightIntensity,
    pointLightPosition: { x: -6.933613, y: 3.51233, z: 2.731855 },
  },
  {
    pointLightIntensity: Constants.pointLightIntensity,
    pointLightPosition: { x: 3.075634, y: 3.51233, z: 0.078593 },
  },
];

export const SpotLights = [
  {
    spotLightIntensity: Constants.spotLightIntensity,
    spotLightPosition: { x: -3.066386, y: 3.51233, z: 0.078593 },
    spotLightAngle: Constants.spotLightConeAngle,
    spotLightTargetPosition: { x: -5.066386, y: 0, z: 0.078593 },
  },
  {
    spotLightIntensity: Constants.spotLightIntensity,
    spotLightPosition: { x: -3.066386, y: 3.51233, z: -2.574668 },
    spotLightAngle: Constants.spotLightConeAngle,
    spotLightTargetPosition: { x: -5.066386, y: 0, z: -2.574668 },
  },
  {
    spotLightIntensity: Constants.spotLightIntensity,
    spotLightPosition: { x: -3.066386, y: 3.51233, z: -5.227932 },
    spotLightAngle: Constants.spotLightConeAngle,
    spotLightTargetPosition: { x: -5.066386, y: 0, z: -5.227932 },
  },
  // {
  //   spotLightIntensity: Constants.spotLightIntensity,
  //   spotLightPosition: { x: -3.066386, y: 3.51233, z: -7.820024 },
  //   spotLightAngle: Constants.spotLightConeAngle,
  //   spotLightTargetPosition: { x: -5.066386, y: 0, z: -7.820024 },
  // },
  // {
  //   spotLightIntensity: Constants.spotLightIntensity,
  //   spotLightPosition: { x: -3.066386, y: 3.51233, z: 2.731855 },
  //   spotLightAngle: Constants.spotLightConeAngle,
  //   spotLightTargetPosition: { x: -5.066386, y: 0, z: 2.731855 },
  // },
  // {
  //   spotLightIntensity: Constants.spotLightIntensity,
  //   spotLightPosition: { x: -3.066386, y: 3.51233, z: 5.385117 },
  //   spotLightAngle: Constants.spotLightConeAngle,
  //   spotLightTargetPosition: { x: -5.066386, y: 0, z: 5.385117 },
  // },
  // {
  //   spotLightIntensity: Constants.spotLightIntensity,
  //   spotLightPosition: { x: -3.066386, y: 3.51233, z: 7.922861 },
  //   spotLightAngle: Constants.spotLightConeAngle,
  //   spotLightTargetPosition: { x: -5.066386, y: 0, z: 7.922861 },
  // },

  // {
  //   spotLightIntensity: Constants.spotLightIntensity,
  //   spotLightPosition: { x: -6.933614, y: 3.51233, z: 0.078593 },
  //   spotLightAngle: Constants.spotLightConeAngle,
  //   spotLightTargetPosition: { x: -4.933614, y: 0, z: 0.078593 },
  // },
  // {
  //   spotLightIntensity: Constants.spotLightIntensity,
  //   spotLightPosition: { x: -6.933614, y: 3.51233, z: -2.574668 },
  //   spotLightAngle: Constants.spotLightConeAngle,
  //   spotLightTargetPosition: { x: -4.933614, y: 0, z: -2.574668 },
  // },
  // {
  //   spotLightIntensity: Constants.spotLightIntensity,
  //   spotLightPosition: { x: -6.933614, y: 3.51233, z: -5.227932 },
  //   spotLightAngle: Constants.spotLightConeAngle,
  //   spotLightTargetPosition: { x: -4.933614, y: 0, z: -5.227932 },
  // },
  // {
  //   spotLightIntensity: Constants.spotLightIntensity,
  //   spotLightPosition: { x: -6.933614, y: 3.51233, z: -7.820024 },
  //   spotLightAngle: Constants.spotLightConeAngle,
  //   spotLightTargetPosition: { x: -4.933614, y: 0, z: -7.820024 },
  // },
  // {
  //   spotLightIntensity: Constants.spotLightIntensity,
  //   spotLightPosition: { x: -6.933614, y: 3.51233, z: 2.731855 },
  //   spotLightAngle: Constants.spotLightConeAngle,
  //   spotLightTargetPosition: { x: -4.933614, y: 0, z: 2.731855 },
  // },
  // {
  //   spotLightIntensity: Constants.spotLightIntensity,
  //   spotLightPosition: { x: -6.933614, y: 3.51233, z: 5.385117 },
  //   spotLightAngle: Constants.spotLightConeAngle,
  //   spotLightTargetPosition: { x: -4.933614, y: 0, z: 5.385117 },
  // },
  // {
  //   spotLightIntensity: Constants.spotLightIntensity,
  //   spotLightPosition: { x: -6.933614, y: 3.51233, z: 7.922861 },
  //   spotLightAngle: Constants.spotLightConeAngle,
  //   spotLightTargetPosition: { x: -4.933614, y: 0, z: 7.922861 },
  // },
  // {
  //   spotLightIntensity: Constants.spotLightIntensity,
  //   spotLightPosition: { x: 3.075634, y: 3.51233, z: 0.078593 },
  //   spotLightAngle: Constants.spotLightConeAngle,
  //   spotLightTargetPosition: { x: 4.075634, y: 0, z: 0.078593 },
  // },
];

export const Hotspots = [
  {
    hotspotPosition: new THREE.Vector3(0, 0.01, 7),
    viewPosition: new THREE.Vector3(0, 1.5, 7),
    description: "Hotspot 1",
  },
  {
    hotspotPosition: new THREE.Vector3(-10, 0.01, 7),
    viewPosition: new THREE.Vector3(-10, 1.5, 7),
    description: "Hotspot 2",
  },
  {
    hotspotPosition: new THREE.Vector3(-5, 0.01, 8.5),
    viewPosition: new THREE.Vector3(-5, 1.5, 8.5),
    description: "Hotspot 3",
  },
  {
    hotspotPosition: new THREE.Vector3(-10, 0.01, 2.5),
    viewPosition: new THREE.Vector3(-10, 1.5, 2.5),
    description: "Hotspot 4",
  },
  {
    hotspotPosition: new THREE.Vector3(0, 0.01, 2.5),
    viewPosition: new THREE.Vector3(0, 1.5, 2.5),
    description: "Hotspot 5",
  },
  {
    hotspotPosition: new THREE.Vector3(-10, 0.01, -2.5),
    viewPosition: new THREE.Vector3(-10, 1.5, -2.5),
    description: "Hotspot 6",
  },
  {
    hotspotPosition: new THREE.Vector3(0, 0.01, -2.5),
    viewPosition: new THREE.Vector3(0, 1.5, -2.5),
    description: "Hotspot 7",
  },
  {
    hotspotPosition: new THREE.Vector3(0, 0.01, -7.5),
    viewPosition: new THREE.Vector3(0, 1.5, -7.5),
    description: "Hotspot 8",
  },
  {
    hotspotPosition: new THREE.Vector3(-10, 0.01, -7.5),
    viewPosition: new THREE.Vector3(-10, 1.5, -7.5),
    description: "Hotspot 9",
  },
  {
    hotspotPosition: new THREE.Vector3(-13.2, 0.01, -8.5),
    viewPosition: new THREE.Vector3(-13.2, 1.5, -8.5),
    description: "Hotspot 10",
  },
  {
    hotspotPosition: new THREE.Vector3(-13.2, 0.01, -5.5),
    viewPosition: new THREE.Vector3(-13.2, 1.5, -5.5),
    description: "Hotspot 11",
  },
  {
    hotspotPosition: new THREE.Vector3(-13.2, 0.01, -1.9),
    viewPosition: new THREE.Vector3(-13.2, 1.5, -1.9),
    description: "Hotspot 12",
  },
  {
    hotspotPosition: new THREE.Vector3(-13.2, 0.01, 1.8),
    viewPosition: new THREE.Vector3(-13.2, 1.5, 1.8),
    description: "Hotspot 13",
  },
  {
    hotspotPosition: new THREE.Vector3(-13.2, 0.01, 4.8),
    viewPosition: new THREE.Vector3(-13.2, 1.5, 4.8),
    description: "Hotspot 14",
  },
  {
    hotspotPosition: new THREE.Vector3(-13.2, 0.01, 7.6),
    viewPosition: new THREE.Vector3(-13.2, 1.5, 7.6),
    description: "Hotspot 15",
  },
  {
    hotspotPosition: new THREE.Vector3(3.2, 0.01, 7.6),
    viewPosition: new THREE.Vector3(3.2, 1.5, 7.6),
    description: "Hotspot 16",
  },
  {
    hotspotPosition: new THREE.Vector3(3.2, 0.01, 3),
    viewPosition: new THREE.Vector3(3.2, 1.5, 3),
    description: "Hotspot 17",
  },
  {
    hotspotPosition: new THREE.Vector3(3.2, 0.01, 0),
    viewPosition: new THREE.Vector3(3.2, 1.5, 0),
    description: "Hotspot 18",
  },
  {
    hotspotPosition: new THREE.Vector3(3.2, 0.01, -3),
    viewPosition: new THREE.Vector3(3.2, 1.5, -3),
    description: "Hotspot 19",
  },
  {
    hotspotPosition: new THREE.Vector3(3.2, 0.01, -7),
    viewPosition: new THREE.Vector3(3.2, 1.5, -7),
    description: "Hotspot 20",
  },
  {
    hotspotPosition: new THREE.Vector3(2.6, 0.01, -12),
    viewPosition: new THREE.Vector3(2.6, 1.5, -12),
    description: "Hotspot 21",
  },
  {
    hotspotPosition: new THREE.Vector3(-2.5, 0.01, -12),
    viewPosition: new THREE.Vector3(-2.5, 1.5, -12),
    description: "Hotspot 22",
  },
  {
    hotspotPosition: new THREE.Vector3(-7.5, 0.01, -12),
    viewPosition: new THREE.Vector3(-7.5, 1.5, -12),
    description: "Hotspot 23",
  },
  {
    hotspotPosition: new THREE.Vector3(-12.5, 0.01, -12),
    viewPosition: new THREE.Vector3(-12.5, 1.5, -12),
    description: "Hotspot 24",
  },
];
