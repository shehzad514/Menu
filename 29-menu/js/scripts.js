const btnAll=document.querySelector(".btnAll");
const btnBf=document.querySelector(".btnBf");
const btnL = document.querySelector(".btnL");
const btnD =document.querySelector(".btnD");
const dinnerItems =document.querySelectorAll(".dinner-items");
const breakItems = document.querySelectorAll(".break-items");
const launchItems = document.querySelectorAll(".launch-items");


btnBf.addEventListener("click",function()
{
    for(const dinner of dinnerItems)
    {
        dinner.classList.add("dinner-items-close");
    }
    for(const launch of launchItems)
    {
        launch.classList.add("launch-items-close");
    }
    
    for(const brek of breakItems)
    {
        brek.classList.remove("break-items-close");
    }
})

btnD.addEventListener("click",function()
{
    for(const brek of breakItems)
    {
        brek.classList.add("break-items-close");
    }
    for(const launch of launchItems)
    {
        launch.classList.add("launch-items-close");
    }
   for(const dinner of dinnerItems)
   {
    dinner.classList.remove("dinner-items-close")
   }
   

})

btnL.addEventListener("click",function()
{
    
    for(const brek of breakItems)
    {
        brek.classList.add("break-items-close");
    }
    for(const dinner of dinnerItems)
    {
        dinner.classList.add("dinner-items-close");
    }
    for(const launch of launchItems)
    {
        launch.classList.remove("launch-items-close");
    }
    
})

btnAll.addEventListener("click",function()
{
    for(const dinner of dinnerItems)
    {
        dinner.classList.remove("dinner-items-close");
    }

    for(const brek of breakItems)
    {
        brek.classList.remove("break-items-close");
    }
    
    for(const launch of launchItems)
    {
        launch.classList.remove("launch-items-close");
    }
    
})