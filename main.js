document.addEventListener('DOMContentLoaded', () => {   
    const add = document.getElementById("addNew")
    const input = document.getElementById("inputField")
    var todoList = document.getElementById("todoContainer")
    add.addEventListener('click', addItem)
    input.addEventListener('keypress', function(e){
        if(input.value.trim() != ''){
        if(e.key=="Enter")
        {
            addItem();
            input.value =''
        }
    }
    })
    function addItem(e) {               
        const item_value = input.value;
        // console.log(item_value);
        const item = document.createElement('div')
        item.classList.add('item')

        const item_status = document.createElement('div')           // Khối div trạng thái task
        item_status.classList.add('status')
        item_status.classList.add('col-md-1')
        const isDone = document.createElement('i')
        isDone.classList.add('fa')
        isDone.classList.add('fa-square-o')
        isDone.classList.add('checkSquare')
        isDone.addEventListener('click', () => {
            
        if(isDone.classList.contains('fa-square-o'))
            {
                isDone.classList.add('fa-check-square-o')
                isDone.classList.remove('fa-square-o')
                isDone.parentElement.parentElement.childNodes[1].childNodes[0].style = "text-decoration: line-through"
                if(stt==true)          // Tự động ẩn task hoàn thành khi ấn thay đổi trạng thái sang hoàn thành trong khi chế độ ẩn task đang bật
                 {     
                    isDone.parentElement.parentElement.classList.add('hide')
                }
                else
                {
                    isDone.parentElement.parentElement.classList.remove('hide')
                }

            }
            else if (isDone.classList.contains('fa-check-square-o'))
            {
                isDone.classList.add('fa-square-o')
                isDone.classList.remove('fa-check-square-o')
                 isDone.parentElement.parentElement.childNodes[1].childNodes[0].style = "text-decoration: none"
            }
        })
        item_status.appendChild(isDone)
        item.appendChild(item_status)

        const item_content = document.createElement('div')          // Khối div nội dung task
        item_content.classList.add('content')
        item_content.classList.add('col-md-9')
        item.appendChild(item_content)

        const input_item = document.createElement('input')        
        input_item.classList.add('text')
        input_item.type = 'text'
        input_item.value = item_value
        item_content.appendChild(input_item)

        const item_action = document.createElement('div')    //Khối div chứa nút xóa và khối div xác nhận xóa
        item_action.classList.add('action')
        item_action.classList.add('col-md-2')
        const del = document.createElement('i')
        del.classList.add('fa')
        del.classList.add('fa-times-circle-o')
        del.classList.add('btn-delete')
        del.addEventListener('click', () =>{del.parentElement.parentElement.childNodes[2].childNodes[1].classList.toggle('hide') })
        item_action.appendChild(del)

        const ques = document.createElement('div')        //Khối div hỏi xác nhận xóa
        ques.classList.add('q-delete')
        ques.classList.add('hide')
        ques.innerHTML= "Delete ?"
        ques.addEventListener('click', () => item.remove());
        item_action.appendChild(ques)

        item.appendChild(item_action)

        todoList.appendChild(item)
        
        
        
    }

    var checks = document.querySelectorAll('.checkSquare')  // Thay đổi trạng thái task
    checks.forEach(check => {
      check.addEventListener('click', () => {
        check.classList.toggle('fa-check-square-o')
        check.classList.toggle('fa-square-o')
      });
     
     
    });
    
  

    const opts = document.getElementById('show-opts')  // Ẩn/hiện các task đã hoàn thành
    console.log(opts);
    opts.addEventListener('click', function()  {
        const show = document.getElementsByClassName('option')
        show[0].classList.toggle('active')
        
        
    })
   
    const o = document.querySelector('.option')
    var stt = false
    o.addEventListener('click',act)
    function act(){
        stt = !stt
        const done = document.getElementsByClassName('fa-check-square-o')
        Array.from(done).forEach(element => {
            if(stt)
            {
                element.parentElement.parentElement.classList.add('hide')
            }
            else
            {
                element.parentElement.parentElement.classList.remove('hide')
            }
        })
    }
    

})    
