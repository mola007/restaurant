import $ from 'jquery';

class ModalGallery{
    constructor(){

      console.log('gallery');
        this.modal = $('.modal');
        this.modalImgWrapper = $('.modal__img-wrapper');
        this.galleryImgWrapper = $('.gallery__img-wrapper');
        this.current = $('#current');
        this.next = $('.modal__btn--next');
        this.prev = $('.modal__btn--prev');
        this.close = $('.modal__close');
        this.galleryImg = $('.gallery__img-wrapper').find('img');
        this.nextAlt;
        this.nextEl;
        this.firstAlt;
        this.firstEl;
        this.currentThumbnail;
        
        this.openModal();
        this.nextSlide();
        this.prevSlide();
        this.closeModal();
        
    }

    openModal(){
        let that = this;
        this.galleryImgWrapper.on('click', function(e){

            let $this = $(this);

            $('html,body').addClass('body-no-scroll');
            that.modal.addClass("modal--is-visible");

            $this.addClass('gallery__img-wrapper--current');


         let src = $this.find('img').attr('src');
          let alt = $this.find('img').attr('alt');

           that.current.attr('alt', alt);
           that.current.attr('src', src).addClass('fade-in');

           setTimeout(()=>{
             that.current.attr('src', src).removeClass('fade-in');
            }, 400)
        });
        }

      closeModal(){
        console.log('close modal');
        let that = this;
        this.close.on('click', function(){
          that.modal.removeClass("modal--is-visible");
          $('html,body').removeClass('body-no-scroll');
          that.galleryImgWrapper.removeClass('gallery__img-wrapper--current');
        })

    };

  

        nextSlide(){
          let that = this;

           this.next.on('click', function(e){
            that.currentThumbnail = $('.gallery__img-wrapper--current');
            that.currentThumbnail.removeClass('gallery__img-wrapper--current');

              if(that.currentThumbnail.next().length){

                that.currentThumbnail.next().addClass('gallery__img-wrapper--current');

                that.nextAlt = that.currentThumbnail.next().find('img').attr('alt');
                that.current.attr('alt', that.nextAlt);

                that.nextEl = that.currentThumbnail.next().find('img').attr('src');
                that.current.attr('src', that.nextEl).addClass('fade-in');

                  setTimeout(()=>{
                   that.current.attr('src', that.nextEl).removeClass('fade-in');
                  }, 400);
                }
                else{

                that.firstAlt = that.galleryImgWrapper.eq(0).find('img').attr('alt');
                that.current.attr('alt', that.firstAlt);

                that.firstEl = that.galleryImgWrapper.eq(0).find('img').attr('src');
                that.current.attr('src', that.firstEl).addClass('fade-in');

                  setTimeout(()=>{
                    that.current.attr('src', that.firstEl).removeClass('fade-in');
                   }, 400)

                   that.galleryImgWrapper.eq(0).addClass('gallery__img-wrapper--current');
                 }
           });
        }

        prevSlide(){
          let that = this;

           this.prev.on('click', function(e){
            that.currentThumbnail = $('.gallery__img-wrapper--current');
            that.currentThumbnail.removeClass('gallery__img-wrapper--current');

              if(that.currentThumbnail.prev().length){

                that.currentThumbnail.prev().addClass('gallery__img-wrapper--current');

                that.prevAlt = that.currentThumbnail.prev().find('img').attr('alt');
                that.current.attr('alt', that.prevAlt);

                that.prevEl = that.currentThumbnail.prev().find('img').attr('src');
               that.current.attr('src', that.prevEl).addClass('fade-in');

                  setTimeout(()=>{
                   that.current.attr('src', that.prevEl).removeClass('fade-in');
                  }, 400);
                }
                else{

                  that.lastAlt = that.galleryImgWrapper.eq(that.galleryImgWrapper.length - 1).find('img').attr('alt');
                  that.current.attr('alt', that.lastAlt);

                  that.lastEl = that.galleryImgWrapper.eq(that.galleryImgWrapper.length - 1).find('img').attr('src');
                  that.current.attr('src', that.lastEl).addClass('fade-in');

                  setTimeout(()=>{
                    that.current.attr('src', that.lastEl).removeClass('fade-in');
                   }, 400);

                   that.galleryImgWrapper.eq(that.galleryImgWrapper.length - 1).addClass('gallery__img-wrapper--current');
                 }
           });
        }

}

export default ModalGallery;
