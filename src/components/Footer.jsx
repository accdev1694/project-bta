import Contact from "./Contact";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 flex justify-between h-12 bg-white items-center px-[10%] font-abel rounded">
        {/* Copyright */}
      <p>&copy; 2025 Project BTA. All rights reserved.</p>

      {/* Footer Logo */}
      <Contact
        href="#"
        src="/bta-logo-light.png"
        alt="Project BTA Logo"
        className="w-24"
      />

      {/* Social Media Links */}
      <div className="flex justify-center gap-6">
        <Contact
          href="https://www.facebook.com/share/1MLFweY9ZP/"
          src="/images/facebook.png"
          alt="Facebook Logo"
          className="w-4"
        />
        <Contact
          href="https://www.instagram.com/projectbta_?igsh=cHpoODZiOW12MTVy"
          src="/images/instagram.png"
          alt="Instagram Logo"
          className="w-4"
        />
        <Contact
          href="https://x.com/ProjectBta?t=HBuuqyki-9am-goReDEwzw&s=09"
          src="/images/twitter.png"
          alt="Twitter Logo"
          className="w-4"
        />
        <Contact
          href={null}
          src="/images/linkedin.png"
          alt="Linkedin Logo"
          className="w-4"
        />
      </div>
    </footer>
  );
};

export default Footer;
