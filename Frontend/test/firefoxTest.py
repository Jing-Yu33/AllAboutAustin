from selenium import webdriver

def main():
    driver = webdriver.Firefox(executable_path="./geckodriver")
    driver.get("http:/localhost:3000")

if __name__ == "__main__":
    main()
