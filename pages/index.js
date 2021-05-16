import Head from 'next/head'
import Review from '../components/Review'
import Testimonial from '../components/Testimonial'

export default function Home() {
  return (
    <div className='max-w-full'>
      <Head>
        <title>Social Proof Section</title>
        <link rel='icon' href='/favicon.png' />
      </Head>

      <img
        src='/bg-pattern-top-desktop.svg'
        alt='Background pattern top dekstop'
        className='absolute left-0 top-0 z-0'
      />
      <img
        src='/bg-pattern-bottom-desktop.svg'
        alt='Background pattern bottom dekstop'
        className='absolute right-0 bottom-0 z-0'
      />

      <main className='min-h-screen w-full text-center lg:text-left'>
        <div className='z-10 lg:px-40 lg:mt-32 mt-20'>
          <div className='grid grid-cols-1 lg:grid-cols-2 px-7 lg:px-0'>
            <div className='max-w-md'>
              <h1 className='text-[#502050] lg:text-[46px] lg:leading-[3.2rem] text-3xl font-bold'>
                10,000+ of our users love our products.
              </h1>
              <p className='text-[#937b92] text-sm lg:mt-3 mt-5 font-medium leading-6'>
                We only provide great products combined with excellent customer
                service. See what our satisfied customers are saying about our
                services.
              </p>
            </div>

            <div className='lg:px-10'>
              <Review stars={5} publication='Reviews' className='review' />
              <Review
                stars={5}
                publication='Report Guru'
                className='review lg:ml-10'
              />
              <Review
                stars={5}
                publication='BestTech'
                className='review lg:ml-20'
              />
            </div>
          </div>

          <div className='lg:flex my-14'>
            <Testimonial
              avatar='/image-colton.jpg'
              name='Colton Smith'
              quote='We needed the same printed design as the
          one we had ordered a week prior. Not only did they find the original
          order, but we also received it in time. Excellent!'
              className='testimonial lg:pr-10'
            />
            <Testimonial
              avatar='/image-irene.jpg'
              name='Irene Roberts'
              quote='Customer service is always excellent and
                very quick turn around. Completely delighted with the simplicity of
                the purchase and the speed of delivery.'
              className='testimonial lg:mt-9 lg:mx-7'
            />
            <Testimonial
              avatar='/image-anne.jpg'
              name='Anne Wallace'
              quote='Put an order with this company and can
                only praise them for the very high standard. Will definitely use them
                again and recommend them to everyone!'
              className='testimonial lg:mt-14'
            />
          </div>
        </div>
      </main>
    </div>
  )
}
