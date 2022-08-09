import React, { useState, useEffect } from "react";
import ListAccordian from "../../assets/Accordian";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
const bangloreStandardFeatures = [
  {
    title: "Architectural Design & Drawing",
    content: [
      "2D working Plans",
      "Structural Designing",
      "3D Elevation",
      "Electrical Drawing",
      "Plumbing Drawing",
    ],
  },
  {
    title: "Structural",
    content: [
      "<b>Steel:</b> TMT bar Fe(550)",
      "<b>Cement:</b> 43 & 53 Grade - OPC and PPC",
      "<b>Solid Block:</b> 6’’ external walls & 4’’ internal walls",
      "<b>Red Bricks:</b> Table molded 9’’ external walls & 4.5’’ internal walls (Rs. 50/- additional)",
      "M sand will be used for PCC, Block Masonry, Column, Footing, Flooring and Concrete works.",
      "P sand will be used for Plastering and Front finishing work.",
      "RCC work of M20/M25 Grade for Column Footing, Plinth Beams, columns, Lintel, Canopy Projections, Staircase and Roof Slabs, Thickness of roof slab shall be 6’’ thick.",
      "PCC work of M15 Grade",
      "Block Masonry wall in CM 1:4",
      "Brick Masonry wall in CM 1:6",
      "<b>Waterproofing:</b> Dr. Fixit, Fosroc in the sump, washrooms, top roof",
      "<b>Ceiling Height:</b> Floor to ceiling height will be 10 feet",
    ],
  },
  {
    title: "Kitchen",
    content: [
      "<b>Kitchen granite slab:</b> 20mm thickness of slab at Rs. 100/sft",
      "Ceramic wall tiles 2 feet above the kitchen slab up to Rs. 40/sft",
      "Kitchen sink and sink faucet at Rs. 5000 basic Jaquar, Parryware, Hindware or equivalent brand ISI marked",
    ],
  },
  {
    title: "Bathroom",
    content: [
      "Anti-skid Ceramic Tile flooring at Rs. 40/sft",
      "Wall tiles works up to 7’ Height at Rs. 40/sft",
      "<b>Bathroom Fittings</b> – Rs. 20,000 MRP for each Bathroom includes floor mounted closet, washbasin with tab, 3 in 1 wall mixer, shower head of Jaquar, Somany or equivalent make.",
      "Flush Doors Waterproof",
    ],
  },

  {
    title: "Doors and Windows",
    content: [
      "<b>Door Frames:</b>",
      "Main Door – Sal wood frame of size 5’’x 4’’",
      "Internal Door – All internal Doors including Red Sal of size 5’’x2.5’’",
      "Bathroom Doors – Red Sal of size 5’’x2.5’’",

      "<b>Door Shutters:</b>",
      "Main Door – Laminated wooden door at Rs. 10,000/per door.",
      "Internal Door – Laminated Flush doors at Rs. 4,000/- per door",

      "<b>Door Fittings:</b>",
      "Main Door are provided with fittings – knob/handle with lock, Leg door stopper, hinges, tower bolt",
      "Internal doors are provided with fittings -knob/handle with lock, Leg door stopper, hinges, tower bolt",

      "<b>Windows:</b>",
      "3 shutter UPVC windows up to Rs. 300/sft & additional grills at Rs. 150/sft",
      "Neem Wood windows along with frame, shutter & grills",
      "Window area up to 125 Sft for every 1000 sft of Built-up Area",
    ],
  },
  {
    title: "Flooring",
    content: [
      "<b>Master Bedroom:</b> Vitrified Tiles/ Granite flooring at Rs. 70/sft",
      "<b>Bedroom:</b> Vitrified Tiles/ Granite flooring at Rs. 70/sft",
      "<b>Living & Dining Area:</b> Vitrified Tiles/ Granite flooring at Rs. 70/sft",
      "<b>Kitchen Flooring:</b> Vitrified Tiles/ Granite flooring at Rs. 70/sft",
      "<b>Balcony:</b> Vitrified Tiles/ Granite flooring at Rs. 40/sft",
      "<b>Bathroom:</b> Anti-skid tiles at Rs. 40/sft",
      "<b>Parking Tiles:</b> Anti-skid tiles at Rs. 40/sft",
      "<b>Staircase:</b> Sadarahalli/ Granite flooring at Rs. 80/sft",
    ],
  },
  {
    title: "Painting",
    content: [
      "<b>Internal walls and ceilings</b> – Two coats Tractor Emulsion of Asian/Berger Paint over 2 coats of putty.",
      "<b>External</b> – Two coats of ACE of Asian/Berger Paints over 1 coat of external primer.",
    ],
  },
  {
    title: "Electricals",
    content: [
      "<b>Wires:</b> Anchor as per the electrical drawings",
      "<b>Switches:</b> Anchor – Roma, GM Modular as per the electrical drawing",
    ],
  },
  {
    title: "Plumbing",
    content: ["<b>CPVC/PVC:</b> Ashirwad/Supreme"],
  },
  {
    title: "Other Inclusions & Specifications",
    content: [
      "Earth work excavation for column footing will be included up to 6’ depth from EGL (if rock drilling or water table is present at site, additional cost to be added as per the existing site conditions).",
      "Height compared from road level to parking flooring will be 1’ 6’’ to 2’ (Total 2’ height from the Road level)",
      "Plot condition assumed to be same as road level.",
      "Soil test & Site survey based on the site condition.",
      "Anti-termite treatment to create a chemical barrier along with periphery setback vertical surfaces and horizontal surfaces at finished earth level inside building premises as per standard.",
      "Parapet wall 3’0’’ height & 4’’ thick block work",
      "Internal wall plastering in CM 1:6",
      "External wall plastering in CM 1:6 with Sponge finishing.",
      "Doors and windows are provided as per the approved working plans.",
      "MS railing for external and internal staircase and SS railing for the balcony (excluding glass façade).",
      "Construction of sump tank using concrete blocks including fixing of chicken mesh and smooth plastering with water proofing – 10,000 Liters",
      "MS Gate: 10’ x 5’ MS gate as per the architectural designs (slider would be additional)",
      "Flagging concrete Protection around the building in PCC 1:3:6 plastering in CM to the exposed surface etc. (2’ offset)",
      "Rain water harvesting ",
      "Overhead tank of 2000 Liters",
      "Front Compound Wall",
    ],
  },
  {
    title: "Other Exclusions",
    content: [
      "3 side Compound wall excluding front compound at Rs. 300/sft",
      "Outside drainage stone slab & bottom construction",
      "Front Elevation as per the design",
      "Electricity and water charges during the construction",
      "Sanction plan or any other approval cost",
      "Atta/Loft in any Bedroom and Kitchen at Rs. 400/Sft",
      "SSM and DPC (If required)",
    ],
  },
  {
    title: "Terms & Conditions",
    content: [
      "The rate of Cement quoted as - Rs 350 to Rs. 400 per bag of OPC 53 Grade for Concrete works & OPC 43 Grade for other works. Any variation from the rate quoted will either be paid extra or adjust based on the market rates during the period of execution of contract on the basis of verifiable documents. ",

      "The rate of reinforcement steel quoted as - Rs 56,000 to Rs. 62,000 per Mton. Any variation from the rate quoted will either be paid extra or adjust based on the market rates during the period of execution of contract on the basis of verifiable documents.",

      "The above cost mentioned is considering the built-up area from outer slab to slab area which also includes Portico, sit outs, Internal & external staircase, balcony, Head room and any roof projections based on the architectural drawing.",

      "Laying charges for vitrified is inclusive in the construction cost whereas granite floor laying would be additional at Rs. 25/sft",

      "All the material & the cost mentioned above are inclusive taxes.",

      "Cost of Front Elevation will be on the basis of Design and material used such as Cladding, Rough stone, tiles & granite etc.",

      "Main door considered as entrance door therefore only one Teak wood door along with frame will be provided.",

      "Chajja’s are provided only above windows from the outside.",

      "The cost of other work varies depending on the site dimension and the need of the customer.",
    ],
  },
];

