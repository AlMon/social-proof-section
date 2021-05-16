function ReviewSingle(props) {
  console.log()

  return (
    <div>
      {Array(props.stars)
        .fill()
        .map((v, i) => (
          <img src='/icon-star.svg' alt='star' style={{ display: 'inline' }} />
        ))}
      Rated {props.stars} Stars in {props.publication}
    </div>
  )
}

export default ReviewSingle
