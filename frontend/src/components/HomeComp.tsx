'use client'
import SplitText from "./SplitText";


export default function HomeStyle(){
    return (<>
            <SplitText
              text="Welcome To ReadME!!"
              className="text-4xl font-semibold text-center"
              delay={100}
              animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
              animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              threshold={0.2}
              rootMargin="-50px"
              onLetterAnimationComplete={()=>{console.log('Animation complete')}}
            />
      </>
    )
}