import React from 'react';
import { File, Image, FileText, Trash } from 'lucide-react'; // Import the icons you need
const iconMap = {
    file: File,
    image: Image,
    fileText: FileText,
    trash: Trash,
};

// Create a component that wraps the Lucide icons
const CustomIcon = ({ icon, size = 24, color = 'currentColor', ...props }) => {

    const IconComponent = iconMap[icon.toLowerCase()];
    if (!IconComponent) {
        console.warn(`Icon "${icon}" does not exist in lucide-react.`);
        return null; // Or return some fallback icon/component
    }

    return (
        <IconComponent 
            width={size} 
            height={size} 
            color={color} 
            {...props} 
        />
    );
};

export default CustomIcon;