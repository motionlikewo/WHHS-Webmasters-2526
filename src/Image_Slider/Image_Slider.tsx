import {useState} from 'react';



interface Image_SliderProps {
    images : string[];
}




function nextIndex(currentIndex: number, imageCount: number ): number {
    return (currentIndex + 1) % imageCount;

}


function ImageSlider({images}: Image_SliderProps) {

    const [currentIndex, setIndex] = useState(0);
    
 

    setTimeout(() => {
      setIndex(nextIndex(currentIndex, images.length))}, 5000)



return <div className='Slider'> 

{images.map((image, index) => (
    <img 
    src={image} 
    className= {index === currentIndex ? ' ImageSlide currentSlide' : ' ImageSlide' }
   // alt={`Slide ${index}`} 
   // key={index}
    >

    </img>
))}



</div>;

} export default ImageSlider;