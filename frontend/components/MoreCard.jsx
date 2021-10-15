import Image from "next/image";
import Link from "next/link";

const MoreCard = ({ imgSrc, title, description, linkUrl }) => {
  return (
    <div
      style={{
        background:
          " linear-gradient(95.41deg, rgba(255, 255, 255, 0.49) 8.67%, rgba(255, 255, 255, 0.21) 90.91%)",
        boxShadow: " 4px 4px 10px rgba(0, 0, 0, 0.15)",
      }}
      className="flex flex-row justify-between h-[150px] px-6 rounded-2xl"
    >
      <div className="flex flex-row items-center">
        <Image src={imgSrc} />
        <div className="flex flex-col justify-center ml-8">
          <div className="text-3xl">{title}</div>
          <div>{description}</div>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <Link href={linkUrl}>
          <a>
            <button className="border-2 border-black rounded-full text-2xl px-12 py-2">
              ไปต่อ
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default MoreCard;
