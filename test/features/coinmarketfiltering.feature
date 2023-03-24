Feature: Coin market UI Filter

  @coin
  Scenario Outline: Filtering UI and extracting data for comparison

    Given I am on <coinmarket> home page
    When I filter displayed record by <row>
    And I capture all page contents
    Then filter the algorithm by <algoname>
    Then I navigate to add filter popup by clicking add filter
    And toggle on Mineable on add filter page
    And I select <coins> under <criptocurrencyoption>
    Then I select price and set minimum value to <minvalue> and maximum to <maxvalue>
    Then compare current page content with initially captured page content

    Examples:
      | coinmarket                | row | algoname | criptocurrencyoption | minvalue | maxvalue |
      | https://coinmarketcap.com | 20  | PoW      | All Cryptocurrencies | 100      | 10000    |

#  go to https://coinmarketcap.com
#  show rows by 20
#  capture all page contents - we will let you decide what is the correct information to capture, suggestions e.g. price, name, position
#  filter by Algorithm - "PoW"
#  followed by "+ Add Filter"
#  toggle "Mineable"
#  then select "All Cryptocurrencies"
#  select "Coins"
#  then select price and set minimum value to 100 and maximum to 10,000
#  compare page content to the content in step 3