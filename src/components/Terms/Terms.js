import React, {useState} from 'react'
import './Terms.css'
import ListAccordian from "../Categories/assets/Accordian";

const termsContent = [
    {
        title:"Interiors , Construction & Renovations",
        content:`<li>Tech Better Services Private Limited (“The Better Co”) shall act as a project supervisor for the Project and provide services through the architect, contractors, etc. A project partner nominated by The Better Co shall be responsible for provision of Construction/Renovation/Interiors (“CRI”) services.</li>
        <li>Project is subject to approval from the relevant governmental authorities. You are responsible to obtain all necessary government permits, licenses and approvals. The Better Co may assist you in obtaining these approvals.</li>
        <li>Once you have selected the CRI package, you acknowledge and agree that your information and details may be shared with the relevant service providers for provision of services.</li>
        <li>
            Goods and Service tax (as per Government Regulations), and any other taxes as applicable, will apply on the quoted prices for the services.
            Any payment that has once been remitted to The Better Co is non-refundable.
        </li>
        <li>The Better Co reserves the right to modify the payment terms, project cost, timelines and handover date to accommodate any changes by you to the project documents, including specifications or material quality after sign off.</li>
        <li>The Better Co shall provide free home maintenance service for a period of one year from the handover date for all construction services. Free Home Maintenance includes one home inspection visit every three months and resolving any minor issues on services already provided including with plumbing, electrical, carpentry, etc. Services specifically exclude any repairs due to physical damage caused by you or on work undertaken by you after handover of the project.</li>
        <li>The Better Co shall also provide a ten year warranty on structure, ten year warranty on underground sump and one year warranty on seepage on all constructions services and six months general warranty on other CRI services rendered: (i) ten year warranty on structure covers concrete and wall work in the event of structure collapse due to poor workmanship by The Better Co and the service providers, (ii) one year warranty on seepage covers water leakage due to poor workmanship by The Better Co and the service providers, (iii) ten year warranty on underground sump covers water leakage issues due to poor workmanship by The Better Co and the service providers, (iv) six months general warranty covers damage due to poor workmanship by The Better Co and the service providers; warranty includes electrical lines (circuit issues, burnt wires), plumbing lines (CP fittings, water pipes, plumbing fixtures, carpenter lines (doors, windows, hinges). Warranties cannot be claimed for any damage not caused due to services provided by The Better Co, natural calamities, physical damage by you, seepage due to water pipe leakage or any breakage in the building, or due to work undertaken by you after handover of the project.</li>
        <li>You shall receive the warranties as provided by the original manufacturers or vendors on all fixtures, fittings and equipment. The Better Co will co-ordinate with the OEMs in the first six months after handover of the project.</li>
        <li>OTHER THAN AS EXPRESSLY AGREED TO AND TO THE FULLEST EXTENT PERMISSIBLE UNDER APPLICABLE LAW, The Better Co DISCLAIMS ALL LIABILITIES, WARRANTIES, EXPRESS OR IMPLIED.</li>
        <li>
            The Better Co shall not be liable for any incidental, special or consequential damages that result from the services. The Better Co specifically disclaims any liability with respect to any notices or claims received from governmental/regulatory authorities with respect to the construction at the Site Property. Notwithstanding the above, the total liability of The Better Co, if any, for any reason whatsoever, shall not exceed the commission received by it.
            You shall ensure a safe and secure environment for The Better Co and project partner, their agents and representatives and other service providers, to provide the CRI services and provide adequate space for storage of materials.
        </li>
        <li>You explicitly agree that you shall not solicit any CRI services from any service provider directly.</li>
        <li>The Better Co will not be liable for any CRI service carried out without our knowledge by mutual agreement between you and the Service Provider.</li>
        <li>The Better Co reserves the right to make changes to any part of these terms and conditions at any point in the future.</li>
        `
    },
    {
        title:"Acceptance of Terms",
        content:`<li>These Terms of Use set forth legally binding terms for your use of our Platforms. By using, visit, accessing our platforms, you agree to be bound by this Terms of Use, whether you are a “Visitor” (which means that you simply browse our Platforms) or you are a “Subscriber” (which means that you have registered with The Better Co as a user). If you do not accept the Terms of Use, you should leave the Website and/or The Better Co App and discontinue use of the Service immediately.</li>
        <li>We may modify these Terms from time to time, and such modification shall be effective upon its posting on our platforms. You agree to be bound by any modification to this Agreement when you use our Website and The Better Co App after any such modification is posted; it is therefore important that you review the Terms of Use regularly.</li>
        `
    },
    {
        title:"General Registration Requirements",
        content:`<li>In consideration of your use of our platforms, you represent that you are of legal age (18 years and above) to form a binding contract and are not a person barred from receiving services under any law in force in India or other applicable jurisdiction. You also agree to:</li>
        <li>provide true, accurate, current and complete information about yourself while registering on our Website and The Better Co App to avail the Services.</li>
        <li>maintain and promptly update your Registration Data to keep it true, accurate, current and complete.</li>
        <li>If you provide any information that is untrue, inaccurate, not current or incomplete, or we have reasonable grounds to suspect that such information is untrue, inaccurate, not current or incomplete, We reserve the right to suspend or terminate your account and refuse any and all current or future use of our Website and The Better Co App(or any portion thereof) at any time. The Better Co will not be liable for any act or omission arising from the inaccurate information provided by You to Us.</li>
        <li>You may access our Website and The Better Co App as available:</li>
        <li>for your information and personal use;</li>
        <li>as intended through the normal functionality of The Better Co.</li>
        <li>You will be required to enter a valid phone number while registering on our Website and The Better Co App as a subscriber. By registering your phone number with us, you consent to be contacted by us via phone calls and/or SMS notifications, in case of any subscription/service updates. If we do so, each communication we send you will contain instructions permitting you to “opt-out” of receiving future communications. In addition, if at any time you wish not to receive any future communications or you wish to have your name deleted from our mailing lists, please contact us as indicated below. If you are registered with the DND National registry you may not receive any promotional messages from us.</li>
        `
    },
    {
        title:"Subscriber Account, Password and Security",
        content:`<li>If you register on The Better Co, you will be required to choose a password and user name. You are responsible for maintaining the confidentiality of your password and account information, and are fully responsible for all activities that occur under your password or account. You agree to:</li>
        <li>
            immediately notify The Better Co of any unauthorized use of your password or account or any other breach of security, and
            ensure that you log out from your account at the end of each session;
        </li>
        <li>never use any other Subscriber’s account without prior authorization from The Better Co</li>
        <li>The Better Co will not be liable for any loss or damage arising from your failure to comply with this Agreement.</li>
        `
    },
    {
        title:"User Information",
        content:`<li>The Better Co’s unique business model provides You with location based service providers in a short span of time. To facilitate this, You hereby authorise The Better Co to use the location based information provided by any of the telecommunication companies when You use the mobile phone to make a booking. The location based information will be used only to facilitate and improve services for You.</li>
        <li>If You use the Website or the App, You agree that information about Your use of the The Better Co Website and The Better Co App through Your mobile telecommunication device may be communicated to us, and we may obtain information about Your mobile carrier, Your mobile device, or Your physical location. By accessing the The Better Co App or Website using a mobile telecommunication device, You represent that to the extent You import any of Your The Better Co data to Your mobile telecommunication device that You have authority to share the transferred data with Your mobile carrier or other access provider. In the event You change or deactivate Your mobile account, You must promptly update Your The Better Co account information to ensure that Your messages are not sent to the person that acquires Your old number and failure to do so is Your responsibility. You acknowledge that You are responsible for all charges and necessary permissions related to accessing the The Better Co App through Your mobile access provider. Therefore, You should check with Your provider to find out if our Website and The Better Co App are available and the terms for these services for Your specific mobile devices.</li>
        <li>The Better Co reserves the right to collect user data including name, contact information and other details to facilitate the Services or use of its The Better Co App to avail Services.</li>
        <li>
            Compilation of user accounts and user accounts bearing contact number and e-mail addresses are owned by The Better Co.
            In the case where the system is unable to establish unique identity of the user against a valid mobile number or e-mail address, the account shall be indefinitely suspended. The Better Co reserves the full discretion to suspend a user’s account in the above event and does not have the liability to share any account information whatsoever.
        </li>
        <li>We may record your telephone calls to our call centres or to Us.</li>
        `
    },
    {
        title:"Termination or Suspension",
        content:`<;i>You agree that The Better Co may at any time terminate your access to the The Better Co App or Website or restrict or suspend your access to all or any part of the Website or the App at any time, for any or no reason, with or without prior notice, and without liability.</;i>
        <;i>The Better Co shall be entitled at any time without giving any reason to terminate the booking of services done by You.</;i>
        `
    },
    {
        title:"Preservation / Disclosure",
        content:`<li>You acknowledge, consent and agree that The Better Co may access, preserve and disclose your account information and content if required to do so by law or in a good faith belief that such access, preservation or disclosure is reasonably necessary to:</li>
        <li>comply with legal process nationally or internationally;</li>
        <li>enforce these Terms of Use;</li>
        <li>respond to claims that any Content violates the rights of third parties;</li>
        <li>respond to your requests for customer service;</li>
       <li>
            protect the rights, property or personal safety of The Better Co, its subscribers and the public; or
            pursuant to the terms of the Privacy Policy.
       </li>
        `
    },
    {
        title:"Security Components",
        content:`<li>You acknowledge, consent and agree that The Better Co may access, preserve and disclose your account information and content if required to do so by law or in a good faith belief that such access, preservation or disclosure is reasonably necessary to:</li>
        <li>comply with legal process nationally or internationally;</li>
        <li>enforce these Terms of Use;</li>
        <li>respond to claims that any Content violates the rights of third parties;</li>
        <li>respond to your requests for customer service;</li>
        <li>
            protect the rights, property or personal safety of The Better Co, its subscribers and the public; or
            pursuant to the terms of the Privacy Policy.
        </li>
        `
    },
    {
        title:"The Better Co and Third Parties",
        content:`<li>You may be able to access links to third party sites from the The Better Co App or Website. Third parties could be advertisers, affiliate partners, strategic partners, or others. The Better Co expressly disclaims all responsibilities for such third party links. We do not warrant the products or offerings of, any of these businesses or individuals, or the accuracy of the content of their websites. The Better Co does not assume any responsibility or liability for the actions, product, and content of any such Third Party websites. Before you use any Third Party websites, you should review the applicable terms of use and policies for such Websites. If you decide to access any such linked Website, you do so at your own risk.</li>
        `
    },
    {
        title:"Compliance with Applicable Law",
        content:`<li>You agree that You shall not use the The Better Co App and Website in order to host, display, upload, modify, publish, transmit, update, distribute, share, store or destroy material, including without limitation The Better Co Content:</li>
        <li>in violation of any applicable law or regulation,</li>
        <li>in a manner that will infringe the copyright, trademark, trade secret or other intellectual property or proprietary rights of others or violate the privacy, publicity or other personal rights of others,</li>
        <li>that belongs to another person and to which the user does not have any right to,</li>
        <li>
            that is grossly harmful, harassing, blasphemous, defamatory, obscene, pornographic, pedophilic, libelous, invasive of another’s privacy, threatening, abusive or hateful or racially, ethnically objectionable, disparaging, relating encouraging money laundering or gambling or otherwise unlawful in any manner whatsoever,
            harm minors in any way,
        </li>
        <li>
            deceives or misleads the addressee about the origin of such message or communicates any information which is grossly offensive or menacing in nature,
            impersonate another person or entity,
        </li>
        <li>contains software viruses or any other computer code, files or programs designed to interrupt, destroy or limit the functionality of The Better Co’s computer systems or site or The Better Co’s users, customer’s computer systems or site,</li>
        <li>threatens the unity, integrity, defense, security or sovereignty of India, friendly relations with foreign states or of public order or causes incitement to the commission of any cognizable offence or prevents investigation of any offence or insulting any other nation.</li>
        `
    },
    {
        title:"Privacy Policy",
        content:`<li>We view protection of your privacy as a very important principle. We understand clearly that you and your personal information is one of our most important assets. Please review how we use and store your personal information here</li>`
    },
    {
        title:"Intellectual Property Rights",
        content:`<li>The Better Co App and the Website are owned by The Better Co. The Better Co is the sole owner of the App, Website and all software created to provide You with the Services. The Better Co provides You with a single limited license to download, use and access the App/Website on Your mobile telephone devices for the limited purpose of using the Services. The license is specifically personal, non-transferable, and non-exclusive. All content on the App or the Website, which is including, but not limited to, designs, text, graphics, images, video, information, logos, button icons, software, audio files and any other content (“Content”) are the exclusive and sole property of The Better Co. You may not copy, reproduce or use such Content without due attribution of ownership to The Better Co. All icons and logos are trademarks of and proprietary to The Better Co. The unauthorized copying, modification, use or publication of these marks is strictly prohibited.</li>
        <li>All Content is the exclusive copyright of The Better Co or its licensors, except the Third Party Content and link to third party website. Systematic retrieval of The Better Co Content to create or compile, directly or indirectly, a collection, compilation, database or directory (whether through robots, spiders, automatic devices or manual processes) without written permission from The Better Co is prohibited. In addition, use of the Content for any purpose not expressly permitted by The Better Co in this Agreement is prohibited and may invite legal action.</li>
        `
    },
    {
        title:"Disclaimer of Warranties and Liability",
        content:`<li>All the material and products on our Website and The Better Co App, (including but not limited to software) and services, included on or otherwise made available to you through our Website and The Better Co App are provided on “as is” and “as available” basis without any representation or warranties, express or implied except otherwise specified in writing. Without prejudice to the forgoing paragraph, The Better Co does not warrant that:</li>
        <li>This Website will be constantly available, or available at all; or</li>
        <li>The information on this Website is complete, true, accurate or non-misleading;</li>
        <li>That the Services will meet the customer’s requirements.</li>
        <li>The Better Co will not be liable to you in any way or in relation to the Contents of, or use of, or otherwise in connection with its Website and The Better Co App. The Better Co does not warrant that this Website or the The Better Co App; information, Content, materials, product or services included on or otherwise made available to you through its Website and The Better Co App; the servers; or electronic communication sent from us are free of viruses or other harmful components.</li>
        <li>
            The Better Co shall not be liable for any conduct or behaviour or actions of service providers. However, The Better Co encourages you to notify us of any complaints that you may have against the service provider who has provided You with services on behalf of The Better Co.
            You agree and acknowledge that the use of the Services offered by The Better Co is at Your sole risk and that The Better Co disclaims all representations and warranties of any kind, whether express or implied as to condition, suitability, quality, merchantability and fitness for any purposes are excluded to the fullest extent permitted by law.
        </li>
        <li>The Better Co will not be liable for any damages of any kind arising from the use of the Service offered by the Company, including, but not limited to direct, indirect, incidental, punitive, and consequential damages.</li>
        <li>SUBJECT TO APPLICABLE LAWS, IN NO EVENT WILL The Better Co OR ITS AFFILIATES’ AGGREGATE LIABILITY ARISING FROM OR RELATED TO THE SERVICES EXCEED THE PAYMENTS ACTUALLY RECEIVED AND RETAINED BY The Better Co FROM YOU FOR THE PAID SERVICES LIABILITY FOR ANY AND ALL CAUSES OF ACTION BROUGHT BY YOU OR YOUR AGENTS.</li>
        `
    },
    {
        title:"Indemnity",
        content:`<li>You agree to defend, indemnify and hold harmless The Better Co, its subsidiaries, affiliates, subcontractors, officers, directors, employees, consultants, representatives and agents, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorneys’ fees and costs) arising from:</li>
        <li>your use of and access to our Platforms;</li>
        <li>your violation of any term of this Agreement;</li>
        <li>your violation of any third party right, including without limitation any copyright, property, or privacy right.</li>
        `
    },
    {
        title:"Miscellaneous",
        content:`<li>These Terms of Use and any rights and licenses granted hereunder, may not be transferred or assigned by you, but may be assigned by The Better Co without restriction.</li>
        <li>These Terms of Use together with any other legal notices published by The Better Co on its Platforms, shall constitute the entire agreement between you and The Better Co concerning its Website and The Better Co App and governs your use of our Website and The Better Co App and Service, superseding any prior agreements between you and The Better Co with respect to our Website and The Better Co App and Service.</li>
        <li>
            The failure of The Better Co to exercise or enforce any right or provision of these Terms of Use shall not constitute a waiver of such right or provision. If any provision of these Terms of Use is found by a court of competent jurisdiction to be invalid, the parties nevertheless agree that the court should endeavour to give effect to the parties’ intentions as reflected in the provision, and the other provisions of these Terms of Use remain in full force and effect
            These Terms of Use shall be governed by the laws of India, without respect to its conflict of laws principles. Any claim or dispute between you and The Better Co that arises in whole or in part from our Website and The Better Co App shall be decided exclusively by a court of competent jurisdiction located in Bangalore.
        </li>
        `
    },
    {
        title:"With Whom Your Personal Information Will Be Shared?",
        content:`<li>When you order services through us, we must provide certain of your Personal Information to the third party or vendors to enable the successful fulfilment of your service.</li>
        <li>However, we do not sell or rent individual customer names or other Personal Information to third parties except sharing of such information with our alliance partners or vendors such as AppVirality, Leanplum who are engaged by us for providing various promotional and other benefits to our customers from time to time basis their booking history with us.</li>
        <li>We use non – personally identifiable information in aggregate form to build higher quality, more useful online services by performing statistical analysis of the collective characteristics and behaviour of our customers and visitors, and by measuring demographics and interests regarding specific areas of the website, mobile site and mobile app. We may provide anonymous statistical information based on this data to suppliers, advertisers, affiliates and other current and potential Business partners. We may also use such aggregate data to inform these third parties as to the number of people who have seen and clicked on links to their websites.</li>
        `
    },
    {
        title:"What Safeguards We Have In Place To Protect Your Personal Information?",
        content:`<li>All payments on the website, mobile site and mobile app are secured.</li>
        <li>This means all Personal Information you provide is transmitted using SSL (Secure Socket Layer) encryption. SSL is a proven coding system that lets your browser automatically encrypt, or scramble, data before you send it to us.</li>
        `
    },
    {
        title:"Grievance Officer",
        content:`<li>If You have any complaint or grievance to report, please write to the Grievance Officer at experience@thebetterco.online. Contact number :- 8447299780 Grievance Officer name : Madhu Pareek</li>`
    },
]

