document.getElementById('fetchData').addEventListener('click', () => {
    // URL of the external API or resource
    const targetUrl = 'https://api.example.com/data'; // Replace with the URL you want to proxy

    fetch(targetUrl)
        .then(response => response.json())
        .then(data => {
            // Display the response data on the page
            document.getElementById('responseData').textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            document.getElementById('responseData').textContent = 'Error: ' + error.message;
        });
});