const bangloreBudgetFeatures = [
  {
    title: "Architectural Design & Drawing",
    content: [
      "2D working Plans",
      "Structural Designing",
      "3D Elevation",
      "Electrical Drawing",
      "Plumbing Drawing",
    ],
  },
  {
    title: "Structural",
    content: [
      "<b>Steel:</b> TMT bar Fe(550)",
      "<b>Cement:</b> 43 & 53 Grade - OPC and PPC",
      "<b>Solid Block:</b> 6’’ external walls & 4’’ internal walls",
      "M sand will be used for PCC, Block Masonry, Column, Footing, Flooring and Concrete works.",
      "P sand will be used for Plastering and Front finishing work.",
      "RCC work of M20/M25 Grade for Column Footing, Plinth Beams, columns, Lintel, Canopy Projections, Staircase and Roof Slabs, Thickness of roof slab shall be 6’’ thick.",
      "PCC work of M15 Grade",
      "Block Masonry wall in CM 1:4",
      "<b>Waterproofing:</b> Dr. Fixit, Fosroc in the sump, washrooms, top roof",
      "<b>Ceiling Height:</b> Floor to ceiling height will be 10’0’’",
    ],
  },
  {
    title: "Kitchen",
    content: [
      "<b>Kitchen granite slab:</b> 20mm thickness of slab at Rs. 70/sft inclusive of taxes.",
      "Ceramic wall tiles 2 feet above the kitchen slab up to Rs. 40/sft inclusive of taxes.",
      "Kitchen sink and sink faucet at Rs. 2500 basic Jaquar, Parryware, Hindware or equivalent brand ISI marked",
    ],
  },
  {
    title: "Bathroom",
    content: [
      "Wall tiles works up to 7’ Height at Rs. 30/sft inclusive of taxes.",
      "<b>Bathroom Fittings</b> – Rs. 15,000 MRP for each Bathroom includes floor mounted closet, washbasin with tab, 3 in 1 wall mixer, shower head of Jaquar, Somany or equivalent make.",
      "Flush Doors Waterproof",
    ],
  },
  {
    title: "Doors & Windows",
    content: [
      "<b>Door Frames:</b>",
      "Main Door – Sal wood frame of size 5’’x 4’’",
      "Internal Door – All internal Doors including Red Sal of size 5’’x2.5’’",
      "Bathroom Doors – Red Sal of size 5’’x2.5’’",

      "<b>Door Shutters:</b>",
      "Main Door – Laminated wooden door at Rs. 4,500/per door.",
      "Internal Door – Laminated Flush doors at Rs. 4,000/- per door",

      "<b>Door Fittings:</b>",
      "Main Door are provided with fittings – knob/handle with lock, Leg door stopper, hinges, tower bolt",
      "Internal doors are provided with fittings -knob/handle with lock, Leg door stopper, hinges, tower bolt",

      "<b>Windows:</b>",
      "3 shutter UPVC windows up to Rs. 300/sft & additional grills at Rs. 150/sft",
      "Neem Wood windows along with frame, shutter & grills",
      "Window area up to 125 Sft for every 1000 sft of Built-up Area",
    ],
  },
  {
    title: "Flooring",
    content: [
      "<b>Master Bedroom:</b> Vitrified Tiles/ Granite flooring at Rs. 40/sft",
      "<b>Bedroom:</b> Vitrified Tiles/ Granite flooring at Rs. 40/sft",
      "<b>Living & Dining Area:</b> Vitrified Tiles/ Granite flooring at Rs. 40/sft",
      "<b>Kitchen Flooring:</b> Vitrified Tiles/ Granite flooring at Rs. 40/sft",
      "<b>Balcony:</b> Vitrified Tiles/ Granite flooring at Rs. 30/sft",
      "<b>Bathroom:</b> Anti-skid tiles at Rs. 30/sft",
      "<b>Parking Tiles:</b> Anti-skid tiles at Rs. 30/sft",
      "<b>Staircase:</b> Sadarahalli/ Granite flooring at Rs. 60/sft ",
    ],
  },
  {
    title: "Painting",
    content: [
      "<b>Internal walls and ceilings</b> – Two coats Tractor Emulsion of Asian/Berger Paint over 2 coats of putty.",
      "<b>External</b> – Two coats of ACE of Asian/Berger Paints over 1 coat of external primer.",
    ],
  },
  {
    title: "Electricals",
    content: [
      "<b>Wires:</b> Anchor as per the electrical drawings",
      "<b>Switches:</b> Anchor – Roma as per the electrical drawing",
    ],
  },
  {
    title: "Plumbing",
    content: ["<b>CPVC/PVC:</b> Ashirwad/Supreme"],
  },
  {
    title: "Other Inclusions & Specifications",
    content: [
      "Earth work excavation for column footing will be included up to 6’ depth from EGL (if rock drilling or water table is present at site, additional cost to be added as per the existing site conditions).",
      "Height compared from road level to parking flooring will be 2’ (Total 2’ height from the Road level)",
      "Plot condition assumed to be same as road level.",
      "Soil test & Site survey based on the site condition.",
      "Anti-termite treatment to create a chemical barrier along with periphery setback vertical surfaces and horizontal surfaces at finished earth level inside building premises as per standard.",
      "Internal wall plastering in CM 1:6",
      "External wall plastering in CM 1:6 with Sponge finishing.",
      "Doors and windows are provided as per the approved working plans.",
      "MS railing for external staircase and SS railing for internal staircase (excluding glass façade).",
      "Construction of sump tank using concrete blocks including fixing of chicken mesh and smooth plastering with water proofing – 5,000 Liters",
      "Flagging concrete Protection around the building in PCC 1:3:6 plastering in CM to the exposed surface etc. (2’ offset)",
      "Rain water harvesting",
      "Overhead tank of 1000 Liters",
    ],
  },
  {
    title: "Other Exclusions",
    content: [
      "4 side Compound wall at Rs. 300/sft",
      "Outside drainage stone slab & bottom construction",
      "Front Elevation as per the design",
      "Electricity and water charges during the construction",
      "Sanction plan or any other approval cost",
      "Atta/Loft in any Bedroom and Kitchen at Rs. 400/sft",
      "MS Gate: 10’ x 5’ MS gate as per the architectural designs",
      "Parapet wall 3’0’’ height & 4’’ thick block work",
      "SSM and DPC (If required)",
    ],
  },
  {
    title: "Terms & Conditions",
    content: [
      "The rate of Cement quoted as - Rs 300 to Rs. 350 per bag of 53 Grade for Concrete works & 43 Grade for other works. Any variation from the rate quoted will either be paid extra or adjust based on the market rates during the period of execution of contract on the basis of verifiable documents. ",

      "The rate of reinforcement steel quoted as - Rs 50,000 to Rs. 55,000 per Mton. Any variation from the rate quoted will either be paid extra or adjust based on the market rates during the period of execution of contract on the basis of verifiable documents. ",

      "The above cost mentioned is considering the built-up area from outer slab to slab area which also includes Portico, sit outs, Internal & external staircase, balcony, Head room and any roof projections based on the architectural drawing.",

      "Laying charges for vitrified is inclusive in the construction cost whereas granite floor laying would be additional at Rs. 25/sft",

      "All the material & the cost mentioned above are inclusive taxes.",

      "Cost of Front Elevation will be on the basis of Design and material used such as Cladding, Rough stone, tiles & granite etc.",

      "Main door considered as entrance door therefore only one Teak wood door along with frame will be provided.",

      "Chajja’s are provided only above windows from the outside.",

      "The cost of other work varies depending on the site dimension and the need of the customer. ",
    ],
  },
];

