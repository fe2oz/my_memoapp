

var twoBook = {
    template: `
    <div class="memo__view__one">
        <div>
            <h1>안드레 애치먼 - 그 해, 여름 손님</h1>
        </div>
        <div class="test">

        </div>
    </div>
    `
}
var twoBook1 = {
    template: `
    <div class="memo__view__one">
        <div>
            <h1>정혜윤 - 마술 라디오</h1>
        </div>
    </div>
    `
}

var routes = [
    {
        path: '/OneBook',
        components: {
            one1: OneBook
        }
    },
    {
        path: '/OneBook1',
        components: {
            one1: OneBook1
        }
    },
    {
        path: '/twoBook',
        components: {
            two1: twoBook
        }
    }
]

var router = new VueRouter({
    routes
});

var app = new Vue({
    router
}).$mount("#app");




///
$(function(){
    $.get("../txt/OneBook.txt", function(data) {
        $(".test").html(data)
    });
});