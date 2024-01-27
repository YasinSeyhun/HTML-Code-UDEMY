// Keyboard Events

const text = document.getElementById("txtTaskName");

//focus event -- type a new task kısmına tıkladığımda yani odak yaptığımızda çalışır.
text.addEventListener("focus",run);

//blur event -- type a new task kısmına tıklayıp bıraktıktan sorra çalışır yani odaktan çıkarsak çalışır
text.addEventListener("blur",run);

//paste event 
text.addEventListener("paste",run);

//copy event
text.addEventListener("copy",run);

//cut event
text.addEventListener("cut",run);

//select event -- text i seçili halde olup bırakırsak çalışır
text.addEventListener("select",run);

//keydown -- klavyeden tuşu basılı tutarsak çalışır.
text.addEventListener("keydown",run);

//keyup event -- klavyeden tuşu basılı tutup bıraktıktan sonra çalışır.
text.addEventListener("keyup",run);








function run(run) {
    console.log(run.type);
    console.log(run.target.value); // klavyede hangi tuşa bastığımızı gösterir.
}