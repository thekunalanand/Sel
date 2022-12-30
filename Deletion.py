#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Fri Dec 30 04:24:27 2022

@author: kunal
"""
from selenium.webdriver.common.by import By
from selenium import webdriver
import time

# 1. Open a URL
driver = webdriver.Chrome()
driver.get("https://anonib.al/latestPostings.js")

# 2. Click on login field and enter value: unicorn
login_field = driver.find_element(By.ID, "loginFieldLogin")
login_field.send_keys("unicorn")

# 3. Click on password field and enter value: anonpass22

password_field = driver.find_element(By.ID, "loginFieldPassword")
password_field.send_keys("anonpass22")
# 4. Click on login button
login_button = driver.find_element(By.ID, "loginFormButton")
login_button.submit()

driver.get("https://anonib.al/latestPostings.js")


# 5. Wait 5 seconds to load
time.sleep(7)

# 6. Run 4 different JS codes from chrome developer console
# You can use the execute_script() method to execute JavaScript code in the current page
# Replace the code below with your own JS code

with open("notallowed.js", "r") as f:
  js_code1 = f.read()

driver.execute_script(js_code1)
with open("duptext.js", "r") as t:
  js_code2 = t.read()

driver.execute_script(js_code2)
with open("Duplicatehash.js", "r") as y:
  js_code3 = y.read()

driver.execute_script(js_code3)

# 7. Click on show forms button
try:
    show_forms_button = driver.find_element(By.ID, "showFormsButton")
    show_forms_button.click()
except NoSuchElementException:
    print("Show Forms button not found")

# 8. Click on checkboxOnlyFiles
checkbox_only_files = driver.find_element(By.ID,"checkboxOnlyFiles")
checkbox_only_files.click()

# 9. Click on checkboxMediaDeletion
checkbox_media_deletion = driver.find_element(By.ID,"checkboxMediaDeletion")
checkbox_media_deletion.click()

# 10. Click on deleteFormButton
delete_form_button = driver.find_element(By.ID,"deleteFormButton")
delete_form_button.click()

time.sleep(7)


# Close the browser window
driver.quit()
