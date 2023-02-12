import styles from "./Maps.module.scss";
import GoogleMapReact from "google-map-react";
import * as process from "process";
import { YMaps, Map } from "react-yandex-maps";

export const Maps = () => {
  return (
    <div className={styles.container}>
      <YMaps>
        <Map defaultState={{ center: [55.75, 37.57], zoom: 13 }} />
      </YMaps>
    </div>
  );
};
