let myRequest = new Request('word.json');
fetch(myRequest)
   .then(function(resp) {
      return resp.json();
   })
   .then(function(data) {
      let word = 0;
      let count = 0;
      const counter = document.querySelector('#num');  
      counter.innerHTML = count; 
      let streak = 0;
      const streaker = document.querySelector('#num2');  
      streaker.innerHTML = streak; 
      let percentage = 0;
      const per = document.querySelector('#num3');
      per.innerHTML = percentage + '%';
      const pe = document.querySelector('#randomE')
      const pi = document.querySelector('#randomI')
      const randomItem = data[Math.floor(Math.random() * data.length)]
      const itemE = randomItem[Object.keys(randomItem)[0]] 
      let itemI = randomItem[Object.keys(randomItem)[1]]        
      
      pe.innerHTML = itemE;  

      const button = document.querySelector('#btn');
      button.addEventListener('click', () => {
         word ++;
         const input = document.querySelector('#input').value;        
         if(input === itemI.toLowerCase()){
            pi.innerHTML = `<i class="fa fa-check fa-lg"></i>`;
            count ++; streak ++;
            streaker.innerHTML = streak;
            counter.innerHTML = count; 
         } else {
            pi.innerHTML = `<i class="fa fa-times fa-lg"></i> ${itemI}`;
            streak = 0;
            streaker.innerHTML = streak;
         } itemI = '';
         per.innerHTML = Math.round(count/word * 100) + ' %'
      });
      
      const nextWord = document.querySelector('#next');
      nextWord.addEventListener('click', function(){
         input.value = '';
         const randomItem = data[Math.floor(Math.random() * data.length)]        
         const itemE = randomItem[Object.keys(randomItem)[0]];
         itemI = randomItem[Object.keys(randomItem)[1]];
         console.log("Drugi ", itemI);
         
         pe.innerHTML = itemE;
         input ? pi.innerHTML = '' : pi.innerHTML = `<i class="fa fa-times fa-lg"></i> ${itemI}`        
      }) 
   })