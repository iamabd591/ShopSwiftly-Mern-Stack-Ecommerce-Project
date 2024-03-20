const banner = ({ id, image, title }) => (
  <div className="banner-main" key={id}>
    <div className="banner-image">
      <img src={image} alt={title} />
    </div>
  </div>
);
export default banner;
