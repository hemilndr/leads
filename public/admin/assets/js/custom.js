function openNav() {
    document.getElementById("sidenav-collapse-main").style.left = "0px";
    document.getElementById("sidenav-collapse-main").style.overflow = "visible";

  }
  
  function closeNav() {
    document.getElementById("sidenav-collapse-main").style.width = "-100px";
    document.getElementById("sidenav-collapse-main").style.overflow = "hidden";
  }

 

  $("form").on("change", ".file-upload-field", function(){ 
    $(this).parent(".file-upload-wrapper").attr("data-text",         $(this).val().replace(/.*(\/|\\)/, '') );
});