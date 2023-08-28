function convertToFahrenheit() {
    var celsiusInput = document.getElementById("celsius");
    var fahrenheitInput = document.getElementById("fahrenheit");
    
    if (celsiusInput.value === "") {
        alert("Please enter a value in Celsius.");
        return;
    }
    
    var celsius = parseFloat(celsiusInput.value);
    var fahrenheit = (celsius * 9/5) + 32;
    
    fahrenheitInput.value = fahrenheit.toFixed(2);
}
