from selenium import webdriver

def main():
    driver = webdriver.Chrome(executable_path="./chromedriver")
    driver.get("http://localhost:3000")
    homePageUI(driver)
    driver.close()

def homePageUI(driver):
    assert driver.title == "All About Austin" , "Title incorrect!"
    verifySurvey(driver)
    driver.get('http://localhost:3000')
    verifyHomePageButton(driver)

def verifySurvey(driver):
    """
    This method checks the survey page to ensure that there are 3 sliders
    and that each slider has the correct default value of 50
    """
    btn = driver.find_element_by_link_text('Start')
    btn.click()
    url = driver.current_url
    assert url == 'http://localhost:3000/survey' , 'Survey URL incorrect!'
    els = driver.find_elements_by_class_name('form-control-range')
    assert len(els) == 3 , 'Number of sliders incorrect!'
    for i in els:
        assert i.get_attribute('value') == '50' , 'Default Values incorrect!'

def verifyHomePageButton(driver):
    btn = driver.find_element_by_partial_link_text('AAA')
    btn.click()
    url = driver.current_url
    assert url == 'http://localhost:3000/' , 'HomePage URL incorrect!'




if __name__ == "__main__":
    main()
