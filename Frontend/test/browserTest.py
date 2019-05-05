from selenium import webdriver
from selenium.webdriver import ActionChains
from selenium.webdriver.support.ui import Select
import time


class TestRunner:

    def __init__(self, drvr):
        self.driver = drvr
        self.driver.implicitly_wait(10)
        self.driver.maximize_window()
        self.driver.get("http://allaboutaustin.info")


    def execute_tests(self):
        self.homePageUI()
        self.categoryTabs()
        self.closePage()


    def homePageUI(self):
        '''
        This method calls all the tests to test the homepage of AllAboutAustin
        '''

        assert self.driver.title == "All About Austin" , "Title incorrect!"
        self.verifySurvey()
        self.driver.get('http://allaboutaustin.info')
        self.verifyHomePageButton()
        self.driver.get('http://allaboutaustin.info')
        self.verifyTopLinks()

    def categoryTabs(self):
        '''
        This method tests each of the food, traffic, and education tabs
        '''

        self.driver.get('http://allaboutaustin.info/food')
        self.verifyMapFunctionality()
        self.verifySortFunctionality()
        self.driver.get('http://allaboutaustin.info/traffic')
        self.verifyMapFunctionality()
        self.verifySortFunctionality()
        self.driver.get('http://allaboutaustin.info/education')
        self.verifyMapFunctionality()
        self.verifySortFunctionality()


    def closePage(self):
        '''
        This method closes the browser
        '''
        self.driver.close()

    def verifySurvey(self):
        '''
        This method checks the survey page to ensure that there are 3 sliders
        and that each slider has the correct default value of 50
        '''

        btn = self.driver.find_element_by_link_text('Start')
        btn.click()
        url = self.driver.current_url
        assert url == 'http://allaboutaustin.info/survey' , 'Survey URL incorrect!'
        els = self.driver.find_elements_by_class_name('form-control-range')
        assert len(els) == 3 , 'Number of sliders incorrect!'
        for i in els:
            assert i.get_attribute('value') == '50' , 'Default Values incorrect!'

    def verifyHomePageButton(self):
        '''
        This method tests that the homepage button in the top left corner
        is a link to the homepage
        '''

        btn = self.driver.find_element_by_partial_link_text('AAA')
        btn.click()
        url = self.driver.current_url
        assert url == 'http://allaboutaustin.info/' , 'HomePage URL incorrect!'

    def verifyTopLinks(self):
        '''
        This method tests that all of the top links (food, traffic, education) return
        the proper pages
        '''

        base_url = self.driver.current_url
        btn = self.driver.find_element_by_partial_link_text('Food')
        btn.click()
        url = self.driver.current_url
        assert url == 'http://allaboutaustin.info/food' , 'Food URL incorrect from: ' + base_url
        self.driver.get(base_url)
        btn = self.driver.find_element_by_link_text('Traffic')
        btn.click()
        url = self.driver.current_url
        assert url == 'http://allaboutaustin.info/traffic', 'Traffic URL incorrect from: ' + base_url
        self.driver.get(base_url)
        btn = self.driver.find_element_by_link_text('Education')
        btn.click()
        url = self.driver.current_url
        assert url == 'http://allaboutaustin.info/education', 'Education URL incorrect from: ' + base_url
        self.driver.get(base_url)
        btn = self.driver.find_element_by_link_text('About')
        btn.click()
        url = self.driver.current_url
        assert url == 'http://allaboutaustin.info/about', 'About URL incorrect from: ' + base_url

    def verifyMapFunctionality(self):
        '''
        This method takes a driver already set to a page containing a map, and verifies
        the functionality of that map
        '''

        gMap = self.driver.find_element_by_class_name('mapboxgl-map')
        size = gMap.size
        mapHeight = size['height']
        mapWidth = size['width']

        zipCodeEl = self.driver.find_element_by_class_name('list-group-item')
        ActionChains(self.driver).move_to_element_with_offset(gMap, 0, 0).perform()
        time.sleep(2)
        initialText = zipCodeEl.text
        ActionChains(self.driver).move_by_offset(mapWidth/2, mapHeight/2).perform()
        time.sleep(2)
        finalText = zipCodeEl.text
        assert initialText != finalText, 'Map Hover incorrect at ' + self.driver.current_url + '!'

    def verifySortFunctionality(self):
        '''
        This method takes a driver already set to a page containing a list of zipcodes, and
        verifies the functionality of the sorting on that page
        '''

        selectorsList = self.driver.find_elements_by_class_name('custom-select')
        categorySelector = Select(selectorsList[0])
        directionSelector = Select(selectorsList[1])

        categorySelector.select_by_visible_text('Food')
        directionSelector.select_by_visible_text('Ascending')
        time.sleep(2)
        cardsList = self.driver.find_elements_by_class_name('CardLink')
        prevVal = self.getValueHelper(cardsList, 'food', 0)
        for i in range(1, len(cardsList) - 1):
            val = self.getValueHelper(cardsList, 'food', i)
            assert val >= prevVal, 'Asc food sort incorrect at ' + self.driver.current_url + '!'
            prevVal = val

        categorySelector.select_by_visible_text('Education')
        directionSelector.select_by_visible_text('Descending')
        time.sleep(2)
        cardsList = self.driver.find_elements_by_class_name('CardLink')
        prevVal = self.getValueHelper(cardsList, 'education', 0)
        for i in range(1, len(cardsList) - 1):
            val = self.getValueHelper(cardsList, 'education', i)
            assert val <= prevVal, 'Desc education sort incorrect at ' + self.driver.current_url + '!'
            prevVal = val

        categorySelector.select_by_visible_text('Traffic')
        directionSelector.select_by_visible_text('Ascending')
        time.sleep(2)
        cardsList = self.driver.find_elements_by_class_name('CardLink')
        prevVal = self.getValueHelper(cardsList, 'traffic', 0)
        for i in range(1, len(cardsList) - 1):
            val = self.getValueHelper(cardsList, 'traffic', i)
            assert val >= prevVal, 'Asc traffic sort incorrect at ' + self.driver.current_url + '!'
            prevVal = val


    def getValueHelper(self, cardList, category, index):
        '''
        This method extracts the relevant value for an element to assist with
        sort verification
        '''

        cat = 0
        if (category == 'food'):
            cat = 1
        elif (category == 'traffic'):
            cat = 2
        elif (category == 'education'):
            cat = 3
        parentEl = cardList[index].find_elements_by_class_name('col-6')[cat]
        return parentEl.find_element_by_class_name('text-info').text


if __name__ == '__main__':
    driver = webdriver.Chrome(executable_path='./chromedriver')
    testRunner = TestRunner(driver)
    testRunner.execute_tests()

    driver = webdriver.Firefox(executable_path='./geckodriver')
    testRunner = TestRunner(driver)
    testRunner.execute_tests()
