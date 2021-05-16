function Review(props) {
  return (
    <div className={props.className}>
      <span>
        {Array(props.stars)
          .fill()
          .map((v, i) => (
            <img
              src='/icon-star.svg'
              alt='star'
              className='inline mx-1'
              key={i}
            />
          ))}
      </span>
      <span className='text-[#502050] text-[13px] mt-[7px] ml-6'>
        Rated {props.stars} Stars in {props.publication}
      </span>
    </div>
  )
}

export default Review
