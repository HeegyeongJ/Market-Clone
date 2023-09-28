<form action="/signup" method="POST" id="signup-form">
    <h1>회원가입</h1>
    <div>
        <label for="id">아이디</label>
        <input type="text" name="id" id="id" required>
    </div>    
    <div>
        <label for="pw">비밀번호</label>
        <input type="password" name="pw" id="pw" required>
    </div>    
    <div>
        <label for="pw2">비밀번호 확인</label>
        <input type="password" name="pw2" id="pw2" required>
    </div>    
    <div>
        <label for="name">이름</label>
        <input type="text" name="name" id="name" required>
    </div>    
    <div>
        <label for="email">이메일</label>
        <input type="email" name="email" id="email" required>
    </div>    
    <div>
        <button type="submit">회원 가입하기</button>
    </div>   
    <div id="info"></div>
</form>