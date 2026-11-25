let cap={
    firstName:"Steve",
    lastName:"Sharma",
    isAvenger:true,
    age: 18,
    address:{
        country:"India",
        state:"Himachal Pradesh",
        city:"solan",
    },
    enemies:["Hydra","Thand","Landslide","Heavy snowfall"],
     greet :function(){
        console.log("Ram ram bhaiyo");
     }
}
console.log("firstName",cap.firstName);
console.log("last enemy",cap.enemies
            [cap.enemies.length-1]);
            cap.greet();

            let intro = document.getElementById('intro')
            intro.innerHTML = 'My name is ' + cap.firstName;

                   let btn = document.getElementById('myButton');
                   btn.onclick = () => {alert('You clicked button')}

cap = 'Gaurav'

console.log('new cap', cap)