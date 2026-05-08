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
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
  },
  {
    subtitle: "MINIMAL LINE",
    title: "Nordic Dining Set.",
    description: "Bright oak tones designed for everyday family moments.",
    price: "$799.00",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
  },
  {
    subtitle: "URBAN STUDIO",
    title: "Accent Sofa Collection.",
    description: "Soft textures with clean silhouettes for modern interiors.",
    price: "$649.00",
    image:
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=1200&q=80",
  },
];

