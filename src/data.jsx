import { Monitor, Briefcase, Calendar, Globe, Star, CheckCircle, MessageCircle, Building } from "lucide-react";
import DigitalSignage from "../src/assets/images/digital signage.png";
import CommandCenter from "../src/assets/images/Commande Center.png";
import AVAutomation from "../src/assets/images/AV automation.png";
import { 
  MdTouchApp, 
  MdOutlineSecurity, 
  MdSettingsRemote, 
  MdLightbulbOutline, 
  MdEventAvailable, 
  MdTv, 
  MdViewComfy, 
  MdPeopleOutline 
} from "react-icons/md";

export const CardAboutData = [
  {
    icon: Star,
    static: "10+",
    title: "Years of trusted expertise:",
    description: "Our mission is your success.",
  },
  {
    icon: Globe,
    static: "15+",
    title: "Global presence:",
    description: "Serving clients across APAC region.",
  },
  {
    icon: CheckCircle,
    static: "1,000+",
    title: "Successful projects:",
    description: "Delivering results that matter.",
  },
  {
    icon: MessageCircle,
    static: "1,700+",
    title: "Satisfied clients:",
    description: "Built on trust and reliability.",
  },
  {
    icon: Building,
    static: "Multiple",
    title: "Offices across APAC:",
    description: "Seamless, fast communication.",
  },
  {
    icon: Monitor,
    static: "Leading",
    title: "AV-IT integration:",
    description: "Innovating for the future.",
  },
];

// Services data
export const services = [
  { 
    title: "Interactive Touch Interface Solutions", 
    description: "Interactive technology helps to improve collaboration...",
    image: DigitalSignage,
    icon: MdTouchApp,
    iconColor: "#00A39B"
  },
  { 
    title: "Command Centre", 
    description: "Complex command centers require special consideration...",
    image: CommandCenter,
    icon: MdOutlineSecurity,
    iconColor: "#F59E42"
  },
  { 
    title: "AV Automation", 
    description: "Controls of multiple systems working in a room...",
    image: AVAutomation,
    icon: MdSettingsRemote,
    iconColor: "#913880"
  },
  { 
    title: "Intelligent Lighting Control", 
    description: "Automatically change the lighting mode in your room...",
    image: AVAutomation,
    icon: MdLightbulbOutline,
    iconColor: "#FFD600"
  },
  { 
    title: "Chope AI Room Booking", 
    description: "Maximize the use of company space...",
    image: AVAutomation,
    icon: MdEventAvailable,
    iconColor: "#00B8D9"
  },
  { 
    title: "Digital Signage", 
    description: "Digital Signages are used to display digital content...",
    image: DigitalSignage,
    icon: MdTv,
    iconColor: "#3B82F6"
  },
  { 
    title: "Video Wall", 
    description: "A video wall is a special multi-monitor setup...",
    image: DigitalSignage,
    icon: MdViewComfy,
    iconColor: "#F43F5E"
  },
  { 
    title: "Unified Communications and Collaboration", 
    description: "Video conferencing is a live video-based meeting...",
    image: DigitalSignage,
    icon: MdPeopleOutline,
    iconColor: "#10B981"
  }
];
