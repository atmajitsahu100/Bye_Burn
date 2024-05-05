import React from 'react'
import LOS from './LayersOfSkin.jpg';
import COB from './CauseOfBurn.png';
import BSL from './BurnSeverityLevels.png';
import SC from './Seg_Class.png';
import RN from './RulesOfNine.png';
import RN2 from './RulesOfNine_2.png.jpg';
import Palm from './Palm.png'

const About = () => {
  return (
    <div>
      <div>
        <p className='w-full h-fit text-3xl font-bold text-blue-700 text-center m-5'>Skin Anatomy</p>
        <div className='w-[97%] m-5 px-5 py-2'>
          <p className='text-left text-gray-800 text-xl mb-2'>
            Epidermis: Categorized into five horizontal layers (stratum corneum, stratum lucidum, stratum granulosum, stratum spinosum,
            and stratum Basale. Average thickness of epidermis is 0.1 mm, thickest on palm and feet (1.5mm) Renew itself approximately every 28 days.
          </p>
          <p className='text-left text-gray-800 text-xl mb-2'>
          Dermis: Fibrous network of tissue provides structure and resilience to skin. Thickest of the three layers
          of the skin (1.5 to 4 mm thick). Layer includes blood vessels, sweat gland, hair follicles, sebaceous gland.
          </p>
          <p className='text-left text-gray-800 text-xl'>
          Hypodermis: Deepest section of the skin, fat tissues and cell here store nutrients and energy. The 
          thickness of the subcutis layer varies throughout the body and from person to person.
          </p>
        </div>
      </div>

      <div>
        <p className='w-full h-fit text-3xl font-bold text-blue-700 text-center m-5'>Burn vs Wound</p>
        <div className='w-[97%] m-5 px-5 py-2'>
          <p className='text-left text-gray-800 text-xl mb-2'>
            Wounds are classified on the basis of mode of infliction and causative agent.
          </p>
          <p className='text-left text-gray-800 text-xl mb-2'>
            Dermis: Fibrous network of tissue provides structure and resilience to skin. Thickest of the three layers
            Wound is a class of injury and burn is the sub class of wound cause by hot object/liquid, friction, chemicals, 
            electric shock. Open wounds are like sharp wounds, bite wound, crush wound, burn wound etc.
          </p>
          <p className='text-left text-gray-800 text-xl'>
            Of all the wounds Burn wounds require separate medical super specialist, involve single organ but affect 
            almost all systems of the body, making generalized disorder.
          </p>
        </div>
      </div>

      <div className='flex justify-center'>
        <div className='flex flex-col'>
          <img src={LOS} alt='Layers Of Skin' className='w-[450px] mb-5'  />
          <p className='text-xl text-gray-700'><span className='text-xl font-semibold text-gray-700'>Layers of Skin</span> (https://training.seer.cancer.gov/melanoma/anatomy/layers.html)</p>
        </div>
      </div>

      <div className='w-[97%] m-5 px-5 py-2'>
          <p className='text-left text-gray-800 text-xl mb-2'>
            Burn diagnosis includes Total Body Surface Area (TBSA) estimation, Total Fluid requirement 
            estimation, Burn severity assessment, Burn degree/depth estimation, etc.
          </p>
      </div>

      <div className='w-[97%] m-5 px-5 py-2'>
        <img src={COB} alt='Layers Of Skin' className='w-[98%] h-fit mb-10'  />  
        <img src={BSL} alt='Layers Of Skin' className='w-[98%] h-fit mb-10'  />  
        <img src={SC} alt='Layers Of Skin' className='w-[98%] h-fit'  />  
      </div>
      
      <div className='w-[97%] m-5 px-5 py-2'>
        <p className='w-full h-fit text-3xl font-bold text-blue-700 text-center m-5'>Traditional TBSA Estimation</p>
        <div className='w-[97%] m-5 px-5 py-2'>
          <p className='text-left text-gray-800 text-xl mb-2'>
            The Lund and Browder chart is a tool use in the management of burns for 
            estimating the total body surface area affected. It was created by Dr. Charles Lund, 
            Senior Surgeon at Boston City Hospital, and Dr. Newton Browder, based on their experiences in 
            treating over 300 burn victims injured at the Cocoanut Grove fire in Boston in 1942 [1].
          </p>
          <p className='text-left text-gray-800 mb-2'>
            [1] Hettiaratchy S, Papini R (2004) Initial management of a major burn: II–assessment and 
            resuscitation. BMJ 329:101–103. doi:10.1136/bmj.329.7457.101
          </p>
        </div>
      </div>

      <div className='w-[97%] m-5 px-5 py-2 flex justify-center'>
        <img src={RN} alt='Layers Of Skin' className='w-[50%] h-fit'  /> 
      </div>

      <div className='w-[97%] m-5 px-5 py-2'>
          <p className='text-left text-gray-800 text-xl mb-2'>
            <span className='text-black font-bold'>The Rule of Nines</span> was devised by Pulaski and Tennison in 1947, and published by Alexander 
            Burns Wallace in 1951. Some studies have found that the rule of nines tends to over-estimate 
            total burn area [2].
          </p>
      </div>

      <div className='w-[97%] m-5 px-5 py-2 flex justify-center'>
        <img src={RN2} alt='Layers Of Skin' className='w-[30%]'  /> 
      </div>

      <div className='w-[97%] m-5 px-5 py-2'>
          <p className='text-left text-gray-800 text-xl mb-2'>
            [2] Wachtel TL, Berry CC, et al. (March 2000). "The inter-rater reliability of estimating 
            the size of burns from various burn area chart drawings". Burns. 26 (2): 156–170. doi:10.1016/S0305-4179(99)00047-9.
          </p>
      </div>

      <div className='w-[97%] m-5 px-5 py-2'>
          <p className='text-left text-gray-800 text-xl mb-2'>
            <span className='text-black font-bold'>The Palmar method</span> uses the size of the patient’s hand (palm and fingers)
             to estimate burn size. It is useful for burns having patchy areas [3].
          </p>
      </div>

      <div className='w-[97%] m-5 px-5 py-2 flex justify-center'>
        <img src={Palm} alt='Layers Of Skin' className='w-[30%]'  /> 
      </div>

      <div className='w-[97%] m-5 px-5 py-2'>
          <p className='text-left text-gray-800 text-xl mb-2'>
            [3] Stiles K (2018) Emergency management of burns: part 2. Emergency Nurse. doi: 10.7748/en.2018.e1815
          </p>
      </div>
    </div>
  )
}

export default About
