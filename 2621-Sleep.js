async function sleep(millis) {
    return new Promise(resolve => {
     setTimeout(() => {
       resolve(console.log(millis));
     }, millis);
   });
 }

 sleep(3000)