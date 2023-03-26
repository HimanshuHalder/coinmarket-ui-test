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