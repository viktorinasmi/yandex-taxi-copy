import { Layout } from "@/src/components/layout";
import { Maps } from "../../maps/index";
import styles from "./Home.module.scss";
import { FromInput } from "@/src/components/ui/fromInput";

export const Home = () => {
  console.log("Home");
  return (
    <Layout title="Order taxi">
      <Maps />
      <div className={styles.container}>
        <FromInput />
      </div>
    </Layout>
  );
};
