import $ from 'jquery';

class Menu{

    constructor(){
        this.menuContent = $('.menu__content');
        this.menuTab = $('.menu__tab-btn');   
        this.showContent();
    }

    showContent(){
    let that = this;
     $(document).on('click', '.menu__tab-btn', function(){
         let $this = $(this);
        that.menuTab.removeClass('menu__tab-btn--current');
        that.menuContent.hide();

        let currentContent =  $this.attr('data-content');

        $this.addClass('menu__tab-btn--current');
        $(currentContent).fadeIn(200);
     });
    }
}
export default Menu;