const hyderabadStandardFeatures = [
  {
    title: "Architectural Design & Drawing",
    content: [
      "2D working Plans",
      "Structural Designing",
      "3D Elevation",
      "Electrical Drawing",
      "Plumbing Drawing",
    ],
  },
  {
    title: "Structural",
    content: [
      "<b>Steel:</b> TMT bar Fe(550)",
      "<b>Cement:</b> 43 & 53 Grade - OPC and PPC",
      "<b>Solid Block:</b> 6’’ external walls & 4’’ internal walls",
      "<b>Red Bricks:</b> Table molded 9’’ external walls & 4.5’’ internal walls",
      "<b>River Sand</b> will be used for PCC, Block Masonry, Column, Footing, Flooring and Concrete works, Plastering and Front finishing work.",
      "<b>RCC</b> work of M20/M25 Grade for Column Footing, Plinth Beams, columns, Lintel, Canopy Projections, Staircase and Roof Slabs, Thickness of roof slab shall be 6’’ thick.",
      "<b>PCC</b> work of M15 Grade",
      "Block Masonry wall in CM 1:4",
      "Brick Masonry wall in CM 1:6",
      "<b>Waterproofing:</b> Dr. Fixit, Fosroc in the sump, washrooms, top roof",
      "<b>Ceiling Height:</b> Floor to ceiling height will be 10 feet",
    ],
  },
  {
    title: "Kitchen",
    content: [
      "<b>Kitchen granite slab:</b> 20mm thickness of slab at Rs. 100/sft",
      "Ceramic wall tiles 2 feet above the kitchen slab up to Rs. 40/sft",
      "Kitchen sink and sink faucet at Rs. 5000 basic Jaquar, Parryware, Hindware or equivalent brand ISI marked",
    ],
  },
  {
    title: "Bathroom",
    content: [
      "Anti-skid Ceramic Tile flooring at Rs. 40/sft",
      "Wall tiles works up to 7’ Height at Rs. 40/sft",
      "<b>Bathroom Fittings</b> – Rs. 20,000 MRP for each Bathroom includes floor mounted closet, washbasin with tab, 3 in 1 wall mixer, shower head of Jaquar, Somany or equivalent make.",
      "Flush Doors Waterproof",
    ],
  },

  {
    title: "Doors and Windows",
    content: [
      "<b>Door Frames:</b>",
      "Main Door – Teak Wood Frame of size 5’’x 4’’",
      "Internal Door – All internal Doors including Red Sal of size 5’’x2.5’’",
      "Bathroom Doors – Red Sal of size 5’’x2.5’’",

      "<b>Door Shutters:</b>",
      "Main Door – Designer Teak wood at Rs. 10,000/per door.",
      "Internal Door – Laminated Flush doors at Rs. 4,000/- per door",

      "<b>Door Fittings:</b>",
      "Main Door are provided with fittings – knob/handle with lock, Leg door stopper, hinges, tower bolt",
      "Internal doors are provided with fittings -knob/handle with lock, Leg door stopper, hinges, tower bolt",

      "<b>Windows:</b>",
      "3 shutter UPVC windows up to Rs. 300/sft & additional grills at Rs. 150/sft",
      "Neem Wood windows along with frame, shutter & grills",
      "Window area up to 125 Sft for every 1000 sft of Built-up Area",
    ],
  },
  {
    title: "Flooring",
    content: [
      "<b>Master Bedroom:</b> Vitrified Tiles/ Granite flooring at Rs. 70/sft",
      "<b>Bedroom:</b> Vitrified Tiles/ Granite flooring at Rs. 70/sft",
      "<b>Living & Dining Area:</b> Vitrified Tiles/ Granite flooring at Rs. 70/sft",
      "<b>Kitchen Flooring:</b> Vitrified Tiles/ Granite flooring at Rs. 70/sft",
      "<b>Balcony:</b> Vitrified Tiles/ Granite flooring at Rs. 40/sft",
      "<b>Bathroom:</b> Anti-skid tiles at Rs. 40/sft",
      "<b>Parking Tiles:</b> Anti-skid tiles at Rs. 40/sft",
      "<b>Staircase:</b> Sadarahalli/ Granite flooring at Rs. 80/sft",
    ],
  },
  {
    title: "Painting",
    content: [
      "<b>Internal walls and ceilings</b> – Two coats Tractor Emulsion of Asian/Berger Paint over 2 coats of putty.",
      "<b>External</b> – Two coats of ACE of Asian/Berger Paints over 1 coat of external primer.",
    ],
  },
  {
    title: "Electricals",
    content: [
      "<b>Wires:</b> Anchor as per the electrical drawings",
      "<b>Switches:</b> Anchor – Roma, GM Modular as per the electrical drawing",
    ],
  },
  {
    title: "Plumbing",
    content: ["<b>CPVC/PVC:</b> Ashirwad/Supreme"],
  },
  {
    title: "Other Inclusions & Specifications",
    content: [
      "Earth work excavation for column footing will be included up to 6’ depth from EGL (if rock drilling or water table is present at site, additional cost to be added as per the existing site conditions).",
      "Height compared from road level to parking flooring will be 1’ 6’’ to 2’ (Total 2’ height from the Road level) ",
      "Plot condition assumed to be same as road level.",
      "Soil test & Site survey based on the site condition.",
      "Anti-termite treatment to create a chemical barrier along with periphery setback vertical surfaces and horizontal surfaces at finished earth level inside building premises as per standard.",
      "Parapet wall 3’0’’ height & 4’’ thick block work",
      "Internal wall plastering in CM 1:6",
      "External wall plastering in CM 1:6 with Sponge finishing.",
      "Doors and windows are provided as per the approved working plans.",
      "MS railing for external and internal staircase and SS railing for the balcony (excluding glass façade).",
      "Construction of sump tank using concrete blocks including fixing of chicken mesh and smooth plastering with water proofing – 10,000 Liters",
      "MS Gate: 10’ x 5’ MS gate as per the architectural designs (slider would be additional)",
      "Flagging concrete Protection around the building in PCC 1:3:6 plastering in CM to the exposed surface etc. (2’ offset)",
      "Rain water harvesting ",
      "Overhead tank of 2000 Liters",
    ],
  },
  {
    title: "Other Exclusions",
    content: [
      "3 side Compound wall excluding front compound at Rs. 300/sft",
      "Outside drainage stone slab & bottom construction",
      "Front Elevation as per the design",
      "Electricity and water charges during the construction",
      "Sanction plan or any other approval cost",
      "Atta/Loft in any Bedroom and Kitchen at Rs. 400/Sft",
      "SSM and DPC (If required)",
    ],
  },
  {
    title: "Terms & Conditions",
    content: [
      "The rate of Cement quoted as - Rs 350 to Rs. 400 per bag of OPC 53 Grade for Concrete works & OPC 43 Grade for other works. Any variation from the rate quoted will either be paid extra or adjust based on the market rates during the period of execution of contract on the basis of verifiable documents. ",

      "The rate of reinforcement steel quoted as - Rs 56,000 to Rs. 62,000 per Mton. Any variation from the rate quoted will either be paid extra or adjust based on the market rates during the period of execution of contract on the basis of verifiable documents.",

      "The above cost mentioned is considering the built-up area from outer slab to slab area which also includes Portico, sit outs, Internal & external staircase, balcony, Head room and any roof projections based on the architectural drawing.",

      "Laying charges for vitrified is inclusive in the construction cost whereas granite floor laying would be additional at Rs. 25/sft",

      "All the material & the cost mentioned above are inclusive taxes.",

      "Cost of Front Elevation will be on the basis of Design and material used such as Cladding, Rough stone, tiles & granite etc.",

      "Main door considered as entrance door therefore only one Teak wood door along with frame will be provided.",

      "Chajja’s are provided only above windows from the outside.",

      "The cost of other work varies depending on the site dimension and the need of the customer.",
    ],
  },
];

