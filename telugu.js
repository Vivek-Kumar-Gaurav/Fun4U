const maincontainer=document.getElementById('container1')
const movies=[
   {
      imageLink : "img-telugu/1.jpg",
      title:"Dasara",
      linkd:"https://en.wikipedia.org/wiki/Singham_Again",
      linkw:"https://www.youtube.com/watch?v=455fogVO22k"
   },
   {
      imageLink : "img-telugu/2.jpg",
      title:"100 day of",
      linkd:"https://en.wikipedia.org/wiki/Vedaa",
      linkw:"https://www.youtube.com/watch?v=-INtyU1f2i0"
   },
   {
      imageLink : "img-telugu/3.jpg",
      title:"ram charan",
      linkd:"https://en.wikipedia.org/wiki/Aye_Zindagi_(film)",
      linkw:"https://www.youtube.com/watch?v=n9VGHVt1Z5E"
   },
   {
      imageLink : "img-telugu/4.jpg",
      title:"Dasara",
      linkd:"https://en.wikipedia.org/wiki/1942:_A_Love_Story",
      linkw:"https://www.youtube.com/watch?v=fcfPAVo34nw"
   },
   {
      imageLink :"img-telugu/5.jpg",
      title:"Sai pallavi",
      linkd:"https://en.wikipedia.org/wiki/Dedh_Ishqiya",
      linkw:"https://www.youtube.com/watch?v=_J3fkfUDkx8"
   },
   {
      imageLink : "img-telugu/6.jpg",
      title:"Dharamveer2",
      linkd:"https://en.wikipedia.org/wiki/Dharmaveer_2",
      linkw:"https://www.youtube.com/watch?v=OOoDAJ_rnI4"
   },
   {
      imageLink : "img-telugu/7.jpg",
      title:"Jigra",
      linkd:"https://en.wikipedia.org/wiki/Jigra",
      linkw:"https://www.youtube.com/watch?v=3uE0RuQndZc"
   },
   {
      imageLink : "img-telugu/8.jpg",
      title:"Katha",
      linkd:"https://en.wikipedia.org/wiki/Satyaprem_Ki_Katha",
      linkw:"https://www.youtube.com/watch?v=8EPJiFfWRfw"
   },
   {
      imageLink : "img-telugu/9.jpg",
      title:"Mein",
      linkd:"https://en.wikipedia.org/wiki/Khel_Khel_Mein_(2024_film)",
      linkw:"https://www.youtube.com/watch?v=RKZJtoFoaQg"
   },
   {
      imageLink : "img-telugu/10.jpg",
      title:"Koi Jaane Na",
      linkd:"https://en.wikipedia.org/wiki/Koi_Jaane_Na",
      linkw:"https://www.youtube.com/watch?v=jL8ru091VW0"
   },
   {
      imageLink : "img-telugu/11.jpg",
      title:"Krispy Rishtey",
      linkd:"https://www.jiocinema.com/movies/krispy-rishtey/4035936",
      linkw:"https://www.youtube.com/watch?v=xhYLWvs-Hy8"
   },
   {
      imageLink : "img-telugu/12.jpg",
      title:"24",
      linkd:"https://en.wikipedia.org/wiki/Maine_Pyaar_Kyun_Kiya%3F",
      linkw:"https://www.youtube.com/watch?v=EIuSj9p4O-g"
   },
   {
      imageLink : "img-telugu/13.jpg",
      title:"Mowgli",
      linkd:"https://en.wikipedia.org/wiki/Mard_Ko_Dard_Nahi_Hota",
      linkw:"https://www.youtube.com/watch?v=jb0-Mw_V_bA"
   },
   {
      imageLink : "img-telugu/14.jpg",
      title:"Martin",
      linkd:"https://en.wikipedia.org/wiki/Martin_(2024_film)",
      linkw:"https://www.youtube.com/watch?v=fqLCas2sWW0"
   },
   {
      imageLink : "img-telugu/15.jpg",
      title:"Parinda",
      linkd:"https://en.wikipedia.org/wiki/Parinda",
      linkw:"https://www.youtube.com/watch?v=I0jvOYl2m1k"
   },
   {
      imageLink : "img-telugu/16.jpg",
      title:"Suriya",
      linkd:"https://en.wikipedia.org/wiki/Ram_Lakhan",
      linkw:"https://www.youtube.com/watch?v=qmbDoNAhvs0"
   },
   {
      imageLink : "https://i.pinimg.com/736x/69/f8/82/69f882f8c75ce2a966f95730650f621b.jpg",
      title:"Icon",
      linkd:"https://en.wikipedia.org/wiki/2016_The_End",
      linkw:"https://www.youtube.com/watch?v=PoQ_HUwkdq4"
   },
   {
      imageLink : "img-telugu/17.jpg",
      title:"V.V.K.",
      linkd:"https://www.youtube.com/watch?v=0xXa9a2rHoQ",
      linkw:"https://en.wikipedia.org/wiki/Vicky_Vidya_Ka_Woh_Wala_Video"
   },
   {
      imageLink : "img-telugu/18.jpg",
      title:"Sundeep Kishan",
      linkd:"https://en.wikipedia.org/wiki/Zwigato",
      linkw:"https://www.youtube.com/watch?v=RCMxX6lWJcY"
   },
   {
      imageLink : "img-telugu/19.jpg",
      title:"Aye Zindagi",
      linkd:"https://en.wikipedia.org/wiki/Aye_Zindagi_(film)",
      linkw:"https://www.youtube.com/watch?v=n9VGHVt1Z5E"
   },
   {
      imageLink : "img-telugu/20.jpg",
      title:"Aye Zindagi",
      linkd:"https://en.wikipedia.org/wiki/Aye_Zindagi_(film)",
      linkw:"https://www.youtube.com/watch?v=n9VGHVt1Z5E"
   },
   {
      imageLink : "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Ruler_film_poster.jpg/220px-Ruler_film_poster.jpg",
      title:"Ruler",
      linkd:"https://en.wikipedia.org/wiki/Aye_Zindagi_(film)",
      linkw:"https://www.youtube.com/watch?v=n9VGHVt1Z5E"
   },
   {
      imageLink : "https://cdn.gulte.com/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-28-at-10.21.06-AM.jpeg",
      title:"#NBK107",
      linkd:"https://en.wikipedia.org/wiki/Aye_Zindagi_(film)",
      linkw:"https://www.youtube.com/watch?v=n9VGHVt1Z5E"
   },
   {
      imageLink : "img-telugu/21.jpeg",
      title:"Akhanda",
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