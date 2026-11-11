import React, { useEffect, useRef } from 'react';
import * as Cesium from 'cesium';
import { EARTH_GLOBAL_VIEW, FRANCE_MACRO_VIEW, MONUMENTS, UI_TRANSLATIONS } from '../data/monuments';

// Token handling: reads from Vite environment variable or fallback
const rawToken = import.meta.env.VITE_CESIUM_ION_TOKEN || '';
const hasValidIonToken = rawToken && rawToken !== 'YOUR_CESIUM_ION_TOKEN' && rawToken.trim().length > 25;

if (hasValidIonToken) {
  Cesium.Ion.defaultAccessToken = rawToken.trim();
}

export default function GlobeViewer({
  activeMonument,
  onSelectMonument,
  isAnimating,
  setIsAnimating,
  currentStage,
  setCurrentStage,
  isAutoOrbiting,
  setIsAutoOrbiting,
  mapLayer = 'satellite',
  viewMode = 'globe', // 'globe' | 'interior' | 'landscape'
  lang = 'fr'
}) {
  const containerRef = useRef(null);
  const viewerRef = useRef(null);
  const initialSequenceStarted = useRef(false);
  const markersRef = useRef([]);
  const orbitListenerRef = useRef(null);
  const orbitHeadingRef = useRef(0);

  // Initialize Cesium Viewer
  useEffect(() => {
    if (!containerRef.current) return;

    // Base imagery layer
    const baseImagery = new Cesium.UrlTemplateImageryProvider({
      url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      maximumLevel: 19,
      credit: '© Esri, Maxar'
    });

    const viewer = new Cesium.Viewer(containerRef.current, {
      baseLayer: new Cesium.ImageryLayer(baseImagery),
      terrainProvider: hasValidIonToken && Cesium.createWorldTerrain ? Cesium.createWorldTerrain() : undefined,
      animation: false,
      timeline: false,
      geocoder: false,
      homeButton: false,
      sceneModePicker: false,
      baseLayerPicker: false,
      navigationHelpButton: false,
      fullscreenButton: false,
      infoBox: false,
      selectionIndicator: false
    });

    viewerRef.current = viewer;

    if (viewer.bottomContainer) {
      viewer.bottomContainer.style.display = 'none';
    }

    // Atmospheric and lighting configuration
    viewer.scene.globe.enableLighting = true;
    viewer.scene.globe.showGroundAtmosphere = true;
    viewer.scene.globe.depthTestAgainstTerrain = true;
    viewer.scene.highDynamicRange = true;
    viewer.scene.skyAtmosphere.show = true;
    viewer.scene.fog.enabled = true;
    viewer.scene.fog.density = 0.00015;
    viewer.scene.backgroundColor = Cesium.Color.BLACK;
    viewer.scene.screenSpaceCameraController.enableCollisionDetection = true;

    // Set initial position: Stage 1 (Earth Space Orbit)
    viewer.camera.setView({
      destination: Cesium.Cartesian3.fromDegrees(
        EARTH_GLOBAL_VIEW.longitude,
        EARTH_GLOBAL_VIEW.latitude,
        EARTH_GLOBAL_VIEW.height
      ),
      orientation: {
        heading: Cesium.Math.toRadians(EARTH_GLOBAL_VIEW.heading),
        pitch: Cesium.Math.toRadians(EARTH_GLOBAL_VIEW.pitch),
        roll: 0.0
      }
    });

    // Create accurate, ground-clamped 3D markers for all 10 monuments
    markersRef.current = MONUMENTS.map((m) => {
      const monumentName = m.name[lang] || m.name.fr;
      return viewer.entities.add({
        id: `marker-${m.id}`,
        monumentId: m.id,
        name: monumentName,
        position: Cesium.Cartesian3.fromDegrees(m.longitude, m.latitude, 0),
        point: {
          pixelSize: 8,
          color: Cesium.Color.WHITE,
          outlineColor: Cesium.Color.BLACK,
          outlineWidth: 2,
          heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
          disableDepthTestDistance: Number.POSITIVE_INFINITY
        },
        label: {
          text: monumentName,
          font: '600 11px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          style: Cesium.LabelStyle.FILL,
          fillColor: Cesium.Color.WHITE,
          showBackground: true,
          backgroundColor: Cesium.Color.fromCssColorString('rgba(0, 0, 0, 0.90)'),
          backgroundPadding: new Cesium.Cartesian2(7, 4),
          verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
          pixelOffset: new Cesium.Cartesian2(0, -12),
          heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
          disableDepthTestDistance: Number.POSITIVE_INFINITY
        }
      });
    });

    // Handle clicking a marker directly on the globe
    const clickHandler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
    clickHandler.setInputAction((movement) => {
      const pickedObject = viewer.scene.pick(movement.position);
      if (Cesium.defined(pickedObject) && pickedObject.id && pickedObject.id.monumentId) {
        if (onSelectMonument) {
          onSelectMonument(pickedObject.id.monumentId);
        }
      }
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK);

    return () => {
      clickHandler.destroy();
      if (viewerRef.current && !viewerRef.current.isDestroyed()) {
        viewerRef.current.destroy();
      }
    };
  }, []);

  // Update basemap layer when mapLayer changes
  useEffect(() => {
    const viewer = viewerRef.current;
    if (!viewer) return;

    viewer.imageryLayers.removeAll();

    if (mapLayer === 'street') {
      const osmProvider = new Cesium.UrlTemplateImageryProvider({
        url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
        subdomains: ['a', 'b', 'c'],
        maximumLevel: 19,
        credit: '© OpenStreetMap contributors'
      });
      viewer.imageryLayers.addImageryProvider(osmProvider);
    } else if (mapLayer === 'hybrid') {
      const satProvider = new Cesium.UrlTemplateImageryProvider({
        url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        maximumLevel: 19,
        credit: '© Esri, Maxar'
      });
      viewer.imageryLayers.addImageryProvider(satProvider);

      const refProvider = new Cesium.UrlTemplateImageryProvider({
        url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}',
        maximumLevel: 19
      });
      const refLayer = viewer.imageryLayers.addImageryProvider(refProvider);
      refLayer.alpha = 0.9;
    } else {
      const satProvider = new Cesium.UrlTemplateImageryProvider({
        url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        maximumLevel: 19,
        credit: '© Esri, Maxar'
      });
      viewer.imageryLayers.addImageryProvider(satProvider);
    }
  }, [mapLayer]);

  // Update marker labels when language changes
  useEffect(() => {
    if (!markersRef.current || markersRef.current.length === 0) return;
    markersRef.current.forEach((entity, index) => {
      if (entity && entity.label) {
        entity.label.text = MONUMENTS[index].name[lang] || MONUMENTS[index].name.fr;
      }
    });
  }, [lang]);

  // Fly to Stage 2: France Macro View
  const flyToFranceMacro = (duration = 2.8) => {
    return new Promise((resolve) => {
      const viewer = viewerRef.current;
      if (!viewer) return resolve();
      const t = UI_TRANSLATIONS[lang] || UI_TRANSLATIONS.fr;
      setCurrentStage(t.franceStage);

      viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY);

      viewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(
          FRANCE_MACRO_VIEW.longitude,
          FRANCE_MACRO_VIEW.latitude,
          FRANCE_MACRO_VIEW.height
        ),
        orientation: {
          heading: Cesium.Math.toRadians(FRANCE_MACRO_VIEW.heading),
          pitch: Cesium.Math.toRadians(FRANCE_MACRO_VIEW.pitch),
          roll: 0.0
        },
        duration,
        easingFunction: Cesium.EasingFunction.CUBIC_IN_OUT,
        complete: () => resolve(true),
        cancel: () => resolve(false)
      });
    });
  };

  // Fly to Stage 3: Monument Detail View (Centers accurately on the monument's coordinates)
  const flyToMonumentView = (monument, duration = 3.6) => {
    return new Promise((resolve) => {
      const viewer = viewerRef.current;
      if (!viewer) return resolve();

      const monumentName = monument.name[lang] || monument.name.fr;
      setCurrentStage(`${monumentName} (${monument.city})`);

      viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY);

      const targetCenter = Cesium.Cartesian3.fromDegrees(
        monument.longitude,
        monument.latitude,
        monument.elevation || 0
      );

      const boundingSphere = new Cesium.BoundingSphere(targetCenter, 20);

      const offset = new Cesium.HeadingPitchRange(
        Cesium.Math.toRadians(monument.camera.heading),
        Cesium.Math.toRadians(monument.camera.pitch),
        monument.camera.range
      );

      orbitHeadingRef.current = Cesium.Math.toRadians(monument.camera.heading);

      viewer.camera.flyToBoundingSphere(boundingSphere, {
        offset: offset,
        duration: duration,
        easingFunction: Cesium.EasingFunction.CUBIC_IN_OUT,
        complete: () => {
          viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY);
          resolve(true);
        },
        cancel: () => {
          viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY);
          resolve(false);
        }
      });
    });
  };

  // Fly to Horizon / Mountain View (Low pitch tilt looking toward the surrounding mountains & relief)
  const flyToLandscapeHorizon = (monument, duration = 2.8) => {
    return new Promise((resolve) => {
      const viewer = viewerRef.current;
      if (!viewer) return resolve();

      viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY);

      const targetCenter = Cesium.Cartesian3.fromDegrees(
        monument.longitude,
        monument.latitude,
        monument.elevation || 0
      );
      const boundingSphere = new Cesium.BoundingSphere(targetCenter, 25);

      const landscapeParams = monument.cameraLandscape || {
        range: 2200,
        heading: monument.camera.heading,
        pitch: -12
      };

      const offset = new Cesium.HeadingPitchRange(
        Cesium.Math.toRadians(landscapeParams.heading),
        Cesium.Math.toRadians(landscapeParams.pitch),
        landscapeParams.range
      );

      viewer.camera.flyToBoundingSphere(boundingSphere, {
        offset: offset,
        duration: duration,
        easingFunction: Cesium.EasingFunction.CUBIC_IN_OUT,
        complete: () => {
          viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY);
          resolve(true);
        },
        cancel: () => {
          viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY);
          resolve(false);
        }
      });
    });
  };

  // React to viewMode changes (e.g. user toggles between 3D Aerial and Mountains/Landscape view)
  useEffect(() => {
    if (!viewerRef.current || !activeMonument || isAnimating) return;
    if (viewMode === 'landscape') {
      flyToLandscapeHorizon(activeMonument, 2.2);
    } else if (viewMode === 'globe') {
      flyToMonumentView(activeMonument, 2.2);
    }
  }, [viewMode]);

  // Handle monument changes & initial animation sequence
  useEffect(() => {
    if (!viewerRef.current || !activeMonument) return;

    let isAborted = false;

    const runSequence = async () => {
      setIsAnimating(true);
      setIsAutoOrbiting(false);

      const t = UI_TRANSLATIONS[lang] || UI_TRANSLATIONS.fr;

      if (!initialSequenceStarted.current) {
        initialSequenceStarted.current = true;
        setCurrentStage(t.earthOrbitStage);
        await new Promise((res) => setTimeout(res, 900));
        if (isAborted) return;

        await flyToFranceMacro(3.2);
        if (isAborted) return;

        await new Promise((res) => setTimeout(res, 400));
        if (isAborted) return;

        await flyToMonumentView(activeMonument, 3.8);
      } else {
        await flyToFranceMacro(2.4);
        if (isAborted) return;

        await flyToMonumentView(activeMonument, 3.4);
      }

      if (!isAborted) {
        setIsAnimating(false);
      }
    };

    runSequence();

    return () => {
      isAborted = true;
    };
  }, [activeMonument]);

  // True Monument-Centric 360° Auto-Orbit around monument center
  useEffect(() => {
    const viewer = viewerRef.current;
    if (!viewer) return;

    if (isAutoOrbiting && !isAnimating && activeMonument) {
      const targetCenter = Cesium.Cartesian3.fromDegrees(
        activeMonument.longitude,
        activeMonument.latitude,
        activeMonument.elevation || 0
      );
      const pitch = Cesium.Math.toRadians(activeMonument.camera.pitch);
      const range = activeMonument.camera.range;
      const headingIncrement = Cesium.Math.toRadians(0.25);

      const orbitCallback = () => {
        orbitHeadingRef.current += headingIncrement;
        viewer.camera.lookAt(
          targetCenter,
          new Cesium.HeadingPitchRange(orbitHeadingRef.current, pitch, range)
        );
      };

      viewer.clock.onTick.addEventListener(orbitCallback);
      orbitListenerRef.current = orbitCallback;
    } else {
      if (orbitListenerRef.current) {
        viewer.clock.onTick.removeEventListener(orbitListenerRef.current);
        orbitListenerRef.current = null;
        viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY);
      }
    }

    return () => {
      if (orbitListenerRef.current && viewer && !viewer.isDestroyed()) {
        viewer.clock.onTick.removeEventListener(orbitListenerRef.current);
        orbitListenerRef.current = null;
        viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY);
      }
    };
  }, [isAutoOrbiting, isAnimating, activeMonument]);

  return <div ref={containerRef} className="cesium-viewport" />;
}
