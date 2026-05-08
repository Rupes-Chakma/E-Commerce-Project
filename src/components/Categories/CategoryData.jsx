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
