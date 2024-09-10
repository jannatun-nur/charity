import icon1 from '../../public/image/Non Profit Organisation.png'
import icon2 from '../../public/image/Handshake Heart.png'
import icon3 from '../../public/image/Donate.png'
import icon4 from '../../public/image/Welfare.png'

const Feature = () => {
    return (
        <div>
            <div className='bg-[#399866] grid grid-cols-1 lg:grid-cols-4 gap-6 pl-24 lg:pl-28 py-10 rounded-2xl'>
                <section>
                    <img src={icon1} />
                    <p className='text-amber-400 text-4xl ml-3'>563</p>
                    <p className='text-white font-thin'>Project Completed</p>
                </section>

                <section>
                    <img src={icon2} />
                    <p className='text-amber-400 text-4xl ml-3'>425</p>
                    <p className='text-white font-thin'>Trusted Partner</p>
                </section>


                <section>
                    <img src={icon3} />
                    <p className='text-amber-400 text-4xl ml-3'>978</p>
                    <p className='text-white font-thin'>Money Donated</p>
                </section>

                <section>
                    <img src={icon4} />
                    <p className='text-amber-400 text-4xl ml-5'>32</p>
                    <p className='text-white font-thin'>Active Volenteerr</p>
                </section>

            </div>
        </div>
    );
};

export default Feature;