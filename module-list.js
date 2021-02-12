(function(){
    var modules={
        "panel-main-smartsleep-60":    			        {url:"$H/m/survey-list-data.html",Table:"smartsleep-60-survey"},
        "panel-main-smartsleep-60-eligible":            {url:"$H/m/eligible-data.html",Table:"smartsleep-60-survey"},
        "panel-main-smartsleep-60-non-eligible":        {url:"$H/m/non-eligible-data.html",Table:"smartsleep-60-survey"},
        "panel-main-smartsleep-60-telephone-interview": {url:"$H/m/telephone-interview-data.html",Table:"smartsleep-60-survey",form_module:"smartsleep-60-telephone-interview"},
        "smartsleep-60-telephone-interview":            {url:"$H/m/telephone-interview-form.html",Table:"smartsleep-60-survey",task_name:"Telephone Interview"},
        "smartsleep-60-access-code":            {url:"$H/m/access-code-form.html",Table:"smartsleep-60-survey",task_name:"Access Code"},
        "send-email":                           {url:"$H/m/send-email-form.html",Table:"smartsleep-60-survey",task_name:"Send Email"}
    }
    //for(m in modules){$vm.module_list[m]=modules[m];}


    for(p in modules){
        $vm.module_list[p]=modules[p];
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    if(window.location.toString().indexOf('tb=demo')!=-1){
        for(p in $vm.module_list){
            $vm.module_list[p].Table="demo-"+$vm.module_list[p].Table;
        }
    }

})();
