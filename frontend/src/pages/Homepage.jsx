import React from "react";
import Navbar from "../components/Navbar";
import Logo from "../components/Logo";
import Layout from "../components/Layout";
import LanguageSwitcher from "../components/LanguageSwitcher";


const Homepage = () => {
    return (
      <div style={{ color: "black", fontSize: "24px" }}>
        Hello, this is a test!
      </div>
    );
  };
  
// const Homepage = () => {
//   const links = [
//     { name: "Homepage", path: "/" },
//     { name: "Portfolio", path: "/portfolio" },
//     { name: "Good Stories", path: "/good-stories" },
//     { name: "For Fun", path: "/for-fun" },
//     { name: "Vault", path: "/vault" },
//     { name: "About", path: "/about" },
//   ];

//   return (
//     <Layout>
//       <Navbar links={links} />
//       <Logo />
//       <LanguageSwitcher />
//     </Layout>
//   );
// };

export default Homepage;
