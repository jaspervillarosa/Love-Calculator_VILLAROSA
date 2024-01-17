function calculateLove() {

    popup1.style.display = "block";
    var yourName = document.getElementById('yourName').value.trim();
    var partnerName = document.getElementById('partnerName').value.trim();
    var lovePercentageNumber;
    // var lovePercentage;
  
    // if (yourName === "" || partnerName === "") {
    //   alert("Please enter both names!");
    //   return;
    // }
  
    // const token = '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';
    // const gptEl = document.getElementById('resultgpt');
    // fetch('https://api.openai.com/v1/chat/completions ',{
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': 'Bearer ' + token,
    //   },
    //   body: JSON.stringify({
    //     model:"gpt-3.5-turbo",
    //     messages:[{"role": "user", "content": "Give me a number only"}],
    
    //   })
    // }).then(response => {
    //   return response.json();
      
    // }).then(data => {
    //   gptEl.textContent= data.choices[0].message.content;
    //   lovePercentageNumber = parseInt(gptEl.textContent, 10);
    
    
    //   if (!isNaN(numberResult)) {
    //     lovePercentage = lovePercentageNumber;
    //     console.log('Generated number:', numberResult);
    //     // You can use the numberResult as an integer
    //   } else {
    //     console.error('Invalid number generated');
    //   }
    // }).catch(error => {
    //   console.error('Error:', error);

    // })

    var lovePercentage = Math.floor(Math.random() * 101); // Random number between 0 and 100
    console.log(lovePercentage);
    var resultMessage = `${yourName} and ${partnerName}, your love percentage is ${lovePercentage}%!`;

    document.getElementById("popup1").classList.toggle("active");
    document.getElementById('result').innerHTML = resultMessage;


    var numberScale = document.querySelector('.circular-progress'),
    progressvalue = document.querySelector('.progress-value');

    let progressStartValue = 0,
        progressEndValue = 100,
        speed = 50;

    let progress = setInterval(() => {

      progressStartValue++;

      progressvalue.textContent = `${progressStartValue}%`;
      numberScale.style.background = `conic-gradient(#a01737 ${progressStartValue * 3.6}deg, #ededed 0deg)`;
      if(progressStartValue == lovePercentage){
        clearInterval(progress);

      }

    
    }, speed);


    // let text_res = document.getElementById("textResult")
    if (lovePercentage >= 80){
      document.getElementById('textResult').innerHTML = `Stay away from candles - your relationship is hot enough already!`;
    }
    else if(lovePercentage >=50){
      document.getElementById('textResult').innerHTML = `You guys would rather spend a lifetime with each other than face all the ages of this world alone.`;
    }
    else{
      document.getElementById('textResult').innerHTML = `Love Guru thinks that this relationship has a chance of working out, but on the other hand, it might not.`;
    }
  }


var closeBtn = document.getElementById("close-btn");
var popup1 = document.getElementById("popup1");
var calcBtn = document.getElementById('calcBtn');

function handleClick(){

  popup1.style.display = "none";
  document.getElementById('yourName').value = "";
  document.getElementById('partnerName').value = "";
  // document.getElementById("popup1").classList.toggle("inactive");
}

closeBtn.onclick = function() {
  handleClick();
  calcBtn.onclick = calculateLove; // Re-bind calculateLove to calcBtn
};

// Initial binding of calculateLove to calcBtn
calcBtn.onclick = calculateLove;
