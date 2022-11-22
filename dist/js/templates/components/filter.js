const filter_template = `

{{#is_county}}
    <div class="col-md-2 col-sm-2 col-xs-6">
        <select class="form-control m-r-5 mb-1" id="county-dropdown" name="county"  placeholder="Select county" title="Select county">
            <!--<option selected="true" disabled="" value="">Select County</option>-->
            <option selected="true" value="HfVjCurKxh2">Kenya</option>
            <option value="vvOK1BxTbet">Baringo County</option>
            <option value="HMNARUV2CW4">Bomet County</option>
            <option value="KGHhQ5GLd4k">Bungoma County</option>
            <option value="Tvf1zgVZ0K4">Busia County</option>
            <option value="MqnLxQBigG0">Elgeyo Marakwet County</option>
            <option value="PFu8alU2KWG">Embu County</option>
            <option value="uyOrcHZBpW0">Garissa County</option>
            <option value="nK0A12Q7MvS">Homa Bay County</option>
            <option value="bzOfj0iwfDH">Isiolo County</option>
            <option value="Hsk1YV8kHkT">Kajiado County</option>
            <option value="BjC1xL40gHo">Kakamega County</option>
            <option value="ihZsJ8alvtb">Kericho County</option>
            <option value="qKzosKQPl6G">Kiambu County</option>
            <option value="nrI2khZx3d0">Kilifi County</option>
            <option value="Ulj33KBau7V">Kirinyaga County</option>
            <option value="sPkRcDvhGWA">Kisii County</option>
            <option value="tAbBVBbueqD">Kisumu County</option>
            <option value="j8o6iO4Njsi">Kitui County</option>
            <option value="N7YETT3A9r1">Kwale County</option>
            <option value="xuFdFy6t9AH">Laikipia County</option>
            <option value="NjWSbQTwys4">Lamu County</option>
            <option value="yhCUgGcCcOo">Machakos County</option>
            <option value="BoDytkJQ4Qi">Makueni County</option>
            <option value="R6f9znhg37c">Mandera County</option>
            <option value="Eey8fT4Im3y">Marsabit County</option>
            <option value="Y52XNJ50hYb">Meru County</option>
            <option value="fVra3Pwta0Q">Migori County</option>
            <option value="wsBsC6gjHvn">Mombasa County</option>
            <option value="ahwTMNAJvrL">Muranga County</option>
            <option value="jkG3zaihdSs">Nairobi County</option>
            <option value="ob6SxuRcqU4">Nakuru County</option>
            <option value="t0J75eHKxz5">Nandi County</option>
            <option value="kqJ83J2D72s">Narok County</option>
            <option value="uepLTG8wGWJ">Nyamira County</option>
            <option value="mYZacFNIB3h">Nyandarua County</option>
            <option value="ptWVfaCIdVx">Nyeri County</option>
            <option value="o36zCRjSd4G">Samburu County</option>
            <option value="u4t9H8XyU9P">Siaya County</option>
            <option value="QyGNX2DpR4h">Taita Taveta County</option>
            <option value="JsH2bnvNt2d">Tana River County</option>
            <option value="T4urHM47nlm">Tharaka Nithi County</option>
            <option value="mThvosEflAU">Trans Nzoia County</option>
            <option value="kphDeKClFch">Turkana County</option>
            <option value="pZqQRRW7PHP">Uasin Gishu County</option>
            <option value="sANMZ3lpqGs">Vihiga County</option>
            <option value="CeLsrJOH0g9">Wajir County</option>
            <option value="XWALbfAPa6n">West Pokot County</option>
        </select>
    </div>
{{/is_county}}

{{#is_subcounty}}
    <div class="col-md-1 col-sm-1 col-xs-4">
        <select class="form-control m-r-5 mb-1" id="subcounty-dropdown" name="subcounty" disabled placeholder="Select subcounty" title="Select subcounty">
        <option selected disabled>Select subcounty</option>
        </select> 
    </div> 
{{/is_subcounty}}

{{#is_ward}}
    <div class="col-md-2 col-sm-2 col-xs-4">
        <select class="form-control m-r-5 mb-1" id="ward-dropdown" name="ward" disabled>
        <option selected disabled>Select ward</option>
        </select> 
    </div> 
{{/is_ward}}

{{#is_facility}}
    <div class="col-md-2 col-sm-2 col-xs-4">
        <select class="form-control m-r-5 mb-1" id="facility-dropdown" disabled name="facility">
        <option selected disabled>Select facility</option>
        </select> 
    </div> 
{{/is_facility}}
{{#is_mechanism}}
    <div class="col-md-2 col-sm-2 col-xs-2">
        <select class="form-control m-r-5 mb-1" id="mechanism-dropdown" name="mechanism">
        <option selected disabled>Select Mechanism</option>
        <option selected="true" value="">All Partners</option>
        <option value="MZQY1ZPAYCY">Afya Jijini project</option>
        <option value = "iI8P1gEpTxf">Afya Kamilisha</option>
        <option value = "XakDkEteZ8n">Afya Nyota ya Bonde</option>
        <option value = "vUO19dBpTi6">Afya Ziwani</option>
        <option value = "WqRU554b9Ax">Afya Pwani</option>
        <option value = "SuIPMBE1tdx">AMPATH Plus</option>
        <option value = "iRFEcXxX5yb">Lea Toto Program</option>
        <option value = "XazGLsdcppg">USAID Tujitegemee</option>
        <option value = "jEtKvSdlHpK">USAID Imarisha Jamii</option>
        <option value = "fBCEYe6pmaw">USAID Jamii Tekelezi</option>
        <option value = "I77vRIqUthh">USAID Tujengee Jamii</option>
        <option value = "kF0bPRXWYHw">USAID Boresha Jamii</option>
        <option value = "DOVuNOK6W1q">USAID Nuru ya Mtoto</option>
        <option value = "Gz7D5TtCtfA">USAID Tumikia Mtoto</option>
        <option value = "is09NROcUeR">USAID4TheChild</option>
        <option value = "lt6GFMucPzG">USAID Fahari Ya Jamii</option>
        <option value = "mVoikQ8W4oc">USAID Stawisha Pwani</option>

        


        </select> 
    </div> 
{{/is_mechanism}}
{{#is_period}}
    <div class="col-md-6">
        <div class="row">
            <div class="col-md-3">
                <div class="input-group">
                   

                    <select class="form-control yearsfilt" id="period-dropdownFrom">
                        <option value="" disabled selected>Year {{#is_period_range}} from {{/is_period_range}}</option>
                    </select>
                    
                    <select class="form-control" id="period-dropdownFromQs" disabled>
                        <option value="" selected>All year</option>
                        <option value="01" >January</option>
                        <option value="02" >February</option>
                        <option value="03" >March</option>
                        <option value="04" >April</option>
                        <option value="05" >May</option>
                        <option value="06" >June</option>
                        <option value="07" >July</option>
                        <option value="08" >August</option>
                        <option value="09" >September</option>
                        <option value="10" >October</option>
                        <option value="11" >November</option>
                        <option value="12" >December</option>
                        
                    </select>
                </div>
            </div>
            {{#is_period_range}}
                <div class="col-md-3">
                    <div class="input-group">
                        <select class="form-control yearsfilt" id="period-dropdownTo" disabled>
                            <option value="" disabled selected>Period to</option>
                        </select>
                        
                        <select class="form-control" id="period-dropdownToQs" disabled>
                        <option value="" selected>All year</option>
                        <option value="01" >January</option>
                        <option value="02" >February</option>
                        <option value="03" >March</option>
                        <option value="04" >April</option>
                        <option value="05" >May</option>
                        <option value="06" >June</option>
                        <option value="07" >July</option>
                        <option value="08" >August</option>
                        <option value="09" >September</option>
                        <option value="10" >October</option>
                        <option value="11" >November</option>
                        <option value="12" >December</option>
                        </select>
                    </div> 
                </div> 
            {{/is_period_range}}
        </div>
    </div>
{{/is_period}}
{{#is_biweek}}
    <div class="col-md-6">
        <div class="row">
            <div class="col-md-3">
                <div class="input-group">
                   

                    <select class="form-control yearsfilt" id="period-dropdownFrom">
                        <option value="" disabled selected>Year {{#is_period_range}} from {{/is_period_range}}</option>
                    </select>
                    
                    <select class="form-control" id="period-dropdownFromQs" disabled>
                        <option value="" selected>All year</option>
                        <option value="BiW1" >Bi-Week 1</option>
                        <option value="BiW2" >Bi-Week 2</option>
                        <option value="BiW3" >Bi-Week 3</option>
                        <option value="BiW4" >Bi-Week 4</option>
                        <option value="BiW5" >Bi-Week 5</option>
                        <option value="BiW6" >Bi-Week 6</option>
                        <option value="BiW7" >Bi-Week 7</option>
                        <option value="BiW8" >Bi-Week 8</option>
                        <option value="BiW9" >Bi-Week 9</option>
                        <option value="BiW10" >Bi-Week 10</option>
                        <option value="BiW11" >Bi-Week 11</option>
                        <option value="BiW12" >Bi-Week 12</option>
                        <option value="BiW13" >Bi-Week 13</option>
                        <option value="BiW14" >Bi-Week 14</option>
                        <option value="BiW15" >Bi-Week 15</option>
                        <option value="BiW16" >Bi-Week 16</option>
                        <option value="BiW17" >Bi-Week 17</option>
                        <option value="BiW18" >Bi-Week 18</option>
                        <option value="BiW19" >Bi-Week 19</option>
                        <option value="BiW20" >Bi-Week 20</option>
                        <option value="BiW21" >Bi-Week 21</option>
                        <option value="BiW22" >Bi-Week 22</option>
                        <option value="BiW23" >Bi-Week 23</option>
                        <option value="BiW24" >Bi-Week 24</option>
                        <option value="BiW25" >Bi-Week 25</option>
                        <option value="BiW26" >Bi-Week 26</option>                        
                    </select>
                </div>
            </div>
            {{#is_biweek_range}}
                <div class="col-md-3">
                    <div class="input-group">
                        <select class="form-control yearsfilt" id="period-dropdownTo" disabled>
                            <option value="" disabled selected>Period to</option>
                        </select>
                        
                        <select class="form-control" id="period-dropdownToQs" disabled>
                        <option value="" selected>All year</option>
                        <option value="BiW1" >Bi-Week 1</option>
                        <option value="BiW2" >Bi-Week 2</option>
                        <option value="BiW3" >Bi-Week 3</option>
                        <option value="BiW4" >Bi-Week 4</option>
                        <option value="BiW5" >Bi-Week 5</option>
                        <option value="BiW6" >Bi-Week 6</option>
                        <option value="BiW7" >Bi-Week 7</option>
                        <option value="BiW8" >Bi-Week 8</option>
                        <option value="BiW9" >Bi-Week 9</option>
                        <option value="BiW10" >Bi-Week 10</option>
                        <option value="BiW11" >Bi-Week 11</option>
                        <option value="BiW12" >Bi-Week 12</option>
                        <option value="BiW13" >Bi-Week 13</option>
                        <option value="BiW14" >Bi-Week 14</option>
                        <option value="BiW15" >Bi-Week 15</option>
                        <option value="BiW16" >Bi-Week 16</option>
                        <option value="BiW17" >Bi-Week 17</option>
                        <option value="BiW18" >Bi-Week 18</option>
                        <option value="BiW19" >Bi-Week 19</option>
                        <option value="BiW20" >Bi-Week 20</option>
                        <option value="BiW21" >Bi-Week 21</option>
                        <option value="BiW22" >Bi-Week 22</option>
                        <option value="BiW23" >Bi-Week 23</option>
                        <option value="BiW24" >Bi-Week 24</option>
                        <option value="BiW25" >Bi-Week 25</option>
                        <option value="BiW26" >Bi-Week 26</option>  
                        </select>
                    </div> 
                </div> 
            {{/is_biweek_range}}
        </div>
    </div>
{{/is_biweek}}
`;

