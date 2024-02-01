import { Usage } from "../../components/Usage/Usage";
import { TryBot } from "../../components/TryBot/TryBot";
import { useEffect } from "react";

const Examples = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Usage />
      <TryBot />
    </main>
  );
};

export default Examples;
