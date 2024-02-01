import { useEffect } from "react";
import { Plans } from "../../components/Plans/Plans";
import { TryBot } from "../../components/TryBot/TryBot";

const Pricing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Plans />
      <TryBot />
    </main>
  );
};

export default Pricing;
