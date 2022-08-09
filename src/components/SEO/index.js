import React from "react";
import { Route } from "react-router-dom";

import HomeConstruction from "./HomeConstruction";
import ConstructionCompany from "./ConstructionCompany";
import HouseConstructionContractors from "./HouseConstructionContractors";
import EasyHomeConstruction from "./EasyHomeConstruction";
import HomeArchitectureDesign from "./HomeArchitectureDesign";
import HouseConstruction from "./HouseConstruction";
import BetterHomeConstruction from "./BetterHomeConstruction";
import LowBudgetHomeConstruction from "./LowBudgetHomeConstruction";
import LowBudgetHouseConstruction from "./LowBudgetHouseConstruction";
import LowCostHomeConstruction from "./LowCostHomeConstruction";
import ReviewedContractors from "./ReviewedContractors";
import TrustedArchitects from "./TrustedArchitects";
import QualityHomeConstruction from "./QualityHomeConstruction";
import FastestGrowingConstructionCompany from "./FastestGrowingConstructionCompany";
import BestArchitectsInBangalore from "./BestArchitectsInBangalore";
import HomeStructuralEngineer from "./HomeStructuralEngineer";
import HomeDesignersInBangalore from "./HomeDesignersInBangalore";
import CivilEngineeringConstruction from "./CivilEngineeringConstruction"
import TechBuildConstruction from "./TechBuildConstruction"

import Navbar from "../Navbar";
import Header from "../Header";
import FrontBanner from "../FrontBanner";
import FooterNav from "../FooterNav";

const seoArray = [
  { ComponentName: HomeConstruction, route: "/home-construction" },
  { ComponentName: ConstructionCompany, route: "/construction-company" },
  { ComponentName: HouseConstructionContractors, route: "/house-construction-contractors" },
  { ComponentName: EasyHomeConstruction, route: "/easy-home-construction" },
  { ComponentName: HomeArchitectureDesign, route: "/home-architecture-design" },
  { ComponentName: HouseConstruction, route: "/house-construction" },
  { ComponentName: BetterHomeConstruction, route: "/better-home-construction" },
  { ComponentName: LowBudgetHomeConstruction, route: "/low-budget-home-construction" },
  { ComponentName: LowBudgetHouseConstruction, route: "/low-budget-house-construction" },
  { ComponentName: LowCostHomeConstruction, route: "/low-cost-home-construction" },
  { ComponentName: ReviewedContractors, route: "/reviewed-contractors" },
  { ComponentName: TrustedArchitects, route: "/trusted-architects" },
  { ComponentName: QualityHomeConstruction, route: "/quality-home-construction" },
  { ComponentName: FastestGrowingConstructionCompany, route: "/fastest-growing-construction-company" },
  { ComponentName: BestArchitectsInBangalore, route: "/best-architects-in-bangalore" },
  { ComponentName: HomeStructuralEngineer, route: "/home-structural-engineer" },
  { ComponentName: HomeDesignersInBangalore, route: "/home-designers-in-bangalore" },
  { ComponentName: CivilEngineeringConstruction, route: "/civil-engineering-construction" },
  { ComponentName: TechBuildConstruction, route: "/tech-build-construction" },
];

const SEO = ({ frontBanner, addresses, footerSEO }) => {
  return (
    <>
      {seoArray.map(({ ComponentName, route }, i) => {
        return (
          <Route path={route} key={i}>
            <Navbar />
            <Header />
            <FrontBanner frontBanner={frontBanner} />
            <ComponentName />
            <FooterNav addresses={addresses} footerSEO={footerSEO} />
          </Route>
        );
      })}
    </>
  );
};

export default SEO;
