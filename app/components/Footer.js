export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-sm sm:text-base">
          © 2025 Ma-To Shoyu Ramen. Todos los derechos reservados.
        </p>
        <div className="mt-3 flex justify-center space-x-6 text-sm sm:text-base">
          <a href="https://www.facebook.com" target="_blank" className="hover:text-red-500">
            Facebook
          </a>
          <a href="https://www.instagram.com" target="_blank" className="hover:text-red-500">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
