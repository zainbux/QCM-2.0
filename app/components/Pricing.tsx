'use client'
import PriceCard from './PriceCard';

const Pricing = () => {
  const plans = [
    {
      index : 1,
      name: "Basic",
      price: 60,
      currency: "$",
      featured:false,
      features: [
        "Exterior hand wash and dry",
        "wheel and rim cleaning and shine",
        "Window clean and shine",
        "Tire dressing"
      ]
    },
    {
      index : 2,
      name: "Premium",
      price: 150,
      currency: "$",
      featured:true,
      features: [
        "Everything in Basic +", 
        "Car waxing", 
        "Shampoo and clean carpets, seats, floor mats", 
        "Dash and centre console cleaning",
        "Door panels detailed", 
        "Full interior vacuumed & steam cleaned", 
        "Clean cracks and crevices", 
      ]
    },
    {
      index : 3,
      name: "Luxury",
      price: 200,
      currency: "$",
      featured:false,
      features: [
        "Everything in Premium +",
        "Deep engine cleaning",
        "Window ceramic coating",
        "Vehicle underside and exhaust tip cleaning"
      ]
    }
  
  ]
  
  return (
    <div className='bg-primary items-center pb-6'>
    
      <div className='text-center py-8'>
        <h1 className='text-blue-100 text-6xl font-poppins font-semibold mt-20'>
          Pricing
        </h1>
      </div>

      <div className='justify-center md:flex gap-12 md:gap-0'>
        <div className='justify-center md:flex gap-12 md:gap-0'> 
          {plans.map(plan => (
            <PriceCard {...plan} key={plan.index} />
          ))}
        </div>
      </div>

    </div>
  );
};

export default Pricing;
