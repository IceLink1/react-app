import React from 'react'
import '../styles/Home.css'
import homeLogo from '../imges/BG.png'


function Home() {

    return (
        <div className="Home page">
            <div className="imgInHome">
                <div className="shadow">Future's Posts</div>
                <img src={homeLogo} alt="Sea" />
            </div>
            <div className='content'>
                <div className="img AllCenter">
                    <div className="postsHome">
                        
                    </div>
                </div>
                <div className="text">
                    <div className="textOne">
                        <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae corrupti voluptate  ea magnam nihil doloribus assumenda non tempora enim? At, aliquam sit magni accusamus inventore consequuntur ea quaerat facere magnam perferendis cupiditate!  aliquam sit magni accusamus inventore consequuntur ea quaerat facere magnam perferendis cupiditate! <span className='tegA'>Learn More</span></h3>
                    </div>
                    <div className="textOne">
                        <h3>Sit amet consectetur adipisicing elit. Beatae corrupti voluptate nihil doloribus assumenda non tempora enim? At, aliquam sit magni accusamus inventore consequuntur ea quaerat facere magnam perferendis cupiditate!  aliquam sit magni accusamus inventore consequuntur ea magnam perferendis quaerat facere magnam perferendis . <span className='tegA'>Learn More</span></h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home