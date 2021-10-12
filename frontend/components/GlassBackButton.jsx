import Image from "next/image";
import BackOutlineIcon from "../public/icons/back_outline.svg";
const GlassBackButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="glass border-2 border-white rounded-2xl flex justify-center items-center p-1 active:scale-90 transition-all"
    >
      <Image src={BackOutlineIcon} width={28} height={28} alt="back" />
    </button>
  );
};
export default GlassBackButton;
