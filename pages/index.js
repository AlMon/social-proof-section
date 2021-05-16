import Head from 'next/head'
import Review from '../components/Review'
import Testimonial from '../components/Testimonial'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Social Proof Section</title>
        <link rel='icon' href='/favicon.png' />
      </Head>

      <main className='min-h-screen flex justify-center'>
        <img
          src='/bg-pattern-top-desktop.svg'
          alt='Background pattern top dekstop'
          className='absolute left-0 top-0'
        />
        <img
          src='/bg-pattern-bottom-desktop.svg'
          alt='Background pattern bottom dekstop'
          className='absolute right-0 bottom-0'
        />
        <div>
          <div className='container px-24'>
            <div className='grid grid-cols-1 lg:grid-cols-2 pt-32'>
              <div className='max-w-md'>
                <h1 className='text-[#502050] text-[46px] leading-[3.2rem] font-bold'>
                  10,000+ of our users love our products.
                </h1>
                <p className='text-[#937b92] text-sm mt-3 font-medium leading-6'>
                  We only provide great products combined with excellent
                  customer service. See what our satisfied customers are saying
                  about our services.
                </p>
              </div>

              <div className='px-10'>
                <Review stars={5} publication='Reviews' className='review' />
                <Review
                  stars={5}
                  publication='Report Guru'
                  className='review ml-10'
                />
                <Review
                  stars={5}
                  publication='BestTech'
                  className='review ml-20'
                />
              </div>
            </div>

            <div className='flex my-14'>
              <Testimonial
                avatar='/image-colton.jpg'
                name='Colton Smith'
                quote='We needed the same printed design as the
          one we had ordered a week prior. Not only did they find the original
          order, but we also received it in time. Excellent!'
                className='testimonial'
              />
              <Testimonial
                avatar='/image-irene.jpg'
                name='Irene Roberts'
                quote='Customer service is always excellent and
                very quick turn around. Completely delighted with the simplicity of
                the purchase and the speed of delivery.'
                className='testimonial mt-9'
              />
              <Testimonial
                avatar='/image-anne.jpg'
                name='Anne Wallace'
                quote='Put an order with this company and can
                only praise them for the very high standard. Will definitely use them
                again and recommend them to everyone!'
                className='testimonial mt-14'
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
