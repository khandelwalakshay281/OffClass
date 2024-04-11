import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { BrowserRouter as Router, Route} from "react-router-dom";

const AboutUs = () => {
  return (
    <div>
      
      <div style={{ padding: '20px' }}>
        <h1 style={{ color: 'white', fontSize: '2em', marginBottom: '20px', fontWeight:'bold' }}>About Us</h1>
        <p style={{ color: 'white', marginTop: '20px', marginBottom: '20px', marginLeft: '10px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit magna sit amet nunc tincidunt, nec
          vehicula enim vehicula. Maecenas ultrices eros ut purus viverra, vel rhoncus odio pharetra. Vivamus
          sollicitudin mi ut mi scelerisque, vel varius nisi tempor. Sed vel neque sem. In hac habitasse platea dictumst.
          Ut consequat libero sit amet lectus luctus, eu scelerisque purus faucibus. Aenean nec diam eget leo accumsan
          condimentum. Sed eget eros nec risus dignissim dapibus nec at libero. Nam dictum vehicula ligula, ut blandit
          tortor lacinia nec. Integer eget nunc pharetra, aliquam dolor a, placerat est. Vestibulum tincidunt fringilla
          magna id lobortis.
        </p>
        <p style={{ color: 'white', marginTop: '20px', marginBottom: '20px', marginLeft: '10px' }}>
          Proin bibendum massa nec aliquet iaculis. Sed nec nulla vehicula, cursus ante nec, pellentesque lorem. Nullam
          ut consectetur metus. Aenean fermentum neque vel eros mattis, nec lacinia ex ultricies. Proin tincidunt elit
          sed dui tristique, et varius libero tincidunt. Integer ut libero pharetra, vestibulum metus vitae, molestie
          velit. Aenean consectetur orci nec tortor condimentum rhoncus. Maecenas maximus lorem sit amet nunc posuere,
          nec feugiat risus vehicula. Vestibulum suscipit accumsan mauris, vel rhoncus mauris rutrum a.
        </p>
      </div>
      
    </div>
  );
};

export default AboutUs;
