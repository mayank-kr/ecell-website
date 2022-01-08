
const Technical = document.querySelector('#Technical');
const Marketing = document.querySelector('#Marketing');
const P_R = document.querySelector('#PR');
const Event_management = document.querySelector('#Event_Management');
const Core = document.querySelector('#Core');





const val = [
     {   
    "Team":"Core",
    "name":"Dr. Nilkanta Sahu",
    "pos":"Faculty In-charge",
    "img":"team/images/nilkanta_sahu.jpg",
    "LinkedIn":"https://www.linkedin.com/in/nilkanta-sahu-8191244a/",
    "Gmail":"mailto:nilkanta@iiitg.ac.in"
    },{   
    "Team":"Core",
    "name":"Akshit Rao",
    "pos":"Head Coordinator",
    "img":"team/images/22.jpg",
    "LinkedIn":"https://www.linkedin.com/in/raoakshit/",
    "Gmail":"mailto:akshit.rao@iiitg.ac.in"
    },
    {   
    "Team":"EM",
    "name":"Shruti Sharan",
    "pos":"Head",
    "img":"team/images/15.jpg",
    "LinkedIn":"https://www.linkedin.com/in/shruti-sharan-iiitg",
    "Gmail":"shruti.sharan@iiitg.ac.in"
    },
    {   
    "Team":"PR",
    "name":"Shivangi Prasad",
    "pos":"Head",
    "img":"team/images/13.png",
    "LinkedIn":"https://www.linkedin.com/in/shivangi-prasad-903760202/",
    "Gmail":"shivangi.prasad@iiitg.ac.in"
    },
    {   
    "Team":"Mkt",
    "name":"Kunal Singh",
    "pos":"Head",
    "img":"team/images/11.jpg",
    "LinkedIn":"https://www.linkedin.com/in/kunal-singh-1704601b5/",
    "Gmail":"kunal.singh@iiitg.ac.in"
    },{   
    "Team":"PR",
    "name":"Shobit Belwal",
    "pos":"Member",
    "img":"team/images/1.png",
    "LinkedIn":"https://www.linkedin.com/in/shobhit-belwal-26420a191",
    "Gmail":"shobhit.belwal@iiitg.ac.in"
    },
     {   
    "Team":"Tech",
    "name":"Mayank Kumar",
    "pos":"Head",
    "img":"team/images/20.jpg",
    "LinkedIn":"https://www.linkedin.com/in/mayank-kumar2002/",
    "Gmail":"mayank.kumar@iiitg.ac.in"
    },
    {   
    "Team":"Tech",
    "name":"Nikhil Maurya",
    "pos":"Member",
    "img":"team/images/2.jpeg",
    "LinkedIn":"https://www.linkedin.com/in/nikhilmaurya",
    "Gmail":"maurya.kumar@iiitg.ac.in"
    },
    {   
    "Team":"Tech",
    "name":"Naman Singh Nayal",
    "pos":"Member",
    "img":"team/images/3.jpg",
    "LinkedIn":"https://www.linkedin.com/in/naman-singh-nayal-8364b5202",
    "Gmail":"naman.nayal@iiitg.ac.in"
    },
    {   
    "Team":"Tech",
    "name":"Vamshi",
    "pos":"Member",
    "img":"team/images/21.jpeg",
    "LinkedIn":"https://www.linkedin.com/in/vamshi-nayak-073464201/",
    "Gmail":"k.nayak@iiitg.ac.in"
    },
    {   
    "Team":"Mkt",
    "name":"Aayush Nigam",
    "pos":"Member",
    "img":"team/images/4.png",
    "LinkedIn":"https://www.linkedin.com/in/aayush-nigam-b0a5671aa",
    "Gmail":"aayush.nigam@iiitg.ac.in"
    },
    {   
    "Team":"Mkt",
    "name":"Khushi Garg",
    "pos":"Member",
    "img":"team/images/5.jpg",
    "LinkedIn":"https://www.linkedin.com/in/khushi-garg-96682a11a/",
    "Gmail":"khushi.garg@iiitg.ac.in"
    },
    {   
    "Team":"EM",
    "name":"Laxita Sodhani",
    "pos":"Member",
    "img":"team/images/6.jpg",
    "LinkedIn":"https://www.linkedin.com/in/laxita-sodhani-58b750202",
    "Gmail":"laxita.sodhani@iiitg.ac"
    },
    {   
    "Team":"PR",
    "name":"Yogesh Tiwari",
    "pos":"Member",
    "img":"team/images/7.jpg",
    "LinkedIn":"https://www.linkedin.com/in/yogesh-tiwari-5a44b8202",
    "Gmail":"yogesh.tiwari@iiitg.ac.in"
    },
     {   
    "Team":"Mkt",
    "name":"Aarushi Gajre",
    "pos":"Member",
    "img":"team/images/8.jpg",
    "LinkedIn":"https://www.linkedin.com/in/aarushi-gajre-6aa650202",
    "Gmail":"aarushi.gajre@iiitg.ac.in "
    },
     {   
    "Team":"Mkt",
    "name":"Purvi Das",
    "pos":"Member",
    "img":"team/images/9.jpg",
    "LinkedIn":"https://www.linkedin.com/in/purvi-das/",
    "Gmail":"purvi.das@iiitg.ac.in"
    },
    {   
    "Team":"EM",
    "name":"Shikhar Barthwal",
    "pos":"Member",
    "img":"team/images/10.jpg",
    "LinkedIn":"https://www.linkedin.com/in/shikhar-barthwal-994491201/",
    "Gmail":"shikhar.barthwal@iiitg.ac.in"
    },
    {   
    "Team":"EM",
    "name":"Ayush Jitendra Pawar",
    "pos":"Member",
    "img":"team/images/12.jpg",
    "LinkedIn":"https://www.linkedin.com/in/ayush-pawar-847209191",
    "Gmail":"pawar.jitendra@iiitg.ac.in"
    },{   
    "Team":"PR",
    "name":"Aastik Gaur",
    "pos":"Member",
    "img":"team/images/14.jpg",
    "LinkedIn":"https://www.linkedin.com/in/aastik-gaur-477633227/",
    "Gmail":"aastik.gaur@iiitg.ac.in"
    },{   
    "Team":"Mkt",
    "name":"Dabaleena Chakraborty",
    "pos":"Member",
    "img":"team/images/16.jpg",
    "LinkedIn":"https://www.linkedin.com/in/debaleena-chakraborty56/",
    "Gmail":"debaleena.chakraborty@iiitg.ac.in"
    },{   
    "Team":"Tech",
    "name":"Amitesh Kumar",
    "pos":"Member",
    "img":"team/images/17.jpg",
    "LinkedIn":"https://www.linkedin.com/in/amitesh-kumar-ak/",
    "Gmail":"amitesh.kumar@iiitg.ac.in"
    },{   
    "Team":"Tech",
    "name":"Ankit Kumar",
    "pos":"Member",
    "img":"team/images/18.jpg",
    "LinkedIn":"https://www.linkedin.com/in/mynameisankit/",
    "Gmail":"ankit.kumar19@iiitg.ac.in"
    },{   
    "Team":"PR",
    "name":"Anisha Prajapati",
    "pos":"Member",
    "img":"team/images/19.jpeg",
    "LinkedIn":"http://linkedin.com/in/anisha-prajapati-810835196",
    "Gmail":"anisha.prajapati@iiitg.ac.in"
    }

];

for(let i = 0;i<val.length;i++){
    var item = document.createElement('div');
    item.setAttribute('class','item');
    item.innerHTML+='<img src='+val[i]["img"]+' alt=team /><div class="inner"><div class="info"><h5>'+val[i]["name"]+'</h5><p>'+val[i]["pos"]+'</p><div class="social-links"> <a href='+val[i]["LinkedIn"]+'><span class="fa fa-linkedin"></span></a><a href="mailto:'+val[i]["Gmail"] +'"><span class="fa fa-envelope"></span></a></div></div></div>';
    
    if(val[i]["Team"]=="Tech"){
        Technical.append(item);
    }
    else if(val[i]["Team"]=="Mkt"){
        Marketing.append(item);
    }
    else if(val[i]["Team"]=="PR"){
        P_R.append(item);
    }
    else if(val[i]["Team"]=="EM"){
        Event_management.append(item);
    }
    else if(val[i]["Team"]=="Core"){
        Core.append(item);
    }
    else continue;
}

