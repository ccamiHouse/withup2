# Git 워크플로우 모범 사례

## Git 작업 모범 사례

### 1. 커밋 전 확인사항
- **코드 리뷰**: 변경사항을 다시 한번 검토
- **테스트 실행**: 로컬에서 테스트 실행 확인
- **컴파일 확인**: 빌드 오류 없는지 확인
- **의미 있는 커밋 메시지**: 변경사항을 명확히 설명하는 메시지 작성

### 2. 푸시 전 필수 확인 ⭐ (중요)
**Git 푸시를 실행하기 전에 반드시 작업자에게 확인을 받아야 합니다.**

#### 푸시 전 확인 절차:
1. **변경사항 요약**: 어떤 파일이 변경되었는지 설명
2. **영향도 분석**: 변경사항이 시스템에 미치는 영향 설명
3. **테스트 상태**: 로컬 테스트 결과 확인
4. **작업자 승인**: 작업자로부터 명시적인 승인 받기

#### 푸시 금지 상황:
- ❌ 작업자 확인 없이 푸시 금지
- ❌ 테스트 실패 시 푸시 금지
- ❌ 컴파일 오류 시 푸시 금지
- ❌ 민감한 정보 포함 시 푸시 금지

#### 올바른 푸시 프로세스:
```bash
# 1. 변경사항 확인
git status
git diff

# 2. 작업자에게 변경사항 설명 및 승인 요청
# "다음 변경사항을 푸시하려고 합니다: [변경사항 요약]"
# "승인해주시면 푸시하겠습니다."

# 3. 작업자 승인 후 푸시 실행
git add .
git commit -m "의미 있는 커밋 메시지"
git push origin main
```

### 3. 커밋 메시지 규칙
- **형식**: `타입: 간단한 설명`
- **타입**: feat, fix, docs, style, refactor, test, chore
- **예시**: `feat: 카카오 로그인 기능 추가`

```bash
# ✅ 좋은 커밋 메시지 예시
feat: 카카오 OAuth 로그인 기능 구현
fix: CORS 설정 오류 해결
docs: API 문서 업데이트
refactor: 사용자 서비스 로직 개선

# ❌ 나쁜 커밋 메시지 예시
수정
변경
업데이트
버그 수정
```

### 4. 브랜치 관리
- **main 브랜치**: 프로덕션 배포용
- **feature 브랜치**: 새로운 기능 개발용
- **hotfix 브랜치**: 긴급 버그 수정용
- **브랜치명 규칙**: `feature/기능명`, `hotfix/버그명`

### 5. 충돌 해결
- **pull 먼저**: 푸시 전에 최신 변경사항 pull
- **충돌 해결**: 충돌 발생 시 신중하게 해결
- **테스트 재실행**: 충돌 해결 후 테스트 재실행

## Git 명령어 모범 사례

### 1. 기본 워크플로우
```bash
# 현재 상태 확인
git status

# 변경사항 확인
git diff

# 변경사항 스테이징
git add .

# 특정 파일만 스테이징
git add src/main/java/example/Example.java

# 커밋
git commit -m "feat: 새로운 기능 추가"

# 푸시
git push origin main
```

### 2. 브랜치 작업
```bash
# 새 브랜치 생성 및 체크아웃
git checkout -b feature/new-feature

# 브랜치 목록 확인
git branch

# 브랜치 전환
git checkout main

# 브랜치 병합
git merge feature/new-feature

# 브랜치 삭제
git branch -d feature/new-feature
```

### 3. 히스토리 관리
```bash
# 커밋 히스토리 확인
git log --oneline

# 최근 N개 커밋 확인
git log --oneline -5

# 특정 파일의 히스토리 확인
git log --follow src/main/java/example/Example.java
```

### 4. 원격 저장소 관리
```bash
# 원격 저장소 목록 확인
git remote -v

# 원격 저장소 추가
git remote add origin https://github.com/username/repository.git

# 원격 저장소에서 최신 변경사항 가져오기
git fetch origin

# 원격 저장소와 동기화
git pull origin main
```

## Git 보안 모범 사례

### 1. 민감한 정보 보호
- **비밀번호, API 키**: 절대 커밋하지 않음
- **개인정보**: 로그, 설정 파일에서 제외
- **환경변수**: .env 파일 사용, .gitignore에 추가

