import React from "react";

function Footer() {
  return (
    <footer className="mt-auto py-3 bg-dark text-light">
      <div className="container text-center">
        <span className="text-muted">&copy; {new Date().getFullYear()} Website. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;
