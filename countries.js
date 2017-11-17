var countries = [ 
   "Chad",
   "Cuba",
   "Greenland",
   "Iraq",
   "Mali",
   "Oman",
   "India"
   ]
       countries.push ("Fiji" )
       countries.splice (4, 0, "Iran")
       countries.splice(7,1)
       countries.reverse()
       countries[5]="Togo"
       countries.push("Laos")
       countries.reverse()
       countries.unshift("Peru")
       
     console.log(countries)
     
   
     