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
        { src: 'assets/imgs/낙산공원/식당/삼겹살 전문점 대통령/4.jpeg', description: '삼겹살 전문점 대통령', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EB%A7%9B%EC%A7%91/place/48729816?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: 'assets/imgs/낙산공원/식당/삼겹살 전문점 대통령/5.jpeg', description: '삼겹살 전문점 대통령', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EB%A7%9B%EC%A7%91/place/48729816?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: 'assets/imgs/낙산공원/식당/삼겹살 전문점 대통령/1.jpeg', description: '삼겹살 전문점 대통령', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EB%A7%9B%EC%A7%91/place/48729816?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: 'assets/imgs/낙산공원/식당/삼겹살 전문점 대통령/2.jpeg', description: '삼겹살 전문점 대통령', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EB%A7%9B%EC%A7%91/place/48729816?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: 'assets/imgs/낙산공원/식당/삼겹살 전문점 대통령/3.jpeg', description: '삼겹살 전문점 대통령', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EB%A7%9B%EC%A7%91/place/48729816?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 2) {
      images = [
        { src: "assets/imgs/낙산공원/식당/순대실록 대학로본점/4.jpeg", description: '순대실록 대학로본점', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EB%A7%9B%EC%A7%91/place/20148711?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/낙산공원/식당/순대실록 대학로본점/5.jpeg", description: '순대실록 대학로본점', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EB%A7%9B%EC%A7%91/place/20148711?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/낙산공원/식당/순대실록 대학로본점/1.jpeg", description: '순대실록 대학로본점', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EB%A7%9B%EC%A7%91/place/20148711?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/낙산공원/식당/순대실록 대학로본점/2.jpeg", description: '순대실록 대학로본점', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EB%A7%9B%EC%A7%91/place/20148711?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/낙산공원/식당/순대실록 대학로본점/3.jpeg", description: '순대실록 대학로본점', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EB%A7%9B%EC%A7%91/place/20148711?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 3) {
      images = [
        { src: "assets/imgs/낙산공원/식당/오마카세 오사이초밥 대학로점/4.jpeg", description: '오마카세 오사이초밥 대학로점', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EB%A7%9B%EC%A7%91/place/1353833119?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/낙산공원/식당/오마카세 오사이초밥 대학로점/5.jpeg", description: '오마카세 오사이초밥 대학로점', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EB%A7%9B%EC%A7%91/place/1353833119?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/낙산공원/식당/오마카세 오사이초밥 대학로점/1.jpeg", description: '오마카세 오사이초밥 대학로점', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EB%A7%9B%EC%A7%91/place/1353833119?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/낙산공원/식당/오마카세 오사이초밥 대학로점/2.jpeg", description: '오마카세 오사이초밥 대학로점', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EB%A7%9B%EC%A7%91/place/1353833119?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/낙산공원/식당/오마카세 오사이초밥 대학로점/3.jpeg", description: '오마카세 오사이초밥 대학로점', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EB%A7%9B%EC%A7%91/place/1353833119?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 4) {
      images = [
        { src: "assets/imgs/낙산공원/식당/우물집/4.jpeg", description: '우물집', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EB%A7%9B%EC%A7%91/place/1154052509?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/낙산공원/식당/우물집/5.jpeg", description: '우물집', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EB%A7%9B%EC%A7%91/place/1154052509?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/낙산공원/식당/우물집/1.jpeg", description: '우물집', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EB%A7%9B%EC%A7%91/place/1154052509?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/낙산공원/식당/우물집/2.jpeg", description: '우물집', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EB%A7%9B%EC%A7%91/place/1154052509?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/낙산공원/식당/우물집/3.jpeg", description: '우물집', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EB%A7%9B%EC%A7%91/place/1154052509?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 5) {
      images = [
        { src: "assets/imgs/낙산공원/식당/우와 대학로점/4.jpeg", description: '우와 대학로점', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EB%A7%9B%EC%A7%91/place/1400319959?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/낙산공원/식당/우와 대학로점/5.jpeg", description: '우와 대학로점', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EB%A7%9B%EC%A7%91/place/1400319959?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/낙산공원/식당/우와 대학로점/1.jpeg", description: '우와 대학로점', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EB%A7%9B%EC%A7%91/place/1400319959?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/낙산공원/식당/우와 대학로점/2.jpeg", description: '우와 대학로점', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EB%A7%9B%EC%A7%91/place/1400319959?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/낙산공원/식당/우와 대학로점/3.jpeg", description: '우와 대학로점', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EB%A7%9B%EC%A7%91/place/1400319959?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 6) {
      images = [
        { src: "assets/imgs/낙산공원/식당/촌놈/4.jpeg", description: '촌놈', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EB%A7%9B%EC%A7%91/place/11867483?c=14,0,0,0,dh&placePath=%3Fentry%253Dplll' },
        { src: "assets/imgs/낙산공원/식당/촌놈/5.jpeg", description: '촌놈', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EB%A7%9B%EC%A7%91/place/11867483?c=14,0,0,0,dh&placePath=%3Fentry%253Dplll' },
        { src: "assets/imgs/낙산공원/식당/촌놈/1.jpeg", description: '촌놈', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EB%A7%9B%EC%A7%91/place/11867483?c=14,0,0,0,dh&placePath=%3Fentry%253Dplll' },
        { src: "assets/imgs/낙산공원/식당/촌놈/2.jpeg", description: '촌놈', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EB%A7%9B%EC%A7%91/place/11867483?c=14,0,0,0,dh&placePath=%3Fentry%253Dplll' },
        { src: "assets/imgs/낙산공원/식당/촌놈/3.jpeg", description: '촌놈', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EB%A7%9B%EC%A7%91/place/11867483?c=14,0,0,0,dh&placePath=%3Fentry%253Dplll' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 7) {
      images = [
        { src: "assets/imgs/낙산공원/카페/더파크츄러스/4.jpeg", description: '더파크츄러스', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EC%B9%B4%ED%8E%98/place/37160847?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll/l' },
        { src: "assets/imgs/낙산공원/카페/더파크츄러스/5.jpeg", description: '더파크츄러스', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EC%B9%B4%ED%8E%98/place/37160847?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll/l' },
        { src: "assets/imgs/낙산공원/카페/더파크츄러스/1.jpeg", description: '더파크츄러스', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EC%B9%B4%ED%8E%98/place/37160847?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll/l' },
        { src: "assets/imgs/낙산공원/카페/더파크츄러스/2.jpeg", description: '더파크츄러스', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EC%B9%B4%ED%8E%98/place/37160847?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll/l' },
        { src: "assets/imgs/낙산공원/카페/더파크츄러스/3.jpeg", description: '더파크츄러스', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EC%B9%B4%ED%8E%98/place/37160847?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll/l' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 8) {
      images = [
        { src: "assets/imgs/낙산공원/카페/도넛정수 창신점/4.png", description: '도넛정수 창신점', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EC%B9%B4%ED%8E%98/place/1347553376?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/낙산공원/카페/도넛정수 창신점/5.png", description: '도넛정수 창신점', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EC%B9%B4%ED%8E%98/place/1347553376?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/낙산공원/카페/도넛정수 창신점/1.png", description: '도넛정수 창신점', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EC%B9%B4%ED%8E%98/place/1347553376?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/낙산공원/카페/도넛정수 창신점/2.png", description: '도넛정수 창신점', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EC%B9%B4%ED%8E%98/place/1347553376?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/낙산공원/카페/도넛정수 창신점/3.png", description: '도넛정수 창신점', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EC%B9%B4%ED%8E%98/place/1347553376?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 9) {
      images = [
        { src: "assets/imgs/낙산공원/카페/라뚜셩트/4.jpeg", description: '라뚜셩트', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EC%B9%B4%ED%8E%98/place/1561424368?c=15,0,0,0,dh&placePath=%3Fentry%253Dplll' },
        { src: "assets/imgs/낙산공원/카페/라뚜셩트/5.jpeg", description: '라뚜셩트', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EC%B9%B4%ED%8E%98/place/1561424368?c=15,0,0,0,dh&placePath=%3Fentry%253Dplll' },
        { src: "assets/imgs/낙산공원/카페/라뚜셩트/1.jpeg", description: '라뚜셩트', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EC%B9%B4%ED%8E%98/place/1561424368?c=15,0,0,0,dh&placePath=%3Fentry%253Dplll' },
        { src: "assets/imgs/낙산공원/카페/라뚜셩트/2.jpeg", description: '라뚜셩트', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EC%B9%B4%ED%8E%98/place/1561424368?c=15,0,0,0,dh&placePath=%3Fentry%253Dplll' },
        { src: "assets/imgs/낙산공원/카페/라뚜셩트/3.jpeg", description: '라뚜셩트', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EC%B9%B4%ED%8E%98/place/1561424368?c=15,0,0,0,dh&placePath=%3Fentry%253Dplll' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 10) {
      images = [
        { src: "assets/imgs/낙산공원/카페/리히터/4.jpeg", description: '리히터', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EC%B9%B4%ED%8E%98/place/1009330947?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/낙산공원/카페/리히터/5.jpeg", description: '리히터', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EC%B9%B4%ED%8E%98/place/1009330947?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/낙산공원/카페/리히터/1.jpeg", description: '리히터', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EC%B9%B4%ED%8E%98/place/1009330947?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/낙산공원/카페/리히터/2.jpeg", description: '리히터', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EC%B9%B4%ED%8E%98/place/1009330947?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/낙산공원/카페/리히터/3.jpeg", description: '리히터', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EC%B9%B4%ED%8E%98/place/1009330947?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 11) {
      images = [
        { src: "assets/imgs/낙산공원/카페/산1-1/4.jpeg", description: '산1-1', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EC%B9%B4%ED%8E%98/place/1007476698?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/낙산공원/카페/산1-1/5.jpeg", description: '산1-1', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EC%B9%B4%ED%8E%98/place/1007476698?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/낙산공원/카페/산1-1/1.jpeg", description: '산1-1', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EC%B9%B4%ED%8E%98/place/1007476698?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/낙산공원/카페/산1-1/2.jpeg", description: '산1-1', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EC%B9%B4%ED%8E%98/place/1007476698?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/낙산공원/카페/산1-1/3.jpeg", description: '산1-1', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EC%B9%B4%ED%8E%98/place/1007476698?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' }
  
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 12) {
      images = [
        { src: "assets/imgs/낙산공원/카페/카페다오/4.jpeg", description: '카페다오', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EC%B9%B4%ED%8E%98/place/13472558?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/낙산공원/카페/카페다오/5.jpeg", description: '카페다오', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EC%B9%B4%ED%8E%98/place/13472558?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/낙산공원/카페/카페다오/1.jpeg", description: '카페다오', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EC%B9%B4%ED%8E%98/place/13472558?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/낙산공원/카페/카페다오/2.jpeg", description: '카페다오', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EC%B9%B4%ED%8E%98/place/13472558?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/낙산공원/카페/카페다오/3.jpeg", description: '카페다오', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EC%B9%B4%ED%8E%98/place/13472558?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 13) {
      images = [
        { src: "assets/imgs/낙산공원/놀거리/위에트/2.jpeg", description: '위에트', link: 'https://map.naver.com/v5/entry/place/35221983?c=15,0,0,0,dh&isCorrectAnswer=truel' },
        { src: "assets/imgs/낙산공원/놀거리/위에트/3.jpeg", description: '위에트', link: 'https://map.naver.com/v5/entry/place/35221983?c=15,0,0,0,dh&isCorrectAnswer=truel' },
        { src: "assets/imgs/낙산공원/놀거리/위에트/4.jpeg", description: '위에트', link: 'https://map.naver.com/v5/entry/place/35221983?c=15,0,0,0,dh&isCorrectAnswer=truel' },
        { src: "assets/imgs/낙산공원/놀거리/위에트/5.jpeg", description: '위에트', link: 'https://map.naver.com/v5/entry/place/35221983?c=15,0,0,0,dh&isCorrectAnswer=truel' },
        { src: "assets/imgs/낙산공원/놀거리/위에트/1.jpeg", description: '위에트', link: 'https://map.naver.com/v5/entry/place/35221983?c=15,0,0,0,dh&isCorrectAnswer=truel' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 14) {
      images = [
        { src: "assets/imgs/낙산공원/놀거리/이화마을/2.jpeg", description: '이화마을', link: 'https://map.naver.com/v5/search/%EC%9D%B4%ED%99%94%EB%A7%88%EC%9D%84/place/13519224?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/낙산공원/놀거리/이화마을/3.jpeg", description: '이화마을', link: 'https://map.naver.com/v5/search/%EC%9D%B4%ED%99%94%EB%A7%88%EC%9D%84/place/13519224?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/낙산공원/놀거리/이화마을/4.jpeg", description: '이화마을', link: 'https://map.naver.com/v5/search/%EC%9D%B4%ED%99%94%EB%A7%88%EC%9D%84/place/13519224?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/낙산공원/놀거리/이화마을/5.jpeg", description: '이화마을', link: 'https://map.naver.com/v5/search/%EC%9D%B4%ED%99%94%EB%A7%88%EC%9D%84/place/13519224?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/낙산공원/놀거리/이화마을/1.jpeg", description: '이화마을', link: 'https://map.naver.com/v5/search/%EC%9D%B4%ED%99%94%EB%A7%88%EC%9D%84/place/13519224?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 15) {
      images = [
        { src: "assets/imgs/낙산공원/놀거리/콩툰 대학로점/2.jpeg", description: '콩툰 대학로점', link: 'https://map.naver.com/v5/search/%EC%BD%A9%ED%88%B0%20%EB%8C%80%ED%95%99%EB%A1%9C%EC%A0%90/place/532014087?c=15,0,0,0,dh&isCorrectAnswer=truel' },
        { src: "assets/imgs/낙산공원/놀거리/콩툰 대학로점/3.jpeg", description: '콩툰 대학로점', link: 'https://map.naver.com/v5/search/%EC%BD%A9%ED%88%B0%20%EB%8C%80%ED%95%99%EB%A1%9C%EC%A0%90/place/532014087?c=15,0,0,0,dh&isCorrectAnswer=truel' },
        { src: "assets/imgs/낙산공원/놀거리/콩툰 대학로점/4.jpeg", description: '콩툰 대학로점', link: 'https://map.naver.com/v5/search/%EC%BD%A9%ED%88%B0%20%EB%8C%80%ED%95%99%EB%A1%9C%EC%A0%90/place/532014087?c=15,0,0,0,dh&isCorrectAnswer=truel' },
        { src: "assets/imgs/낙산공원/놀거리/콩툰 대학로점/5.jpeg", description: '콩툰 대학로점', link: 'https://map.naver.com/v5/search/%EC%BD%A9%ED%88%B0%20%EB%8C%80%ED%95%99%EB%A1%9C%EC%A0%90/place/532014087?c=15,0,0,0,dh&isCorrectAnswer=truel' },
        { src: "assets/imgs/낙산공원/놀거리/콩툰 대학로점/1.jpeg", description: '콩툰 대학로점', link: 'https://map.naver.com/v5/search/%EC%BD%A9%ED%88%B0%20%EB%8C%80%ED%95%99%EB%A1%9C%EC%A0%90/place/532014087?c=15,0,0,0,dh&isCorrectAnswer=truel' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 16) {
      images = [
        { src: "assets/imgs/낙산공원/놀거리/벌툰 인더스트리얼 대학로점/2.jpeg", description: '벌툰 인더스트리얼 대학로점', link: 'https://map.naver.com/v5/search/%EB%B2%8C%ED%88%B0%20%EC%9D%B8%EB%8D%94%EC%8A%A4%ED%8A%B8%EB%A6%AC%EC%96%BC%20%EB%8C%80%ED%95%99%EB%A1%9C%EC%A0%90/place/1087317637?c=15,0,0,0,dh&isCorrectAnswer=true' },
        { src: "assets/imgs/낙산공원/놀거리/벌툰 인더스트리얼 대학로점/3.jpeg", description: '벌툰 인더스트리얼 대학로점', link: 'https://map.naver.com/v5/search/%EB%B2%8C%ED%88%B0%20%EC%9D%B8%EB%8D%94%EC%8A%A4%ED%8A%B8%EB%A6%AC%EC%96%BC%20%EB%8C%80%ED%95%99%EB%A1%9C%EC%A0%90/place/1087317637?c=15,0,0,0,dh&isCorrectAnswer=true' },
        { src: "assets/imgs/낙산공원/놀거리/벌툰 인더스트리얼 대학로점/4.jpeg", description: '벌툰 인더스트리얼 대학로점', link: 'https://map.naver.com/v5/search/%EB%B2%8C%ED%88%B0%20%EC%9D%B8%EB%8D%94%EC%8A%A4%ED%8A%B8%EB%A6%AC%EC%96%BC%20%EB%8C%80%ED%95%99%EB%A1%9C%EC%A0%90/place/1087317637?c=15,0,0,0,dh&isCorrectAnswer=true' },
        { src: "assets/imgs/낙산공원/놀거리/벌툰 인더스트리얼 대학로점/5.jpeg", description: '벌툰 인더스트리얼 대학로점', link: 'https://map.naver.com/v5/search/%EB%B2%8C%ED%88%B0%20%EC%9D%B8%EB%8D%94%EC%8A%A4%ED%8A%B8%EB%A6%AC%EC%96%BC%20%EB%8C%80%ED%95%99%EB%A1%9C%EC%A0%90/place/1087317637?c=15,0,0,0,dh&isCorrectAnswer=true' },
        { src: "assets/imgs/낙산공원/놀거리/벌툰 인더스트리얼 대학로점/1.jpeg", description: '벌툰 인더스트리얼 대학로점', link: 'https://map.naver.com/v5/search/%EB%B2%8C%ED%88%B0%20%EC%9D%B8%EB%8D%94%EC%8A%A4%ED%8A%B8%EB%A6%AC%EC%96%BC%20%EB%8C%80%ED%95%99%EB%A1%9C%EC%A0%90/place/1087317637?c=15,0,0,0,dh&isCorrectAnswer=true' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 17) {
      images = [
        { src: "assets/imgs/낙산공원/놀거리/비밀의화원 대학로점/2.jpeg", description: '비밀의화원 대학로점', link: 'https://map.naver.com/v5/entry/place/1625220556?lng=127.0021374&lat=37.5828930&placePath=%2Fhome%3Fentry=plt&c=15,0,0,0,dh' },
        { src: "assets/imgs/낙산공원/놀거리/비밀의화원 대학로점/3.jpeg", description: '비밀의화원 대학로점', link: 'https://map.naver.com/v5/entry/place/1625220556?lng=127.0021374&lat=37.5828930&placePath=%2Fhome%3Fentry=plt&c=15,0,0,0,dh' },
        { src: "assets/imgs/낙산공원/놀거리/비밀의화원 대학로점/4.jpeg", description: '비밀의화원 대학로점', link: 'https://map.naver.com/v5/entry/place/1625220556?lng=127.0021374&lat=37.5828930&placePath=%2Fhome%3Fentry=plt&c=15,0,0,0,dh' },
        { src: "assets/imgs/낙산공원/놀거리/비밀의화원 대학로점/5.jpeg", description: '비밀의화원 대학로점', link: 'https://map.naver.com/v5/entry/place/1625220556?lng=127.0021374&lat=37.5828930&placePath=%2Fhome%3Fentry=plt&c=15,0,0,0,dh' },
        { src: "assets/imgs/낙산공원/놀거리/비밀의화원 대학로점/1.jpeg", description: '비밀의화원 대학로점', link: 'https://map.naver.com/v5/entry/place/1625220556?lng=127.0021374&lat=37.5828930&placePath=%2Fhome%3Fentry=plt&c=15,0,0,0,dh' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 18) {
      images = [
        { src: "assets/imgs/낙산공원/놀거리/셜록홈즈 대학로점/2.jpeg", description: '셜록홈즈 대학로점', link: 'https://map.naver.com/v5/search/%EC%85%9C%EB%A1%9D%ED%99%88%EC%A6%88%20%EB%8C%80%ED%95%99%EB%A1%9C%EC%A0%90/place/1907056844?c=15,0,0,0,dh&isCorrectAnswer=true' },
        { src: "assets/imgs/낙산공원/놀거리/셜록홈즈 대학로점/3.jpeg", description: '셜록홈즈 대학로점', link: 'https://map.naver.com/v5/search/%EC%85%9C%EB%A1%9D%ED%99%88%EC%A6%88%20%EB%8C%80%ED%95%99%EB%A1%9C%EC%A0%90/place/1907056844?c=15,0,0,0,dh&isCorrectAnswer=true' },
        { src: "assets/imgs/낙산공원/놀거리/셜록홈즈 대학로점/4.jpeg", description: '셜록홈즈 대학로점', link: 'https://map.naver.com/v5/search/%EC%85%9C%EB%A1%9D%ED%99%88%EC%A6%88%20%EB%8C%80%ED%95%99%EB%A1%9C%EC%A0%90/place/1907056844?c=15,0,0,0,dh&isCorrectAnswer=true' },
        { src: "assets/imgs/낙산공원/놀거리/셜록홈즈 대학로점/5.jpeg", description: '셜록홈즈 대학로점', link: 'https://map.naver.com/v5/search/%EC%85%9C%EB%A1%9D%ED%99%88%EC%A6%88%20%EB%8C%80%ED%95%99%EB%A1%9C%EC%A0%90/place/1907056844?c=15,0,0,0,dh&isCorrectAnswer=true' },
        { src: "assets/imgs/낙산공원/놀거리/셜록홈즈 대학로점/1.jpeg", description: '셜록홈즈 대학로점', link: 'https://map.naver.com/v5/search/%EC%85%9C%EB%A1%9D%ED%99%88%EC%A6%88%20%EB%8C%80%ED%95%99%EB%A1%9C%EC%A0%90/place/1907056844?c=15,0,0,0,dh&isCorrectAnswer=true' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 19) {
      images = [
        { src: 'assets/imgs/덕수궁돌담길/식당/광화문 미진/광화문 미진_4.jpeg', description: '광화문 미진', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%A7%9B%EC%A7%91/place/11680222?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: 'assets/imgs/덕수궁돌담길/식당/광화문 미진/광화문 미진_5.jpeg', description: '광화문 미진', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%A7%9B%EC%A7%91/place/11680222?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: 'assets/imgs/덕수궁돌담길/식당/광화문 미진/광화문 미진_1.jpeg', description: '광화문 미진', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%A7%9B%EC%A7%91/place/11680222?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: 'assets/imgs/덕수궁돌담길/식당/광화문 미진/광화문 미진_2.jpeg', description: '광화문 미진', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%A7%9B%EC%A7%91/place/11680222?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: 'assets/imgs/덕수궁돌담길/식당/광화문 미진/광화문 미진_3.jpeg', description: '광화문 미진', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%A7%9B%EC%A7%91/place/11680222?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 20) {
      images = [
        { src: "assets/imgs/덕수궁돌담길/식당/광화문특고기/광화문특고기_4.jpeg", description: '광화문특고기', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%A7%9B%EC%A7%91/place/236366466?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/덕수궁돌담길/식당/광화문특고기/광화문특고기_5.jpeg", description: '광화문특고기', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%A7%9B%EC%A7%91/place/236366466?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/덕수궁돌담길/식당/광화문특고기/광화문특고기_1.jpeg", description: '광화문특고기', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%A7%9B%EC%A7%91/place/236366466?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/덕수궁돌담길/식당/광화문특고기/광화문특고기_2.jpeg", description: '광화문특고기', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%A7%9B%EC%A7%91/place/236366466?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/덕수궁돌담길/식당/광화문특고기/광화문특고기_3.jpeg", description: '광화문특고기', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%A7%9B%EC%A7%91/place/236366466?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 21) {
      images = [
        { src: "assets/imgs/덕수궁돌담길/식당/명동교자 본점/명동교자 본점_4.jpeg", description: '명동교자 본점', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%A7%9B%EC%A7%91/place/11592650?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/덕수궁돌담길/식당/명동교자 본점/명동교자 본점_5.jpeg", description: '명동교자 본점', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%A7%9B%EC%A7%91/place/11592650?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/덕수궁돌담길/식당/명동교자 본점/명동교자 본점_1.jpeg", description: '명동교자 본점', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%A7%9B%EC%A7%91/place/11592650?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/덕수궁돌담길/식당/명동교자 본점/명동교자 본점_2.jpeg", description: '명동교자 본점', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%A7%9B%EC%A7%91/place/11592650?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/덕수궁돌담길/식당/명동교자 본점/명동교자 본점_3.jpeg", description: '명동교자 본점', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%A7%9B%EC%A7%91/place/11592650?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 22) {
      images = [
        { src: "assets/imgs/덕수궁돌담길/식당/닥터로빈 광화문점/닥터로빈 광화문점_4.jpeg", description: '닥터로빈 광화문점', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%A7%9B%EC%A7%91/place/36992330?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/덕수궁돌담길/식당/닥터로빈 광화문점/닥터로빈 광화문점_5.jpeg", description: '닥터로빈 광화문점', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%A7%9B%EC%A7%91/place/36992330?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/덕수궁돌담길/식당/닥터로빈 광화문점/닥터로빈 광화문점_1.jpeg", description: '닥터로빈 광화문점', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%A7%9B%EC%A7%91/place/36992330?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/덕수궁돌담길/식당/닥터로빈 광화문점/닥터로빈 광화문점_2.jpeg", description: '닥터로빈 광화문점', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%A7%9B%EC%A7%91/place/36992330?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/덕수궁돌담길/식당/닥터로빈 광화문점/닥터로빈 광화문점_3.jpeg", description: '닥터로빈 광화문점', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%A7%9B%EC%A7%91/place/36992330?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 23) {
      images = [
        { src: "assets/imgs/덕수궁돌담길/식당/만족오향족발 시청점/만족오향족발 시청점_4.jpeg", description: '만족오향족발 시청점', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%A7%9B%EC%A7%91/place/11718044?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/덕수궁돌담길/식당/만족오향족발 시청점/만족오향족발 시청점_5.jpeg", description: '만족오향족발 시청점', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%A7%9B%EC%A7%91/place/11718044?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/덕수궁돌담길/식당/만족오향족발 시청점/만족오향족발 시청점_1.jpeg", description: '만족오향족발 시청점', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%A7%9B%EC%A7%91/place/11718044?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/덕수궁돌담길/식당/만족오향족발 시청점/만족오향족발 시청점_2.jpeg", description: '만족오향족발 시청점', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%A7%9B%EC%A7%91/place/11718044?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/덕수궁돌담길/식당/만족오향족발 시청점/만족오향족발 시청점_3.jpeg", description: '만족오향족발 시청점', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%A7%9B%EC%A7%91/place/11718044?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 24) {
      images = [
        { src: "assets/imgs/덕수궁돌담길/식당/유림면/유림면_3.jpeg", description: '유림면', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%A7%9B%EC%A7%91/place/11725657?c=15,0,0,0,dh&placePath=%3Fentry%253Dplll' },
        { src: "assets/imgs/덕수궁돌담길/식당/유림면/유림면_4.jpeg", description: '유림면', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%A7%9B%EC%A7%91/place/11725657?c=15,0,0,0,dh&placePath=%3Fentry%253Dplll' },
        { src: "assets/imgs/덕수궁돌담길/식당/유림면/유림면_5.jpeg", description: '유림면', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%A7%9B%EC%A7%91/place/11725657?c=15,0,0,0,dh&placePath=%3Fentry%253Dplll' },
        { src: "assets/imgs/덕수궁돌담길/식당/유림면/유림면_1.jpeg", description: '유림면', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%A7%9B%EC%A7%91/place/11725657?c=15,0,0,0,dh&placePath=%3Fentry%253Dplll' },
        { src: "assets/imgs/덕수궁돌담길/식당/유림면/유림면_2.jpeg", description: '유림면', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%A7%9B%EC%A7%91/place/11725657?c=15,0,0,0,dh&placePath=%3Fentry%253Dplll' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 25) {
      images = [
        { src: "assets/imgs/덕수궁돌담길/카페/노우즈안국/노우즈안국_4.jpeg", description: '노우즈안국', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%8F%8C%EB%8B%B4%EA%B8%B8%20%EC%B9%B4%ED%8E%98/place/1620383625?placePath=%3Fentry%253Dpll&c=15,0,0,0,dhl' },
        { src: "assets/imgs/덕수궁돌담길/카페/노우즈안국/노우즈안국_5.jpeg", description: '노우즈안국', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%8F%8C%EB%8B%B4%EA%B8%B8%20%EC%B9%B4%ED%8E%98/place/1620383625?placePath=%3Fentry%253Dpll&c=15,0,0,0,dhl' },
        { src: "assets/imgs/덕수궁돌담길/카페/노우즈안국/노우즈안국_1.jpeg", description: '노우즈안국', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%8F%8C%EB%8B%B4%EA%B8%B8%20%EC%B9%B4%ED%8E%98/place/1620383625?placePath=%3Fentry%253Dpll&c=15,0,0,0,dhl' },
        { src: "assets/imgs/덕수궁돌담길/카페/노우즈안국/노우즈안국_2.jpeg", description: '노우즈안국', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%8F%8C%EB%8B%B4%EA%B8%B8%20%EC%B9%B4%ED%8E%98/place/1620383625?placePath=%3Fentry%253Dpll&c=15,0,0,0,dhl' },
        { src: "assets/imgs/덕수궁돌담길/카페/노우즈안국/노우즈안국_3.jpeg", description: '노우즈안국', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%8F%8C%EB%8B%B4%EA%B8%B8%20%EC%B9%B4%ED%8E%98/place/1620383625?placePath=%3Fentry%253Dpll&c=15,0,0,0,dhl' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 26) {
      images = [
        { src: "assets/imgs/덕수궁돌담길/카페/더 스팟 패뷸러스/더 스팟 패뷸러스_4.jpeg", description: '더 스팟 패뷸러스', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%8F%8C%EB%8B%B4%EA%B8%B8%20%EC%B9%B4%ED%8E%98/place/181633326?placePath=%3Fentry%253Dpll&c=15,0,0,0,dh' },
        { src: "assets/imgs/덕수궁돌담길/카페/더 스팟 패뷸러스/더 스팟 패뷸러스_5.jpeg", description: '더 스팟 패뷸러스', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%8F%8C%EB%8B%B4%EA%B8%B8%20%EC%B9%B4%ED%8E%98/place/181633326?placePath=%3Fentry%253Dpll&c=15,0,0,0,dh' },
        { src: "assets/imgs/덕수궁돌담길/카페/더 스팟 패뷸러스/더 스팟 패뷸러스_1.jpeg", description: '더 스팟 패뷸러스', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%8F%8C%EB%8B%B4%EA%B8%B8%20%EC%B9%B4%ED%8E%98/place/181633326?placePath=%3Fentry%253Dpll&c=15,0,0,0,dh' },
        { src: "assets/imgs/덕수궁돌담길/카페/더 스팟 패뷸러스/더 스팟 패뷸러스_2.jpeg", description: '더 스팟 패뷸러스', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%8F%8C%EB%8B%B4%EA%B8%B8%20%EC%B9%B4%ED%8E%98/place/181633326?placePath=%3Fentry%253Dpll&c=15,0,0,0,dh' },
        { src: "assets/imgs/덕수궁돌담길/카페/더 스팟 패뷸러스/더 스팟 패뷸러스_3.jpeg", description: '더 스팟 패뷸러스', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%8F%8C%EB%8B%B4%EA%B8%B8%20%EC%B9%B4%ED%8E%98/place/181633326?placePath=%3Fentry%253Dpll&c=15,0,0,0,dh' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 27) {
      images = [
        { src: "assets/imgs/덕수궁돌담길/카페/덕수궁 리에제와플/덕수궁 리에제와플_4.jpeg", description: '덕수궁 리에제와플', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%8F%8C%EB%8B%B4%EA%B8%B8%20%EC%B9%B4%ED%8E%98/place/21627288?placePath=%3Fentry=pll&c=15,0,0,0,dh' },
        { src: "assets/imgs/덕수궁돌담길/카페/덕수궁 리에제와플/덕수궁 리에제와플_5.jpeg", description: '덕수궁 리에제와플', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%8F%8C%EB%8B%B4%EA%B8%B8%20%EC%B9%B4%ED%8E%98/place/21627288?placePath=%3Fentry=pll&c=15,0,0,0,dh' },
        { src: "assets/imgs/덕수궁돌담길/카페/덕수궁 리에제와플/덕수궁 리에제와플_1.jpeg", description: '덕수궁 리에제와플', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%8F%8C%EB%8B%B4%EA%B8%B8%20%EC%B9%B4%ED%8E%98/place/21627288?placePath=%3Fentry=pll&c=15,0,0,0,dh' },
        { src: "assets/imgs/덕수궁돌담길/카페/덕수궁 리에제와플/덕수궁 리에제와플_2.jpeg", description: '덕수궁 리에제와플', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%8F%8C%EB%8B%B4%EA%B8%B8%20%EC%B9%B4%ED%8E%98/place/21627288?placePath=%3Fentry=pll&c=15,0,0,0,dh' },
        { src: "assets/imgs/덕수궁돌담길/카페/덕수궁 리에제와플/덕수궁 리에제와플_3.jpeg", description: '덕수궁 리에제와플', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%8F%8C%EB%8B%B4%EA%B8%B8%20%EC%B9%B4%ED%8E%98/place/21627288?placePath=%3Fentry=pll&c=15,0,0,0,dh' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 28) {
      images = [
        { src: "assets/imgs/덕수궁돌담길/카페/도토리가든/도토리가든_4.jpeg", description: '도토리가든', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%8F%8C%EB%8B%B4%EA%B8%B8%20%EC%B9%B4%ED%8E%98/place/1198045151?placePath=%3Fentry%253Dpll&c=15,0,0,0,dh' },
        { src: "assets/imgs/덕수궁돌담길/카페/도토리가든/도토리가든_5.jpeg", description: '도토리가든', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%8F%8C%EB%8B%B4%EA%B8%B8%20%EC%B9%B4%ED%8E%98/place/1198045151?placePath=%3Fentry%253Dpll&c=15,0,0,0,dh' },
        { src: "assets/imgs/덕수궁돌담길/카페/도토리가든/도토리가든_1.jpeg", description: '도토리가든', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%8F%8C%EB%8B%B4%EA%B8%B8%20%EC%B9%B4%ED%8E%98/place/1198045151?placePath=%3Fentry%253Dpll&c=15,0,0,0,dh' },
        { src: "assets/imgs/덕수궁돌담길/카페/도토리가든/도토리가든_2.jpeg", description: '도토리가든', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%8F%8C%EB%8B%B4%EA%B8%B8%20%EC%B9%B4%ED%8E%98/place/1198045151?placePath=%3Fentry%253Dpll&c=15,0,0,0,dh' },
        { src: "assets/imgs/덕수궁돌담길/카페/도토리가든/도토리가든_3.jpeg", description: '도토리가든', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%8F%8C%EB%8B%B4%EA%B8%B8%20%EC%B9%B4%ED%8E%98/place/1198045151?placePath=%3Fentry%253Dpll&c=15,0,0,0,dh' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 29) {
      images = [
        { src: "assets/imgs/덕수궁돌담길/카페/르풀/르풀_4.jpeg", description: '르풀', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%8F%8C%EB%8B%B4%EA%B8%B8%20%EC%B9%B4%ED%8E%98/place/31583286?placePath=%3Fentry%253Dpll&c=15,0,0,0,dh' },
        { src: "assets/imgs/덕수궁돌담길/카페/르풀/르풀_5.jpeg", description: '르풀', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%8F%8C%EB%8B%B4%EA%B8%B8%20%EC%B9%B4%ED%8E%98/place/31583286?placePath=%3Fentry%253Dpll&c=15,0,0,0,dh' },
        { src: "assets/imgs/덕수궁돌담길/카페/르풀/르풀_1.jpeg", description: '르풀', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%8F%8C%EB%8B%B4%EA%B8%B8%20%EC%B9%B4%ED%8E%98/place/31583286?placePath=%3Fentry%253Dpll&c=15,0,0,0,dh' },
        { src: "assets/imgs/덕수궁돌담길/카페/르풀/르풀_2.jpeg", description: '르풀', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%8F%8C%EB%8B%B4%EA%B8%B8%20%EC%B9%B4%ED%8E%98/place/31583286?placePath=%3Fentry%253Dpll&c=15,0,0,0,dh' },
        { src: "assets/imgs/덕수궁돌담길/카페/르풀/르풀_3.jpeg", description: '르풀', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%8F%8C%EB%8B%B4%EA%B8%B8%20%EC%B9%B4%ED%8E%98/place/31583286?placePath=%3Fentry%253Dpll&c=15,0,0,0,dh' }
  
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 30) {
      images = [
        { src: "assets/imgs/덕수궁돌담길/카페/적당/적당_4.jpeg", description: '적당', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%8F%8C%EB%8B%B4%EA%B8%B8%20%EC%B9%B4%ED%8E%98/place/1250997417?placePath=%3Fentry%253Dpll&c=15,0,0,0,dh' },
        { src: "assets/imgs/덕수궁돌담길/카페/적당/적당_5.jpeg", description: '적당', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%8F%8C%EB%8B%B4%EA%B8%B8%20%EC%B9%B4%ED%8E%98/place/1250997417?placePath=%3Fentry%253Dpll&c=15,0,0,0,dh' },
        { src: "assets/imgs/덕수궁돌담길/카페/적당/적당_1.jpeg", description: '적당', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%8F%8C%EB%8B%B4%EA%B8%B8%20%EC%B9%B4%ED%8E%98/place/1250997417?placePath=%3Fentry%253Dpll&c=15,0,0,0,dh' },
        { src: "assets/imgs/덕수궁돌담길/카페/적당/적당_2.jpeg", description: '적당', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%8F%8C%EB%8B%B4%EA%B8%B8%20%EC%B9%B4%ED%8E%98/place/1250997417?placePath=%3Fentry%253Dpll&c=15,0,0,0,dh' },
        { src: "assets/imgs/덕수궁돌담길/카페/적당/적당_3.jpeg", description: '적당', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%8F%8C%EB%8B%B4%EA%B8%B8%20%EC%B9%B4%ED%8E%98/place/1250997417?placePath=%3Fentry%253Dpll&c=15,0,0,0,dh' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 31) {
      images = [
        { src: "assets/imgs/덕수궁돌담길/놀거리/덕수궁/덕수궁_2.jpeg", description: '덕수궁', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81/place/11571730?c=6,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/덕수궁돌담길/놀거리/덕수궁/덕수궁_3.jpeg", description: '덕수궁', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81/place/11571730?c=6,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/덕수궁돌담길/놀거리/덕수궁/덕수궁_4.jpeg", description: '덕수궁', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81/place/11571730?c=6,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/덕수궁돌담길/놀거리/덕수궁/덕수궁_5.jpeg", description: '덕수궁', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81/place/11571730?c=6,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/덕수궁돌담길/놀거리/덕수궁/덕수궁_1.jpeg", description: '덕수궁', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81/place/11571730?c=6,0,0,0,dh&placePath=%3Fentry%253Dbmp' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 32) {
      images = [
        { src: "assets/imgs/덕수궁돌담길/놀거리/경복궁/경복궁_2.jpeg", description: '경복궁', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EB%B3%B5%EA%B6%81/place/11571707?entry=plt&c=13,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/덕수궁돌담길/놀거리/경복궁/경복궁_3.jpeg", description: '경복궁', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EB%B3%B5%EA%B6%81/place/11571707?entry=plt&c=13,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/덕수궁돌담길/놀거리/경복궁/경복궁_4.jpeg", description: '경복궁', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EB%B3%B5%EA%B6%81/place/11571707?entry=plt&c=13,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/덕수궁돌담길/놀거리/경복궁/경복궁_5.jpeg", description: '경복궁', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EB%B3%B5%EA%B6%81/place/11571707?entry=plt&c=13,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/덕수궁돌담길/놀거리/경복궁/경복궁_1.jpeg", description: '경복궁', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EB%B3%B5%EA%B6%81/place/11571707?entry=plt&c=13,0,0,0,dh&placePath=%3Fentry%253Dbmp' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 33) {
      images = [
        { src: "assets/imgs/덕수궁돌담길/놀거리/쌈지길/쌈지길_2.jpeg", description: '쌈지길', link: 'https://map.naver.com/v5/search/%EC%8C%88%EC%A7%80%EA%B8%B8/place/11859069?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/덕수궁돌담길/놀거리/쌈지길/쌈지길_3.jpeg", description: '쌈지길', link: 'https://map.naver.com/v5/search/%EC%8C%88%EC%A7%80%EA%B8%B8/place/11859069?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/덕수궁돌담길/놀거리/쌈지길/쌈지길_4.jpeg", description: '쌈지길', link: 'https://map.naver.com/v5/search/%EC%8C%88%EC%A7%80%EA%B8%B8/place/11859069?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/덕수궁돌담길/놀거리/쌈지길/쌈지길_5.jpeg", description: '쌈지길', link: 'https://map.naver.com/v5/search/%EC%8C%88%EC%A7%80%EA%B8%B8/place/11859069?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/덕수궁돌담길/놀거리/쌈지길/쌈지길_1.jpeg", description: '쌈지길', link: 'https://map.naver.com/v5/search/%EC%8C%88%EC%A7%80%EA%B8%B8/place/11859069?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 34) {
      images = [
        { src: "assets/imgs/덕수궁돌담길/놀거리/서울역사박물관/서울역사박물관_2.jpeg", description: '서울역사박물관', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%97%AD%EC%82%AC%EB%B0%95%EB%AC%BC%EA%B4%80/place/11784657?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/덕수궁돌담길/놀거리/서울역사박물관/서울역사박물관_3.jpeg", description: '서울역사박물관', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%97%AD%EC%82%AC%EB%B0%95%EB%AC%BC%EA%B4%80/place/11784657?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/덕수궁돌담길/놀거리/서울역사박물관/서울역사박물관_4.jpeg", description: '서울역사박물관', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%97%AD%EC%82%AC%EB%B0%95%EB%AC%BC%EA%B4%80/place/11784657?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/덕수궁돌담길/놀거리/서울역사박물관/서울역사박물관_5.jpeg", description: '서울역사박물관', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%97%AD%EC%82%AC%EB%B0%95%EB%AC%BC%EA%B4%80/place/11784657?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/덕수궁돌담길/놀거리/서울역사박물관/서울역사박물관_1.jpeg", description: '서울역사박물관', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%97%AD%EC%82%AC%EB%B0%95%EB%AC%BC%EA%B4%80/place/11784657?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 35) {
      images = [
        { src: "assets/imgs/덕수궁돌담길/놀거리/청계광장/청계광장_2.jpeg", description: '청계광장', link: 'https://map.naver.com/v5/search/%EC%B2%AD%EA%B3%84%EA%B4%91%EC%9E%A5/place/13543936?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/덕수궁돌담길/놀거리/청계광장/청계광장_3.jpeg", description: '청계광장', link: 'https://map.naver.com/v5/search/%EC%B2%AD%EA%B3%84%EA%B4%91%EC%9E%A5/place/13543936?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/덕수궁돌담길/놀거리/청계광장/청계광장_4.jpeg", description: '청계광장', link: 'https://map.naver.com/v5/search/%EC%B2%AD%EA%B3%84%EA%B4%91%EC%9E%A5/place/13543936?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/덕수궁돌담길/놀거리/청계광장/청계광장_5.jpeg", description: '청계광장', link: 'https://map.naver.com/v5/search/%EC%B2%AD%EA%B3%84%EA%B4%91%EC%9E%A5/place/13543936?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/덕수궁돌담길/놀거리/청계광장/청계광장_1.jpeg", description: '청계광장', link: 'https://map.naver.com/v5/search/%EC%B2%AD%EA%B3%84%EA%B4%91%EC%9E%A5/place/13543936?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 36) {
      images = [
        { src: "assets/imgs/덕수궁돌담길/놀거리/서울시립미술관/서울시립미술관_2.jpeg", description: '서울시립미술관', link: 'https://map.naver.com/v5/entry/place/12125053?lng=126.9737733&lat=37.5642066&placePath=%2F&entry=plt&c=15,0,0,0,dh' },
        { src: "assets/imgs/덕수궁돌담길/놀거리/서울시립미술관/서울시립미술관_3.jpeg", description: '서울시립미술관', link: 'https://map.naver.com/v5/entry/place/12125053?lng=126.9737733&lat=37.5642066&placePath=%2F&entry=plt&c=15,0,0,0,dh' },
        { src: "assets/imgs/덕수궁돌담길/놀거리/서울시립미술관/서울시립미술관_4.jpeg", description: '서울시립미술관', link: 'https://map.naver.com/v5/entry/place/12125053?lng=126.9737733&lat=37.5642066&placePath=%2F&entry=plt&c=15,0,0,0,dh' },
        { src: "assets/imgs/덕수궁돌담길/놀거리/서울시립미술관/서울시립미술관_5.jpeg", description: '서울시립미술관', link: 'https://map.naver.com/v5/entry/place/12125053?lng=126.9737733&lat=37.5642066&placePath=%2F&entry=plt&c=15,0,0,0,dh' },
        { src: "assets/imgs/덕수궁돌담길/놀거리/서울시립미술관/서울시립미술관_1.jpeg", description: '서울시립미술관', link: 'https://map.naver.com/v5/entry/place/12125053?lng=126.9737733&lat=37.5642066&placePath=%2F&entry=plt&c=15,0,0,0,dh' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 37) {
      images = [
        { src: 'assets/imgs/서울한양도성길/식당/나래함박/나래함박2.jpg', description: '나래함박', link: 'https://naver.me/xuCVwIw5' },
        { src: 'assets/imgs/서울한양도성길/식당/나래함박/나래함박3.jpg', description: '나래함박', link: 'https://naver.me/xuCVwIw5' },
        { src: 'assets/imgs/서울한양도성길/식당/나래함박/나래함박4.jpg', description: '나래함박', link: 'https://naver.me/xuCVwIw5' },
        { src: 'assets/imgs/서울한양도성길/식당/나래함박/나래함박5.jpg', description: '나래함박', link: 'https://naver.me/xuCVwIw5' },
        { src: 'assets/imgs/서울한양도성길/식당/나래함박/나래함박1.jpg', description: '나래함박', link: 'https://naver.me/xuCVwIw5' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 38) {
      images = [
        { src: "assets/imgs/서울한양도성길/식당/머노까머나 대학로점/머노까머나2.jpg", description: '머노까머나 대학로점', link: 'https://naver.me/xM28uXc9' },
        { src: "assets/imgs/서울한양도성길/식당/머노까머나 대학로점/머노까머나3.jpg", description: '머노까머나 대학로점', link: 'https://naver.me/xM28uXc9' },
        { src: "assets/imgs/서울한양도성길/식당/머노까머나 대학로점/머노까머나4.jpg", description: '머노까머나 대학로점', link: 'https://naver.me/xM28uXc9' },
        { src: "assets/imgs/서울한양도성길/식당/머노까머나 대학로점/머노까머나5.jpg", description: '머노까머나 대학로점', link: 'https://naver.me/xM28uXc9' },
        { src: "assets/imgs/서울한양도성길/식당/머노까머나 대학로점/머노까머나1.jpg", description: '머노까머나 대학로점', link: 'https://naver.me/xM28uXc9' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 39) {
      images = [
        { src: "assets/imgs/서울한양도성길/식당/메밀향그집/메밀향그집2.jpg", description: '메밀향그집', link: 'https://naver.me/xYQT0rSr' },
        { src: "assets/imgs/서울한양도성길/식당/메밀향그집/메밀향그집3.jpg", description: '메밀향그집', link: 'https://naver.me/xYQT0rSr' },
        { src: "assets/imgs/서울한양도성길/식당/메밀향그집/메밀향그집4.jpg", description: '메밀향그집', link: 'https://naver.me/xYQT0rSr' },
        { src: "assets/imgs/서울한양도성길/식당/메밀향그집/메밀향그집5.jpg", description: '메밀향그집', link: 'https://naver.me/xYQT0rSr' },
        { src: "assets/imgs/서울한양도성길/식당/메밀향그집/메밀향그집1.jpg", description: '메밀향그집', link: 'https://naver.me/xYQT0rSr' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 40) {
      images = [
        { src: "assets/imgs/서울한양도성길/식당/봄의정원 성신여대점/봄의정원2.jpg", description: '봄의정원 성신여대점', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%ED%95%9C%EC%96%91%EB%8F%84%EC%84%B1%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1300139960?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울한양도성길/식당/봄의정원 성신여대점/봄의정원3.jpg", description: '봄의정원 성신여대점', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%ED%95%9C%EC%96%91%EB%8F%84%EC%84%B1%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1300139960?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울한양도성길/식당/봄의정원 성신여대점/봄의정원4.jpg", description: '봄의정원 성신여대점', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%ED%95%9C%EC%96%91%EB%8F%84%EC%84%B1%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1300139960?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울한양도성길/식당/봄의정원 성신여대점/봄의정원5.jpg", description: '봄의정원 성신여대점', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%ED%95%9C%EC%96%91%EB%8F%84%EC%84%B1%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1300139960?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울한양도성길/식당/봄의정원 성신여대점/봄의정원1.jpg", description: '봄의정원 성신여대점', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%ED%95%9C%EC%96%91%EB%8F%84%EC%84%B1%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1300139960?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 41) {
      images = [
        { src: "assets/imgs/서울한양도성길/식당/수아당/수아당2.jpg", description: '수아당', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%ED%95%9C%EC%96%91%EB%8F%84%EC%84%B1%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1191942837?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울한양도성길/식당/수아당/수아당3.jpg", description: '수아당', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%ED%95%9C%EC%96%91%EB%8F%84%EC%84%B1%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1191942837?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울한양도성길/식당/수아당/수아당4.jpg", description: '수아당', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%ED%95%9C%EC%96%91%EB%8F%84%EC%84%B1%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1191942837?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울한양도성길/식당/수아당/수아당5.jpg", description: '수아당', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%ED%95%9C%EC%96%91%EB%8F%84%EC%84%B1%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1191942837?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울한양도성길/식당/수아당/수아당1.jpg", description: '수아당', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%ED%95%9C%EC%96%91%EB%8F%84%EC%84%B1%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1191942837?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 42) {
      images = [
        { src: "assets/imgs/서울한양도성길/식당/순대실록 대학로본점/순대실록2.jpg", description: '순대실록 대학로본점', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%ED%95%9C%EC%96%91%EB%8F%84%EC%84%B1%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/20148711?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울한양도성길/식당/순대실록 대학로본점/순대실록3.jpg", description: '순대실록 대학로본점', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%ED%95%9C%EC%96%91%EB%8F%84%EC%84%B1%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/20148711?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울한양도성길/식당/순대실록 대학로본점/순대실록4.jpg", description: '순대실록 대학로본점', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%ED%95%9C%EC%96%91%EB%8F%84%EC%84%B1%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/20148711?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울한양도성길/식당/순대실록 대학로본점/순대실록5.jpg", description: '순대실록 대학로본점', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%ED%95%9C%EC%96%91%EB%8F%84%EC%84%B1%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/20148711?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울한양도성길/식당/순대실록 대학로본점/순대실록1.jpg", description: '순대실록 대학로본점', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%ED%95%9C%EC%96%91%EB%8F%84%EC%84%B1%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/20148711?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 43) {
      images = [
        { src: "assets/imgs/서울한양도성길/카페/Los Dias/Los Dias.jpg", description: 'Los Dias', link: 'https://map.naver.com/v5/search/%EC%84%B1%EB%B6%81%EA%B5%AC%20%EC%B9%B4%ED%8E%98/place/1103631091?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울한양도성길/카페/Los Dias/Los Dias2.jpg", description: 'Los Dias', link: 'https://map.naver.com/v5/search/%EC%84%B1%EB%B6%81%EA%B5%AC%20%EC%B9%B4%ED%8E%98/place/1103631091?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울한양도성길/카페/Los Dias/Los Dias4.jpg", description: 'Los Dias', link: 'https://map.naver.com/v5/search/%EC%84%B1%EB%B6%81%EA%B5%AC%20%EC%B9%B4%ED%8E%98/place/1103631091?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울한양도성길/카페/Los Dias/Los Dias5.jpg", description: 'Los Dias', link: 'https://map.naver.com/v5/search/%EC%84%B1%EB%B6%81%EA%B5%AC%20%EC%B9%B4%ED%8E%98/place/1103631091?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울한양도성길/카페/Los Dias/Los Dias3.jpg", description: 'Los Dias', link: 'https://map.naver.com/v5/search/%EC%84%B1%EB%B6%81%EA%B5%AC%20%EC%B9%B4%ED%8E%98/place/1103631091?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 44) {
      images = [
        { src: "assets/imgs/서울한양도성길/카페/나플레옹과자점/나플레옹과자점2.jpg", description: '나플레옹과자점', link: 'https://map.naver.com/v5/search/%EC%84%B1%EB%B6%81%EA%B5%AC%20%EC%B9%B4%ED%8E%98/place/11627707?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울한양도성길/카페/나플레옹과자점/나플레옹과자점3.jpg", description: '나플레옹과자점', link: 'https://map.naver.com/v5/search/%EC%84%B1%EB%B6%81%EA%B5%AC%20%EC%B9%B4%ED%8E%98/place/11627707?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울한양도성길/카페/나플레옹과자점/나플레옹과자점4.jpg", description: '나플레옹과자점', link: 'https://map.naver.com/v5/search/%EC%84%B1%EB%B6%81%EA%B5%AC%20%EC%B9%B4%ED%8E%98/place/11627707?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울한양도성길/카페/나플레옹과자점/나플레옹과자점5.jpg", description: '나플레옹과자점', link: 'https://map.naver.com/v5/search/%EC%84%B1%EB%B6%81%EA%B5%AC%20%EC%B9%B4%ED%8E%98/place/11627707?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울한양도성길/카페/나플레옹과자점/나플레옹과자점1.jpg", description: '나플레옹과자점', link: 'https://map.naver.com/v5/search/%EC%84%B1%EB%B6%81%EA%B5%AC%20%EC%B9%B4%ED%8E%98/place/11627707?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 45) {
      images = [
        { src: "assets/imgs/서울한양도성길/카페/달콤한위로/달콤한위로2.jpg", description: '달콤한위로', link: 'https://map.naver.com/v5/search/%EC%84%B1%EB%B6%81%EA%B5%AC%20%EC%B9%B4%ED%8E%98/place/1836145476?c=11.85,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울한양도성길/카페/달콤한위로/달콤한위로3.jpg", description: '달콤한위로', link: 'https://map.naver.com/v5/search/%EC%84%B1%EB%B6%81%EA%B5%AC%20%EC%B9%B4%ED%8E%98/place/1836145476?c=11.85,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울한양도성길/카페/달콤한위로/달콤한위로4.jpg", description: '달콤한위로', link: 'https://map.naver.com/v5/search/%EC%84%B1%EB%B6%81%EA%B5%AC%20%EC%B9%B4%ED%8E%98/place/1836145476?c=11.85,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울한양도성길/카페/달콤한위로/달콤한위로5.jpg", description: '달콤한위로', link: 'https://map.naver.com/v5/search/%EC%84%B1%EB%B6%81%EA%B5%AC%20%EC%B9%B4%ED%8E%98/place/1836145476?c=11.85,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울한양도성길/카페/달콤한위로/달콤한위로1.jpg", description: '달콤한위로', link: 'https://map.naver.com/v5/search/%EC%84%B1%EB%B6%81%EA%B5%AC%20%EC%B9%B4%ED%8E%98/place/1836145476?c=11.85,0,0,0,dh&placePath=%3Fentry%253Dpll' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 46) {
      images = [
        { src: "assets/imgs/서울한양도성길/카페/더홈서울/더홈서울2.jpg", description: '더홈서울', link: 'https://map.naver.com/v5/search/%EC%84%B1%EB%B6%81%EA%B5%AC%20%EC%B9%B4%ED%8E%98/place/53720120?c=11.85,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울한양도성길/카페/더홈서울/더홈서울3.jpg", description: '더홈서울', link: 'https://map.naver.com/v5/search/%EC%84%B1%EB%B6%81%EA%B5%AC%20%EC%B9%B4%ED%8E%98/place/53720120?c=11.85,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울한양도성길/카페/더홈서울/더홈서울4.jpg", description: '더홈서울', link: 'https://map.naver.com/v5/search/%EC%84%B1%EB%B6%81%EA%B5%AC%20%EC%B9%B4%ED%8E%98/place/53720120?c=11.85,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울한양도성길/카페/더홈서울/더홈서울5.jpg", description: '더홈서울', link: 'https://map.naver.com/v5/search/%EC%84%B1%EB%B6%81%EA%B5%AC%20%EC%B9%B4%ED%8E%98/place/53720120?c=11.85,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울한양도성길/카페/더홈서울/더홈서울1.jpg", description: '더홈서울', link: 'https://map.naver.com/v5/search/%EC%84%B1%EB%B6%81%EA%B5%AC%20%EC%B9%B4%ED%8E%98/place/53720120?c=11.85,0,0,0,dh&placePath=%3Fentry%253Dpll' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 47) {
      images = [
        { src: "assets/imgs/서울한양도성길/카페/맬크/멜크2.jpg", description: '맬크', link: 'https://map.naver.com/v5/search/%EC%84%B1%EB%B6%81%EA%B5%AC%20%EC%B9%B4%ED%8E%98/place/1924718171?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울한양도성길/카페/맬크/멜크3.jpg", description: '맬크', link: 'https://map.naver.com/v5/search/%EC%84%B1%EB%B6%81%EA%B5%AC%20%EC%B9%B4%ED%8E%98/place/1924718171?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울한양도성길/카페/맬크/멜크4.jpg", description: '맬크', link: 'https://map.naver.com/v5/search/%EC%84%B1%EB%B6%81%EA%B5%AC%20%EC%B9%B4%ED%8E%98/place/1924718171?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울한양도성길/카페/맬크/멜크5.jpg", description: '맬크', link: 'https://map.naver.com/v5/search/%EC%84%B1%EB%B6%81%EA%B5%AC%20%EC%B9%B4%ED%8E%98/place/1924718171?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울한양도성길/카페/맬크/멜크1.jpg", description: '맬크', link: 'https://map.naver.com/v5/search/%EC%84%B1%EB%B6%81%EA%B5%AC%20%EC%B9%B4%ED%8E%98/place/1924718171?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' }
  
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 48) {
      images = [
        { src: "assets/imgs/서울한양도성길/카페/뮈에/뮈에2.jpg", description: '뮈에', link: 'https://map.naver.com/v5/search/%EC%84%B1%EB%B6%81%EA%B5%AC%20%EC%B9%B4%ED%8E%98/place/1191943177?c=11.85,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울한양도성길/카페/뮈에/뮈에3.jpg", description: '뮈에', link: 'https://map.naver.com/v5/search/%EC%84%B1%EB%B6%81%EA%B5%AC%20%EC%B9%B4%ED%8E%98/place/1191943177?c=11.85,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울한양도성길/카페/뮈에/뮈에4.jpg", description: '뮈에', link: 'https://map.naver.com/v5/search/%EC%84%B1%EB%B6%81%EA%B5%AC%20%EC%B9%B4%ED%8E%98/place/1191943177?c=11.85,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울한양도성길/카페/뮈에/뮈에5.jpg", description: '뮈에', link: 'https://map.naver.com/v5/search/%EC%84%B1%EB%B6%81%EA%B5%AC%20%EC%B9%B4%ED%8E%98/place/1191943177?c=11.85,0,0,0,dh&placePath=%3Fentry%253Dpll' },
        { src: "assets/imgs/서울한양도성길/카페/뮈에/뮈에1.jpg", description: '뮈에', link: 'https://map.naver.com/v5/search/%EC%84%B1%EB%B6%81%EA%B5%AC%20%EC%B9%B4%ED%8E%98/place/1191943177?c=11.85,0,0,0,dh&placePath=%3Fentry%253Dpll' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 49) {
      images = [
        { src: "assets/imgs/서울한양도성길/놀거리/국립어린이과학관/국립어린이과학관2.jpg", description: '국립어린이과학관', link: 'https://map.naver.com/v5/search/%EA%B5%AD%EB%A6%BD%EC%96%B4%EB%A6%B0%EC%9D%B4%EA%B3%BC%ED%95%99%EA%B4%80/place/11796217?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/서울한양도성길/놀거리/국립어린이과학관/국립어린이과학관3.jpg", description: '국립어린이과학관', link: 'https://map.naver.com/v5/search/%EA%B5%AD%EB%A6%BD%EC%96%B4%EB%A6%B0%EC%9D%B4%EA%B3%BC%ED%95%99%EA%B4%80/place/11796217?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/서울한양도성길/놀거리/국립어린이과학관/국립어린이과학관4.jpg", description: '국립어린이과학관', link: 'https://map.naver.com/v5/search/%EA%B5%AD%EB%A6%BD%EC%96%B4%EB%A6%B0%EC%9D%B4%EA%B3%BC%ED%95%99%EA%B4%80/place/11796217?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/서울한양도성길/놀거리/국립어린이과학관/국립어린이과학관5.jpg", description: '국립어린이과학관', link: 'https://map.naver.com/v5/search/%EA%B5%AD%EB%A6%BD%EC%96%B4%EB%A6%B0%EC%9D%B4%EA%B3%BC%ED%95%99%EA%B4%80/place/11796217?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/서울한양도성길/놀거리/국립어린이과학관/국립어린이과학관.jpg", description: '국립어린이과학관', link: 'https://map.naver.com/v5/search/%EA%B5%AD%EB%A6%BD%EC%96%B4%EB%A6%B0%EC%9D%B4%EA%B3%BC%ED%95%99%EA%B4%80/place/11796217?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 50) {
      images = [
        { src: "assets/imgs/서울한양도성길/놀거리/동대문디자인플라자/동대문디자인플라자2.jpg", description: '동대문디자인플라자', link: 'https://map.naver.com/v5/entry/place/18063223?lng=127.00993230000101&lat=37.5675465999968&placePath=%2Fhome&entry=plt&c=15,0,0,0,dh' },
        { src: "assets/imgs/서울한양도성길/놀거리/동대문디자인플라자/동대문디자인플라자3.jpg", description: '동대문디자인플라자', link: 'https://map.naver.com/v5/entry/place/18063223?lng=127.00993230000101&lat=37.5675465999968&placePath=%2Fhome&entry=plt&c=15,0,0,0,dh' },
        { src: "assets/imgs/서울한양도성길/놀거리/동대문디자인플라자/동대문디자인플라자4.jpg", description: '동대문디자인플라자', link: 'https://map.naver.com/v5/entry/place/18063223?lng=127.00993230000101&lat=37.5675465999968&placePath=%2Fhome&entry=plt&c=15,0,0,0,dh' },
        { src: "assets/imgs/서울한양도성길/놀거리/동대문디자인플라자/동대문디자인플라자5.jpg", description: '동대문디자인플라자', link: 'https://map.naver.com/v5/entry/place/18063223?lng=127.00993230000101&lat=37.5675465999968&placePath=%2Fhome&entry=plt&c=15,0,0,0,dh' },
        { src: "assets/imgs/서울한양도성길/놀거리/동대문디자인플라자/동대문디자인플라자1.jpg", description: '동대문디자인플라자', link: 'https://map.naver.com/v5/entry/place/18063223?lng=127.00993230000101&lat=37.5675465999968&placePath=%2Fhome&entry=plt&c=15,0,0,0,dh' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 51) {
      images = [
        { src: "assets/imgs/서울한양도성길/놀거리/두산아트센터/두산아트센터2.jpg", description: '두산아트센터', link: 'https://map.naver.com/v5/search/%EB%91%90%EC%82%B0%EC%95%84%ED%8A%B8%EC%84%BC%ED%84%B0/place/11639707?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/서울한양도성길/놀거리/두산아트센터/두산아트센터3.jpg", description: '두산아트센터', link: 'https://map.naver.com/v5/search/%EB%91%90%EC%82%B0%EC%95%84%ED%8A%B8%EC%84%BC%ED%84%B0/place/11639707?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/서울한양도성길/놀거리/두산아트센터/두산아트센터4.jpg", description: '두산아트센터', link: 'https://map.naver.com/v5/search/%EB%91%90%EC%82%B0%EC%95%84%ED%8A%B8%EC%84%BC%ED%84%B0/place/11639707?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/서울한양도성길/놀거리/두산아트센터/두산아트센터5.jpg", description: '두산아트센터', link: 'https://map.naver.com/v5/search/%EB%91%90%EC%82%B0%EC%95%84%ED%8A%B8%EC%84%BC%ED%84%B0/place/11639707?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/서울한양도성길/놀거리/두산아트센터/두산아트센터1.jpg", description: '두산아트센터', link: 'https://map.naver.com/v5/search/%EB%91%90%EC%82%B0%EC%95%84%ED%8A%B8%EC%84%BC%ED%84%B0/place/11639707?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 52) {
      images = [
        { src: "assets/imgs/서울한양도성길/놀거리/시크릿챔버/시크릿챔버2.jpg", description: '시크릿챔버', link: 'https://map.naver.com/v5/entry/place/37641764?entry=plt&c=15,0,0,0,dh' },
        { src: "assets/imgs/서울한양도성길/놀거리/시크릿챔버/시크릿챔버3.jpg", description: '시크릿챔버', link: 'https://map.naver.com/v5/entry/place/37641764?entry=plt&c=15,0,0,0,dh' },
        { src: "assets/imgs/서울한양도성길/놀거리/시크릿챔버/시크릿챔버4.jpg", description: '시크릿챔버', link: 'https://map.naver.com/v5/entry/place/37641764?entry=plt&c=15,0,0,0,dh' },
        { src: "assets/imgs/서울한양도성길/놀거리/시크릿챔버/시크릿챔버5.jpg", description: '시크릿챔버', link: 'https://map.naver.com/v5/entry/place/37641764?entry=plt&c=15,0,0,0,dh' },
        { src: "assets/imgs/서울한양도성길/놀거리/시크릿챔버/시크릿챔버.jpg", description: '시크릿챔버', link: 'https://map.naver.com/v5/entry/place/37641764?entry=plt&c=15,0,0,0,dh' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 53) {
      images = [
        { src: "assets/imgs/서울한양도성길/놀거리/유니플렉스/유니플렉스2.jpg", description: '유니플렉스', link: 'https://map.naver.com/v5/search/%EC%9C%A0%EB%8B%88%ED%94%8C%EB%A0%89%EC%8A%A4/place/33211250?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/서울한양도성길/놀거리/유니플렉스/유니플렉스3.jpg", description: '유니플렉스', link: 'https://map.naver.com/v5/search/%EC%9C%A0%EB%8B%88%ED%94%8C%EB%A0%89%EC%8A%A4/place/33211250?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/서울한양도성길/놀거리/유니플렉스/유니플렉스4.jpg", description: '유니플렉스', link: 'https://map.naver.com/v5/search/%EC%9C%A0%EB%8B%88%ED%94%8C%EB%A0%89%EC%8A%A4/place/33211250?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/서울한양도성길/놀거리/유니플렉스/유니플렉스5.jpg", description: '유니플렉스', link: 'https://map.naver.com/v5/search/%EC%9C%A0%EB%8B%88%ED%94%8C%EB%A0%89%EC%8A%A4/place/33211250?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/서울한양도성길/놀거리/유니플렉스/유니플렉스1.jpg", description: '유니플렉스', link: 'https://map.naver.com/v5/search/%EC%9C%A0%EB%8B%88%ED%94%8C%EB%A0%89%EC%8A%A4/place/33211250?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' }
        // 추가적인 이미지와 설명을 여기에 추가
      ];
    } else if (index === 54) {
      images = [
        { src: "assets/imgs/서울한양도성길/놀거리/이화마을/이화마을2.jpg", description: '이화마을', link: 'https://map.naver.com/v5/search/%EC%9D%B4%ED%99%94%EB%A7%88%EC%9D%84/place/13519224?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/서울한양도성길/놀거리/이화마을/이화마을3.jpg", description: '이화마을', link: 'https://map.naver.com/v5/search/%EC%9D%B4%ED%99%94%EB%A7%88%EC%9D%84/place/13519224?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/서울한양도성길/놀거리/이화마을/이화마을4.jpg", description: '이화마을', link: 'https://map.naver.com/v5/search/%EC%9D%B4%ED%99%94%EB%A7%88%EC%9D%84/place/13519224?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/서울한양도성길/놀거리/이화마을/이화마을5.jpg", description: '이화마을', link: 'https://map.naver.com/v5/search/%EC%9D%B4%ED%99%94%EB%A7%88%EC%9D%84/place/13519224?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
        { src: "assets/imgs/서울한양도성길/놀거리/이화마을/이화마을1.jpg", description: '이화마을', link: 'https://map.naver.com/v5/search/%EC%9D%B4%ED%99%94%EB%A7%88%EC%9D%84/place/13519224?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' }
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
      { src: 'assets/imgs/낙산공원/식당/삼겹살 전문점 대통령/4.jpeg', description: '삼겹살 전문점 대통령', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EB%A7%9B%EC%A7%91/place/48729816?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: 'assets/imgs/낙산공원/식당/삼겹살 전문점 대통령/5.jpeg', description: '삼겹살 전문점 대통령', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EB%A7%9B%EC%A7%91/place/48729816?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: 'assets/imgs/낙산공원/식당/삼겹살 전문점 대통령/1.jpeg', description: '삼겹살 전문점 대통령', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EB%A7%9B%EC%A7%91/place/48729816?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: 'assets/imgs/낙산공원/식당/삼겹살 전문점 대통령/2.jpeg', description: '삼겹살 전문점 대통령', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EB%A7%9B%EC%A7%91/place/48729816?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: 'assets/imgs/낙산공원/식당/삼겹살 전문점 대통령/3.jpeg', description: '삼겹살 전문점 대통령', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EB%A7%9B%EC%A7%91/place/48729816?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 2) {
    images = [
      { src: "assets/imgs/낙산공원/식당/순대실록 대학로본점/4.jpeg", description: '순대실록 대학로본점', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EB%A7%9B%EC%A7%91/place/20148711?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/낙산공원/식당/순대실록 대학로본점/5.jpeg", description: '순대실록 대학로본점', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EB%A7%9B%EC%A7%91/place/20148711?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/낙산공원/식당/순대실록 대학로본점/1.jpeg", description: '순대실록 대학로본점', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EB%A7%9B%EC%A7%91/place/20148711?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/낙산공원/식당/순대실록 대학로본점/2.jpeg", description: '순대실록 대학로본점', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EB%A7%9B%EC%A7%91/place/20148711?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/낙산공원/식당/순대실록 대학로본점/3.jpeg", description: '순대실록 대학로본점', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EB%A7%9B%EC%A7%91/place/20148711?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 3) {
    images = [
      { src: "assets/imgs/낙산공원/식당/오마카세 오사이초밥 대학로점/4.jpeg", description: '오마카세 오사이초밥 대학로점', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EB%A7%9B%EC%A7%91/place/1353833119?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/낙산공원/식당/오마카세 오사이초밥 대학로점/5.jpeg", description: '오마카세 오사이초밥 대학로점', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EB%A7%9B%EC%A7%91/place/1353833119?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/낙산공원/식당/오마카세 오사이초밥 대학로점/1.jpeg", description: '오마카세 오사이초밥 대학로점', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EB%A7%9B%EC%A7%91/place/1353833119?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/낙산공원/식당/오마카세 오사이초밥 대학로점/2.jpeg", description: '오마카세 오사이초밥 대학로점', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EB%A7%9B%EC%A7%91/place/1353833119?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/낙산공원/식당/오마카세 오사이초밥 대학로점/3.jpeg", description: '오마카세 오사이초밥 대학로점', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EB%A7%9B%EC%A7%91/place/1353833119?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 4) {
    images = [
      { src: "assets/imgs/낙산공원/식당/우물집/4.jpeg", description: '우물집', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EB%A7%9B%EC%A7%91/place/1154052509?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/낙산공원/식당/우물집/5.jpeg", description: '우물집', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EB%A7%9B%EC%A7%91/place/1154052509?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/낙산공원/식당/우물집/1.jpeg", description: '우물집', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EB%A7%9B%EC%A7%91/place/1154052509?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/낙산공원/식당/우물집/2.jpeg", description: '우물집', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EB%A7%9B%EC%A7%91/place/1154052509?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/낙산공원/식당/우물집/3.jpeg", description: '우물집', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EB%A7%9B%EC%A7%91/place/1154052509?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 5) {
    images = [
      { src: "assets/imgs/낙산공원/식당/우와 대학로점/4.jpeg", description: '우와 대학로점', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EB%A7%9B%EC%A7%91/place/1400319959?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/낙산공원/식당/우와 대학로점/5.jpeg", description: '우와 대학로점', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EB%A7%9B%EC%A7%91/place/1400319959?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/낙산공원/식당/우와 대학로점/1.jpeg", description: '우와 대학로점', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EB%A7%9B%EC%A7%91/place/1400319959?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/낙산공원/식당/우와 대학로점/2.jpeg", description: '우와 대학로점', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EB%A7%9B%EC%A7%91/place/1400319959?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/낙산공원/식당/우와 대학로점/3.jpeg", description: '우와 대학로점', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EB%A7%9B%EC%A7%91/place/1400319959?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 6) {
    images = [
      { src: "assets/imgs/낙산공원/식당/촌놈/4.jpeg", description: '촌놈', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EB%A7%9B%EC%A7%91/place/11867483?c=14,0,0,0,dh&placePath=%3Fentry%253Dplll' },
      { src: "assets/imgs/낙산공원/식당/촌놈/5.jpeg", description: '촌놈', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EB%A7%9B%EC%A7%91/place/11867483?c=14,0,0,0,dh&placePath=%3Fentry%253Dplll' },
      { src: "assets/imgs/낙산공원/식당/촌놈/1.jpeg", description: '촌놈', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EB%A7%9B%EC%A7%91/place/11867483?c=14,0,0,0,dh&placePath=%3Fentry%253Dplll' },
      { src: "assets/imgs/낙산공원/식당/촌놈/2.jpeg", description: '촌놈', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EB%A7%9B%EC%A7%91/place/11867483?c=14,0,0,0,dh&placePath=%3Fentry%253Dplll' },
      { src: "assets/imgs/낙산공원/식당/촌놈/3.jpeg", description: '촌놈', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EB%A7%9B%EC%A7%91/place/11867483?c=14,0,0,0,dh&placePath=%3Fentry%253Dplll' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 7) {
    images = [
      { src: "assets/imgs/낙산공원/카페/더파크츄러스/4.jpeg", description: '더파크츄러스', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EC%B9%B4%ED%8E%98/place/37160847?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll/l' },
      { src: "assets/imgs/낙산공원/카페/더파크츄러스/5.jpeg", description: '더파크츄러스', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EC%B9%B4%ED%8E%98/place/37160847?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll/l' },
      { src: "assets/imgs/낙산공원/카페/더파크츄러스/1.jpeg", description: '더파크츄러스', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EC%B9%B4%ED%8E%98/place/37160847?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll/l' },
      { src: "assets/imgs/낙산공원/카페/더파크츄러스/2.jpeg", description: '더파크츄러스', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EC%B9%B4%ED%8E%98/place/37160847?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll/l' },
      { src: "assets/imgs/낙산공원/카페/더파크츄러스/3.jpeg", description: '더파크츄러스', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EC%B9%B4%ED%8E%98/place/37160847?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll/l' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 8) {
    images = [
      { src: "assets/imgs/낙산공원/카페/도넛정수 창신점/4.png", description: '도넛정수 창신점', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EC%B9%B4%ED%8E%98/place/1347553376?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/낙산공원/카페/도넛정수 창신점/5.png", description: '도넛정수 창신점', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EC%B9%B4%ED%8E%98/place/1347553376?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/낙산공원/카페/도넛정수 창신점/1.png", description: '도넛정수 창신점', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EC%B9%B4%ED%8E%98/place/1347553376?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/낙산공원/카페/도넛정수 창신점/2.png", description: '도넛정수 창신점', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EC%B9%B4%ED%8E%98/place/1347553376?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/낙산공원/카페/도넛정수 창신점/3.png", description: '도넛정수 창신점', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EC%B9%B4%ED%8E%98/place/1347553376?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 9) {
    images = [
      { src: "assets/imgs/낙산공원/카페/라뚜셩트/4.jpeg", description: '라뚜셩트', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EC%B9%B4%ED%8E%98/place/1561424368?c=15,0,0,0,dh&placePath=%3Fentry%253Dplll' },
      { src: "assets/imgs/낙산공원/카페/라뚜셩트/5.jpeg", description: '라뚜셩트', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EC%B9%B4%ED%8E%98/place/1561424368?c=15,0,0,0,dh&placePath=%3Fentry%253Dplll' },
      { src: "assets/imgs/낙산공원/카페/라뚜셩트/1.jpeg", description: '라뚜셩트', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EC%B9%B4%ED%8E%98/place/1561424368?c=15,0,0,0,dh&placePath=%3Fentry%253Dplll' },
      { src: "assets/imgs/낙산공원/카페/라뚜셩트/2.jpeg", description: '라뚜셩트', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EC%B9%B4%ED%8E%98/place/1561424368?c=15,0,0,0,dh&placePath=%3Fentry%253Dplll' },
      { src: "assets/imgs/낙산공원/카페/라뚜셩트/3.jpeg", description: '라뚜셩트', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EC%B9%B4%ED%8E%98/place/1561424368?c=15,0,0,0,dh&placePath=%3Fentry%253Dplll' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 10) {
    images = [
      { src: "assets/imgs/낙산공원/카페/리히터/4.jpeg", description: '리히터', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EC%B9%B4%ED%8E%98/place/1009330947?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/낙산공원/카페/리히터/5.jpeg", description: '리히터', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EC%B9%B4%ED%8E%98/place/1009330947?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/낙산공원/카페/리히터/1.jpeg", description: '리히터', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EC%B9%B4%ED%8E%98/place/1009330947?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/낙산공원/카페/리히터/2.jpeg", description: '리히터', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EC%B9%B4%ED%8E%98/place/1009330947?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/낙산공원/카페/리히터/3.jpeg", description: '리히터', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EC%B9%B4%ED%8E%98/place/1009330947?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 11) {
    images = [
      { src: "assets/imgs/낙산공원/카페/산1-1/4.jpeg", description: '산1-1', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EC%B9%B4%ED%8E%98/place/1007476698?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/낙산공원/카페/산1-1/5.jpeg", description: '산1-1', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EC%B9%B4%ED%8E%98/place/1007476698?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/낙산공원/카페/산1-1/1.jpeg", description: '산1-1', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EC%B9%B4%ED%8E%98/place/1007476698?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/낙산공원/카페/산1-1/2.jpeg", description: '산1-1', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EC%B9%B4%ED%8E%98/place/1007476698?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/낙산공원/카페/산1-1/3.jpeg", description: '산1-1', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EC%B9%B4%ED%8E%98/place/1007476698?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' }

      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 12) {
    images = [
      { src: "assets/imgs/낙산공원/카페/카페다오/4.jpeg", description: '카페다오', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EC%B9%B4%ED%8E%98/place/13472558?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/낙산공원/카페/카페다오/5.jpeg", description: '카페다오', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EC%B9%B4%ED%8E%98/place/13472558?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/낙산공원/카페/카페다오/1.jpeg", description: '카페다오', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EC%B9%B4%ED%8E%98/place/13472558?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/낙산공원/카페/카페다오/2.jpeg", description: '카페다오', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EC%B9%B4%ED%8E%98/place/13472558?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/낙산공원/카페/카페다오/3.jpeg", description: '카페다오', link: 'https://map.naver.com/v5/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90%20%EC%B9%B4%ED%8E%98/place/13472558?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 13) {
    images = [
      { src: "assets/imgs/낙산공원/놀거리/위에트/2.jpeg", description: '위에트', link: 'https://map.naver.com/v5/entry/place/35221983?c=15,0,0,0,dh&isCorrectAnswer=truel' },
      { src: "assets/imgs/낙산공원/놀거리/위에트/3.jpeg", description: '위에트', link: 'https://map.naver.com/v5/entry/place/35221983?c=15,0,0,0,dh&isCorrectAnswer=truel' },
      { src: "assets/imgs/낙산공원/놀거리/위에트/4.jpeg", description: '위에트', link: 'https://map.naver.com/v5/entry/place/35221983?c=15,0,0,0,dh&isCorrectAnswer=truel' },
      { src: "assets/imgs/낙산공원/놀거리/위에트/5.jpeg", description: '위에트', link: 'https://map.naver.com/v5/entry/place/35221983?c=15,0,0,0,dh&isCorrectAnswer=truel' },
      { src: "assets/imgs/낙산공원/놀거리/위에트/1.jpeg", description: '위에트', link: 'https://map.naver.com/v5/entry/place/35221983?c=15,0,0,0,dh&isCorrectAnswer=truel' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 14) {
    images = [
      { src: "assets/imgs/낙산공원/놀거리/이화마을/2.jpeg", description: '이화마을', link: 'https://map.naver.com/v5/search/%EC%9D%B4%ED%99%94%EB%A7%88%EC%9D%84/place/13519224?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/낙산공원/놀거리/이화마을/3.jpeg", description: '이화마을', link: 'https://map.naver.com/v5/search/%EC%9D%B4%ED%99%94%EB%A7%88%EC%9D%84/place/13519224?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/낙산공원/놀거리/이화마을/4.jpeg", description: '이화마을', link: 'https://map.naver.com/v5/search/%EC%9D%B4%ED%99%94%EB%A7%88%EC%9D%84/place/13519224?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/낙산공원/놀거리/이화마을/5.jpeg", description: '이화마을', link: 'https://map.naver.com/v5/search/%EC%9D%B4%ED%99%94%EB%A7%88%EC%9D%84/place/13519224?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/낙산공원/놀거리/이화마을/1.jpeg", description: '이화마을', link: 'https://map.naver.com/v5/search/%EC%9D%B4%ED%99%94%EB%A7%88%EC%9D%84/place/13519224?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 15) {
    images = [
      { src: "assets/imgs/낙산공원/놀거리/콩툰 대학로점/2.jpeg", description: '콩툰 대학로점', link: 'https://map.naver.com/v5/search/%EC%BD%A9%ED%88%B0%20%EB%8C%80%ED%95%99%EB%A1%9C%EC%A0%90/place/532014087?c=15,0,0,0,dh&isCorrectAnswer=truel' },
      { src: "assets/imgs/낙산공원/놀거리/콩툰 대학로점/3.jpeg", description: '콩툰 대학로점', link: 'https://map.naver.com/v5/search/%EC%BD%A9%ED%88%B0%20%EB%8C%80%ED%95%99%EB%A1%9C%EC%A0%90/place/532014087?c=15,0,0,0,dh&isCorrectAnswer=truel' },
      { src: "assets/imgs/낙산공원/놀거리/콩툰 대학로점/4.jpeg", description: '콩툰 대학로점', link: 'https://map.naver.com/v5/search/%EC%BD%A9%ED%88%B0%20%EB%8C%80%ED%95%99%EB%A1%9C%EC%A0%90/place/532014087?c=15,0,0,0,dh&isCorrectAnswer=truel' },
      { src: "assets/imgs/낙산공원/놀거리/콩툰 대학로점/5.jpeg", description: '콩툰 대학로점', link: 'https://map.naver.com/v5/search/%EC%BD%A9%ED%88%B0%20%EB%8C%80%ED%95%99%EB%A1%9C%EC%A0%90/place/532014087?c=15,0,0,0,dh&isCorrectAnswer=truel' },
      { src: "assets/imgs/낙산공원/놀거리/콩툰 대학로점/1.jpeg", description: '콩툰 대학로점', link: 'https://map.naver.com/v5/search/%EC%BD%A9%ED%88%B0%20%EB%8C%80%ED%95%99%EB%A1%9C%EC%A0%90/place/532014087?c=15,0,0,0,dh&isCorrectAnswer=truel' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 16) {
    images = [
      { src: "assets/imgs/낙산공원/놀거리/벌툰 인더스트리얼 대학로점/2.jpeg", description: '벌툰 인더스트리얼 대학로점', link: 'https://map.naver.com/v5/search/%EB%B2%8C%ED%88%B0%20%EC%9D%B8%EB%8D%94%EC%8A%A4%ED%8A%B8%EB%A6%AC%EC%96%BC%20%EB%8C%80%ED%95%99%EB%A1%9C%EC%A0%90/place/1087317637?c=15,0,0,0,dh&isCorrectAnswer=true' },
      { src: "assets/imgs/낙산공원/놀거리/벌툰 인더스트리얼 대학로점/3.jpeg", description: '벌툰 인더스트리얼 대학로점', link: 'https://map.naver.com/v5/search/%EB%B2%8C%ED%88%B0%20%EC%9D%B8%EB%8D%94%EC%8A%A4%ED%8A%B8%EB%A6%AC%EC%96%BC%20%EB%8C%80%ED%95%99%EB%A1%9C%EC%A0%90/place/1087317637?c=15,0,0,0,dh&isCorrectAnswer=true' },
      { src: "assets/imgs/낙산공원/놀거리/벌툰 인더스트리얼 대학로점/4.jpeg", description: '벌툰 인더스트리얼 대학로점', link: 'https://map.naver.com/v5/search/%EB%B2%8C%ED%88%B0%20%EC%9D%B8%EB%8D%94%EC%8A%A4%ED%8A%B8%EB%A6%AC%EC%96%BC%20%EB%8C%80%ED%95%99%EB%A1%9C%EC%A0%90/place/1087317637?c=15,0,0,0,dh&isCorrectAnswer=true' },
      { src: "assets/imgs/낙산공원/놀거리/벌툰 인더스트리얼 대학로점/5.jpeg", description: '벌툰 인더스트리얼 대학로점', link: 'https://map.naver.com/v5/search/%EB%B2%8C%ED%88%B0%20%EC%9D%B8%EB%8D%94%EC%8A%A4%ED%8A%B8%EB%A6%AC%EC%96%BC%20%EB%8C%80%ED%95%99%EB%A1%9C%EC%A0%90/place/1087317637?c=15,0,0,0,dh&isCorrectAnswer=true' },
      { src: "assets/imgs/낙산공원/놀거리/벌툰 인더스트리얼 대학로점/1.jpeg", description: '벌툰 인더스트리얼 대학로점', link: 'https://map.naver.com/v5/search/%EB%B2%8C%ED%88%B0%20%EC%9D%B8%EB%8D%94%EC%8A%A4%ED%8A%B8%EB%A6%AC%EC%96%BC%20%EB%8C%80%ED%95%99%EB%A1%9C%EC%A0%90/place/1087317637?c=15,0,0,0,dh&isCorrectAnswer=true' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 17) {
    images = [
      { src: "assets/imgs/낙산공원/놀거리/비밀의화원 대학로점/2.jpeg", description: '비밀의화원 대학로점', link: 'https://map.naver.com/v5/entry/place/1625220556?lng=127.0021374&lat=37.5828930&placePath=%2Fhome%3Fentry=plt&c=15,0,0,0,dh' },
      { src: "assets/imgs/낙산공원/놀거리/비밀의화원 대학로점/3.jpeg", description: '비밀의화원 대학로점', link: 'https://map.naver.com/v5/entry/place/1625220556?lng=127.0021374&lat=37.5828930&placePath=%2Fhome%3Fentry=plt&c=15,0,0,0,dh' },
      { src: "assets/imgs/낙산공원/놀거리/비밀의화원 대학로점/4.jpeg", description: '비밀의화원 대학로점', link: 'https://map.naver.com/v5/entry/place/1625220556?lng=127.0021374&lat=37.5828930&placePath=%2Fhome%3Fentry=plt&c=15,0,0,0,dh' },
      { src: "assets/imgs/낙산공원/놀거리/비밀의화원 대학로점/5.jpeg", description: '비밀의화원 대학로점', link: 'https://map.naver.com/v5/entry/place/1625220556?lng=127.0021374&lat=37.5828930&placePath=%2Fhome%3Fentry=plt&c=15,0,0,0,dh' },
      { src: "assets/imgs/낙산공원/놀거리/비밀의화원 대학로점/1.jpeg", description: '비밀의화원 대학로점', link: 'https://map.naver.com/v5/entry/place/1625220556?lng=127.0021374&lat=37.5828930&placePath=%2Fhome%3Fentry=plt&c=15,0,0,0,dh' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 18) {
    images = [
      { src: "assets/imgs/낙산공원/놀거리/셜록홈즈 대학로점/2.jpeg", description: '셜록홈즈 대학로점', link: 'https://map.naver.com/v5/search/%EC%85%9C%EB%A1%9D%ED%99%88%EC%A6%88%20%EB%8C%80%ED%95%99%EB%A1%9C%EC%A0%90/place/1907056844?c=15,0,0,0,dh&isCorrectAnswer=true' },
      { src: "assets/imgs/낙산공원/놀거리/셜록홈즈 대학로점/3.jpeg", description: '셜록홈즈 대학로점', link: 'https://map.naver.com/v5/search/%EC%85%9C%EB%A1%9D%ED%99%88%EC%A6%88%20%EB%8C%80%ED%95%99%EB%A1%9C%EC%A0%90/place/1907056844?c=15,0,0,0,dh&isCorrectAnswer=true' },
      { src: "assets/imgs/낙산공원/놀거리/셜록홈즈 대학로점/4.jpeg", description: '셜록홈즈 대학로점', link: 'https://map.naver.com/v5/search/%EC%85%9C%EB%A1%9D%ED%99%88%EC%A6%88%20%EB%8C%80%ED%95%99%EB%A1%9C%EC%A0%90/place/1907056844?c=15,0,0,0,dh&isCorrectAnswer=true' },
      { src: "assets/imgs/낙산공원/놀거리/셜록홈즈 대학로점/5.jpeg", description: '셜록홈즈 대학로점', link: 'https://map.naver.com/v5/search/%EC%85%9C%EB%A1%9D%ED%99%88%EC%A6%88%20%EB%8C%80%ED%95%99%EB%A1%9C%EC%A0%90/place/1907056844?c=15,0,0,0,dh&isCorrectAnswer=true' },
      { src: "assets/imgs/낙산공원/놀거리/셜록홈즈 대학로점/1.jpeg", description: '셜록홈즈 대학로점', link: 'https://map.naver.com/v5/search/%EC%85%9C%EB%A1%9D%ED%99%88%EC%A6%88%20%EB%8C%80%ED%95%99%EB%A1%9C%EC%A0%90/place/1907056844?c=15,0,0,0,dh&isCorrectAnswer=true' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 19) {
    images = [
      { src: 'assets/imgs/덕수궁돌담길/식당/광화문 미진/광화문 미진_4.jpeg', description: '광화문 미진', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%A7%9B%EC%A7%91/place/11680222?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: 'assets/imgs/덕수궁돌담길/식당/광화문 미진/광화문 미진_5.jpeg', description: '광화문 미진', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%A7%9B%EC%A7%91/place/11680222?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: 'assets/imgs/덕수궁돌담길/식당/광화문 미진/광화문 미진_1.jpeg', description: '광화문 미진', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%A7%9B%EC%A7%91/place/11680222?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: 'assets/imgs/덕수궁돌담길/식당/광화문 미진/광화문 미진_2.jpeg', description: '광화문 미진', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%A7%9B%EC%A7%91/place/11680222?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: 'assets/imgs/덕수궁돌담길/식당/광화문 미진/광화문 미진_3.jpeg', description: '광화문 미진', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%A7%9B%EC%A7%91/place/11680222?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 20) {
    images = [
      { src: "assets/imgs/덕수궁돌담길/식당/광화문특고기/광화문특고기_4.jpeg", description: '광화문특고기', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%A7%9B%EC%A7%91/place/236366466?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/덕수궁돌담길/식당/광화문특고기/광화문특고기_5.jpeg", description: '광화문특고기', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%A7%9B%EC%A7%91/place/236366466?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/덕수궁돌담길/식당/광화문특고기/광화문특고기_1.jpeg", description: '광화문특고기', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%A7%9B%EC%A7%91/place/236366466?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/덕수궁돌담길/식당/광화문특고기/광화문특고기_2.jpeg", description: '광화문특고기', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%A7%9B%EC%A7%91/place/236366466?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/덕수궁돌담길/식당/광화문특고기/광화문특고기_3.jpeg", description: '광화문특고기', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%A7%9B%EC%A7%91/place/236366466?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 21) {
    images = [
      { src: "assets/imgs/덕수궁돌담길/식당/명동교자 본점/명동교자 본점_4.jpeg", description: '명동교자 본점', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%A7%9B%EC%A7%91/place/11592650?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/덕수궁돌담길/식당/명동교자 본점/명동교자 본점_5.jpeg", description: '명동교자 본점', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%A7%9B%EC%A7%91/place/11592650?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/덕수궁돌담길/식당/명동교자 본점/명동교자 본점_1.jpeg", description: '명동교자 본점', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%A7%9B%EC%A7%91/place/11592650?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/덕수궁돌담길/식당/명동교자 본점/명동교자 본점_2.jpeg", description: '명동교자 본점', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%A7%9B%EC%A7%91/place/11592650?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/덕수궁돌담길/식당/명동교자 본점/명동교자 본점_3.jpeg", description: '명동교자 본점', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%A7%9B%EC%A7%91/place/11592650?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 22) {
    images = [
      { src: "assets/imgs/덕수궁돌담길/식당/닥터로빈 광화문점/닥터로빈 광화문점_4.jpeg", description: '닥터로빈 광화문점', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%A7%9B%EC%A7%91/place/36992330?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/덕수궁돌담길/식당/닥터로빈 광화문점/닥터로빈 광화문점_5.jpeg", description: '닥터로빈 광화문점', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%A7%9B%EC%A7%91/place/36992330?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/덕수궁돌담길/식당/닥터로빈 광화문점/닥터로빈 광화문점_1.jpeg", description: '닥터로빈 광화문점', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%A7%9B%EC%A7%91/place/36992330?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/덕수궁돌담길/식당/닥터로빈 광화문점/닥터로빈 광화문점_2.jpeg", description: '닥터로빈 광화문점', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%A7%9B%EC%A7%91/place/36992330?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/덕수궁돌담길/식당/닥터로빈 광화문점/닥터로빈 광화문점_3.jpeg", description: '닥터로빈 광화문점', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%A7%9B%EC%A7%91/place/36992330?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 23) {
    images = [
      { src: "assets/imgs/덕수궁돌담길/식당/만족오향족발 시청점/만족오향족발 시청점_4.jpeg", description: '만족오향족발 시청점', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%A7%9B%EC%A7%91/place/11718044?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/덕수궁돌담길/식당/만족오향족발 시청점/만족오향족발 시청점_5.jpeg", description: '만족오향족발 시청점', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%A7%9B%EC%A7%91/place/11718044?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/덕수궁돌담길/식당/만족오향족발 시청점/만족오향족발 시청점_1.jpeg", description: '만족오향족발 시청점', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%A7%9B%EC%A7%91/place/11718044?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/덕수궁돌담길/식당/만족오향족발 시청점/만족오향족발 시청점_2.jpeg", description: '만족오향족발 시청점', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%A7%9B%EC%A7%91/place/11718044?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/덕수궁돌담길/식당/만족오향족발 시청점/만족오향족발 시청점_3.jpeg", description: '만족오향족발 시청점', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%A7%9B%EC%A7%91/place/11718044?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 24) {
    images = [
      { src: "assets/imgs/덕수궁돌담길/식당/유림면/유림면_3.jpeg", description: '유림면', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%A7%9B%EC%A7%91/place/11725657?c=15,0,0,0,dh&placePath=%3Fentry%253Dplll' },
      { src: "assets/imgs/덕수궁돌담길/식당/유림면/유림면_4.jpeg", description: '유림면', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%A7%9B%EC%A7%91/place/11725657?c=15,0,0,0,dh&placePath=%3Fentry%253Dplll' },
      { src: "assets/imgs/덕수궁돌담길/식당/유림면/유림면_5.jpeg", description: '유림면', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%A7%9B%EC%A7%91/place/11725657?c=15,0,0,0,dh&placePath=%3Fentry%253Dplll' },
      { src: "assets/imgs/덕수궁돌담길/식당/유림면/유림면_1.jpeg", description: '유림면', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%A7%9B%EC%A7%91/place/11725657?c=15,0,0,0,dh&placePath=%3Fentry%253Dplll' },
      { src: "assets/imgs/덕수궁돌담길/식당/유림면/유림면_2.jpeg", description: '유림면', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%A7%9B%EC%A7%91/place/11725657?c=15,0,0,0,dh&placePath=%3Fentry%253Dplll' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 25) {
    images = [
      { src: "assets/imgs/덕수궁돌담길/카페/노우즈안국/노우즈안국_4.jpeg", description: '노우즈안국', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%8F%8C%EB%8B%B4%EA%B8%B8%20%EC%B9%B4%ED%8E%98/place/1620383625?placePath=%3Fentry%253Dpll&c=15,0,0,0,dhl' },
      { src: "assets/imgs/덕수궁돌담길/카페/노우즈안국/노우즈안국_5.jpeg", description: '노우즈안국', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%8F%8C%EB%8B%B4%EA%B8%B8%20%EC%B9%B4%ED%8E%98/place/1620383625?placePath=%3Fentry%253Dpll&c=15,0,0,0,dhl' },
      { src: "assets/imgs/덕수궁돌담길/카페/노우즈안국/노우즈안국_1.jpeg", description: '노우즈안국', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%8F%8C%EB%8B%B4%EA%B8%B8%20%EC%B9%B4%ED%8E%98/place/1620383625?placePath=%3Fentry%253Dpll&c=15,0,0,0,dhl' },
      { src: "assets/imgs/덕수궁돌담길/카페/노우즈안국/노우즈안국_2.jpeg", description: '노우즈안국', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%8F%8C%EB%8B%B4%EA%B8%B8%20%EC%B9%B4%ED%8E%98/place/1620383625?placePath=%3Fentry%253Dpll&c=15,0,0,0,dhl' },
      { src: "assets/imgs/덕수궁돌담길/카페/노우즈안국/노우즈안국_3.jpeg", description: '노우즈안국', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%8F%8C%EB%8B%B4%EA%B8%B8%20%EC%B9%B4%ED%8E%98/place/1620383625?placePath=%3Fentry%253Dpll&c=15,0,0,0,dhl' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 26) {
    images = [
      { src: "assets/imgs/덕수궁돌담길/카페/더 스팟 패뷸러스/더 스팟 패뷸러스_4.jpeg", description: '더 스팟 패뷸러스', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%8F%8C%EB%8B%B4%EA%B8%B8%20%EC%B9%B4%ED%8E%98/place/181633326?placePath=%3Fentry%253Dpll&c=15,0,0,0,dh' },
      { src: "assets/imgs/덕수궁돌담길/카페/더 스팟 패뷸러스/더 스팟 패뷸러스_5.jpeg", description: '더 스팟 패뷸러스', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%8F%8C%EB%8B%B4%EA%B8%B8%20%EC%B9%B4%ED%8E%98/place/181633326?placePath=%3Fentry%253Dpll&c=15,0,0,0,dh' },
      { src: "assets/imgs/덕수궁돌담길/카페/더 스팟 패뷸러스/더 스팟 패뷸러스_1.jpeg", description: '더 스팟 패뷸러스', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%8F%8C%EB%8B%B4%EA%B8%B8%20%EC%B9%B4%ED%8E%98/place/181633326?placePath=%3Fentry%253Dpll&c=15,0,0,0,dh' },
      { src: "assets/imgs/덕수궁돌담길/카페/더 스팟 패뷸러스/더 스팟 패뷸러스_2.jpeg", description: '더 스팟 패뷸러스', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%8F%8C%EB%8B%B4%EA%B8%B8%20%EC%B9%B4%ED%8E%98/place/181633326?placePath=%3Fentry%253Dpll&c=15,0,0,0,dh' },
      { src: "assets/imgs/덕수궁돌담길/카페/더 스팟 패뷸러스/더 스팟 패뷸러스_3.jpeg", description: '더 스팟 패뷸러스', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%8F%8C%EB%8B%B4%EA%B8%B8%20%EC%B9%B4%ED%8E%98/place/181633326?placePath=%3Fentry%253Dpll&c=15,0,0,0,dh' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 27) {
    images = [
      { src: "assets/imgs/덕수궁돌담길/카페/덕수궁 리에제와플/덕수궁 리에제와플_4.jpeg", description: '덕수궁 리에제와플', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%8F%8C%EB%8B%B4%EA%B8%B8%20%EC%B9%B4%ED%8E%98/place/21627288?placePath=%3Fentry=pll&c=15,0,0,0,dh' },
      { src: "assets/imgs/덕수궁돌담길/카페/덕수궁 리에제와플/덕수궁 리에제와플_5.jpeg", description: '덕수궁 리에제와플', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%8F%8C%EB%8B%B4%EA%B8%B8%20%EC%B9%B4%ED%8E%98/place/21627288?placePath=%3Fentry=pll&c=15,0,0,0,dh' },
      { src: "assets/imgs/덕수궁돌담길/카페/덕수궁 리에제와플/덕수궁 리에제와플_1.jpeg", description: '덕수궁 리에제와플', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%8F%8C%EB%8B%B4%EA%B8%B8%20%EC%B9%B4%ED%8E%98/place/21627288?placePath=%3Fentry=pll&c=15,0,0,0,dh' },
      { src: "assets/imgs/덕수궁돌담길/카페/덕수궁 리에제와플/덕수궁 리에제와플_2.jpeg", description: '덕수궁 리에제와플', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%8F%8C%EB%8B%B4%EA%B8%B8%20%EC%B9%B4%ED%8E%98/place/21627288?placePath=%3Fentry=pll&c=15,0,0,0,dh' },
      { src: "assets/imgs/덕수궁돌담길/카페/덕수궁 리에제와플/덕수궁 리에제와플_3.jpeg", description: '덕수궁 리에제와플', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%8F%8C%EB%8B%B4%EA%B8%B8%20%EC%B9%B4%ED%8E%98/place/21627288?placePath=%3Fentry=pll&c=15,0,0,0,dh' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 28) {
    images = [
      { src: "assets/imgs/덕수궁돌담길/카페/도토리가든/도토리가든_4.jpeg", description: '도토리가든', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%8F%8C%EB%8B%B4%EA%B8%B8%20%EC%B9%B4%ED%8E%98/place/1198045151?placePath=%3Fentry%253Dpll&c=15,0,0,0,dh' },
      { src: "assets/imgs/덕수궁돌담길/카페/도토리가든/도토리가든_5.jpeg", description: '도토리가든', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%8F%8C%EB%8B%B4%EA%B8%B8%20%EC%B9%B4%ED%8E%98/place/1198045151?placePath=%3Fentry%253Dpll&c=15,0,0,0,dh' },
      { src: "assets/imgs/덕수궁돌담길/카페/도토리가든/도토리가든_1.jpeg", description: '도토리가든', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%8F%8C%EB%8B%B4%EA%B8%B8%20%EC%B9%B4%ED%8E%98/place/1198045151?placePath=%3Fentry%253Dpll&c=15,0,0,0,dh' },
      { src: "assets/imgs/덕수궁돌담길/카페/도토리가든/도토리가든_2.jpeg", description: '도토리가든', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%8F%8C%EB%8B%B4%EA%B8%B8%20%EC%B9%B4%ED%8E%98/place/1198045151?placePath=%3Fentry%253Dpll&c=15,0,0,0,dh' },
      { src: "assets/imgs/덕수궁돌담길/카페/도토리가든/도토리가든_3.jpeg", description: '도토리가든', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%8F%8C%EB%8B%B4%EA%B8%B8%20%EC%B9%B4%ED%8E%98/place/1198045151?placePath=%3Fentry%253Dpll&c=15,0,0,0,dh' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 29) {
    images = [
      { src: "assets/imgs/덕수궁돌담길/카페/르풀/르풀_4.jpeg", description: '르풀', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%8F%8C%EB%8B%B4%EA%B8%B8%20%EC%B9%B4%ED%8E%98/place/31583286?placePath=%3Fentry%253Dpll&c=15,0,0,0,dh' },
      { src: "assets/imgs/덕수궁돌담길/카페/르풀/르풀_5.jpeg", description: '르풀', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%8F%8C%EB%8B%B4%EA%B8%B8%20%EC%B9%B4%ED%8E%98/place/31583286?placePath=%3Fentry%253Dpll&c=15,0,0,0,dh' },
      { src: "assets/imgs/덕수궁돌담길/카페/르풀/르풀_1.jpeg", description: '르풀', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%8F%8C%EB%8B%B4%EA%B8%B8%20%EC%B9%B4%ED%8E%98/place/31583286?placePath=%3Fentry%253Dpll&c=15,0,0,0,dh' },
      { src: "assets/imgs/덕수궁돌담길/카페/르풀/르풀_2.jpeg", description: '르풀', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%8F%8C%EB%8B%B4%EA%B8%B8%20%EC%B9%B4%ED%8E%98/place/31583286?placePath=%3Fentry%253Dpll&c=15,0,0,0,dh' },
      { src: "assets/imgs/덕수궁돌담길/카페/르풀/르풀_3.jpeg", description: '르풀', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%8F%8C%EB%8B%B4%EA%B8%B8%20%EC%B9%B4%ED%8E%98/place/31583286?placePath=%3Fentry%253Dpll&c=15,0,0,0,dh' }

      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 30) {
    images = [
      { src: "assets/imgs/덕수궁돌담길/카페/적당/적당_4.jpeg", description: '적당', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%8F%8C%EB%8B%B4%EA%B8%B8%20%EC%B9%B4%ED%8E%98/place/1250997417?placePath=%3Fentry%253Dpll&c=15,0,0,0,dh' },
      { src: "assets/imgs/덕수궁돌담길/카페/적당/적당_5.jpeg", description: '적당', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%8F%8C%EB%8B%B4%EA%B8%B8%20%EC%B9%B4%ED%8E%98/place/1250997417?placePath=%3Fentry%253Dpll&c=15,0,0,0,dh' },
      { src: "assets/imgs/덕수궁돌담길/카페/적당/적당_1.jpeg", description: '적당', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%8F%8C%EB%8B%B4%EA%B8%B8%20%EC%B9%B4%ED%8E%98/place/1250997417?placePath=%3Fentry%253Dpll&c=15,0,0,0,dh' },
      { src: "assets/imgs/덕수궁돌담길/카페/적당/적당_2.jpeg", description: '적당', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%8F%8C%EB%8B%B4%EA%B8%B8%20%EC%B9%B4%ED%8E%98/place/1250997417?placePath=%3Fentry%253Dpll&c=15,0,0,0,dh' },
      { src: "assets/imgs/덕수궁돌담길/카페/적당/적당_3.jpeg", description: '적당', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%8F%8C%EB%8B%B4%EA%B8%B8%20%EC%B9%B4%ED%8E%98/place/1250997417?placePath=%3Fentry%253Dpll&c=15,0,0,0,dh' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 31) {
    images = [
      { src: "assets/imgs/덕수궁돌담길/놀거리/덕수궁/덕수궁_2.jpeg", description: '덕수궁', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81/place/11571730?c=6,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/덕수궁돌담길/놀거리/덕수궁/덕수궁_3.jpeg", description: '덕수궁', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81/place/11571730?c=6,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/덕수궁돌담길/놀거리/덕수궁/덕수궁_4.jpeg", description: '덕수궁', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81/place/11571730?c=6,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/덕수궁돌담길/놀거리/덕수궁/덕수궁_5.jpeg", description: '덕수궁', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81/place/11571730?c=6,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/덕수궁돌담길/놀거리/덕수궁/덕수궁_1.jpeg", description: '덕수궁', link: 'https://map.naver.com/v5/search/%EB%8D%95%EC%88%98%EA%B6%81/place/11571730?c=6,0,0,0,dh&placePath=%3Fentry%253Dbmp' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 32) {
    images = [
      { src: "assets/imgs/덕수궁돌담길/놀거리/경복궁/경복궁_2.jpeg", description: '경복궁', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EB%B3%B5%EA%B6%81/place/11571707?entry=plt&c=13,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/덕수궁돌담길/놀거리/경복궁/경복궁_3.jpeg", description: '경복궁', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EB%B3%B5%EA%B6%81/place/11571707?entry=plt&c=13,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/덕수궁돌담길/놀거리/경복궁/경복궁_4.jpeg", description: '경복궁', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EB%B3%B5%EA%B6%81/place/11571707?entry=plt&c=13,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/덕수궁돌담길/놀거리/경복궁/경복궁_5.jpeg", description: '경복궁', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EB%B3%B5%EA%B6%81/place/11571707?entry=plt&c=13,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/덕수궁돌담길/놀거리/경복궁/경복궁_1.jpeg", description: '경복궁', link: 'https://map.naver.com/v5/search/%EA%B2%BD%EB%B3%B5%EA%B6%81/place/11571707?entry=plt&c=13,0,0,0,dh&placePath=%3Fentry%253Dbmp' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 33) {
    images = [
      { src: "assets/imgs/덕수궁돌담길/놀거리/쌈지길/쌈지길_2.jpeg", description: '쌈지길', link: 'https://map.naver.com/v5/search/%EC%8C%88%EC%A7%80%EA%B8%B8/place/11859069?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/덕수궁돌담길/놀거리/쌈지길/쌈지길_3.jpeg", description: '쌈지길', link: 'https://map.naver.com/v5/search/%EC%8C%88%EC%A7%80%EA%B8%B8/place/11859069?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/덕수궁돌담길/놀거리/쌈지길/쌈지길_4.jpeg", description: '쌈지길', link: 'https://map.naver.com/v5/search/%EC%8C%88%EC%A7%80%EA%B8%B8/place/11859069?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/덕수궁돌담길/놀거리/쌈지길/쌈지길_5.jpeg", description: '쌈지길', link: 'https://map.naver.com/v5/search/%EC%8C%88%EC%A7%80%EA%B8%B8/place/11859069?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/덕수궁돌담길/놀거리/쌈지길/쌈지길_1.jpeg", description: '쌈지길', link: 'https://map.naver.com/v5/search/%EC%8C%88%EC%A7%80%EA%B8%B8/place/11859069?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 34) {
    images = [
      { src: "assets/imgs/덕수궁돌담길/놀거리/서울역사박물관/서울역사박물관_2.jpeg", description: '서울역사박물관', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%97%AD%EC%82%AC%EB%B0%95%EB%AC%BC%EA%B4%80/place/11784657?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/덕수궁돌담길/놀거리/서울역사박물관/서울역사박물관_3.jpeg", description: '서울역사박물관', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%97%AD%EC%82%AC%EB%B0%95%EB%AC%BC%EA%B4%80/place/11784657?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/덕수궁돌담길/놀거리/서울역사박물관/서울역사박물관_4.jpeg", description: '서울역사박물관', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%97%AD%EC%82%AC%EB%B0%95%EB%AC%BC%EA%B4%80/place/11784657?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/덕수궁돌담길/놀거리/서울역사박물관/서울역사박물관_5.jpeg", description: '서울역사박물관', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%97%AD%EC%82%AC%EB%B0%95%EB%AC%BC%EA%B4%80/place/11784657?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/덕수궁돌담길/놀거리/서울역사박물관/서울역사박물관_1.jpeg", description: '서울역사박물관', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%97%AD%EC%82%AC%EB%B0%95%EB%AC%BC%EA%B4%80/place/11784657?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 35) {
    images = [
      { src: "assets/imgs/덕수궁돌담길/놀거리/청계광장/청계광장_2.jpeg", description: '청계광장', link: 'https://map.naver.com/v5/search/%EC%B2%AD%EA%B3%84%EA%B4%91%EC%9E%A5/place/13543936?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/덕수궁돌담길/놀거리/청계광장/청계광장_3.jpeg", description: '청계광장', link: 'https://map.naver.com/v5/search/%EC%B2%AD%EA%B3%84%EA%B4%91%EC%9E%A5/place/13543936?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/덕수궁돌담길/놀거리/청계광장/청계광장_4.jpeg", description: '청계광장', link: 'https://map.naver.com/v5/search/%EC%B2%AD%EA%B3%84%EA%B4%91%EC%9E%A5/place/13543936?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/덕수궁돌담길/놀거리/청계광장/청계광장_5.jpeg", description: '청계광장', link: 'https://map.naver.com/v5/search/%EC%B2%AD%EA%B3%84%EA%B4%91%EC%9E%A5/place/13543936?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/덕수궁돌담길/놀거리/청계광장/청계광장_1.jpeg", description: '청계광장', link: 'https://map.naver.com/v5/search/%EC%B2%AD%EA%B3%84%EA%B4%91%EC%9E%A5/place/13543936?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 36) {
    images = [
      { src: "assets/imgs/덕수궁돌담길/놀거리/서울시립미술관/서울시립미술관_2.jpeg", description: '서울시립미술관', link: 'https://map.naver.com/v5/entry/place/12125053?lng=126.9737733&lat=37.5642066&placePath=%2F&entry=plt&c=15,0,0,0,dh' },
      { src: "assets/imgs/덕수궁돌담길/놀거리/서울시립미술관/서울시립미술관_3.jpeg", description: '서울시립미술관', link: 'https://map.naver.com/v5/entry/place/12125053?lng=126.9737733&lat=37.5642066&placePath=%2F&entry=plt&c=15,0,0,0,dh' },
      { src: "assets/imgs/덕수궁돌담길/놀거리/서울시립미술관/서울시립미술관_4.jpeg", description: '서울시립미술관', link: 'https://map.naver.com/v5/entry/place/12125053?lng=126.9737733&lat=37.5642066&placePath=%2F&entry=plt&c=15,0,0,0,dh' },
      { src: "assets/imgs/덕수궁돌담길/놀거리/서울시립미술관/서울시립미술관_5.jpeg", description: '서울시립미술관', link: 'https://map.naver.com/v5/entry/place/12125053?lng=126.9737733&lat=37.5642066&placePath=%2F&entry=plt&c=15,0,0,0,dh' },
      { src: "assets/imgs/덕수궁돌담길/놀거리/서울시립미술관/서울시립미술관_1.jpeg", description: '서울시립미술관', link: 'https://map.naver.com/v5/entry/place/12125053?lng=126.9737733&lat=37.5642066&placePath=%2F&entry=plt&c=15,0,0,0,dh' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 37) {
    images = [
      { src: 'assets/imgs/서울한양도성길/식당/나래함박/나래함박2.jpg', description: '나래함박', link: 'https://naver.me/xuCVwIw5' },
      { src: 'assets/imgs/서울한양도성길/식당/나래함박/나래함박3.jpg', description: '나래함박', link: 'https://naver.me/xuCVwIw5' },
      { src: 'assets/imgs/서울한양도성길/식당/나래함박/나래함박4.jpg', description: '나래함박', link: 'https://naver.me/xuCVwIw5' },
      { src: 'assets/imgs/서울한양도성길/식당/나래함박/나래함박5.jpg', description: '나래함박', link: 'https://naver.me/xuCVwIw5' },
      { src: 'assets/imgs/서울한양도성길/식당/나래함박/나래함박1.jpg', description: '나래함박', link: 'https://naver.me/xuCVwIw5' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 38) {
    images = [
      { src: "assets/imgs/서울한양도성길/식당/머노까머나 대학로점/머노까머나2.jpg", description: '머노까머나 대학로점', link: 'https://naver.me/xM28uXc9' },
      { src: "assets/imgs/서울한양도성길/식당/머노까머나 대학로점/머노까머나3.jpg", description: '머노까머나 대학로점', link: 'https://naver.me/xM28uXc9' },
      { src: "assets/imgs/서울한양도성길/식당/머노까머나 대학로점/머노까머나4.jpg", description: '머노까머나 대학로점', link: 'https://naver.me/xM28uXc9' },
      { src: "assets/imgs/서울한양도성길/식당/머노까머나 대학로점/머노까머나5.jpg", description: '머노까머나 대학로점', link: 'https://naver.me/xM28uXc9' },
      { src: "assets/imgs/서울한양도성길/식당/머노까머나 대학로점/머노까머나1.jpg", description: '머노까머나 대학로점', link: 'https://naver.me/xM28uXc9' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 39) {
    images = [
      { src: "assets/imgs/서울한양도성길/식당/메밀향그집/메밀향그집2.jpg", description: '메밀향그집', link: 'https://naver.me/xYQT0rSr' },
      { src: "assets/imgs/서울한양도성길/식당/메밀향그집/메밀향그집3.jpg", description: '메밀향그집', link: 'https://naver.me/xYQT0rSr' },
      { src: "assets/imgs/서울한양도성길/식당/메밀향그집/메밀향그집4.jpg", description: '메밀향그집', link: 'https://naver.me/xYQT0rSr' },
      { src: "assets/imgs/서울한양도성길/식당/메밀향그집/메밀향그집5.jpg", description: '메밀향그집', link: 'https://naver.me/xYQT0rSr' },
      { src: "assets/imgs/서울한양도성길/식당/메밀향그집/메밀향그집1.jpg", description: '메밀향그집', link: 'https://naver.me/xYQT0rSr' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 40) {
    images = [
      { src: "assets/imgs/서울한양도성길/식당/봄의정원 성신여대점/봄의정원2.jpg", description: '봄의정원 성신여대점', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%ED%95%9C%EC%96%91%EB%8F%84%EC%84%B1%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1300139960?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울한양도성길/식당/봄의정원 성신여대점/봄의정원3.jpg", description: '봄의정원 성신여대점', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%ED%95%9C%EC%96%91%EB%8F%84%EC%84%B1%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1300139960?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울한양도성길/식당/봄의정원 성신여대점/봄의정원4.jpg", description: '봄의정원 성신여대점', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%ED%95%9C%EC%96%91%EB%8F%84%EC%84%B1%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1300139960?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울한양도성길/식당/봄의정원 성신여대점/봄의정원5.jpg", description: '봄의정원 성신여대점', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%ED%95%9C%EC%96%91%EB%8F%84%EC%84%B1%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1300139960?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울한양도성길/식당/봄의정원 성신여대점/봄의정원1.jpg", description: '봄의정원 성신여대점', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%ED%95%9C%EC%96%91%EB%8F%84%EC%84%B1%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1300139960?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 41) {
    images = [
      { src: "assets/imgs/서울한양도성길/식당/수아당/수아당2.jpg", description: '수아당', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%ED%95%9C%EC%96%91%EB%8F%84%EC%84%B1%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1191942837?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울한양도성길/식당/수아당/수아당3.jpg", description: '수아당', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%ED%95%9C%EC%96%91%EB%8F%84%EC%84%B1%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1191942837?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울한양도성길/식당/수아당/수아당4.jpg", description: '수아당', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%ED%95%9C%EC%96%91%EB%8F%84%EC%84%B1%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1191942837?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울한양도성길/식당/수아당/수아당5.jpg", description: '수아당', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%ED%95%9C%EC%96%91%EB%8F%84%EC%84%B1%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1191942837?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울한양도성길/식당/수아당/수아당1.jpg", description: '수아당', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%ED%95%9C%EC%96%91%EB%8F%84%EC%84%B1%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/1191942837?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 42) {
    images = [
      { src: "assets/imgs/서울한양도성길/식당/순대실록 대학로본점/순대실록2.jpg", description: '순대실록 대학로본점', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%ED%95%9C%EC%96%91%EB%8F%84%EC%84%B1%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/20148711?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울한양도성길/식당/순대실록 대학로본점/순대실록3.jpg", description: '순대실록 대학로본점', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%ED%95%9C%EC%96%91%EB%8F%84%EC%84%B1%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/20148711?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울한양도성길/식당/순대실록 대학로본점/순대실록4.jpg", description: '순대실록 대학로본점', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%ED%95%9C%EC%96%91%EB%8F%84%EC%84%B1%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/20148711?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울한양도성길/식당/순대실록 대학로본점/순대실록5.jpg", description: '순대실록 대학로본점', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%ED%95%9C%EC%96%91%EB%8F%84%EC%84%B1%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/20148711?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울한양도성길/식당/순대실록 대학로본점/순대실록1.jpg", description: '순대실록 대학로본점', link: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%ED%95%9C%EC%96%91%EB%8F%84%EC%84%B1%EA%B8%B8%20%EA%B7%BC%EC%B2%98%20%EB%A7%9B%EC%A7%91/place/20148711?c=14,0,0,0,dh&placePath=%3Fentry%253Dpll' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 43) {
    images = [
      { src: "assets/imgs/서울한양도성길/카페/Los Dias/Los Dias.jpg", description: 'Los Dias', link: 'https://map.naver.com/v5/search/%EC%84%B1%EB%B6%81%EA%B5%AC%20%EC%B9%B4%ED%8E%98/place/1103631091?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울한양도성길/카페/Los Dias/Los Dias2.jpg", description: 'Los Dias', link: 'https://map.naver.com/v5/search/%EC%84%B1%EB%B6%81%EA%B5%AC%20%EC%B9%B4%ED%8E%98/place/1103631091?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울한양도성길/카페/Los Dias/Los Dias4.jpg", description: 'Los Dias', link: 'https://map.naver.com/v5/search/%EC%84%B1%EB%B6%81%EA%B5%AC%20%EC%B9%B4%ED%8E%98/place/1103631091?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울한양도성길/카페/Los Dias/Los Dias5.jpg", description: 'Los Dias', link: 'https://map.naver.com/v5/search/%EC%84%B1%EB%B6%81%EA%B5%AC%20%EC%B9%B4%ED%8E%98/place/1103631091?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울한양도성길/카페/Los Dias/Los Dias3.jpg", description: 'Los Dias', link: 'https://map.naver.com/v5/search/%EC%84%B1%EB%B6%81%EA%B5%AC%20%EC%B9%B4%ED%8E%98/place/1103631091?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 44) {
    images = [
      { src: "assets/imgs/서울한양도성길/카페/나플레옹과자점/나플레옹과자점2.jpg", description: '나플레옹과자점', link: 'https://map.naver.com/v5/search/%EC%84%B1%EB%B6%81%EA%B5%AC%20%EC%B9%B4%ED%8E%98/place/11627707?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울한양도성길/카페/나플레옹과자점/나플레옹과자점3.jpg", description: '나플레옹과자점', link: 'https://map.naver.com/v5/search/%EC%84%B1%EB%B6%81%EA%B5%AC%20%EC%B9%B4%ED%8E%98/place/11627707?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울한양도성길/카페/나플레옹과자점/나플레옹과자점4.jpg", description: '나플레옹과자점', link: 'https://map.naver.com/v5/search/%EC%84%B1%EB%B6%81%EA%B5%AC%20%EC%B9%B4%ED%8E%98/place/11627707?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울한양도성길/카페/나플레옹과자점/나플레옹과자점5.jpg", description: '나플레옹과자점', link: 'https://map.naver.com/v5/search/%EC%84%B1%EB%B6%81%EA%B5%AC%20%EC%B9%B4%ED%8E%98/place/11627707?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울한양도성길/카페/나플레옹과자점/나플레옹과자점1.jpg", description: '나플레옹과자점', link: 'https://map.naver.com/v5/search/%EC%84%B1%EB%B6%81%EA%B5%AC%20%EC%B9%B4%ED%8E%98/place/11627707?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 45) {
    images = [
      { src: "assets/imgs/서울한양도성길/카페/달콤한위로/달콤한위로2.jpg", description: '달콤한위로', link: 'https://map.naver.com/v5/search/%EC%84%B1%EB%B6%81%EA%B5%AC%20%EC%B9%B4%ED%8E%98/place/1836145476?c=11.85,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울한양도성길/카페/달콤한위로/달콤한위로3.jpg", description: '달콤한위로', link: 'https://map.naver.com/v5/search/%EC%84%B1%EB%B6%81%EA%B5%AC%20%EC%B9%B4%ED%8E%98/place/1836145476?c=11.85,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울한양도성길/카페/달콤한위로/달콤한위로4.jpg", description: '달콤한위로', link: 'https://map.naver.com/v5/search/%EC%84%B1%EB%B6%81%EA%B5%AC%20%EC%B9%B4%ED%8E%98/place/1836145476?c=11.85,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울한양도성길/카페/달콤한위로/달콤한위로5.jpg", description: '달콤한위로', link: 'https://map.naver.com/v5/search/%EC%84%B1%EB%B6%81%EA%B5%AC%20%EC%B9%B4%ED%8E%98/place/1836145476?c=11.85,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울한양도성길/카페/달콤한위로/달콤한위로1.jpg", description: '달콤한위로', link: 'https://map.naver.com/v5/search/%EC%84%B1%EB%B6%81%EA%B5%AC%20%EC%B9%B4%ED%8E%98/place/1836145476?c=11.85,0,0,0,dh&placePath=%3Fentry%253Dpll' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 46) {
    images = [
      { src: "assets/imgs/서울한양도성길/카페/더홈서울/더홈서울2.jpg", description: '더홈서울', link: 'https://map.naver.com/v5/search/%EC%84%B1%EB%B6%81%EA%B5%AC%20%EC%B9%B4%ED%8E%98/place/53720120?c=11.85,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울한양도성길/카페/더홈서울/더홈서울3.jpg", description: '더홈서울', link: 'https://map.naver.com/v5/search/%EC%84%B1%EB%B6%81%EA%B5%AC%20%EC%B9%B4%ED%8E%98/place/53720120?c=11.85,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울한양도성길/카페/더홈서울/더홈서울4.jpg", description: '더홈서울', link: 'https://map.naver.com/v5/search/%EC%84%B1%EB%B6%81%EA%B5%AC%20%EC%B9%B4%ED%8E%98/place/53720120?c=11.85,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울한양도성길/카페/더홈서울/더홈서울5.jpg", description: '더홈서울', link: 'https://map.naver.com/v5/search/%EC%84%B1%EB%B6%81%EA%B5%AC%20%EC%B9%B4%ED%8E%98/place/53720120?c=11.85,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울한양도성길/카페/더홈서울/더홈서울1.jpg", description: '더홈서울', link: 'https://map.naver.com/v5/search/%EC%84%B1%EB%B6%81%EA%B5%AC%20%EC%B9%B4%ED%8E%98/place/53720120?c=11.85,0,0,0,dh&placePath=%3Fentry%253Dpll' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 47) {
    images = [
      { src: "assets/imgs/서울한양도성길/카페/맬크/멜크2.jpg", description: '맬크', link: 'https://map.naver.com/v5/search/%EC%84%B1%EB%B6%81%EA%B5%AC%20%EC%B9%B4%ED%8E%98/place/1924718171?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울한양도성길/카페/맬크/멜크3.jpg", description: '맬크', link: 'https://map.naver.com/v5/search/%EC%84%B1%EB%B6%81%EA%B5%AC%20%EC%B9%B4%ED%8E%98/place/1924718171?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울한양도성길/카페/맬크/멜크4.jpg", description: '맬크', link: 'https://map.naver.com/v5/search/%EC%84%B1%EB%B6%81%EA%B5%AC%20%EC%B9%B4%ED%8E%98/place/1924718171?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울한양도성길/카페/맬크/멜크5.jpg", description: '맬크', link: 'https://map.naver.com/v5/search/%EC%84%B1%EB%B6%81%EA%B5%AC%20%EC%B9%B4%ED%8E%98/place/1924718171?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울한양도성길/카페/맬크/멜크1.jpg", description: '맬크', link: 'https://map.naver.com/v5/search/%EC%84%B1%EB%B6%81%EA%B5%AC%20%EC%B9%B4%ED%8E%98/place/1924718171?c=12,0,0,0,dh&placePath=%3Fentry%253Dpll' }

      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 48) {
    images = [
      { src: "assets/imgs/서울한양도성길/카페/뮈에/뮈에2.jpg", description: '뮈에', link: 'https://map.naver.com/v5/search/%EC%84%B1%EB%B6%81%EA%B5%AC%20%EC%B9%B4%ED%8E%98/place/1191943177?c=11.85,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울한양도성길/카페/뮈에/뮈에3.jpg", description: '뮈에', link: 'https://map.naver.com/v5/search/%EC%84%B1%EB%B6%81%EA%B5%AC%20%EC%B9%B4%ED%8E%98/place/1191943177?c=11.85,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울한양도성길/카페/뮈에/뮈에4.jpg", description: '뮈에', link: 'https://map.naver.com/v5/search/%EC%84%B1%EB%B6%81%EA%B5%AC%20%EC%B9%B4%ED%8E%98/place/1191943177?c=11.85,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울한양도성길/카페/뮈에/뮈에5.jpg", description: '뮈에', link: 'https://map.naver.com/v5/search/%EC%84%B1%EB%B6%81%EA%B5%AC%20%EC%B9%B4%ED%8E%98/place/1191943177?c=11.85,0,0,0,dh&placePath=%3Fentry%253Dpll' },
      { src: "assets/imgs/서울한양도성길/카페/뮈에/뮈에1.jpg", description: '뮈에', link: 'https://map.naver.com/v5/search/%EC%84%B1%EB%B6%81%EA%B5%AC%20%EC%B9%B4%ED%8E%98/place/1191943177?c=11.85,0,0,0,dh&placePath=%3Fentry%253Dpll' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 49) {
    images = [
      { src: "assets/imgs/서울한양도성길/놀거리/국립어린이과학관/국립어린이과학관2.jpg", description: '국립어린이과학관', link: 'https://map.naver.com/v5/search/%EA%B5%AD%EB%A6%BD%EC%96%B4%EB%A6%B0%EC%9D%B4%EA%B3%BC%ED%95%99%EA%B4%80/place/11796217?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/서울한양도성길/놀거리/국립어린이과학관/국립어린이과학관3.jpg", description: '국립어린이과학관', link: 'https://map.naver.com/v5/search/%EA%B5%AD%EB%A6%BD%EC%96%B4%EB%A6%B0%EC%9D%B4%EA%B3%BC%ED%95%99%EA%B4%80/place/11796217?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/서울한양도성길/놀거리/국립어린이과학관/국립어린이과학관4.jpg", description: '국립어린이과학관', link: 'https://map.naver.com/v5/search/%EA%B5%AD%EB%A6%BD%EC%96%B4%EB%A6%B0%EC%9D%B4%EA%B3%BC%ED%95%99%EA%B4%80/place/11796217?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/서울한양도성길/놀거리/국립어린이과학관/국립어린이과학관5.jpg", description: '국립어린이과학관', link: 'https://map.naver.com/v5/search/%EA%B5%AD%EB%A6%BD%EC%96%B4%EB%A6%B0%EC%9D%B4%EA%B3%BC%ED%95%99%EA%B4%80/place/11796217?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/서울한양도성길/놀거리/국립어린이과학관/국립어린이과학관.jpg", description: '국립어린이과학관', link: 'https://map.naver.com/v5/search/%EA%B5%AD%EB%A6%BD%EC%96%B4%EB%A6%B0%EC%9D%B4%EA%B3%BC%ED%95%99%EA%B4%80/place/11796217?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 50) {
    images = [
      { src: "assets/imgs/서울한양도성길/놀거리/동대문디자인플라자/동대문디자인플라자2.jpg", description: '동대문디자인플라자', link: 'https://map.naver.com/v5/entry/place/18063223?lng=127.00993230000101&lat=37.5675465999968&placePath=%2Fhome&entry=plt&c=15,0,0,0,dh' },
      { src: "assets/imgs/서울한양도성길/놀거리/동대문디자인플라자/동대문디자인플라자3.jpg", description: '동대문디자인플라자', link: 'https://map.naver.com/v5/entry/place/18063223?lng=127.00993230000101&lat=37.5675465999968&placePath=%2Fhome&entry=plt&c=15,0,0,0,dh' },
      { src: "assets/imgs/서울한양도성길/놀거리/동대문디자인플라자/동대문디자인플라자4.jpg", description: '동대문디자인플라자', link: 'https://map.naver.com/v5/entry/place/18063223?lng=127.00993230000101&lat=37.5675465999968&placePath=%2Fhome&entry=plt&c=15,0,0,0,dh' },
      { src: "assets/imgs/서울한양도성길/놀거리/동대문디자인플라자/동대문디자인플라자5.jpg", description: '동대문디자인플라자', link: 'https://map.naver.com/v5/entry/place/18063223?lng=127.00993230000101&lat=37.5675465999968&placePath=%2Fhome&entry=plt&c=15,0,0,0,dh' },
      { src: "assets/imgs/서울한양도성길/놀거리/동대문디자인플라자/동대문디자인플라자1.jpg", description: '동대문디자인플라자', link: 'https://map.naver.com/v5/entry/place/18063223?lng=127.00993230000101&lat=37.5675465999968&placePath=%2Fhome&entry=plt&c=15,0,0,0,dh' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 51) {
    images = [
      { src: "assets/imgs/서울한양도성길/놀거리/두산아트센터/두산아트센터2.jpg", description: '두산아트센터', link: 'https://map.naver.com/v5/search/%EB%91%90%EC%82%B0%EC%95%84%ED%8A%B8%EC%84%BC%ED%84%B0/place/11639707?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/서울한양도성길/놀거리/두산아트센터/두산아트센터3.jpg", description: '두산아트센터', link: 'https://map.naver.com/v5/search/%EB%91%90%EC%82%B0%EC%95%84%ED%8A%B8%EC%84%BC%ED%84%B0/place/11639707?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/서울한양도성길/놀거리/두산아트센터/두산아트센터4.jpg", description: '두산아트센터', link: 'https://map.naver.com/v5/search/%EB%91%90%EC%82%B0%EC%95%84%ED%8A%B8%EC%84%BC%ED%84%B0/place/11639707?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/서울한양도성길/놀거리/두산아트센터/두산아트센터5.jpg", description: '두산아트센터', link: 'https://map.naver.com/v5/search/%EB%91%90%EC%82%B0%EC%95%84%ED%8A%B8%EC%84%BC%ED%84%B0/place/11639707?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/서울한양도성길/놀거리/두산아트센터/두산아트센터1.jpg", description: '두산아트센터', link: 'https://map.naver.com/v5/search/%EB%91%90%EC%82%B0%EC%95%84%ED%8A%B8%EC%84%BC%ED%84%B0/place/11639707?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 52) {
    images = [
      { src: "assets/imgs/서울한양도성길/놀거리/시크릿챔버/시크릿챔버2.jpg", description: '시크릿챔버', link: 'https://map.naver.com/v5/entry/place/37641764?entry=plt&c=15,0,0,0,dh' },
      { src: "assets/imgs/서울한양도성길/놀거리/시크릿챔버/시크릿챔버3.jpg", description: '시크릿챔버', link: 'https://map.naver.com/v5/entry/place/37641764?entry=plt&c=15,0,0,0,dh' },
      { src: "assets/imgs/서울한양도성길/놀거리/시크릿챔버/시크릿챔버4.jpg", description: '시크릿챔버', link: 'https://map.naver.com/v5/entry/place/37641764?entry=plt&c=15,0,0,0,dh' },
      { src: "assets/imgs/서울한양도성길/놀거리/시크릿챔버/시크릿챔버5.jpg", description: '시크릿챔버', link: 'https://map.naver.com/v5/entry/place/37641764?entry=plt&c=15,0,0,0,dh' },
      { src: "assets/imgs/서울한양도성길/놀거리/시크릿챔버/시크릿챔버.jpg", description: '시크릿챔버', link: 'https://map.naver.com/v5/entry/place/37641764?entry=plt&c=15,0,0,0,dh' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 53) {
    images = [
      { src: "assets/imgs/서울한양도성길/놀거리/유니플렉스/유니플렉스2.jpg", description: '유니플렉스', link: 'https://map.naver.com/v5/search/%EC%9C%A0%EB%8B%88%ED%94%8C%EB%A0%89%EC%8A%A4/place/33211250?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/서울한양도성길/놀거리/유니플렉스/유니플렉스3.jpg", description: '유니플렉스', link: 'https://map.naver.com/v5/search/%EC%9C%A0%EB%8B%88%ED%94%8C%EB%A0%89%EC%8A%A4/place/33211250?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/서울한양도성길/놀거리/유니플렉스/유니플렉스4.jpg", description: '유니플렉스', link: 'https://map.naver.com/v5/search/%EC%9C%A0%EB%8B%88%ED%94%8C%EB%A0%89%EC%8A%A4/place/33211250?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/서울한양도성길/놀거리/유니플렉스/유니플렉스5.jpg", description: '유니플렉스', link: 'https://map.naver.com/v5/search/%EC%9C%A0%EB%8B%88%ED%94%8C%EB%A0%89%EC%8A%A4/place/33211250?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/서울한양도성길/놀거리/유니플렉스/유니플렉스1.jpg", description: '유니플렉스', link: 'https://map.naver.com/v5/search/%EC%9C%A0%EB%8B%88%ED%94%8C%EB%A0%89%EC%8A%A4/place/33211250?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' }
      // 추가적인 이미지와 설명을 여기에 추가
    ];
  } else if (index === 54) {
    images = [
      { src: "assets/imgs/서울한양도성길/놀거리/이화마을/이화마을2.jpg", description: '이화마을', link: 'https://map.naver.com/v5/search/%EC%9D%B4%ED%99%94%EB%A7%88%EC%9D%84/place/13519224?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/서울한양도성길/놀거리/이화마을/이화마을3.jpg", description: '이화마을', link: 'https://map.naver.com/v5/search/%EC%9D%B4%ED%99%94%EB%A7%88%EC%9D%84/place/13519224?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/서울한양도성길/놀거리/이화마을/이화마을4.jpg", description: '이화마을', link: 'https://map.naver.com/v5/search/%EC%9D%B4%ED%99%94%EB%A7%88%EC%9D%84/place/13519224?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/서울한양도성길/놀거리/이화마을/이화마을5.jpg", description: '이화마을', link: 'https://map.naver.com/v5/search/%EC%9D%B4%ED%99%94%EB%A7%88%EC%9D%84/place/13519224?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' },
      { src: "assets/imgs/서울한양도성길/놀거리/이화마을/이화마을1.jpg", description: '이화마을', link: 'https://map.naver.com/v5/search/%EC%9D%B4%ED%99%94%EB%A7%88%EC%9D%84/place/13519224?entry=plt&c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp' }
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
