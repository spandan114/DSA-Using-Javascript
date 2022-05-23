const citys = [
    "Adilabad",
	"Adoni",
	"Amadalavalasa",
	"Amalapuram",
	"Anakapalle",
	"Anantapur",
	"Badepalle",
	"Banganapalle",
	"Bapatla",
	"Bellampalle",
	"Bethamcherla",
	"Bhadrachalam",
	"Bhainsa",
	"Bheemunipatnam",
	"Bhimavaram",
	"Bhongir",
	"Bobbili",
	"Bodhan",
	"Chilakaluripet",
	"Chirala",
	"Chittoor",
	"Cuddapah",
	"Devarakonda",
	"Dharmavaram",
	"Eluru",
	"Farooqnagar",
	"Gadwal",
	"Gooty",
	"Gudivada",
	"Gudur",
	"Guntakal",
	"Guntur",
	"Hanuman Junction"]
	
	
	
const linearSearch = (citys,city) =>{
	  for(var i =0;i<citys.length;i++){
	      if(citys[i] === city) return i;
	 }
	return -1;
}
	
console.log(linearSearch(citys,"Bodhann"))
	
	
	
	
	
	
	
	
	
	
	