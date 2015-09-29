(function(){
    var font = "<link href='https://fonts.googleapis.com/css?family=Raleway:100' rel='stylesheet' type='text/css'>";
    var js = "<script type='text/javascript'>\
    document.title = 'Print Your Tasks!';\
    var title_str = prompt('Please enter your print page title:','What to do now ?');\
    document.getElementById('title').innerHTML = title_str;\
    </script>";
    var css = "<style type='text/css'>\
	body{font-size:12px;font-family: 'lucida Grande',Tahoma,Arial;}\
    ul,li{list-style:none;padding:0;}\
    ul{}\
    #title{text-align:center;}\
    .title a{text-decoration:none;color:#333;cursor:default;}\
	  #quick_add_input, #search_result, .archiver-tool, #goal_info, #project_info, #task_group .count, .empty-tip-content, .comment, .ng-hide{display:none;}\
    h1{font-family: 'Raleway', 'lucida Grande',Tahoma,Arial, serif;margin-bottom:30px;}\
    li{line-height:25px;font-family: 'lucida Grande',Tahoma,Arial;margin-bottom:5px;}\
    .task-checkbox {border: 1px solid #333333;float: left;height: 15px;margin: 4px 10px 0 0;width: 15px;}\
    .title{margin-left:27px;}\
    .taskList{margin-top:10px;}\
    .start-at {float: left; margin-right: 10px;}\
    .project,.context{margin-left:10px;}\
    .group h4{border-bottom: 1px solid #000;font-size: 14px;margin: 0;padding-bottom: 5px;}\
    #print{width:600px;margin:0 auto;}\
    #printthis{text-align:right;}\
    #copyright{font-size:10px;text-align:center;padding:10px 0 0;}\
    </style>\
	<style media='print'>\
	#printthis{display:none;}\
	</style>";
    var doit_wrap = $('#task_container').clone();
    doit_wrap.find('#task_quick_add,#task_quick_add_in,.icon').remove();
    doit_wrap.find('div').removeAttr('style');
    var now = new Date();
    var newwindo=window.open("","Print Your Tasks!","");
    newwindo.document.write(css);
    newwindo.document.write(font);
    newwindo.document.write('<div id="print"><h1 id="title"></h1>'+
        '<div id="printdate">Printed Date:'+now.getFullYear()+'-'+(now.getMonth()+1)+'-'+now.getDate()+'</div>'+
        '<div id="printthis"><a href=javascript:print();>[Print this page]</a></div>'+
        doit_wrap.html()+
        '<div id="copyright">Copyright © 2011 @leeiio(http://leeiio.me), All Rights Reserved</div></div>');
    newwindo.document.write(js);
    newwindo.document.close();
})();
