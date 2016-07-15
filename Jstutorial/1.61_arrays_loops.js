//used to iterate over an Array where the index order is important

var array = [
  {step: "step1", label: "Shoes1", price: "99.00"}, 
  {step: "step2", label: "Shoes2", price: "89.00"}, 
  {step: "step3", label: "Shoes3", price: "150.00"}
]

array.forEach(function(item){
  console.log(item.step, item.label, item.price);
  
})var a = [{
  step: "step1",
  label: "Shoes1",
  price: "99.00"
}, {
  step: "step2",
  label: "Shoes2",
  price: "89.00"
}, {
  step: "step3",
  label: "Shoes3",
  price: "150.00"
}]

for (i = 0; i < a.length; i++) {
  console.log(a[i]);
}