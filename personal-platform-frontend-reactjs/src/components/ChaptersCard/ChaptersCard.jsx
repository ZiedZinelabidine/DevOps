import { ChevronDown, ChevronUp } from "lucide-react"; // Import Lucide icons
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { getTitleVideo, getURL } from "../../redux/api/uploads/uploadSlice";

const ContainerCard = styled.div`
  background: #f9f9f9; /* Light background for the container */
  border-radius: 12px; /* More rounded corners */
  padding: 20px;
  margin: 20px;
  width: 500px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); /* Softer shadow */

  &:hover {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2); /* Intensify shadow on hover */
  }
`;

const CardContainer = styled.div`
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* Softer shadow */
  background: #fff; /* White background for each card */

`;

const ChapterHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 10px 5px;

  &:hover {
    background-color: #e0e7ff; /* Light blue background on hover */
    border-radius: 8px; /* Rounded corners */
  }
`;

const ChapterTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: bold;
  color: #333;
`;

const ArrowButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem; /* Larger arrow icons */
  cursor: pointer;
  outline: none;

  &:hover {
    color: #007bff; /* Color change on hover */
  }
`;

const ModuleList = styled.div`
  padding-left: 15px;
  display: ${(props) => (props.expanded ? "block" : "none")};
`;

const ModuleItem = styled.button`
  display: flex;
  width: 270px;
  align-items: center;
  padding: 10px;
  color: ${(props) => (props.completed ? "#666" : "#000")};
  border: none;
  background: ${(props) =>
    props.selected ? "#d3f3ff" : "none"}; /* Background color if selected */
  border-radius: 5px; /* Rounded corners */

  &:hover {
    background: rgba(0, 123, 255, 0.1); /* Light blue background on hover */
    color: #007bff; /* Change text color on hover */
  }
`;

const StyleVideo = styled.div`
  font-size: 14px;
  font-weight: 700;
  font-family: Inter, sans-serif;
`;

const StyleVideoTitle = styled.div`
  font-size: 14px;
  padding-left: 10px;
  color: var(--Base-Base-Black, rgba(32, 33, 36, 1));