const hyderabadBudgetFeatures = [
  {
    title: "Architectural Design & Drawing",
    content: [
      "2D working Plans",
      "Structural Designing",
      "3D Elevation",
      "Electrical Drawing",
      "Plumbing Drawing",
    ],
  },
  {
    title: "Structural",
    content: [
      "<b>Steel:</b> TMT bar Fe(550)",
      "<b>Cement:</b> 43 & 53 Grade - OPC and PPC",
      "<b>Solid Block:</b> 6’’ external walls & 4’’ internal walls",
      "<b>Red Bricks:</b> Table molded 9’’ external walls & 4.5’’ internal walls",
      "<b>River Sand</b> will be used for PCC, Block Masonry, Column, Footing, Flooring, Concrete works, Plastering and Front finishing work",
      "RCC work of M20/M25 Grade for Column Footing, Plinth Beams, columns, Lintel, Canopy Projections, Staircase and Roof Slabs, Thickness of roof slab shall be 6’’ thick.",
      "PCC work of M15 Grade",
      "Block Masonry wall in CM 1:4",
      "<b>Waterproofing:</b> Dr. Fixit, Fosroc in the sump, washrooms, top roof",
      "<b>Ceiling Height:</b> Floor to ceiling height will be 10’0’’",
    ],
  },
  {
    title: "Kitchen",
    content: [
      "<b>Kitchen granite slab:</b> 20mm thickness of slab at Rs. 70/sft.",
      "Ceramic wall tiles 2 feet above the kitchen slab up to Rs. 40/sft.",
      "Kitchen sink and sink faucet at Rs. 2500 basic Jaquar, Parryware, Hindware or equivalent brand ISI marked",
    ],
  },
  {
    title: "Bathroom",
    content: [
      "Wall tiles works up to 7’ Height at Rs. 30/sft inclusive of taxes.",
      "<b>Bathroom Fittings</b> – Rs. 15,000 MRP for each Bathroom includes floor mounted closet, washbasin with tab, 3 in 1 wall mixer, shower head of Jaquar, Somany or equivalent make.",
      "Flush Doors Waterproof",
    ],
  },
  {
    title: "Doors & Windows",
    content: [
      "<b>Door Frames:</b>",
      "Main Door – Sal wood frame of size 5’’x 4’’",
      "Internal Door – All internal Doors including Red Sal of size 5’’x2.5’’",
      "Bathroom Doors – Red Sal of size 5’’x2.5’’",

      "<b>Door Shutters:</b>",
      "Main Door – Laminated wooden door at Rs. 4,500/per door.",
      "Internal Door – Laminated Flush doors at Rs. 4,000/- per door",

      "<b>Door Fittings:</b>",
      "Main Door are provided with fittings – knob/handle with lock, Leg door stopper, hinges, tower bolt",
      "Internal doors are provided with fittings -knob/handle with lock, Leg door stopper, hinges, tower bolt",

      "<b>Windows:</b>",
      "3 shutter UPVC windows up to Rs. 300/sft & additional grills at Rs. 150/sft",
      "Neem Wood windows along with frame, shutter & grills",
      "Window area up to 125 Sft for every 1000 sft of Built-up Area",
    ],
  },
  {
    title: "Flooring",
    content: [
      "<b>Master Bedroom:</b> Vitrified Tiles/ Granite flooring at Rs. 40/sft",
      "<b>Bedroom:</b> Vitrified Tiles/ Granite flooring at Rs. 40/sft",
      "<b>Living & Dining Area:</b> Vitrified Tiles/ Granite flooring at Rs. 40/sft",
      "<b>Kitchen Flooring:</b> Vitrified Tiles/ Granite flooring at Rs. 40/sft",
      "<b>Balcony:</b> Vitrified Tiles/ Granite flooring at Rs. 30/sft",
      "<b>Bathroom:</b> Anti-skid tiles at Rs. 30/sft",
      "<b>Parking Tiles:</b> Anti-skid tiles at Rs. 30/sft",
      "<b>Staircase:</b> Sadarahalli/ Granite flooring at Rs. 60/sft ",
    ],
  },
  {
    title: "Painting",
    content: [
      "<b>Internal walls and ceilings</b> – Two coats Tractor Emulsion of Asian/Berger Paint over 2 coats of putty.",
      "<b>External</b> – Two coats of ACE of Asian/Berger Paints over 1 coat of external primer.",
    ],
  },
  {
    title: "Electricals",
    content: [
      "<b>Wires:</b> Anchor as per the electrical drawings",
      "<b>Switches:</b> Anchor – Roma as per the electrical drawing",
    ],
  },
  {
    title: "Plumbing",
    content: ["<b>CPVC/PVC:</b> Ashirwad/Supreme"],
  },
  {
    title: "Other Inclusions & Specifications",
    content: [
      "Earth work excavation for column footing will be included up to 6’ depth from EGL (if rock drilling or water table is present at site, additional cost to be added as per the existing site conditions).",
      "Height compared from road level to parking flooring will be 2’ (Total 2’ height from the Road level)",
      "Plot condition assumed to be same as road level.",
      "Soil test & Site survey based on the site condition.",
      "Anti-termite treatment to create a chemical barrier along with periphery setback vertical surfaces and horizontal surfaces at finished earth level inside building premises as per standard.",
      "Internal wall plastering in CM 1:6",
      "External wall plastering in CM 1:6 with Sponge finishing.",
      "Doors and windows are provided as per the approved working plans.",
      "MS railing for external staircase and SS railing for internal staircase (excluding glass façade).",
      "Construction of sump tank using concrete blocks including fixing of chicken mesh and smooth plastering with water proofing – 5,000 Liters",
      "Flagging concrete Protection around the building in PCC 1:3:6 plastering in CM to the exposed surface etc. (2’ offset)",
      "Overhead tank of 1000 Liters",
    ],
  },
  {
    title: "Other Exclusions",
    content: [
      "4 side Compound wall at Rs. 300/sft",
      "Outside drainage stone slab & bottom construction",
      "Front Elevation as per the design",
      "Electricity and water charges during the construction",
      "Sanction plan or any other approval cost",
      "Atta/Loft in any Bedroom and Kitchen at Rs. 400/sft",
      "MS Gate: 10’ x 5’ MS gate as per the architectural designs",
      "Parapet wall 3’0’’ height & 4’’ thick block work",
      "SSM and DPC (If required)",
    ],
  },
  {
    title: "Terms & Conditions",
    content: [
      "The rate of Cement quoted as - Rs 300 to Rs. 350 per bag of 53 Grade for Concrete works & 43 Grade for other works. Any variation from the rate quoted will either be paid extra or adjust based on the market rates during the period of execution of contract on the basis of verifiable documents. ",

      "The rate of reinforcement steel quoted as - Rs 50,000 to Rs. 55,000 per Mton. Any variation from the rate quoted will either be paid extra or adjust based on the market rates during the period of execution of contract on the basis of verifiable documents. ",

      "The above cost mentioned is considering the built-up area from outer slab to slab area which also includes Portico, sit outs, Internal & external staircase, balcony, Head room and any roof projections based on the architectural drawing.",

      "Laying charges for vitrified is inclusive in the construction cost whereas granite floor laying would be additional at Rs. 25/sft",

      "All the material & the cost mentioned above are inclusive taxes.",

      "Cost of Front Elevation will be on the basis of Design and material used such as Cladding, Rough stone, tiles & granite etc.",

      "Chajja’s are provided only above windows from the outside.",

      "The cost of other work varies depending on the site dimension and the need of the customer. ",
    ],
  },
];

