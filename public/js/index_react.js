var update_menu_desc = function (item_id) {
    var desc_title = $('#<%= intro.desc.title_wrap_id %>');
    var desc_context = $('#<%= intro.desc.context_wrap_id %>');

    <% for(var i=0; i<intro.menu_item.length; i++ ) {%>
    if (item_id == '<%= intro.menu_item[i].id %>') {
        desc_title.fadeOut(100, function(){
            $(this).text('<%= intro.menu_item[i].desc.title %>').fadeIn();
        });

        desc_context.text('<%= intro.menu_item[i].desc.context %>');
    }
    <%}%>
}
