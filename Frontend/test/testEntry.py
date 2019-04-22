from selenium import webdriver
import browserTest

def main():
    driver = webdriver.Chrome(executable_path = "./chromedriver")
    browserTest.test(driver)
    driver = webdriver.Firefox(executable_path = "./geckodriver")
    browserTest.test(driver)
    #options = webdriver.ChromeOptions()
    #options.binary_location = "./operadriver"
    #driver = webdriver.Opera(options=options, executable_path = "./operadriver")
    #browserTest.test(driver)
    #driver = webdriver.Ie()
    #browserTest.test(Ie)
    #driver = webdriver.Safari()
    #browserTeset.test(driver)

if __name__ == "__main__":
    main()
