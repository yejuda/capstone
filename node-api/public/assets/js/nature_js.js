function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "auto" });
}

var imageIndex = 0; // 초기 이미지 인덱스
var imageInterval; // 이미지 변경을 위한 인터벌 객체

// 이미지 변경을 위한 이미지 배열 리턴 함수 동적 생성
for (var i = 1; i <= 54; i++) {
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
        { src: 'assets/imgs/서울숲/식당/꾸아/4.jpg', description: '꾸아-양식', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1846605156?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: 'assets/imgs/서울숲/식당/꾸아/5.jpg', description: '꾸아-양식', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1846605156?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: 'assets/imgs/서울숲/식당/꾸아/1.jpg', description: '꾸아-양식', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1846605156?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: 'assets/imgs/서울숲/식당/꾸아/2.jpg', description: '꾸아-양식', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1846605156?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: 'assets/imgs/서울숲/식당/꾸아/3.jpg', description: '꾸아-양식', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1846605156?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 2) {
      images = [
        { src: "assets/imgs/서울숲/식당/난포/4.jpg", description: '난포', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1910927846?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울숲/식당/난포/5.jpg", description: '난포', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1910927846?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울숲/식당/난포/1.jpg", description: '난포', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1910927846?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울숲/식당/난포/2.jpg", description: '난포', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1910927846?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울숲/식당/난포/3.jpg", description: '난포', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1910927846?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 3) {
      images = [
        { src: "assets/imgs/서울숲/식당/미테이블/4.jpg", description: '미테이블', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/38590315?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울숲/식당/미테이블/5.jpg", description: '미테이블', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/38590315?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울숲/식당/미테이블/1.jpg", description: '미테이블', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/38590315?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울숲/식당/미테이블/2.jpg", description: '미테이블', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/38590315?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울숲/식당/미테이블/3.jpg", description: '미테이블', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/38590315?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 4) {
      images = [
        { src: "assets/imgs/서울숲/식당/서울숲 포도피자/4.jpg", description: '서울숲 포도피자', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1574521874?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울숲/식당/서울숲 포도피자/5.jpg", description: '서울숲 포도피자', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1574521874?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울숲/식당/서울숲 포도피자/1.jpg", description: '서울숲 포도피자', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1574521874?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울숲/식당/서울숲 포도피자/2.jpg", description: '서울숲 포도피자', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1574521874?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울숲/식당/서울숲 포도피자/3.jpg", description: '서울숲 포도피자', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1574521874?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 5) {
      images = [
        { src: "assets/imgs/서울숲/식당/스시도쿠/4.jpg", description: '스시도쿠', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1029146941?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울숲/식당/스시도쿠/5.jpg", description: '스시도쿠', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1029146941?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울숲/식당/스시도쿠/1.jpg", description: '스시도쿠', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1029146941?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울숲/식당/스시도쿠/2.jpg", description: '스시도쿠', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1029146941?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울숲/식당/스시도쿠/3.jpg", description: '스시도쿠', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1029146941?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 6) {
      images = [
        { src: "assets/imgs/서울숲/식당/온량/4.jpg", description: '온량', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1584576344?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울숲/식당/온량/5.jpg", description: '온량', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1584576344?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울숲/식당/온량/1.jpg", description: '온량', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1584576344?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울숲/식당/온량/2.jpg", description: '온량', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1584576344?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울숲/식당/온량/3.jpg", description: '온량', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1584576344?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 7) {
      images = [
        { src: "assets/imgs/서울숲/카페/5to7/4.png", description: '5to7', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1508243090?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울숲/카페/5to7/5.png", description: '5to7', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1508243090?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울숲/카페/5to7/1.png", description: '5to7', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1508243090?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울숲/카페/5to7/2.png", description: '5to7', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1508243090?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울숲/카페/5to7/3.png", description: '5to7', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1508243090?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 8) {
      images = [
        { src: "assets/imgs/서울숲/카페/구욱희씨/구욱희씨_4.png", description: '구욱희씨', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1712521730?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울숲/카페/구욱희씨/구욱희씨_5.png", description: '구욱희씨', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1712521730?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울숲/카페/구욱희씨/구욱희씨_1.png", description: '구욱희씨', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1712521730?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울숲/카페/구욱희씨/구욱희씨_2.png", description: '구욱희씨', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1712521730?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울숲/카페/구욱희씨/구욱희씨_3.png", description: '구욱희씨', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1712521730?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 9) {
      images = [
        { src: "assets/imgs/서울숲/카페/뉴앳던성수/뉴앳던 성수_4.jpeg", description: '뉴앳던성수', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1789793457?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울숲/카페/뉴앳던성수/뉴앳던 성수_5.jpeg", description: '뉴앳던성수', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1789793457?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울숲/카페/뉴앳던성수/뉴앳던 성수_1.jpeg", description: '뉴앳던성수', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1789793457?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울숲/카페/뉴앳던성수/뉴앳던 성수_2.jpeg", description: '뉴앳던성수', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1789793457?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울숲/카페/뉴앳던성수/뉴앳던 성수_3.jpeg", description: '뉴앳던성수', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1789793457?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 10) {
      images = [
        { src: "assets/imgs/서울숲/카페/밀도/밀도_4.png", description: '밀도', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/37717085?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울숲/카페/밀도/밀도_5.png", description: '밀도', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/37717085?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울숲/카페/밀도/밀도_1.png", description: '밀도', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/37717085?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울숲/카페/밀도/밀도_2.png", description: '밀도', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/37717085?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울숲/카페/밀도/밀도_3.png", description: '밀도', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/37717085?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 11) {
      images = [
        { src: "assets/imgs/서울숲/카페/봉땅/봉땅_4.png", description: '봉땅', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1700801654?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울숲/카페/봉땅/봉땅_5.png", description: '봉땅', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1700801654?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울숲/카페/봉땅/봉땅_1.png", description: '봉땅', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1700801654?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울숲/카페/봉땅/봉땅_2.png", description: '봉땅', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1700801654?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울숲/카페/봉땅/봉땅_3.png", description: '봉땅', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1700801654?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' }
  
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 12) {
      images = [
        { src: "assets/imgs/서울숲/카페/브레디포스트/브레디포스트_4.png", description: '브레디포스트', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1020816080?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울숲/카페/브레디포스트/브레디포스트_5.png", description: '브레디포스트', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1020816080?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울숲/카페/브레디포스트/브레디포스트_1.png", description: '브레디포스트', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1020816080?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울숲/카페/브레디포스트/브레디포스트_2.png", description: '브레디포스트', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1020816080?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울숲/카페/브레디포스트/브레디포스트_3.png", description: '브레디포스트', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1020816080?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 13) {
      images = [
        { src: "assets/imgs/서울숲/놀거리/더서울라이티움/2.jpeg", description: '더서울라이티움', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/448283373?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울숲/놀거리/더서울라이티움/3.jpeg", description: '더서울라이티움', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/448283373?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울숲/놀거리/더서울라이티움/4.jpeg", description: '더서울라이티움', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/448283373?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울숲/놀거리/더서울라이티움/5.jpeg", description: '더서울라이티움', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/448283373?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울숲/놀거리/더서울라이티움/1.jpeg", description: '더서울라이티움', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/448283373?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 14) {
      images = [
        { src: "assets/imgs/서울숲/놀거리/더페이지갤러리/2.jpeg", description: '더페이지갤러리', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/13051123?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울숲/놀거리/더페이지갤러리/3.jpeg", description: '더페이지갤러리', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/13051123?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울숲/놀거리/더페이지갤러리/4.jpeg", description: '더페이지갤러리', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/13051123?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울숲/놀거리/더페이지갤러리/5.jpeg", description: '더페이지갤러리', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/13051123?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울숲/놀거리/더페이지갤러리/1.jpeg", description: '더페이지갤러리', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/13051123?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 15) {
      images = [
        { src: "assets/imgs/서울숲/놀거리/디뮤지엄/2.jpeg", description: '디뮤지엄', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/36992369?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울숲/놀거리/디뮤지엄/3.jpeg", description: '디뮤지엄', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/36992369?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울숲/놀거리/디뮤지엄/4.jpeg", description: '디뮤지엄', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/36992369?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울숲/놀거리/디뮤지엄/5.jpeg", description: '디뮤지엄', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/36992369?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울숲/놀거리/디뮤지엄/1.jpeg", description: '디뮤지엄', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/36992369?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 16) {
      images = [
        { src: "assets/imgs/서울숲/놀거리/뚝섬미술관/2.jpeg", description: '뚝섬미술관', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/1479550856?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울숲/놀거리/뚝섬미술관/3.jpeg", description: '뚝섬미술관', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/1479550856?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울숲/놀거리/뚝섬미술관/4.jpeg", description: '뚝섬미술관', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/1479550856?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울숲/놀거리/뚝섬미술관/5.png", description: '뚝섬미술관', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/1479550856?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울숲/놀거리/뚝섬미술관/1.jpeg", description: '뚝섬미술관', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/1479550856?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 17) {
      images = [
        { src: "assets/imgs/서울숲/놀거리/무신사테라스성수/2.jpeg", description: '무신사테라스성수', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/1573780452?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울숲/놀거리/무신사테라스성수/3.jpeg", description: '무신사테라스성수', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/1573780452?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울숲/놀거리/무신사테라스성수/4.jpeg", description: '무신사테라스성수', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/1573780452?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울숲/놀거리/무신사테라스성수/5.jpeg", description: '무신사테라스성수', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/1573780452?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울숲/놀거리/무신사테라스성수/1.png", description: '무신사테라스성수', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/1573780452?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 18) {
      images = [
        { src: "assets/imgs/서울숲/놀거리/밑미홈/2.jpeg", description: '밑미홈', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/1282574554?c=12,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/서울숲/놀거리/밑미홈/3.jpeg", description: '밑미홈', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/1282574554?c=12,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/서울숲/놀거리/밑미홈/4.jpeg", description: '밑미홈', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/1282574554?c=12,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/서울숲/놀거리/밑미홈/5.jpeg", description: '밑미홈', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/1282574554?c=12,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/서울숲/놀거리/밑미홈/1.jpeg", description: '밑미홈', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/1282574554?c=12,0,0,0,dh&placePath=%3Fentry%253Dbmp' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 19) {
      images = [
        { src: 'assets/imgs/아차산/식당/마시쏘부대찌개/다운로드 (2).jpg', description: '마시쏘부대찌개', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1231048942?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll%2526n_ad_group_type%253D10%2526n_query%253D%25EC%2595%2584%25EC%25B0%25A8%25EC%2582%25B0%25EA%25B7%25BC%25EC%25B2%2598%25EB%25A7%259B%25EC%25A7%2591' },
        { src: 'assets/imgs/아차산/식당/마시쏘부대찌개/다운로드 (3).jpg', description: '마시쏘부대찌개', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1231048942?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll%2526n_ad_group_type%253D10%2526n_query%253D%25EC%2595%2584%25EC%25B0%25A8%25EC%2582%25B0%25EA%25B7%25BC%25EC%25B2%2598%25EB%25A7%259B%25EC%25A7%2591' },
        { src: 'assets/imgs/아차산/식당/마시쏘부대찌개/다운로드 (4).jpg', description: '마시쏘부대찌개', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1231048942?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll%2526n_ad_group_type%253D10%2526n_query%253D%25EC%2595%2584%25EC%25B0%25A8%25EC%2582%25B0%25EA%25B7%25BC%25EC%25B2%2598%25EB%25A7%259B%25EC%25A7%2591' },
        { src: 'assets/imgs/아차산/식당/마시쏘부대찌개/다운로드 (5).jpg', description: '마시쏘부대찌개', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1231048942?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll%2526n_ad_group_type%253D10%2526n_query%253D%25EC%2595%2584%25EC%25B0%25A8%25EC%2582%25B0%25EA%25B7%25BC%25EC%25B2%2598%25EB%25A7%259B%25EC%25A7%2591' },
        { src: 'assets/imgs/아차산/식당/마시쏘부대찌개/다운로드 (1).jpg', description: '마시쏘부대찌개', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1231048942?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll%2526n_ad_group_type%253D10%2526n_query%253D%25EC%2595%2584%25EC%25B0%25A8%25EC%2582%25B0%25EA%25B7%25BC%25EC%25B2%2598%25EB%25A7%259B%25EC%25A7%2591' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 20) {
      images = [
        { src: "assets/imgs/아차산/식당/망향비빔국수/다운로드 (2).jpg", description: '망향비빔국수', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/13047580?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/아차산/식당/망향비빔국수/다운로드 (3).jpg", description: '망향비빔국수', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/13047580?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/아차산/식당/망향비빔국수/다운로드 (4).jpg", description: '망향비빔국수', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/13047580?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/아차산/식당/망향비빔국수/다운로드 (5).jpg", description: '망향비빔국수', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/13047580?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/아차산/식당/망향비빔국수/다운로드 (1).jpg", description: '망향비빔국수', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/13047580?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 21) {
      images = [
        { src: "assets/imgs/아차산/식당/멕시칼리/다운로드 (2).jpg", description: '멕시칼리', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1111031959?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/아차산/식당/멕시칼리/다운로드 (3).jpg", description: '멕시칼리', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1111031959?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/아차산/식당/멕시칼리/다운로드 (4).jpg", description: '멕시칼리', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1111031959?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/아차산/식당/멕시칼리/다운로드 (5).jpg", description: '멕시칼리', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1111031959?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/아차산/식당/멕시칼리/다운로드 (1).jpg", description: '멕시칼리', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1111031959?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 22) {
      images = [
        { src: "assets/imgs/아차산/식당/비스타 워커힐 서울 피자힐/다운로드 (2).jpg", description: '비스타 워커힐 서울 피자힐', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/11611438?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/아차산/식당/비스타 워커힐 서울 피자힐/다운로드 (3).jpg", description: '비스타 워커힐 서울 피자힐', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/11611438?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/아차산/식당/비스타 워커힐 서울 피자힐/다운로드 (4).jpg", description: '비스타 워커힐 서울 피자힐', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/11611438?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/아차산/식당/비스타 워커힐 서울 피자힐/다운로드 (5).jpg", description: '비스타 워커힐 서울 피자힐', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/11611438?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/아차산/식당/비스타 워커힐 서울 피자힐/다운로드 (1).jpg", description: '비스타 워커힐 서울 피자힐', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/11611438?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 23) {
      images = [
        { src: "assets/imgs/아차산/식당/순금이떡볶이/다운로드 (2).jpg", description: '순금이떡볶이', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/31747148?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/아차산/식당/순금이떡볶이/다운로드 (3).jpg", description: '순금이떡볶이', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/31747148?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/아차산/식당/순금이떡볶이/다운로드 (4).jpg", description: '순금이떡볶이', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/31747148?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/아차산/식당/순금이떡볶이/다운로드 (5).jpg", description: '순금이떡볶이', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/31747148?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/아차산/식당/순금이떡볶이/다운로드 (1).jpg", description: '순금이떡볶이', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/31747148?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 24) {
      images = [
        { src: "assets/imgs/아차산/식당/아차산김가네맛집/다운로드 (2).jpg", description: '아차산김가네맛집', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/20874682?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll%2526n_ad_group_type%253D10%2526n_query%253D%25EC%2595%2584%25EC%25B0%25A8%25EC%2582%25B0%25EA%25B7%25BC%25EC%25B2%2598%25EB%25A7%259B%25EC%25A7%2591' },
        { src: "assets/imgs/아차산/식당/아차산김가네맛집/다운로드 (3).jpg", description: '아차산김가네맛집', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/20874682?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll%2526n_ad_group_type%253D10%2526n_query%253D%25EC%2595%2584%25EC%25B0%25A8%25EC%2582%25B0%25EA%25B7%25BC%25EC%25B2%2598%25EB%25A7%259B%25EC%25A7%2591' },
        { src: "assets/imgs/아차산/식당/아차산김가네맛집/다운로드 (4).jpg", description: '아차산김가네맛집', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/20874682?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll%2526n_ad_group_type%253D10%2526n_query%253D%25EC%2595%2584%25EC%25B0%25A8%25EC%2582%25B0%25EA%25B7%25BC%25EC%25B2%2598%25EB%25A7%259B%25EC%25A7%2591' },
        { src: "assets/imgs/아차산/식당/아차산김가네맛집/다운로드 (5).jpg", description: '아차산김가네맛집', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/20874682?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll%2526n_ad_group_type%253D10%2526n_query%253D%25EC%2595%2584%25EC%25B0%25A8%25EC%2582%25B0%25EA%25B7%25BC%25EC%25B2%2598%25EB%25A7%259B%25EC%25A7%2591' },
        { src: "assets/imgs/아차산/식당/아차산김가네맛집/다운로드 (1).jpg", description: '아차산김가네맛집', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/20874682?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll%2526n_ad_group_type%253D10%2526n_query%253D%25EC%2595%2584%25EC%25B0%25A8%25EC%2582%25B0%25EA%25B7%25BC%25EC%25B2%2598%25EB%25A7%259B%25EC%25A7%2591' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 25) {
      images = [
        { src: "assets/imgs/아차산/카페/RADIANT/다운로드 (2).jpg", description: 'RADIANT', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/37996680?c=13,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/아차산/카페/RADIANT/다운로드 (3).jpg", description: 'RADIANT', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/37996680?c=13,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/아차산/카페/RADIANT/다운로드 (4).jpg", description: 'RADIANT', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/37996680?c=13,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/아차산/카페/RADIANT/다운로드 (5).jpg", description: 'RADIANT', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/37996680?c=13,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/아차산/카페/RADIANT/다운로드 (1).jpg", description: 'RADIANT', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/37996680?c=13,0,0,0,dh&placePath=%3Fentry%253Dpll' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 26) {
      images = [
        { src: "assets/imgs/아차산/카페/버글러커피/다운로드 (2).jpg", description: '버글러커피', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1976895148?c=13,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/아차산/카페/버글러커피/다운로드 (3).jpg", description: '버글러커피', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1976895148?c=13,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/아차산/카페/버글러커피/다운로드 (4).jpg", description: '버글러커피', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1976895148?c=13,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/아차산/카페/버글러커피/다운로드 (5).jpg", description: '버글러커피', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1976895148?c=13,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/아차산/카페/버글러커피/다운로드 (1).jpg", description: '버글러커피', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1976895148?c=13,0,0,0,dh&placePath=%3Fentry%253Dpll' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 27) {
      images = [
        { src: "assets/imgs/아차산/카페/빛의라운지/다운로드 (2).jpg", description: '빛의라운지', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1767557389?c=13,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/아차산/카페/빛의라운지/다운로드 (3).jpg", description: '빛의라운지', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1767557389?c=13,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/아차산/카페/빛의라운지/다운로드 (4).jpg", description: '빛의라운지', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1767557389?c=13,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/아차산/카페/빛의라운지/다운로드 (5).jpg", description: '빛의라운지', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1767557389?c=13,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/아차산/카페/빛의라운지/다운로드 (1).jpg", description: '빛의라운지', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1767557389?c=13,0,0,0,dh&placePath=%3Fentry%253Dpll' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 28) {
      images = [
        { src: "assets/imgs/아차산/카페/솔티드/다운로드 (2).jpg", description: '솔티드', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1566098855?c=13,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/아차산/카페/솔티드/다운로드 (3).jpg", description: '솔티드', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1566098855?c=13,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/아차산/카페/솔티드/다운로드 (4).jpg", description: '솔티드', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1566098855?c=13,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/아차산/카페/솔티드/다운로드 (5).jpg", description: '솔티드', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1566098855?c=13,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/아차산/카페/솔티드/다운로드 (1).jpg", description: '솔티드', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1566098855?c=13,0,0,0,dh&placePath=%3Fentry%253Dpll' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 29) {
      images = [
        { src: "assets/imgs/아차산/카페/시드누아/다운로드 (4).jpg", description: '시드누아', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/37789719?c=13,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/아차산/카페/시드누아/다운로드 (5).jpg", description: '시드누아', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/37789719?c=13,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/아차산/카페/시드누아/다운로드 (1).jpg", description: '시드누아', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/37789719?c=13,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/아차산/카페/시드누아/다운로드 (2).jpg", description: '시드누아', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/37789719?c=13,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/아차산/카페/시드누아/다운로드 (3).jpg", description: '시드누아', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/37789719?c=13,0,0,0,dh&placePath=%3Fentry%253Dpll' }
  
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 30) {
      images = [
        { src: "assets/imgs/아차산/카페/실란트로커피/다운로드 (2).jpg", description: '실란트로커피', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/66005003?c=13,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/아차산/카페/실란트로커피/다운로드 (3).jpg", description: '실란트로커피', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/66005003?c=13,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/아차산/카페/실란트로커피/다운로드 (4).jpg", description: '실란트로커피', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/66005003?c=13,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/아차산/카페/실란트로커피/다운로드 (5).jpg", description: '실란트로커피', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/66005003?c=13,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/아차산/카페/실란트로커피/다운로드 (1).jpg", description: '실란트로커피', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/66005003?c=13,0,0,0,dh&placePath=%3Fentry%253Dpll' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 31) {
      images = [
        { src: "assets/imgs/아차산/놀거리/구리시 고구려 대장간 마을/다운로드 (2).jpg", description: '고구려 대장간 마을', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/13043905?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/아차산/놀거리/구리시 고구려 대장간 마을/다운로드 (3).jpg", description: '고구려 대장간 마을', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/13043905?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/아차산/놀거리/구리시 고구려 대장간 마을/다운로드 (4).jpg", description: '고구려 대장간 마을', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/13043905?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/아차산/놀거리/구리시 고구려 대장간 마을/다운로드 (5).jpg", description: '고구려 대장간 마을', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/13043905?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/아차산/놀거리/구리시 고구려 대장간 마을/다운로드 (1).jpg", description: '고구려 대장간 마을', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/13043905?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 32) {
      images = [
        { src: "assets/imgs/아차산/놀거리/빛의 시어터/다운로드 (2).jpg", description: '빛의 시어터', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/1368948121?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/아차산/놀거리/빛의 시어터/다운로드 (3).jpg", description: '빛의 시어터', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/1368948121?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/아차산/놀거리/빛의 시어터/다운로드 (4).jpg", description: '빛의 시어터', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/1368948121?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/아차산/놀거리/빛의 시어터/다운로드 (5).jpg", description: '빛의 시어터', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/1368948121?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/아차산/놀거리/빛의 시어터/다운로드 (1).jpg", description: '빛의 시어터', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/1368948121?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 33) {
      images = [
        { src: "assets/imgs/아차산/놀거리/사가정공원/다운로드 (2).jpg", description: '사가정공원', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/19588928?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/아차산/놀거리/사가정공원/다운로드 (3).jpg", description: '사가정공원', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/19588928?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/아차산/놀거리/사가정공원/다운로드 (4).jpg", description: '사가정공원', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/19588928?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/아차산/놀거리/사가정공원/다운로드 (5).jpg", description: '사가정공원', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/19588928?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/아차산/놀거리/사가정공원/다운로드 (1).jpg", description: '사가정공원', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/19588928?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 34) {
      images = [
        { src: "assets/imgs/아차산/놀거리/서울상상나라/다운로드 (2).jpg", description: '서울상상나라', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/31949741?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/아차산/놀거리/서울상상나라/다운로드 (3).jpg", description: '서울상상나라', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/31949741?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/아차산/놀거리/서울상상나라/다운로드 (4).jpg", description: '서울상상나라', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/31949741?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/아차산/놀거리/서울상상나라/다운로드 (5).jpg", description: '서울상상나라', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/31949741?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/아차산/놀거리/서울상상나라/다운로드 (1).jpg", description: '서울상상나라', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/31949741?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 35) {
      images = [
        { src: "assets/imgs/아차산/놀거리/소울레터/다운로드 (2).jpg", description: '소울레터', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EA%B3%B5%EB%B0%A9/place/1185333693?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/아차산/놀거리/소울레터/다운로드 (3).jpg", description: '소울레터', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EA%B3%B5%EB%B0%A9/place/1185333693?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/아차산/놀거리/소울레터/다운로드 (4).jpg", description: '소울레터', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EA%B3%B5%EB%B0%A9/place/1185333693?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/아차산/놀거리/소울레터/다운로드 (5).jpg", description: '소울레터', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EA%B3%B5%EB%B0%A9/place/1185333693?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/아차산/놀거리/소울레터/다운로드 (1).jpg", description: '소울레터', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EA%B3%B5%EB%B0%A9/place/1185333693?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 36) {
      images = [
        { src: "assets/imgs/아차산/놀거리/아차산 생태공원/다운로드 (2).jpg", description: '아차산 생태공원', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/12082220?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/아차산/놀거리/아차산 생태공원/다운로드 (3).jpg", description: '아차산 생태공원', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/12082220?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/아차산/놀거리/아차산 생태공원/다운로드 (4).jpg", description: '아차산 생태공원', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/12082220?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/아차산/놀거리/아차산 생태공원/다운로드 (5).jpg", description: '아차산 생태공원', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/12082220?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/아차산/놀거리/아차산 생태공원/다운로드 (1).jpg", description: '아차산 생태공원', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/12082220?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 37) {
      images = [
        { src: 'assets/imgs/하늘공원/식당/덕승재 상암본점/덕승재 상암본점2.jpg', description: '덕승재 상암본점', link: 'https://naver.me/GxORR6Bp' },
        { src: 'assets/imgs/하늘공원/식당/덕승재 상암본점/덕승재 상암본점3.jpg', description: '덕승재 상암본점', link: 'https://naver.me/GxORR6Bp' },
        { src: 'assets/imgs/하늘공원/식당/덕승재 상암본점/덕승재 상암본점4.jpg', description: '덕승재 상암본점', link: 'https://naver.me/GxORR6Bp' },
        { src: 'assets/imgs/하늘공원/식당/덕승재 상암본점/덕승재 상암본점5.jpg', description: '덕승재 상암본점', link: 'https://naver.me/GxORR6Bp' },
        { src: 'assets/imgs/하늘공원/식당/덕승재 상암본점/덕승재 상암본점1.jpg', description: '덕승재 상암본점', link: 'https://naver.me/GxORR6Bp' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 38) {
      images = [
        { src: "assets/imgs/하늘공원/식당/동신화로/동신화로2.jpg", description: '동신화로', link: 'https://naver.me/xaPgOmGU' },
        { src: "assets/imgs/하늘공원/식당/동신화로/동신화로3.jpg", description: '동신화로', link: 'https://naver.me/xaPgOmGU' },
        { src: "assets/imgs/하늘공원/식당/동신화로/동신화로4.jpg", description: '동신화로', link: 'https://naver.me/xaPgOmGU' },
        { src: "assets/imgs/하늘공원/식당/동신화로/동신화로5.jpg", description: '동신화로', link: 'https://naver.me/xaPgOmGU' },
        { src: "assets/imgs/하늘공원/식당/동신화로/동신화로1.jpg", description: '동신화로', link: 'https://naver.me/xaPgOmGU' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 39) {
      images = [
        { src: "assets/imgs/하늘공원/식당/벽과담/벽과담2.jpg", description: '벽과담', link: 'https://naver.me/xKQWNZyx' },
        { src: "assets/imgs/하늘공원/식당/벽과담/벽과담3.jpg", description: '벽과담', link: 'https://naver.me/xKQWNZyx' },
        { src: "assets/imgs/하늘공원/식당/벽과담/벽과담4.jpg", description: '벽과담', link: 'https://naver.me/xKQWNZyx' },
        { src: "assets/imgs/하늘공원/식당/벽과담/벽과담5.jpg", description: '벽과담', link: 'https://naver.me/xKQWNZyx' },
        { src: "assets/imgs/하늘공원/식당/벽과담/벽과담1.jpg", description: '벽과담', link: 'https://naver.me/xKQWNZyx' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 40) {
      images = [
        { src: "assets/imgs/하늘공원/식당/상암일미락/상암일미락2.jpg", description: '상암일미락', link: 'https://naver.me/5RctRHBX' },
        { src: "assets/imgs/하늘공원/식당/상암일미락/상암일미락3.jpg", description: '상암일미락', link: 'https://naver.me/5RctRHBX' },
        { src: "assets/imgs/하늘공원/식당/상암일미락/상암일미락4.jpg", description: '상암일미락', link: 'https://naver.me/5RctRHBX' },
        { src: "assets/imgs/하늘공원/식당/상암일미락/상암일미락5.jpg", description: '상암일미락', link: 'https://naver.me/5RctRHBX' },
        { src: "assets/imgs/하늘공원/식당/상암일미락/상암일미락1.jpg", description: '상암일미락', link: 'https://naver.me/5RctRHBX' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 41) {
      images = [
        { src: "assets/imgs/하늘공원/식당/옥소반 상암점/옥소반 상암점2.jpg", description: '옥소반 상암점', link: 'https://naver.me/5qRAOl3k' },
        { src: "assets/imgs/하늘공원/식당/옥소반 상암점/옥소반 상암점3.jpg", description: '옥소반 상암점', link: 'https://naver.me/5qRAOl3k' },
        { src: "assets/imgs/하늘공원/식당/옥소반 상암점/옥소반 상암점4.jpg", description: '옥소반 상암점', link: 'https://naver.me/5qRAOl3k' },
        { src: "assets/imgs/하늘공원/식당/옥소반 상암점/옥소반 상암점5.jpg", description: '옥소반 상암점', link: 'https://naver.me/5qRAOl3k' },
        { src: "assets/imgs/하늘공원/식당/옥소반 상암점/옥소반 상암점1.jpg", description: '옥소반 상암점', link: 'https://naver.me/5qRAOl3k' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 42) {
      images = [
        { src: "assets/imgs/하늘공원/식당/옥자회관/옥자회관2.jpg", description: '옥자회관', link: 'https://naver.me/GC2uNYoj' },
        { src: "assets/imgs/하늘공원/식당/옥자회관/옥자회관3.jpg", description: '옥자회관', link: 'https://naver.me/GC2uNYoj' },
        { src: "assets/imgs/하늘공원/식당/옥자회관/옥자회관4.jpg", description: '옥자회관', link: 'https://naver.me/GC2uNYoj' },
        { src: "assets/imgs/하늘공원/식당/옥자회관/옥자회관5.jpg", description: '옥자회관', link: 'https://naver.me/GC2uNYoj' },
        { src: "assets/imgs/하늘공원/식당/옥자회관/옥자회관1.jpg", description: '옥자회관', link: 'https://naver.me/GC2uNYoj' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 43) {
      images = [
        { src: "assets/imgs/하늘공원/카페/cafe TANK6/2.jpg", description: 'cafe TANK6', link: 'https://naver.me/GBf5bbGe' },
        { src: "assets/imgs/하늘공원/카페/cafe TANK6/3.jpg", description: 'cafe TANK6', link: 'https://naver.me/GBf5bbGe' },
        { src: "assets/imgs/하늘공원/카페/cafe TANK6/4.jpg", description: 'cafe TANK6', link: 'https://naver.me/GBf5bbGe' },
        { src: "assets/imgs/하늘공원/카페/cafe TANK6/5.jpg", description: 'cafe TANK6', link: 'https://naver.me/GBf5bbGe' },
        { src: "assets/imgs/하늘공원/카페/cafe TANK6/1.jpg", description: 'cafe TANK6', link: 'https://naver.me/GBf5bbGe' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 44) {
      images = [
        { src: "assets/imgs/하늘공원/카페/물결한강/2.jpg", description: '물결한강', link: 'https://naver.me/GI64Zp1W' },
        { src: "assets/imgs/하늘공원/카페/물결한강/3.jpg", description: '물결한강', link: 'https://naver.me/GI64Zp1W' },
        { src: "assets/imgs/하늘공원/카페/물결한강/4.jpg", description: '물결한강', link: 'https://naver.me/GI64Zp1W' },
        { src: "assets/imgs/하늘공원/카페/물결한강/5.jpg", description: '물결한강', link: 'https://naver.me/GI64Zp1W' },
        { src: "assets/imgs/하늘공원/카페/물결한강/1.jpg", description: '물결한강', link: 'https://naver.me/GI64Zp1W' },
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 45) {
      images = [
        { src: "assets/imgs/하늘공원/카페/바이어리셔/2.jpg", description: '바이어리셔', link: 'https://naver.me/IFjiTFBy' },
        { src: "assets/imgs/하늘공원/카페/바이어리셔/3.jpg", description: '바이어리셔', link: 'https://naver.me/IFjiTFBy' },
        { src: "assets/imgs/하늘공원/카페/바이어리셔/4.jpg", description: '바이어리셔', link: 'https://naver.me/IFjiTFBy' },
        { src: "assets/imgs/하늘공원/카페/바이어리셔/5.jpg", description: '바이어리셔', link: 'https://naver.me/IFjiTFBy' },
        { src: "assets/imgs/하늘공원/카페/바이어리셔/1.jpg", description: '바이어리셔', link: 'https://naver.me/IFjiTFBy' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 46) {
      images = [
        { src: "assets/imgs/하늘공원/카페/베리빈/2.jpg", description: '베리빈', link: 'https://naver.me/GLKAKHHh' },
        { src: "assets/imgs/하늘공원/카페/베리빈/3.jpg", description: '베리빈', link: 'https://naver.me/GLKAKHHh' },
        { src: "assets/imgs/하늘공원/카페/베리빈/4.jpg", description: '베리빈', link: 'https://naver.me/GLKAKHHh' },
        { src: "assets/imgs/하늘공원/카페/베리빈/5.jpg", description: '베리빈', link: 'https://naver.me/GLKAKHHh' },
        { src: "assets/imgs/하늘공원/카페/베리빈/1.jpg", description: '베리빈', link: 'https://naver.me/GLKAKHHh' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 47) {
      images = [
        { src: "assets/imgs/하늘공원/카페/엣모스피어/2.jpg", description: '엣모스피어', link: 'https://naver.me/59jNOkdy' },
        { src: "assets/imgs/하늘공원/카페/엣모스피어/3.jpg", description: '엣모스피어', link: 'https://naver.me/59jNOkdy' },
        { src: "assets/imgs/하늘공원/카페/엣모스피어/4.jpg", description: '엣모스피어', link: 'https://naver.me/59jNOkdy' },
        { src: "assets/imgs/하늘공원/카페/엣모스피어/5.jpg", description: '엣모스피어', link: 'https://naver.me/59jNOkdy' },
        { src: "assets/imgs/하늘공원/카페/엣모스피어/1.jpg", description: '엣모스피어', link: 'https://naver.me/59jNOkdy' }
  
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 48) {
      images = [
        { src: "assets/imgs/하늘공원/카페/카페초이/2.jpg", description: '카페초이', link: 'https://naver.me/xLEkSbMb' },
        { src: "assets/imgs/하늘공원/카페/카페초이/3.jpg", description: '카페초이', link: 'https://naver.me/xLEkSbMb' },
        { src: "assets/imgs/하늘공원/카페/카페초이/4.jpg", description: '카페초이', link: 'https://naver.me/xLEkSbMb' },
        { src: "assets/imgs/하늘공원/카페/카페초이/5.jpg", description: '카페초이', link: 'https://naver.me/xLEkSbMb' },
        { src: "assets/imgs/하늘공원/카페/카페초이/1.jpg", description: '카페초이', link: 'https://naver.me/xLEkSbMb' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 49) {
      images = [
        { src: "assets/imgs/하늘공원/놀거리/DMC홍보관/DMC홍보관2.jpg", description: 'DMC홍보관', link: 'https://map.naver.com/v5/search/%ED%95%98%EB%8A%98%EA%B3%B5%EC%9B%90%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/18808247?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/하늘공원/놀거리/DMC홍보관/DMC홍보관3.jpg", description: 'DMC홍보관', link: 'https://map.naver.com/v5/search/%ED%95%98%EB%8A%98%EA%B3%B5%EC%9B%90%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/18808247?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/하늘공원/놀거리/DMC홍보관/DMC홍보관4.jpg", description: 'DMC홍보관', link: 'https://map.naver.com/v5/search/%ED%95%98%EB%8A%98%EA%B3%B5%EC%9B%90%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/18808247?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/하늘공원/놀거리/DMC홍보관/DMC홍보관5.jpg", description: 'DMC홍보관', link: 'https://map.naver.com/v5/search/%ED%95%98%EB%8A%98%EA%B3%B5%EC%9B%90%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/18808247?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/하늘공원/놀거리/DMC홍보관/DMC홍보관1.jpg", description: 'DMC홍보관', link: 'https://map.naver.com/v5/search/%ED%95%98%EB%8A%98%EA%B3%B5%EC%9B%90%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/18808247?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 50) {
      images = [
        { src: "assets/imgs/하늘공원/놀거리/난지 한강공원/난지한강공원2.jpg", description: '난지 한강공원', link: 'https://map.naver.com/v5/search/%ED%95%98%EB%8A%98%EA%B3%B5%EC%9B%90%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/13416975?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/하늘공원/놀거리/난지 한강공원/난지한강공원3.jpg", description: '난지 한강공원', link: 'https://map.naver.com/v5/search/%ED%95%98%EB%8A%98%EA%B3%B5%EC%9B%90%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/13416975?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/하늘공원/놀거리/난지 한강공원/난지한강공원4.jpg", description: '난지 한강공원', link: 'https://map.naver.com/v5/search/%ED%95%98%EB%8A%98%EA%B3%B5%EC%9B%90%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/13416975?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/하늘공원/놀거리/난지 한강공원/난지한강공원5.jpg", description: '난지 한강공원', link: 'https://map.naver.com/v5/search/%ED%95%98%EB%8A%98%EA%B3%B5%EC%9B%90%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/13416975?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/하늘공원/놀거리/난지 한강공원/난지한강공원1.jpg", description: '난지 한강공원', link: 'https://map.naver.com/v5/search/%ED%95%98%EB%8A%98%EA%B3%B5%EC%9B%90%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/13416975?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 51) {
      images = [
        { src: "assets/imgs/하늘공원/놀거리/문화비축기지/문화비축기지2.jpg", description: '문화비축기지', link: 'https://map.naver.com/v5/search/%ED%95%98%EB%8A%98%EA%B3%B5%EC%9B%90%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/701718829?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/하늘공원/놀거리/문화비축기지/문화비축기지3.jpg", description: '문화비축기지', link: 'https://map.naver.com/v5/search/%ED%95%98%EB%8A%98%EA%B3%B5%EC%9B%90%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/701718829?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/하늘공원/놀거리/문화비축기지/문화비축기지4.jpg", description: '문화비축기지', link: 'https://map.naver.com/v5/search/%ED%95%98%EB%8A%98%EA%B3%B5%EC%9B%90%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/701718829?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/하늘공원/놀거리/문화비축기지/문화비축기지5.jpg", description: '문화비축기지', link: 'https://map.naver.com/v5/search/%ED%95%98%EB%8A%98%EA%B3%B5%EC%9B%90%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/701718829?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/하늘공원/놀거리/문화비축기지/문화비축기지1.jpg", description: '문화비축기지', link: 'https://map.naver.com/v5/search/%ED%95%98%EB%8A%98%EA%B3%B5%EC%9B%90%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/701718829?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 52) {
      images = [
        { src: "assets/imgs/하늘공원/놀거리/난지캠핑장/난지캠핑장2.jpg", description: '난지캠핑장', link: 'https://map.naver.com/v5/search/%ED%95%98%EB%8A%98%EA%B3%B5%EC%9B%90%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/11818239?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/하늘공원/놀거리/난지캠핑장/난지캠핑장3.jpg", description: '난지캠핑장', link: 'https://map.naver.com/v5/search/%ED%95%98%EB%8A%98%EA%B3%B5%EC%9B%90%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/11818239?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/하늘공원/놀거리/난지캠핑장/난지캠핑장4.jpg", description: '난지캠핑장', link: 'https://map.naver.com/v5/search/%ED%95%98%EB%8A%98%EA%B3%B5%EC%9B%90%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/11818239?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/하늘공원/놀거리/난지캠핑장/난지캠핑장5.jpg", description: '난지캠핑장', link: 'https://map.naver.com/v5/search/%ED%95%98%EB%8A%98%EA%B3%B5%EC%9B%90%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/11818239?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/하늘공원/놀거리/난지캠핑장/난지캠핑장1.jpg", description: '난지캠핑장', link: 'https://map.naver.com/v5/search/%ED%95%98%EB%8A%98%EA%B3%B5%EC%9B%90%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/11818239?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 53) {
      images = [
        { src: "assets/imgs/하늘공원/놀거리/서울월드컵경기장/서울월드컵경기장2.jpg", description: '서울월드컵경기장', link: 'https://map.naver.com/v5/search/%ED%95%98%EB%8A%98%EA%B3%B5%EC%9B%90%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/11571843?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/하늘공원/놀거리/서울월드컵경기장/서울월드컵경기장3.jpg", description: '서울월드컵경기장', link: 'https://map.naver.com/v5/search/%ED%95%98%EB%8A%98%EA%B3%B5%EC%9B%90%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/11571843?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/하늘공원/놀거리/서울월드컵경기장/서울월드컵경기장4.jpg", description: '서울월드컵경기장', link: 'https://map.naver.com/v5/search/%ED%95%98%EB%8A%98%EA%B3%B5%EC%9B%90%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/11571843?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/하늘공원/놀거리/서울월드컵경기장/서울월드컵경기장5.jpg", description: '서울월드컵경기장', link: 'https://map.naver.com/v5/search/%ED%95%98%EB%8A%98%EA%B3%B5%EC%9B%90%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/11571843?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/하늘공원/놀거리/서울월드컵경기장/서울월드컵경기장1.jpg", description: '서울월드컵경기장', link: 'https://map.naver.com/v5/search/%ED%95%98%EB%8A%98%EA%B3%B5%EC%9B%90%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/11571843?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 54) {
      images = [
        { src: "assets/imgs/하늘공원/놀거리/어깨동무스토리움/어깨동무스토리움2.jpg", description: '어깨동무스토리움', link: 'https://map.naver.com/v5/search/%ED%95%98%EB%8A%98%EA%B3%B5%EC%9B%90%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/1204011820?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/하늘공원/놀거리/어깨동무스토리움/어깨동무스토리움3.jpg", description: '어깨동무스토리움', link: 'https://map.naver.com/v5/search/%ED%95%98%EB%8A%98%EA%B3%B5%EC%9B%90%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/1204011820?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/하늘공원/놀거리/어깨동무스토리움/어깨동무스토리움4.jpg", description: '어깨동무스토리움', link: 'https://map.naver.com/v5/search/%ED%95%98%EB%8A%98%EA%B3%B5%EC%9B%90%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/1204011820?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/하늘공원/놀거리/어깨동무스토리움/어깨동무스토리움5.jpg", description: '어깨동무스토리움', link: 'https://map.naver.com/v5/search/%ED%95%98%EB%8A%98%EA%B3%B5%EC%9B%90%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/1204011820?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/하늘공원/놀거리/어깨동무스토리움/어깨동무스토리움1.jpg", description: '어깨동무스토리움', link: 'https://map.naver.com/v5/search/%ED%95%98%EB%8A%98%EA%B3%B5%EC%9B%90%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/1204011820?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' }
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
      { src: 'assets/imgs/서울숲/식당/꾸아/4.jpg', description: '꾸아-양식', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1846605156?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: 'assets/imgs/서울숲/식당/꾸아/5.jpg', description: '꾸아-양식', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1846605156?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: 'assets/imgs/서울숲/식당/꾸아/1.jpg', description: '꾸아-양식', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1846605156?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: 'assets/imgs/서울숲/식당/꾸아/2.jpg', description: '꾸아-양식', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1846605156?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: 'assets/imgs/서울숲/식당/꾸아/3.jpg', description: '꾸아-양식', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1846605156?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 2) {
    images = [
      { src: "assets/imgs/서울숲/식당/난포/4.jpg", description: '난포', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1910927846?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울숲/식당/난포/5.jpg", description: '난포', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1910927846?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울숲/식당/난포/1.jpg", description: '난포', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1910927846?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울숲/식당/난포/2.jpg", description: '난포', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1910927846?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울숲/식당/난포/3.jpg", description: '난포', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1910927846?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 3) {
    images = [
      { src: "assets/imgs/서울숲/식당/미테이블/4.jpg", description: '미테이블', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/38590315?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울숲/식당/미테이블/5.jpg", description: '미테이블', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/38590315?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울숲/식당/미테이블/1.jpg", description: '미테이블', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/38590315?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울숲/식당/미테이블/2.jpg", description: '미테이블', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/38590315?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울숲/식당/미테이블/3.jpg", description: '미테이블', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/38590315?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 4) {
    images = [
      { src: "assets/imgs/서울숲/식당/서울숲 포도피자/4.jpg", description: '서울숲 포도피자', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1574521874?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울숲/식당/서울숲 포도피자/5.jpg", description: '서울숲 포도피자', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1574521874?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울숲/식당/서울숲 포도피자/1.jpg", description: '서울숲 포도피자', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1574521874?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울숲/식당/서울숲 포도피자/2.jpg", description: '서울숲 포도피자', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1574521874?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울숲/식당/서울숲 포도피자/3.jpg", description: '서울숲 포도피자', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1574521874?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 5) {
    images = [
      { src: "assets/imgs/서울숲/식당/스시도쿠/4.jpg", description: '스시도쿠', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1029146941?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울숲/식당/스시도쿠/5.jpg", description: '스시도쿠', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1029146941?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울숲/식당/스시도쿠/1.jpg", description: '스시도쿠', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1029146941?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울숲/식당/스시도쿠/2.jpg", description: '스시도쿠', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1029146941?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울숲/식당/스시도쿠/3.jpg", description: '스시도쿠', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1029146941?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 6) {
    images = [
      { src: "assets/imgs/서울숲/식당/온량/4.jpg", description: '온량', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1584576344?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울숲/식당/온량/5.jpg", description: '온량', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1584576344?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울숲/식당/온량/1.jpg", description: '온량', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1584576344?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울숲/식당/온량/2.jpg", description: '온량', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1584576344?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울숲/식당/온량/3.jpg", description: '온량', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1584576344?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 7) {
    images = [
      { src: "assets/imgs/서울숲/카페/5to7/4.png", description: '5to7', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1508243090?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울숲/카페/5to7/5.png", description: '5to7', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1508243090?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울숲/카페/5to7/1.png", description: '5to7', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1508243090?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울숲/카페/5to7/2.png", description: '5to7', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1508243090?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울숲/카페/5to7/3.png", description: '5to7', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1508243090?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 8) {
    images = [
      { src: "assets/imgs/서울숲/카페/구욱희씨/구욱희씨_4.png", description: '구욱희씨', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1712521730?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울숲/카페/구욱희씨/구욱희씨_5.png", description: '구욱희씨', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1712521730?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울숲/카페/구욱희씨/구욱희씨_1.png", description: '구욱희씨', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1712521730?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울숲/카페/구욱희씨/구욱희씨_2.png", description: '구욱희씨', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1712521730?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울숲/카페/구욱희씨/구욱희씨_3.png", description: '구욱희씨', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1712521730?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 9) {
    images = [
      { src: "assets/imgs/서울숲/카페/뉴앳던성수/뉴앳던 성수_4.jpeg", description: '뉴앳던성수', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1789793457?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울숲/카페/뉴앳던성수/뉴앳던 성수_5.jpeg", description: '뉴앳던성수', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1789793457?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울숲/카페/뉴앳던성수/뉴앳던 성수_1.jpeg", description: '뉴앳던성수', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1789793457?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울숲/카페/뉴앳던성수/뉴앳던 성수_2.jpeg", description: '뉴앳던성수', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1789793457?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울숲/카페/뉴앳던성수/뉴앳던 성수_3.jpeg", description: '뉴앳던성수', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1789793457?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 10) {
    images = [
      { src: "assets/imgs/서울숲/카페/밀도/밀도_4.png", description: '밀도', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/37717085?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울숲/카페/밀도/밀도_5.png", description: '밀도', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/37717085?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울숲/카페/밀도/밀도_1.png", description: '밀도', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/37717085?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울숲/카페/밀도/밀도_2.png", description: '밀도', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/37717085?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울숲/카페/밀도/밀도_3.png", description: '밀도', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/37717085?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 11) {
    images = [
      { src: "assets/imgs/서울숲/카페/봉땅/봉땅_4.png", description: '봉땅', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1700801654?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울숲/카페/봉땅/봉땅_5.png", description: '봉땅', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1700801654?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울숲/카페/봉땅/봉땅_1.png", description: '봉땅', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1700801654?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울숲/카페/봉땅/봉땅_2.png", description: '봉땅', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1700801654?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울숲/카페/봉땅/봉땅_3.png", description: '봉땅', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1700801654?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' }

      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 12) {
    images = [
      { src: "assets/imgs/서울숲/카페/브레디포스트/브레디포스트_4.png", description: '브레디포스트', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1020816080?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울숲/카페/브레디포스트/브레디포스트_5.png", description: '브레디포스트', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1020816080?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울숲/카페/브레디포스트/브레디포스트_1.png", description: '브레디포스트', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1020816080?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울숲/카페/브레디포스트/브레디포스트_2.png", description: '브레디포스트', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1020816080?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울숲/카페/브레디포스트/브레디포스트_3.png", description: '브레디포스트', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1020816080?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 13) {
    images = [
      { src: "assets/imgs/서울숲/놀거리/더서울라이티움/2.jpeg", description: '더서울라이티움', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/448283373?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울숲/놀거리/더서울라이티움/3.jpeg", description: '더서울라이티움', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/448283373?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울숲/놀거리/더서울라이티움/4.jpeg", description: '더서울라이티움', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/448283373?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울숲/놀거리/더서울라이티움/5.jpeg", description: '더서울라이티움', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/448283373?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울숲/놀거리/더서울라이티움/1.jpeg", description: '더서울라이티움', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/448283373?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 14) {
    images = [
      { src: "assets/imgs/서울숲/놀거리/더페이지갤러리/2.jpeg", description: '더페이지갤러리', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/13051123?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울숲/놀거리/더페이지갤러리/3.jpeg", description: '더페이지갤러리', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/13051123?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울숲/놀거리/더페이지갤러리/4.jpeg", description: '더페이지갤러리', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/13051123?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울숲/놀거리/더페이지갤러리/5.jpeg", description: '더페이지갤러리', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/13051123?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울숲/놀거리/더페이지갤러리/1.jpeg", description: '더페이지갤러리', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/13051123?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 15) {
    images = [
      { src: "assets/imgs/서울숲/놀거리/디뮤지엄/2.jpeg", description: '디뮤지엄', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/36992369?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울숲/놀거리/디뮤지엄/3.jpeg", description: '디뮤지엄', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/36992369?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울숲/놀거리/디뮤지엄/4.jpeg", description: '디뮤지엄', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/36992369?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울숲/놀거리/디뮤지엄/5.jpeg", description: '디뮤지엄', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/36992369?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울숲/놀거리/디뮤지엄/1.jpeg", description: '디뮤지엄', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/36992369?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 16) {
    images = [
      { src: "assets/imgs/서울숲/놀거리/뚝섬미술관/2.jpeg", description: '뚝섬미술관', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/1479550856?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울숲/놀거리/뚝섬미술관/3.jpeg", description: '뚝섬미술관', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/1479550856?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울숲/놀거리/뚝섬미술관/4.jpeg", description: '뚝섬미술관', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/1479550856?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울숲/놀거리/뚝섬미술관/5.png", description: '뚝섬미술관', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/1479550856?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울숲/놀거리/뚝섬미술관/1.jpeg", description: '뚝섬미술관', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/1479550856?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 17) {
    images = [
      { src: "assets/imgs/서울숲/놀거리/무신사테라스성수/2.jpeg", description: '무신사테라스성수', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/1573780452?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울숲/놀거리/무신사테라스성수/3.jpeg", description: '무신사테라스성수', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/1573780452?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울숲/놀거리/무신사테라스성수/4.jpeg", description: '무신사테라스성수', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/1573780452?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울숲/놀거리/무신사테라스성수/5.jpeg", description: '무신사테라스성수', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/1573780452?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울숲/놀거리/무신사테라스성수/1.png", description: '무신사테라스성수', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/1573780452?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 18) {
    images = [
      { src: "assets/imgs/서울숲/놀거리/밑미홈/2.jpeg", description: '밑미홈', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/1282574554?c=12,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/서울숲/놀거리/밑미홈/3.jpeg", description: '밑미홈', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/1282574554?c=12,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/서울숲/놀거리/밑미홈/4.jpeg", description: '밑미홈', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/1282574554?c=12,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/서울숲/놀거리/밑미홈/5.jpeg", description: '밑미홈', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/1282574554?c=12,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/서울숲/놀거리/밑미홈/1.jpeg", description: '밑미홈', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%88%B2%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/1282574554?c=12,0,0,0,dh&placePath=%3Fentry%253Dbmp' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 19) {
    images = [
      { src: 'assets/imgs/아차산/식당/마시쏘부대찌개/다운로드 (2).jpg', description: '마시쏘부대찌개', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1231048942?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll%2526n_ad_group_type%253D10%2526n_query%253D%25EC%2595%2584%25EC%25B0%25A8%25EC%2582%25B0%25EA%25B7%25BC%25EC%25B2%2598%25EB%25A7%259B%25EC%25A7%2591' },
      { src: 'assets/imgs/아차산/식당/마시쏘부대찌개/다운로드 (3).jpg', description: '마시쏘부대찌개', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1231048942?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll%2526n_ad_group_type%253D10%2526n_query%253D%25EC%2595%2584%25EC%25B0%25A8%25EC%2582%25B0%25EA%25B7%25BC%25EC%25B2%2598%25EB%25A7%259B%25EC%25A7%2591' },
      { src: 'assets/imgs/아차산/식당/마시쏘부대찌개/다운로드 (4).jpg', description: '마시쏘부대찌개', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1231048942?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll%2526n_ad_group_type%253D10%2526n_query%253D%25EC%2595%2584%25EC%25B0%25A8%25EC%2582%25B0%25EA%25B7%25BC%25EC%25B2%2598%25EB%25A7%259B%25EC%25A7%2591' },
      { src: 'assets/imgs/아차산/식당/마시쏘부대찌개/다운로드 (5).jpg', description: '마시쏘부대찌개', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1231048942?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll%2526n_ad_group_type%253D10%2526n_query%253D%25EC%2595%2584%25EC%25B0%25A8%25EC%2582%25B0%25EA%25B7%25BC%25EC%25B2%2598%25EB%25A7%259B%25EC%25A7%2591' },
      { src: 'assets/imgs/아차산/식당/마시쏘부대찌개/다운로드 (1).jpg', description: '마시쏘부대찌개', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1231048942?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll%2526n_ad_group_type%253D10%2526n_query%253D%25EC%2595%2584%25EC%25B0%25A8%25EC%2582%25B0%25EA%25B7%25BC%25EC%25B2%2598%25EB%25A7%259B%25EC%25A7%2591' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 20) {
    images = [
      { src: "assets/imgs/아차산/식당/망향비빔국수/다운로드 (2).jpg", description: '망향비빔국수', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/13047580?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/아차산/식당/망향비빔국수/다운로드 (3).jpg", description: '망향비빔국수', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/13047580?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/아차산/식당/망향비빔국수/다운로드 (4).jpg", description: '망향비빔국수', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/13047580?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/아차산/식당/망향비빔국수/다운로드 (5).jpg", description: '망향비빔국수', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/13047580?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/아차산/식당/망향비빔국수/다운로드 (1).jpg", description: '망향비빔국수', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/13047580?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 21) {
    images = [
      { src: "assets/imgs/아차산/식당/멕시칼리/다운로드 (2).jpg", description: '멕시칼리', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1111031959?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/아차산/식당/멕시칼리/다운로드 (3).jpg", description: '멕시칼리', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1111031959?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/아차산/식당/멕시칼리/다운로드 (4).jpg", description: '멕시칼리', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1111031959?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/아차산/식당/멕시칼리/다운로드 (5).jpg", description: '멕시칼리', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1111031959?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/아차산/식당/멕시칼리/다운로드 (1).jpg", description: '멕시칼리', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1111031959?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 22) {
    images = [
      { src: "assets/imgs/아차산/식당/비스타 워커힐 서울 피자힐/다운로드 (2).jpg", description: '비스타 워커힐 서울 피자힐', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/11611438?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/아차산/식당/비스타 워커힐 서울 피자힐/다운로드 (3).jpg", description: '비스타 워커힐 서울 피자힐', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/11611438?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/아차산/식당/비스타 워커힐 서울 피자힐/다운로드 (4).jpg", description: '비스타 워커힐 서울 피자힐', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/11611438?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/아차산/식당/비스타 워커힐 서울 피자힐/다운로드 (5).jpg", description: '비스타 워커힐 서울 피자힐', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/11611438?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/아차산/식당/비스타 워커힐 서울 피자힐/다운로드 (1).jpg", description: '비스타 워커힐 서울 피자힐', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/11611438?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 23) {
    images = [
      { src: "assets/imgs/아차산/식당/순금이떡볶이/다운로드 (2).jpg", description: '순금이떡볶이', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/31747148?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/아차산/식당/순금이떡볶이/다운로드 (3).jpg", description: '순금이떡볶이', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/31747148?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/아차산/식당/순금이떡볶이/다운로드 (4).jpg", description: '순금이떡볶이', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/31747148?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/아차산/식당/순금이떡볶이/다운로드 (5).jpg", description: '순금이떡볶이', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/31747148?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/아차산/식당/순금이떡볶이/다운로드 (1).jpg", description: '순금이떡볶이', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/31747148?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 24) {
    images = [
      { src: "assets/imgs/아차산/식당/아차산김가네맛집/다운로드 (2).jpg", description: '아차산김가네맛집', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/20874682?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll%2526n_ad_group_type%253D10%2526n_query%253D%25EC%2595%2584%25EC%25B0%25A8%25EC%2582%25B0%25EA%25B7%25BC%25EC%25B2%2598%25EB%25A7%259B%25EC%25A7%2591' },
      { src: "assets/imgs/아차산/식당/아차산김가네맛집/다운로드 (3).jpg", description: '아차산김가네맛집', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/20874682?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll%2526n_ad_group_type%253D10%2526n_query%253D%25EC%2595%2584%25EC%25B0%25A8%25EC%2582%25B0%25EA%25B7%25BC%25EC%25B2%2598%25EB%25A7%259B%25EC%25A7%2591' },
      { src: "assets/imgs/아차산/식당/아차산김가네맛집/다운로드 (4).jpg", description: '아차산김가네맛집', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/20874682?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll%2526n_ad_group_type%253D10%2526n_query%253D%25EC%2595%2584%25EC%25B0%25A8%25EC%2582%25B0%25EA%25B7%25BC%25EC%25B2%2598%25EB%25A7%259B%25EC%25A7%2591' },
      { src: "assets/imgs/아차산/식당/아차산김가네맛집/다운로드 (5).jpg", description: '아차산김가네맛집', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/20874682?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll%2526n_ad_group_type%253D10%2526n_query%253D%25EC%2595%2584%25EC%25B0%25A8%25EC%2582%25B0%25EA%25B7%25BC%25EC%25B2%2598%25EB%25A7%259B%25EC%25A7%2591' },
      { src: "assets/imgs/아차산/식당/아차산김가네맛집/다운로드 (1).jpg", description: '아차산김가네맛집', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/20874682?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll%2526n_ad_group_type%253D10%2526n_query%253D%25EC%2595%2584%25EC%25B0%25A8%25EC%2582%25B0%25EA%25B7%25BC%25EC%25B2%2598%25EB%25A7%259B%25EC%25A7%2591' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 25) {
    images = [
      { src: "assets/imgs/아차산/카페/RADIANT/다운로드 (2).jpg", description: 'RADIANT', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/37996680?c=13,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/아차산/카페/RADIANT/다운로드 (3).jpg", description: 'RADIANT', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/37996680?c=13,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/아차산/카페/RADIANT/다운로드 (4).jpg", description: 'RADIANT', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/37996680?c=13,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/아차산/카페/RADIANT/다운로드 (5).jpg", description: 'RADIANT', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/37996680?c=13,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/아차산/카페/RADIANT/다운로드 (1).jpg", description: 'RADIANT', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/37996680?c=13,0,0,0,dh&placePath=%3Fentry%253Dpll' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 26) {
    images = [
      { src: "assets/imgs/아차산/카페/버글러커피/다운로드 (2).jpg", description: '버글러커피', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1976895148?c=13,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/아차산/카페/버글러커피/다운로드 (3).jpg", description: '버글러커피', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1976895148?c=13,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/아차산/카페/버글러커피/다운로드 (4).jpg", description: '버글러커피', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1976895148?c=13,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/아차산/카페/버글러커피/다운로드 (5).jpg", description: '버글러커피', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1976895148?c=13,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/아차산/카페/버글러커피/다운로드 (1).jpg", description: '버글러커피', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1976895148?c=13,0,0,0,dh&placePath=%3Fentry%253Dpll' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 27) {
    images = [
      { src: "assets/imgs/아차산/카페/빛의라운지/다운로드 (2).jpg", description: '빛의라운지', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1767557389?c=13,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/아차산/카페/빛의라운지/다운로드 (3).jpg", description: '빛의라운지', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1767557389?c=13,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/아차산/카페/빛의라운지/다운로드 (4).jpg", description: '빛의라운지', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1767557389?c=13,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/아차산/카페/빛의라운지/다운로드 (5).jpg", description: '빛의라운지', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1767557389?c=13,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/아차산/카페/빛의라운지/다운로드 (1).jpg", description: '빛의라운지', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1767557389?c=13,0,0,0,dh&placePath=%3Fentry%253Dpll' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 28) {
    images = [
      { src: "assets/imgs/아차산/카페/솔티드/다운로드 (2).jpg", description: '솔티드', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1566098855?c=13,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/아차산/카페/솔티드/다운로드 (3).jpg", description: '솔티드', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1566098855?c=13,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/아차산/카페/솔티드/다운로드 (4).jpg", description: '솔티드', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1566098855?c=13,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/아차산/카페/솔티드/다운로드 (5).jpg", description: '솔티드', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1566098855?c=13,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/아차산/카페/솔티드/다운로드 (1).jpg", description: '솔티드', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/1566098855?c=13,0,0,0,dh&placePath=%3Fentry%253Dpll' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 29) {
    images = [
      { src: "assets/imgs/아차산/카페/시드누아/다운로드 (4).jpg", description: '시드누아', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/37789719?c=13,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/아차산/카페/시드누아/다운로드 (5).jpg", description: '시드누아', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/37789719?c=13,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/아차산/카페/시드누아/다운로드 (1).jpg", description: '시드누아', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/37789719?c=13,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/아차산/카페/시드누아/다운로드 (2).jpg", description: '시드누아', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/37789719?c=13,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/아차산/카페/시드누아/다운로드 (3).jpg", description: '시드누아', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/37789719?c=13,0,0,0,dh&placePath=%3Fentry%253Dpll' }

      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 30) {
    images = [
      { src: "assets/imgs/아차산/카페/실란트로커피/다운로드 (2).jpg", description: '실란트로커피', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/66005003?c=13,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/아차산/카페/실란트로커피/다운로드 (3).jpg", description: '실란트로커피', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/66005003?c=13,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/아차산/카페/실란트로커피/다운로드 (4).jpg", description: '실란트로커피', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/66005003?c=13,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/아차산/카페/실란트로커피/다운로드 (5).jpg", description: '실란트로커피', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/66005003?c=13,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/아차산/카페/실란트로커피/다운로드 (1).jpg", description: '실란트로커피', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EC%B9%B4%ED%8E%98/place/66005003?c=13,0,0,0,dh&placePath=%3Fentry%253Dpll' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 31) {
    images = [
      { src: "assets/imgs/아차산/놀거리/구리시 고구려 대장간 마을/다운로드 (2).jpg", description: '고구려 대장간 마을', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/13043905?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/아차산/놀거리/구리시 고구려 대장간 마을/다운로드 (3).jpg", description: '고구려 대장간 마을', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/13043905?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/아차산/놀거리/구리시 고구려 대장간 마을/다운로드 (4).jpg", description: '고구려 대장간 마을', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/13043905?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/아차산/놀거리/구리시 고구려 대장간 마을/다운로드 (5).jpg", description: '고구려 대장간 마을', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/13043905?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/아차산/놀거리/구리시 고구려 대장간 마을/다운로드 (1).jpg", description: '고구려 대장간 마을', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/13043905?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 32) {
    images = [
      { src: "assets/imgs/아차산/놀거리/빛의 시어터/다운로드 (2).jpg", description: '빛의 시어터', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/1368948121?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/아차산/놀거리/빛의 시어터/다운로드 (3).jpg", description: '빛의 시어터', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/1368948121?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/아차산/놀거리/빛의 시어터/다운로드 (4).jpg", description: '빛의 시어터', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/1368948121?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/아차산/놀거리/빛의 시어터/다운로드 (5).jpg", description: '빛의 시어터', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/1368948121?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/아차산/놀거리/빛의 시어터/다운로드 (1).jpg", description: '빛의 시어터', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/1368948121?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 33) {
    images = [
      { src: "assets/imgs/아차산/놀거리/사가정공원/다운로드 (2).jpg", description: '사가정공원', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/19588928?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/아차산/놀거리/사가정공원/다운로드 (3).jpg", description: '사가정공원', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/19588928?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/아차산/놀거리/사가정공원/다운로드 (4).jpg", description: '사가정공원', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/19588928?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/아차산/놀거리/사가정공원/다운로드 (5).jpg", description: '사가정공원', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/19588928?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/아차산/놀거리/사가정공원/다운로드 (1).jpg", description: '사가정공원', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/19588928?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 34) {
    images = [
      { src: "assets/imgs/아차산/놀거리/서울상상나라/다운로드 (2).jpg", description: '서울상상나라', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/31949741?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/아차산/놀거리/서울상상나라/다운로드 (3).jpg", description: '서울상상나라', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/31949741?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/아차산/놀거리/서울상상나라/다운로드 (4).jpg", description: '서울상상나라', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/31949741?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/아차산/놀거리/서울상상나라/다운로드 (5).jpg", description: '서울상상나라', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/31949741?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/아차산/놀거리/서울상상나라/다운로드 (1).jpg", description: '서울상상나라', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/31949741?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 35) {
    images = [
      { src: "assets/imgs/아차산/놀거리/소울레터/다운로드 (2).jpg", description: '소울레터', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EA%B3%B5%EB%B0%A9/place/1185333693?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/아차산/놀거리/소울레터/다운로드 (3).jpg", description: '소울레터', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EA%B3%B5%EB%B0%A9/place/1185333693?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/아차산/놀거리/소울레터/다운로드 (4).jpg", description: '소울레터', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EA%B3%B5%EB%B0%A9/place/1185333693?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/아차산/놀거리/소울레터/다운로드 (5).jpg", description: '소울레터', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EA%B3%B5%EB%B0%A9/place/1185333693?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/아차산/놀거리/소울레터/다운로드 (1).jpg", description: '소울레터', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EA%B3%B5%EB%B0%A9/place/1185333693?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 36) {
    images = [
      { src: "assets/imgs/아차산/놀거리/아차산 생태공원/다운로드 (2).jpg", description: '아차산 생태공원', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/12082220?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/아차산/놀거리/아차산 생태공원/다운로드 (3).jpg", description: '아차산 생태공원', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/12082220?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/아차산/놀거리/아차산 생태공원/다운로드 (4).jpg", description: '아차산 생태공원', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/12082220?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/아차산/놀거리/아차산 생태공원/다운로드 (5).jpg", description: '아차산 생태공원', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/12082220?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/아차산/놀거리/아차산 생태공원/다운로드 (1).jpg", description: '아차산 생태공원', link: 'https://map.naver.com/v5/search/%EC%95%84%EC%B0%A8%EC%82%B0%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/12082220?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 37) {
    images = [
      { src: 'assets/imgs/하늘공원/식당/덕승재 상암본점/덕승재 상암본점2.jpg', description: '덕승재 상암본점', link: 'https://naver.me/GxORR6Bp' },
      { src: 'assets/imgs/하늘공원/식당/덕승재 상암본점/덕승재 상암본점3.jpg', description: '덕승재 상암본점', link: 'https://naver.me/GxORR6Bp' },
      { src: 'assets/imgs/하늘공원/식당/덕승재 상암본점/덕승재 상암본점4.jpg', description: '덕승재 상암본점', link: 'https://naver.me/GxORR6Bp' },
      { src: 'assets/imgs/하늘공원/식당/덕승재 상암본점/덕승재 상암본점5.jpg', description: '덕승재 상암본점', link: 'https://naver.me/GxORR6Bp' },
      { src: 'assets/imgs/하늘공원/식당/덕승재 상암본점/덕승재 상암본점1.jpg', description: '덕승재 상암본점', link: 'https://naver.me/GxORR6Bp' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 38) {
    images = [
      { src: "assets/imgs/하늘공원/식당/동신화로/동신화로2.jpg", description: '동신화로', link: 'https://naver.me/xaPgOmGU' },
      { src: "assets/imgs/하늘공원/식당/동신화로/동신화로3.jpg", description: '동신화로', link: 'https://naver.me/xaPgOmGU' },
      { src: "assets/imgs/하늘공원/식당/동신화로/동신화로4.jpg", description: '동신화로', link: 'https://naver.me/xaPgOmGU' },
      { src: "assets/imgs/하늘공원/식당/동신화로/동신화로5.jpg", description: '동신화로', link: 'https://naver.me/xaPgOmGU' },
      { src: "assets/imgs/하늘공원/식당/동신화로/동신화로1.jpg", description: '동신화로', link: 'https://naver.me/xaPgOmGU' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 39) {
    images = [
      { src: "assets/imgs/하늘공원/식당/벽과담/벽과담2.jpg", description: '벽과담', link: 'https://naver.me/xKQWNZyx' },
      { src: "assets/imgs/하늘공원/식당/벽과담/벽과담3.jpg", description: '벽과담', link: 'https://naver.me/xKQWNZyx' },
      { src: "assets/imgs/하늘공원/식당/벽과담/벽과담4.jpg", description: '벽과담', link: 'https://naver.me/xKQWNZyx' },
      { src: "assets/imgs/하늘공원/식당/벽과담/벽과담5.jpg", description: '벽과담', link: 'https://naver.me/xKQWNZyx' },
      { src: "assets/imgs/하늘공원/식당/벽과담/벽과담1.jpg", description: '벽과담', link: 'https://naver.me/xKQWNZyx' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 40) {
    images = [
      { src: "assets/imgs/하늘공원/식당/상암일미락/상암일미락2.jpg", description: '상암일미락', link: 'https://naver.me/5RctRHBX' },
      { src: "assets/imgs/하늘공원/식당/상암일미락/상암일미락3.jpg", description: '상암일미락', link: 'https://naver.me/5RctRHBX' },
      { src: "assets/imgs/하늘공원/식당/상암일미락/상암일미락4.jpg", description: '상암일미락', link: 'https://naver.me/5RctRHBX' },
      { src: "assets/imgs/하늘공원/식당/상암일미락/상암일미락5.jpg", description: '상암일미락', link: 'https://naver.me/5RctRHBX' },
      { src: "assets/imgs/하늘공원/식당/상암일미락/상암일미락1.jpg", description: '상암일미락', link: 'https://naver.me/5RctRHBX' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 41) {
    images = [
      { src: "assets/imgs/하늘공원/식당/옥소반 상암점/옥소반 상암점2.jpg", description: '옥소반 상암점', link: 'https://naver.me/5qRAOl3k' },
      { src: "assets/imgs/하늘공원/식당/옥소반 상암점/옥소반 상암점3.jpg", description: '옥소반 상암점', link: 'https://naver.me/5qRAOl3k' },
      { src: "assets/imgs/하늘공원/식당/옥소반 상암점/옥소반 상암점4.jpg", description: '옥소반 상암점', link: 'https://naver.me/5qRAOl3k' },
      { src: "assets/imgs/하늘공원/식당/옥소반 상암점/옥소반 상암점5.jpg", description: '옥소반 상암점', link: 'https://naver.me/5qRAOl3k' },
      { src: "assets/imgs/하늘공원/식당/옥소반 상암점/옥소반 상암점1.jpg", description: '옥소반 상암점', link: 'https://naver.me/5qRAOl3k' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 42) {
    images = [
      { src: "assets/imgs/하늘공원/식당/옥자회관/옥자회관2.jpg", description: '옥자회관', link: 'https://naver.me/GC2uNYoj' },
      { src: "assets/imgs/하늘공원/식당/옥자회관/옥자회관3.jpg", description: '옥자회관', link: 'https://naver.me/GC2uNYoj' },
      { src: "assets/imgs/하늘공원/식당/옥자회관/옥자회관4.jpg", description: '옥자회관', link: 'https://naver.me/GC2uNYoj' },
      { src: "assets/imgs/하늘공원/식당/옥자회관/옥자회관5.jpg", description: '옥자회관', link: 'https://naver.me/GC2uNYoj' },
      { src: "assets/imgs/하늘공원/식당/옥자회관/옥자회관1.jpg", description: '옥자회관', link: 'https://naver.me/GC2uNYoj' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 43) {
    images = [
      { src: "assets/imgs/하늘공원/카페/cafe TANK6/2.jpg", description: 'cafe TANK6', link: 'https://naver.me/GBf5bbGe' },
      { src: "assets/imgs/하늘공원/카페/cafe TANK6/3.jpg", description: 'cafe TANK6', link: 'https://naver.me/GBf5bbGe' },
      { src: "assets/imgs/하늘공원/카페/cafe TANK6/4.jpg", description: 'cafe TANK6', link: 'https://naver.me/GBf5bbGe' },
      { src: "assets/imgs/하늘공원/카페/cafe TANK6/5.jpg", description: 'cafe TANK6', link: 'https://naver.me/GBf5bbGe' },
      { src: "assets/imgs/하늘공원/카페/cafe TANK6/1.jpg", description: 'cafe TANK6', link: 'https://naver.me/GBf5bbGe' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 44) {
    images = [
      { src: "assets/imgs/하늘공원/카페/물결한강/2.jpg", description: '물결한강', link: 'https://naver.me/GI64Zp1W' },
      { src: "assets/imgs/하늘공원/카페/물결한강/3.jpg", description: '물결한강', link: 'https://naver.me/GI64Zp1W' },
      { src: "assets/imgs/하늘공원/카페/물결한강/4.jpg", description: '물결한강', link: 'https://naver.me/GI64Zp1W' },
      { src: "assets/imgs/하늘공원/카페/물결한강/5.jpg", description: '물결한강', link: 'https://naver.me/GI64Zp1W' },
      { src: "assets/imgs/하늘공원/카페/물결한강/1.jpg", description: '물결한강', link: 'https://naver.me/GI64Zp1W' },
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 45) {
    images = [
      { src: "assets/imgs/하늘공원/카페/바이어리셔/2.jpg", description: '바이어리셔', link: 'https://naver.me/IFjiTFBy' },
      { src: "assets/imgs/하늘공원/카페/바이어리셔/3.jpg", description: '바이어리셔', link: 'https://naver.me/IFjiTFBy' },
      { src: "assets/imgs/하늘공원/카페/바이어리셔/4.jpg", description: '바이어리셔', link: 'https://naver.me/IFjiTFBy' },
      { src: "assets/imgs/하늘공원/카페/바이어리셔/5.jpg", description: '바이어리셔', link: 'https://naver.me/IFjiTFBy' },
      { src: "assets/imgs/하늘공원/카페/바이어리셔/1.jpg", description: '바이어리셔', link: 'https://naver.me/IFjiTFBy' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 46) {
    images = [
      { src: "assets/imgs/하늘공원/카페/베리빈/2.jpg", description: '베리빈', link: 'https://naver.me/GLKAKHHh' },
      { src: "assets/imgs/하늘공원/카페/베리빈/3.jpg", description: '베리빈', link: 'https://naver.me/GLKAKHHh' },
      { src: "assets/imgs/하늘공원/카페/베리빈/4.jpg", description: '베리빈', link: 'https://naver.me/GLKAKHHh' },
      { src: "assets/imgs/하늘공원/카페/베리빈/5.jpg", description: '베리빈', link: 'https://naver.me/GLKAKHHh' },
      { src: "assets/imgs/하늘공원/카페/베리빈/1.jpg", description: '베리빈', link: 'https://naver.me/GLKAKHHh' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 47) {
    images = [
      { src: "assets/imgs/하늘공원/카페/엣모스피어/2.jpg", description: '엣모스피어', link: 'https://naver.me/59jNOkdy' },
      { src: "assets/imgs/하늘공원/카페/엣모스피어/3.jpg", description: '엣모스피어', link: 'https://naver.me/59jNOkdy' },
      { src: "assets/imgs/하늘공원/카페/엣모스피어/4.jpg", description: '엣모스피어', link: 'https://naver.me/59jNOkdy' },
      { src: "assets/imgs/하늘공원/카페/엣모스피어/5.jpg", description: '엣모스피어', link: 'https://naver.me/59jNOkdy' },
      { src: "assets/imgs/하늘공원/카페/엣모스피어/1.jpg", description: '엣모스피어', link: 'https://naver.me/59jNOkdy' }

      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 48) {
    images = [
      { src: "assets/imgs/하늘공원/카페/카페초이/2.jpg", description: '카페초이', link: 'https://naver.me/xLEkSbMb' },
      { src: "assets/imgs/하늘공원/카페/카페초이/3.jpg", description: '카페초이', link: 'https://naver.me/xLEkSbMb' },
      { src: "assets/imgs/하늘공원/카페/카페초이/4.jpg", description: '카페초이', link: 'https://naver.me/xLEkSbMb' },
      { src: "assets/imgs/하늘공원/카페/카페초이/5.jpg", description: '카페초이', link: 'https://naver.me/xLEkSbMb' },
      { src: "assets/imgs/하늘공원/카페/카페초이/1.jpg", description: '카페초이', link: 'https://naver.me/xLEkSbMb' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 49) {
    images = [
      { src: "assets/imgs/하늘공원/놀거리/DMC홍보관/DMC홍보관2.jpg", description: 'DMC홍보관', link: 'https://map.naver.com/v5/search/%ED%95%98%EB%8A%98%EA%B3%B5%EC%9B%90%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/18808247?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/하늘공원/놀거리/DMC홍보관/DMC홍보관3.jpg", description: 'DMC홍보관', link: 'https://map.naver.com/v5/search/%ED%95%98%EB%8A%98%EA%B3%B5%EC%9B%90%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/18808247?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/하늘공원/놀거리/DMC홍보관/DMC홍보관4.jpg", description: 'DMC홍보관', link: 'https://map.naver.com/v5/search/%ED%95%98%EB%8A%98%EA%B3%B5%EC%9B%90%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/18808247?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/하늘공원/놀거리/DMC홍보관/DMC홍보관5.jpg", description: 'DMC홍보관', link: 'https://map.naver.com/v5/search/%ED%95%98%EB%8A%98%EA%B3%B5%EC%9B%90%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/18808247?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/하늘공원/놀거리/DMC홍보관/DMC홍보관1.jpg", description: 'DMC홍보관', link: 'https://map.naver.com/v5/search/%ED%95%98%EB%8A%98%EA%B3%B5%EC%9B%90%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/18808247?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 50) {
    images = [
      { src: "assets/imgs/하늘공원/놀거리/난지 한강공원/난지한강공원2.jpg", description: '난지 한강공원', link: 'https://map.naver.com/v5/search/%ED%95%98%EB%8A%98%EA%B3%B5%EC%9B%90%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/13416975?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/하늘공원/놀거리/난지 한강공원/난지한강공원3.jpg", description: '난지 한강공원', link: 'https://map.naver.com/v5/search/%ED%95%98%EB%8A%98%EA%B3%B5%EC%9B%90%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/13416975?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/하늘공원/놀거리/난지 한강공원/난지한강공원4.jpg", description: '난지 한강공원', link: 'https://map.naver.com/v5/search/%ED%95%98%EB%8A%98%EA%B3%B5%EC%9B%90%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/13416975?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/하늘공원/놀거리/난지 한강공원/난지한강공원5.jpg", description: '난지 한강공원', link: 'https://map.naver.com/v5/search/%ED%95%98%EB%8A%98%EA%B3%B5%EC%9B%90%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/13416975?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/하늘공원/놀거리/난지 한강공원/난지한강공원1.jpg", description: '난지 한강공원', link: 'https://map.naver.com/v5/search/%ED%95%98%EB%8A%98%EA%B3%B5%EC%9B%90%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/13416975?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 51) {
    images = [
      { src: "assets/imgs/하늘공원/놀거리/문화비축기지/문화비축기지2.jpg", description: '문화비축기지', link: 'https://map.naver.com/v5/search/%ED%95%98%EB%8A%98%EA%B3%B5%EC%9B%90%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/701718829?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/하늘공원/놀거리/문화비축기지/문화비축기지3.jpg", description: '문화비축기지', link: 'https://map.naver.com/v5/search/%ED%95%98%EB%8A%98%EA%B3%B5%EC%9B%90%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/701718829?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/하늘공원/놀거리/문화비축기지/문화비축기지4.jpg", description: '문화비축기지', link: 'https://map.naver.com/v5/search/%ED%95%98%EB%8A%98%EA%B3%B5%EC%9B%90%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/701718829?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/하늘공원/놀거리/문화비축기지/문화비축기지5.jpg", description: '문화비축기지', link: 'https://map.naver.com/v5/search/%ED%95%98%EB%8A%98%EA%B3%B5%EC%9B%90%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/701718829?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/하늘공원/놀거리/문화비축기지/문화비축기지1.jpg", description: '문화비축기지', link: 'https://map.naver.com/v5/search/%ED%95%98%EB%8A%98%EA%B3%B5%EC%9B%90%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/701718829?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 52) {
    images = [
      { src: "assets/imgs/하늘공원/놀거리/난지캠핑장/난지캠핑장2.jpg", description: '난지캠핑장', link: 'https://map.naver.com/v5/search/%ED%95%98%EB%8A%98%EA%B3%B5%EC%9B%90%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/11818239?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/하늘공원/놀거리/난지캠핑장/난지캠핑장3.jpg", description: '난지캠핑장', link: 'https://map.naver.com/v5/search/%ED%95%98%EB%8A%98%EA%B3%B5%EC%9B%90%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/11818239?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/하늘공원/놀거리/난지캠핑장/난지캠핑장4.jpg", description: '난지캠핑장', link: 'https://map.naver.com/v5/search/%ED%95%98%EB%8A%98%EA%B3%B5%EC%9B%90%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/11818239?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/하늘공원/놀거리/난지캠핑장/난지캠핑장5.jpg", description: '난지캠핑장', link: 'https://map.naver.com/v5/search/%ED%95%98%EB%8A%98%EA%B3%B5%EC%9B%90%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/11818239?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/하늘공원/놀거리/난지캠핑장/난지캠핑장1.jpg", description: '난지캠핑장', link: 'https://map.naver.com/v5/search/%ED%95%98%EB%8A%98%EA%B3%B5%EC%9B%90%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/11818239?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 53) {
    images = [
      { src: "assets/imgs/하늘공원/놀거리/서울월드컵경기장/서울월드컵경기장2.jpg", description: '서울월드컵경기장', link: 'https://map.naver.com/v5/search/%ED%95%98%EB%8A%98%EA%B3%B5%EC%9B%90%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/11571843?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/하늘공원/놀거리/서울월드컵경기장/서울월드컵경기장3.jpg", description: '서울월드컵경기장', link: 'https://map.naver.com/v5/search/%ED%95%98%EB%8A%98%EA%B3%B5%EC%9B%90%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/11571843?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/하늘공원/놀거리/서울월드컵경기장/서울월드컵경기장4.jpg", description: '서울월드컵경기장', link: 'https://map.naver.com/v5/search/%ED%95%98%EB%8A%98%EA%B3%B5%EC%9B%90%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/11571843?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/하늘공원/놀거리/서울월드컵경기장/서울월드컵경기장5.jpg", description: '서울월드컵경기장', link: 'https://map.naver.com/v5/search/%ED%95%98%EB%8A%98%EA%B3%B5%EC%9B%90%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/11571843?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/하늘공원/놀거리/서울월드컵경기장/서울월드컵경기장1.jpg", description: '서울월드컵경기장', link: 'https://map.naver.com/v5/search/%ED%95%98%EB%8A%98%EA%B3%B5%EC%9B%90%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/11571843?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 54) {
    images = [
      { src: "assets/imgs/하늘공원/놀거리/어깨동무스토리움/어깨동무스토리움2.jpg", description: '어깨동무스토리움', link: 'https://map.naver.com/v5/search/%ED%95%98%EB%8A%98%EA%B3%B5%EC%9B%90%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/1204011820?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/하늘공원/놀거리/어깨동무스토리움/어깨동무스토리움3.jpg", description: '어깨동무스토리움', link: 'https://map.naver.com/v5/search/%ED%95%98%EB%8A%98%EA%B3%B5%EC%9B%90%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/1204011820?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/하늘공원/놀거리/어깨동무스토리움/어깨동무스토리움4.jpg", description: '어깨동무스토리움', link: 'https://map.naver.com/v5/search/%ED%95%98%EB%8A%98%EA%B3%B5%EC%9B%90%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/1204011820?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/하늘공원/놀거리/어깨동무스토리움/어깨동무스토리움5.jpg", description: '어깨동무스토리움', link: 'https://map.naver.com/v5/search/%ED%95%98%EB%8A%98%EA%B3%B5%EC%9B%90%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/1204011820?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/하늘공원/놀거리/어깨동무스토리움/어깨동무스토리움1.jpg", description: '어깨동무스토리움', link: 'https://map.naver.com/v5/search/%ED%95%98%EB%8A%98%EA%B3%B5%EC%9B%90%20%EA%B7%BC%EC%B2%98%20%EB%86%80%EA%B1%B0%EB%A6%AC/place/1204011820?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' }
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
