const Footer = () => {
    return (
      <footer className="flex flex-wrap items-center justify-between gap-5 pb-3 border-t c-space pt-7 border-black-300">
        <div className="flex gap-2 text-white-500">
          <p>Terms & Conditions</p>
          <p>|</p>
          <p>Privacy Policy</p>
        </div>
  
        <div className="flex gap-3">
          <div className="social-icon">
          <a href="https://github.com/Lerato-Lee" target="_blank" rel="noopener noreferrer" aria-label="Github">
            <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
            </a>
          </div>
          <div className="social-icon">
          <a href="https://www.linkedin.com/in/lerato-m-a63a7b25a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <img src="/assets/linkedin.svg" alt="LinkedIn" className="w-1/2 h-2/2" />
            </a>
          </div>
          <div className="social-icon">
          <a href="https://www.instagram.com/love_grootboom/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
            </a>
          </div>
        </div>
  
        <p className="text-white-500">© 2024 Lerato Mthimkhulu. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;