`;

const ChaptersCard = (props) => {
  const dispatch = useDispatch();
  const [expandedModule, setExpandedModule] = useState(null);
  const [selectedModule, setSelectedModule] = useState(null);
  const [selectedSubmodule, setSelectedSubmodule] = useState(null); // State for selected submodule
  const [modules, setModules] = useState({});

  const chapters = props.data?.chapters || {};
  const length = Object.keys(chapters).length;

  const toggleChapter = async (chapterId) => {
    setExpandedModule(expandedModule === chapterId ? null : chapterId);
    props.setChapter(chapters[chapterId]);
    let pathSupport;

    if (props.data.type === "APPLICATION") {
      pathSupport = `products/applications/${props.data.id}/chapters/${chapterId}/support/`;
    } else {
      pathSupport = `products/videos_trainings/${props.data.id}/chapters/${chapterId}/support/`;
    }

    const urlSupport = await dispatch(
      getURL({
        location: pathSupport,
      })
    ); // Use unwrap() for handling errors more easily
    if (urlSupport?.Contents && urlSupport.Contents.length > 0) {
      props.setSupport(
        `${process.env.REACT_APP_CDN_ITGALAXY}/${urlSupport.Contents[0].Key}`
      );
    } else {
      console.error("No Support found in this chapter.");
    }
  };

  const videoSelected = (module) => {
    if(module.Key) {

    setSelectedModule(module.Key); // Set the selected main module
    setSelectedSubmodule(null); // Deselect any submodule when a new main module is selected
    props.setVideoDisplayUrl(
      `${process.env.REACT_APP_CDN_ITGALAXY}/${module.Key}`
    );     
   } else {

    setSelectedModule(module); // Set the selected main module
    setSelectedSubmodule(null); // Deselect any submodule when a new main module is selected
    props.setVideoDisplayUrl(null); 
   }
  };

  const submoduleSelected = (submodule) => {
    setSelectedSubmodule(submodule.Key); // Set the selected submodule
    props.setVideoDisplayUrl(
      `${process.env.REACT_APP_CDN_ITGALAXY}/${submodule.Key}`
    );
  };

  useEffect(() => {
    const fetchModules = async () => {
      const newModules = {};
      for (const chapterId of Object.keys(chapters)) {
        try {
          const chapterModules = await setUpModules(chapterId);
          newModules[chapterId] = await Promise.all(
            chapterModules.map(async (obj, index) => {
              try {
                const tags = await getTitleVideo(obj.Key);
                const title = tags || `Videos ${index}`;
                props.setTitleModule(title);
                return {
                  ...obj,
                  Title: title,
                  Submodules: await fetchSubmodules(obj.Key),
                }; // Fetch submodules
              } catch (err) {
                console.error(`Error fetching tags for ${obj.Key}:`, err);
                return { ...obj, Title: `Videos ${index}`, Submodules: [] }; // Default to empty array
              }
            })
          );
        } catch (error) {
          console.error(
            `Error setting up modules for chapter ${chapterId}:`,
            error
          );
        }
      }
      setModules(newModules);
    };

    if (length > 0) {
      fetchModules();
    }
  }, [chapters, dispatch, length]);

  const setUpModules = async (chapterId) => {
    let pathVideos;

    if (props.data.type === "APPLICATION") {
      pathVideos = `products/applications/${props.data?.id}/chapters/${chapterId}/videos/`;
    } else {
      pathVideos = `products/videos_trainings/${props.data?.id}/chapters/${chapterId}/videos/`;
    }
    try {
      const listModules = await dispatch(getURL({ location: pathVideos }));
      return listModules.Contents || [];
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  };

  const fetchSubmodules = async (moduleKey) => {
    // Assume a function to fetch submodules using moduleKey
    let pathSubmodules;
    if (props.data.type === "APPLICATION") {
      pathSubmodules = `products/applications/${props.data?.id}/modules/${moduleKey}/submodules/`;
    } else {
      pathSubmodules = `products/videos_trainings/${props.data?.id}/modules/${moduleKey}/submodules/`;
    }

    try {
      const response = await dispatch(getURL({ location: pathSubmodules }));
      return response.Contents || [];
    } catch (error) {
      console.error(`Error fetching submodules for ${moduleKey}:`, error);
      return [];
    }
  };

  return (
    <ContainerCard>
      {length === 0 ? (
        <p>No chapters available</p>
      ) : (
        Object.keys(chapters).map((chapterId) => {
          const chapter = chapters[chapterId];

          return (
            <CardContainer key={chapterId || 1}>
              <ChapterHeader onClick={() => toggleChapter(chapterId)}>
                <div>
                  <ChapterTitle>
                    {chapter.title || "Untitled Chapter"}
                  </ChapterTitle>
                </div>
                <ArrowButton>
                  {expandedModule === chapterId ? (
                    <ChevronUp />
                  ) : (
                    <ChevronDown />
                  )}
                </ArrowButton>
              </ChapterHeader>

              <ModuleList expanded={expandedModule === chapterId}>
                {modules[chapterId] && modules[chapterId].length > 0 ? (
                  modules[chapterId].map((module) => (
                    <div key={module.Key}>
                      <ModuleItem
                        onClick={() => videoSelected(module)}
                        selected={selectedModule === module.Key} // Check if the module is selected
                      >
                        <StyleVideo> Video : </StyleVideo>{" "}
                        <StyleVideoTitle> {module.Title} </StyleVideoTitle>
                      </ModuleItem>
                    </div>
                  ))
                ) : (
                  <ModuleItem
                  onClick={() => videoSelected(chapterId)}
                   selected={selectedModule === chapterId} // Check if the module is selected
                 >  Module {chapterId} </ModuleItem>
                )}
              </ModuleList>
            </CardContainer>
          );
        })
      )}
    </ContainerCard>
  );
};

export default ChaptersCard;
