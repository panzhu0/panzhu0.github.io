let navbarItem = document.querySelectorAll('.item')

// 点击标题效果
for(let i=0;i<navbarItem.length;i++){
    navbarItem[i].addEventListener('click',function(){
        for(let i=0;i<navbarItem.length;i++){
            navbarItem[i].classList.remove('active')
        }
        this.classList.add('active')
    })
}

// 实现打字机效果
var typed = new Typed(".mutiple-text",{
    strings:['Backend Developer','BiliBili Uploader','Tiktok(抖音) Uploader','MORE'],
    typeSpeed:100,
    backSpeed:50,
    backDelay:1000,
    loop:true
})