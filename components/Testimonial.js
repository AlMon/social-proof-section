function Testimonial(props) {
  return (
    <div className={props.className}>
      <div className='grid grid-cols-9'>
        <img
          src={props.avatar}
          alt={props.name}
          className='rounded-full h-10 col-span-2'
        />
        <h3 className='col-span-7 text-[13px] font-bold pt-[2px]'>
          {props.name} <br />{' '}
          <span className='font-medium text-[#ee68a4]'>Verified Buyer</span>
        </h3>
      </div>
      <p className='text-[12.5px] text-[#f7f2f7] mt-7 leading-[22px]'>
        " {props.quote} "
      </p>
    </div>
  )
}

export default Testimonial
