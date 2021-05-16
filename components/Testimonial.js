function Testimonial(props) {
  return (
    <div>
      <img src={props.avatar} alt={props.name} />
      <h3>{props.name}</h3>
      <h3>Verified Buyer</h3>
      <p>"{props.quote}"</p>
    </div>
  )
}

export default Testimonial
