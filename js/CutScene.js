//cut scene to play videos between game play
Critterer.CutScene = function(game){
     console.log('test');
      this.Scorpions = "https://vimeo.com/112414428";
      this.Walking_Stick = "https://vimeo.com/111256268";
      this.Walking_Stick_Breathe = "https://vimeo.com/111256267";
      this.Walking_Stick_do = "https://vimeo.com/111256266";
      this.Walking_Sticks_live = "https://vimeo.com/111256265";
      this.valueToUse;
      this.videoend;
};
    

    
 Critterer.CutScene.prototype = {
    
     picker: function() {
         var values = [
             this.Scorpions,
             this.Walking_Stick,
             this.Walking_Stick_Breathe,
             this.Walking_Stick_do,
             this.Walking_Sticks_live
         ];
            
         this.valueToUse = values[Math.floor(Math.random() * values.length)];
                      
     },

    

   create: function() {
         this.picker();
    
       $.fancybox({
               maxWidth	    : 800,
               maxHeight	    : 600,
               fitToView	    : true,
               width		    : '70%',
               height		: '70%',
               autoSize	    : true,
               closeClick	: false,
               openEffect	: 'none',
               closeEffect	: 'none',
               href          : this.valueToUse,
               helpers       : {
                   media : {}
               }
             afterload: function (current, previous) {
// 			var iframe = $(this.valuetouse)[0],
// 					player = $f(iframe);
// 			// When the player is ready, add listeners for pause, finish, and playProgress
// 			player.addEvent('ready', function() {
// 				player.addEvent('finish', function(id) {
// 					$.fancybox.close();
// 				});
// 			});
// 		}
      });    
   },
    
//   update: function() {

// 		} 