$(document).ready(function () {
    $("#county-dropdown").on('change', function (ev) {
        let v_al = $(this).val()
        if(v_al != "HfVjCurKxh2"){
            window.sessionStorage.setItem("ouFilterType", "county")
        }
        changeHashOnFilter({ou:v_al})
        if(v_al != 'HfVjCurKxh2' && v_al != ''){
            $("#subcounty-dropdown").removeAttr('disabled')
            fetchSubcounties(v_al);
        }else{
            $("#subcounty-dropdown").attr('disabled', true)
        }
    })
    
    $("#subcounty-dropdown").on('change', function (ev) {
        let v_al = $(this).val()
        
        window.sessionStorage.setItem("ouFilterType", "subcounty")
        changeHashOnFilter({ou:v_al})
        if(v_al != ''){
            $("#ward-dropdown").removeAttr('disabled')
            fetchwards(v_al)
        }
       
    })
    
    $("#ward-dropdown").on('change', function (ev) {
        let v_al = $(this).val()
        changeHashOnFilter({ou:v_al})
        if(v_al != ''){
            $("#ward-dropdown").removeAttr('disabled')
            fetchFacilities(v_al)
        }
    })
    
    $("#facility-dropdown").on('change', function (ev) {
        let v_al = $(this).val()
        changeHashOnFilter({ou:v_al})
    })
    $("#mechanism-dropdown").on('change', function (ev) {
        let v_al = $(this).val()
        changeHashOnFilter({me:v_al})
    })

    
    
    $("#period-dropdownFrom").on('change', function (ev) {
        let v_al = $(this).val();
        if(v_al.includes('/')){ v_al = v_al.replace('/', 'W') }
        changeHashOnFilter({pe:v_al})
        $('#period-dropdownFromQs').removeAttr('disabled')
        $('#period-dropdownTo').removeAttr('disabled')
        sessionStorage.removeItem("periodIsQuarters")
        $($('#period-dropdownTo option')).each(function (ix, ele) {
            if(ele.getAttribute('value') < v_al){
                ele.setAttribute('disabled', true)
            }
        });
    })
    $("#period-dropdownFromQs").on('change', function (ev) {
        sessionStorage.setItem("periodIsQuarters", true)
        let p_val = $("#period-dropdownFrom").val()
        let v_al = $(this).val();
        let v_alq = []
        let finalpe = p_val+v_al
        v_alq.push(finalpe)
    
        

        
        // if(sessionStorage.getItem("isPeriodRange") === "false" || !sessionStorage.getItem("isPeriodRange") ){
        //     v_alq = p_val+"Q"+v_al
        // }else{
        //     if(v_al != null && v_al != ""){
        //         for (let d = 1; d <= parseFloat(v_al); d++) {
        //             v_alq += p_val+"Q"+d+";"
        //         }
        //         v_alq = v_alq.substr(0,v_alq.length-1)
        //     }
        // }
        console.log("fromQs = ", v_alq);
        if(v_alq.includes('/')){ v_alq = v_alq.replace('/', 'W') }
        changeHashOnFilter({pe:v_alq})
        $('#period-dropdownToQs').removeAttr('disabled')
    })
    // $("#period-dropdownTo").on('change', function (ev) {
    //     let v_al = $(this).val();
    //     let v_al_fr = $('#period-dropdownFrom').val();
    //     if(v_al.includes('/')){ v_al = v_al.replace('/', 'W') }
    //     if(v_al_fr.includes('/')){ v_al_fr = v_al_fr.replace('/', 'W') }
    //     changeHashOnFilter({pe: v_al_fr, pe_to:v_al})
    // })
    $("#period-dropdownToQs").on('change', function (ev) {
        let p_val = $("#period-dropdownTo").val()
        let v_al = $(this).val();
        
        let v_al_fr = $('#period-dropdownFrom').val();
        let v_al_fr_qs = $('#period-dropdownFromQs').val();
        let v_alf = v_al_fr+v_al_fr_qs //""
        // if(v_al_fr_qs != null && v_al_fr_qs != ""){
        //     for (let d = 1; d <= parseFloat(v_al_fr_qs); d++) {
        //         v_alf += v_al_fr+"Q"+d+";"
        //     }
        //     v_alf = v_alf.substr(0,v_alf.length-1)
        // }

        let v_alq = p_val+v_al //""
        // if(v_al != null && v_al != ""){
        //     for (let d = 1; d <= parseFloat(v_al); d++) {
        //         v_alq += p_val+"Q"+d+";"
        //     }
        //     v_alq = v_alq.substr(0,v_alq.length-1)
        // }
        
        if(v_alq.includes('/')){ v_alq = v_alq.replace('/', 'W') }
        changeHashOnFilter({pe: v_alf, pe_to:v_alq})
    })

    $("#is_range").on('change', function (v) {
        let v_al = $(this).is(':checked')
        changeHashOnFilter({range: v_al.toString()})
        sessionStorage.setItem('isPeriodRange',v_al)
    })




    let this_yr = new Date().getFullYear()
    for (let l = 0; l <= 5; l++) {
        let y_r = this_yr - l
        $('.yearsfilt').append('<option value="'+y_r+'">'+y_r+'</option>')
    }
});

