import HealthyMeals from "../../components/HealthyMeals/HealthyMeals";
import WhatYouWillGet from "../../components/WhatYouWillGet/WhatYouWillGet";
import RealLife from "../../components/RealLife/RealLife";
import CookSmarter from "../../components/CookSmarter/CookSmarter";
import usePageTitle from "../../hooks/usePageTitle";

const Home = () => {
  usePageTitle("Home");

  return (
    <>
      <HealthyMeals />
      <WhatYouWillGet />
      <RealLife />
      <CookSmarter />
    </>
  );
};

export default Home;
