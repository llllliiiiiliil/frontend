function imgClick(){
    alert("이것은 이미지 입니다")
}

function iconClick(){
    alert("이것은 아이콘 입니다")
}

function inputChange(){
    const a = document.getElementById("123").value
    alert(a)
}

function check(){
    const password = document.getElementById("123").value
    if (password=="4301") alert("안녕하세요 회원님")
    else alert("누구심")
}