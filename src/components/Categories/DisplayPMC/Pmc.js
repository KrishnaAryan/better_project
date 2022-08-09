import React, { useState } from "react";
import "./Pmc.css";
import { Modal } from "../assets/Modal";
import ListAccordian from "../assets/Accordian";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";

const pmcContent = [
  {
    title: "What is PMC ?",
    content:
      "A project management consultant is a firm which has a  team of experts in different domains who provide expert project management advice to external businesses as a bridge between agencies.",
  },
  {
    title: "Why PMC ?",
    content:
      "PMC (Project Management Consultancy) offers one of the effective management solutions to increase and improve the efficiency and outcome of a project in construction. Project Management Consultants do the work of managing the entire Project flow by application of their Knowledge, Skills, and Experience at various stages as per the client’s requirement.",
  },
  {
    title: "What PMC does?",
    content: `The key role of the PMC is to provide resources and expertise unavailable to the client, to assist the client in project implementation.<br></br>
        The role can include some or all of the following activities:<br></br>
        `,
  },
  {
    title: "PMC Project Structure:",
    content: `1. To clearly define business objectives and targets of the Project.<br></br>
        2. 	Provide guidance & way forward by making the protocols and communication of all the documents.<br></br>
        3. 	Plans for finalization of all the drawings, workflow, payment schedule, procurement, quantity survey, tendering procedure, labour, etc.<br></br>
        4. 	Review & respond to escalated items from on-site project team and escalate to senior management.<br></br>
        5. 	Keeps reports on a day-to-day basis from the Project team.<br></br>
        6. 	Scheduling meetings every month with the entire Team (Execution, PMC, Client).<br></br>
        7. 	Reports progress highlights, delays through delay logs, and schedule status review. <br></br>
        8. 	Review risks, issues and key topics every week with contractors through weekly review meetings.<br></br>
        9. 	Escalate risks/issues & related recommendations to the CLIENT Project team as appropriate.<br></br>
        10.  Review progress issues, review status of specific areas & ensure common understanding of project progress. Inform & escalate the issues.<br></br>
        11. Monitoring and analysing advance orders or advance purchases for materials or equipment with long delivery times to comply with programme requirements.<br></br>
        12. Ensures the quality of work, on time delivery and zero wastage of material with all the government safety norms.<br></br>`,
  },
  {
    title: "Challenges faced by the client:",
    content: `1. Constructability issues.<br></br>
        2. 	Supply chain risk – material delays.<br></br>
        3. 	Poor quality engineering process runs.<br></br>
        4. 	Inter-Contractor Coordination Issues.<br></br>
        5. 	Activity dependency structure.<br></br>
        6. 	Lack of Safety Awareness & Unsafe work methods.<br></br>
        7. 	Meteorological limitations.<br></br>
        8. 	Issues regarding labour.<br></br>`,
  },
  {
    title: "Solution provided by PMC:",
    content: `Coordination meetings, Services Coordinator right from design phase till the execution.<br></br>
        1. 	Activity sequencing to reduce idle man hours in Monsoon and all other hard situations.<br></br>
        2. 	Higher management reporting dashboard – issues & achievements communication.<br></br>
        3. 	Round table progress reviews, design – construction interface.<br></br>
        4. 	Planning signs off & adherence system.<br></br>
        5. 	Daily quality audits, quality diligence & delivery sessions in team, calibrations & standardizations enforcement.<br></br>
        6. 	Conversion of RCC to Composite structure – Mezzanine, Package additions to pre-engineered buildings.<br></br>
        7. 	Safe working methodologies, Safety awareness programs, Penalty enforcement on defaulters.<br></br>
        8. 	Project Delivery – Material delivery interface & forecast communications.<br></br>
        9. 	Reduction in any kind of wastage.<br></br>`,
  },
  {
    title: "Different Management systems:",
    content: `1. Project Time Management<br></br>
        2. 	Project Cost Management<br></br>
        3. 	Project Quality Management<br></br>
        4. 	Project Human Resource Management<br></br>
        5. 	Project Communications Management<br></br>
        6. 	Project Risk Management<br></br>
        7. 	Project Procurement / Contract Management<br></br>
        8. 	Project Stakeholder Management<br></br>
        9. 	Project Integration management<br></br>
        10.  Project Scope Management<br></br>`,
  },
  {
    title: "Project management Team consists of:",
    content: `1. Project Managers<br></br>
        2. 	Site Engineers<br></br>
        3. 	Risk Evaluator<br></br>
        4. 	Quality analyst<br></br>
        5. 	Quality Control<br></br>
        6. 	Quantity Surveyor<br></br>
        7. 	Billing Engineer<br></br>
        8. 	Health and Safety Team<br></br>
        9. 	Procurement managers<br></br>
        10.  Project Team<br></br>
        11.  Site supervisor<br></br>`,
  },
  {
    title: "Pre-construction Stage:",
    content: `1. Analysing Client’s requirements<br></br>
        2. 	To identify and suggest consultants/designers for specialized requirements.<br></br>
        3. 	Prepare the drawings as per Client’s requirement (2D, 3D, Structural, electrical, plumbing, Staircase, Lintel Chajja, etc).<br></br> 
        4. 	Coordination with Architect and other design consultants for their inputs and finalising the drawings.<br></br>
        5. 	Checking & verification of designer’s submissions.<br></br>
        6. 	Brief the given drawings in terms of functionality, cost, time, quality and safety.<br></br>
        7. 	Develop project control systems – Project manager, Procurement manager, Site engineers, QS, QC, Health and Safety team, Billing Engineer, Site supervisor, Labour team (all in all).<br></br>
        8. 	Finalization of project organization chart.<br></br>
        9. 	Establishment of project communication and reporting system - SOP.<br></br>
        10.  Preparation of work breakdown structure – Scheduling, workflow.<br></br>
        11.  Preparation of Project Master Schedule with baseline.<br></br>
        12.  Lead project meetings as necessary for review of progress.<br></br>
        13. Monitoring the statutory approvals process by follow-ups with liaison consultants and reporting the progress.<br></br>
        14.  Conducting Pre-bid meetings and feedback for completeness of tender specifications and technical parameters.<br></br>
        15.  Comparative statements & techno-commercial evaluation reports.<br></br>
        16.  Submitting Weekly and Monthly progress reports.<br></br>`,
  },
  {
    title: "Construction Stage:",
    content: `1. Full time supervision of all construction works / activities for the project during execution.<br></br>
        2. 	Organize approval and to contractor’s drawings, product data sheets, samples breakdown structure<br></br>
        3. 	Monitoring the progress of work with the Master construction schedule.<br></br>
        4. 	Prior flagging of anticipated bottlenecks and analysis of its reasons.<br></br>
        5. 	Day to day correspondences including contractual issues.<br></br>
        6. 	Change order management for design changes and extra items.<br></br>
        7. 	Prepare QA/QC plan and Method Statement.<br></br>
        8. Quality assurance and control to ensure conformance to drawings and specifications.<br></br>
        9.  Establish an EHS plan (Environment, Health and Safety).<br></br>
        10.  Issue GFC drawings to respective contractors and keep updated record issues.<br></br>
        11.  Scrutinize and check working drawings received from Architects /designers.<br></br>
        12.  Organize Progress review meetings on a weekly basis.<br></br>
        13.  Collect, review and maintain all the records of contractors’ daily progress reports.<br></br>
        14. Milestone linking to individual package delivery timelines, set points briefing & acceptance.<br></br>
        15.  Progress balancing as per requirements through work scope shuffling.<br></br>
        16.  Progress communication & running catch up plans for delays.<br></br>
        17.  Less turnaround time through design communication in soft forms.<br></br>
        18.  Identification & attention of snags through process.<br></br>`,
  },
  {
    title: "Post-Construction Stage:",
    content: `1. Advice about probable date of Substantial Completion.<br></br>
        2. 	Preparing & addressing the schedule of defects / punch lists. <br></br>     
        3. 	Provide assistance in Testing and commissioning of the facility.<br></br>
        4. 	Collection and integration of various manuals, commissioning & test certificates.<br></br>
        5. 	Reconciliation and Certification of Final bills of contractors, suppliers, vendors and consultants.<br></br>
        6. 	Preparation of project close-out report including learning.<br></br>
        7. 	Collate and verify all As-built drawings.<br></br>
        8. 	Addressing any queries during defects liability period.<br></br>
        9. 	Coordination with the Contractors to rectify the defects during the defects liability period.<br></br>`,
  },
  {
    title: "Timeline Optimization",
    content: `<b>Design Phase</b><br></br>
        1. 	Finalization of Building Elevation and sign off with concept.<br></br>
        2. 	Addendums of Tenant Improvement finalization in early design stage & sign off on concept & details.<br></br>
        3. 	Incorporation of statutory requirements in design phase.<br></br>
        4. 	Addition of Mezzanine structural works or any other scope to be fulfilled.<br></br>
        5. 	Linking Building Schedule, BOQ to Design delivery schedule.<br></br>
        6. 	Finalization of Power, water, all government permissions requirements of End user.<br></br>
         
            <b>Procurement Phase</b><br></br>
        1. 	Planning and jotting the company, grades of Cement, steel, tiles, plumbing and electrical as per the civil, Structural, Electrical, plumbing drawings as per package to concept finalization.<br></br>
        2. 	Linking Procurement schedule to building deliverables.<br></br>
        3. 	Untimely processing per lead delivery of long lead items viz. Dock leveller, Fire door, HT Cables, etc.<br></br>
        4. 	Soft copy approvals – Reduction in Hard copies turnaround time.<br></br>
        5. 	Cost control during all stages of design and design development.<br></br>
        6. 	Preparation of procurement plan.<br></br>
        7. 	Review of technical specifications and Bill of Quantities (BOQ).<br></br>
         
            <b>Construction Phase</b><br></br>
        1. 	Execution of parallel activities wherever possible.<br></br>
        2. 	Better planning and ensuring of all the availability of resources like material, labour, etc on site..<br></br>
        3. 	Assuring all the finalisation and signing of approvals, QS/Qc statement on the previous day.<br></br>
        4. 	Ensuring there are no changes in drawing as per site condition, if there is to any then  resolving it on the previous day.<br></br>`,
  },
];

const Pmc = ({ showInfo, onClose }) => {
  const [active, setActive] = useState("");
  const {pmcs} =  useSelector(state=>state.categoryData)
  const handleClick = () => {
    console.log("clicked");
    setActive(active === "" ? "active" : "");
  };

  return (
    <Modal open={showInfo} onClose={onClose} title="PMC">
      <div className="pmc-container">
        <Helmet>
          <meta
            name="description"
            content="Get your house construction project managed by The Better Co. Completely from End to  End management of real estate construction projects"
          />
          <title>Project Management Consultants in Real Estate</title>
          <meta
            name="Keywords"
            content="House Construction Management, Construction Project Management, Project Management Company"
          />
        </Helmet>
        {pmcs&&pmcs.map((item, index) => (
          <ListAccordian
            active={active}
            handleClick={handleClick}
            key={index}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
    </Modal>
  );
};

export default Pmc;
