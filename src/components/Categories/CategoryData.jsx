import { FaMale, FaFemale } from "react-icons/fa";
import { MdElectricBolt, MdSportsEsports, MdToys } from "react-icons/md";
import { RiHomeWifiFill, RiHealthBookLine } from "react-icons/ri";
import { AiFillMedicineBox } from "react-icons/ai";
import { MdOutlinePets } from "react-icons/md";

export const CategoryData = [
  {
    title: "Woman’s Fashion",
    icon: <FaFemale />,
    subcategories: ["Dresses", "Tops", "Jeans", "Skirts"],
  },
  {
    title: "Men’s Fashion",
    icon: <FaMale />,
    subcategories: ["Shirts", "Trousers", "Jackets"],
  },
  {
    title: "Electronics",
    icon: <MdElectricBolt />,
    subcategories: ["Mobiles", "Laptops", "Headphones"],
  },
  {
    title: "Home & Lifestyle",
    icon: <RiHomeWifiFill />,
    subcategories: ["Furniture", "Kitchen", "Decor"],
  },
  {
    title: "Medicine",
    icon: <AiFillMedicineBox />,
  },
  {
    title: "Sports",
    icon: <MdSportsEsports />,
    subcategories: ["Football", "Basketball", "Tennis"],
  },
  {
    title: "Toys",
    icon: <MdToys />,
    subcategories: ["Action Figures", "Board Games", "Puzzles"],
  },
  {
    title: "Pets",
    icon: <MdOutlinePets />,
    subcategories: ["Dogs", "Cats", "Birds"],
  },
  {
    title: "Health & Beauty",
    icon: <RiHealthBookLine />,
    subcategories: ["Skincare", "Makeup", "Fragrance"],
  },
];
export const slides = [
  {
    subtitle: "CAPPELLINI",
    title: "Wooden Lounge Chairs.",
    description: "Timeless curves, handcrafted wood and museum-level comfort.",
    price: "$999.00",
    image:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    subtitle: "MINIMAL LINE",
    title: "Nordic Dining Set.",
    description: "Bright oak tones designed for everyday family moments.",
    price: "$799.00",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    subtitle: "URBAN STUDIO",
    title: "Accent Sofa Collection.",
    description: "Soft textures with clean silhouettes for modern interiors.",
    price: "$649.00",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