const DisplayPremium = ({ _id }) => {
  const [featureByCity, setFeatureByCity] = useState();
  const [active, setActive] = useState("");
  const { construction } = useSelector(state => state.categoryData);

  const handleClick = () => {
    // console.log("clicked");
    setActive(active === "" ? "active" : "");
  };

  useEffect(() => {
    construction && setFeatureByCity(construction.filter(data => data._id === _id)[0].standard || []);
  }, [_id, construction]);

  return (
    <div>
      <div className="list-box">
        <Helmet>
          <meta
            name="description"
            content="Get best house construction rates and construction material rates in Bangalore. Get quote and consult our architects and engineers"
          />
          <title>House Construction Cost and House Construction Rates in Bangalore</title>
          <meta
            name="Keywords"
            content="House Construction, House Construction Cost, Construction Materials Cost, Construction Companies"
          />
        </Helmet>
        {featureByCity &&
          featureByCity.map((item, index) => (
            <ListAccordian
              active={active}
              handleClick={handleClick}
              key={index}
              title={item.title}
              content={`<ul>${item.content
                .map(e => {
                  return "<li>" + e + "</li>";
                })
                .join("")}</ul>`}
            />
          ))}
      </div>
    </div>
  );
};

const DisplayStandard = ({ _id }) => {
  const [featureByCity, setFeatureByCity] = useState();
  const [active, setActive] = useState("");
  const { construction } = useSelector(state => state.categoryData);

  const handleClick = () => {
    // console.log("clicked");
    setActive(active === "" ? "active" : "");
  };

  useEffect(() => {
    construction && setFeatureByCity(construction.filter(data => data._id === _id)[0].budget || []);
  }, [_id, construction]);
// console.log(featureByCity);
  return (
    <div>
      <div className="list-box">
        <Helmet>
          <meta
            name="description"
            content="Get best house construction rates and construction material rates in Bangalore. Get quote and consult our architects and engineers"
          />
          <meta name="Title" content="House Construction Cost and House Construction Rates in Bangalore" />
          <meta
            name="Keywords"
            content="House Construction, House Construction Cost, Construction Materials Cost, Construction Companies"
          />
        </Helmet>
        {featureByCity &&
          featureByCity.map((item, index) => (
            <ListAccordian
              active={active}
              handleClick={handleClick}
              key={index}
              title={item.title}
              content={`<ul>${item.content
                .map(e => {
                  return "<li>" + e + "</li>";
                })
                .join("")}</ul>`}
            />
          ))}
      </div>
    </div>
  );
};

export { DisplayPremium, DisplayStandard };
