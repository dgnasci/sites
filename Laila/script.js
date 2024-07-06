function openModal(imageSrc, text) {
  document.getElementById('modalImage').src = imageSrc;
  document.getElementById('modalText').innerText = text;
  $('#photoModal').modal('show');
}