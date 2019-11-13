import React from 'react';

class ImageCard extends React.Component {
    render() {

        return (
            <div className="card">
                <div className="content">
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

export default ImageCard;