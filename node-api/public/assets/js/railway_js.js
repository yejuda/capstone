function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "auto" });
}

var imageIndex = 0; // 초기 이미지 인덱스
var imageInterval; // 이미지 변경을 위한 인터벌 객체

// 이미지 변경을 위한 이미지 배열 리턴 함수 동적 생성
for (var i = 1; i <= 100; i++) {
  var getImagesFuncName = 'getImages' + i;
  window[getImagesFuncName] = createGetImagesFunc(i);
}

// 이미지 변경을 위한 이미지 배열 리턴 함수 생성
function createGetImagesFunc(index) {
  return function () {
    var images;
    // 각 이미지에 맞는 배열을 리턴하는 로직 작성
    if (index === 1) {
      images = [
        { src: 'assets/imgs/경의선숲길/식당/더담/1.PNG', description: '더담', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%9D%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/21433628?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: 'assets/imgs/경의선숲길/식당/더담/2.PNG', description: '더담', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%9D%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/21433628?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: 'assets/imgs/경의선숲길/식당/더담/3.PNG', description: '더담', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%9D%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/21433628?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: 'assets/imgs/경의선숲길/식당/더담/4.PNG', description: '더담', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%9D%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/21433628?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: 'assets/imgs/경의선숲길/식당/더담/5.PNG', description: '더담', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%9D%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/21433628?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 2) {
      images = [
        { src: "assets/imgs/경의선숲길/식당/몽탄/1.PNG", description: '몽탄', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%9D%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1810277002?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/경의선숲길/식당/몽탄/2.PNG", description: '몽탄', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%9D%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1810277002?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/경의선숲길/식당/몽탄/3.PNG", description: '몽탄', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%9D%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1810277002?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/경의선숲길/식당/몽탄/4.PNG", description: '몽탄', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%9D%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1810277002?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/경의선숲길/식당/몽탄/5.PNG", description: '몽탄', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%9D%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1810277002?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 3) {
      images = [
        { src: "assets/imgs/경의선숲길/식당/미쁘동/1.PNG", description: '미쁘동', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%9D%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1685805793?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/경의선숲길/식당/미쁘동/2.PNG", description: '미쁘동', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%9D%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1685805793?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/경의선숲길/식당/미쁘동/3.PNG", description: '미쁘동', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%9D%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1685805793?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/경의선숲길/식당/미쁘동/4.PNG", description: '미쁘동', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%9D%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1685805793?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/경의선숲길/식당/미쁘동/5.PNG", description: '미쁘동', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%9D%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1685805793?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 4) {
      images = [
        { src: "assets/imgs/경의선숲길/식당/빌라 더 다이닝/1.PNG", description: '빌라 더 다이닝', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%9D%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/637360725?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/경의선숲길/식당/빌라 더 다이닝/2.PNG", description: '빌라 더 다이닝', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%9D%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/637360725?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/경의선숲길/식당/빌라 더 다이닝/3.PNG", description: '빌라 더 다이닝', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%9D%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/637360725?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/경의선숲길/식당/빌라 더 다이닝/4.PNG", description: '빌라 더 다이닝', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%9D%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/637360725?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/경의선숲길/식당/빌라 더 다이닝/5.PNG", description: '빌라 더 다이닝', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%9D%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/637360725?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 5) {
      images = [
        { src: "assets/imgs/경의선숲길/식당/소이연남/1.PNG", description: '소이연남', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%9D%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/35402809?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/경의선숲길/식당/소이연남/2.PNG", description: '소이연남', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%9D%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/35402809?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/경의선숲길/식당/소이연남/3.PNG", description: '소이연남', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%9D%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/35402809?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/경의선숲길/식당/소이연남/4.PNG", description: '소이연남', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%9D%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/35402809?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/경의선숲길/식당/소이연남/5.PNG", description: '소이연남', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%9D%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/35402809?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 6) {
      images = [
        { src: "assets/imgs/경의선숲길/식당/수바이샹 훠궈/1.PNG", description: '수바이샹 훠궈', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%9D%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1179661211?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/경의선숲길/식당/수바이샹 훠궈/2.PNG", description: '수바이샹 훠궈', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%9D%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1179661211?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/경의선숲길/식당/수바이샹 훠궈/3.PNG", description: '수바이샹 훠궈', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%9D%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1179661211?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/경의선숲길/식당/수바이샹 훠궈/4.PNG", description: '수바이샹 훠궈', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%9D%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1179661211?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/경의선숲길/식당/수바이샹 훠궈/5.PNG", description: '수바이샹 훠궈', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%9D%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1179661211?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 7) {
      images = [
        { src: "assets/imgs/경의선숲길/카페/미크플로 연트럴파크점/3.PNG", description: '미크플로 연트럴파크점', link: 'https://naver.me/x3ifc64x' },
        { src: "assets/imgs/경의선숲길/카페/미크플로 연트럴파크점/4.PNG", description: '미크플로 연트럴파크점', link: 'https://naver.me/x3ifc64x' },
        { src: "assets/imgs/경의선숲길/카페/미크플로 연트럴파크점/5.PNG", description: '미크플로 연트럴파크점', link: 'https://naver.me/x3ifc64x' },
        { src: "assets/imgs/경의선숲길/카페/미크플로 연트럴파크점/1.PNG", description: '미크플로 연트럴파크점', link: 'https://naver.me/x3ifc64x' },
        { src: "assets/imgs/경의선숲길/카페/미크플로 연트럴파크점/2.PNG", description: '미크플로 연트럴파크점', link: 'https://naver.me/x3ifc64x' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 8) {
      images = [
        { src: "assets/imgs/경의선숲길/카페/버터앤쉘터 연남점/5.PNG", description: '버터앤쉘터 연남점', link: 'https://naver.me/GA6FzeBq' },
        { src: "assets/imgs/경의선숲길/카페/버터앤쉘터 연남점/1.PNG", description: '버터앤쉘터 연남점', link: 'https://naver.me/GA6FzeBq' },
        { src: "assets/imgs/경의선숲길/카페/버터앤쉘터 연남점/2.PNG", description: '버터앤쉘터 연남점', link: 'https://naver.me/GA6FzeBq' },
        { src: "assets/imgs/경의선숲길/카페/버터앤쉘터 연남점/3.PNG", description: '버터앤쉘터 연남점', link: 'https://naver.me/GA6FzeBq' },
        { src: "assets/imgs/경의선숲길/카페/버터앤쉘터 연남점/4.PNG", description: '버터앤쉘터 연남점', link: 'https://naver.me/GA6FzeBq' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 9) {
      images = [
        { src: "assets/imgs/경의선숲길/카페/아오이토리/4.PNG", description: '아오이토리', link: 'https://naver.me/GVAW8n8f' },
        { src: "assets/imgs/경의선숲길/카페/아오이토리/5.PNG", description: '아오이토리', link: 'https://naver.me/GVAW8n8f' },
        { src: "assets/imgs/경의선숲길/카페/아오이토리/1.PNG", description: '아오이토리', link: 'https://naver.me/GVAW8n8f' },
        { src: "assets/imgs/경의선숲길/카페/아오이토리/2.PNG", description: '아오이토리', link: 'https://naver.me/GVAW8n8f' },
        { src: "assets/imgs/경의선숲길/카페/아오이토리/3.PNG", description: '아오이토리', link: 'https://naver.me/GVAW8n8f' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 10) {
      images = [
        { src: "assets/imgs/경의선숲길/카페/어더아사/2.PNG", description: '어더아사', link: 'https://naver.me/xvLTzwGw' },
        { src: "assets/imgs/경의선숲길/카페/어더아사/3.PNG", description: '어더아사', link: 'https://naver.me/xvLTzwGw' },
        { src: "assets/imgs/경의선숲길/카페/어더아사/4.PNG", description: '어더아사', link: 'https://naver.me/xvLTzwGw' },
        { src: "assets/imgs/경의선숲길/카페/어더아사/5.PNG", description: '어더아사', link: 'https://naver.me/xvLTzwGw' },
        { src: "assets/imgs/경의선숲길/카페/어더아사/1.PNG", description: '어더아사', link: 'https://naver.me/xvLTzwGw' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 11) {
      images = [
        { src: "assets/imgs/경의선숲길/카페/조앤도슨/4.PNG", description: '조앤도슨', link: 'https://naver.me/x35MlBLG' },
        { src: "assets/imgs/경의선숲길/카페/조앤도슨/5.PNG", description: '조앤도슨', link: 'https://naver.me/x35MlBLG' },
        { src: "assets/imgs/경의선숲길/카페/조앤도슨/1.PNG", description: '조앤도슨', link: 'https://naver.me/x35MlBLG' },
        { src: "assets/imgs/경의선숲길/카페/조앤도슨/2.PNG", description: '조앤도슨', link: 'https://naver.me/x35MlBLG' },
        { src: "assets/imgs/경의선숲길/카페/조앤도슨/3.PNG", description: '조앤도슨', link: 'https://naver.me/x35MlBLG' }
  
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 12) {
      images = [
        { src: "assets/imgs/경의선숲길/카페/청수당공명/2.PNG", description: '청수당공명', link: 'https://naver.me/xKQcnmKY' },
        { src: "assets/imgs/경의선숲길/카페/청수당공명/3.PNG", description: '청수당공명', link: 'https://naver.me/xKQcnmKY' },
        { src: "assets/imgs/경의선숲길/카페/청수당공명/4.PNG", description: '청수당공명', link: 'https://naver.me/xKQcnmKY' },
        { src: "assets/imgs/경의선숲길/카페/청수당공명/5.PNG", description: '청수당공명', link: 'https://naver.me/xKQcnmKY' },
        { src: "assets/imgs/경의선숲길/카페/청수당공명/1.PNG", description: '청수당공명', link: 'https://naver.me/xKQcnmKY' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 13) {
      images = [
        { src: "assets/imgs/경의선숲길/놀거리/CR Collective/5.PNG", description: 'CR Collective', link: 'https://map.naver.com/v5/search/CR%20Collective/place/49072062?entry=plt&c=15,0,0,0,dh&isCorrectAnswer=true' },
        { src: "assets/imgs/경의선숲길/놀거리/CR Collective/1.PNG", description: 'CR Collective', link: 'https://map.naver.com/v5/search/CR%20Collective/place/49072062?entry=plt&c=15,0,0,0,dh&isCorrectAnswer=true' },
        { src: "assets/imgs/경의선숲길/놀거리/CR Collective/2.PNG", description: 'CR Collective', link: 'https://map.naver.com/v5/search/CR%20Collective/place/49072062?entry=plt&c=15,0,0,0,dh&isCorrectAnswer=true' },
        { src: "assets/imgs/경의선숲길/놀거리/CR Collective/3.PNG", description: 'CR Collective', link: 'https://map.naver.com/v5/search/CR%20Collective/place/49072062?entry=plt&c=15,0,0,0,dh&isCorrectAnswer=true' },
        { src: "assets/imgs/경의선숲길/놀거리/CR Collective/4.PNG", description: 'CR Collective', link: 'https://map.naver.com/v5/search/CR%20Collective/place/49072062?entry=plt&c=15,0,0,0,dh&isCorrectAnswer=true' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 14) {
      images = [
        { src: "assets/imgs/경의선숲길/놀거리/도토리 캐리커쳐/2.PNG", description: '도토리 캐리커쳐', link: 'https://map.naver.com/v5/search/%EB%8F%84%ED%86%A0%EB%A6%AC%20%EC%BA%90%EB%A6%AC%EC%BB%A4%EC%B3%90/place/1663897441?entry=plt&c=15,0,0,0,dh&isCorrectAnswer=true' },
        { src: "assets/imgs/경의선숲길/놀거리/도토리 캐리커쳐/3.PNG", description: '도토리 캐리커쳐', link: 'https://map.naver.com/v5/search/%EB%8F%84%ED%86%A0%EB%A6%AC%20%EC%BA%90%EB%A6%AC%EC%BB%A4%EC%B3%90/place/1663897441?entry=plt&c=15,0,0,0,dh&isCorrectAnswer=true' },
        { src: "assets/imgs/경의선숲길/놀거리/도토리 캐리커쳐/4.PNG", description: '도토리 캐리커쳐', link: 'https://map.naver.com/v5/search/%EB%8F%84%ED%86%A0%EB%A6%AC%20%EC%BA%90%EB%A6%AC%EC%BB%A4%EC%B3%90/place/1663897441?entry=plt&c=15,0,0,0,dh&isCorrectAnswer=true' },
        { src: "assets/imgs/경의선숲길/놀거리/도토리 캐리커쳐/5.PNG", description: '도토리 캐리커쳐', link: 'https://map.naver.com/v5/search/%EB%8F%84%ED%86%A0%EB%A6%AC%20%EC%BA%90%EB%A6%AC%EC%BB%A4%EC%B3%90/place/1663897441?entry=plt&c=15,0,0,0,dh&isCorrectAnswer=true' },
        { src: "assets/imgs/경의선숲길/놀거리/도토리 캐리커쳐/1.PNG", description: '도토리 캐리커쳐', link: 'https://map.naver.com/v5/search/%EB%8F%84%ED%86%A0%EB%A6%AC%20%EC%BA%90%EB%A6%AC%EC%BB%A4%EC%B3%90/place/1663897441?entry=plt&c=15,0,0,0,dh&isCorrectAnswer=true' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 15) {
      images = [
        { src: "assets/imgs/경의선숲길/놀거리/서울콜렉터/1.PNG", description: '서울콜렉터', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%BD%9C%EB%A0%89%ED%84%B0/place/1307928352?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/경의선숲길/놀거리/서울콜렉터/2.PNG", description: '서울콜렉터', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%BD%9C%EB%A0%89%ED%84%B0/place/1307928352?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/경의선숲길/놀거리/서울콜렉터/3.PNG", description: '서울콜렉터', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%BD%9C%EB%A0%89%ED%84%B0/place/1307928352?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/경의선숲길/놀거리/서울콜렉터/4.PNG", description: '서울콜렉터', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%BD%9C%EB%A0%89%ED%84%B0/place/1307928352?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/경의선숲길/놀거리/서울콜렉터/5.PNG", description: '서울콜렉터', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%BD%9C%EB%A0%89%ED%84%B0/place/1307928352?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 16) {
      images = [
        { src: "assets/imgs/경의선숲길/놀거리/세컨드스튜디오/3.PNG", description: '세컨드스튜디오', link: 'https://map.naver.com/v5/search/%EC%84%B8%EC%BB%A8%EB%93%9C%EC%8A%A4%ED%8A%9C%EB%94%94%EC%98%A4/place/13082154?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/경의선숲길/놀거리/세컨드스튜디오/4.PNG", description: '세컨드스튜디오', link: 'https://map.naver.com/v5/search/%EC%84%B8%EC%BB%A8%EB%93%9C%EC%8A%A4%ED%8A%9C%EB%94%94%EC%98%A4/place/13082154?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/경의선숲길/놀거리/세컨드스튜디오/5.PNG", description: '세컨드스튜디오', link: 'https://map.naver.com/v5/search/%EC%84%B8%EC%BB%A8%EB%93%9C%EC%8A%A4%ED%8A%9C%EB%94%94%EC%98%A4/place/13082154?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/경의선숲길/놀거리/세컨드스튜디오/1.PNG", description: '세컨드스튜디오', link: 'https://map.naver.com/v5/search/%EC%84%B8%EC%BB%A8%EB%93%9C%EC%8A%A4%ED%8A%9C%EB%94%94%EC%98%A4/place/13082154?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/경의선숲길/놀거리/세컨드스튜디오/2.PNG", description: '세컨드스튜디오', link: 'https://map.naver.com/v5/search/%EC%84%B8%EC%BB%A8%EB%93%9C%EC%8A%A4%ED%8A%9C%EB%94%94%EC%98%A4/place/13082154?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 17) {
      images = [
        { src: "assets/imgs/경의선숲길/놀거리/셀피스트 셀프사진관 홍대/4.PNG", description: '셀피스트 셀프사진관 홍대', link: 'https://map.naver.com/v5/search/%EC%85%80%ED%94%BC%EC%8A%A4%ED%8A%B8%20%EC%85%80%ED%94%84%EC%82%AC%EC%A7%84%EA%B4%80%20%ED%99%8D%EB%8C%80/place/1804449640?entry=plt&c=15,0,0,0,dh&isCorrectAnswer=true' },
        { src: "assets/imgs/경의선숲길/놀거리/셀피스트 셀프사진관 홍대/5.PNG", description: '셀피스트 셀프사진관 홍대', link: 'https://map.naver.com/v5/search/%EC%85%80%ED%94%BC%EC%8A%A4%ED%8A%B8%20%EC%85%80%ED%94%84%EC%82%AC%EC%A7%84%EA%B4%80%20%ED%99%8D%EB%8C%80/place/1804449640?entry=plt&c=15,0,0,0,dh&isCorrectAnswer=true' },
        { src: "assets/imgs/경의선숲길/놀거리/셀피스트 셀프사진관 홍대/1.PNG", description: '셀피스트 셀프사진관 홍대', link: 'https://map.naver.com/v5/search/%EC%85%80%ED%94%BC%EC%8A%A4%ED%8A%B8%20%EC%85%80%ED%94%84%EC%82%AC%EC%A7%84%EA%B4%80%20%ED%99%8D%EB%8C%80/place/1804449640?entry=plt&c=15,0,0,0,dh&isCorrectAnswer=true' },
        { src: "assets/imgs/경의선숲길/놀거리/셀피스트 셀프사진관 홍대/2.PNG", description: '셀피스트 셀프사진관 홍대', link: 'https://map.naver.com/v5/search/%EC%85%80%ED%94%BC%EC%8A%A4%ED%8A%B8%20%EC%85%80%ED%94%84%EC%82%AC%EC%A7%84%EA%B4%80%20%ED%99%8D%EB%8C%80/place/1804449640?entry=plt&c=15,0,0,0,dh&isCorrectAnswer=true' },
        { src: "assets/imgs/경의선숲길/놀거리/셀피스트 셀프사진관 홍대/3.PNG", description: '셀피스트 셀프사진관 홍대', link: 'https://map.naver.com/v5/search/%EC%85%80%ED%94%BC%EC%8A%A4%ED%8A%B8%20%EC%85%80%ED%94%84%EC%82%AC%EC%A7%84%EA%B4%80%20%ED%99%8D%EB%8C%80/place/1804449640?entry=plt&c=15,0,0,0,dh&isCorrectAnswer=true' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 18) {
      images = [
        { src: "assets/imgs/경의선숲길/놀거리/연남스페이스/3.PNG", description: '연남스페이스', link: 'https://map.naver.com/v5/search/%EC%97%B0%EB%82%A8%EC%8A%A4%ED%8E%98%EC%9D%B4%EC%8A%A4/place/1275394668?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/경의선숲길/놀거리/연남스페이스/4.PNG", description: '연남스페이스', link: 'https://map.naver.com/v5/search/%EC%97%B0%EB%82%A8%EC%8A%A4%ED%8E%98%EC%9D%B4%EC%8A%A4/place/1275394668?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/경의선숲길/놀거리/연남스페이스/5.PNG", description: '연남스페이스', link: 'https://map.naver.com/v5/search/%EC%97%B0%EB%82%A8%EC%8A%A4%ED%8E%98%EC%9D%B4%EC%8A%A4/place/1275394668?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/경의선숲길/놀거리/연남스페이스/1.PNG", description: '연남스페이스', link: 'https://map.naver.com/v5/search/%EC%97%B0%EB%82%A8%EC%8A%A4%ED%8E%98%EC%9D%B4%EC%8A%A4/place/1275394668?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/경의선숲길/놀거리/연남스페이스/2.PNG", description: '연남스페이스', link: 'https://map.naver.com/v5/search/%EC%97%B0%EB%82%A8%EC%8A%A4%ED%8E%98%EC%9D%B4%EC%8A%A4/place/1275394668?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 19) {
      images = [
        { src: 'assets/imgs/경춘선숲길/식당/경복식당/경복식당5.jpg', description: '경복식당', link: 'https://map.naver.com/v5/search/%EC%97%B0%EB%82%A8%EC%8A%A4%ED%8E%98%EC%9D%B4%EC%8A%A4/place/1275394668?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: 'assets/imgs/경춘선숲길/식당/경복식당/경복식당1.jpg', description: '경복식당', link: 'https://map.naver.com/v5/search/%EC%97%B0%EB%82%A8%EC%8A%A4%ED%8E%98%EC%9D%B4%EC%8A%A4/place/1275394668?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: 'assets/imgs/경춘선숲길/식당/경복식당/경복식당2.jpg', description: '경복식당', link: 'https://map.naver.com/v5/search/%EC%97%B0%EB%82%A8%EC%8A%A4%ED%8E%98%EC%9D%B4%EC%8A%A4/place/1275394668?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: 'assets/imgs/경춘선숲길/식당/경복식당/경복식당3.jpg', description: '경복식당', link: 'https://map.naver.com/v5/search/%EC%97%B0%EB%82%A8%EC%8A%A4%ED%8E%98%EC%9D%B4%EC%8A%A4/place/1275394668?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: 'assets/imgs/경춘선숲길/식당/경복식당/경복식당4.jpg', description: '경복식당', link: 'https://map.naver.com/v5/search/%EC%97%B0%EB%82%A8%EC%8A%A4%ED%8E%98%EC%9D%B4%EC%8A%A4/place/1275394668?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 20) {
      images = [
        { src: "assets/imgs/경춘선숲길/식당/경성초밥/경성초밥5.jpg", description: '경성초밥', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%B6%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1453394676?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/경춘선숲길/식당/경성초밥/경성초밥1.jpg", description: '경성초밥', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%B6%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1453394676?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/경춘선숲길/식당/경성초밥/경성초밥2.jpg", description: '경성초밥', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%B6%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1453394676?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/경춘선숲길/식당/경성초밥/경성초밥3.jpg", description: '경성초밥', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%B6%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1453394676?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/경춘선숲길/식당/경성초밥/경성초밥4.jpg", description: '경성초밥', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%B6%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1453394676?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 21) {
      images = [
        { src: "assets/imgs/경춘선숲길/식당/공릉동도깨비/공릉동도깨비4.jpg", description: '공릉동도깨비', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%B6%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/460447110?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/경춘선숲길/식당/공릉동도깨비/공릉동도깨비5.jpg", description: '공릉동도깨비', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%B6%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/460447110?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/경춘선숲길/식당/공릉동도깨비/공릉동도깨비1.jpg", description: '공릉동도깨비', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%B6%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/460447110?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/경춘선숲길/식당/공릉동도깨비/공릉동도깨비2.jpg", description: '공릉동도깨비', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%B6%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/460447110?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/경춘선숲길/식당/공릉동도깨비/공릉동도깨비3.jpg", description: '공릉동도깨비', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%B6%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/460447110?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 22) {
      images = [
        { src: "assets/imgs/경춘선숲길/식당/동적깡통구이 태릉입구역점/동적깡통구이 탱릉입구역점5.jpg", description: '동적깡통구이 탱릉입구역점', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%B6%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1480430382?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/경춘선숲길/식당/동적깡통구이 태릉입구역점/동적깡통구이 탱릉입구역점1.jpg", description: '동적깡통구이 탱릉입구역점', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%B6%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1480430382?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/경춘선숲길/식당/동적깡통구이 태릉입구역점/동적깡통구이 탱릉입구역점2.jpg", description: '동적깡통구이 탱릉입구역점', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%B6%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1480430382?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/경춘선숲길/식당/동적깡통구이 태릉입구역점/동적깡통구이 탱릉입구역점3.jpg", description: '동적깡통구이 탱릉입구역점', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%B6%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1480430382?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/경춘선숲길/식당/동적깡통구이 태릉입구역점/동적깡통구이 탱릉입구역점4.jpg", description: '동적깡통구이 탱릉입구역점', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%B6%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1480430382?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 23) {
      images = [
        { src: "assets/imgs/경춘선숲길/식당/메모아/메모아2.jpg", description: '메모아', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%B6%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1024231099?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/경춘선숲길/식당/메모아/메모아3.jpg", description: '메모아', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%B6%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1024231099?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/경춘선숲길/식당/메모아/메모아4.jpg", description: '메모아', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%B6%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1024231099?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/경춘선숲길/식당/메모아/메모아5.jpg", description: '메모아', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%B6%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1024231099?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/경춘선숲길/식당/메모아/메모아1.jpg", description: '메모아', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%B6%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1024231099?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 24) {
      images = [
        { src: "assets/imgs/경춘선숲길/식당/메트로폴리스/메트로폴리스5.jpg", description: '메트로폴리스', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%B6%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1815424144?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/경춘선숲길/식당/메트로폴리스/메트로폴리스1.jpg", description: '메트로폴리스', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%B6%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1815424144?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/경춘선숲길/식당/메트로폴리스/메트로폴리스2.jpg", description: '메트로폴리스', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%B6%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1815424144?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/경춘선숲길/식당/메트로폴리스/메트로폴리스3.jpg", description: '메트로폴리스', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%B6%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1815424144?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/경춘선숲길/식당/메트로폴리스/메트로폴리스4.jpg", description: '메트로폴리스', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%B6%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1815424144?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 25) {
      images = [
        { src: "assets/imgs/경춘선숲길/카페/그루브커피로스터즈/그루브커피로스터즈4.jpg", description: '그루브커피로스터즈', link: 'https://naver.me/FrKAAWXx' },
        { src: "assets/imgs/경춘선숲길/카페/그루브커피로스터즈/그루브커피로스터즈5.jpg", description: '그루브커피로스터즈', link: 'https://naver.me/FrKAAWXx' },
        { src: "assets/imgs/경춘선숲길/카페/그루브커피로스터즈/그루브커피로스터즈1.jpg", description: '그루브커피로스터즈', link: 'https://naver.me/FrKAAWXx' },
        { src: "assets/imgs/경춘선숲길/카페/그루브커피로스터즈/그루브커피로스터즈2.jpg", description: '그루브커피로스터즈', link: 'https://naver.me/FrKAAWXx' },
        { src: "assets/imgs/경춘선숲길/카페/그루브커피로스터즈/그루브커피로스터즈3.jpg", description: '그루브커피로스터즈', link: 'https://naver.me/FrKAAWXx' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 26) {
      images = [
        { src: "assets/imgs/경춘선숲길/카페/리아트커피바/리아트커피바4.jpg", description: '리아트커피바', link: 'https://naver.me/G9RZ2qmJ' },
        { src: "assets/imgs/경춘선숲길/카페/리아트커피바/리아트커피바5.jpg", description: '리아트커피바', link: 'https://naver.me/G9RZ2qmJ' },
        { src: "assets/imgs/경춘선숲길/카페/리아트커피바/리아트커피바1.jpg", description: '리아트커피바', link: 'https://naver.me/G9RZ2qmJ' },
        { src: "assets/imgs/경춘선숲길/카페/리아트커피바/리아트커피바2.jpg", description: '리아트커피바', link: 'https://naver.me/G9RZ2qmJ' },
        { src: "assets/imgs/경춘선숲길/카페/리아트커피바/리아트커피바3.jpg", description: '리아트커피바', link: 'https://naver.me/G9RZ2qmJ' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 27) {
      images = [
        { src: "assets/imgs/경춘선숲길/카페/블루마일스커피로스터즈/블루마일스커피로스터즈5.jpg", description: '블루마일스커피로스터즈', link: 'https://naver.me/xrP66XM2' },
        { src: "assets/imgs/경춘선숲길/카페/블루마일스커피로스터즈/블루마일스커피로스터즈1.jpg", description: '블루마일스커피로스터즈', link: 'https://naver.me/xrP66XM2' },
        { src: "assets/imgs/경춘선숲길/카페/블루마일스커피로스터즈/블루마일스커피로스터즈2.jpg", description: '블루마일스커피로스터즈', link: 'https://naver.me/xrP66XM2' },
        { src: "assets/imgs/경춘선숲길/카페/블루마일스커피로스터즈/블루마일스커피로스터즈3.jpg", description: '블루마일스커피로스터즈', link: 'https://naver.me/xrP66XM2' },
        { src: "assets/imgs/경춘선숲길/카페/블루마일스커피로스터즈/블루마일스커피로스터즈4.jpg", description: '블루마일스커피로스터즈', link: 'https://naver.me/xrP66XM2' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 28) {
      images = [
        { src: "assets/imgs/경춘선숲길/카페/비기닝브레드/비기닝브레드4.jpg", description: '비기닝브레드', link: 'https://naver.me/Gd1UDn4K' },
        { src: "assets/imgs/경춘선숲길/카페/비기닝브레드/비기닝브레드5.jpg", description: '비기닝브레드', link: 'https://naver.me/Gd1UDn4K' },
        { src: "assets/imgs/경춘선숲길/카페/비기닝브레드/비기닝브레드1.jpg", description: '비기닝브레드', link: 'https://naver.me/Gd1UDn4K' },
        { src: "assets/imgs/경춘선숲길/카페/비기닝브레드/비기닝브레드2.jpg", description: '비기닝브레드', link: 'https://naver.me/Gd1UDn4K' },
        { src: "assets/imgs/경춘선숲길/카페/비기닝브레드/비기닝브레드3.jpg", description: '비기닝브레드', link: 'https://naver.me/Gd1UDn4K' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 29) {
      images = [
        { src: "assets/imgs/경춘선숲길/카페/상상과자점/상상과자점3.jpg", description: '상상과자점', link: 'https://naver.me/GjRGdYlW' },
        { src: "assets/imgs/경춘선숲길/카페/상상과자점/상상과자점4.jpg", description: '상상과자점', link: 'https://naver.me/GjRGdYlW' },
        { src: "assets/imgs/경춘선숲길/카페/상상과자점/상상과자점5.jpg", description: '상상과자점', link: 'https://naver.me/GjRGdYlW' },
        { src: "assets/imgs/경춘선숲길/카페/상상과자점/상상과자점1.jpg", description: '상상과자점', link: 'https://naver.me/GjRGdYlW' },
        { src: "assets/imgs/경춘선숲길/카페/상상과자점/상상과자점2.jpg", description: '상상과자점', link: 'https://naver.me/GjRGdYlW' }
  
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 30) {
      images = [
        { src: "assets/imgs/경춘선숲길/카페/오누이/오누이5.jpg", description: '오누이', link: 'https://naver.me/GC2ufDmg' },
        { src: "assets/imgs/경춘선숲길/카페/오누이/오누이1.jpg", description: '오누이', link: 'https://naver.me/GC2ufDmg' },
        { src: "assets/imgs/경춘선숲길/카페/오누이/오누이2.jpg", description: '오누이', link: 'https://naver.me/GC2ufDmg' },
        { src: "assets/imgs/경춘선숲길/카페/오누이/오누이3.jpg", description: '오누이', link: 'https://naver.me/GC2ufDmg' },
        { src: "assets/imgs/경춘선숲길/카페/오누이/오누이4.jpg", description: '오누이', link: 'https://naver.me/GC2ufDmg' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 31) {
      images = [
        { src: "assets/imgs/경춘선숲길/놀거리/노원문화의거리/노원문화의거리1.jpg", description: '노원문화의거리', link: 'https://map.naver.com/v5/search/%EB%85%B8%EC%9B%90%EB%AC%B8%ED%99%94%EC%9D%98%EA%B1%B0%EB%A6%AC/place/18643761?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/경춘선숲길/놀거리/노원문화의거리/노원문화의거리2.jpg", description: '노원문화의거리', link: 'https://map.naver.com/v5/search/%EB%85%B8%EC%9B%90%EB%AC%B8%ED%99%94%EC%9D%98%EA%B1%B0%EB%A6%AC/place/18643761?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/경춘선숲길/놀거리/노원문화의거리/노원문화의거리3.jpg", description: '노원문화의거리', link: 'https://map.naver.com/v5/search/%EB%85%B8%EC%9B%90%EB%AC%B8%ED%99%94%EC%9D%98%EA%B1%B0%EB%A6%AC/place/18643761?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/경춘선숲길/놀거리/노원문화의거리/노원문화의거리4.jpg", description: '노원문화의거리', link: 'https://map.naver.com/v5/search/%EB%85%B8%EC%9B%90%EB%AC%B8%ED%99%94%EC%9D%98%EA%B1%B0%EB%A6%AC/place/18643761?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/경춘선숲길/놀거리/노원문화의거리/노원문화의거리5.jpg", description: '노원문화의거리', link: 'https://map.naver.com/v5/search/%EB%85%B8%EC%9B%90%EB%AC%B8%ED%99%94%EC%9D%98%EA%B1%B0%EB%A6%AC/place/18643761?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 32) {
      images = [
        { src: "assets/imgs/경춘선숲길/놀거리/불빛정원/불빛정원2.jpg", description: '불빛정원', link: 'https://map.naver.com/v5/search/%EB%B6%88%EB%B9%9B%EC%A0%95%EC%9B%90/place/1200984778?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/경춘선숲길/놀거리/불빛정원/불빛정원3.jpg", description: '불빛정원', link: 'https://map.naver.com/v5/search/%EB%B6%88%EB%B9%9B%EC%A0%95%EC%9B%90/place/1200984778?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/경춘선숲길/놀거리/불빛정원/불빛정원4.jpg", description: '불빛정원', link: 'https://map.naver.com/v5/search/%EB%B6%88%EB%B9%9B%EC%A0%95%EC%9B%90/place/1200984778?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/경춘선숲길/놀거리/불빛정원/불빛정원5.jpg", description: '불빛정원', link: 'https://map.naver.com/v5/search/%EB%B6%88%EB%B9%9B%EC%A0%95%EC%9B%90/place/1200984778?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/경춘선숲길/놀거리/불빛정원/불빛정원1.jpg", description: '불빛정원', link: 'https://map.naver.com/v5/search/%EB%B6%88%EB%B9%9B%EC%A0%95%EC%9B%90/place/1200984778?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 33) {
      images = [
        { src: "assets/imgs/경춘선숲길/놀거리/불암산/불암산2.jpg", description: '불암산', link: 'https://map.naver.com/v5/search/%EB%B6%88%EC%95%94%EC%82%B0/place/13491957?entry=plt&c=7,0,0,0,dh&placePath=%3Fentry=bmp' },
        { src: "assets/imgs/경춘선숲길/놀거리/불암산/불암산3.jpg", description: '불암산', link: 'https://map.naver.com/v5/search/%EB%B6%88%EC%95%94%EC%82%B0/place/13491957?entry=plt&c=7,0,0,0,dh&placePath=%3Fentry=bmp' },
        { src: "assets/imgs/경춘선숲길/놀거리/불암산/불암산4.jpg", description: '불암산', link: 'https://map.naver.com/v5/search/%EB%B6%88%EC%95%94%EC%82%B0/place/13491957?entry=plt&c=7,0,0,0,dh&placePath=%3Fentry=bmp' },
        { src: "assets/imgs/경춘선숲길/놀거리/불암산/불암산5.jpg", description: '불암산', link: 'https://map.naver.com/v5/search/%EB%B6%88%EC%95%94%EC%82%B0/place/13491957?entry=plt&c=7,0,0,0,dh&placePath=%3Fentry=bmp' },
        { src: "assets/imgs/경춘선숲길/놀거리/불암산/불암산1.jpg", description: '불암산', link: 'https://map.naver.com/v5/search/%EB%B6%88%EC%95%94%EC%82%B0/place/13491957?entry=plt&c=7,0,0,0,dh&placePath=%3Fentry=bmp' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 34) {
      images = [
        { src: "assets/imgs/경춘선숲길/놀거리/서울시립과학관/서울시립과학관4.jpg", description: '서울시립과학관', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%8B%9C%EB%A6%BD%EA%B3%BC%ED%95%99%EA%B4%80/place/515824798?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/경춘선숲길/놀거리/서울시립과학관/서울시립과학관5.jpg", description: '서울시립과학관', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%8B%9C%EB%A6%BD%EA%B3%BC%ED%95%99%EA%B4%80/place/515824798?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/경춘선숲길/놀거리/서울시립과학관/서울시립과학관1.jpg", description: '서울시립과학관', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%8B%9C%EB%A6%BD%EA%B3%BC%ED%95%99%EA%B4%80/place/515824798?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/경춘선숲길/놀거리/서울시립과학관/서울시립과학관2.jpg", description: '서울시립과학관', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%8B%9C%EB%A6%BD%EA%B3%BC%ED%95%99%EA%B4%80/place/515824798?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/경춘선숲길/놀거리/서울시립과학관/서울시립과학관3.jpg", description: '서울시립과학관', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%8B%9C%EB%A6%BD%EA%B3%BC%ED%95%99%EA%B4%80/place/515824798?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 35) {
      images = [
        { src: "assets/imgs/경춘선숲길/놀거리/육군박물관/육군박물관1.jpg", description: '육군박물관', link: 'https://map.naver.com/v5/search/%EC%9C%A1%EA%B5%B0%EB%B0%95%EB%AC%BC%EA%B4%80/place/11784466?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/경춘선숲길/놀거리/육군박물관/육군박물관2.jpg", description: '육군박물관', link: 'https://map.naver.com/v5/search/%EC%9C%A1%EA%B5%B0%EB%B0%95%EB%AC%BC%EA%B4%80/place/11784466?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/경춘선숲길/놀거리/육군박물관/육군박물관3.jpg", description: '육군박물관', link: 'https://map.naver.com/v5/search/%EC%9C%A1%EA%B5%B0%EB%B0%95%EB%AC%BC%EA%B4%80/place/11784466?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/경춘선숲길/놀거리/육군박물관/육군박물관4.jpg", description: '육군박물관', link: 'https://map.naver.com/v5/search/%EC%9C%A1%EA%B5%B0%EB%B0%95%EB%AC%BC%EA%B4%80/place/11784466?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/경춘선숲길/놀거리/육군박물관/육군박물관5.jpg", description: '육군박물관', link: 'https://map.naver.com/v5/search/%EC%9C%A1%EA%B5%B0%EB%B0%95%EB%AC%BC%EA%B4%80/place/11784466?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 36) {
      images = [
        { src: "assets/imgs/경춘선숲길/놀거리/중계근린공원/중계근린공원2.jpg", description: '중계근린공원', link: 'https://map.naver.com/v5/search/%EC%A4%91%EA%B3%84%EA%B7%BC%EB%A6%B0%EA%B3%B5%EC%9B%90/place/20495042?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/경춘선숲길/놀거리/중계근린공원/중계근린공원3.jpg", description: '중계근린공원', link: 'https://map.naver.com/v5/search/%EC%A4%91%EA%B3%84%EA%B7%BC%EB%A6%B0%EA%B3%B5%EC%9B%90/place/20495042?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/경춘선숲길/놀거리/중계근린공원/중계근린공원4.jpg", description: '중계근린공원', link: 'https://map.naver.com/v5/search/%EC%A4%91%EA%B3%84%EA%B7%BC%EB%A6%B0%EA%B3%B5%EC%9B%90/place/20495042?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/경춘선숲길/놀거리/중계근린공원/중계근린공원5.jpg", description: '중계근린공원', link: 'https://map.naver.com/v5/search/%EC%A4%91%EA%B3%84%EA%B7%BC%EB%A6%B0%EA%B3%B5%EC%9B%90/place/20495042?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/경춘선숲길/놀거리/중계근린공원/중계근린공원1.jpg", description: '중계근린공원', link: 'https://map.naver.com/v5/search/%EC%A4%91%EA%B3%84%EA%B7%BC%EB%A6%B0%EA%B3%B5%EC%9B%90/place/20495042?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 37) {
      images = [
        { src: 'assets/imgs/항동철길/식당/바른숯불구이/바른숯불구이5.jpg', description: '바른숯불구이점', link: 'https://map.naver.com/v5/search/%ED%95%AD%EB%8F%99%EC%B2%A0%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/36886895?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: 'assets/imgs/항동철길/식당/바른숯불구이/바른숯불구이1.jpg', description: '바른숯불구이점', link: 'https://map.naver.com/v5/search/%ED%95%AD%EB%8F%99%EC%B2%A0%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/36886895?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: 'assets/imgs/항동철길/식당/바른숯불구이/바른숯불구이2.jpg', description: '바른숯불구이점', link: 'https://map.naver.com/v5/search/%ED%95%AD%EB%8F%99%EC%B2%A0%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/36886895?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: 'assets/imgs/항동철길/식당/바른숯불구이/바른숯불구이3.jpg', description: '바른숯불구이점', link: 'https://map.naver.com/v5/search/%ED%95%AD%EB%8F%99%EC%B2%A0%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/36886895?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: 'assets/imgs/항동철길/식당/바른숯불구이/바른숯불구이4.jpg', description: '바른숯불구이점', link: 'https://map.naver.com/v5/search/%ED%95%AD%EB%8F%99%EC%B2%A0%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/36886895?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 38) {
      images = [
        { src: "assets/imgs/항동철길/식당/병규네부대찌개/병규네부대찌개4.jpg", description: '병규네부대찌개', link: 'https://map.naver.com/v5/search/%ED%95%AD%EB%8F%99%EC%B2%A0%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/517974102?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/항동철길/식당/병규네부대찌개/병규네부대찌개5.jpg", description: '병규네부대찌개', link: 'https://map.naver.com/v5/search/%ED%95%AD%EB%8F%99%EC%B2%A0%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/517974102?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/항동철길/식당/병규네부대찌개/병규네부대찌개1.jpg", description: '병규네부대찌개', link: 'https://map.naver.com/v5/search/%ED%95%AD%EB%8F%99%EC%B2%A0%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/517974102?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/항동철길/식당/병규네부대찌개/병규네부대찌개2.jpg", description: '병규네부대찌개', link: 'https://map.naver.com/v5/search/%ED%95%AD%EB%8F%99%EC%B2%A0%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/517974102?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/항동철길/식당/병규네부대찌개/병규네부대찌개3.jpg", description: '병규네부대찌개', link: 'https://map.naver.com/v5/search/%ED%95%AD%EB%8F%99%EC%B2%A0%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/517974102?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 39) {
      images = [
        { src: "assets/imgs/항동철길/식당/사생활/사생활3.jpg", description: '사생활', link: 'https://map.naver.com/v5/search/%ED%95%AD%EB%8F%99%EC%B2%A0%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1713322772?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/항동철길/식당/사생활/사생활4.jpg", description: '사생활', link: 'https://map.naver.com/v5/search/%ED%95%AD%EB%8F%99%EC%B2%A0%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1713322772?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/항동철길/식당/사생활/사생활5.jpg", description: '사생활', link: 'https://map.naver.com/v5/search/%ED%95%AD%EB%8F%99%EC%B2%A0%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1713322772?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/항동철길/식당/사생활/사생활1.jpg", description: '사생활', link: 'https://map.naver.com/v5/search/%ED%95%AD%EB%8F%99%EC%B2%A0%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1713322772?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/항동철길/식당/사생활/사생활2.jpg", description: '사생활', link: 'https://map.naver.com/v5/search/%ED%95%AD%EB%8F%99%EC%B2%A0%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1713322772?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 40) {
      images = [
        { src: "assets/imgs/항동철길/식당/스테이플버거/스테이플버거4.jpg", description: '스테이플버거', link: 'https://map.naver.com/v5/search/%ED%95%AD%EB%8F%99%EC%B2%A0%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1112634672?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/항동철길/식당/스테이플버거/스테이플버거5.jpg", description: '스테이플버거', link: 'https://map.naver.com/v5/search/%ED%95%AD%EB%8F%99%EC%B2%A0%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1112634672?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/항동철길/식당/스테이플버거/스테이플버거1.jpg", description: '스테이플버거', link: 'https://map.naver.com/v5/search/%ED%95%AD%EB%8F%99%EC%B2%A0%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1112634672?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/항동철길/식당/스테이플버거/스테이플버거2.jpg", description: '스테이플버거', link: 'https://map.naver.com/v5/search/%ED%95%AD%EB%8F%99%EC%B2%A0%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1112634672?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/항동철길/식당/스테이플버거/스테이플버거3.jpg", description: '스테이플버거', link: 'https://map.naver.com/v5/search/%ED%95%AD%EB%8F%99%EC%B2%A0%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1112634672?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 41) {
      images = [
        { src: "assets/imgs/항동철길/식당/옹기종기감자옹심이/옹기종기감자옹심이5.jpg", description: '옹기종기감자옹심이', link: 'https://map.naver.com/v5/search/%ED%95%AD%EB%8F%99%EC%B2%A0%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1904170793?c=15,0,0,0,dh&placePath=%3Fentry%253Dpl1' },
        { src: "assets/imgs/항동철길/식당/옹기종기감자옹심이/옹기종기감자옹심이1.jpg", description: '옹기종기감자옹심이', link: 'https://map.naver.com/v5/search/%ED%95%AD%EB%8F%99%EC%B2%A0%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1904170793?c=15,0,0,0,dh&placePath=%3Fentry%253Dpl1' },
        { src: "assets/imgs/항동철길/식당/옹기종기감자옹심이/옹기종기감자옹심이2.jpg", description: '옹기종기감자옹심이', link: 'https://map.naver.com/v5/search/%ED%95%AD%EB%8F%99%EC%B2%A0%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1904170793?c=15,0,0,0,dh&placePath=%3Fentry%253Dpl1' },
        { src: "assets/imgs/항동철길/식당/옹기종기감자옹심이/옹기종기감자옹심이3.jpg", description: '옹기종기감자옹심이', link: 'https://map.naver.com/v5/search/%ED%95%AD%EB%8F%99%EC%B2%A0%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1904170793?c=15,0,0,0,dh&placePath=%3Fentry%253Dpl1' },
        { src: "assets/imgs/항동철길/식당/옹기종기감자옹심이/옹기종기감자옹심이4.jpg", description: '옹기종기감자옹심이', link: 'https://map.naver.com/v5/search/%ED%95%AD%EB%8F%99%EC%B2%A0%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1904170793?c=15,0,0,0,dh&placePath=%3Fentry%253Dpl1' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 42) {
      images = [
        { src: "assets/imgs/항동철길/식당/족발집 오류점/족발집 오류점4.jpg", description: '족발집 오류점', link: 'https://map.naver.com/v5/search/%ED%95%AD%EB%8F%99%EC%B2%A0%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/38457146?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/항동철길/식당/족발집 오류점/족발집 오류점5.jpg", description: '족발집 오류점', link: 'https://map.naver.com/v5/search/%ED%95%AD%EB%8F%99%EC%B2%A0%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/38457146?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/항동철길/식당/족발집 오류점/족발집 오류점1.jpg", description: '족발집 오류점', link: 'https://map.naver.com/v5/search/%ED%95%AD%EB%8F%99%EC%B2%A0%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/38457146?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/항동철길/식당/족발집 오류점/족발집 오류점2.jpg", description: '족발집 오류점', link: 'https://map.naver.com/v5/search/%ED%95%AD%EB%8F%99%EC%B2%A0%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/38457146?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/항동철길/식당/족발집 오류점/족발집 오류점3.jpg", description: '족발집 오류점', link: 'https://map.naver.com/v5/search/%ED%95%AD%EB%8F%99%EC%B2%A0%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/38457146?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 43) {
      images = [
        { src: "assets/imgs/항동철길/카페/12NOI/12NOI5.jpg", description: '12NOI', link: 'https://naver.me/58H3OWSx' },
        { src: "assets/imgs/항동철길/카페/12NOI/12NOI1.jpg", description: '12NOI', link: 'https://naver.me/58H3OWSx' },
        { src: "assets/imgs/항동철길/카페/12NOI/12NOI2.jpg", description: '12NOI', link: 'https://naver.me/58H3OWSx' },
        { src: "assets/imgs/항동철길/카페/12NOI/12NOI3.jpg", description: '12NOI', link: 'https://naver.me/58H3OWSx' },
        { src: "assets/imgs/항동철길/카페/12NOI/12NOI4.jpg", description: '12NOI', link: 'https://naver.me/58H3OWSx' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 44) {
      images = [
        { src: "assets/imgs/항동철길/카페/BCDM/BCDM5.jpg", description: 'BCDM', link: 'https://naver.me/IIqDI7ba' },
        { src: "assets/imgs/항동철길/카페/BCDM/BCDM1.jpg", description: 'BCDM', link: 'https://naver.me/IIqDI7ba' },
        { src: "assets/imgs/항동철길/카페/BCDM/BCDM2.jpg", description: 'BCDM', link: 'https://naver.me/IIqDI7ba' },
        { src: "assets/imgs/항동철길/카페/BCDM/BCDM3.jpg", description: 'BCDM', link: 'https://naver.me/IIqDI7ba' },
        { src: "assets/imgs/항동철길/카페/BCDM/BCDM4.jpg", description: 'BCDM', link: 'https://naver.me/IIqDI7ba' },
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 45) {
      images = [
        { src: "assets/imgs/항동철길/카페/마라나타/마라나타3.jpg", description: '마라나타', link: 'https://naver.me/5jAjWsMF' },
        { src: "assets/imgs/항동철길/카페/마라나타/마라나타4.jpg", description: '마라나타', link: 'https://naver.me/5jAjWsMF' },
        { src: "assets/imgs/항동철길/카페/마라나타/마라나타5.jpg", description: '마라나타', link: 'https://naver.me/5jAjWsMF' },
        { src: "assets/imgs/항동철길/카페/마라나타/마라나타1.jpg", description: '마라나타', link: 'https://naver.me/5jAjWsMF' },
        { src: "assets/imgs/항동철길/카페/마라나타/마라나타2.jpg", description: '마라나타', link: 'https://naver.me/5jAjWsMF' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 46) {
      images = [
        { src: "assets/imgs/항동철길/카페/마프라오/마프라오4.jpg", description: '마프라오', link: 'https://naver.me/GJr5Ua9r' },
        { src: "assets/imgs/항동철길/카페/마프라오/마프라오5.jpg", description: '마프라오', link: 'https://naver.me/GJr5Ua9r' },
        { src: "assets/imgs/항동철길/카페/마프라오/마프라오1.jpg", description: '마프라오', link: 'https://naver.me/GJr5Ua9r' },
        { src: "assets/imgs/항동철길/카페/마프라오/마프라오2.jpg", description: '마프라오', link: 'https://naver.me/GJr5Ua9r' },
        { src: "assets/imgs/항동철길/카페/마프라오/마프라오3.jpg", description: '마프라오', link: 'https://naver.me/GJr5Ua9r' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 47) {
      images = [
        { src: "assets/imgs/항동철길/카페/메이로드/메이로드5.jpg", description: '메이로드', link: 'https://naver.me/FFvSHeId' },
        { src: "assets/imgs/항동철길/카페/메이로드/메이로드1.jpg", description: '메이로드', link: 'https://naver.me/FFvSHeId' },
        { src: "assets/imgs/항동철길/카페/메이로드/메이로드2.jpg", description: '메이로드', link: 'https://naver.me/FFvSHeId' },
        { src: "assets/imgs/항동철길/카페/메이로드/메이로드3.jpg", description: '메이로드', link: 'https://naver.me/FFvSHeId' },
        { src: "assets/imgs/항동철길/카페/메이로드/메이로드4.jpg", description: '메이로드', link: 'https://naver.me/FFvSHeId' }
  
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 48) {
      images = [
        { src: "assets/imgs/항동철길/카페/씬(scene)/씬(scene)4.jpg", description: '씬(scene)', link: 'https://naver.me/I5F4DyrX' },
        { src: "assets/imgs/항동철길/카페/씬(scene)/씬(scene)5.jpg", description: '씬(scene)', link: 'https://naver.me/I5F4DyrX' },
        { src: "assets/imgs/항동철길/카페/씬(scene)/씬(scene)1.jpg", description: '씬(scene)', link: 'https://naver.me/I5F4DyrX' },
        { src: "assets/imgs/항동철길/카페/씬(scene)/씬(scene)2.jpg", description: '씬(scene)', link: 'https://naver.me/I5F4DyrX' },
        { src: "assets/imgs/항동철길/카페/씬(scene)/씬(scene)3.jpg", description: '씬(scene)', link: 'https://naver.me/I5F4DyrX' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 49) {
      images = [
        { src: "assets/imgs/항동철길/놀거리/고척근린공원/고척근린공원5.jpg", description: '고척근린공원', link: 'https://map.naver.com/v5/search/%EA%B3%A0%EC%B2%99%EA%B7%BC%EB%A6%B0%EA%B3%B5%EC%9B%90/place/18966242?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/항동철길/놀거리/고척근린공원/고척근린공원1.jpg", description: '고척근린공원', link: 'https://map.naver.com/v5/search/%EA%B3%A0%EC%B2%99%EA%B7%BC%EB%A6%B0%EA%B3%B5%EC%9B%90/place/18966242?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/항동철길/놀거리/고척근린공원/고척근린공원2.jpg", description: '고척근린공원', link: 'https://map.naver.com/v5/search/%EA%B3%A0%EC%B2%99%EA%B7%BC%EB%A6%B0%EA%B3%B5%EC%9B%90/place/18966242?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/항동철길/놀거리/고척근린공원/고척근린공원3.jpg", description: '고척근린공원', link: 'https://map.naver.com/v5/search/%EA%B3%A0%EC%B2%99%EA%B7%BC%EB%A6%B0%EA%B3%B5%EC%9B%90/place/18966242?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/항동철길/놀거리/고척근린공원/고척근린공원4.jpg", description: '고척근린공원', link: 'https://map.naver.com/v5/search/%EA%B3%A0%EC%B2%99%EA%B7%BC%EB%A6%B0%EA%B3%B5%EC%9B%90/place/18966242?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 50) {
      images = [
        { src: "assets/imgs/항동철길/놀거리/구로근린공원/구로근린공원4.jpg", description: '구로근린공원', link: 'https://map.naver.com/v5/search/%EA%B5%AC%EB%A1%9C%EA%B1%B0%EB%A6%AC%EA%B3%B5%EC%9B%90/place/18961525?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/항동철길/놀거리/구로근린공원/구로근린공원5.jpg", description: '구로근린공원', link: 'https://map.naver.com/v5/search/%EA%B5%AC%EB%A1%9C%EA%B1%B0%EB%A6%AC%EA%B3%B5%EC%9B%90/place/18961525?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/항동철길/놀거리/구로근린공원/구로근린공원1.jpg", description: '구로근린공원', link: 'https://map.naver.com/v5/search/%EA%B5%AC%EB%A1%9C%EA%B1%B0%EB%A6%AC%EA%B3%B5%EC%9B%90/place/18961525?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/항동철길/놀거리/구로근린공원/구로근린공원2.jpg", description: '구로근린공원', link: 'https://map.naver.com/v5/search/%EA%B5%AC%EB%A1%9C%EA%B1%B0%EB%A6%AC%EA%B3%B5%EC%9B%90/place/18961525?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/항동철길/놀거리/구로근린공원/구로근린공원3.jpg", description: '구로근린공원', link: 'https://map.naver.com/v5/search/%EA%B5%AC%EB%A1%9C%EA%B1%B0%EB%A6%AC%EA%B3%B5%EC%9B%90/place/18961525?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 51) {
      images = [
        { src: "assets/imgs/항동철길/놀거리/대성디큐브아트센터/대성디큐브아트센터1.jpg", description: '대성디큐브아트센터', link: 'https://map.naver.com/v5/search/%EB%8C%80%EC%84%B1%20%EB%94%94%ED%81%90%EB%B8%8C%EC%95%84%ED%8A%B8%EC%84%BC%ED%84%B0/place/20152049?entry=plt&c=15,0,0,0,dh&isCorrectAnswer=true' },
        { src: "assets/imgs/항동철길/놀거리/대성디큐브아트센터/대성디큐브아트센터2.jpg", description: '대성디큐브아트센터', link: 'https://map.naver.com/v5/search/%EB%8C%80%EC%84%B1%20%EB%94%94%ED%81%90%EB%B8%8C%EC%95%84%ED%8A%B8%EC%84%BC%ED%84%B0/place/20152049?entry=plt&c=15,0,0,0,dh&isCorrectAnswer=true' },
        { src: "assets/imgs/항동철길/놀거리/대성디큐브아트센터/대성디큐브아트센터3.jpg", description: '대성디큐브아트센터', link: 'https://map.naver.com/v5/search/%EB%8C%80%EC%84%B1%20%EB%94%94%ED%81%90%EB%B8%8C%EC%95%84%ED%8A%B8%EC%84%BC%ED%84%B0/place/20152049?entry=plt&c=15,0,0,0,dh&isCorrectAnswer=true' },
        { src: "assets/imgs/항동철길/놀거리/대성디큐브아트센터/대성디큐브아트센터4.jpg", description: '대성디큐브아트센터', link: 'https://map.naver.com/v5/search/%EB%8C%80%EC%84%B1%20%EB%94%94%ED%81%90%EB%B8%8C%EC%95%84%ED%8A%B8%EC%84%BC%ED%84%B0/place/20152049?entry=plt&c=15,0,0,0,dh&isCorrectAnswer=true' },
        { src: "assets/imgs/항동철길/놀거리/대성디큐브아트센터/대성디큐브아트센터5.jpg", description: '대성디큐브아트센터', link: 'https://map.naver.com/v5/search/%EB%8C%80%EC%84%B1%20%EB%94%94%ED%81%90%EB%B8%8C%EC%95%84%ED%8A%B8%EC%84%BC%ED%84%B0/place/20152049?entry=plt&c=15,0,0,0,dh&isCorrectAnswer=true' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 52) {
      images = [
        { src: "assets/imgs/항동철길/놀거리/서울아트책보고/서울아트책보고1.jpg", description: '서울아트책보고', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%95%84%ED%8A%B8%EC%B1%85%EB%B3%B4%EA%B3%A0/place/1770726112?entry=plt&c=15,0,0,0,dh&isCorrectAnswer=true' },
        { src: "assets/imgs/항동철길/놀거리/서울아트책보고/서울아트책보고2.jpg", description: '서울아트책보고', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%95%84%ED%8A%B8%EC%B1%85%EB%B3%B4%EA%B3%A0/place/1770726112?entry=plt&c=15,0,0,0,dh&isCorrectAnswer=true' },
        { src: "assets/imgs/항동철길/놀거리/서울아트책보고/서울아트책보고3.jpg", description: '서울아트책보고', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%95%84%ED%8A%B8%EC%B1%85%EB%B3%B4%EA%B3%A0/place/1770726112?entry=plt&c=15,0,0,0,dh&isCorrectAnswer=true' },
        { src: "assets/imgs/항동철길/놀거리/서울아트책보고/서울아트책보고4.jpg", description: '서울아트책보고', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%95%84%ED%8A%B8%EC%B1%85%EB%B3%B4%EA%B3%A0/place/1770726112?entry=plt&c=15,0,0,0,dh&isCorrectAnswer=true' },
        { src: "assets/imgs/항동철길/놀거리/서울아트책보고/서울아트책보고5.jpg", description: '서울아트책보고', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%95%84%ED%8A%B8%EC%B1%85%EB%B3%B4%EA%B3%A0/place/1770726112?entry=plt&c=15,0,0,0,dh&isCorrectAnswer=true' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 53) {
      images = [
        { src: "assets/imgs/항동철길/놀거리/캘리클럽 고척점/캘리클럽 고척점5.jpg", description: '캘리클럽 고척점', link: 'https://map.naver.com/v5/search/%EC%BA%98%EB%A6%AC%ED%81%B4%EB%9F%BD%20%EA%B3%A0%EC%B2%99%EC%A0%90/place/1410252669?entry=plt&c=15,0,0,0,dh&isCorrectAnswer=true' },
        { src: "assets/imgs/항동철길/놀거리/캘리클럽 고척점/캘리클럽 고척점1.jpg", description: '캘리클럽 고척점', link: 'https://map.naver.com/v5/search/%EC%BA%98%EB%A6%AC%ED%81%B4%EB%9F%BD%20%EA%B3%A0%EC%B2%99%EC%A0%90/place/1410252669?entry=plt&c=15,0,0,0,dh&isCorrectAnswer=true' },
        { src: "assets/imgs/항동철길/놀거리/캘리클럽 고척점/캘리클럽 고척점2.jpg", description: '캘리클럽 고척점', link: 'https://map.naver.com/v5/search/%EC%BA%98%EB%A6%AC%ED%81%B4%EB%9F%BD%20%EA%B3%A0%EC%B2%99%EC%A0%90/place/1410252669?entry=plt&c=15,0,0,0,dh&isCorrectAnswer=true' },
        { src: "assets/imgs/항동철길/놀거리/캘리클럽 고척점/캘리클럽 고척점3.jpg", description: '캘리클럽 고척점', link: 'https://map.naver.com/v5/search/%EC%BA%98%EB%A6%AC%ED%81%B4%EB%9F%BD%20%EA%B3%A0%EC%B2%99%EC%A0%90/place/1410252669?entry=plt&c=15,0,0,0,dh&isCorrectAnswer=true' },
        { src: "assets/imgs/항동철길/놀거리/캘리클럽 고척점/캘리클럽 고척점4.jpg", description: '캘리클럽 고척점', link: 'https://map.naver.com/v5/search/%EC%BA%98%EB%A6%AC%ED%81%B4%EB%9F%BD%20%EA%B3%A0%EC%B2%99%EC%A0%90/place/1410252669?entry=plt&c=15,0,0,0,dh&isCorrectAnswer=true' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 54) {
      images = [
        { src: "assets/imgs/항동철길/놀거리/푸른수목원/푸른수목원4.jpg", description: '푸른수목원', link: 'https://map.naver.com/v5/search/%ED%91%B8%EB%A5%B8%EC%88%98%EB%AA%A9%EC%9B%90/place/32581850?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry=bmp' },
        { src: "assets/imgs/항동철길/놀거리/푸른수목원/푸른수목원5.jpg", description: '푸른수목원', link: 'https://map.naver.com/v5/search/%ED%91%B8%EB%A5%B8%EC%88%98%EB%AA%A9%EC%9B%90/place/32581850?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry=bmp' },
        { src: "assets/imgs/항동철길/놀거리/푸른수목원/푸른수목원1.jpg", description: '푸른수목원', link: 'https://map.naver.com/v5/search/%ED%91%B8%EB%A5%B8%EC%88%98%EB%AA%A9%EC%9B%90/place/32581850?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry=bmp' },
        { src: "assets/imgs/항동철길/놀거리/푸른수목원/푸른수목원2.jpg", description: '푸른수목원', link: 'https://map.naver.com/v5/search/%ED%91%B8%EB%A5%B8%EC%88%98%EB%AA%A9%EC%9B%90/place/32581850?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry=bmp' },
        { src: "assets/imgs/항동철길/놀거리/푸른수목원/푸른수목원3.jpg", description: '푸른수목원', link: 'https://map.naver.com/v5/search/%ED%91%B8%EB%A5%B8%EC%88%98%EB%AA%A9%EC%9B%90/place/32581850?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry=bmp' }
        // 추가적인 이미지와 설명을 여기에 추가
    
      ];
    } 
    // 나머지 인덱스에 맞는 이미지 배열 리턴 로직 작성
    

    return images;
  };
}

function getImages(index) {
  var images;
  // 각 이미지에 맞는 배열을 리턴하는 로직 작성
  if (index === 1) {
    images = [
      { src: 'assets/imgs/경의선숲길/식당/더담/1.PNG', description: '더담', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%9D%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/21433628?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: 'assets/imgs/경의선숲길/식당/더담/2.PNG', description: '더담', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%9D%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/21433628?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: 'assets/imgs/경의선숲길/식당/더담/3.PNG', description: '더담', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%9D%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/21433628?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: 'assets/imgs/경의선숲길/식당/더담/4.PNG', description: '더담', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%9D%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/21433628?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: 'assets/imgs/경의선숲길/식당/더담/5.PNG', description: '더담', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%9D%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/21433628?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 2) {
    images = [
      { src: "assets/imgs/경의선숲길/식당/몽탄/1.PNG", description: '몽탄', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%9D%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1810277002?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/경의선숲길/식당/몽탄/2.PNG", description: '몽탄', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%9D%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1810277002?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/경의선숲길/식당/몽탄/3.PNG", description: '몽탄', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%9D%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1810277002?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/경의선숲길/식당/몽탄/4.PNG", description: '몽탄', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%9D%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1810277002?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/경의선숲길/식당/몽탄/5.PNG", description: '몽탄', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%9D%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1810277002?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 3) {
    images = [
      { src: "assets/imgs/경의선숲길/식당/미쁘동/1.PNG", description: '미쁘동', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%9D%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1685805793?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/경의선숲길/식당/미쁘동/2.PNG", description: '미쁘동', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%9D%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1685805793?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/경의선숲길/식당/미쁘동/3.PNG", description: '미쁘동', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%9D%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1685805793?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/경의선숲길/식당/미쁘동/4.PNG", description: '미쁘동', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%9D%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1685805793?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/경의선숲길/식당/미쁘동/5.PNG", description: '미쁘동', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%9D%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1685805793?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 4) {
    images = [
      { src: "assets/imgs/경의선숲길/식당/빌라 더 다이닝/1.PNG", description: '빌라 더 다이닝', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%9D%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/637360725?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/경의선숲길/식당/빌라 더 다이닝/2.PNG", description: '빌라 더 다이닝', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%9D%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/637360725?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/경의선숲길/식당/빌라 더 다이닝/3.PNG", description: '빌라 더 다이닝', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%9D%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/637360725?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/경의선숲길/식당/빌라 더 다이닝/4.PNG", description: '빌라 더 다이닝', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%9D%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/637360725?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/경의선숲길/식당/빌라 더 다이닝/5.PNG", description: '빌라 더 다이닝', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%9D%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/637360725?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 5) {
    images = [
      { src: "assets/imgs/경의선숲길/식당/소이연남/1.PNG", description: '소이연남', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%9D%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/35402809?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/경의선숲길/식당/소이연남/2.PNG", description: '소이연남', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%9D%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/35402809?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/경의선숲길/식당/소이연남/3.PNG", description: '소이연남', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%9D%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/35402809?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/경의선숲길/식당/소이연남/4.PNG", description: '소이연남', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%9D%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/35402809?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/경의선숲길/식당/소이연남/5.PNG", description: '소이연남', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%9D%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/35402809?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 6) {
    images = [
      { src: "assets/imgs/경의선숲길/식당/수바이샹 훠궈/1.PNG", description: '수바이샹 훠궈', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%9D%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1179661211?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/경의선숲길/식당/수바이샹 훠궈/2.PNG", description: '수바이샹 훠궈', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%9D%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1179661211?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/경의선숲길/식당/수바이샹 훠궈/3.PNG", description: '수바이샹 훠궈', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%9D%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1179661211?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/경의선숲길/식당/수바이샹 훠궈/4.PNG", description: '수바이샹 훠궈', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%9D%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1179661211?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/경의선숲길/식당/수바이샹 훠궈/5.PNG", description: '수바이샹 훠궈', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%9D%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1179661211?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 7) {
    images = [
      { src: "assets/imgs/경의선숲길/카페/미크플로 연트럴파크점/3.PNG", description: '미크플로 연트럴파크점', link: 'https://naver.me/x3ifc64x' },
      { src: "assets/imgs/경의선숲길/카페/미크플로 연트럴파크점/4.PNG", description: '미크플로 연트럴파크점', link: 'https://naver.me/x3ifc64x' },
      { src: "assets/imgs/경의선숲길/카페/미크플로 연트럴파크점/5.PNG", description: '미크플로 연트럴파크점', link: 'https://naver.me/x3ifc64x' },
      { src: "assets/imgs/경의선숲길/카페/미크플로 연트럴파크점/1.PNG", description: '미크플로 연트럴파크점', link: 'https://naver.me/x3ifc64x' },
      { src: "assets/imgs/경의선숲길/카페/미크플로 연트럴파크점/2.PNG", description: '미크플로 연트럴파크점', link: 'https://naver.me/x3ifc64x' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 8) {
    images = [
      { src: "assets/imgs/경의선숲길/카페/버터앤쉘터 연남점/5.PNG", description: '버터앤쉘터 연남점', link: 'https://naver.me/GA6FzeBq' },
      { src: "assets/imgs/경의선숲길/카페/버터앤쉘터 연남점/1.PNG", description: '버터앤쉘터 연남점', link: 'https://naver.me/GA6FzeBq' },
      { src: "assets/imgs/경의선숲길/카페/버터앤쉘터 연남점/2.PNG", description: '버터앤쉘터 연남점', link: 'https://naver.me/GA6FzeBq' },
      { src: "assets/imgs/경의선숲길/카페/버터앤쉘터 연남점/3.PNG", description: '버터앤쉘터 연남점', link: 'https://naver.me/GA6FzeBq' },
      { src: "assets/imgs/경의선숲길/카페/버터앤쉘터 연남점/4.PNG", description: '버터앤쉘터 연남점', link: 'https://naver.me/GA6FzeBq' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 9) {
    images = [
      { src: "assets/imgs/경의선숲길/카페/아오이토리/4.PNG", description: '아오이토리', link: 'https://naver.me/GVAW8n8f' },
      { src: "assets/imgs/경의선숲길/카페/아오이토리/5.PNG", description: '아오이토리', link: 'https://naver.me/GVAW8n8f' },
      { src: "assets/imgs/경의선숲길/카페/아오이토리/1.PNG", description: '아오이토리', link: 'https://naver.me/GVAW8n8f' },
      { src: "assets/imgs/경의선숲길/카페/아오이토리/2.PNG", description: '아오이토리', link: 'https://naver.me/GVAW8n8f' },
      { src: "assets/imgs/경의선숲길/카페/아오이토리/3.PNG", description: '아오이토리', link: 'https://naver.me/GVAW8n8f' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 10) {
    images = [
      { src: "assets/imgs/경의선숲길/카페/어더아사/2.PNG", description: '어더아사', link: 'https://naver.me/xvLTzwGw' },
      { src: "assets/imgs/경의선숲길/카페/어더아사/3.PNG", description: '어더아사', link: 'https://naver.me/xvLTzwGw' },
      { src: "assets/imgs/경의선숲길/카페/어더아사/4.PNG", description: '어더아사', link: 'https://naver.me/xvLTzwGw' },
      { src: "assets/imgs/경의선숲길/카페/어더아사/5.PNG", description: '어더아사', link: 'https://naver.me/xvLTzwGw' },
      { src: "assets/imgs/경의선숲길/카페/어더아사/1.PNG", description: '어더아사', link: 'https://naver.me/xvLTzwGw' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 11) {
    images = [
      { src: "assets/imgs/경의선숲길/카페/조앤도슨/4.PNG", description: '조앤도슨', link: 'https://naver.me/x35MlBLG' },
      { src: "assets/imgs/경의선숲길/카페/조앤도슨/5.PNG", description: '조앤도슨', link: 'https://naver.me/x35MlBLG' },
      { src: "assets/imgs/경의선숲길/카페/조앤도슨/1.PNG", description: '조앤도슨', link: 'https://naver.me/x35MlBLG' },
      { src: "assets/imgs/경의선숲길/카페/조앤도슨/2.PNG", description: '조앤도슨', link: 'https://naver.me/x35MlBLG' },
      { src: "assets/imgs/경의선숲길/카페/조앤도슨/3.PNG", description: '조앤도슨', link: 'https://naver.me/x35MlBLG' }

      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 12) {
    images = [
      { src: "assets/imgs/경의선숲길/카페/청수당공명/2.PNG", description: '청수당공명', link: 'https://naver.me/xKQcnmKY' },
      { src: "assets/imgs/경의선숲길/카페/청수당공명/3.PNG", description: '청수당공명', link: 'https://naver.me/xKQcnmKY' },
      { src: "assets/imgs/경의선숲길/카페/청수당공명/4.PNG", description: '청수당공명', link: 'https://naver.me/xKQcnmKY' },
      { src: "assets/imgs/경의선숲길/카페/청수당공명/5.PNG", description: '청수당공명', link: 'https://naver.me/xKQcnmKY' },
      { src: "assets/imgs/경의선숲길/카페/청수당공명/1.PNG", description: '청수당공명', link: 'https://naver.me/xKQcnmKY' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 13) {
    images = [
      { src: "assets/imgs/경의선숲길/놀거리/CR Collective/5.PNG", description: 'CR Collective', link: 'https://map.naver.com/v5/search/CR%20Collective/place/49072062?entry=plt&c=15,0,0,0,dh&isCorrectAnswer=true' },
      { src: "assets/imgs/경의선숲길/놀거리/CR Collective/1.PNG", description: 'CR Collective', link: 'https://map.naver.com/v5/search/CR%20Collective/place/49072062?entry=plt&c=15,0,0,0,dh&isCorrectAnswer=true' },
      { src: "assets/imgs/경의선숲길/놀거리/CR Collective/2.PNG", description: 'CR Collective', link: 'https://map.naver.com/v5/search/CR%20Collective/place/49072062?entry=plt&c=15,0,0,0,dh&isCorrectAnswer=true' },
      { src: "assets/imgs/경의선숲길/놀거리/CR Collective/3.PNG", description: 'CR Collective', link: 'https://map.naver.com/v5/search/CR%20Collective/place/49072062?entry=plt&c=15,0,0,0,dh&isCorrectAnswer=true' },
      { src: "assets/imgs/경의선숲길/놀거리/CR Collective/4.PNG", description: 'CR Collective', link: 'https://map.naver.com/v5/search/CR%20Collective/place/49072062?entry=plt&c=15,0,0,0,dh&isCorrectAnswer=true' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 14) {
    images = [
      { src: "assets/imgs/경의선숲길/놀거리/도토리 캐리커쳐/2.PNG", description: '도토리 캐리커쳐', link: 'https://map.naver.com/v5/search/%EB%8F%84%ED%86%A0%EB%A6%AC%20%EC%BA%90%EB%A6%AC%EC%BB%A4%EC%B3%90/place/1663897441?entry=plt&c=15,0,0,0,dh&isCorrectAnswer=true' },
      { src: "assets/imgs/경의선숲길/놀거리/도토리 캐리커쳐/3.PNG", description: '도토리 캐리커쳐', link: 'https://map.naver.com/v5/search/%EB%8F%84%ED%86%A0%EB%A6%AC%20%EC%BA%90%EB%A6%AC%EC%BB%A4%EC%B3%90/place/1663897441?entry=plt&c=15,0,0,0,dh&isCorrectAnswer=true' },
      { src: "assets/imgs/경의선숲길/놀거리/도토리 캐리커쳐/4.PNG", description: '도토리 캐리커쳐', link: 'https://map.naver.com/v5/search/%EB%8F%84%ED%86%A0%EB%A6%AC%20%EC%BA%90%EB%A6%AC%EC%BB%A4%EC%B3%90/place/1663897441?entry=plt&c=15,0,0,0,dh&isCorrectAnswer=true' },
      { src: "assets/imgs/경의선숲길/놀거리/도토리 캐리커쳐/5.PNG", description: '도토리 캐리커쳐', link: 'https://map.naver.com/v5/search/%EB%8F%84%ED%86%A0%EB%A6%AC%20%EC%BA%90%EB%A6%AC%EC%BB%A4%EC%B3%90/place/1663897441?entry=plt&c=15,0,0,0,dh&isCorrectAnswer=true' },
      { src: "assets/imgs/경의선숲길/놀거리/도토리 캐리커쳐/1.PNG", description: '도토리 캐리커쳐', link: 'https://map.naver.com/v5/search/%EB%8F%84%ED%86%A0%EB%A6%AC%20%EC%BA%90%EB%A6%AC%EC%BB%A4%EC%B3%90/place/1663897441?entry=plt&c=15,0,0,0,dh&isCorrectAnswer=true' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 15) {
    images = [
      { src: "assets/imgs/경의선숲길/놀거리/서울콜렉터/1.PNG", description: '서울콜렉터', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%BD%9C%EB%A0%89%ED%84%B0/place/1307928352?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/경의선숲길/놀거리/서울콜렉터/2.PNG", description: '서울콜렉터', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%BD%9C%EB%A0%89%ED%84%B0/place/1307928352?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/경의선숲길/놀거리/서울콜렉터/3.PNG", description: '서울콜렉터', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%BD%9C%EB%A0%89%ED%84%B0/place/1307928352?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/경의선숲길/놀거리/서울콜렉터/4.PNG", description: '서울콜렉터', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%BD%9C%EB%A0%89%ED%84%B0/place/1307928352?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/경의선숲길/놀거리/서울콜렉터/5.PNG", description: '서울콜렉터', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%BD%9C%EB%A0%89%ED%84%B0/place/1307928352?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 16) {
    images = [
      { src: "assets/imgs/경의선숲길/놀거리/세컨드스튜디오/3.PNG", description: '세컨드스튜디오', link: 'https://map.naver.com/v5/search/%EC%84%B8%EC%BB%A8%EB%93%9C%EC%8A%A4%ED%8A%9C%EB%94%94%EC%98%A4/place/13082154?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/경의선숲길/놀거리/세컨드스튜디오/4.PNG", description: '세컨드스튜디오', link: 'https://map.naver.com/v5/search/%EC%84%B8%EC%BB%A8%EB%93%9C%EC%8A%A4%ED%8A%9C%EB%94%94%EC%98%A4/place/13082154?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/경의선숲길/놀거리/세컨드스튜디오/5.PNG", description: '세컨드스튜디오', link: 'https://map.naver.com/v5/search/%EC%84%B8%EC%BB%A8%EB%93%9C%EC%8A%A4%ED%8A%9C%EB%94%94%EC%98%A4/place/13082154?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/경의선숲길/놀거리/세컨드스튜디오/1.PNG", description: '세컨드스튜디오', link: 'https://map.naver.com/v5/search/%EC%84%B8%EC%BB%A8%EB%93%9C%EC%8A%A4%ED%8A%9C%EB%94%94%EC%98%A4/place/13082154?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/경의선숲길/놀거리/세컨드스튜디오/2.PNG", description: '세컨드스튜디오', link: 'https://map.naver.com/v5/search/%EC%84%B8%EC%BB%A8%EB%93%9C%EC%8A%A4%ED%8A%9C%EB%94%94%EC%98%A4/place/13082154?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 17) {
    images = [
      { src: "assets/imgs/경의선숲길/놀거리/셀피스트 셀프사진관 홍대/4.PNG", description: '셀피스트 셀프사진관 홍대', link: 'https://map.naver.com/v5/search/%EC%85%80%ED%94%BC%EC%8A%A4%ED%8A%B8%20%EC%85%80%ED%94%84%EC%82%AC%EC%A7%84%EA%B4%80%20%ED%99%8D%EB%8C%80/place/1804449640?entry=plt&c=15,0,0,0,dh&isCorrectAnswer=true' },
      { src: "assets/imgs/경의선숲길/놀거리/셀피스트 셀프사진관 홍대/5.PNG", description: '셀피스트 셀프사진관 홍대', link: 'https://map.naver.com/v5/search/%EC%85%80%ED%94%BC%EC%8A%A4%ED%8A%B8%20%EC%85%80%ED%94%84%EC%82%AC%EC%A7%84%EA%B4%80%20%ED%99%8D%EB%8C%80/place/1804449640?entry=plt&c=15,0,0,0,dh&isCorrectAnswer=true' },
      { src: "assets/imgs/경의선숲길/놀거리/셀피스트 셀프사진관 홍대/1.PNG", description: '셀피스트 셀프사진관 홍대', link: 'https://map.naver.com/v5/search/%EC%85%80%ED%94%BC%EC%8A%A4%ED%8A%B8%20%EC%85%80%ED%94%84%EC%82%AC%EC%A7%84%EA%B4%80%20%ED%99%8D%EB%8C%80/place/1804449640?entry=plt&c=15,0,0,0,dh&isCorrectAnswer=true' },
      { src: "assets/imgs/경의선숲길/놀거리/셀피스트 셀프사진관 홍대/2.PNG", description: '셀피스트 셀프사진관 홍대', link: 'https://map.naver.com/v5/search/%EC%85%80%ED%94%BC%EC%8A%A4%ED%8A%B8%20%EC%85%80%ED%94%84%EC%82%AC%EC%A7%84%EA%B4%80%20%ED%99%8D%EB%8C%80/place/1804449640?entry=plt&c=15,0,0,0,dh&isCorrectAnswer=true' },
      { src: "assets/imgs/경의선숲길/놀거리/셀피스트 셀프사진관 홍대/3.PNG", description: '셀피스트 셀프사진관 홍대', link: 'https://map.naver.com/v5/search/%EC%85%80%ED%94%BC%EC%8A%A4%ED%8A%B8%20%EC%85%80%ED%94%84%EC%82%AC%EC%A7%84%EA%B4%80%20%ED%99%8D%EB%8C%80/place/1804449640?entry=plt&c=15,0,0,0,dh&isCorrectAnswer=true' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 18) {
    images = [
      { src: "assets/imgs/경의선숲길/놀거리/연남스페이스/3.PNG", description: '연남스페이스', link: 'https://map.naver.com/v5/search/%EC%97%B0%EB%82%A8%EC%8A%A4%ED%8E%98%EC%9D%B4%EC%8A%A4/place/1275394668?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/경의선숲길/놀거리/연남스페이스/4.PNG", description: '연남스페이스', link: 'https://map.naver.com/v5/search/%EC%97%B0%EB%82%A8%EC%8A%A4%ED%8E%98%EC%9D%B4%EC%8A%A4/place/1275394668?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/경의선숲길/놀거리/연남스페이스/5.PNG", description: '연남스페이스', link: 'https://map.naver.com/v5/search/%EC%97%B0%EB%82%A8%EC%8A%A4%ED%8E%98%EC%9D%B4%EC%8A%A4/place/1275394668?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/경의선숲길/놀거리/연남스페이스/1.PNG", description: '연남스페이스', link: 'https://map.naver.com/v5/search/%EC%97%B0%EB%82%A8%EC%8A%A4%ED%8E%98%EC%9D%B4%EC%8A%A4/place/1275394668?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/경의선숲길/놀거리/연남스페이스/2.PNG", description: '연남스페이스', link: 'https://map.naver.com/v5/search/%EC%97%B0%EB%82%A8%EC%8A%A4%ED%8E%98%EC%9D%B4%EC%8A%A4/place/1275394668?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 19) {
    images = [
      { src: 'assets/imgs/경춘선숲길/식당/경복식당/경복식당5.jpg', description: '경복식당', link: 'https://map.naver.com/v5/search/%EC%97%B0%EB%82%A8%EC%8A%A4%ED%8E%98%EC%9D%B4%EC%8A%A4/place/1275394668?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: 'assets/imgs/경춘선숲길/식당/경복식당/경복식당1.jpg', description: '경복식당', link: 'https://map.naver.com/v5/search/%EC%97%B0%EB%82%A8%EC%8A%A4%ED%8E%98%EC%9D%B4%EC%8A%A4/place/1275394668?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: 'assets/imgs/경춘선숲길/식당/경복식당/경복식당2.jpg', description: '경복식당', link: 'https://map.naver.com/v5/search/%EC%97%B0%EB%82%A8%EC%8A%A4%ED%8E%98%EC%9D%B4%EC%8A%A4/place/1275394668?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: 'assets/imgs/경춘선숲길/식당/경복식당/경복식당3.jpg', description: '경복식당', link: 'https://map.naver.com/v5/search/%EC%97%B0%EB%82%A8%EC%8A%A4%ED%8E%98%EC%9D%B4%EC%8A%A4/place/1275394668?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: 'assets/imgs/경춘선숲길/식당/경복식당/경복식당4.jpg', description: '경복식당', link: 'https://map.naver.com/v5/search/%EC%97%B0%EB%82%A8%EC%8A%A4%ED%8E%98%EC%9D%B4%EC%8A%A4/place/1275394668?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 20) {
    images = [
      { src: "assets/imgs/경춘선숲길/식당/경성초밥/경성초밥5.jpg", description: '경성초밥', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%B6%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1453394676?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/경춘선숲길/식당/경성초밥/경성초밥1.jpg", description: '경성초밥', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%B6%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1453394676?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/경춘선숲길/식당/경성초밥/경성초밥2.jpg", description: '경성초밥', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%B6%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1453394676?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/경춘선숲길/식당/경성초밥/경성초밥3.jpg", description: '경성초밥', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%B6%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1453394676?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/경춘선숲길/식당/경성초밥/경성초밥4.jpg", description: '경성초밥', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%B6%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1453394676?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 21) {
    images = [
      { src: "assets/imgs/경춘선숲길/식당/공릉동도깨비/공릉동도깨비4.jpg", description: '공릉동도깨비', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%B6%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/460447110?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/경춘선숲길/식당/공릉동도깨비/공릉동도깨비5.jpg", description: '공릉동도깨비', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%B6%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/460447110?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/경춘선숲길/식당/공릉동도깨비/공릉동도깨비1.jpg", description: '공릉동도깨비', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%B6%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/460447110?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/경춘선숲길/식당/공릉동도깨비/공릉동도깨비2.jpg", description: '공릉동도깨비', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%B6%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/460447110?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/경춘선숲길/식당/공릉동도깨비/공릉동도깨비3.jpg", description: '공릉동도깨비', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%B6%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/460447110?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 22) {
    images = [
      { src: "assets/imgs/경춘선숲길/식당/동적깡통구이 태릉입구역점/동적깡통구이 탱릉입구역점5.jpg", description: '동적깡통구이 탱릉입구역점', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%B6%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1480430382?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/경춘선숲길/식당/동적깡통구이 태릉입구역점/동적깡통구이 탱릉입구역점1.jpg", description: '동적깡통구이 탱릉입구역점', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%B6%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1480430382?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/경춘선숲길/식당/동적깡통구이 태릉입구역점/동적깡통구이 탱릉입구역점2.jpg", description: '동적깡통구이 탱릉입구역점', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%B6%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1480430382?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/경춘선숲길/식당/동적깡통구이 태릉입구역점/동적깡통구이 탱릉입구역점3.jpg", description: '동적깡통구이 탱릉입구역점', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%B6%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1480430382?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/경춘선숲길/식당/동적깡통구이 태릉입구역점/동적깡통구이 탱릉입구역점4.jpg", description: '동적깡통구이 탱릉입구역점', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%B6%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1480430382?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 23) {
    images = [
      { src: "assets/imgs/경춘선숲길/식당/메모아/메모아2.jpg", description: '메모아', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%B6%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1024231099?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/경춘선숲길/식당/메모아/메모아3.jpg", description: '메모아', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%B6%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1024231099?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/경춘선숲길/식당/메모아/메모아4.jpg", description: '메모아', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%B6%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1024231099?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/경춘선숲길/식당/메모아/메모아5.jpg", description: '메모아', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%B6%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1024231099?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/경춘선숲길/식당/메모아/메모아1.jpg", description: '메모아', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%B6%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1024231099?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 24) {
    images = [
      { src: "assets/imgs/경춘선숲길/식당/메트로폴리스/메트로폴리스5.jpg", description: '메트로폴리스', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%B6%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1815424144?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/경춘선숲길/식당/메트로폴리스/메트로폴리스1.jpg", description: '메트로폴리스', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%B6%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1815424144?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/경춘선숲길/식당/메트로폴리스/메트로폴리스2.jpg", description: '메트로폴리스', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%B6%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1815424144?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/경춘선숲길/식당/메트로폴리스/메트로폴리스3.jpg", description: '메트로폴리스', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%B6%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1815424144?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/경춘선숲길/식당/메트로폴리스/메트로폴리스4.jpg", description: '메트로폴리스', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EC%B6%98%EC%84%A0%20%EC%88%B2%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1815424144?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 25) {
    images = [
      { src: "assets/imgs/경춘선숲길/카페/그루브커피로스터즈/그루브커피로스터즈4.jpg", description: '그루브커피로스터즈', link: 'https://naver.me/FrKAAWXx' },
      { src: "assets/imgs/경춘선숲길/카페/그루브커피로스터즈/그루브커피로스터즈5.jpg", description: '그루브커피로스터즈', link: 'https://naver.me/FrKAAWXx' },
      { src: "assets/imgs/경춘선숲길/카페/그루브커피로스터즈/그루브커피로스터즈1.jpg", description: '그루브커피로스터즈', link: 'https://naver.me/FrKAAWXx' },
      { src: "assets/imgs/경춘선숲길/카페/그루브커피로스터즈/그루브커피로스터즈2.jpg", description: '그루브커피로스터즈', link: 'https://naver.me/FrKAAWXx' },
      { src: "assets/imgs/경춘선숲길/카페/그루브커피로스터즈/그루브커피로스터즈3.jpg", description: '그루브커피로스터즈', link: 'https://naver.me/FrKAAWXx' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 26) {
    images = [
      { src: "assets/imgs/경춘선숲길/카페/리아트커피바/리아트커피바4.jpg", description: '리아트커피바', link: 'https://naver.me/G9RZ2qmJ' },
      { src: "assets/imgs/경춘선숲길/카페/리아트커피바/리아트커피바5.jpg", description: '리아트커피바', link: 'https://naver.me/G9RZ2qmJ' },
      { src: "assets/imgs/경춘선숲길/카페/리아트커피바/리아트커피바1.jpg", description: '리아트커피바', link: 'https://naver.me/G9RZ2qmJ' },
      { src: "assets/imgs/경춘선숲길/카페/리아트커피바/리아트커피바2.jpg", description: '리아트커피바', link: 'https://naver.me/G9RZ2qmJ' },
      { src: "assets/imgs/경춘선숲길/카페/리아트커피바/리아트커피바3.jpg", description: '리아트커피바', link: 'https://naver.me/G9RZ2qmJ' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 27) {
    images = [
      { src: "assets/imgs/경춘선숲길/카페/블루마일스커피로스터즈/블루마일스커피로스터즈5.jpg", description: '블루마일스커피로스터즈', link: 'https://naver.me/xrP66XM2' },
      { src: "assets/imgs/경춘선숲길/카페/블루마일스커피로스터즈/블루마일스커피로스터즈1.jpg", description: '블루마일스커피로스터즈', link: 'https://naver.me/xrP66XM2' },
      { src: "assets/imgs/경춘선숲길/카페/블루마일스커피로스터즈/블루마일스커피로스터즈2.jpg", description: '블루마일스커피로스터즈', link: 'https://naver.me/xrP66XM2' },
      { src: "assets/imgs/경춘선숲길/카페/블루마일스커피로스터즈/블루마일스커피로스터즈3.jpg", description: '블루마일스커피로스터즈', link: 'https://naver.me/xrP66XM2' },
      { src: "assets/imgs/경춘선숲길/카페/블루마일스커피로스터즈/블루마일스커피로스터즈4.jpg", description: '블루마일스커피로스터즈', link: 'https://naver.me/xrP66XM2' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 28) {
    images = [
      { src: "assets/imgs/경춘선숲길/카페/비기닝브레드/비기닝브레드4.jpg", description: '비기닝브레드', link: 'https://naver.me/Gd1UDn4K' },
      { src: "assets/imgs/경춘선숲길/카페/비기닝브레드/비기닝브레드5.jpg", description: '비기닝브레드', link: 'https://naver.me/Gd1UDn4K' },
      { src: "assets/imgs/경춘선숲길/카페/비기닝브레드/비기닝브레드1.jpg", description: '비기닝브레드', link: 'https://naver.me/Gd1UDn4K' },
      { src: "assets/imgs/경춘선숲길/카페/비기닝브레드/비기닝브레드2.jpg", description: '비기닝브레드', link: 'https://naver.me/Gd1UDn4K' },
      { src: "assets/imgs/경춘선숲길/카페/비기닝브레드/비기닝브레드3.jpg", description: '비기닝브레드', link: 'https://naver.me/Gd1UDn4K' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 29) {
    images = [
      { src: "assets/imgs/경춘선숲길/카페/상상과자점/상상과자점3.jpg", description: '상상과자점', link: 'https://naver.me/GjRGdYlW' },
      { src: "assets/imgs/경춘선숲길/카페/상상과자점/상상과자점4.jpg", description: '상상과자점', link: 'https://naver.me/GjRGdYlW' },
      { src: "assets/imgs/경춘선숲길/카페/상상과자점/상상과자점5.jpg", description: '상상과자점', link: 'https://naver.me/GjRGdYlW' },
      { src: "assets/imgs/경춘선숲길/카페/상상과자점/상상과자점1.jpg", description: '상상과자점', link: 'https://naver.me/GjRGdYlW' },
      { src: "assets/imgs/경춘선숲길/카페/상상과자점/상상과자점2.jpg", description: '상상과자점', link: 'https://naver.me/GjRGdYlW' }

      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 30) {
    images = [
      { src: "assets/imgs/경춘선숲길/카페/오누이/오누이5.jpg", description: '오누이', link: 'https://naver.me/GC2ufDmg' },
      { src: "assets/imgs/경춘선숲길/카페/오누이/오누이1.jpg", description: '오누이', link: 'https://naver.me/GC2ufDmg' },
      { src: "assets/imgs/경춘선숲길/카페/오누이/오누이2.jpg", description: '오누이', link: 'https://naver.me/GC2ufDmg' },
      { src: "assets/imgs/경춘선숲길/카페/오누이/오누이3.jpg", description: '오누이', link: 'https://naver.me/GC2ufDmg' },
      { src: "assets/imgs/경춘선숲길/카페/오누이/오누이4.jpg", description: '오누이', link: 'https://naver.me/GC2ufDmg' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 31) {
    images = [
      { src: "assets/imgs/경춘선숲길/놀거리/노원문화의거리/노원문화의거리1.jpg", description: '노원문화의거리', link: 'https://map.naver.com/v5/search/%EB%85%B8%EC%9B%90%EB%AC%B8%ED%99%94%EC%9D%98%EA%B1%B0%EB%A6%AC/place/18643761?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/경춘선숲길/놀거리/노원문화의거리/노원문화의거리2.jpg", description: '노원문화의거리', link: 'https://map.naver.com/v5/search/%EB%85%B8%EC%9B%90%EB%AC%B8%ED%99%94%EC%9D%98%EA%B1%B0%EB%A6%AC/place/18643761?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/경춘선숲길/놀거리/노원문화의거리/노원문화의거리3.jpg", description: '노원문화의거리', link: 'https://map.naver.com/v5/search/%EB%85%B8%EC%9B%90%EB%AC%B8%ED%99%94%EC%9D%98%EA%B1%B0%EB%A6%AC/place/18643761?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/경춘선숲길/놀거리/노원문화의거리/노원문화의거리4.jpg", description: '노원문화의거리', link: 'https://map.naver.com/v5/search/%EB%85%B8%EC%9B%90%EB%AC%B8%ED%99%94%EC%9D%98%EA%B1%B0%EB%A6%AC/place/18643761?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/경춘선숲길/놀거리/노원문화의거리/노원문화의거리5.jpg", description: '노원문화의거리', link: 'https://map.naver.com/v5/search/%EB%85%B8%EC%9B%90%EB%AC%B8%ED%99%94%EC%9D%98%EA%B1%B0%EB%A6%AC/place/18643761?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 32) {
    images = [
      { src: "assets/imgs/경춘선숲길/놀거리/불빛정원/불빛정원2.jpg", description: '불빛정원', link: 'https://map.naver.com/v5/search/%EB%B6%88%EB%B9%9B%EC%A0%95%EC%9B%90/place/1200984778?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/경춘선숲길/놀거리/불빛정원/불빛정원3.jpg", description: '불빛정원', link: 'https://map.naver.com/v5/search/%EB%B6%88%EB%B9%9B%EC%A0%95%EC%9B%90/place/1200984778?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/경춘선숲길/놀거리/불빛정원/불빛정원4.jpg", description: '불빛정원', link: 'https://map.naver.com/v5/search/%EB%B6%88%EB%B9%9B%EC%A0%95%EC%9B%90/place/1200984778?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/경춘선숲길/놀거리/불빛정원/불빛정원5.jpg", description: '불빛정원', link: 'https://map.naver.com/v5/search/%EB%B6%88%EB%B9%9B%EC%A0%95%EC%9B%90/place/1200984778?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/경춘선숲길/놀거리/불빛정원/불빛정원1.jpg", description: '불빛정원', link: 'https://map.naver.com/v5/search/%EB%B6%88%EB%B9%9B%EC%A0%95%EC%9B%90/place/1200984778?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 33) {
    images = [
      { src: "assets/imgs/경춘선숲길/놀거리/불암산/불암산2.jpg", description: '불암산', link: 'https://map.naver.com/v5/search/%EB%B6%88%EC%95%94%EC%82%B0/place/13491957?entry=plt&c=7,0,0,0,dh&placePath=%3Fentry=bmp' },
      { src: "assets/imgs/경춘선숲길/놀거리/불암산/불암산3.jpg", description: '불암산', link: 'https://map.naver.com/v5/search/%EB%B6%88%EC%95%94%EC%82%B0/place/13491957?entry=plt&c=7,0,0,0,dh&placePath=%3Fentry=bmp' },
      { src: "assets/imgs/경춘선숲길/놀거리/불암산/불암산4.jpg", description: '불암산', link: 'https://map.naver.com/v5/search/%EB%B6%88%EC%95%94%EC%82%B0/place/13491957?entry=plt&c=7,0,0,0,dh&placePath=%3Fentry=bmp' },
      { src: "assets/imgs/경춘선숲길/놀거리/불암산/불암산5.jpg", description: '불암산', link: 'https://map.naver.com/v5/search/%EB%B6%88%EC%95%94%EC%82%B0/place/13491957?entry=plt&c=7,0,0,0,dh&placePath=%3Fentry=bmp' },
      { src: "assets/imgs/경춘선숲길/놀거리/불암산/불암산1.jpg", description: '불암산', link: 'https://map.naver.com/v5/search/%EB%B6%88%EC%95%94%EC%82%B0/place/13491957?entry=plt&c=7,0,0,0,dh&placePath=%3Fentry=bmp' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 34) {
    images = [
      { src: "assets/imgs/경춘선숲길/놀거리/서울시립과학관/서울시립과학관4.jpg", description: '서울시립과학관', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%8B%9C%EB%A6%BD%EA%B3%BC%ED%95%99%EA%B4%80/place/515824798?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/경춘선숲길/놀거리/서울시립과학관/서울시립과학관5.jpg", description: '서울시립과학관', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%8B%9C%EB%A6%BD%EA%B3%BC%ED%95%99%EA%B4%80/place/515824798?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/경춘선숲길/놀거리/서울시립과학관/서울시립과학관1.jpg", description: '서울시립과학관', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%8B%9C%EB%A6%BD%EA%B3%BC%ED%95%99%EA%B4%80/place/515824798?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/경춘선숲길/놀거리/서울시립과학관/서울시립과학관2.jpg", description: '서울시립과학관', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%8B%9C%EB%A6%BD%EA%B3%BC%ED%95%99%EA%B4%80/place/515824798?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/경춘선숲길/놀거리/서울시립과학관/서울시립과학관3.jpg", description: '서울시립과학관', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%8B%9C%EB%A6%BD%EA%B3%BC%ED%95%99%EA%B4%80/place/515824798?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 35) {
    images = [
      { src: "assets/imgs/경춘선숲길/놀거리/육군박물관/육군박물관1.jpg", description: '육군박물관', link: 'https://map.naver.com/v5/search/%EC%9C%A1%EA%B5%B0%EB%B0%95%EB%AC%BC%EA%B4%80/place/11784466?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/경춘선숲길/놀거리/육군박물관/육군박물관2.jpg", description: '육군박물관', link: 'https://map.naver.com/v5/search/%EC%9C%A1%EA%B5%B0%EB%B0%95%EB%AC%BC%EA%B4%80/place/11784466?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/경춘선숲길/놀거리/육군박물관/육군박물관3.jpg", description: '육군박물관', link: 'https://map.naver.com/v5/search/%EC%9C%A1%EA%B5%B0%EB%B0%95%EB%AC%BC%EA%B4%80/place/11784466?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/경춘선숲길/놀거리/육군박물관/육군박물관4.jpg", description: '육군박물관', link: 'https://map.naver.com/v5/search/%EC%9C%A1%EA%B5%B0%EB%B0%95%EB%AC%BC%EA%B4%80/place/11784466?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/경춘선숲길/놀거리/육군박물관/육군박물관5.jpg", description: '육군박물관', link: 'https://map.naver.com/v5/search/%EC%9C%A1%EA%B5%B0%EB%B0%95%EB%AC%BC%EA%B4%80/place/11784466?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 36) {
    images = [
      { src: "assets/imgs/경춘선숲길/놀거리/중계근린공원/중계근린공원2.jpg", description: '중계근린공원', link: 'https://map.naver.com/v5/search/%EC%A4%91%EA%B3%84%EA%B7%BC%EB%A6%B0%EA%B3%B5%EC%9B%90/place/20495042?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/경춘선숲길/놀거리/중계근린공원/중계근린공원3.jpg", description: '중계근린공원', link: 'https://map.naver.com/v5/search/%EC%A4%91%EA%B3%84%EA%B7%BC%EB%A6%B0%EA%B3%B5%EC%9B%90/place/20495042?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/경춘선숲길/놀거리/중계근린공원/중계근린공원4.jpg", description: '중계근린공원', link: 'https://map.naver.com/v5/search/%EC%A4%91%EA%B3%84%EA%B7%BC%EB%A6%B0%EA%B3%B5%EC%9B%90/place/20495042?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/경춘선숲길/놀거리/중계근린공원/중계근린공원5.jpg", description: '중계근린공원', link: 'https://map.naver.com/v5/search/%EC%A4%91%EA%B3%84%EA%B7%BC%EB%A6%B0%EA%B3%B5%EC%9B%90/place/20495042?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/경춘선숲길/놀거리/중계근린공원/중계근린공원1.jpg", description: '중계근린공원', link: 'https://map.naver.com/v5/search/%EC%A4%91%EA%B3%84%EA%B7%BC%EB%A6%B0%EA%B3%B5%EC%9B%90/place/20495042?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 37) {
    images = [
      { src: 'assets/imgs/항동철길/식당/바른숯불구이/바른숯불구이5.jpg', description: '바른숯불구이점', link: 'https://map.naver.com/v5/search/%ED%95%AD%EB%8F%99%EC%B2%A0%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/36886895?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: 'assets/imgs/항동철길/식당/바른숯불구이/바른숯불구이1.jpg', description: '바른숯불구이점', link: 'https://map.naver.com/v5/search/%ED%95%AD%EB%8F%99%EC%B2%A0%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/36886895?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: 'assets/imgs/항동철길/식당/바른숯불구이/바른숯불구이2.jpg', description: '바른숯불구이점', link: 'https://map.naver.com/v5/search/%ED%95%AD%EB%8F%99%EC%B2%A0%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/36886895?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: 'assets/imgs/항동철길/식당/바른숯불구이/바른숯불구이3.jpg', description: '바른숯불구이점', link: 'https://map.naver.com/v5/search/%ED%95%AD%EB%8F%99%EC%B2%A0%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/36886895?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: 'assets/imgs/항동철길/식당/바른숯불구이/바른숯불구이4.jpg', description: '바른숯불구이점', link: 'https://map.naver.com/v5/search/%ED%95%AD%EB%8F%99%EC%B2%A0%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/36886895?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 38) {
    images = [
      { src: "assets/imgs/항동철길/식당/병규네부대찌개/병규네부대찌개4.jpg", description: '병규네부대찌개', link: 'https://map.naver.com/v5/search/%ED%95%AD%EB%8F%99%EC%B2%A0%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/517974102?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/항동철길/식당/병규네부대찌개/병규네부대찌개5.jpg", description: '병규네부대찌개', link: 'https://map.naver.com/v5/search/%ED%95%AD%EB%8F%99%EC%B2%A0%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/517974102?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/항동철길/식당/병규네부대찌개/병규네부대찌개1.jpg", description: '병규네부대찌개', link: 'https://map.naver.com/v5/search/%ED%95%AD%EB%8F%99%EC%B2%A0%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/517974102?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/항동철길/식당/병규네부대찌개/병규네부대찌개2.jpg", description: '병규네부대찌개', link: 'https://map.naver.com/v5/search/%ED%95%AD%EB%8F%99%EC%B2%A0%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/517974102?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/항동철길/식당/병규네부대찌개/병규네부대찌개3.jpg", description: '병규네부대찌개', link: 'https://map.naver.com/v5/search/%ED%95%AD%EB%8F%99%EC%B2%A0%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/517974102?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 39) {
    images = [
      { src: "assets/imgs/항동철길/식당/사생활/사생활3.jpg", description: '사생활', link: 'https://map.naver.com/v5/search/%ED%95%AD%EB%8F%99%EC%B2%A0%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1713322772?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/항동철길/식당/사생활/사생활4.jpg", description: '사생활', link: 'https://map.naver.com/v5/search/%ED%95%AD%EB%8F%99%EC%B2%A0%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1713322772?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/항동철길/식당/사생활/사생활5.jpg", description: '사생활', link: 'https://map.naver.com/v5/search/%ED%95%AD%EB%8F%99%EC%B2%A0%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1713322772?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/항동철길/식당/사생활/사생활1.jpg", description: '사생활', link: 'https://map.naver.com/v5/search/%ED%95%AD%EB%8F%99%EC%B2%A0%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1713322772?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/항동철길/식당/사생활/사생활2.jpg", description: '사생활', link: 'https://map.naver.com/v5/search/%ED%95%AD%EB%8F%99%EC%B2%A0%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1713322772?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 40) {
    images = [
      { src: "assets/imgs/항동철길/식당/스테이플버거/스테이플버거4.jpg", description: '스테이플버거', link: 'https://map.naver.com/v5/search/%ED%95%AD%EB%8F%99%EC%B2%A0%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1112634672?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/항동철길/식당/스테이플버거/스테이플버거5.jpg", description: '스테이플버거', link: 'https://map.naver.com/v5/search/%ED%95%AD%EB%8F%99%EC%B2%A0%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1112634672?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/항동철길/식당/스테이플버거/스테이플버거1.jpg", description: '스테이플버거', link: 'https://map.naver.com/v5/search/%ED%95%AD%EB%8F%99%EC%B2%A0%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1112634672?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/항동철길/식당/스테이플버거/스테이플버거2.jpg", description: '스테이플버거', link: 'https://map.naver.com/v5/search/%ED%95%AD%EB%8F%99%EC%B2%A0%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1112634672?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/항동철길/식당/스테이플버거/스테이플버거3.jpg", description: '스테이플버거', link: 'https://map.naver.com/v5/search/%ED%95%AD%EB%8F%99%EC%B2%A0%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1112634672?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 41) {
    images = [
      { src: "assets/imgs/항동철길/식당/옹기종기감자옹심이/옹기종기감자옹심이5.jpg", description: '옹기종기감자옹심이', link: 'https://map.naver.com/v5/search/%ED%95%AD%EB%8F%99%EC%B2%A0%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1904170793?c=15,0,0,0,dh&placePath=%3Fentry%253Dpl1' },
      { src: "assets/imgs/항동철길/식당/옹기종기감자옹심이/옹기종기감자옹심이1.jpg", description: '옹기종기감자옹심이', link: 'https://map.naver.com/v5/search/%ED%95%AD%EB%8F%99%EC%B2%A0%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1904170793?c=15,0,0,0,dh&placePath=%3Fentry%253Dpl1' },
      { src: "assets/imgs/항동철길/식당/옹기종기감자옹심이/옹기종기감자옹심이2.jpg", description: '옹기종기감자옹심이', link: 'https://map.naver.com/v5/search/%ED%95%AD%EB%8F%99%EC%B2%A0%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1904170793?c=15,0,0,0,dh&placePath=%3Fentry%253Dpl1' },
      { src: "assets/imgs/항동철길/식당/옹기종기감자옹심이/옹기종기감자옹심이3.jpg", description: '옹기종기감자옹심이', link: 'https://map.naver.com/v5/search/%ED%95%AD%EB%8F%99%EC%B2%A0%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1904170793?c=15,0,0,0,dh&placePath=%3Fentry%253Dpl1' },
      { src: "assets/imgs/항동철길/식당/옹기종기감자옹심이/옹기종기감자옹심이4.jpg", description: '옹기종기감자옹심이', link: 'https://map.naver.com/v5/search/%ED%95%AD%EB%8F%99%EC%B2%A0%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1904170793?c=15,0,0,0,dh&placePath=%3Fentry%253Dpl1' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 42) {
    images = [
      { src: "assets/imgs/항동철길/식당/족발집 오류점/족발집 오류점4.jpg", description: '족발집 오류점', link: 'https://map.naver.com/v5/search/%ED%95%AD%EB%8F%99%EC%B2%A0%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/38457146?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/항동철길/식당/족발집 오류점/족발집 오류점5.jpg", description: '족발집 오류점', link: 'https://map.naver.com/v5/search/%ED%95%AD%EB%8F%99%EC%B2%A0%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/38457146?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/항동철길/식당/족발집 오류점/족발집 오류점1.jpg", description: '족발집 오류점', link: 'https://map.naver.com/v5/search/%ED%95%AD%EB%8F%99%EC%B2%A0%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/38457146?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/항동철길/식당/족발집 오류점/족발집 오류점2.jpg", description: '족발집 오류점', link: 'https://map.naver.com/v5/search/%ED%95%AD%EB%8F%99%EC%B2%A0%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/38457146?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/항동철길/식당/족발집 오류점/족발집 오류점3.jpg", description: '족발집 오류점', link: 'https://map.naver.com/v5/search/%ED%95%AD%EB%8F%99%EC%B2%A0%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/38457146?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 43) {
    images = [
      { src: "assets/imgs/항동철길/카페/12NOI/12NOI5.jpg", description: '12NOI', link: 'https://naver.me/58H3OWSx' },
      { src: "assets/imgs/항동철길/카페/12NOI/12NOI1.jpg", description: '12NOI', link: 'https://naver.me/58H3OWSx' },
      { src: "assets/imgs/항동철길/카페/12NOI/12NOI2.jpg", description: '12NOI', link: 'https://naver.me/58H3OWSx' },
      { src: "assets/imgs/항동철길/카페/12NOI/12NOI3.jpg", description: '12NOI', link: 'https://naver.me/58H3OWSx' },
      { src: "assets/imgs/항동철길/카페/12NOI/12NOI4.jpg", description: '12NOI', link: 'https://naver.me/58H3OWSx' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 44) {
    images = [
      { src: "assets/imgs/항동철길/카페/BCDM/BCDM5.jpg", description: 'BCDM', link: 'https://naver.me/IIqDI7ba' },
      { src: "assets/imgs/항동철길/카페/BCDM/BCDM1.jpg", description: 'BCDM', link: 'https://naver.me/IIqDI7ba' },
      { src: "assets/imgs/항동철길/카페/BCDM/BCDM2.jpg", description: 'BCDM', link: 'https://naver.me/IIqDI7ba' },
      { src: "assets/imgs/항동철길/카페/BCDM/BCDM3.jpg", description: 'BCDM', link: 'https://naver.me/IIqDI7ba' },
      { src: "assets/imgs/항동철길/카페/BCDM/BCDM4.jpg", description: 'BCDM', link: 'https://naver.me/IIqDI7ba' },
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 45) {
    images = [
      { src: "assets/imgs/항동철길/카페/마라나타/마라나타3.jpg", description: '마라나타', link: 'https://naver.me/5jAjWsMF' },
      { src: "assets/imgs/항동철길/카페/마라나타/마라나타4.jpg", description: '마라나타', link: 'https://naver.me/5jAjWsMF' },
      { src: "assets/imgs/항동철길/카페/마라나타/마라나타5.jpg", description: '마라나타', link: 'https://naver.me/5jAjWsMF' },
      { src: "assets/imgs/항동철길/카페/마라나타/마라나타1.jpg", description: '마라나타', link: 'https://naver.me/5jAjWsMF' },
      { src: "assets/imgs/항동철길/카페/마라나타/마라나타2.jpg", description: '마라나타', link: 'https://naver.me/5jAjWsMF' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 46) {
    images = [
      { src: "assets/imgs/항동철길/카페/마프라오/마프라오4.jpg", description: '마프라오', link: 'https://naver.me/GJr5Ua9r' },
      { src: "assets/imgs/항동철길/카페/마프라오/마프라오5.jpg", description: '마프라오', link: 'https://naver.me/GJr5Ua9r' },
      { src: "assets/imgs/항동철길/카페/마프라오/마프라오1.jpg", description: '마프라오', link: 'https://naver.me/GJr5Ua9r' },
      { src: "assets/imgs/항동철길/카페/마프라오/마프라오2.jpg", description: '마프라오', link: 'https://naver.me/GJr5Ua9r' },
      { src: "assets/imgs/항동철길/카페/마프라오/마프라오3.jpg", description: '마프라오', link: 'https://naver.me/GJr5Ua9r' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 47) {
    images = [
      { src: "assets/imgs/항동철길/카페/메이로드/메이로드5.jpg", description: '메이로드', link: 'https://naver.me/FFvSHeId' },
      { src: "assets/imgs/항동철길/카페/메이로드/메이로드1.jpg", description: '메이로드', link: 'https://naver.me/FFvSHeId' },
      { src: "assets/imgs/항동철길/카페/메이로드/메이로드2.jpg", description: '메이로드', link: 'https://naver.me/FFvSHeId' },
      { src: "assets/imgs/항동철길/카페/메이로드/메이로드3.jpg", description: '메이로드', link: 'https://naver.me/FFvSHeId' },
      { src: "assets/imgs/항동철길/카페/메이로드/메이로드4.jpg", description: '메이로드', link: 'https://naver.me/FFvSHeId' }

      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 48) {
    images = [
      { src: "assets/imgs/항동철길/카페/씬(scene)/씬(scene)4.jpg", description: '씬(scene)', link: 'https://naver.me/I5F4DyrX' },
      { src: "assets/imgs/항동철길/카페/씬(scene)/씬(scene)5.jpg", description: '씬(scene)', link: 'https://naver.me/I5F4DyrX' },
      { src: "assets/imgs/항동철길/카페/씬(scene)/씬(scene)1.jpg", description: '씬(scene)', link: 'https://naver.me/I5F4DyrX' },
      { src: "assets/imgs/항동철길/카페/씬(scene)/씬(scene)2.jpg", description: '씬(scene)', link: 'https://naver.me/I5F4DyrX' },
      { src: "assets/imgs/항동철길/카페/씬(scene)/씬(scene)3.jpg", description: '씬(scene)', link: 'https://naver.me/I5F4DyrX' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 49) {
    images = [
      { src: "assets/imgs/항동철길/놀거리/고척근린공원/고척근린공원5.jpg", description: '고척근린공원', link: 'https://map.naver.com/v5/search/%EA%B3%A0%EC%B2%99%EA%B7%BC%EB%A6%B0%EA%B3%B5%EC%9B%90/place/18966242?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/항동철길/놀거리/고척근린공원/고척근린공원1.jpg", description: '고척근린공원', link: 'https://map.naver.com/v5/search/%EA%B3%A0%EC%B2%99%EA%B7%BC%EB%A6%B0%EA%B3%B5%EC%9B%90/place/18966242?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/항동철길/놀거리/고척근린공원/고척근린공원2.jpg", description: '고척근린공원', link: 'https://map.naver.com/v5/search/%EA%B3%A0%EC%B2%99%EA%B7%BC%EB%A6%B0%EA%B3%B5%EC%9B%90/place/18966242?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/항동철길/놀거리/고척근린공원/고척근린공원3.jpg", description: '고척근린공원', link: 'https://map.naver.com/v5/search/%EA%B3%A0%EC%B2%99%EA%B7%BC%EB%A6%B0%EA%B3%B5%EC%9B%90/place/18966242?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/항동철길/놀거리/고척근린공원/고척근린공원4.jpg", description: '고척근린공원', link: 'https://map.naver.com/v5/search/%EA%B3%A0%EC%B2%99%EA%B7%BC%EB%A6%B0%EA%B3%B5%EC%9B%90/place/18966242?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 50) {
    images = [
      { src: "assets/imgs/항동철길/놀거리/구로근린공원/구로근린공원4.jpg", description: '구로근린공원', link: 'https://map.naver.com/v5/search/%EA%B5%AC%EB%A1%9C%EA%B1%B0%EB%A6%AC%EA%B3%B5%EC%9B%90/place/18961525?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/항동철길/놀거리/구로근린공원/구로근린공원5.jpg", description: '구로근린공원', link: 'https://map.naver.com/v5/search/%EA%B5%AC%EB%A1%9C%EA%B1%B0%EB%A6%AC%EA%B3%B5%EC%9B%90/place/18961525?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/항동철길/놀거리/구로근린공원/구로근린공원1.jpg", description: '구로근린공원', link: 'https://map.naver.com/v5/search/%EA%B5%AC%EB%A1%9C%EA%B1%B0%EB%A6%AC%EA%B3%B5%EC%9B%90/place/18961525?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/항동철길/놀거리/구로근린공원/구로근린공원2.jpg", description: '구로근린공원', link: 'https://map.naver.com/v5/search/%EA%B5%AC%EB%A1%9C%EA%B1%B0%EB%A6%AC%EA%B3%B5%EC%9B%90/place/18961525?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/항동철길/놀거리/구로근린공원/구로근린공원3.jpg", description: '구로근린공원', link: 'https://map.naver.com/v5/search/%EA%B5%AC%EB%A1%9C%EA%B1%B0%EB%A6%AC%EA%B3%B5%EC%9B%90/place/18961525?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 51) {
    images = [
      { src: "assets/imgs/항동철길/놀거리/대성디큐브아트센터/대성디큐브아트센터1.jpg", description: '대성디큐브아트센터', link: 'https://map.naver.com/v5/search/%EB%8C%80%EC%84%B1%20%EB%94%94%ED%81%90%EB%B8%8C%EC%95%84%ED%8A%B8%EC%84%BC%ED%84%B0/place/20152049?entry=plt&c=15,0,0,0,dh&isCorrectAnswer=true' },
      { src: "assets/imgs/항동철길/놀거리/대성디큐브아트센터/대성디큐브아트센터2.jpg", description: '대성디큐브아트센터', link: 'https://map.naver.com/v5/search/%EB%8C%80%EC%84%B1%20%EB%94%94%ED%81%90%EB%B8%8C%EC%95%84%ED%8A%B8%EC%84%BC%ED%84%B0/place/20152049?entry=plt&c=15,0,0,0,dh&isCorrectAnswer=true' },
      { src: "assets/imgs/항동철길/놀거리/대성디큐브아트센터/대성디큐브아트센터3.jpg", description: '대성디큐브아트센터', link: 'https://map.naver.com/v5/search/%EB%8C%80%EC%84%B1%20%EB%94%94%ED%81%90%EB%B8%8C%EC%95%84%ED%8A%B8%EC%84%BC%ED%84%B0/place/20152049?entry=plt&c=15,0,0,0,dh&isCorrectAnswer=true' },
      { src: "assets/imgs/항동철길/놀거리/대성디큐브아트센터/대성디큐브아트센터4.jpg", description: '대성디큐브아트센터', link: 'https://map.naver.com/v5/search/%EB%8C%80%EC%84%B1%20%EB%94%94%ED%81%90%EB%B8%8C%EC%95%84%ED%8A%B8%EC%84%BC%ED%84%B0/place/20152049?entry=plt&c=15,0,0,0,dh&isCorrectAnswer=true' },
      { src: "assets/imgs/항동철길/놀거리/대성디큐브아트센터/대성디큐브아트센터5.jpg", description: '대성디큐브아트센터', link: 'https://map.naver.com/v5/search/%EB%8C%80%EC%84%B1%20%EB%94%94%ED%81%90%EB%B8%8C%EC%95%84%ED%8A%B8%EC%84%BC%ED%84%B0/place/20152049?entry=plt&c=15,0,0,0,dh&isCorrectAnswer=true' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 52) {
    images = [
      { src: "assets/imgs/항동철길/놀거리/서울아트책보고/서울아트책보고1.jpg", description: '서울아트책보고', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%95%84%ED%8A%B8%EC%B1%85%EB%B3%B4%EA%B3%A0/place/1770726112?entry=plt&c=15,0,0,0,dh&isCorrectAnswer=true' },
      { src: "assets/imgs/항동철길/놀거리/서울아트책보고/서울아트책보고2.jpg", description: '서울아트책보고', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%95%84%ED%8A%B8%EC%B1%85%EB%B3%B4%EA%B3%A0/place/1770726112?entry=plt&c=15,0,0,0,dh&isCorrectAnswer=true' },
      { src: "assets/imgs/항동철길/놀거리/서울아트책보고/서울아트책보고3.jpg", description: '서울아트책보고', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%95%84%ED%8A%B8%EC%B1%85%EB%B3%B4%EA%B3%A0/place/1770726112?entry=plt&c=15,0,0,0,dh&isCorrectAnswer=true' },
      { src: "assets/imgs/항동철길/놀거리/서울아트책보고/서울아트책보고4.jpg", description: '서울아트책보고', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%95%84%ED%8A%B8%EC%B1%85%EB%B3%B4%EA%B3%A0/place/1770726112?entry=plt&c=15,0,0,0,dh&isCorrectAnswer=true' },
      { src: "assets/imgs/항동철길/놀거리/서울아트책보고/서울아트책보고5.jpg", description: '서울아트책보고', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%95%84%ED%8A%B8%EC%B1%85%EB%B3%B4%EA%B3%A0/place/1770726112?entry=plt&c=15,0,0,0,dh&isCorrectAnswer=true' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 53) {
    images = [
      { src: "assets/imgs/항동철길/놀거리/캘리클럽 고척점/캘리클럽 고척점5.jpg", description: '캘리클럽 고척점', link: 'https://map.naver.com/v5/search/%EC%BA%98%EB%A6%AC%ED%81%B4%EB%9F%BD%20%EA%B3%A0%EC%B2%99%EC%A0%90/place/1410252669?entry=plt&c=15,0,0,0,dh&isCorrectAnswer=true' },
      { src: "assets/imgs/항동철길/놀거리/캘리클럽 고척점/캘리클럽 고척점1.jpg", description: '캘리클럽 고척점', link: 'https://map.naver.com/v5/search/%EC%BA%98%EB%A6%AC%ED%81%B4%EB%9F%BD%20%EA%B3%A0%EC%B2%99%EC%A0%90/place/1410252669?entry=plt&c=15,0,0,0,dh&isCorrectAnswer=true' },
      { src: "assets/imgs/항동철길/놀거리/캘리클럽 고척점/캘리클럽 고척점2.jpg", description: '캘리클럽 고척점', link: 'https://map.naver.com/v5/search/%EC%BA%98%EB%A6%AC%ED%81%B4%EB%9F%BD%20%EA%B3%A0%EC%B2%99%EC%A0%90/place/1410252669?entry=plt&c=15,0,0,0,dh&isCorrectAnswer=true' },
      { src: "assets/imgs/항동철길/놀거리/캘리클럽 고척점/캘리클럽 고척점3.jpg", description: '캘리클럽 고척점', link: 'https://map.naver.com/v5/search/%EC%BA%98%EB%A6%AC%ED%81%B4%EB%9F%BD%20%EA%B3%A0%EC%B2%99%EC%A0%90/place/1410252669?entry=plt&c=15,0,0,0,dh&isCorrectAnswer=true' },
      { src: "assets/imgs/항동철길/놀거리/캘리클럽 고척점/캘리클럽 고척점4.jpg", description: '캘리클럽 고척점', link: 'https://map.naver.com/v5/search/%EC%BA%98%EB%A6%AC%ED%81%B4%EB%9F%BD%20%EA%B3%A0%EC%B2%99%EC%A0%90/place/1410252669?entry=plt&c=15,0,0,0,dh&isCorrectAnswer=true' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 54) {
    images = [
      { src: "assets/imgs/항동철길/놀거리/푸른수목원/푸른수목원4.jpg", description: '푸른수목원', link: 'https://map.naver.com/v5/search/%ED%91%B8%EB%A5%B8%EC%88%98%EB%AA%A9%EC%9B%90/place/32581850?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry=bmp' },
      { src: "assets/imgs/항동철길/놀거리/푸른수목원/푸른수목원5.jpg", description: '푸른수목원', link: 'https://map.naver.com/v5/search/%ED%91%B8%EB%A5%B8%EC%88%98%EB%AA%A9%EC%9B%90/place/32581850?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry=bmp' },
      { src: "assets/imgs/항동철길/놀거리/푸른수목원/푸른수목원1.jpg", description: '푸른수목원', link: 'https://map.naver.com/v5/search/%ED%91%B8%EB%A5%B8%EC%88%98%EB%AA%A9%EC%9B%90/place/32581850?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry=bmp' },
      { src: "assets/imgs/항동철길/놀거리/푸른수목원/푸른수목원2.jpg", description: '푸른수목원', link: 'https://map.naver.com/v5/search/%ED%91%B8%EB%A5%B8%EC%88%98%EB%AA%A9%EC%9B%90/place/32581850?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry=bmp' },
      { src: "assets/imgs/항동철길/놀거리/푸른수목원/푸른수목원3.jpg", description: '푸른수목원', link: 'https://map.naver.com/v5/search/%ED%91%B8%EB%A5%B8%EC%88%98%EB%AA%A9%EC%9B%90/place/32581850?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry=bmp' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  }
  // 나머지 인덱스에 맞는 이미지 배열 리턴 로직 작성

  return images;
}


// 이미지 변경 함수 동적 생성
for (var i = 1; i <= 54; i++) {
  var changeImageAutomaticallyFuncName = 'changeImageAutomatically' + i;
  window[changeImageAutomaticallyFuncName] = createChangeImageAutomaticallyFunc(i);
}

// 이미지 변경 함수 생성
function createChangeImageAutomaticallyFunc(index) {
  return function () {
    var images = getImages(index);
    var currentImage = images[imageIndex];
    showOverlay(currentImage.src, currentImage.description, currentImage.link);

    imageIndex = (imageIndex + 1) % images.length;
  };
}

// 이미지 변경을 위한 인터벌 함수 동적 생성
for (var i = 1; i <= 54; i++) {
  var startImageIntervalFuncName = 'startImageInterval' + i;
  window[startImageIntervalFuncName] = createStartImageIntervalFunc(i);
}

// 이미지 변경을 위한 인터벌 함수 생성
function createStartImageIntervalFunc(index) {
  return function () {
    imageInterval = setInterval(function () {
      var changeImageAutomaticallyFuncName = 'changeImageAutomatically' + index;
      window[changeImageAutomaticallyFuncName]();
    }, 3000);
  };
}

function showOverlay(imageSrc, description, link) {
  var overlay = document.getElementById('overlay');
  var image = overlay.querySelector('img');
  var text = overlay.querySelector('p');
  var button = overlay.querySelector('button');

  image.src = imageSrc;
  text.innerText = description;
  button.onclick = function () {
    openLinkSite(link);
  };

  overlay.style.display = 'block';
}

function hideOverlay() {
  var overlay = document.getElementById('overlay');
  overlay.style.display = 'none';
  stopImageInterval();
}

// 이미지 클릭 시 해당 인덱스에 맞는 이미지 변경 함수를 호출
function imageClicked(index) {
  var startImageIntervalFuncName = 'startImageInterval' + index;
  window[startImageIntervalFuncName]();
}

function stopImageInterval() {
  clearInterval(imageInterval);
}

// 바탕 클릭 시 stopImageInterval() 호출
function backgroundClicked() {
  stopImageInterval();
}

function openLinkSite(link) {
  window.open(link, '_blank');
}
