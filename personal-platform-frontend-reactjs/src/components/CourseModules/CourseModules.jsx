// CourseModules.jsx
import { Folder, Video } from "lucide-react"; // Import icons from lucide-react
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { getURL } from "../../redux/api/uploads/uploadSlice";
import DisplayRawHtml from "components/DisplayRawHtml/DisplayRawHtml";

const Container = styled.div`
  max-width: 100%;
  margin-top: 30px;
  padding: 20px;
`;

const Header = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #222;
  margin-bottom: 10px;
  margin-top: 30px;
`;

// Card for modules
const ModulesCard = styled.div`
  border: 1px solid black;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 5px 5px 0px 0px black;
  background: white;
`;

const ModuleRow = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  margin-bottom: 10px;
  padding: 15px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #f9f9f9;
  }
`;

const DescriptionRow = styled.div`
  border: 1px solid black;
  border-radius: 8px;
  margin-bottom: 10px;
  padding: 15px;
  cursor: pointer;
  transition: background 0.2s;
  background: white;
  box-shadow: 5px 5px 0px 0px black;


`;

const ModuleTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 16px;
`;

const ModuleSubTitle = styled.p`
  font-size: 14px;
  color: #999;
  margin-top: 5px;
`;

const ModuleDetails = styled.div`
  font-size: 14px;
  color: #555;
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid #e0e0e0;
  line-height: 1.5;
`;

const DetailsText = styled.p`
  margin-bottom: 10px;
`;

const IncludedItems = styled.div`
  display: flex;
  gap: 10px;
  font-size: 14px;
  margin-top: 10px;
`;

const IconText = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: #666;
`;

const Arrow = styled.span`
  font-size: 10px;
  color: black;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 30px;
`;

const CourseModules = (props) => {
  const [expandedModule, setExpandedModule] = useState(null);
  const [moduleCounts, setModuleCounts] = useState({});
  const dispatch = useDispatch();

  // Function to toggle the expanded module
  const toggleModule = (moduleId) => {
    setExpandedModule(expandedModule === moduleId ? null : moduleId);
  };

  // Ensure props.data is defined before accessing its properties
  const chapters = props.data?.chapters || {}; // Fallback to an empty object
  const length = Object.keys(chapters).length;

  useEffect(() => {
    const fetchCounts = async () => {
      const counts = {};
      // Iterating through chapter IDs to get counts
      for (const chapterId of Object.keys(chapters)) {
        counts[chapterId] = await calculeVideosAndSupportChapter(chapterId);
      }
      setModuleCounts(counts);
    };

    if (length > 0) {
      fetchCounts();
    }
  }, [chapters, dispatch, length]); // Use length to control effect execution

  const calculeVideosAndSupportChapter = async (chapterId) => {
    let pathVideos;
    let pathSupports;

    if (props.data.type === "VIDEOSTRAINING") {
      pathVideos = `products/videos_trainings/${props.data?.id}/chapters/${chapterId}/videos/`;
      pathSupports = `products/videos_trainings/${props.data?.id}/chapters/${chapterId}/support/`;
    } else {
      pathVideos = `products/applications/${props.data?.id}/chapters/${chapterId}/videos/`;
      pathSupports = `products/applications/${props.data?.id}/chapters/${chapterId}/support/`;
    }

    try {
      const listPathVideos = await dispatch(getURL({ location: pathVideos }));
      const listPathSupports = await dispatch(
        getURL({ location: pathSupports })
      );

      return {
        countVideos: listPathVideos?.Contents?.length || 0,
        countSupports: listPathSupports?.Contents?.length || 0,
      };
    } catch (error) {
      console.error("Error fetching data:", error);
      return { countVideos: 0, countSupports: 0 };
    }
  };

  const truncateString = (str, num) => {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + "..."; // Add "..." if truncated
  };

  return (
    <Container>
      <Header>Description: </Header>
      <DescriptionRow>
      <DisplayRawHtml content={props.data?.description} />
      </DescriptionRow>
      <Header>There are {length} modules in this course</Header>
      <ModulesCard>
        {Object.keys(chapters).map((chapterId) => {
          const module = chapters[chapterId];

          return (
            <ModuleRow key={chapterId} onClick={() => toggleModule(chapterId)}>
              <ModuleTitle>
                {module.title}
                <Arrow>
                  Module Details {expandedModule === chapterId ? "∧" : "∨"}
                </Arrow>
              </ModuleTitle>
              {expandedModule === chapterId && (
                <> 
              <ModuleSubTitle>
              <DisplayRawHtml content={truncateString(module.description, 50)} />
              </ModuleSubTitle>
        
                <ModuleDetails>
                  <IncludedItems>
                    <IconText>
                      <Video size={16} />{" "}
                      {moduleCounts[chapterId]?.countVideos ?? 0} videos
                    </IconText>
                    <IconText>
                      <Folder size={16} />{" "}
                      {moduleCounts[chapterId]?.countSupports ?? 0} support
                    </IconText>
                  </IncludedItems>
                </ModuleDetails>
                </>
              )}
            </ModuleRow>
          );
        })}
      </ModulesCard>
    </Container>
  );
};

export default CourseModules;
