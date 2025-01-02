export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white px-8 lg:px-44 py-8">
        <div className="flex flex-col lg:flex-row gap-6 justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Sniffing Out Stories. All rights reserved.</p>
          <div className="flex gap-4">
            <button className="hover:underline">Privacy Policy</button>
            <button className="hover:underline">Contact Us</button>
          </div>
        </div>
      </footer>
    );
}
