//lets make thumbnails website for the photos. 

$(document).ready(function(){
	
/*	
	//function move left	
$('tr').on('click','.ingredient',function(){ //function to move each ingredient on click
		$(this).animate({ //this selects each object	   
      paddingLeft: '+=400' 
    }, 1000, function() {
     
    });
	});
	
	
	//function move right
	$('tr').on('click','.ingredient',function(){ //function to move each ingredient on click
		$(this).animate({ //this selects each object	   
      paddingLeft: '-=400' 
    }, 1000, function() {
     
    });
	});
	
	*/
	
	
	
	
	//function move each element v2 - recipe page
	
	
  $('.ingredient').on('click', function() {
	  let pos = parseInt($(this).css('padding-Left'));
	  if (pos > 425) { $(this).animate({
     
      paddingLeft: '0'
    });}
	  else {
		  
    $(this).animate({
     
      paddingLeft: '+=425'
    });
	  }
     });
	
  
	//function fade elements - hot to cook recipe page
  $('li').on('click', function() { $(this).animate({
     opacity:'0.5'
    })})
	 
		
/* 	//togle function for how to cook
	$('li').click(function(){
      $('#method').toggle('slow');
  }); */
	
	//
	/*  $('li').on('click', function() { $(this).toggle('slow')({
    
    })}) */
	
	/* //backB
	$("#backB").click(function(){
   $('li').on('click', function() { $(this).toggle('slow')({
    
    })})
   
  });
	 */
	
	/*
	
	//function move left when click buton -recipe page
	
	$(".pbtnL").on('click', function(){
  $(".ingredient").animate({
	  paddingLeft: '+=400' 
  },1000);
	  
  
});

//function move right when click button -recipe page
$(".pbtnR").on('click', function(){
  $(".ingredient").animate({
	  paddingLeft: '-=400' 
  },1000);
	  
  
});

*/

//function fade elements - hot to cook recipe page
/* 
 $('#method').on('click', function() { $(this).animate({
	
     opacity:'0.5'
	 
	 
    
	
	})}) */
	
	
	  

   

//function fadde in figure of the page - recipe page


   $('.figure').hide().fadeIn(2000);
  


//code to flip image  - about page
$(".flip").flip({
        trigger: 'hover'
    });


//rollover functon - garden page
	$('.roll img').css('opacity', 0.6);

$('.roll img').on({
   mouseover:function() {
    $(this).css('opacity', 1);
   },

   mouseout:function() {
    $(this).css('opacity', 0.6);
   }
});

/*
//the select part - form page - club and events
 //the select checkbox
  
  $('#special').on('click',function(){
	  if( $('#special').prop('checked')){
		  $('#userSelection').html("You have Selected: "+$('#special').val()); 
		  
	  }
else $('#userSelection').html("");	  
	  
  });
*/

  
  //here all the code to select form js
  
   
   $('#newItemButton').show();
  $('#newItemForm').hide();

  $('#showForm').on('click', function(){
    $('#newItemButton').hide();
    $('#newItemForm').show();
  });

 $('#newItemForm').on('submit', function(e){
    e.preventDefault();
	if($('input:text').val()){
		
	var newText = $('input:text').val();
    $('ul').prepend('<li>' + newText + '</li>'); //its add before you can change to after, or prepend
   
	}
	
	
     $('#newItemButton').show();
	 $('#userSelection').html("");//here to make disapears the yes after click buttom add
    $('#newItemForm').hide();
    $('input:text').val('');
  });
  
  
  //the select checkbox  - form page
  
  $('#special').on('click',function(){
	  if( $('#special').prop('checked')){
		  $('#userSelection').html("You have Signed "+$('#special').val()); 
		  
	  }
else $('#userSelection').html("");	  
	  
  });
  
  
  
  
  
  //the mailcheck plug in - its suggest the domain  - form page 
  
  var domains = ['gmail.com', 'aol.com'];
var secondLevelDomains = ['hotmail']
var topLevelDomains = ["com", "net", "org"];

var superStringDistance = function(string1, string2) {
  // a string distance algorithm of your choosing
}

$('#email').on('blur', function() {
  $(this).mailcheck({
    domains: domains,                       // optional
    secondLevelDomains: secondLevelDomains, // optional
    topLevelDomains: topLevelDomains,       // optional
    distanceFunction: superStringDistance,  // optional
    suggested: function(element, suggestion) {
      // callback code
    },
    empty: function(element) {
      // callback code
    }
  });
});
  
  
  //here the slides for index page PLUG IN - index - plants 
  $('.slider_one_big_picture').EasySlides({
                'autoplay': true,
                'stepbystep': false,
                'show': 5,
                'loop': false
            })
          
            $('.slider_circle_10').EasySlides({
                'autoplay': true,
                'show': 13
            })
            
  
  
  
  
  
  
  
  
  
  
  


  //this codes slide each ingredient to left side.
/*
$('tr').on('click','.ingredient',function(){ //function to move each ingredient on click
		$(this).animate({ //this selects each object	   
      paddingLeft: '+=400' 
    }, 1000, function() {
     
    });
	});
	//*/

	//This code is bugged ( when click back he returns left after)
	/*
	$('tr').on('click','.ingredient',function(){ //function to move each ingredient on click

let pos = parseInt($('.ingredient'));

	if(pos > 580){
		$('.ingredient').click();
	}
		else{
		
		$(this).animate({ //this selects each object	   
      paddingLeft: '-=400' 
    }, 1000, function() {
     
    });
		}


$(this).animate({ //this selects each object	   
      paddingLeft: '+=400' 
    }, 1000, function() {
     
    });
	
	
	
		
	});
	*/
	//
	
	
	
	//wrap the text title plug in - title of the page
	// Wrap every letter in a span
	
$('.ml10 .letters').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline({loop: true})
  .add({
    targets: '.ml10 .letter',
    rotateY: [-90, 0],
    duration: 1300,
    delay: function(el, i) {
      return 45 * i;
    }
  }).add({
    targets: '.ml10',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
	







});