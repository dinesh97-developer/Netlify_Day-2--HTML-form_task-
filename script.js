var margin = document.createElement("div");
margin.className = "margin";
var row = document.createElement("div");
row.className = "row modified d-flex justify-content-between";
var column =  document.createElement("div");
column.className = "col-sm-12 col-md-12 col-lg-3";
var form = document.createElement("form");
form.setAttribute("action"," ");
form.className = "mt-3 mb-5 form-style";
var heading = document.createElement("h1");
heading.innerHTML = "Form Submission:";

function form_label_create(ele_name,attr_name_1,attr_name_2,content){
    var ele = document.createElement(ele_name);
    ele.setAttribute(attr_name_1,attr_name_2);
    ele.innerHTML = content;
    return ele;
}
function form_input_create(input,type,attr_1,attr_2,name,class_1,placeholder,content){
    var ele = document.createElement(input);
    ele.setAttribute(type,attr_1);
    ele.id=attr_2;
    ele.setAttribute(name,attr_2);
    ele.className = class_1;
    ele.setAttribute(placeholder,content);
    return ele;
}
function form_break_create(ele_name){
    var ele = document.createElement(ele_name);
    return ele;
}
//First name
var label_fn = form_label_create("label","for","first_name","First Name:");
var break_fn = form_break_create("br");
var input_fn = form_input_create("input","type","text","first_name","name","form-control","placeholder","First Name");
var break_fn2 = form_break_create("br");
//Last name
var label_ln = form_label_create("label","for","last_name","Last Name:");
var break_ln = form_break_create("br");
var input_ln = form_input_create("input","type","text","last_name","name","form-control","placeholder","Last Name");
var break_ln2 = form_break_create("br");
//Address Line 1
var label_ad = form_label_create("label","for","address1","Address Line 1:");
var break_ad = form_break_create("br");
var input_ad = form_input_create("input","type","text","address1","name","form-control","placeholder","Address Line 1");
var break_ad2 = form_break_create("br");
//Address Line 2
var label_ad_1 = form_label_create("label","for","address2","Address Line 2:");
var break_ad_1 = form_break_create("br");
var input_ad_1 = form_input_create("input","type","text","address2","name","form-control","placeholder","Address Line 2");
var break_ad_12 = form_break_create("br");
//PIN
var label_pin = form_label_create("label","for","pin","PIN:");
var break_pin = form_break_create("br");
var input_pin = form_input_create("input","type","number","pin","name","form-control","placeholder","PIN");
var break_pin2 = form_break_create("br");
//Gender label
var gender = document.createElement("label");
gender.setAttribute("for","gender");
gender.innerHTML = "Gender:" 
var break_gn = form_break_create("br");
//Male-gender check point
var gender_male = document.createElement("input");
gender_male.setAttribute("type","radio");
gender_male.id = "gender";
gender_male.setAttribute("name","gender");
gender_male.setAttribute("value","Male");
gender_male.className ="gender m-2 mb-2";
var gender_malename = document.createElement("label");
gender_malename.innerHTML = "Male";
//Female-gender check point
var gender_female = document.createElement("input");
gender_female.setAttribute("type","radio");
gender_female.id = "gender";
gender_female.setAttribute("name","gender");
gender_female.setAttribute("value","Female");
gender_female.className ="gender m-2 mb-2";
var gender_femalename = document.createElement("label");
gender_femalename.innerHTML = "Female"
//Choice of Food
var food_label = document.createElement("label");
food_label.setAttribute("for","food");
food_label.innerHTML = "Choice of Food:"
var span =  document.createElement("span")
span.className = "span";
span.innerText = " (must choose at least 2 out of 5 options)";

food_label.append(span);

//Food label
var food_label_br = form_break_create("br");

function food_input(tag,type,type_attr,name,attr_1,value,value_name,class_attr){
    var ele = document.createElement(tag);
    ele.setAttribute(type,type_attr);
    ele.setAttribute(name,attr_1);
    ele.setAttribute(value,value_name);
    ele.id =attr_1;
    ele.className =class_attr;
    return ele;
}

var food_ni = food_input("input","type","checkbox","name","food","value","North Indian","food m-2");
var food_ni_label = document.createElement("label");
food_ni_label.innerHTML = "North Indian";
var food_ni_label_br = form_break_create("br");

var food_si = food_input("input","type","checkbox","name","food","value","South Indian","food m-2");
var food_si_label = document.createElement("label");
food_si_label.innerHTML = "South Indian";
var food_si_label_br = form_break_create("br");

var food_ch = food_input("input","type","checkbox","name","food","value","Chinese","food m-2");
var food_ch_label = document.createElement("label");
food_ch_label.innerHTML = "Chinese";
var food_ch_label_br = form_break_create("br");

var food_ja = food_input("input","type","checkbox","name","food","value","Japanese","food m-2");
var food_ja_label = document.createElement("label");
food_ja_label.innerHTML = "Japanese";
var food_ja_label_br = form_break_create("br");

var food_sf = food_input("input","type","checkbox","name","food","value","Sea-food","food m-2");
var food_sf_label = document.createElement("label");
food_sf_label.innerHTML = "Sea-Food";
var food_sf_label_br = form_break_create("br");