const getQuartersBtwnPeriod = (p1,p2) => {
    let y1 = p1.substr(0,p1.length-2)
    let y2 = p2.substr(0,p2.length-2)

    ///////
    let bg = Math.max(parseFloat(y1), parseFloat(y2))
    let sm = Math.min(parseFloat(y1), parseFloat(y2))
    let diff = bg - sm
    let yrs = []
    for (let k = 0; k <= diff; k++) {
         yrs.push( sm + k )
    }
    let gq = ''
    yrs.map(yr=>{
        gq += ''+getQuartersInYear(yr)+';'
    })
    ///////
    let split_1 = gq.split(p1)[1]
    let split_2 = split_1.split(p2)[0]
    let final_pe = p1+split_2+p2
    return final_pe
}


const getPeBtwnYears = (y1, y2, returntype) => {
    let bg = Math.max(parseFloat(y1), parseFloat(y2))
    let sm = Math.min(parseFloat(y1), parseFloat(y2))
    let diff = bg - sm
    let yrs = []
    for (let k = 0; k <= diff; k++) {
         yrs.push( sm + k )
    }

    if(returntype && returntype == 'months'){
        let mnths = ''
        yrs.map(yr=>{
            mnths += ''+gMontwhsInYear(yr)+';'
        })
        return mnths
    } else if(returntype && returntype == 'weeks'){
        let wks = ''
        yrs.map(yr=>{
            wks += ''+gWeeksInYear(yr)+';'
        })
        return wks
    } else if(returntype && returntype == 'quarters'){
        if(sessionStorage.getItem('isPeriodRange') === 'true' && sessionStorage.getItem('periodIsQuarters') === 'true'){
            return getQuartersBtwnPeriod(y1,y2)
        }else if(sessionStorage.getItem('isPeriodRange') === 'false' && sessionStorage.getItem('periodIsQuarters') === 'true'){
            return y1+';'+y2
        }
        let qtrs = ''
        yrs.map(yr=>{
            qtrs += ''+getQuartersInYear(yr)+';'
        })
        return qtrs
    }else{
        return yrs
    }
}

