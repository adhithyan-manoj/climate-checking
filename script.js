
document.getElementById('climateForm').addEventListener('submit', function (e) {
    e.preventDefault(); 

    
    document.getElementById('result').style.display = 'none';
    document.getElementById('loading').style.display = 'block';


    setTimeout(function () {
        document.getElementById('loading').style.display = 'none'; 
        document.getElementById('result').style.display = 'block'; 
    }, 3000); 
});
