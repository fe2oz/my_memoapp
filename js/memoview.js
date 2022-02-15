

var twoBook = {
    template: `
    <div class="memo__view__one">
        <div>
            <h1>안드레 애치먼 - 그 해, 여름 손님</h1>
            <span class="summer"></span>
        </div>
    </div>
    `
}
var twoBook1 = {
    template: `
    <div class="memo__view__one">
        <div>
            <h1>정혜윤 - 마술 라디오</h1>
            <span class="magin1"></span>
        </div>
    </div>
    `
}
var twoBook2 = {
    template: `
    <div class="memo__view__one">
        <div>
            <h1>김훈 - 공터에서</h1>
        </div>
    </div>
    `
}
var twoBook3 = {
    template: `
    <div class="memo__view__one">
        <div>
            <h1>다이앤 리 - 로야</h1>
        </div>
        <div>
            <span class="roya"></span>
        </div>
    </div>
    `
}
var twoBook4 = {
    template: `
    <div class="memo__view__one">
        <div>
            <h1>나쓰메 소세키 - 슬픈 인간</h1>
        </div>
    </div>
    `
}
var twoBook5 = {
    template: `
    <div class="memo__view__one">
        <div>
            <h1>박범신 - 소금</h1>
        </div>
    </div>
    `
}
var twoBook6 = {
    template: `
    <div class="memo__view__one">
        <div>
            <h1>김애란 - 두근두근 내 인생</h1>
        </div>
    </div>
    `
}
var twoBook7 = {
    template: `
    <div class="memo__view__one">
        <div>
            <h1>표창원 - 공범들의 도시</h1>
        </div>
    </div>
    `
}
var twoBook8 = {
    template: `
    <div class="memo__view__one">
        <div>
            <h1>표창원 - 프로파일러 표창원의 사건 추적</h1>
        </div>
    </div>
    `
}
var twoBook9 = {
    template: `
    <div class="memo__view__one">
        <div>
            <h1>표창원 - 한국의 CSI</h1>
        </div>
    </div>
    `
}
var twoBook10 = {
    template: `
    <div class="memo__view__one">
        <div>
            <h1>김훈 - 흑산</h1>
        </div>
    </div>
    `
}
var twoBook11 = {
    template: `
    <div class="memo__view__one">
        <div>
            <h1>김훈 - 남한산성</h1>
        </div>
    </div>
    `
}
var twoBook12 = {
    template: `
    <div class="memo__view__one">
        <div>
            <h1>고병권 - 묵묵</h1>
        </div>
    </div>
    `
}



///
$(function(){
    $.get("txt/OneBook_copy.txt", function(data) {
        $(".summer").html(data)
    });
});
$(function(){
    $.get("txt/OneBook_1_copy.txt", function(data) {
        $(".magic1").html(data)
    });
});