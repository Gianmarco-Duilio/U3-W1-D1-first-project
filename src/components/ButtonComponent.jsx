const Button = function (props) {
  return (
    <div>
      {/* dinamico */}
      <button className="goat">{props.nameButton}</button>
    </div>
  );
};
//per renderlo disponibile
export default Button;
