function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>&copy; {year} Bonanza Cleaning. All rights reserved.</p>
        <p>Licensed &amp; Insured | Serving the greater metro area</p>
        <a
          href="https://www.yelp.com/biz/bonanzas-cleaning-service-clackamas"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__yelp"
        >
          Find us on Yelp
        </a>
      </div>
    </footer>
  )
}

export default Footer
