# Svelte Movie app

Svelte.js와 OMDb API를 사용하는 영화 검색 애플리케이션입니다.<br>
Svelte API와 관련한 주요 내용은 [Svelte.js 완벽 가이드(Renew)](https://heropy.blog/2019/09/29/svelte/) 문서를 참고하세요.

[DEMO](https://competent-cori-258206.netlify.app/)

## 개요

### Spec

- Svelte.js
- Snowpack
- Svelte SPA Router
- OMDb API
- Netlify
  - Hosting with GitHub(Continuous Deployment)
  - Functions(Serverless)

### Goals

- 템플릿을 사용하지 않고, Snowpack으로 Svelte 프로젝트를 구성할 수 있습니다.
- SPA(Single Page Application)를 위한 Router(Svelte SPA Router)를 구성해 페이지 단위로 개발할 수 있습니다.
- OMDb API를 활용해 실제 영화 정보를 검색하고 출력할 수 있습니다.
- API Key가 노출되지 않도록 Netlify Functions(서버리스 함수)를 사용해 백엔드를 구성하고, 로컬해서 테스트할 수 있습니다.
- GitHub 저장소에 Push(업로드)하고 Netlify Hosting으로 CD(지속적인 배포)를 적용할 수 있습니다.

## 패키지

> 설치할 각 패키지(모듈)의 설치 버전이 예제와 다른 경우 사용법이 달라질 수 있기 때문에,
> 모든 패키지를 완성 예제의 package.json 파일에 명시된 버전과 동일하게 설치하는 것을 권장합니다.

- snowpack: 프로젝트를 빌드하기 위한 핵심 패키지입니다.  
- @snowpack/plugin-svelte: Snowpack에서 Svelte를 해석할 수 있습니다. `svelte-preprocess`가 같이 설치됩니다.
- @snowpack/plugin-dotenv: 환경 변수를 사용합니다.(.env 파일)
- @snowpack/plugin-sass: SCSS를 사용합니다. `node-sass`가 같이 설치됩니다.
- @snowpack/plugin-optimize: 결과를 압축하고 번들링하는 등 최종 결과를 최적화합니다. 
- @snowpack/plugin-babel: 프로젝트의 JavaScript 파일을 변환합니다. 콘솔 제거 패키지를 사용하기 위해 구성합니다.
- babel-plugin-transform-remove-console: 배포할 제품에서는 불필요한 콘솔 명령을 제거하는 것이 좋습니다.
- svelte: Svelte API를 사용하기 위한 핵심 패키지입니다.
- svelte-spa-router: SPA에 최적화된 Hash 기반 라우팅을 활용할 수 있습니다.
- autoprefixer: CSS에 자동으로 공급 업체 접두사(Vendor prefix)를 적용합니다.
- postcss: CSS 후처리 패키지로 `autoprefixer`를 사용하기 위해 설치합니다.
- lodash: 다양한 유틸리티 기능을 제공하는 자바스크립트 라이브러리입니다.
- axios:  HTTP 클라이언트 라이브러리로, OMDb API를 통해 영화 정보를 요청하기 위해 사용합니다.
- qs: 쿼리스트링(Query String)을 분석하는 라이브러리입니다.
- netlify-cli: Netlify 명령을 사용해 로컬에서 프로젝트와 서버리스 함수가 통신하기 위해 사용합니다.
