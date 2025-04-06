export default function ShopCard({
    name,
    points,
    description,
    imageSrc,
    imageClass = "",
    onClick
  }: {
    name: string;
    points: number;
    description: string;
    imageSrc: string;
    imageClass?: string;
    onClick?: () => void;
  }) {
    return (
      <div
        onClick={onClick}
        className="relative rounded-xl shadow-md overflow-hidden bg-white border border-[#B7CEDE] cursor-pointer hover:scale-[1.01] transition"
      >
        {/* Points Badge in top-right */}
        <div
          className="absolute top-2 right-2 px-3 py-1 rounded-full text-sm font-semibold text-black"
          style={{ backgroundColor: '#B7CEDE' }}
        >
          {points} points
        </div>
  
        {/* Image area */}
        <div className="h-32 bg-white flex items-center justify-center overflow-hidden">
          <img
            src={imageSrc}
            alt={name}
            className={`object-cover ${imageClass}`}
          />
        </div>
  
        {/* Description area */}
        <div
          className="p-4 space-y-2"
          style={{ backgroundColor: '#B7CEDE' }}
        >
          <p className="text-black font-semibold text-lg text-base">{name}</p>
          <p className="text-black text-lg leading-snug">{description}</p>
  
          {/* Buy button */}
          <div className="flex justify-end">
            <button className="bg-white text-black text-sm font-semibold px-4 py-1 rounded-md shadow-sm hover:bg-gray-100">
              Buy
            </button>
          </div>
        </div>
      </div>
    );
  }
  