### 2. .gitignore 설정
```gitignore
# 환경변수 파일
.env
.env.local
.env.production

# IDE 설정 파일
.idea/
.vscode/
*.iml

# 빌드 결과물
target/
build/
*.class

# 로그 파일
*.log
logs/

# 운영체제 파일
.DS_Store
Thumbs.db
```

### 3. 커밋 전 검증
```bash
# 스테이징된 파일 확인
git diff --cached

# 전체 프로젝트 검색 (민감한 정보 확인)
grep -r "password\|secret\|key" src/

# 빌드 테스트
./gradlew clean build
```

## Git 협업 모범 사례

### 1. 코드 리뷰 프로세스
1. **작업자 확인**: 푸시 전 작업자에게 변경사항 설명
2. **코드 리뷰**: 동료 개발자의 코드 검토
3. **피드백 반영**: 리뷰 의견에 따른 코드 수정
4. **승인 후 푸시**: 최종 승인 후 메인 브랜치에 푸시

### 2. 충돌 방지
```bash
# 작업 시작 전 최신 코드 가져오기
git pull origin main

# 작업 중 주기적으로 동기화
git fetch origin
git rebase origin/main
```

### 3. 커밋 단위 관리
- **작은 단위**: 논리적으로 하나의 작업을 하나의 커밋으로
- **원자적 커밋**: 각 커밋이 독립적으로 동작 가능해야 함
- **명확한 메시지**: 커밋 메시지만으로 변경사항 파악 가능

## Git 문제 해결

### 1. 커밋 취소
```bash
# 마지막 커밋 취소 (변경사항 유지)
git reset --soft HEAD~1

# 마지막 커밋 완전 삭제
git reset --hard HEAD~1

# 특정 커밋으로 되돌리기
git reset --hard <commit-hash>
```

### 2. 충돌 해결
```bash
# 충돌 발생 시
git status  # 충돌 파일 확인
# 파일 수동 편집 후
git add <conflicted-file>
git commit -m "resolve: 충돌 해결"
```

### 3. 브랜치 복구
```bash
# 삭제된 브랜치 복구
git checkout -b <branch-name> <commit-hash>

# 브랜치 히스토리 확인
git reflog
```

## Git 훅 활용

### 1. Pre-commit Hook
```bash
#!/bin/sh
# .git/hooks/pre-commit

# 코드 포맷팅 검사
./gradlew spotlessCheck

# 테스트 실행
./gradlew test

# 빌드 확인
./gradlew build -x test
```

### 2. Commit-msg Hook
```bash
#!/bin/sh
# .git/hooks/commit-msg

# 커밋 메시지 형식 검사
commit_regex='^(feat|fix|docs|style|refactor|test|chore): .+'

if ! grep -qE "$commit_regex" "$1"; then
    echo "커밋 메시지 형식이 올바르지 않습니다."
    echo "형식: type: description"
    echo "타입: feat, fix, docs, style, refactor, test, chore"
    exit 1
fi
```

## Git 성능 최적화

### 1. 저장소 크기 관리
```bash
# 불필요한 파일 제거
git filter-branch --tree-filter 'rm -rf large-files' HEAD

# 가비지 컬렉션
git gc --aggressive --prune=now
```

### 2. 대용량 파일 처리
```bash
# Git LFS 사용
git lfs install
git lfs track "*.zip"
git lfs track "*.pdf"
```

## Git 도구 및 확장

### 1. 유용한 Git 도구
- **GitHub Desktop**: GUI 기반 Git 클라이언트
- **SourceTree**: Atlassian의 Git GUI 도구
- **GitKraken**: 시각적 Git 클라이언트

### 2. VS Code Git 확장
- **GitLens**: Git 히스토리 및 블레임 정보 표시
- **Git Graph**: 브랜치 그래프 시각화
- **Git History**: 파일 히스토리 확인

## 참고 자료
- [Git 공식 문서](https://git-scm.com/doc)
- [GitHub Git Handbook](https://guides.github.com/introduction/git-handbook/)
- [Atlassian Git Tutorials](https://www.atlassian.com/git/tutorials)
- [Pro Git Book](https://git-scm.com/book)
