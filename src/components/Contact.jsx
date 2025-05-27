const Contact = ({ className, href, src, alt }) => {
  return (
    <a href={href} target="_blank">
      <img className={className} src={src} alt={alt} />
    </a>
  );
};

export default Contact;
