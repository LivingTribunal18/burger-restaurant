import React from 'react';
import PropTypes from 'prop-types';

const Header = props => (
    <header className="top">
      <div className="wrap">
        <div className="header-content">

          <div className="header-rating">
            <div className="header-rating_tag">Rating:</div>
            <div className="header-rating_icon">★★★★★</div>
          </div>

          <div className="header-devider"></div>
          <h1 className="font-effect-fire-animation">{props.title}
          {props.amount}
          </h1>
          <h3>
            <span>
              Fast delivery of Hot
              <span className="sub-header"> #burgers</span>
            </span>
          </h3>
        </div>
      </div>
    </header>
  );

  Header.propTypes = {
    title: PropTypes.string.isRequired
  }

/*class Header extends React.Component{
  render(){
    return(
      <header className="top">
        <div className="wrap">
          <div className="header-content">

            <div className="header-rating">
              <div className="header-rating_tag">Rating:</div>
              <div className="header-rating_icon">★★★★★</div>
            </div>

            <div className="header-devider"></div>
            <h1 className="font-effect-fire-animation">{this.props.title}</h1>
            <h3>
              <span>
                Fast delivery of Hot
                <span className="sub-header"> #burgers</span>
              </span>
            </h3>
          </div>
        </div>
      </header>
    );
  }
}*/

export default Header;