import { statusesContent } from "./SideBarStatusCard.constants";
import {
  CardContent,
  CardWrapper,
  Content,
  IconWrapper,
  InfoIcon,
  Title,
} from "./SideBarStatusCardProfil.style";
import { Info } from 'lucide-react'; // Lucide icon

const SideBarStatusCardProfil = ({ status, folder_nbr_inprogress, share_offres }) => {
  const { title, content, color } = statusesContent[status] || {
    title: "Unknown Status",
    content: "Unknown status.",
    color: "#000", // default black color
  };

  return (

        <Title>
        <Info style={{ color: 'red' }} />
         {"   "} {title}
         <Content>
        </Content>
        </Title>)

};

export default SideBarStatusCardProfil;
