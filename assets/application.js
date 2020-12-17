// Put your application javascript here


$(document).ready(function(){
    $('#AddToCartForm').submit(function(e){
        e.preventDefault();
        var button = $(this).find('button#AddToCart');
        var btnText = button.html();
        var url = $(this).attr('action');
        button.html("Adding to Cart...");
        button.prop('disabled', true);

        url = url.indexOf('.js') < 0 ? url + '.js' : url;

        $.ajax({
            url: url,
            type: 'POST',
            data: $(this).serialize(),
            dataType: 'json',
            success: function(data){
                alert('Item added to cart.'); 
                button.html(btnText);
                button.prop('disabled', false);
            },
            error: function(data){
                alert(data.responseJSON.description);
                button.html(btnText);
                button.prop('disabled', false);
            }
        });
    });


    //show modal
    $('#product-popup').modal('show');
});