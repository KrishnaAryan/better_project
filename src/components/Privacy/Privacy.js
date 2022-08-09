import React, {useState} from 'react';
import './Privacy.css';
import ListAccordian from "../Categories/assets/Accordian";

const privacyContent = [
    {
        title:"Personal Information",
        content:`User hereinafter referred to as (“You”) and Tech Better Services Pvt. Ltd. hereinafter referred to as (“The Better Co”). The Better Co is owner and operator of www.thebetterco.online (“the Website”), The Better Co’s Mobile Application for on demand home services (“The Better Co App”), collectively, including all content provided by The Better Co through The Better Co App and the Website “The Better Co”<br></br>
        You have the right not to supply personally identifiable information. If You intend to view this The Better Co Service and/or share your data with The Better Co Service, it is solely at your own volition, risk and after reading and confirming it to this Privacy Policy.<br></br>
        At the time of using The Better Co Service you will share certain Personal Information with The Better Co, The Better Co respects your Personal Information. Such Personal Information may include your personal identifiable information such as your name, address, mobile number, your email ids, your age, IP address, payment details and any other personal information which You may share in connection with the services.<br></br>
        When you use The Better Co’s Service through The Better Co App, The Better Co may use Your mobile device’s ID (the unique identification assigned to a mobile device by the manufacturer). The Better Co does this to store your preferences and track your use of The Better Co App. You understand and agree that The Better Co has every right to share such ID with third parties for its promotions, analysis, etc.<br></br>
        In case You participate in any other schemes, facilities, services provided by The Better Co Service, You will be required to provide additional information. Such information will also remain in The Better Co’s database and will be considered as your Personal Information and will be treated as confidential.`
    },
    {
        title:"Protection of Information and Storage",
        content:`The Better Co needs to caution You that The Better Co Service could be vulnerable to hacking, virus attacks and your personal data may be at risk. The Better Co takes all the necessary and reasonable caution to protect The Better Co Service and data.`
    },
    {
        title:"Cookies",
        content:`The Better Co may place a text file called a “cookie” in the browser files of your Mobile. The cookie itself does not contain Personal Information although it will enable The Better Co Service to relate your use of The Better Co Service to information that you have specifically and knowingly provided to The Better Co.<br></br>
        The Cookies enables The Better Co to remember your choices and some data field contents which you would be required to fill-in.`
    },
    {
        title:"Advertisements",
        content:`On The Better Co App and/or the Website, The Better Co might post advertisements provided by Advertisers. These Advertisers might set mobile device id on their Apps. The Better Co is not responsible for any of these Advertisers. You on your entire risk and volition are advised to deal with the Advertisers if You intend to. By allowing such advertisements The Better Co do not recommend or market or warranty the Advertisers, quality, commitment, deliverables, genuineness and Advertisers commitment to protect your Personal Information.`
    },
    {
        title:"Pre-Approved Sharing of Personal Information",
        content:`The Better Co endeavours to protect your Personal Information. The Better Co may share your Personal Information with its sponsors, service providers and its business partners. Personal Information could be shared so that you may receive newsletters, offers, information about new products, services, launches, facilities, schemes and other information, if applicable. The information collected from You and other users may be analysed in different manners. The Better Co may also share such analysis with its service providers and its business partners.<br></br>
        In case The Better Co is required to disclose your Personal Information in order to assist the Government Authority or in adherence to the Court or to protect the interest of The Better Co Service and/or any particular user(s), The Better Co will disclose it without obtaining prior permission from you.
        `
    },
    {
        title:"Links to Other Websites",
        content:`This Privacy Policy applies only to the Services. The Services may contain links to other web sites not operated or controlled by The Better Co (the “Third Party Sites”). The policies and procedures we described here do not apply to the Third Party Sites. The links from the Services do not imply that The Better Co endorses or has reviewed the Third Party Sites. We suggest contacting those sites directly for information on their privacy policies.
        `
    },
    {
        title:"Changes to Privacy Policy",
        content:`The Better Co have and continue to have the right to modify, change or update Privacy Policy at any time. However, The Better Co will use your Personal Information in a manner consistent with Privacy Policy at the time you shared Personal Information. You are encouraged to check The Better Co Service often to get updated about Privacy Policy. You acknowledge that by virtue of usage of The Better Co Service you provide acceptance of the Privacy Policy. All questions to be addressed to bd@thebetterco.online.<br></br>
 
        Please read the following policy to understand the rework and refund policy of Tech Better Services Pvt Ltd. (“The Better Co”). Acceptance of this Policy is mandatory prior to booking any service from The Better Co.
        
        `
    },
    {
        title:"Cancellation after Booking Agreement",
        content:`A total of 2% of the Project Value will be deducted by The Better Co and the rest of the amount will be refunded to the Client.
        `
    },
    {
        title:"Cancellation after Main Agreement",
        content:`If the Client has paid the Running Bills Amount in advance then the work will be completed for the same.
        If the Client has not paid the Running Bills Amount for the work done at the site, the customer has to pay the balance Running Bills Amount for the work already executed.<br></br>
        If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at:<br></br>
        The Better Co <br></br>
        51, 18th Main Road, 22nd Cross Road,<br></br>
        Sector 3, HSR Layout, Bangalore,<br></br>
        Karnataka – 560102<br></br>
        bd@thebetterco.online<br></br>
        `
    },
]

const Privacy = () => {

    const [active, setActive] = useState("");

    const handleClick = () => {
      console.log('clicked')
      setActive(active === "" ? "active" : "");
    }

    return (
        <div className="privacy-container">
                <div className="text-wrap">
                {privacyContent.map((item, index) => (
                    <ListAccordian
                    active={active}
                    handleClick={handleClick}
                      key={index}
                      title={item.title}
                      content={item.content}
                    />
                  ))}
                </div>
        </div>
    )
}

export default Privacy
