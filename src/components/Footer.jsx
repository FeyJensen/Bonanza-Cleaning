function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>&copy; {year} Bonanza Cleaning. All rights reserved.</p>
        <p>Licensed &amp; Insured | Serving the greater metro area</p>
      </div>
    </footer>
  )
}

export default Footer
