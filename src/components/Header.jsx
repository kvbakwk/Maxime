import "../styles/header.css";

const Header = () => {
  return (
    <div className="header">
      <main>
        <div className="logo">
          Goodie
          <div className="container">
            <span id="dynamic-txt">Codes|</span>
          </div>
        </div>
        <div className="quote print">Koszty i wykresy dla firmy.</div>
      </main>
      <div className="colorBar"></div>
    </div>
  );
};

export default Header;
