$(document).ready(function(){
  
    (function() {
  
      var quotes = $(".headline");
      var quoteIndex = -1;
      
      function showNextQuote() {
          ++quoteIndex;
          quotes.eq(quoteIndex % quotes.length)
              .fadeIn(1200)
              .delay(3000)
              .fadeOut(1000, showNextQuote);
      }
      
      showNextQuote();
      
  })();
  
  });