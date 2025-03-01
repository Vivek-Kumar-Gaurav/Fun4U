const maincontainer=document.getElementById('container1')
const movies=[
   {
      imageLink : "img-english/1.jpg",
      title:"Don't Move",
      linkd:"https://en.wikipedia.org/wiki/Singham_Again",
      linkw:"https://www.youtube.com/watch?v=455fogVO22k"
   },
   {
      imageLink : "img-english/2.jpg",
      title:"Hijack93",
      linkd:"https://en.wikipedia.org/wiki/Vedaa",
      linkw:"https://www.youtube.com/watch?v=-INtyU1f2i0"
   },
   {
      imageLink : "img-english/3.jpg",
      title:"Cosmos",
      linkd:"https://en.wikipedia.org/wiki/Aye_Zindagi_(film)",
      linkw:"https://www.youtube.com/watch?v=n9VGHVt1Z5E"
   },
   {
      imageLink : "img-english/4.jpg",
      title:"Hair",
      linkd:"https://en.wikipedia.org/wiki/1942:_A_Love_Story",
      linkw:"https://www.youtube.com/watch?v=fcfPAVo34nw"
   },
   {
      imageLink : "img-english/5.jpg",
      title:"The A.F.",
      linkd:"https://en.wikipedia.org/wiki/Dedh_Ishqiya",
      linkw:"https://www.youtube.com/watch?v=_J3fkfUDkx8"
   },
   {
      imageLink : "img-english/6.jpg",
      title:"Jumper",
      linkd:"https://en.wikipedia.org/wiki/Dharmaveer_2",
      linkw:"https://www.youtube.com/watch?v=OOoDAJ_rnI4"
   },
   {
      imageLink : "img-english/7.jpg",
      title:"Wickensburg",
      linkd:"https://en.wikipedia.org/wiki/Jigra",
      linkw:"https://www.youtube.com/watch?v=3uE0RuQndZc"
   },
   {
      imageLink : "img-english/8.jpg",
      title:"A M.C.H.",
      linkd:"https://en.wikipedia.org/wiki/Satyaprem_Ki_Katha",
      linkw:"https://www.youtube.com/watch?v=8EPJiFfWRfw"
   },
   {
      imageLink : "img-english/9.jpg",
      title:"Home Alone",
      linkd:"https://en.wikipedia.org/wiki/Khel_Khel_Mein_(2024_film)",
      linkw:"https://www.youtube.com/watch?v=RKZJtoFoaQg"
   },
   {
      imageLink : "img-english/10.jpg",
      title:"Wickensburg",
      linkd:"https://en.wikipedia.org/wiki/Koi_Jaane_Na",
      linkw:"https://www.youtube.com/watch?v=jL8ru091VW0"
   },
   {
      imageLink : "img-english/11.jpg",
      title:"S.in the B.",
      linkd:"https://www.jiocinema.com/movies/krispy-rishtey/4035936",
      linkw:"https://www.youtube.com/watch?v=xhYLWvs-Hy8"
   },
   {
      imageLink : "img-english/12.jpg",
      title:"Family pack",
      linkd:"https://en.wikipedia.org/wiki/Maine_Pyaar_Kyun_Kiya%3F",
      linkw:"https://www.youtube.com/watch?v=EIuSj9p4O-g"
   },
   {
      imageLink : "img-english/13.jpg",
      title:"A.C.",
      linkd:"https://en.wikipedia.org/wiki/Mard_Ko_Dard_Nahi_Hota",
      linkw:"https://www.youtube.com/watch?v=jb0-Mw_V_bA"
   },
   {
      imageLink : "img-english/14.jpg",
      title:"Dodsworth",
      linkd:"https://en.wikipedia.org/wiki/Martin_(2024_film)",
      linkw:"https://www.youtube.com/watch?v=fqLCas2sWW0"
   },
   {
      imageLink : "img-english/15.jpg",
      title:"F.D.",
      linkd:"https://en.wikipedia.org/wiki/Parinda",
      linkw:"https://www.youtube.com/watch?v=I0jvOYl2m1k"
   },
   {
      imageLink : "img-english/16.jpg",
      title:"Konvoi",
      linkd:"https://en.wikipedia.org/wiki/Ram_Lakhan",
      linkw:"https://www.youtube.com/watch?v=qmbDoNAhvs0"
   },
   {
      imageLink : "img-english/17.jpg",
      title:"Kishmish",
      linkd:"https://en.wikipedia.org/wiki/2016_The_End",
      linkw:"https://www.youtube.com/watch?v=PoQ_HUwkdq4"
   },
   {
      imageLink : "img-english/18.jpg",
      title:"V.O.T.W",
      linkd:"https://www.youtube.com/watch?v=0xXa9a2rHoQ",
      linkw:"https://en.wikipedia.org/wiki/Vicky_Vidya_Ka_Woh_Wala_Video"
   },
   {
      imageLink : "img-english/19.jpg",
      title:"Frankie Freako",
      linkd:"https://en.wikipedia.org/wiki/Zwigato",
      linkw:"https://www.youtube.com/watch?v=RCMxX6lWJcY"
   },
   {
      imageLink : "img-english/20.jpg",
      title:"Den Graenselose",
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