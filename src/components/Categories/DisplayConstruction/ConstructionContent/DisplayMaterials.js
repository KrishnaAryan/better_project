import React from "react";

const materialData = [
  {
    sl: 1,
    item: "Cement opc/ppc 43 and 53",
    brand: "ACC, RAMCO, ZUARI",
    remarks: "",
  },
  {
    sl: 2,
    item: "Reinforcement Steel",
    brand: "INDUS 555 (Fe 550), Meenakshi, Prime Gold, Kamdhenu",
    remarks: "",
  },
  {
    sl: 3,
    item: "M Sand",
    brand: "Zone - 3 and Zone - 3 Material",
    remarks: "As per IS 383-1970",
  },
  {
    sl: 4,
    item: "20mm Coarse aggregates",
    brand: "Single graded",
    remarks: "As per IS 383-1970",
  },
  {
    sl: 5,
    item: "40mm Coarse aggregates",
    brand: "Graded",
    remarks: "As per IS 383-1970",
  },
  {
    sl: 6,
    item: `Blocks 8", 6", 4"`,
    brand: "Best available nearby market",
    remarks: "As per IS 2185",
  },
  {
    sl: 7,
    item: "Bricks Table moulded",
    brand: "Best available nearby market",
    remarks: "As per IS 1077(1992)",
  },
  {
    sl: 8,
    item: "Vitrified Tiles",
    brand: "Somany, Kajaria, Cera, Bell",
    remarks: "",
  },
  {
    sl: 9,
    item: "Ceramic Tiles",
    brand: "Somany, Kajaria, Bell",
    remarks: "",
  },
  {
    sl: 10,
    item: "Anti Skid",
    brand: "Somany, Kajaria, Bell",
    remarks: "",
  },
  {
    sl: 11,
    item: "Plumbing Materials",
    brand: "Parryware, Jaquar, Cera, RAK",
    remarks: "",
  },
  {
    sl: 12,
    item: "Paint",
    brand: "Asian Paints",
    remarks: "",
  },
  {
    sl: 13,
    item: "Plywood 12mm, 18mm, 24mm",
    brand: "Century or Kitply",
    remarks: "",
  },
  {
    sl: 14,
    item: "Laminate",
    brand: "Greenlam, Green ply, Merino",
    remarks: "",
  },
  {
    sl: 15,
    item: "Electrical Items",
    brand: "Finolex, Anchor, Legrand, GM Modular",
    remarks: "",
  },
  {
    sl: 16,
    item: "Waterproofing Chemical",
    brand: "Dr.Fixit, Fosroc",
    remarks: "",
  },
  {
    sl: 17,
    item: "Door window shutter and frames",
    brand: "Teak wood, Sal wood, Neem wood",
    remarks: "",
  },
  {
    sl: 18,
    item: "Door fixtures/Fitting",
    brand: "Godrej",
    remarks: "",
  },
  {
    sl: 19,
    item: "UPVC",
    brand: "ZEN, VEKA, EAGLE BOSS",
    remarks: "",
  },
];
const DisplayMaterials = () => {
  return (
    <table className="material-table">
      <thead>
        <tr>
          <th>Sl.No.</th>
          <th>Description of Item</th>
          <th>Brand</th>
          <th>Remarks</th>
        </tr>
      </thead>
      <tbody>
        {materialData.map((item, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>{item.item}</td>
            <td>{item.brand}</td>
            <td>{item.remarks}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DisplayMaterials;
