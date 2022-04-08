
function Move(){
    const Hanoi = document.getElementsByName("hanoi");
    if(Hanoi[0].checked)
        Right.push(Left.pop());
    if(Hanoi[1].checked)
        Left.push(Right.pop());
    Draw()
}
function Init(){
    Left = [];
    Right = [];

    Left.push("🟥 🟥 🟥 🟥 🟥 🟥 🟥 🟥 🟥 🟥 🟥");
    Left.push("🟨 🟨 🟨 🟨 🟨 🟨 🟨 🟨 🟨");
    Left.push("🟩 🟩 🟩 🟩 🟩 🟩 🟩");
    Left.push("🟦 🟦 🟦 🟦 🟦");
    Left.push("🟪 🟪 🟪");
    Left.push("⬛");
    Draw();
}
function Draw()
{
    var side_left = document.getElementsByClassName("first")
    while ( side_left[0].hasChildNodes() ) { side_left[0].removeChild( side_left[0].firstChild ); }
    var side_right = document.getElementsByClassName("third")
    while ( side_right[0].hasChildNodes() ) { side_right[0].removeChild( side_right[0].firstChild ); }
    for(var i=0;i<Left.length;i++){
        let ptag = document.createElement('p');
        ptag.appendChild(document.createTextNode(Left[i]));
        side_left[0].appendChild(ptag);
    }
    for(var i=0;i<Right.length;i++){
        let ptag = document.createElement('p');
        ptag.appendChild(document.createTextNode(Right[i]));
        side_right[0].appendChild(ptag);
    }   
}
