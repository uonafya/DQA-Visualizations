function myOU() {
    var dataViewOU;
    var ous;
    var my_data_ou;
    var my_county;
    var my_subcounty;
    $.ajax({
        url:'https://indextestingapp.uonbi.ac.ke/api/me.json',
        // url:'https://json.link/oXqJ2CQ4c1.json',
        async: false,
        data: '',
        success: function (resp) {
            ous = resp.organisationUnits;
            dataViewOU = resp.organisationUnits[0];
            my_data_ou = dataViewOU["id"];
            var level;
            $.ajax({
                type: "GET",
                url: "https://indextestingapp.uonbi.ac.ke/api/organisationUnits/"+my_data_ou+".json",
                async: false,
                data: "fields=ancestors,level",
                success: function (response) {
                    level = response.level;
                    if(level > 2){
                        if(response.ancestors[1]["id"] !== undefined){
                            my_county = response.ancestors[1]["id"];
                        }else{
                            my_county = response.ancestors[0]["id"];
                            
                        }
                        $('#county-dropdown option[value='+my_county+']').attr('selected', 'selected');
                    }else{
                        my_county = my_data_ou;
                    }

                    if(my_county == 'HfVjCurKxh2'){
                        // my_county = 'vvOK1BxTbet';
                    }else{
                        // $('a.nationalink').addClass('hidden')
                    }
                }
            });
        },
        error: function () {}
    });
    return my_county;
}
$(document).ready( function(){
    $("#county-dropdown").prepend("<option value='HfVjCurKxh2'>Kenya</option>")
} );