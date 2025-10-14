export default function MenuItem({ name, description, price, image, extras }) {
  return (
    <div className="bg-white rounded-2xl shadow p-4 flex flex-col items-center text-center hover:scale-105 transition-transform">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-xl mb-4" />
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="text-gray-600 mb-2">{description}</p>
      <p className="font-semibold text-red-500 mb-2">${price} MXN</p>
      {extras && extras.length > 0 && (
        <p className="text-gray-500 text-sm">Extras: {extras.join(", ")}</p>
      )}
    </div>
  );
}