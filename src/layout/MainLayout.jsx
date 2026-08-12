import { useState } from "react";
import { Outlet } from "react-router";
import Loader from "../sheared/ui/page/Loader";
import Navbar from "../sheared/ui/page/Navbar";
import Footer from "../sheared/ui/page/Footer";

const MainLayout = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div>
      {loading && <Loader onDone={() => setLoading(false)} />}
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
