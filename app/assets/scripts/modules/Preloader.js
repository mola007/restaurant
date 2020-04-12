import $ from 'jquery';

class Preloader{

    constructor(){
      this.bannerPhoto = $('.banner__photo');
      this.bannerPhotoContainer = $('.banner__photo-container');
      this.addHTML();
      this.preloader = $('.preloader');
      this.events();
    }

    events(){
      $(window).on('load', this.hideLoader.bind(this)); 
    }

    hideLoader(){
      console.log('hide loader');
      setTimeout(() => {
          this.preloader.addClass('preloader--hide');
          this.bannerPhotoContainer.hide().fadeIn(500);
      }, 1500);    
    } 


    addHTML(){
      if(this.bannerPhotoContainer[0]){
        this.bannerPhotoContainer.append(`
          <div class="preloader">
            <div class='preloader__dots'>
              <div class='preloader__dot'></div>
              <div class='preloader__dot'></div>
              <div class='preloader__dot'></div>
              <div class='preloader__dot'></div>
              <div class='preloader__dot'></div>   
            </div>
          </div>
          `);
      }    
  }  



   
  
}

export default Preloader;