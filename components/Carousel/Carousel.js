class Carousel {
    constructor(carousel) {
        this.carousel = carousel;
        this.images = this.carousel.querySelectorAll('img');
        this.images.forEach(n => n.style.zIndex = '-1');
        this.visibleImg = this.images[0];
        this.visibleImg.style.left = '0%';
        this.visibleImg.style.zIndex = '0';
        this.rightImg = this.images[1];
        this.rightImg.style.left = '100%';
        //this.rightImg.style.zIndex = '1';
        this.leftImg = this.images[this.images.length - 1];
        this.leftImg.style.left = '-100%';
        //this.leftImg.style.zIndex = '1';
        this.rightBtn = this.carousel.querySelector('.right-button');
        this.leftBtn = this.carousel.querySelector('.left-button');
        this.rightBtn.style.zIndex = '2';
        this.leftBtn.style.zIndex = '2';

        this.rightBtn.addEventListener('click', this.right.bind(this));
        this.leftBtn.addEventListener('click', this.left.bind(this));
    }

    right() {
        this.visibleImg.style.zIndex = '0';
        this.rightImg.style.zIndex = '1';
        this.leftImg.style.zIndex = '-1';

        let visible;
        let right;
        let left;

        for(let i = 0; i <= this.images.length - 1; i++) {
            if(this.visibleImg == this.images[i]) {
                left = this.images[i];
                if(this.images[i] == this.images[this.images.length - 1]) {
                    visible = this.images[0];
                    right = this.images[1];
                } else {
                    visible = this.images[i + 1];
                    if(this.images[i + 1] == this.images[this.images.length - 1]) {
                        right = this.images[0];
                    } else {
                        right = this.images[i + 2];
                    }
                }
            }
        }

        visible.style.left = '0%';
        right.style.left = '100%';
        left.style.left = '-100%';

        visible.style.transition = 'left 0.5s linear';
        left.style.transition = 'left 0.5s linear';

        this.visibleImg = visible;
        this.rightImg = right;
        this.leftImg = left;
    }

    left() {
        this.visibleImg.style.zIndex = '0';
        this.rightImg.style.zIndex = '-1';
        this.leftImg.style.zIndex = '1';
        
        if(this.visibleImg == this.images[0]) {
            this.visibleImg.style.left = '100%';
            this.visibleImg.style.transition = 'left linear 0.5s'
        }

        let visible;
        let right;
        let left;

        for(let i = 0; i <= this.images.length - 1; i++) {
            if(this.visibleImg == this.images[i]) {
                right = this.images[i];
                if(this.images[i] == this.images[0]) {
                    visible = this.images[this.images.length - 1];
                    left = this.images[this.images.length - 2];
                } else {
                    visible = this.images[i - 1];
                    if(this.images[i - 1] == this.images[0]) {
                        left = this.images[this.images.length - 1];
                    } else {
                        left = this.images[i - 2];
                    }
                }
            }
        }
        
        visible.style.left = '0%';
        right.style.left = '100%';
        left.style.left = '-100%';

        visible.style.transition = 'left 0.5s linear';
        left.style.transition = 'left 0.5s linear';

        this.visibleImg = visible;
        this.rightImg = right;
        this.leftImg = left;
    }
}

let carousel = document.querySelector('.carousel');
new Carousel(carousel);