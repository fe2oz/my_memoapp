

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
            <span class="magic1"></span>
        </div>
    </div>
    `
}
var twoBook2 = {
    template: `
    <div class="memo__view__one">
        <div>
            <h1>김훈 - 공터에서</h1>
            <span class="empty"></span>
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
            <span class="roya1"></span>
        </div>
    </div>
    `
}
var twoBook4 = {
    template: `
    <div class="memo__view__one">
        <div>
            <h1>나쓰메 소세키 - 슬픈 인간</h1>
            <span class="sadpeople1"></span>
        </div>
    </div>
    `
}
var twoBook5 = {
    template: `
    <div class="memo__view__one">
        <div>
            <h1>박범신 - 소금</h1>
            <span class="salt1"></span>
        </div>
    </div>
    `
}
var twoBook6 = {
    template: `
    <div class="memo__view__one">
        <div>
            <h1>김애란 - 두근두근 내 인생</h1>
            <span class="aeran1"></span>
        </div>
    </div>
    `
}
var twoBook7 = {
    template: `
    <div class="memo__view__one">
        <div>
            <h1>표창원 - 공범들의 도시</h1>
            <span class="accomplice"></span>
        </div>
    </div>
    `
}
var twoBook8 = {
    template: `
    <div class="memo__view__one">
        <div>
            <h1>표창원 - 프로파일러 표창원의 사건 추적</h1>
            <span class="profiler"></span>
        </div>
    </div>
    `
}
var twoBook9 = {
    template: `
    <div class="memo__view__one">
        <div>
            <h1>표창원 - 한국의 CSI</h1>
            <span class="csi"></span>
        </div>
    </div>
    `
}
var twoBook10 = {
    template: `
    <div class="memo__view__one">
        <div>
            <h1>김훈 - 흑산</h1>
            <span class="bm"></span>
        </div>
    </div>
    `
}
var twoBook11 = {
    template: `
    <div class="memo__view__one">
        <div>
            <h1>김훈 - 남한산성</h1>
            <span class="fortress"></span>
        </div>
    </div>
    `
}
var twoBook12 = {
    template: `
    <div class="memo__view__one">
        <div>
            <h1>고병권 - 묵묵</h1>
            <span class="mukmuk1"></span>
        </div>
    </div>
    `
}
var twoBook13 = {
    template: `
    <div class="memo__view__one">
        <div>
            <h1>볼프강 보르헤르트 - 이별 없는 세대</h1>
            <span class="part1"></span>
        </div>
    </div>
    `
}
var twoBook14 = {
    template: `
    <div class="memo__view__one">
        <div>
            <h1>어니스트 헤밍웨이 - 노인과 바다</h1>
            <span class="sea1"></span>
        </div>
    </div>
    `
}
var twoBook15 = {
    template: `
    <div class="memo__view__one">
        <div>
            <h1>코맥 매카시 - 더 로드</h1>
            <span class="theroad1"></span>
        </div>
    </div>
    `
}
var twoBook16 = {
    template: `
    <div class="memo__view__one">
        <div>
            <h1>김훈 - 내 젊은 날의 숲</h1>
            <span class="forest1"></span>
        </div>
    </div>
    `
}
var twoBook17 = {
    template: `
    <div class="memo__view__one">
        <div>
            <h1>파트리크 쥐스킨트 - 향수</h1>
            <span class="perfume1"></span>
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
$(function(){
    $.get("txt/OneBook_2_copy.txt", function(data) {
        $(".empty").html(data)
    });
});
$(function(){
    $.get("txt/OneBook_3_copy.txt", function(data) {
        $(".roya1").html(data)
    });
});
$(function(){
    $.get("txt/OneBook_4_copy.txt", function(data) {
        $(".sadpeople1").html(data)
    });
});
$(function(){
    $.get("txt/OneBook_5_copy.txt", function(data) {
        $(".salt1").html(data)
    });
});
$(function(){
    $.get("txt/OneBook_6_copy.txt", function(data) {
        $(".aeran1").html(data)
    });
});
$(function(){
    $.get("txt/OneBook_7_copy.txt", function(data) {
        $(".accomplice").html(data)
    });
});
$(function(){
    $.get("txt/OneBook_8_copy.txt", function(data) {
        $(".profiler").html(data)
    });
});
$(function(){
    $.get("txt/OneBook_9_copy.txt", function(data) {
        $(".csi").html(data)
    });
});
$(function(){
    $.get("txt/OneBook_10_copy.txt", function(data) {
        $(".bm").html(data)
    });
});
$(function(){
    $.get("txt/OneBook_11_copy.txt", function(data) {
        $(".fortress").html(data)
    });
});
$(function(){
    $.get("txt/OneBook_12_copy.txt", function(data) {
        $(".mukmuk1").html(data)
    });
});
$(function(){
    $.get("txt/TwoBook_copy.txt", function(data) {
        $(".part1").html(data)
    });
});
$(function(){
    $.get("txt/TwoBook_1_copy.txt", function(data) {
        $(".sea1").html(data)
    });
});
$(function(){
    $.get("txt/TwoBook_2_copy.txt", function(data) {
        $(".theroad1").html(data)
    });
});
$(function(){
    $.get("txt/TwoBook_3_copy.txt", function(data) {
        $(".forest1").html(data)
    });
});
$(function(){
    $.get("txt/TwoBook_4_copy.txt", function(data) {
        $(".perfume1").html(data)
    });
});