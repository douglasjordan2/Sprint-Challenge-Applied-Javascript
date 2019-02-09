class Carousel {
    constructor(carousel) {
        this.carousel = carousel;
        this.left = this.carousel.querySelector('.left-button');
        this.right = this.carousel.querySelector('.right-button');
        this.images = this.carousel.querySelectorAll('img');
        this.images[0].classList.add('visible');
        this.visibleImg = carousel.querySelector('.visible');
        
        this.left.addEventListener('click', this.leftBtn.bind(this));
        this.right.addEventListener('click', this.rightBtn.bind(this));
    }

    leftBtn() {
        if(this.visibleImg == this.images[0]) {
            this.images[0].classList.remove('visible');
            this.images[this.images.length - 1].classList.add('visible');
        } else {
            for(let i = this.images.length - 1; i >= 0; i--) {
                if(this.visibleImg == this.images[i]) {
                    this.images[i].classList.remove('visible');
                    this.images[i - 1].classList.add('visible');
                }
            }
        }
        this.visibleImg = this.carousel.querySelector('.visible');
        console.log(this.visibleImg);
    }

    rightBtn() {
        for(let i = 0; i < this.images.length - 1; i++) {
            if(this.images[i] == this.visibleImg) {
                this.images[i].classList.remove('visible');
                this.images[i + 1].classList.add('visible');
                console.log(this.visibleImg);
            } 
            
            if(this.visibleImg == this.images[this.images.length - 1]) {
                this.visibleImg.classList.remove('visible');
                this.images[0].classList.add('visible');
            }
        }
        this.visibleImg = this.carousel.querySelector('.visible');
    }
}

let carousel = document.querySelector('.carousel');
new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/