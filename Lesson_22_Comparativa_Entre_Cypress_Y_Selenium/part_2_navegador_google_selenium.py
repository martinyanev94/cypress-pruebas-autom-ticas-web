from selenium import webdriver
from selenium.webdriver.common.keys import Keys

# Inicializar el navegador
driver = webdriver.Chrome()

# Abrir la página de Google
driver.get("http://www.google.com")

# Encontrar el cuadro de búsqueda utilizando su nombre
search_box = driver.find_element_by_name("q")

# Escribir en el cuadro de búsqueda y enviar
search_box.send_keys("Cypress vs Selenium")
search_box.send_keys(Keys.RETURN)

# Cerrar el navegador
driver.quit()
