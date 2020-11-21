# Svelte Movie app

Svelte.js와 OMDb API를 사용하는 영화 검색 애플리케이션입니다.<br>
Svelte API와 관련한 주요 내용은 [Svelte.js 완벽 가이드(Renew)](https://heropy.blog/2019/09/29/svelte/) 문서를 참고하세요.

[DEMO](https://competent-cori-258206.netlify.app/)

## Summary

### Specs

- [Svelte.js](https://svelte.dev/)
- [Snowpack](https://www.snowpack.dev/)
- [Svelte SPA Router](https://github.com/ItalyPaleAle/svelte-spa-router)
- [OMDb API](http://www.omdbapi.com/)
- [Netlify](https://www.netlify.com/)
  - [Hosting with GitHub(Continuous Deployment)](https://docs.netlify.com/site-deploys/create-deploys/)
  - [Functions(Serverless)](https://docs.netlify.com/functions/configure-and-deploy/)

### Goals

- 템플릿을 사용하지 않고, Snowpack으로 Svelte 프로젝트를 구성할 수 있습니다.
- SPA(Single Page Application)를 위한 Router(Svelte SPA Router)를 구성해 페이지 단위로 개발할 수 있습니다.
- OMDb API를 활용해 실제 영화 정보를 검색하고 출력할 수 있습니다.
- API Key가 노출되지 않도록 Netlify Functions(서버리스 함수)를 사용해 백엔드를 구성하고, 로컬해서 테스트할 수 있습니다.
- GitHub 저장소에 Push(업로드)하고 Netlify Hosting으로 CD(지속적인 배포)를 적용할 수 있습니다.

## Packages

> 설치할 각 패키지(모듈)의 설치 버전이 예제와 다른 경우 사용법이 달라질 수 있기 때문에,<br>
> 모든 패키지를 완성 예제의 [package.json](https://github.com/HeropCode/Svelte-Movie-app/blob/master/package.json) 파일에 명시된 버전과 동일하게 설치하는 것을 권장합니다.

- [snowpack](https://github.com/snowpackjs/snowpack): 프로젝트를 빌드하기 위한 핵심 패키지입니다.  
- [@snowpack/plugin-svelte](https://github.com/snowpackjs/snowpack/tree/master/plugins/plugin-svelte#readme): Snowpack에서 Svelte를 해석할 수 있습니다. `svelte-preprocess`가 같이 설치됩니다.
- [@snowpack/plugin-dotenv](https://github.com/snowpackjs/snowpack/tree/master/plugins/plugin-dotenv#readme): 환경 변수를 사용합니다.(.env 파일)
- [@snowpack/plugin-sass](https://github.com/snowpackjs/snowpack/tree/master/plugins/plugin-sass#readme): SCSS를 사용합니다. `node-sass`가 같이 설치됩니다.
- [@snowpack/plugin-optimize](https://github.com/snowpackjs/snowpack/tree/master/plugins/plugin-optimize#readme): 결과를 압축하고 번들링하는 등 최종 결과를 최적화합니다. 
- [@snowpack/plugin-babel](https://github.com/snowpackjs/snowpack/tree/master/plugins/plugin-babel#readme): 프로젝트의 JavaScript 파일을 변환합니다. 콘솔 제거 패키지를 사용하기 위해 구성합니다.
- [babel-plugin-transform-remove-console](https://github.com/babel/minify/tree/master/packages/babel-plugin-transform-remove-console): 배포할 제품에서는 불필요한 콘솔 명령을 제거하는 것이 좋습니다.
- [svelte](https://github.com/sveltejs/svelte): Svelte API를 사용하기 위한 핵심 패키지입니다.
- [svelte-spa-router](https://github.com/ItalyPaleAle/svelte-spa-router): SPA에 최적화된 Hash 기반 라우팅을 활용할 수 있습니다.
- [autoprefixer](https://github.com/postcss/autoprefixer): CSS에 자동으로 공급 업체 접두사(Vendor prefix)를 적용합니다.
- [postcss](https://github.com/postcss/postcss): CSS 후처리 패키지로 `autoprefixer`를 사용하기 위해 설치합니다.
- [lodash](https://github.com/lodash/lodash): 다양한 유틸리티 기능을 제공하는 자바스크립트 라이브러리입니다.
- [axios](https://github.com/axios/axios):  HTTP 클라이언트 라이브러리로, OMDb API를 통해 영화 정보를 요청하기 위해 사용합니다.
- [qs](https://github.com/ljharb/qs): 쿼리스트링(Query String)을 분석하는 라이브러리입니다.
- [netlify-cli](https://github.com/netlify/cli): Netlify 명령을 사용해 로컬에서 프로젝트와 서버리스 함수가 통신하기 위해 사용합니다.
