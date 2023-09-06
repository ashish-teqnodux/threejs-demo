import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const InvertedOrbitControls = ({ camera, domElement }) => {
  // Create a reference to the OrbitControls instance
  const controls = useRef(null);

  useEffect(() => {
    // Initialize the custom InvertedOrbitControls
    controls.current = new OrbitControls(camera, domElement);

    // Configure other settings for the controls as needed
    controls.current.enableDamping = true;
    controls.current.dampingFactor = 0.25;
    controls.current.minDistance = 0;
    controls.current.maxDistance = 25;
    controls.current.enableZoom = true;
    controls.current.enablePan = true;

    // Return a cleanup function to dispose of the controls when unmounted
    return () => {
      controls.current.dispose();
    };
  }, [camera, domElement]);

  // Invert the rotation direction in the update method
  const update = () => {
    if (controls.current) {
      // Invert the rotation angles
      controls.current.rotateLeft = (angle) => {
        controls.current.rotateLeft(-angle);
      };

      controls.current.rotateUp = (angle) => {
        controls.current.rotateUp(-angle);
      };

      // Update the controls
      controls.current.update();
    }
  };

  return { update };
};

