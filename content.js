let videoElement;

const getVideoElement = () => {
    if (!videoElement) {
        videoElement = document.querySelector('video');
    }
    return videoElement;
}
console.log("called content js successfully");
const checkForAds = () => {
  //  console.log('check');
      // console.log(!!document.querySelector('.ad-showing'));
    const video = getVideoElement();

    if (video !== null)
     {    
      //console.log(">> " + video.muted )
      
    //   // YouTube typically has a class 'ad-showing' when an ad is playing
      if (!!document.querySelector('.ad-showing')) {
        // console.log('Ad');
        video.muted = true;
    //     // If skip ad button is present, click it
        const skipAdButton = [...document.querySelectorAll('button')].find(button => button.innerText.includes('Skip Ad'));
        if(skipAdButton) {
          skipAdButton.click();
          // console.log("'Skip Ad' present");
          }
      }
    
      const muteButton = document.evaluate("//button[@aria-label='Mute keyboard shortcut m']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
      if (muteButton) {
        video.muted = false;
        // console.log('Unmute');
      }else{
        video.muted = true;
        // console.log('Muted');
      }
    }
    // else
    // console.log(" not on watch page "  )
}  

// Check for ads every .1 seconds
setInterval(checkForAds, 100);
