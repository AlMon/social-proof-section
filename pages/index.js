import Head from 'next/head'
import ReviewSingle from '../components/ReviewSingle'

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
          <div className='container'>
            <div className='grid grid-cols-2'>
              <div>
                <h1>10,000+ of our users love our products.</h1>
                <p className=''>
                  We only provide great products combined with excellent
                  customer service. See what our satisfied customers are saying
                  about our services.
                </p>
              </div>

              <div>
                <ReviewSingle stars={5} publication='Reviews' />
                <ReviewSingle stars={5} publication='Report Guru' />
                <ReviewSingle stars={5} publication='BestTech' />
              </div>
            </div>
          </div>
        </div>

        {/* <p>
           Rated 5 Stars in Report Guru Rated 5 Stars in
          BestTech
        </p>

        <p>
          Colton Smith Verified Buyer "We needed the same printed design as the
          one we had ordered a week prior. Not only did they find the original
          order, but we also received it in time. Excellent!"
        </p>

        <p>
          Irene Roberts Verified Buyer "Customer service is always excellent and
          very quick turn around. Completely delighted with the simplicity of
          the purchase and the speed of delivery."
        </p>

        <p>
          Anne Wallace Verified Buyer "Put an order with this company and can
          only praise them for the very high standard. Will definitely use them
          again and recommend them to everyone!"
        </p> */}
      </main>
    </div>
  )
}
