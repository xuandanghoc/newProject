function PatternItem(props) {
  const { bgPattern } = props;
  return (
    <img src={bgPattern}
      className="pattern-item-product"
      alt="img"
    ></img>
  );
}

export default PatternItem;
