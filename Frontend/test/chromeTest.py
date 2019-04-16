from selenium import webdriver

def main():
    driver = webdriver.Chrome(executable_path="./chromedriver")
    driver.get("http://localhost:3000")
    homePageUI(driver)

def homePageUI(driver):
    assert driver.title == "All About Austin" , "Title incorrect!"
    button = driver.find_element_by_xpath('//button[normalize-space()="Start"]')
    button.click()
    assert driver.current_url == "localhost:3000/survey" , "Start button failure!"
if __name__ == "__main__":
    main()
