//META{"name":"MemberListRemover"}*//

function MemberListRemover() {}
var removeList = ['燃やしたい人A','燃やしたい人B'];

MemberListRemover.prototype.start = function () {


};

MemberListRemover.prototype.onSwitch = function() {

};
MemberListRemover.prototype.stop = function () {

};

MemberListRemover.prototype.getName = function() {
    return "MemberList Remover";
};

MemberListRemover.prototype.getDescription = function() {
    return "メンバーリストからjsファイルremoveListに書かれた名前の人を消し去ります";
};

MemberListRemover.prototype.getVersion = function() {
    return "1.0";
};

MemberListRemover.prototype.getAuthor = function() {
    return "LNTakeshi";
};

MemberListRemover.prototype.observer = function(e) {
    removeList.forEach(l => {
        
        if(e.addedNodes.length != 0 && e.addedNodes[0].tagName == "DIV" && e.addedNodes[0].textContent.includes(l)){
            $("div.da-layout:has(div.da-content:has(div.da-nameAndDecorators:has(div.da-name:has(span:contains("+l+")))))").addClass("removeClass");
            console.log(e.addedNodes[0]);
        }
    });

};

