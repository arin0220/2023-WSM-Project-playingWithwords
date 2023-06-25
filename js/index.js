var nav = $("nav ul li"); // 버튼을 변수에 할당(저장)
        var cont = $("section > div"); // 컨텐츠를 변수에 할당
        

           
        //버튼 클릭 시
        nav.click(function(e){
            e.preventDefault(); // #의 기본 기능을 차단
            var target =  $(this); // this 자기 자신 표현, 클릭한 타겟을 변수에 할당
            var index = target.index(); // 클릭한 타겟에 번호 할당
            
            var content = cont.eq(index); // 클릭한 버튼과 컨텐츠를 연결
            // eq는 순서를 나타내는 메소드 
            var offset = content.offset().top; // 각 컨텐츠의 오프셋 값을 할당
            //alert(offset);
            $("html, body").animate({scrollTop: offset},600)
        });


        const navToggle = document.getElementById("nav-toggle");
        const navListUl = document.querySelector(".nav-list");
    
        // nav-toggle 클릭하면
        navToggle.addEventListener("click", () => {
            // .nav-toggle i 햄버거 메뉴 <-> X
            // class에서 bi-list <-> bi-x-lg
            navToggle.querySelector("i").classList.toggle("bi-list");
            navToggle.querySelector("i").classList.toggle("bi-x-lg");
            
            // .nav-list에 .show-menu toggle
            navListUl.classList.toggle("show-menu");
        });