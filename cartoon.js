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
      imageLink : "https://www.partysuppliesindia.com/cdn/shop/products/A2_33_c020ee18-0c82-4dc1-b16d-c90a64707b20.jpg?v=1635508143&width=1500",
      title:"Doraemon",
      linkd:"https://en.wikipedia.org/wiki/Doraemon",
      linkw:"https://www.youtube.com/watch?v=mzPE_erKIxI"
   },
   {
      imageLink : "https://rukminim2.flixcart.com/image/850/1000/l2tcfbk0/poster/p/z/p/large-shinchan-flex-poster-for-room-mo-2478-24x36-flex-bd-original-image2takafkyppz.jpeg?q=90&crop=false",
      title:"Shinchan",
      linkd:"https://en.wikipedia.org/wiki/Shinchan",
      linkw:"https://www.youtube.com/watch?v=UgxWX9ZO-Y4"
   },
   {
      imageLink : "https://m.media-amazon.com/images/M/MV5BNjMyZjhkMzUtOTc2Yy00YWFhLWJiYzYtYjY0MzhlYzU3YzMzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      title:"Krishna Balram",
      linkd:"https://simple.wikipedia.org/wiki/Krishna_Balram",
      linkw:"https://www.youtube.com/watch?v=hm3TNLk_fGs"
   },
   {
      imageLink : "img-cartoon/141.jpg",
      title:"Roll No. 21",
      linkd:"https://en.wikipedia.org/wiki/Roll_No_21",
      linkw:"https://www.youtube.com/watch?v=1n1qn4QcZSY"
   },
   {
      imageLink : "img-cartoon/Ls.jpeg",
      title:"Little Singham",
      linkd:"https://en.wikipedia.org/wiki/Little_Singham",
      linkw:"https://www.youtube.com/watch?v=pSHhu5Fq2ls"
   },
   {
      imageLink : "img-cartoon/1.jpg",
      title:"Ben 10",
      linkd:"https://en.wikipedia.org/wiki/Satyaprem_Ki_Katha",
      linkw:"https://www.youtube.com/watch?v=8EPJiFfWRfw"
   },
   {
      imageLink : "img-cartoon/2.jpg",
      title:"G.G.",
      linkd:"https://en.wikipedia.org/wiki/Khel_Khel_Mein_(2024_film)",
      linkw:"https://www.youtube.com/watch?v=RKZJtoFoaQg"
   },
   {
      imageLink : "img-cartoon/3.jpg",
      title:"Tom & jerry",
      linkd:"https://en.wikipedia.org/wiki/Koi_Jaane_Na",
      linkw:"https://www.youtube.com/watch?v=jL8ru091VW0"
   },
   {
      imageLink :"img-cartoon/4.jpg",
      title:"Tom & jerry",
      linkd:"https://www.jiocinema.com/movies/krispy-rishtey/4035936",
      linkw:"https://www.youtube.com/watch?v=xhYLWvs-Hy8"
   },
   {
      imageLink : "img-cartoon/5.jpg",
      title:"Ben 10",
      linkd:"https://en.wikipedia.org/wiki/Maine_Pyaar_Kyun_Kiya%3F",
      linkw:"https://www.youtube.com/watch?v=EIuSj9p4O-g"
   },
   {
      imageLink : "img-cartoon/6.jpg",
      title:"Ben 10",
      linkd:"https://en.wikipedia.org/wiki/Mard_Ko_Dard_Nahi_Hota",
      linkw:"https://www.youtube.com/watch?v=jb0-Mw_V_bA"
   },
   {
      imageLink : "img-cartoon/7.jpg",
      title:"Mask",
      linkd:"https://en.wikipedia.org/wiki/Martin_(2024_film)",
      linkw:"https://www.youtube.com/watch?v=fqLCas2sWW0"
   },
   {
      imageLink : "img-cartoon/8.jpg",
      title:"S.S.",
      linkd:"https://en.wikipedia.org/wiki/Parinda",
      linkw:"https://www.youtube.com/watch?v=I0jvOYl2m1k"
   },
   {
      imageLink :"img-cartoon/9.jpg",
      title:"S.of the M.",
      linkd:"https://en.wikipedia.org/wiki/Ram_Lakhan",
      linkw:"https://www.youtube.com/watch?v=qmbDoNAhvs0"
   },
   {
      imageLink : "img-cartoon/10.jpg",
      title:"Family guy",
      linkd:"https://en.wikipedia.org/wiki/2016_The_End",
      linkw:"https://www.youtube.com/watch?v=PoQ_HUwkdq4"
   },
   {
      imageLink : "img-cartoon/11.jpg",
      title:"P.A.F",
      linkd:"https://www.youtube.com/watch?v=0xXa9a2rHoQ",
      linkw:"https://en.wikipedia.org/wiki/Vicky_Vidya_Ka_Woh_Wala_Video"
   },
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