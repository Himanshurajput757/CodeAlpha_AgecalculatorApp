const userinput = document.getElementById("date");
const btn = document.getElementById("btn");
let result = document.getElementById("result");
userinput.max = new Date().toISOString().split("T")[0];
console.log(userinput.max);

//Add a click event function on button to get result 
btn.addEventListener('click',()=>
{
    let birthdate = new Date(userinput.value);

    let d1 = birthdate.getDate();
    let m1 = birthdate.getMonth()+1;
    let y1 = birthdate.getFullYear();

    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth()+1;
    let y2 = today.getFullYear();

    let d3,m3,y3;

    y3 = y2 -y1;
    

if(userinput.value == "")
{
    result.innerHTML = `<h1>Please Enter Your Age?</h1>`

    }
else
{
    if(m2 >=m1)
    {
        m3 = m2 - m1;
    }
    else
    {
        y3--;
        m3 = 12 + m2 - m1;
            }
    if(d2 >=d1)
    {
        d3 = d2 -d1;
    }
    else
    {
        m3--;
        d3 = getDaysInMonth(y1,m1)+ d2 -d1;
    
    }
    if(m3 <0)
    {
        m3 = 11;
        y3--;
    }
    result.innerHTML = `<h1>your Age is ${y3} years ${m3}Months ${d3} Days</h1>`
}
})

//get the total day of month of the year
function getDaysInMonth(year,month)
{
    return new Date(year,month, 0).getDate();
}