// console.log("hi")
//UI
const counters=document.querySelectorAll('.counter');

// console.log(counters);
// console.log(counters.length);

counters.forEach((counter)=>{
	// console.log(counter);

	counter.innerText ="0";
	// console.log(counter.getAttribute('data-target'));



	const updatecounter =()=>{
		// const target = +counter.getAttribute('data-target');

		const target = Number(counter.getAttribute('data-target'));
		// console.log(target);
		// console.log(typeof target);

		const ctr = +counter.innerText;
		// console.log(ctr);
		// console.log(typeof ctr);

		const increment=target/100;
		// console.log(increment);


	 if(ctr < target){
	 	counter.innerText =Math.ceil(ctr + increment);
	 	setTimeout(updatecounter,70);
	 }


	}


	updatecounter();


});

const textel = document.querySelector('#text');
console.log(textel);

const pgh="Breath the Beauty of my life";
console.log(pgh.length);

let idx=1;
let speed=200;

function autotext(){
	// console.log("kav");

	textel.innerText=pgh.slice(0,idx);
	// idx+= 1;
	idx++;


	setTimeout(autotext,speed);
}


autotext();

