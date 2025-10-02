import { statusesContent } from "./SideBarStatusCard.constants";
import {
  CardContent,
  CardWrapper,
  Content,
  IconWrapper,
  InfoIcon,
  Title,
} from "./SideBarStatusCard.style";
import { Info } from 'lucide-react'; // Lucide icon

const SideBarStatusCard = ({ status, folder_nbr_inprogress, share_offres }) => {
  const { title, content, color } = statusesContent[status] || {
    title: "Unknown Status",
    content: "Unknown status.",
    color: "#000", // default black color
  };

  return (
  <CardWrapper>
    <IconWrapper>
      <CardContent>
        <Title>
        <Info style={{ color: 'red' }} />
         {"   "} {title} {folder_nbr_inprogress}.
        </Title>
        <Content>
          {content} {folder_nbr_inprogress}.
        </Content>
      </CardContent>
    </IconWrapper>
  </CardWrapper>
  );
};

export default SideBarStatusCard;
