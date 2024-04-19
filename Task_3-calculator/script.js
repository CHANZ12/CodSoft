function numbers(value){
    document.getElementById('result').value+=value;
}

function clearall(){
    document.getElementById('result').value= '';
}

function del(){
    var go=document.getElementById('result').value;
    document.getElementById('result').value=go.slice(0,-1);
}

function key(){
    var ca=document.getElementById('result').value;
    try
    {
        document.getElementById('result').value=eval(ca);
    }
    catch(error)
    {
        document.getElementById('result').value="                        --MAKKU MAKKU --   ";
    }
}
