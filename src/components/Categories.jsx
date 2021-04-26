import React from "react";
import { GrServerCluster } from "react-icons/gr";
import { FaRegQuestionCircle } from "react-icons/fa";
import { GoBeaker } from "react-icons/go";
import {
  GiCornerExplosion,
  GiSpray,
  GiChestArmor,
  GiRayGun,
  GiPoliceOfficerHead,
  GiHandcuffs,
  GiPoliceCar,
  GiGasMask,
  GiSuitcase,
  GiHelicopter,
  GiPistolGun,
  GiRadarDish,
  GiBee,
  GiHorseHead,
  GiGavel,
  GiSteampunkGoggles,
} from "react-icons/gi";

import { TiVendorMicrosoft } from "react-icons/ti";

export const SPEND_CATEGORIES = [
  {
    name: "guns",
    title: "Guns & Ammo",
    icon: <GiPistolGun size="2em" />,
  },
  {
    name: "restraints",
    title: "Restraints",
    icon: <GiHandcuffs size="2em" />,
  },
  {
    name: "tear_gas",
    title: "Tear Gas",
    icon: <GiGasMask size="2em" />,
  },
  {
    name: "stun",
    title: "Stun Guns",
    icon: <GiRayGun size="2em" />,
  },
  {
    name: "forensics",
    title: "Forensics",
    icon: <GoBeaker size="2em" />,
  },

  {
    name: "riot",
    title: "Riot Gear",
    icon: <GiSpray size="2em" />,
  },
  {
    name: "armor",
    title: "Body Armor",
    icon: <GiChestArmor size="2em" />,
  },

  {
    name: "surveillance",
    title: "Surveillance",
    icon: <GiRadarDish size="2em" />,
  },
  {
    name: "tactical",
    title: "Tactical",
    icon: <GiSteampunkGoggles size="2em" />,
  },
  {
    name: "explosives",
    title: "Explosives",
    icon: <GiCornerExplosion size="2em" />,
  },
  {
    name: "drone",
    title: "Drones",
    icon: <GiBee size="2em" />,
  },
  {
    name: "helicopter",
    title: "Helicopter",
    icon: <GiHelicopter size="2em" />,
  },
  {
    name: "vehicles",
    title: "Vehicles",
    icon: <GiPoliceCar size="2em" />,
  },
  {
    name: "clothing",
    title: "Clothing",
    icon: <GiPoliceOfficerHead size="2em" />,
  },
  {
    name: "animal",
    title: "Animals",
    icon: <GiHorseHead size="2em" />,
  },
  {
    name: "travel",
    title: "Travel",
    icon: <GiSuitcase size="2em" />,
  },
  {
    name: "it_software",
    title: "Software",
    icon: <TiVendorMicrosoft size="2em" />,
  },
  {
    name: "it_hardware",
    title: "Hardware",
    icon: <GrServerCluster size="2em" />,
  },
  {
    name: "legal",
    title: "Legal Services",
    icon: <GiGavel size="2em" />,
  },
  {
    name: "the_fuck",
    title: "Huh?",
    icon: <FaRegQuestionCircle size="2em" />,
  },
  {
    name: "uncategorized",
    title: "Uncategorized",
    icon: <FaRegQuestionCircle size="2em" />,
  },
];
