const maincontainer=document.getElementById('container1')
const movies=[
   {
      imageLink : "https://i.ytimg.com/vi/TsLsbnH1RoY/maxresdefault.jpg",
      title:"Chhota Bhim",
      linkd:"https://en.wikipedia.org/wiki/Chhota_Bhim",
      linkw:"https://www.youtube.com/watch?v=mifXZ50OHUE"
   },
   {
      imageLink : "https://i.pinimg.com/originals/91/a2/f9/91a2f91d5b755678023430eeece0aeed.jpg",
      title:"Motu Patlu",
      linkd:"https://hindi.scoopwhoop.com/entertainment/making-story-of-cartoon-character-motu-patlu-ki-jodi/",
      linkw:"https://www.youtube.com/channel/UC_lQpRnSykxyiiMAgnD2kFQ"
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
      imageLink : "img-hindi/dharamveer2.jpeg",
      title:"Dharamveer2",
      linkd:"https://en.wikipedia.org/wiki/Dharmaveer_2",
      linkw:"https://www.youtube.com/watch?v=OOoDAJ_rnI4"
   },
   {
      imageLink : "img-tamil/8.jpg",
      title:"Suriya42",
      linkd:"https://en.wikipedia.org/wiki/Satyaprem_Ki_Katha",
      linkw:"https://www.youtube.com/watch?v=8EPJiFfWRfw"
   },
   {
      imageLink : "img-tamil/9.jpg",
      title:"aa",
      linkd:"https://en.wikipedia.org/wiki/Khel_Khel_Mein_(2024_film)",
      linkw:"https://www.youtube.com/watch?v=RKZJtoFoaQg"
   },
   {
      imageLink : "img-tamil/10.jpg",
      title:"Diesel",
      linkd:"https://en.wikipedia.org/wiki/Koi_Jaane_Na",
      linkw:"https://www.youtube.com/watch?v=jL8ru091VW0"
   },
   {
      imageLink : "img-hindi/kjn.jpeg",
      title:"Koi Jaane Na",
      linkd:"https://en.wikipedia.org/wiki/Koi_Jaane_Na",
      linkw:"https://www.youtube.com/watch?v=jL8ru091VW0"
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
         const cut=document.createElement('a')
         cut.classList.add('cut01')
         cut.textContent="X"
         image.appendChild(cut)
         
			div.append(image, ele, divbtn)
			maincontainer.appendChild(div)
    })

}
displayData()