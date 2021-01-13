let arabic = document.getElementById("arabic");
let english = document.getElementById("english");
let flag = document.getElementById("flag");
let usaflag = document.getElementById("flag").src="america.jpg";
let egyflag = document.getElementById("flag").src="egypt.jpg";
let home = document.getElementById("home");
let contactus = document.getElementById("contact-us");
let adacemic1 = document.getElementById("adacemic1");
let adacemic2 = document.getElementById("adacemic2");
let js1 = document.getElementById("js1");
let js2 = document.getElementById("js2");

arabic.onclick = ()=>{
    setLanugage("arabic");
    localStorage.setItem("Lang","arabic");

};
english.onclick = ()=>{
    setLanugage("english");
    localStorage.setItem("Lang","english");
};

onload = ()=>{
    setLanugage(localStorage.getItem("Lang"));
};

function setLanugage(getLanguage){
    if(getLanguage === "arabic"){
        flag.src = egyflag;
        home.innerHTML = "الرئيسية";
        contactus.innerHTML = "اتصل بنا";
        adacemic1.innerHTML = "أكاديمية شيار";
        adacemic2.innerHTML = "انت في الطريق الصحيح لاحتراف الجافا سكربت";
        js1.innerHTML = "محمد صلاح";
        js2.innerHTML = "انا سعيد، وممتن للتعلم من خلال هذه المدرسة";   
        document.body.dir = "rtl";     
    }else if(getLanguage === "english"){
        flag.src = usaflag;
        home.innerHTML = "HOME";
        contactus.innerHTML = "CONTACT US";
        adacemic1.innerHTML = "Academia Shiyar";
        adacemic2.innerHTML = "you are in the right way to mastering javascript.";
        js1.innerHTML = "Mohamed Salah";
        js2.innerHTML = "I'm Happy, Iam Glad to studing through that school."; 
        document.body.dir = "ltr";             
    }
}
