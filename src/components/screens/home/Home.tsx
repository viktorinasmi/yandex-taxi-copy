import { Layout } from "@/src/components/layout";
import { Maps } from "../../maps/index";

export const Home = () => {
  console.log("Home");
  return (
    <Layout title="Order taxi">
      <Maps />
    </Layout>
  );
};
