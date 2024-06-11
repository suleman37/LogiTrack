<div className="review-slider">
<Slider {...settings}>
  {reviews.map((review, index) => (
    <div key={index} className="review-card">
      <h3>{review.name}</h3>
      <p>{review.review}</p>
      <div className="rating">
        {"⭐".repeat(review.rating)}
        {"✰".repeat(5 - review.rating)}
      </div>
    </div>
  ))}
</Slider>
</div>
,
<button className="btn-1" onClick={() => setModal(true)}><b>Give Your Opiniion</b></button>