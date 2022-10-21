document.addEventListener("DOMContentLoaded",function(){

    const arr = document.querySelectorAll(".child-op")
    console.log(arr);

    arr.forEach(box => {
        box.addEventListener('click', function handleClick(event) {
          console.log('box clicked');
            var  box_id = box.id;
          console.log(box.id)
          box.classList.toggle("child-expand");


        //   removing class from other children
          arr.forEach(others => {
            if (others.id!=box_id) {
            others.classList.remove("child-expand");
        }
          });
          
        
        });
      });


});