import React from 'react';

class CityCard extends React.Component {
  onDelete = () => {
    console.log(this.props);
    //this.props.onDelete(this.props.id);
  }

  render() {
    return (
        <div className="card">
            <div className="content">
              <i className="right floated close icon" onClick={this.onDelete}></i>
              <div className="header">{this.props.name}</div>
              <div className="meta">Friend</div>
              <div className="description">
                Elliot Fu is a film-maker from New York.
              </div>
            </div>
        </div>
    );
  }
}

export default CityCard;