const Terms = () => {

    const [active, setActive] = useState("");

    const handleClick = () => {
      console.log('clicked')
      setActive(active === "" ? "active" : "");
    }

    return (
        <div className="terms-container">
            <div className="terms-wrap">
            <h3 className="terms-text">
                Welcome to The Better Co. You may use our services through our website www.thebetterco.online (“Website”) or our mobile application (“The Better Co App”). Our Website and The Better Co App have been created to provide information about our company and services to the visitors and user of services, whether accessible to you via web, mobile App or other platform (our services, together with the Site, are the “Services”)<br></br><br></br>
                For the purpose of these Terms of Use, the term ‘The Better Co’ or ‘Us’ or ‘We’ refers to Tech Better Services Private Limited. The term ‘You’ refers to the user or viewer of our Website and/or The Better Co App.<br></br><br></br>
                When You use any of the Services provided by Us, including but not limited to, Construction, Renovation and Interiors, you will be subject to the rules, guidelines, policies, terms, and conditions applicable to such service, and they shall be deemed to be incorporated into this Terms of Use and shall be considered as part and parcel of these Terms of Use. As long as you comply with these Terms of Use, We grant you a personal, non-exclusive, non-transferable, limited privilege to enter and use our platforms. In the event of a conflict or inconsistency between any provision of the terms and conditions mentioned herein with those of the particular service, the provisions of the terms and conditions applicable to such specific Services shall prevail.<br></br>
            </h3>
            {termsContent.map((item, index) => (
                <div className="terms-content">
                    <ListAccordian
                    active={active}
                    handleClick={handleClick}
                    key={index}
                    title={item.title}
                    content={item.content}
                    />
                </div>
              ))}
            </div>
        </div>
    )
}

export default Terms
