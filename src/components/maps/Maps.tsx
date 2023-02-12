import styles from "./Maps.module.scss";
import React from "react";
import GoogleMapReact from "google-map-react";
import * as process from "process";
import { YMaps, Map, Placemark } from "react-yandex-maps";

export const Maps = () => {
  const defaultState = {
    center: [55.751574, 37.573856],
    zoom: 13,
  };

  return (
    <div className={styles.container}>
      <YMaps>
        <Map
          state={{
            center: defaultState.center,
            zoom: defaultState.zoom,
            behaviors: ["disable('scrollZoom')"],
          }}
          defaultState={defaultState}
          className={styles.map}
        />
      </YMaps>
    </div>
  );
};
