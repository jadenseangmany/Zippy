export default function ShopCard({
  name,
  points,
  description,
  imageSrc,
  imageClass = "",
  onClick,
  isPurchased = false,
}: {
  name: string;
  points: number;
  description: string;
  imageSrc: string;
  imageClass?: string;
  onClick?: () => void;
  isPurchased?: boolean;
}) {
  return (
    <div
      onClick={onClick}
      className={`relative rounded-xl shadow-md overflow-hidden bg-white border border-[#B7CEDE] transition hover:scale-[1.01] cursor-pointer`}
    >
      {/* Points Badge */}
      <div
        className="absolute top-2 right-2 px-3 py-1 rounded-full text-sm font-semibold text-black"
        style={{ backgroundColor: '#B7CEDE' }}
      >
        {points} points
      </div>

      {/* Owned Badge */}
      {isPurchased && (
        <div className="absolute top-2 left-2 bg-[#EBDFE1] text-black text-xs font-semibold px-2 py-1 rounded">
          Owned
        </div>
      )}

      {/* Image */}
      <div className="h-32 bg-white flex items-center justify-center overflow-hidden">
        <img
          src={imageSrc}
          alt={name}
          className={`object-cover ${imageClass}`}
        />
      </div>

      {/* Info Section */}
      <div className="p-4 space-y-2" style={{ backgroundColor: '#B7CEDE' }}>
        <p className="text-black font-semibold text-lg">{name}</p>
        <p className="text-black text-lg leading-snug line-clamp-3">{description}</p>

        {/* Visual Button */}
        <div className="flex justify-end">
          <button
            className={`text-sm font-semibold px-4 py-1 rounded-md shadow-sm ${
              isPurchased
                ? 'bg-[#EBDFE1] text-black cursor-default'
                : 'bg-white text-black hover:bg-gray-100'
            }`}
          >
            {isPurchased ? 'Equip' : 'Buy'}
          </button>
        </div>
      </div>
    </div>
  );
}
