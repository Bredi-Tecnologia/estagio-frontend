import banners from './data.js';
import elements from './carouselElements.js'


export default {
    bannerData: banners,
    time: 2000,
    currentImage:{},
    currentImageIndex: 0,
    start(){
        elements.get.call(this); //chama elementos html
        elements.actions.call(this);


        this.setItem();  
    },
    shiftForNext(){
        console.log(this.currentImageIndex);
        this.currentImageIndex++;

        if(this.currentImageIndex >= this.bannerData.length) {
            this.currentImageIndex = 0
        }

        this.image.src = this.bannerData[this.currentImageIndex].image;
        this.title.innerText = this.bannerData[this.currentImageIndex].title;
        this.description.innerText = this.bannerData[this.currentImageIndex].description;
    
    },
    shiftForPrev(){
        console.log(this.currentImageIndex)

        if(this.currentImageIndex <= 0) {
            this.currentImageIndex = this.bannerData.length
        }

        this.currentImageIndex--;

        this.image.src = this.bannerData[this.currentImageIndex].image;
        this.title.innerText = this.bannerData[this.currentImageIndex].title;
        this.description.innerText = this.bannerData[this.currentImageIndex].description;
    },
    setItem() {
        this.currentImage = this.bannerData[this.currentImageIndex];
        this.image.src = this.currentImage.image;
        this.title.innerText = this.currentImage.title;
        this.description.innerText = this.currentImage.description;

        setInterval(() => {
            this.shiftForNext();
        }, this.time);  
    },
    
}

