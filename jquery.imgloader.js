/*
* img.imgloader(low_src='http://7vzsbb.com1.z0.glb.clouddn.com/860cd73265406be979b065a985c9a6ec.jpg?imageMogr/v2/thumbnail/50x50',
 middle_src='http://7vzsbb.com1.z0.glb.clouddn.com/860cd73265406be979b065a985c9a6ec.jpg?imageMogr/v2/thumbnail/100x100',
 high_src='http://7vzsbb.com1.z0.glb.clouddn.com/860cd73265406be979b065a985c9a6ec.jpg?imageMogr/v2/thumbnail/600x600')
* */
;(function($){
    $.fn.extend({
        imgloader:function(){
            //console.log($(this).selector);
            //console.log($(this));
            $(this).each(function(index,item){
                var img=$(item).attr('src',$(item).attr('low_src'));
                $(item).attr('type','low');
                $('<img>').attr('src',$(this).attr('middle_src')).bind('load',function(){
                    if(img.attr('type')==='low'){
                        img.attr('src',$(this).attr('src'));
                        img.attr('type','middle');
                    }
                });
                $('<img>').attr('src',$(this).attr('high_src')).bind('load',function(){
                    img.attr('src',$(this).attr('src'));
                    img.attr('type','high');
                });
            });
        }
    })
})(jQuery);
