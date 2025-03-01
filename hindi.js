const maincontainer=document.getElementById('container1')
const movies=[
   {
      imageLink : "1.jpeg",
      title:"singham again",
      linkd:"https://en.wikipedia.org/wiki/Singham_Again",
      linkw:"https://www.youtube.com/watch?v=455fogVO22k"
   },
   {
      imageLink : "./img-hindi/vedaa.jpeg",
      title:"Vedaa",
      linkd:"https://en.wikipedia.org/wiki/Vedaa",
      linkw:"https://www.youtube.com/watch?v=-INtyU1f2i0"
   },
   {
      imageLink : "img-hindi/aye-zindagi.jpeg",
      title:"Aye Zindagi",
      linkd:"https://en.wikipedia.org/wiki/Aye_Zindagi_(film)",
      linkw:"https://www.youtube.com/watch?v=n9VGHVt1Z5E"
   },
   {
      imageLink : "https://upload.wikimedia.org/wikipedia/en/d/d8/1942_A_Love_Story_1994_film_poster.jpg",
      title:"A Love Story",
      linkd:"https://en.wikipedia.org/wiki/1942:_A_Love_Story",
      linkw:"https://www.youtube.com/watch?v=fcfPAVo34nw"
   },
   {
      imageLink : "img-hindi/dedis.jpeg",
      title:"Dedh Ishqiya",
      linkd:"https://en.wikipedia.org/wiki/Dedh_Ishqiya",
      linkw:"https://www.youtube.com/watch?v=_J3fkfUDkx8"
   },
   {
      imageLink : "img-hindi/dharamveer2.jpeg",
      title:"Dharamveer2",
      linkd:"https://en.wikipedia.org/wiki/Dharmaveer_2",
      linkw:"https://www.youtube.com/watch?v=OOoDAJ_rnI4"
   },
   {
      imageLink : "img-hindi/jiger.jpeg",
      title:"Jigra",
      linkd:"https://en.wikipedia.org/wiki/Jigra",
      linkw:"https://www.youtube.com/watch?v=3uE0RuQndZc"
   },
   {
      imageLink : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNS7th8eTYZWYl08jXLFbFRlzeGWjmmbIcLsNwgNeC1zgWbTXZMGrx19hxiLte3MWfpeTc",
      title:"Katha",
      linkd:"https://en.wikipedia.org/wiki/Satyaprem_Ki_Katha",
      linkw:"https://www.youtube.com/watch?v=8EPJiFfWRfw"
   },
   {
      imageLink : "img-hindi/kkm.jpeg",
      title:"Khel Khel Mein",
      linkd:"https://en.wikipedia.org/wiki/Khel_Khel_Mein_(2024_film)",
      linkw:"https://www.youtube.com/watch?v=RKZJtoFoaQg"
   },
   {
      imageLink : "img-hindi/kjn.jpeg",
      title:"Koi Jaane Na",
      linkd:"https://en.wikipedia.org/wiki/Koi_Jaane_Na",
      linkw:"https://www.youtube.com/watch?v=jL8ru091VW0"
   },
   {
      imageLink : "img-hindi/ks.jpeg",
      title:"Krispy Rishtey",
      linkd:"https://www.jiocinema.com/movies/krispy-rishtey/4035936",
      linkw:"https://www.youtube.com/watch?v=xhYLWvs-Hy8"
   },
   {
      imageLink : "img-hindi/mpkk.jpeg",
      title:"M.P.K.K.",
      linkd:"https://en.wikipedia.org/wiki/Maine_Pyaar_Kyun_Kiya%3F",
      linkw:"https://www.youtube.com/watch?v=EIuSj9p4O-g"
   },
   {
      imageLink : "img-hindi/mard-lo-dard-nahin-hota.jpeg",
      title:"M.K.D.N.H.",
      linkd:"https://en.wikipedia.org/wiki/Mard_Ko_Dard_Nahi_Hota",
      linkw:"https://www.youtube.com/watch?v=jb0-Mw_V_bA"
   },
   {
      imageLink : "img-hindi/martin.jpeg",
      title:"Martin",
      linkd:"https://en.wikipedia.org/wiki/Martin_(2024_film)",
      linkw:"https://www.youtube.com/watch?v=fqLCas2sWW0"
   },
   {
      imageLink : "img-hindi/parinda.jpeg",
      title:"Parinda",
      linkd:"https://en.wikipedia.org/wiki/Parinda",
      linkw:"https://www.youtube.com/watch?v=I0jvOYl2m1k"
   },
   {
      imageLink : "img-hindi/ram-lakhan.jpeg",
      title:"Ram Lakhan",
      linkd:"https://en.wikipedia.org/wiki/Ram_Lakhan",
      linkw:"https://www.youtube.com/watch?v=qmbDoNAhvs0"
   },
   {
      imageLink : "img-hindi/theend2016.jpeg",
      title:"2016 the end",
      linkd:"https://en.wikipedia.org/wiki/2016_The_End",
      linkw:"https://www.youtube.com/watch?v=PoQ_HUwkdq4"
   },
   {
      imageLink : "img-hindi/vikyy-vidya-kan-woh-wala-video.jpeg",
      title:"V.V.K.W.W.V.",
      linkd:"https://www.youtube.com/watch?v=0xXa9a2rHoQ",
      linkw:"https://en.wikipedia.org/wiki/Vicky_Vidya_Ka_Woh_Wala_Video"
   },
   {
      imageLink : "img-hindi/Ziwgato.jpeg",
      title:"Zwigato",
      linkd:"https://en.wikipedia.org/wiki/Zwigato",
      linkw:"https://www.youtube.com/watch?v=RCMxX6lWJcY"
   },
   {
      imageLink : "img-hindi/aye-zindagi.jpeg",
      title:"Aye Zindagi",
      linkd:"https://en.wikipedia.org/wiki/Aye_Zindagi_(film)",
      linkw:"https://www.youtube.com/watch?v=n9VGHVt1Z5E"
   }

]
function displayData ()
{
    movies.forEach((m) =>
    {
           const div = document.createElement("div")
           //class second div
			div.classList.add("movie")
		 const ele = document.createElement("h1")
       //class h1 titlie 
       ele.classList.add('h11')
			ele.textContent = m.title 

         const divbtn=document.createElement('div')
         //class divbtn
         divbtn.classList.add('divbtn')

			const anchorw = document.createElement("a")
         // class btn watch
         anchorw.classList.add('btnw')
         const anchord = document.createElement("a")
         //class btn download 
         anchord.classList.add('btnd')

        
			anchord.href = m.linkd
			anchord.target = "_target"
			anchord.textContent = "Download"
         anchorw.href = m.linkw
			anchorw.target = "_target"
			anchorw.textContent = "Watch"
         divbtn.append(anchorw,anchord)

						
			const image = document.createElement("img")
         image.classList.add('imagposter')
			image.src =m.imageLink
			image.alt = "KALKI"
			div.append(image, ele, divbtn)
			maincontainer.appendChild(div)
    })

}
displayData()