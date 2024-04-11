import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p style={styles.text}>© 2024 OffClass. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px 0',
    marginTop: '50px',
    textAlign: 'center',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  text: {
    fontSize: '14px',
  },
};

export default Footer;
