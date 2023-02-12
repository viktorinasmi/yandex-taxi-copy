import React, { ReactNode, useEffect, useState } from "react";
import Head from "next/head";
import Script from "next/script";
import * as process from "process";
import favicon from "../../assets/images/favicon.png";
import styles from "./Layout.module.scss";
import { Loader } from "@/src/components/ui/loader";
import { MAP_KEY } from "@/src/MAP_KEY";

interface ILayout {
  children: ReactNode;
  title: string;
}

export const Layout = ({ title, children }: ILayout) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    //отключение загрузки
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // отписка от таймера - очистка
    return () => {
      clearInterval(timeout);
    };
  }, []);

  return (
    <div>
      <Head>
        <title>{title} | Yandex Taxi </title>
        <meta name="description" content="Taxi app" />
        <link rel="shortcut icon" href={favicon.src} type="image/png" />
        <meta name="theme-color" content="#ffbc00" />
      </Head>
      {/*скрипт для полей карты google*/}
      <Script
        strategy="beforeInteractive"
        src={`https://api-maps.yandex.ru/2.1?apikey=${MAP_KEY}&lang=ru_RU`}
      />
      <div className={styles.container}>
        {isLoading ? <Loader /> : children}
      </div>
    </div>
  );
};
