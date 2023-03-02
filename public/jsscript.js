
  

     function A2submiting()
     {  
       
 
      var State = document.getElementById("AState").value; 
      var City = document.getElementById("ACity").value; 
      var TypeoftheResources = document.getElementById("ATypeofResources").value; 
      var NameoftheDonarOrganisation = document.getElementById("AUsername").value; 
      var DonarContact = document.getElementById("APhone").value; 
      var Score = document.getElementById("AScore").value; 
      var RecentReply = document.getElementById("ARecentReply").value; 
      var VerifiedOn = document.getElementById("AVerifiedon").value; 
      var Status = document.getElementById("AStatus").value; 
      var Share = document.getElementById("AShare").value; 
      var x=0;
 
     /*  firebase.database().ref('/Upload ref/'+State+'/'+City+'/'+TypeoftheResources+'/').once('value',(snap)=>{
       console.log(snap.val());
              
     });*/
  
     var leadsRef = database.ref('/Upload ref/'+State+'/'+City+'/'+TypeoftheResources+'/');
      //leadsRef.once('value', function(snapshot){
      leadsRef.get().then((snapshot) => {
    
 
         if(snapshot.exists())
             {
 
 
               snapshot.forEach(function(childSnapshot) 
               {
               var childData = childSnapshot.val();
 
 
               
                 console.log(childData.NameoftheDonarOrganisation);
                 
                 if(DonarContact==childData.DonarContact&&NameoftheDonarOrganisation==childData.NameoftheDonarOrganisation)
                 {
                   x=1;
                 }
                 
 
               });
               
               if(x==0)
                 {
                   
                       console.log("In the First First");
                       // A post entry.
                       var postData = {
                                       
                         NameoftheDonarOrganisation: NameoftheDonarOrganisation,
                         DonarContact: DonarContact,
                        
                         Status:Status,
                         RecentReply:RecentReply,
                         VerifiedOn:VerifiedOn,
                         Score:Score,
                         Share:Share
                         
                         
                       };
                     
                       // Get a key for a new Post.
                       //var newPostKey = firebase.database().ref("Upload res").child(State).push().key;
                       // Write the new post's data simultaneously in the posts list and the user's post list.
                     // var updates = {};
                     // updates['/Upload ref/'+State+'/'+City+'/'+TypeoftheResources+'/' ] = postData;
 
                       firebase.database().ref('/Upload ref/'+State+'/'+City+'/'+TypeoftheResources+'/').push(postData);
                     // firebase.database().ref().update(updates);
                     
                   
                 }
 
 
               
 
             }
             else
 
             {
                        console.log("No data available of this state! Uploading now.......");
 
 
                        var postData = {
                         
                          NameoftheDonarOrganisation: NameoftheDonarOrganisation,
                          DonarContact: DonarContact,
                          Status:Status,
                          RecentReply:RecentReply,
                          VerifiedOn:VerifiedOn,
                          Score:Score,
                          Share:Share
                         };
                     
                       
                      firebase.database().ref('/Upload ref/'+State+'/'+City+'/'+TypeoftheResources+'/').push(postData);
                     
                      // firebase.database().ref().update(updates);
             }
 
      }).catch((error) => {
       console.error(error);
    });
 
       
     }
     
    function submiting()
    {  
      

      var State = document.getElementById("State").value; 
      var City = document.getElementById("City").value; 
      var TypeoftheResources = document.getElementById("TypeofResources").value; 
      var NameoftheDonarOrganisation = document.getElementById("NameoftheDonarOrganisation").value; 
      var DonarContact = document.getElementById("DonarContact").value; 
      var x=0;

    
     


    /*  firebase.database().ref('/Upload ref/'+State+'/'+City+'/'+TypeoftheResources+'/').once('value',(snap)=>{
      console.log(snap.val());
             
    });*/


 
    var leadsRef = database.ref('/UploadByUser/'+State+'/'+City+'/'+TypeoftheResources+'/');
     //leadsRef.once('value', function(snapshot){
     leadsRef.get().then((snapshot) => {
   

        if(snapshot.exists())
            {


              snapshot.forEach(function(childSnapshot) 
              {
              var childData = childSnapshot.val();


              
                console.log(childData.NameoftheDonarOrganisation);
                
                if(DonarContact==childData.DonarContact&&NameoftheDonarOrganisation==childData.NameoftheDonarOrganisation)
                {
                  x=1;
                }
                

              });
              
              if(x==0)
                {
                  
                      console.log("In the First First");
                      // A post entry.
                      var postData = {
                                      
                        NameoftheDonarOrganisation: NameoftheDonarOrganisation,
                        DonarContact: DonarContact,
                        
                      };
                    
                      // Get a key for a new Post.
                      //var newPostKey = firebase.database().ref("Upload res").child(State).push().key;
                      // Write the new post's data simultaneously in the posts list and the user's post list.
                    // var updates = {};
                    // updates['/Upload ref/'+State+'/'+City+'/'+TypeoftheResources+'/' ] = postData;

                      firebase.database().ref('/UploadByUser/'+State+'/'+City+'/'+TypeoftheResources+'/').push(postData);
                    // firebase.database().ref().update(updates);
                    
                  
                }


              

            }
            else

            {
                       console.log("No data available of this state! Uploading now.......");


                       var postData = {
                        
                        NameoftheDonarOrganisation: NameoftheDonarOrganisation,
                        DonarContact: DonarContact,
                        };
                    
                      
                     firebase.database().ref('/UploadByUser/'+State+'/'+City+'/'+TypeoftheResources+'/').push(postData);
                    
                     // firebase.database().ref().update(updates);
            }

     }).catch((error) => {
      console.error(error);
   });

      
    }




    function Asubmiting()
    {  
      

      var State = document.getElementById("AState").value; 
      var City = document.getElementById("ACity").value; 
      var TypeoftheResources = document.getElementById("ATypeofResources").value; 
      var NameoftheDonarOrganisation = document.getElementById("AUsername").value; 
      var DonarContact = document.getElementById("APhone").value; 
      var Score = document.getElementById("AScore").value; 
      var RecentReply = document.getElementById("ARecentReply").value; 
      var VerifiedOn = document.getElementById("AVerifiedon").value; 
      var Status = document.getElementById("AStatus").value; 
      var Share = document.getElementById("AShare").value; 

  

    /*  firebase.database().ref('/Upload ref/'+State+'/'+City+'/'+TypeoftheResources+'/').once('value',(snap)=>{
      console.log(snap.val());
             
    });*/


 
    var leadsRef = database.ref('/Upload ref/'+State+'/'+City+'/'+TypeoftheResources+'/');
     //leadsRef.once('value', function(snapshot){
     leadsRef.get().then((snapshot) => {
   

        if(snapshot.exists())
            {

              snapshot.forEach(function(childSnapshot) {

                var childData = childSnapshot.val();

                console.log(childData.NameoftheDonarOrganisation);
                console.log(childData.DonarContact);
                var kez=childSnapshot.key;
                console.log(kez);
                
              
              
                if(childData.NameoftheDonarOrganisation==NameoftheDonarOrganisation||childData.DonarContact==DonarContact)
                {
                  

                      if(childData.hasOwnProperty('Score'))
                      {
                            console.log("calculating score")
                          
                            var scorecal=parseInt(childData.Score);
                            var scorecal2=parseInt(Score);
                            Score=scorecal+scorecal2;
                      }

                  
                      else
                      {

                        console.log("we dont have score for this one")
                        
                      }

                      console.log("In Update section");

                  

                      // A post entry.
                      var postData = {
                                      
                        NameoftheDonarOrganisation: NameoftheDonarOrganisation,
                        DonarContact: DonarContact,
                        Status:Status,
                        RecentReply:RecentReply,
                        VerifiedOn:VerifiedOn,
                        Score:Score,
                        Share:Share
                      };
                    
                      // Get a key for a new Post.
                      //var newPostKey = firebase.database().ref("Upload res").child(State).push().key;
                      // Write the new post's data simultaneously in the posts list and the user's post list.
                     //var updates = {};
                    //updates['/Upload ref/'+State+'/'+City+'/'+TypeoftheResources+'/' ] = postData;

                      

                      firebase.database().ref('/Upload ref/'+State+'/'+City+'/'+TypeoftheResources+'/'+kez+'/').set(postData);
                    // firebase.database().ref().update(updates);
                  
                    
                  
                }

              });


              

            }
            else

            {
                       console.log("No data found for update.......");


                      
                    
            }

     }).catch((error) => {
      console.error(error);
   });

      
    }



  
   
    function viewing()

    {

     
      
      var VState = document.getElementById("VState").value; 
      var VCity = document.getElementById("VCity").value; 
      var VTypeoftheResources = document.getElementById("VTypeofResources").value;          
      var table = document.getElementById("Mytable");
      table.innerHTML="";
      var temp;
      var temp2;
      
      var s=0;
      var finallist=[];
      var x=0;
      var nameid;
      var phoneid;
      var temp2;
      var verifiedonid;
      var statusid;
      var recentreplyid;
      var share;

      
      var leadsRef = database.ref('/Upload ref/'+VState+'/'+VCity+'/'+VTypeoftheResources+'/');

     // leadsRef.on('value', function(snapshot) {

      leadsRef.get().then((snapshot) => {

        if (snapshot.exists()) 
        {
          var i =0;
          console.log("the list is below");

                      
                        var counting=0;
                        var counter=0;

                       // counting the elements keyssss
       
                        snapshot.forEach(function(childSnapshot) {


                          counting++;

                        });  
                      
                        //Outside loop start setting pointer at 0
                        while(counter<counting)
                        {

                          

                          snapshot.forEach(function(childSnapshot) {


                            // pointer
                            var nono=0;                                
                            var childData = childSnapshot.val();
                            temp=childData.Score;
                            
                            for(var g=0;g<finallist.length;g++)
                            {
                                                        
                               if (finallist[g].NameoftheDonarOrganisation==childData.NameoftheDonarOrganisation&&finallist[g].DonarContact==childData.DonarContact)
                              {
                               nono=1;                               
                              }
                              
                            }
                         
                         if(nono==0)
                         {
                          
                               snapshot.forEach(function(childSnapshot2) {

                                //start matching with pointer

                               var childData2 = childSnapshot2.val();
                               


                               //checking again to skip elements when finding biggest

                             
                                
                                 
                                   
                                 
                                      if(temp<=childData2.Score)
                                      {           



                                        var fg=0;


                                        for(var g=0;g<finallist.length;g++)
                                        {
          
                                          
                                            if (finallist[g].NameoftheDonarOrganisation==childData2.NameoftheDonarOrganisation&&finallist[g].DonarContact==childData2.DonarContact)
                                          {
                                            fg=1;
                                            
                                          }
                                          
                                        }
                                        if(fg==0)
                                        {

                                        
                                        
                                        
                                        temp=childData2.Score;
                                        phoneid=childData2.DonarContact;
                                        nameid=childData2.NameoftheDonarOrganisation;
                                        share=childData2.Share;
                                        if(childData2.VerifiedOn==null)
                                        {
                                          verifiedonid="nill"
                                        }
                                        else{
                                          verifiedonid=childData2.VerifiedOn;
                                        }
                                        if(childData2.Status==null)
                                        {
                                          statusid="nill"
                                        }
                                        else{
                                          statusid=childData2.Status;
                                        }
                                        if(childData2.RecentReply==null)
                                        {
                                          recentreplyid="nill"
                                        }
                                        else{
                                          recentreplyid=childData2.RecentReply;
                                        }                                       

                                      }


                                    }
                                

                              });
                             
                            

                    
                            var temp3={'NameoftheDonarOrganisation':nameid, 'DonarContact':phoneid,'Status':statusid,'RecentReply':recentreplyid, 'Score':temp, 'VerifiedOn':verifiedonid,"Share":share };
                        
                            finallist.push(temp3);

                              


                        }
                       

                    });  


                  
                counter++

                
              }

 
                 var i=0;
                 var entryofthetable=0;
                                                                                            
                 while(entryofthetable<counter)
                 {                                                                                   
                var Responsiveness="Not Responsive";

                if(finallist[i].Score>5&&finallist[i].Score<=7)
                {
                  Responsiveness="Very Responsive";
                }
                if(finallist[i].Score>7)
                {
                  Responsiveness="Highly Responsive";
                }
                if(finallist[i].Score>0&&finallist[i].Score<=5)
                {
                  Responsiveness="Sometimes Responds";
                }
                if(finallist[i].Score==0)
                {
                  Responsiveness="waiting for Response";
                }
                if(finallist[i].Score<0)
                {
                  Responsiveness="Going to be deleted";
                }

                var dataf="Not Answering Calls";

                if(finallist[i].VerifiedOn!="nill")
                {

                 var datecor=finallist[i].VerifiedOn;
                 dataf="";
                for(d=0;d<datecor.length;d++)
                {
                  
                  if(datecor[d]==":")
                  {
                    if(d<=2)
                    {
                    dataf=dataf+"hr";
                    }
                    if(d>2&&d<=5)
                    {
                      dataf=dataf+"min"

                    }
                   

                  }
                  else if(datecor[d]==" "&&(d>5&&d<=8))
                  {
                    dataf=dataf+"sec"+" "+"on"+" ";
                  }
                  dataf=dataf+datecor[d];



                  

                }



              }
              if(finallist[i].Share=="Yes")
              {
                console.log(finallist[i].Share)

                 var row= table.insertRow(entryofthetable)
                 row.innerHTML= '<div class="h-full flex items-center border-gray-200 border p-4 rounded-lg"> <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://cdn.pixabay.com/photo/2015/04/06/17/52/cross-709694_960_720.jpg"> <div class="flex-grow"> <h2 class="text-gray-900 title-font font-medium namevb " style="font-weight:bold">'+finallist[i].NameoftheDonarOrganisation+'</h2> <p class="text-gray-500 phonevb" >'+finallist[i].DonarContact+'</p> <p class="text-gray-500 typevb">'+VTypeoftheResources+'</p> <p class="text-gray-500 verifyvb">Status: '+finallist[i].Status+'</p><p class="text-gray-500 phonevb">Verified at: '+dataf+'</p><p class="text-gray-500 phonevb" >Recent Reply: "'+finallist[i].RecentReply+'"</p><p class="text-gray-500 phonevb" >Score: '+Responsiveness+'</p></div> </div>  ';
                 row.id="rno"+entryofthetable;
                 console.log(row.id);
                 entryofthetable++;

              }


                 i++;

                 }
                                
                                                                                                                                               

         }
         else
        {
          console.log("No data available");
          alert("No resources of this type are available in this city!   You can post your requirement in Get Help Section")
        }





                      

    }).catch((error) => {
      console.error(error);
   });

 
  
    }
  
   
   function posting()
   {  
     

     var PState = document.getElementById("PState").value; 
     var PCity = document.getElementById("PCity").value; 
     var PTypeoftheResources = document.getElementById("PTypeofResources").value; 
     
     var NameofthePerson = document.getElementById("NameofthePerson").value; 
     var PersonContact = document.getElementById("PersonContact").value; 
     var x =0;

   var leadsRef = database.ref('/req post/'+PState+'/'+PCity+'/');
    //leadsRef.once('value', function(snapshot){
    leadsRef.get().then((snapshot) => {
  

       if(snapshot.exists())
           {


             snapshot.forEach(function(childSnapshot) 
             {
             var childData = childSnapshot.val();
             
               console.log(childData.NameofthePerson);
               
               if(PersonContact==childData.PersonContact&&NameofthePerson==childData.NameofthePerson)
               {
                 alert("please wait we have your details we will provide resources soon !");
                 x=1;
               }
               

             });
             
             if(x==0)
               {
                 
                     console.log("In the First First");
                     // A post entry.
                     var postData = {
                                     
                      NameofthePerson: NameofthePerson,
                      PersonContact: PersonContact,
                      TypeoftheResources:PTypeoftheResources
                     };
                  
                     firebase.database().ref('/req post/'+PState+'/'+PCity+'/').push(postData);
                     alert("Submitted Successfully");
                  
                 
               }


           }
           else

           {
                      console.log("No data available of this state! Uploading now.......");


                      var postData = {
                       
                        NameofthePerson: NameofthePerson,
                        PersonContact: PersonContact,
                        TypeoftheResources:PTypeoftheResources
                       };
                   
                    
                    firebase.database().ref('/req post/'+PState+'/'+PCity+'/').push(postData);
                    alert("Submitted Successfully");
                   
                    
           }

    }).catch((error) => {
     console.error(error);
  });

     
   }






   function reqviewing()
   {

    

     var UState = document.getElementById("UState").value; 
     var UCity = document.getElementById("UCity").value; 
     
        

     var leadsRef = database.ref('/req post/'+UState+'/'+UCity+'/');

     var table = document.getElementById("Mytable");
     table.innerHTML=" ";


    // leadsRef.on('value', function(snapshot) {
     leadsRef.get().then((snapshot) => {

       if (snapshot.exists()) 
       {


          var iy=0;



                               snapshot.forEach(function(childSnapshot) {

                            
                               var childData = childSnapshot.val();

                               console.log(childData.NameofthePerson);

                             //  addRow();

                            
                               
                               var row = table.insertRow(iy);
                              
                              
                               row.id="rno"+iy;

                               row.innerHTML= '<div class="h-full flex items-center border-gray-200 border p-4 rounded-lg"> <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://cdn.pixabay.com/photo/2015/04/06/17/52/cross-709694_960_720.jpg"> <div class="flex-grow"> <h2 class="text-gray-900 title-font font-medium "> '+childData.NameofthePerson+'</h2> <p class="text-gray-500 " > '+childData.PersonContact+'</p> <p class="text-gray-500 ">Urgent Requirement '+childData.TypeoftheResources+'</p> <p class="text-gray-500 ">'+UState+'</p><p class="text-gray-500 ">'+UCity+'</p></div> </div>  ';

                    
                               iy++;


                          
                                         
                       });

        }
        else
       {
         console.log("No data available");
         alert(" no one found   !!!")
       }
                     
   }).catch((error) => {
     console.error(error);
  });


   }





   function ADelete()
   {

    

     var AState = document.getElementById("AState").value; 
     var ACity = document.getElementById("ACity").value; 
     var ATypeoftheResources = document.getElementById("ATypeofResources").value; 
     var APhone = document.getElementById("APhone").value; 
     var AUsername = document.getElementById("AUsername").value;
     var AShare = document.getElementById("AShare").value;


     
        

     var leadsRef = database.ref('/Upload ref/'+AState+'/'+ACity+'/'+ATypeoftheResources+'/');

    


    // leadsRef.on('value', function(snapshot) {
     leadsRef.get().then((snapshot) => {

       if (snapshot.exists()) 
       {


          var iy=0;



                               snapshot.forEach(function(childSnapshot) {

                                var kez=childSnapshot.key;

                            
                               var childData = childSnapshot.val();

                               console.log(childData.NameoftheDonarOrganisation);

                             //  addRow();

                                    if(childData.NameoftheDonarOrganisation==AUsername&&childData.DonarContact==APhone)
                                    {

                                      firebase.database().ref('/Upload ref/'+AState+'/'+ACity+'/'+ATypeoftheResources+'/'+kez+'/').remove();
                                    }

                                        
                               
                             


                          
                                         
                       });

        }
        else
       {
         console.log("No data available");
         alert(" no one found   !!!")
       }
                     
   }).catch((error) => {
     console.error(error);
  });


   }


   function QuickDelete()
   {

    



    
     var leadsRef = database.ref('/Upload ref/');
     //leadsRef.on('value', function(snapshot) {
       leadsRef.get().then((snapshot) => {

       if (snapshot.exists()) 
         {
           var i=0;


                       snapshot.forEach(function(childSnapshot) {
                         
                       var statename=childSnapshot.key;
                         


                       childSnapshot.forEach(function(childSnapshot2) {


                         var cityname=childSnapshot2.key;

                         



                       childSnapshot2.forEach(function(childSnapshot3) {

                         var kehrires=childSnapshot3.key;
     


                       childSnapshot3.forEach(function(childSnapshot4) {
                       
                       var childData = childSnapshot4.val();


                       console.log(childData.NameoftheDonarOrganisation);

                     

                    /* var table = document.getElementById("Mytable");
                    


                       row=table.insertRow(i);
                       
                       row.innerHTML= '<div class="h-full flex items-center border-gray-200 border p-4 rounded-lg"> <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://cdn.pixabay.com/photo/2015/04/06/17/52/cross-709694_960_720.jpg"> <div class="flex-grow"> <h2 class="text-gray-900 title-font font-medium namevr">'+childData.NameoftheDonarOrganisation+'</h2> <p class="text-gray-500 phonevr" >'+childData.DonarContact+'</p> <p class="text-gray-500 typevr">'+kehrires+'</p> <p class="text-gray-500 statevr">'+statename+'</p><p class="text-gray-500 cityvr">'+cityname+'</p><p class="text-gray-500 statusvr">'+childData.Status+'</p><p class="text-gray-500 scorevr">'+childData.Score+'</p><p class="text-gray-500 replyvr">'+childData.RecentReply+'</p></div> </div>  ';
                       row.id="rno"+i;
                       
                       i++;     */
                        
                       childSnapshot3.forEach(function(childSnapshot4) {
                       
                        var childData2 = childSnapshot4.val();
 

                        if(childData.NameoftheDonarOrganisation==childData2.NameoftheDonarOrganisation)
                        {

                        }


                          
                       });


      
                       });

               
             });


             });


           });   
             
             

         }
         else
         {
           alert("No data available");
           
         }


     }).catch((error) => {
       console.error(error);
   });





   }

   /* function submiting()
    {  
      

      var State = document.getElementById("State").value; 
      var City = document.getElementById("City").value; 
      var TypeoftheResources = document.getElementById("TypeofResources").value; 
      var NameoftheDonarOrganisation = document.getElementById("NameoftheDonarOrganisation").value; 
      var DonarContact = document.getElementById("DonarContact").value; 
      var x=0;

      var checkboxval=document.getElementById("verify").value;
    
     


    // firebase.database().ref('/Upload ref/'+State+'/'+City+'/'+TypeoftheResources+'/').once('value',(snap)=>{
      //console.log(snap.val());
             
    });


 
    var leadsRef = database.ref('/Upload ref/'+State+'/'+City+'/'+TypeoftheResources+'/');
     //leadsRef.once('value', function(snapshot){
     leadsRef.get().then((snapshot) => {
   

        if(snapshot.exists())
            {


              snapshot.forEach(function(childSnapshot) 
              {
              var childData = childSnapshot.val();


              
                console.log(childData.NameoftheDonarOrganisation);
                
                if(DonarContact==childData.DonarContact&&NameoftheDonarOrganisation==childData.NameoftheDonarOrganisation)
                {
                  alert("Hello! this record already exist Thank you for your time !");
                  x=1;
                }
                

              });
              
              if(x==0)
                {
                  
                      console.log("In the First First");
                      // A post entry.
                      var postData = {
                                      
                        NameoftheDonarOrganisation: NameoftheDonarOrganisation,
                        DonarContact: DonarContact,
                        Verified:checkboxval
                        
                      };
                    
                      // Get a key for a new Post.
                      //var newPostKey = firebase.database().ref("Upload res").child(State).push().key;
                      // Write the new post's data simultaneously in the posts list and the user's post list.
                    // var updates = {};
                    // updates['/Upload ref/'+State+'/'+City+'/'+TypeoftheResources+'/' ] = postData;

                      firebase.database().ref('/Upload ref/'+State+'/'+City+'/'+TypeoftheResources+'/').push(postData);
                    // firebase.database().ref().update(updates);
                    alert("Submitted Successfully ! Thank you for the contribution.");
                    
                  
                }


              

            }
            else

            {
                       console.log("No data available of this state! Uploading now.......");


                       var postData = {
                        
                        NameoftheDonarOrganisation: NameoftheDonarOrganisation,
                        DonarContact: DonarContact,
                        Verified:checkboxval
                        };
                    
                      
                     firebase.database().ref('/Upload ref/'+State+'/'+City+'/'+TypeoftheResources+'/').push(postData);
                     alert("Submitted Successfully  ! Thank you for the contribution. ");
                    
                     // firebase.database().ref().update(updates);
            }

     }).catch((error) => {
      console.error(error);
   });

      
    }

    */
  

   

  



      

