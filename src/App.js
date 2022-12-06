import React from "react";
import Cards from "./CardComponent";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

function App() {
  const content = [
    {
      heading: "FREE",
      price: "$0",
      lists: {
        l1: "Single User",
        l2: "5GB Storage",
        l3: "Unlimited Public Projects",
        l4: "Community Access",
        l5: "Unlimited Private Projects",
        l6: "Dedicated Phone Support",
        l7: "Free Subdomain",
        l8: "Monthly Status Reports",
      },
    },
    {
      heading: "PLUS",
      price: "$9",
      lists: {
        // l1: { name: "5 Users", icon: "check" },
        l1: "5 Users",
        l2: "50GB Storage",
        l3: "Unlimited Public Projects",
        l4: "Community Access",
        l5: "Unlimited Private Projects",
        l6: "Dedicated Phone Support",
        l7: "Free Subdomain",
        l8: "Monthly Status Reports",
      },
    },
    {
      heading: "PRO",
      price: "$49",
      lists: {
        l1: "Unlimited Users",
        l2: "150GB Storage",
        l3: "Unlimited Public Projects",
        l4: "Community Access",
        l5: "Unlimited Private Projects",
        l6: "Dedicated Phone Support",
        l7: "Unlimited Free Subdomains",
        l8: "Monthly Status Reports",
      },
    },
  ];
  return (
    <Container>
      <h1 className="text-center text-white mb-5 mt-3">Price cards</h1>
      <Cards details={content} />
    </Container>
  );
}

export default App;
