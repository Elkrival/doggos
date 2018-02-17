import React from 'react'
import story_image_1 from '../../img/nat-8.jpg'
import story_image_2 from '../../img/nat-9.jpg'
import video_mp4 from '../../img/video.mp4'
import video_webm from '../../img/video.webm'

const Stories = () =>{
 return(
  <section className="section-stories">
   <div className="bg-video">
    <video className="bg-video__content" autoPlay muted loop>
    <source src={ video_mp4 } type="video/mp4"/>
    <source src={ video_webm } type="video/webm"/>
     Your Browser is not supported
    </video>
   </div>
   <div className="u-center-text u-margin-bottom-big">
    <h2 className="heading-secondary">
     We Make People Genuinely Happy
    </h2>
   </div>
   <div className="row">
    <div className="story">
     <figure className="story__shape">
      <img src={ story_image_1 } alt="person" className="story__img"/>
      <figcaption className="story__caption">Mary Smith</figcaption>
     </figure>
     <div className="story__text">
      <h3 className="heading-tertiary margin-bottom-small">I had the best week ever with my family</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, possimus incidunt adipisci mollitia. Nihil nulla, quaerat eos sapiente amet, tempora in eaque enim, aspernatur non veniam debitis, atque nisi laudantium <a href="https://Elkrival.github.io/doggos" className="btn-text">Visit our homepage &rArr;</a>.</p>
     </div>
    </div>
   </div>
   <div className="row">
    <div className="story">
     <figure className="story__shape">
      <img src={ story_image_2 } alt="person" className="story__img"/>
      <figcaption className="story__caption">Jack Wilson</figcaption>
     </figure>
     <div className="story__text">
      <h3 className="heading-tertiary margin-bottom-small">Wow my life is completely different now</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, possimus incidunt adipisci mollitia. Nihil nulla, quaerat eos sapiente amet, tempora in eaque enim, aspernatur non veniam debitis, atque nisi laudantium <a href="https://Elkrival.github.io/doggos" className="btn-text">Visit our homepage &rArr;</a></p>
     </div>
    </div>
   </div>
   <div className="u-center-text u-margin-top-huge">
    <a href="#tours" className="btn-text">Discover All Tours &rArr;</a>
   </div>
  </section>
 )
}
export default Stories