let getDefaultPeriod = () =>{
    let yr = new Date().getFullYear();
    let mn = parseFloat(new Date().getMonth())+1
    let qt 
    if(mn<4){
        qt = 1   
    }else if(mn>=4 && mn < 7){
        qt = 2   
    }else if(mn>=7 && mn < 10){
        qt = 3   
    }else if(mn>=10){qt = 4}

    let dp = ''
    for (let c = 1; c <= qt; c++) {
        dp += yr+'Q'+c+';'
    }
    return dp
}

const getQuartersInYear = yr => {
    let t_yr = new Date().getFullYear();
    if(yr && yr == t_yr){return getDefaultPeriod()}
    if(!yr || yr.length <4){ yr = 2020 }
    return ''+yr+'Q1;'+yr+'Q2;'+yr+'Q3;'+yr+'Q4';
}


function changeHashOnFilter(new_param){ //new_param = {ou: 'Hfvgj5...'} OR {pe: '2020W12'}
    let curr_hash = window.location.hash.substr(1)
    let curr_hash_obj = munchHash(curr_hash)
    let newHash = {}
    if(new_param.range != null && new_param.range != ""){ 
        // new_param.range = new_param.range.toString(); 
        newHash.range = new_param.range }else{
        if(curr_hash_obj.range) newHash.range = curr_hash_obj.range
    }
    if(new_param.pe){ newHash.pe = new_param.pe }else{
        if(curr_hash_obj.pe) newHash.pe = curr_hash_obj.pe
    }
    if(new_param.pe_to){ newHash.pe_to = new_param.pe_to }else{
        if(curr_hash_obj.pe_to) newHash.pe_to = curr_hash_obj.pe_to
    }
    if(typeof new_param.ou == "object" && new_param.ou.length > 1){ new_param.ou = new_param.ou.join(";") }
    if(new_param.ou){ newHash.ou = new_param.ou }else{
        if(curr_hash_obj.ou) newHash.ou = curr_hash_obj.ou
    }
    if(new_param.me){ newHash.me = new_param.me }else{
        if(curr_hash_obj.me) newHash.me = curr_hash_obj.me
    }
    let enc_hash = spreadHash(newHash)
    const new_url = `${window.location.origin}${window.location.pathname}${enc_hash}`
    window.location.hash = enc_hash
}

