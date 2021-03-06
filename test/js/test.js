
  let notifyArray = ['primary', 'success', 'info', 'warning', 'danger', 'primary', 'success','info', 'warning', 'danger']

  document.addEventListener("click", inputElements, true);

  function inputElements(event){
      let trgElem = event.target;
      let random = Math.floor(Math.random()*10);
      let rnd;
        rnd = random;
      if(trgElem.tagName === 'BUTTON'){
          switch(trgElem.id){
            case 'topleft' :
                let notifytopleft;
                if(notifytopleft === undefined){
                  let notifytopleft = new Notify({  insertPosition : 'first',
                                                    autoHideTime : 2000,
                                                    showDuration : 1000,
                                                    showTransition : 'wall',
                                                    hPosition : 'left',
                                                    vPosition : 'top'});
                  let random = Math.floor(Math.random()*10);
                  notifytopleft.show(null,notifyArray[rnd]);
                }else{
                  notifytopleft.show();
                };
              break;
            case 'topright' :
                let notifytopright;
                if(notifytopright === undefined){
                  let notifytopright = new Notify({ insertPosition : 'first',
                                                    autoHideTime : 2000,
                                                    showDuration : 1000,
                                                    showTransition : 'jelly',
                                                    hPosition : 'right',
                                                    vPosition : 'top'});
                  notifytopright.show(null,notifyArray[rnd]);
                }else{
                  notifytopright.show();
                };
              break;
            case 'bottomleft' :
                let notifybottomleft;
                if(notifybottomleft === undefined){
                  let notifybottomleft = new Notify({ insertPosition : 'first',
                                                      autoHideTime : 2000,
                                                      showDuration : 1000,
                                                      hPosition : 'left',
                                                      vPosition : 'bottom'});
                  notifybottomleft.show(null,notifyArray[rnd]);
                }else{
                  notifybottomleft.show();
                };
              break;
            case 'bottomright' :
                let notifybottomright;
                if(notifybottomright === undefined){
                  let notifybottomright = new Notify({  insertPosition : 'first',
                                                        autoHideTime : 2000,
                                                        showDuration : 1000,
                                                        hPosition : 'right',
                                                        vPosition : 'bottom'});
                  notifybottomright.show(null,notifyArray[rnd]);
                }else{
                  notifybottomright.show();
                };
              break;
            case 'top' :
                let notifytop;
                if(notifytop === undefined){
                  let notifytop = new Notify({ notifyType : 'block',
                                               vPosition : 'top'});
                  notifytop.show(null,notifyArray[rnd]);
                }else{
                  notifytop.show();
                };
              break;
            case 'bottom' :
                let notifybottom;
                if(notifybottom === undefined){
                  let notifybottom = new Notify({ notifyType : 'block',
                                                  vPosition : 'bottom'});
                  notifybottom.show(null,notifyArray[rnd]);
                }else{
                  notifybottom.show();
                };
              break;
            default :
             return false;
          }
        }
    }
