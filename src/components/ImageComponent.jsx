//creiamo un componente con i superpoteri ,un componente a CLASSE
import { Component } from "react";

//preso dalla libreria

class Image extends Component {
  render() {
    return (
      <div>
        <img src={this.props.urlImage} alt={this.props.nameImage} />
      </div>
    );
  }
}
export default Image;
