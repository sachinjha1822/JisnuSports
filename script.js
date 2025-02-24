document.addEventListener("DOMContentLoaded", function() {
    document.addEventListener("copy", (event) => {
      const selectData = window.getSelection().toString();
      event.clipboardData.setData(
        "text/plain",
        "SachinJha1822",
    );
    event.preventDefault();
  });
</script>
<script>
  document.addEventListener("contextmenu", function(event){
    alert("Inspect Elements Not Allowed");
    event.preventDefault();
  })

});<script>
