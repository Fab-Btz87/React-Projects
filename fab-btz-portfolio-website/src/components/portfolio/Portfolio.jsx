import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/projects/autocompletar.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="project1" />
          </div>
            <h3>This is a portfolio item title</h3>
            <a href="#" className='btn' target='_blank'>Github</a>
            <a href="#" className='btn btn-primary' target='_blank'>Live Demo</a>
         </article>

         <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="project2" />
          </div>
            <h3>This is a portfolio item title</h3>
            <a href="#" className='btn' target='_blank'>Github</a>
            <a href="#" className='btn btn-primary' target='_blank'>Live Demo</a>
         </article>

         <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="project3" />
          </div>
            <h3>This is a portfolio item title</h3>
            <a href="#" className='btn' target='_blank'>Github</a>
            <a href="#" className='btn btn-primary' target='_blank'>Live Demo</a>
         </article>

         <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="project4" />
          </div>
            <h3>This is a portfolio item title</h3>
            <a href="#" className='btn' target='_blank'>Github</a>
            <a href="#" className='btn btn-primary' target='_blank'>Live Demo</a>
         </article>

         <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="project5" />
          </div>
            <h3>This is a portfolio item title</h3>
            <a href="#" className='btn' target='_blank'>Github</a>
            <a href="#" className='btn btn-primary' target='_blank'>Live Demo</a>
         </article>

         <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="project6" />
          </div>
            <h3>This is a portfolio item title</h3>
            <a href="#" className='btn' target='_blank'>Github</a>
            <a href="#" className='btn btn-primary' target='_blank'>Live Demo</a>
         </article>

      </div>

    </section>

  )
}

export default Portfolio