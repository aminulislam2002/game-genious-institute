import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer mt-20 p-10 bg-black text-white">
      <div>
        <img src="logo" className="w-40 h-14" alt="" />
        <div className="text-center font-semibold text-2xl text-purple-800" id="typewriter"></div>
      </div>
      <div>
        <span className="footer-title">Products</span>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
      <div>
        <span className="footer-title">Connect Us</span>
        <div className="flex gap-5">
          <a className="link link-hover">
            <FaFacebook className="w-8 h-8"></FaFacebook>
          </a>
          <a className="link link-hover">
            <FaYoutube className="w-8 h-8"></FaYoutube>
          </a>
          <a className="link link-hover">
            <FaInstagram className="w-8 h-8"></FaInstagram>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
