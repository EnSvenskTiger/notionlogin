import React from 'react';
import tigercomputer from './images/assets/tigercomputer.jpg';

function Image() {
  return (
    <div>
      <img src={tigercomputer} alt="a tiger sitting at a computer" />
      <footer>
        <p id="copyright">
          &copy; 2022 Teamtiger
        </p>
      </footer>
    </div>

      );
}

export default Image;
