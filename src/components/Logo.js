import React from 'react'

const Logo = () => {
  return (
    <div
        className="row justify-content-center"
        data-test="logo-component"
    >
      <img
        className="logo img-responsive center-block"
        data-test="logo-component-image"
        src={'../assets/images/logo.png'}
      />
    </div>
  );
}

export default Logo;
