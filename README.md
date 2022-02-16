# 02.15 아이폰 메모장 앱

![ezgif com-gif-maker](https://user-images.githubusercontent.com/93234748/154204755-fbbf04e1-9556-46b8-93fe-027cef956b44.gif)

# 첫 번째 컨텐츠 박스(년도별)

각 년도를 li 태그 안에 router-link로 감쌌다. 2019년은 router-link to="/OneBook", 2020년은 "/OneBook1" 식으로 지정.<Br>
클릭하면 router-view name="one1"으로 이동한다. 이는 책 가운데 컨텐츠 박스인 책 리스트를 보여준다

<img width="408" alt="스크린샷 2022-02-16 오후 2 56 34" src="https://user-images.githubusercontent.com/93234748/154205127-670f250f-fab6-470d-b257-05909114835c.png">
<img width="493" alt="스크린샷 2022-02-16 오후 2 57 21" src="https://user-images.githubusercontent.com/93234748/154205133-528a25af-df47-463c-afe8-1debfd3a88ff.png">

# 두 번째 컨텐츠 박스(책 리스트)

템플릿 안에 div 태그로 책 리스트를 만든다. 여기서 책 리스트를 클릭하면 책 내용이 보여야 하기에 또 div 안에 router-link로 감싸줬다. 세 개 영역 나눌 필요 없이 한 영역에서 하고 싶은데, 어떻게 하는지 모르겠다...🥲

<img width="325" alt="스크린샷 2022-02-16 오후 3 01 35" src="https://user-images.githubusercontent.com/93234748/154205645-80429c01-95ac-450c-b7ea-aa6f478ea3b6.png">
<img width="372" alt="스크린샷 2022-02-16 오후 3 01 44" src="https://user-images.githubusercontent.com/93234748/154205646-cb243b0c-d3e3-4dba-8cdf-2342ba12af1d.png">

책 정보들은 div 태그에 넣기엔 지금도 지저분한데 훨씬 지저분해질테고, 보기도 복잡할 거 같아서 $.get으로 텍스트 파일을 가져왔다. vue에서는 axios를 쓴다고 해서 구글링 해서 나온 문법으로 나름 적어보긴 했는데 에러나서.. 패스했다;ㅅ;<br>
각각의 책 리스트를 클릭하면 router-link의 path 이름에 따라 세 번째 컨텐츠 박스에 책 내용이 나타난다.

# 세 번째 컨텐츠 박스(책 내용)

여기는 책 내용만 보여주면 되기에 별 거 없었다. 책 내용은 마찬가지로 $.get으로 가져왔다. 

<img width="366" alt="스크린샷 2022-02-16 오후 3 05 39" src="https://user-images.githubusercontent.com/93234748/154206106-34f41980-b9c8-4efa-bf23-eee7425e5c22.png">

# 아쉬운 점 // 어떻게 고칠 것이냐가 관건,,,

📌 데이터를 잘 불러온 거 같기는 한데 새로고침 해야만 텍스트 내용이 나타난다. 왜이러는 걸까 ~<br>
📌 router-view 에 :key=“$route.fullPath”를 줘봐도 안 된다...
