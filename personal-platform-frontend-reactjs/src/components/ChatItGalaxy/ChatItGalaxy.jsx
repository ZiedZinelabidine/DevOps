import React, { Suspense, lazy } from 'react'; // Ensure lazy is imported
import { IntlProvider } from "react-intl";
import "./base.css";
import { Spinner } from 'react-bootstrap';

let ItGalaxyChat;

const mode = process.env.REACT_APP_MODE;

if (mode === 'prod') {
//  ItGalaxyChat = require('@Itgalaxy1/itgalaxychat').default;
  ItGalaxyChat = lazy(() => import('@Itgalaxy1/itgalaxychat')); // Use staging version for local
} else if (mode === 'staging') {
  ItGalaxyChat = lazy(() => import('@Itgalaxy1/itgalaxychat-stg')); // Use staging version for local
} else if (mode === 'local') {
  ItGalaxyChat = lazy(() => import('@Itgalaxy1/itgalaxychat-stg')); // Use staging version for local
  } else {
  throw new Error("Invalid REACT_APP_MODE specified."); // Throw an error for invalid mode
}


const ChatItGalaxy = ({
  username,
  channelsList,
  projectId,
  projectType,
  setShowModalDetails,
  setChannelSelected,
  setIds,
  type,
  setLoading,
}) => {
  const language = "en";


  const handeldetails = (channelSelectedData) => {
    // Regular Expressions to capture the respective parts
    const regexId1 =
      /(COMPOSED_FREELANCE|SHARETASK|Contrat|Product|Recruitment|Contactor|AccountingJob)(\d+)/;
    const regexId2 =
      /(proposalentreprise|proposal|appeloffreproposal|soldedproduct|contactedCANDIDAT|recruted|contactedENTREPRISE|contactedRECRUTER|workingFolderCOMPANY|workingFolderREQUEST_COMPANY_CREATION)(\d+)/g;

    // Match projectId based on the first regex
    const id1Match = channelSelectedData.match(regexId1);
    // Match all occurrences for proposalId from the second regex
    const id2Matches = [...channelSelectedData.matchAll(regexId2)];

    // Capture the type and numeric part for projectId
    const extractedType = id1Match ? id1Match[1] : "Not found"; // Type
    const extractedProjectId = id1Match ? id1Match[2] : "Not found"; // Numeric part
    // Get last matched numeric part for proposalId
    const extractedProposalId =
      id2Matches.length > 0
        ? id2Matches[id2Matches.length - 1][2]
        : "Not found"; // Last match

    // Set the extracted values in state
    setIds({
      type: extractedType,
      projectId: extractedProjectId,
      proposalId: extractedProposalId,
    });
    setShowModalDetails(true);
  };

  return (
    <IntlProvider locale={language} textComponent={React.Fragment}>
      {channelsList && channelsList.length > 0 && (
        <Suspense fallback={
          <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            alignItems: "center",
            maxHeight: "97%", // Full viewport height
            backgroundColor: "white", // White background
            textAlign: "center",
            padding: "20px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
          }}
        >
          <div>
            <h2>Loading Chat for this project ...</h2>
          </div>
        </div>




        }>
          <ItGalaxyChat
            username={username}
            setChannelSelected={setChannelSelected}
            channelsList={channelsList}
            projectId={projectId}
            projectType={projectType}
            handeldetails={handeldetails}
            type={type}
            setLoading={setLoading}
          />
        </Suspense>
      )}
    </IntlProvider>
  );
};

export default ChatItGalaxy;
