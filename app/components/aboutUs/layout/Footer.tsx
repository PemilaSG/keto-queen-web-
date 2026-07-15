export default function Footer() {
  return (
    <footer className="bg-green-900 text-white pt-16 pb-8 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand Column */}
        <div>
          <img src="/logo-white.png" alt="Keto Queen" className="h-16 mb-4" />
          <p className="text-sm text-gray-300">Fueling Better Lives with the Power of Keto.</p>
        </div>

        {/* Links Columns */}
        {[
          { title: "QUICK LINKS", links: ["Home", "Shop", "Categories", "Offers", "Contact Us"] },
          { title: "CUSTOMER SERVICE", links: ["My Account", "Track Order", "Returns & Refunds", "Shipping Policy", "FAQ"] },
          { title: "OUR POLICIES", links: ["Privacy Policy", "Terms & Conditions", "Refund Policy", "Cookie Policy"] },
        ].map((section) => (
          <div key={section.title}>
            <h4 className="font-bold mb-4">{section.title}</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              {section.links.map((link) => <li key={link} className="cursor-pointer hover:text-white">{link}</li>)}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="container mx-auto mt-12 pt-8 border-t border-green-800 flex justify-between text-sm text-gray-400">
        <p>© 2025 Keto Queen. All Rights Reserved.</p>
        <div className="flex gap-4">
          {/* Add Social & Payment Icons Here */}
          <span>Visa | Mastercard | PayPal | Apple Pay</span>
        </div>
      </div>
    </footer>
  );
}