function BoxTitle() {
  return (
    <div className="pattern-list-box">
      <div className="pattern-list-box-top">
        <div className="pattern-list-box-top-text">
          <span>01</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="2"
            viewBox="0 0 27 2"
            fill="none"
          >
            <path d="M0 1H27" stroke="#616161" />
          </svg>
          <span>BedRoom</span>
        </div>
        <p>Inner Peace</p>
      </div>
      <div className="pattern-list-box-arrow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M21 12H3M21 12L15 6M21 12L15 18"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default BoxTitle;
