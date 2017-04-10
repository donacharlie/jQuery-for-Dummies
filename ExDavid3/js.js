$(document).ready(function(){

        $("#btnSubmit").click(function(){
                $.post('test.php',
                      $("#testform").serialize();
                );
        });
                
});
