import React from 'react'
import Group from "../../public/assets/Rectangle 27.png"
import Education from "../../public/assets/Rectangle 23.png"
import Health from "../../public/assets/Rectangle 25.png"
import Skill from "../../public/assets/Rectangle 26.png"
import Confidence from "../../public/assets/Rectangle 24.png"
import Sister from "../../public/assets/Picture.png"
import Pad from "../../public/assets/Pad.png"
import Policy from "../../public/assets/Policy.png"
import Line from "../../public/assets/Line 2.png"
import Button from '../components/Button'


const GirlChild = () => {
  return (
    <div className=''>
      {/* First Section */}
     <div className=''>
        {/* Header 1 */}
      <div className='flex justify-center items-center flex-col p-[100px] gap-[10px]'>
        <h3 className='text-[#336699] font-semibold text-xl capitalize font-montserrat'>GIRL CHILD</h3>
        <h1 className='text-[56px] font-extrabold text-[0F172A]'>Girl Child Program</h1>
      </div>

      {/* Image and text */}
      <div className='flex items-center px-[100px] gap-[67px] '>
        <img src={Group} alt="Group image" />
        <div className='flex gap-[24px] items-center'>
          <img className='' src={Line} alt="" />
          <p className='text-[18px]'>The Girl Child Program was launched to carry out awareness activities among young girls in rural communities in the Northern part of Nigeria on sanitary hygiene and bring about possible solution to ending period poverty.</p>
        </div>
      </div>
     </div>

     {/* Second Section */}
     <div>
      {/* Header 2 */}
      <div className='flex justify-center items-center flex-col p-[100px] gap-[10px]'>
        <h3 className='text-[#336699] font-semibold text-xl capitalize font-montserrat'>PROBLEM</h3>
        <h1 className='text-[56px] font-extrabold text-[0F172A]'>A glimpse into the problem</h1>
      </div>

      {/* Paragraph */}
      <div className='px-[100px] items-center mb-10'>
        <div className='flex py-10 gap-[91px]'>
          <p className='w-[540px] h-[300px] bg-[#F9F9F9] rounded-[10px] py-5 px-4 text-[18px]'>The situation of the girl child in the northern part of Nigeria is a toxic situation of disregard, lack of awareness, lack of proper amenities, discrimination, carelessness and utter irresponsibility. The girl child is seen as the lesser child, whose only purpose is marriage, staying home and giving birth. no education, no health awareness, no skills, no dreams and no voice.
          </p>
          <p className='w-[540px] h-[300px] bg-[#CA8A04] rounded-[10px] py-5 px-4 text-white text-[18px]'>In a typical northern home the girl child is allowed to get to 14 before she is shipped into marriage, in cases where she gets lucky and starts school, She's pulled out and sent to her husband. Parents and the community assume she can't be controlled if she gets exposed to any form of civility. Cases like this put the girl child in a choke hold of stagnation, giving little to no way of navigating life and leading her to believe the hands she has been dealt with is fair.
          </p>
        </div>
        <div className='flex justify-center'>
          <p className='w-[540px] h-[300px] bg-[#9747FF] rounded-[10px] py-5 px-4 text-white text-[18px]'>These problems stem from cultural and religious beliefs that are still deep rooted and upheld in the society, even though one might argue that with civilization fast evolving things might get different, but it's not, she keeps getting blindsided, disregarded and under-represented. We must do away with this problem and tackle them in a way that will bring deserved change and development.</p>
        </div>
      </div>
      </div>

      {/* Third Section */}
      <div className='px-[100px] '>

        {/* Header 2 */}
      <div className='flex justify-center items-center flex-col p-[100px] gap-[10px]'>
        <h3 className='text-[#336699] font-semibold text-xl capitalize font-montserrat'>OUR OBJECTIVES </h3>
        <h1 className='text-[56px] font-extrabold text-[0F172A]'>How we are tackling the problem</h1>
      </div>

        <div className='flex gap-14 text-[16px] justify-center mb-20 '>

          <div className='w-[449px] h-[276px]'>
            <img src={Education} alt="" />
            <p className=''>Educational Workshops: Conducting workshops to promote access to quality education, career guidance, and awareness about the importance of education for girls.</p>
          </div>

          <div className='w-[449px] h-[276px]'>
            <img src={Health} alt="" />
            <p>Health and Hygiene Programs: Implementing health and hygiene sessions to educate girls about personal well-being, reproductive health, and nutrition.
            </p>
          </div>
          
        </div>

        <div className='flex gap-14 text-[16px] justify-center mb-20'>

          <div className='w-[449px] h-[276px]'>
            <img src={Skill} alt="" />
            <p> Skill Development Training: Providing vocational training sessions to equip girls with practical skills that will enhance their employability and economic independence.</p>
          </div>

          <div className='w-[449px] h-[276px]'>
            <img src={Confidence} alt="" />
            <p>Confidence-Building Activities: Organizing mentoring sessions, leadership workshops, and extracurricular activities to boost self-esteem and confidence among the girls.
            </p>
          </div>
          
        </div>
      </div>

      {/* Fourth Section */}
      <div className='px-[100px]'>
        {/* Header */}
        <h1>Projects</h1>

        <div className='flex'>
          <div>
            <div>Sister to sister</div>
            <img src={Sister} alt="" />
            <div>A mentor-mentee program curated to help build confidence, improve the state of well being of girl child amd general life.</div>
            <Button />
          </div>
          <div>
            <div>Pad a Girl</div>
            <img src={Pad} alt="" />
            <div>Providing pads to young girls without access and creating awareness about reproductive hygiene.</div>
            <Button />
          </div>
          <div>
            <div>Policy Making Awareness</div>
            <img src={Policy} alt="" />
            <div>Creating awareness the girl child, making decisions and being part of decision making in their community or environment</div>
            <Button />
          </div>
        </div>
      </div>

      <div className='flex px-[100px] justify-center' >
        <Button />
        <Button />
      </div>
     
    </div>
  )
}

export default GirlChild
