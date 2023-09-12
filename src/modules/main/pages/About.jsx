import React from 'react'
import Hero from "../components/hero/hero";
import hero1 from "../../../assets/imges/hero1.jpg"
import "./styles/AboutStyle.css"
import Titlewithcontent1 from '../components/Titlewithcontent1/Titlewithcontent1';
import LEARN1 from "../../../assets/imges/LEARN1.jpg"
import LEARN2 from "../../../assets/imges/LEARN2.jpg"
import SectionTop from '../components/SectionTop/SectionTop';
import  {BsCalculator, BsMusicNoteBeamed ,BsBook } from "react-icons/bs"
import  {FaReadme , FaHistory} from "react-icons/fa"

import EducationCard from '../components/EducationCard/EducationCard';
import AOS from 'aos';
import ChooseUs from '../components/ChooseUs/ChooseUs';
import TeamCard from '../components/TeamCard/TeamCard';
export default function About() {
  AOS.init();
  return (
    <>
    <Hero
    heroimg={LEARN2}
    herop1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nulla aut sapiente, a tempore quam saepe."
    heroh1="About Us"
    heroa="EXPLORE COURSES"
    />


      <section className="instructor" >
        <div className="content" >
      <Titlewithcontent1 
        title= "Become an  Instructor"
        desc= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nulla aut sapiente, a tempore quam saepe. Sequi, quo enim vitae corporis maiores ut aperiam mollitia assumenda animi possimus rem dolorem."
        enumeration1="spareated the life"
        enumeration2="spareated the life"
        enumeration3="spareated the life"
        BtnName="Get Started"
      />
      </div>
      <div className="sectionIMG" data-aos="fade-left" >
        <img  src={LEARN1} alt="" />
      </div>
      </section>
      <section className="team">
      <SectionTop 
        sectitlle= "Our Team"
        secdesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nulla aut sapiente, a tempore quam saepe. "
        />
        <div className="teamcard-container">
          <TeamCard 
        
          img={LEARN1}
          name="Mina collins"
          jop="Teacher of Math"
          info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nulla aut sapiente, a tempore quam saepe."
          />
          <TeamCard 
      
          img={LEARN1}
          name="Mina collins"
          jop="Teacher of Math"
          info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nulla aut sapiente, a tempore quam saepe."
          />
          <TeamCard 
          img={LEARN1}
          name="Mina collins"
          jop="Teacher of Math"
          info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nulla aut sapiente, a tempore quam saepe."
          />
        </div>
      </section>
            <section className="education">
      <SectionTop 
        sectitlle= "We have best education"
        secdesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nulla aut sapiente, a tempore quam saepe. "
        />
           <div className="educationCard-container" data-aos="fade-right" >
          <EducationCard 
          icion ={<BsMusicNoteBeamed />}
          title= "Music Class"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nulla aut sapiente, a tempore quam saepe. "
          />
          <EducationCard 
          icion ={<BsCalculator/>}
          title= "Math Class"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nulla aut sapiente, a tempore quam saepe. "
          />
          <EducationCard 
          icion ={<BsBook />}
          title= "English Class"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nulla aut sapiente, a tempore quam saepe. "
          />
          <EducationCard 
          icion ={<FaReadme/>}
          title= "Reading Class"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nulla aut sapiente, a tempore quam saepe. "
          />
          <EducationCard 
          icion ={<FaHistory/>}
          title= "History Class"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nulla aut sapiente, a tempore quam saepe. "
          />
          <EducationCard 
          icion ={<BsMusicNoteBeamed />}
          title= "Music "
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nulla aut sapiente, a tempore quam saepe. "
          />
         </div>
      </section>

      <section className='chooseUs'>
        <ChooseUs 
        mainIMG={LEARN1}
        title="Why Choose Us"
        desc="Far far away, behind the word mountains, far from countries vokalia and consonantia ,"
        good="Good Teacher and Staffs "
        img2={hero1}
        desc2="Far far away, behind the word mountains, far from countries vokalia and consonantia , there live the blind texts"
        adv1="We Value Good Characters"
        adv2="Your Children Are Safe"
        
        />
      </section>

    
    
    </>
  )
}
