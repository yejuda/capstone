/*!
=========================================================
* Steller Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll

const uploadBox = document.getElementById('upload-box');
const fileInput = document.getElementById('file-input');
const previewContainer = document.getElementById('preview-container');
const previewImage = document.getElementById('preview-image');
const submitButton = document.getElementById('submit-button');

// 드래그 & 드롭 기능

uploadBox.addEventListener('dragover', (event) => {
	event.preventDefault();
	uploadBox.classList.add('dragover');
});

uploadBox.addEventListener('dragleave', (event) => {
	event.preventDefault();
	uploadBox.classList.remove('dragover');
});

uploadBox.addEventListener('drop', (event) => {
	event.preventDefault();
	uploadBox.classList.remove('dragover');
	const files = event.dataTransfer.files;
	if (files.length > 0) {
		fileInput.files = files;
		showPreview();
	}
});

// 파일 선택 기능
fileInput.addEventListener('change', (event) => {
	showPreview();
});

// 미리보기 기능
function showPreview() {
	const file = fileInput.files[0];
	const reader = new FileReader();
	reader.onload = () => {
		previewImage.src = reader.result;
		previewContainer.style.display = 'block';
		submitButton.style.display = 'block';
	};
	reader.readAsDataURL(file);
}

// 선택 완료 버튼
submitButton.addEventListener('click', (event) => {
    if (fileInput.files.length == 0) {
        alert('파일을 선택해주세요.');
    } else {
        // 파일이 선택된 경우 다음 페이지로 이동합니다.
    }
});

function uploadImage() {
	const input = document.getElementById('file-input');
	const file = input.files[0];
	if (!file) {
	  alert('파일을 선택해주세요.');
	  return;
	}
	const xhr = new XMLHttpRequest();
	xhr.open('POST', '/upload', true);
	xhr.onload = function() {
	  if (xhr.status === 200) {
		alert(xhr.responseText);
	  } else {
		alert('파일 업로드에 실패했습니다.');
	  }
	};
	const formData = new FormData();
	formData.append('file', file, 'uploaded_image.jpg');
	xhr.send(formData);
	window.location.href = "uploadpic.html";
}


/*

const imageSelector = document.getElementById('image-selector');
const outputDiv = document.getElementById('output');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// 모델 로드
async function loadModel() {
  const model = await tf.loadLayersModel('/my_model.json');
  return model;
}

// 이미지 로드
function loadImage() {
  return new Promise((resolve, reject) => {
	const file = imageSelector.files[0];
	const reader = new FileReader();
	reader.onload = () => {
	  const img = new Image();
	  img.onload = () => resolve(img);
	  img.onerror = (err) => reject(err);
	  img.src = reader.result;
	};
	reader.readAsDataURL(file);
  });
}

// 이미지 전처리
function preprocessImage(img) {
  return tf.tidy(() => {
	const tensor = tf.browser.fromPixels(img)
		.resizeNearestNeighbor([224, 224])
		.toFloat()
		.expandDims();
	return tensor.div(255.0);
  });
}

// 예측 실행
async function predict() {
  outputDiv.innerHTML = '';

  // 모델 로드
  const model = await loadModel();

  // 이미지 로드 및 전처리
  const img = await loadImage();
  const tensor = preprocessImage(img);

  // 예측 실행
  const predictions = await model.predict(tensor).data();

  // 예측 결과 출력
  outputDiv.innerHTML = `예측 결과: ${predictions[0]}`;

  // 메모리 해제
  tensor.dispose();
  model.dispose();
}
*/