function setPeriodVal(pv) {
    $('#period-dropdownFrom').val(pv)
    $('#period-dropdownFrom').change()
}

const fetchSubcounties = county_id => {
    $("#subcounty-dropdown").html('')//<option disabled selected value="">Select subcounty</option>')
    let arr_of_counties = []
    if(typeof county_id == 'object'){
        arr_of_counties = county_id
    }else
    if(typeof county_id == 'string' && county_id.includes(',')){
        arr_of_counties = county_id.split(',')
    }else{
        arr_of_counties.push(county_id)
    }
    arr_of_counties.map(c_id=>{
        justFetch(`https://indextestingapp.uonbi.ac.ke/api/organisationUnits/${c_id}.json?includeChildren=true&fields=id,name`, {})
        .then(response=>{
            if( response.error ){
                throw JSON.stringify(response)
            }
            let subc = response.organisationUnits;
            subc.map(sc=>{
                $("#subcounty-dropdown").append('<option value="'+sc.id+'">'+sc.name+'</option>')
            })
            $("#subcounty-dropdown").removeAttr('disabled')
        })
        .catch(er=>{
            console.error('error: '+er)
        })
    })
}
const fetchwards = scounty_id => {
    $("#ward-dropdown").html('')//<option disabled selected value="">Select subcounty</option>')
    let arr_of_scounties = []
    if(typeof scounty_id == 'object'){
        arr_of_scounties = scounty_id
    }else
    if(typeof scounty_id == 'string' && scounty_id.includes(',')){
        arr_of_scounties = scounty_id.split(',')
    }else{
        arr_of_scounties.push(scounty_id)
    }
    arr_of_scounties.map(sc_id=>{
        justFetch(`https://indextestingapp.uonbi.ac.ke/api/organisationUnits/${sc_id}.json?includeChildren=true&fields=id,name`, {})
        .then(response=>{
            if( response.error ){
                throw JSON.stringify(response)
            }
            let ward = response.organisationUnits;
            ward.map(wrd=>{
                $("#ward-dropdown").append('<option value="'+wrd.id+'">'+wrd.name+'</option>')
            })
            $("#ward-dropdown").removeAttr('disabled')
        })
        .catch(er=>{
            console.error('error: '+er)
        })
    })
}
const fetchFacilities = scounty_id => {
    $("#facility-dropdown").html('')//<option disabled selected value="">Select subcounty</option>')
    let arr_of_facilities = []
    if(typeof scounty_id == 'object'){
        arr_of_facilities = scounty_id
    }else
    if(typeof scounty_id == 'string' && scounty_id.includes(',')){
        arr_of_facilities = scounty_id.split(',')
    }else{
        arr_of_facilities.push(scounty_id)
    }
    arr_of_facilities.map(sc_id=>{
        justFetch(`https://indextestingapp.uonbi.ac.ke/api/organisationUnits/${sc_id}.json?includeChildren=true&fields=id,name`, {})
        .then(response=>{
            if( response.error ){
                throw JSON.stringify(response)
            }
            let ward = response.organisationUnits;
            ward.map(wrd=>{
                $("#facility-dropdown").append('<option value="'+wrd.id+'">'+wrd.name+'</option>')
            })
            $("#facility-dropdown").removeAttr('disabled')
        })
        .catch(er=>{
            console.error('error: '+er)
        })
    })
}