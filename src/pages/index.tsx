import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import LandingPage from "@site/src/components/LandingPage";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="CityBuild Wiki von GommeHD.net"
    >
      <LandingPage />
    </Layout>
  );
}
