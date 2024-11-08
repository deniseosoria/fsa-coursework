const shoe ={
    brandOptions: ["addidas", "nike"],
    brand: "",
    laces: "true",
    velcro: "false",
    color: "purple",
    activity: ["running", "fashion", "walking"],
    material: ["leather", "suede"],
    wear(){console.log("Wear shoe");},
    clean: function(){console.log("Clean shoe");}
}

console.log(shoe.brand);
console.log(shoe.activity[0]);
shoe.wear();

shoe.brand = "nike";

console.log(shoe.brand);

//shoe.brand = prompt("Choose from: "+shoe.brandOptions[0] + " or  " + shoe.brandOptions[1]);
let userResponse = prompt("Type your brand");
shoe.brand = userResponse;

console.log(shoe.brand);
