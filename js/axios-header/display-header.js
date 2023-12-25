function loadContent() {
    axios.get('/header.html')
        .then(function (response) {
            var contentContainer = document.getElementById('headerContentContainer');
            contentContainer.innerHTML = response.data;

            var contentHeight = contentContainer.offsetHeight;
            parent.postMessage({ iframeHeight: contentHeight }, '*');
        })
        .catch(function (error) {
            console.error('Erro ao carregar conteúdo:', error);
        });
}
document.addEventListener('DOMContentLoaded', loadContent);