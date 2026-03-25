# Korean Slang Guide — 프로젝트 컨텍스트

## 프로젝트 개요
외국인(K-pop 팬, 한국어 학습자, 주한 외국인)을 위한 **한국어 슬랭/축약어 사전 웹사이트**.
SEO + GA4 데이터 학습이 주 목적인 실험 프로젝트.

## 기술 스택
- **Astro** (정적 사이트 생성기) — SEO 최적화를 위해 선택
- **순수 CSS** — 프레임워크 없음, CSS 변수로 테마 관리
- **순수 JS** — 검색/필터만 클라이언트 사이드
- **배포**: Cloudflare Pages (GitHub 연동 자동 배포)
- **분석**: GA4 (아직 연동 전, Layout.astro에 주석 처리된 자리 있음)

## 핵심 파일 구조
```
src/data/slang.ts        ← 모든 슬랭 데이터 (여기만 수정하면 페이지 자동 생성)
src/layouts/Layout.astro ← 공통 레이아웃, SEO 메타태그, GA4 스크립트 자리
src/components/SlangCard.astro ← 카드 컴포넌트 (홈 그리드 + 관련 단어용)
src/pages/index.astro    ← 홈페이지 (검색 + 카테고리 필터 + 그리드)
src/pages/slang/[slug].astro ← 개별 단어 상세 페이지 (getStaticPaths로 자동 생성)
public/robots.txt        ← 크롤러용
astro.config.mjs         ← sitemap 플러그인 포함
```

## 데이터 구조 (slang.ts)
각 단어는 이 형태:
```ts
{
  slug: "kk",           // URL용 (/slang/kk)
  term: "ㅋㅋ",          // 실제 한국어 표현
  pronunciation: "keu-keu",
  meaning: "Haha / LOL", // 영어 의미 (짧게)
  description: "...",     // 영어 설명 (2~3문장)
  examples: [{ ko: "...", en: "..." }],
  category: "abbreviations", // categories 배열의 id와 매칭
  tags: ["laughter", "texting"],
  popularity: 5,          // 1~5, 홈 정렬용
}
```

## 디자인 토큰 (CSS 변수)
```css
--color-bg: #FAF9F6 (크림 배경)
--color-accent: #E8453C (레드 포인트)
--font-display: 'Plus Jakarta Sans' (영문)
--font-korean: 'Noto Sans KR' (한글)
```

## 코딩 원칙
- 간결한 코드 지향. 복잡해질 것 같으면 대안을 먼저 제시
- 수정 요청 시 요청된 부분만 수정, 다른 부분 건드리지 않기
- UI 언어는 영어 (타겟이 외국인)

## 현재 상태
- [x] 프로젝트 구조 세팅
- [x] 슬랭 데이터 20개+ 입력
- [x] 홈페이지 (검색/필터/그리드)
- [x] 상세 페이지 (동적 라우팅)
- [x] 레이아웃 + SEO 메타태그
- [x] sitemap 자동 생성 설정
- [ ] GA4 연동
- [ ] Google Search Console 등록
- [ ] Google Forms 제보 폼 연결
- [ ] 광고(AdSense) 연동
- [ ] 슬랭 데이터 확장 (50개 목표)
- [ ] OG 이미지 자동 생성
- [ ] 다크모드
