import React from 'react'
import Group from "/assets/Rectangle 27.png"
import Education from "/assets/Rectangle 23.png"
import Health from "/assets/Rectangle 25.png"
import Skill from "/assets/Rectangle 26.png"
import Confidence from "/assets/Rectangle 24.png"
import Sister from "/assets/Picture.png"
import Pad from "/assets/Pad.png"
import Policy from "/assets/Policy.png"
import Line from "/assets/Line 2.png"
import Button from '../components/Button'


const GirlChild = () => {
  return (
    <div className=''>
      {/* First Section */}
     <div className=''>
        {/* Header 1 */}
      <div className='flex justify-center items-center flex-col p-[100px] sm:px-0 sm:pb-6  gap-[10px]'>
        <h3 className='text-[#336699] font-semibold text-xl capitalize font-montserrat'>GIRL CHILD</h3>
        <h1 className='text-[56px] sm:text-3xl sm:text-center font-extrabold text-[0F172A]'>Girl Child Program</h1>
      </div>

      {/* Image and text */}
      <div className='grid grid-cols-2 sm:grid-cols-1 items-center px-[100px] sm:px-[40px] gap-[67px] '>
        <img className='w-full object-cover' src={Group} alt="Group image" />
        <div className='flex gap-[24px] items-center'>
          <img className='' src={Line} alt="" />
          <p className='text-[18px]'>The Girl Child Program was launched to carry out awareness activities among young girls in rural communities in the Northern part of Nigeria on sanitary hygiene and bring about possible solution to ending period poverty.</p>
        </div>
      </div>
     </div>

     {/* Second Section */}
     <div>
      {/* Header 2 */}
      <div className='flex justify-center items-center flex-col p-[100px] sm:px-0 sm:pb-0 gap-[10px]'>
        <h3 className='text-[#336699] font-semibold text-xl capitalize font-montserrat'>PROBLEM</h3>
        <h1 className='text-[56px] sm:text-3xl font-extrabold text-[0F172A] sm:text-center'>A glimpse into the problem</h1>
      </div>

      {/* Paragraph */}
      <div className='sm:px-[50px] px-[100px] items-center mb-10'>
        <div className='grid grid-cols-2 sm:grid-cols-1 py-10 gap-[91px] sm:gap-8'>
          <p className='bg-[#F9F9F9] rounded-[10px] py-5 px-5 text-[18px]'>The situation of the girl child in the northern part of Nigeria is a toxic situation of disregard, lack of awareness, lack of proper amenities, discrimination, carelessness and utter irresponsibility. The girl child is seen as the lesser child, whose only purpose is marriage, staying home and giving birth. no education, no health awareness, no skills, no dreams and no voice.
          </p>
          <p className=' bg-[#CA8A04] rounded-[10px] py-5 px-5 text-white text-[18px]'>In a typical northern home the girl child is allowed to get to 14 before she is shipped into marriage, in cases where she gets lucky and starts school, She's pulled out and sent to her husband. Parents and the community assume she can't be controlled if she gets exposed to any form of civility. Cases like this put the girl child in a choke hold of stagnation, giving little to no way of navigating life and leading her to believe the hands she has been dealt with is fair.
          </p>
        </div>
        <div className='grid justify-center px-[200px] sm:px-0'>
          <p className='  bg-[#9747FF] rounded-[10px] py-5 px-5 text-white text-[18px]'>These problems stem from cultural and religious beliefs that are still deep rooted and upheld in the society, even though one might argue that with civilization fast evolving things might get different, but it's not, she keeps getting blindsided, disregarded and under-represented. We must do away with this problem and tackle them in a way that will bring deserved change and development.</p>
        </div>
      </div>
      </div>

      {/* Third Section */}
      <div className='sm:px-[10px] px-[100px] '>

        {/* Header 2 */}
      <div className='flex justify-center items-center flex-col p-[100px] sm:px-0 sm:pb-6 gap-[10px]'>
        <h3 className='text-[#336699] font-semibold text-xl capitalize font-montserrat'>OUR OBJECTIVES </h3>
        <h1 className='text-[56px] sm:text-3xl sm:text-center font-extrabold text-[0F172A]'>How we are tackling the problem</h1>
      </div>

        <div className='grid grid-cols-2 sm:grid-cols-1 text-[16px] justify-between mb-20 sm:mb-[10px]'>

          <div className='flex flex-col p-10 gap-5'>
            <img src={Education} alt="" />
            <p className=''>Educational Workshops: Conducting workshops to promote access to quality education, career guidance, and awareness about the importance of education for girls.</p>
          </div>

          <div className='flex flex-col p-10 gap-5'>
            <img src={Health} alt="" />
            <p>Health and Hygiene Programs: Implementing health and hygiene sessions to educate girls about personal well-being, reproductive health, and nutrition.
            </p>
          </div>
          
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-1 text-[16px] justify-between mb-20 '>

        <div className='flex flex-col p-10 gap-5'>
            <img src={Skill} alt="" />
            <p> Skill Development Training: Providing vocational training sessions to equip girls with practical skills that will enhance their employability and economic independence.</p>
          </div>

          <div className='flex flex-col p-10 gap-5'>
            <img src={Confidence} alt="" />
            <p>Confidence-Building Activities: Organizing mentoring sessions, leadership workshops, and extracurricular activities to boost self-esteem and confidence among the girls.
            </p>
          </div>
          
        </div>
      </div>

      {/* Fourth Section */}
      <div className='px-[100px] sm:px-[30px] '>
        {/* Header */}
        <h1 className='text-[56px] sm:text-3xl font-extrabold text-[0F172A]'>Projects</h1>

        <div className='grid grid-cols-3 sm:flex sm:flex-col gap-10 py-10'>
          <div className='shadow-2xl px-5 py-10 rounded-xl flex flex-col gap-5 justify-between'>
            <div className='text-2xl font-bold'>Sister to sister</div>
            <img src={Sister} alt="" />
            <div className=''>A mentor-mentee program curated to help build confidence, improve the state of well being of girl child amd general life.</div>
            <Button content={'Learn More'} btnStyle={'bg-[#336699] w-full text-white before:bg-[#0f172a] hover:border-white '}/>
          </div>
          <div className='shadow-2xl px-5 py-10 rounded-xl flex flex-col gap-5 justify-between'>
            <div className='text-2xl font-bold'>Pad a Girl</div>
            <img src={Pad} alt="" />
            <div className=''>Providing pads to young girls without access and creating awareness about reproductive hygiene.</div>
            <Button content={'Learn More'} btnStyle={'bg-[#336699] w-full text-white before:bg-[#0f172a] hover:border-white '}/>
          </div>
          <div className='shadow-2xl px-5 py-10 rounded-xl flex flex-col gap-5 justify-between'>
            <div className='text-2xl font-bold'>Policy Making Awareness</div>
            <img src={Policy} alt="" />
            <div className=''>Creating awareness the girl child, making decisions and being part of decision making in their community or environment</div>
            <Button content={'Learn More'} btnStyle={'bg-[#336699] w-full text-white before:bg-[#0f172a] hover:border-white '}/>
          </div>
        </div>
      </div>

      <div className='flex  sm:flex-col px-[100px] gap-10 sm:px-[50px] justify-center items-center my-20' >
      <Button content={'Donate'} btnStyle={'bg-[#336699] sm:w-full text-white before:bg-[#0f172a] hover:border-white '}/>
      <Button btnStyle={"sm:w-full "} content={"Get Involved"} />
      </div>
     
    </div>
  )
}

export default GirlChild
