from selenium import webdriver
from selenium.webdriver import ActionChains
from selenium.webdriver.support.ui import Select
import time


def test(drvr):
    '''
    This method calls each of the respective testing sections on the driver passed in by 
    testEntry. It will be called once with a driver for each browser that should be tested
    '''

    driver = drvr
    driver.implicitly_wait(10)
    driver.maximize_window()
    driver.get("http://localhost:3000")
    homePageUI(driver)
    categoryTabs(driver)
    driver.close()

def homePageUI(driver):
    '''
    This method calls all the tests to test the homepage of AllAboutAustin
    '''

    assert driver.title == "All About Austin" , "Title incorrect!"
    verifySurvey(driver)
    driver.get('http://localhost:3000')
    verifyHomePageButton(driver)
    driver.get('http://localhost:3000')
    verifyTopLinks(driver)

def categoryTabs(driver):
    '''
    This method tests each of the food, traffic, and education tabs
    '''

    driver.get('http://localhost:3000/food')
    verifyMapFunctionality(driver)
    verifySortFunctionality(driver)
    driver.get('http://localhost:3000/traffic')
    verifyMapFunctionality(driver)
    driver.get('http://localhost:3000/education')
    verifyMapFunctionality(driver)

def verifySurvey(driver):
    '''
    This method checks the survey page to ensure that there are 3 sliders
    and that each slider has the correct default value of 50
    '''

    btn = driver.find_element_by_link_text('Start')
    btn.click()
    url = driver.current_url
    assert url == 'http://localhost:3000/survey' , 'Survey URL incorrect!'
    els = driver.find_elements_by_class_name('form-control-range')
    assert len(els) == 3 , 'Number of sliders incorrect!'
    for i in els:
        assert i.get_attribute('value') == '50' , 'Default Values incorrect!'

def verifyHomePageButton(driver):
    '''
    This method tests that the homepage button in the top left corner 
    is a link to the homepage
    '''

    btn = driver.find_element_by_partial_link_text('AAA')
    btn.click()
    url = driver.current_url
    assert url == 'http://localhost:3000/' , 'HomePage URL incorrect!'

def verifyTopLinks(driver):
    '''
    This method tests that all of the top links (food, traffic, education) return 
    the proper pages
    '''

    base_url = driver.current_url
    btn = driver.find_element_by_partial_link_text('Food')
    btn.click()
    url = driver.current_url
    assert url == 'http://localhost:3000/food' , 'Food URL incorrect from: ' + base_url
    driver.get(base_url)
    btn = driver.find_element_by_link_text('Traffic')
    btn.click()
    url = driver.current_url
    assert url == 'http://localhost:3000/traffic', 'Traffic URL incorrect from: ' + base_url
    driver.get(base_url)
    btn = driver.find_element_by_link_text('Education')
    btn.click()
    url = driver.current_url
    assert url == 'http://localhost:3000/education', 'Education URL incorrect from: ' + base_url
    driver.get(base_url)
    btn = driver.find_element_by_link_text('About')
    btn.click()
    url = driver.current_url
    assert url == 'http://localhost:3000/about', 'About URL incorrect from: ' + base_url

def verifyMapFunctionality(driver):
    '''
    This method takes a driver already set to a page containing a map, and verifies 
    the functionality of that map
    '''

    gMap = driver.find_element_by_class_name('mapboxgl-map')
    coords = gMap.location
    mapY = coords['y']
    mapX = coords['x']
    size = gMap.size
    mapHeight = size['height']
    mapWidth = size['width']

    zipCodeEl = driver.find_element_by_class_name('list-group-item')
    ActionChains(driver).move_to_element_with_offset(gMap, 0, 0).perform()
    initialText = zipCodeEl.text
    print(initialText)
    ActionChains(driver).move_by_offset(mapWidth/2, mapHeight/2).perform()
    finalText = zipCodeEl.text
    print(finalText)
    assert initialText != finalText, 'Map Hover incorrect at ' + driver.current_url + '!' 

def verifySortFunctionality(driver):
    '''
    This method takes a driver already set to a page containing a list of zipcodes, and
    verifies the functionality of the sorting on that page
    '''
    selectorsList = driver.find_elements_by_class_name('custom-select')
    categorySelector = Select(selectorsList[0])
    directionSelector = Select(selectorsList[1])
    
    categorySelector.select_by_visible_text('Food')
    directionSelector.select_by_visible_text('Ascending')
    cardsList = driver.find_elements_by_class_name('CardLink')
    val = getValueHelper(cardsList, 'food', 0)
    print(val)


def getValueHelper(cardList, category, index):
    cat = 0
    if (category == 'food'):
        cat = 1
    elif (category == 'traffic'):
        cat = 2
    elif (category == 'education'):
        cat = 3
    parentEl = cardList[index].find_elements_by_class_name('col-6')[cat]
    return parentEl.find_element_by_class_name('text-info').text