// State
var state_label = document.createElement("label");
state_label.setAttribute("type","state");
state_label.innerHTML = "State:"
var state_input =  document.createElement("input");
state_input.setAttribute("type","text");
state_input.id ="state";
state_input.setAttribute("name","state");
state_input.className = "form-control";
state_input.setAttribute("placeholder","State");
var state_input_br =form_break_create("br");

// country
var country_label = document.createElement("label");
country_label.setAttribute("type","country");
country_label.innerHTML = "Country:"
var country_input =  document.createElement("input");
country_input.setAttribute("type","text");
country_input.id ="country";
country_input.setAttribute("name","country");
country_input.className = "form-control";
country_input.setAttribute("placeholder","Country");
var country_input_br =form_break_create("br");

//Submit button

var button =  document.createElement("button");
button.setAttribute("type","submit");
button.id = "submit";
button.className = "form-control btn btn-secondary"; 
button.innerHTML = "Submit";

document.body.append(margin);
margin.append(row);
row.append(column);
column.append(form);
form.append(heading,label_fn,break_fn,input_fn,break_fn2);
form.append(label_ln,break_ln,input_ln,break_ln2);
form.append(label_ad,break_ad,input_ad,break_ad2);
form.append(label_ad_1,break_ad_1,input_ad_1,break_ad_12);
form.append(label_pin,break_pin,input_pin,break_pin2);
form.append(gender,break_gn,
    gender_male,gender_malename,
    gender_female,gender_femalename);
form.append(food_label,food_label_br,
    food_ni,food_ni_label,food_ni_label_br,
    food_si,food_si_label,food_si_label_br,
    food_ch,food_ch_label,food_ch_label_br,
    food_ja,food_ja_label,food_ja_label_br,
    food_sf,food_sf_label,food_sf_label_br,
    );
form.append(state_label,state_input,state_input_br,
    country_label,country_input,country_input_br);
form.append(button);

var div_tb = document.createElement("div");
div_tb.className = "col col-sm-12 col-md-12 col-lg-8";

var heading_tb = document.createElement("h1");
heading_tb.innerHTML = "Temporary Database";
var heading_tb_br = form_break_create("br");

var table = document.createElement("table");
table.className = "table table-striped";

var thead = document.createElement("thead");
thead.className ="bg-dark text-light";

var tr = document.createElement("tr");
var td_fn = document.createElement("td");
td_fn.innerHTML = "First Name";
var td_ln = document.createElement("td");
td_ln.innerHTML = "Last Name";
var td_add = document.createElement("td");
td_add.innerHTML = "Address";
var td_pin = document.createElement("td");
td_pin.innerHTML = "Pincode";
var td_gn = document.createElement("td");
td_gn.innerHTML = "Gender";
var td_food = document.createElement("td");
td_food.innerHTML = "Food";
var td_st = document.createElement("td");
td_st.innerHTML = "State";
var td_ct = document.createElement("td");
td_ct.innerHTML = "Country";

var tbody = document.createElement("tbody");
tbody.className ="tbody";
tbody.id = "tbody";

tr.append(td_fn,td_ln,td_add,td_pin,td_gn,td_food,td_st,td_ct);
thead.append(tr);

table.append(thead);
table.append(tbody);
row.append(div_tb);
div_tb.append(heading_tb,heading_tb_br,table);

//Logic
var submit = document.getElementById("submit");
submit.addEventListener("click",foo);

function foo(ele){
    ele.preventDefault();
    var address = [];
    address.push(address1.value);
    address.push(address2.value)
    console.log(address);

    var gender_js = document.getElementsByName("gender");
    var gender_value;
    console.log(gender_js.value);
    for(var i=0 ; i<gender_js.length;i++)
    {
        if(gender_js[i].checked){
            gender_value = gender_js[i].value;
        }
    }

    var food = document.getElementsByName("food");
    var food_list = [];
    var food_count = 0;
    console.log(food);
    for(var i=0; i<food.length;i++){
        if(food[i].checked){
            food_list.push(food[i].value);
            food_count++;
        }
    }

    if(food_list.length>=2)
        result = food_list.join(", ");
    else
        result = alert("Choose atleast 2 options out of 5 in food");
console.log(first_name.value);
    create_tabel(first_name.value,last_name.value,address.join(" "),pin.value,gender_value,result,state.value,country.value)
}

var fn_name = document.getElementById("first_name");
var ln_name = document.getElementById("last_name");
var address1 = document.getElementById("address1");
var address2 =  document.getElementById("address2");
var pin = document.getElementById("pin");
var gender_out =  document.getElementById("gender");
var food_out = document .getElementById("food");
var state = document.getElementById("state");
var country = document.getElementById("country");

function create_tabel(fn_name,ln_name,address,pin,gender_out,food_out,state,country){
    let tbody = document.getElementById("tbody");
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let td6 = document.createElement("td");
    let td7 = document.createElement("td");
    let td8 = document.createElement("td");
    td1.innerHTML = fn_name;
    td2.innerHTML = ln_name;
    td3.innerHTML = address;
    td4.innerHTML = pin;
    td5.innerHTML = gender_out;
    td6.innerHTML = food_out;
    td7.innerHTML = state;
    td8.innerHTML = country;
    console.log(td1,td2,td3,td4,td5,td6,td7,td8);
    tbody.append(tr);
    tr.append(td1,td2,td3,td4,td5,td6,td7,td8);
}