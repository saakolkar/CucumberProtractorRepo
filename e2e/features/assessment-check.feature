Feature: Check the installation of the protractor framework
    
    Scenario Outline: Open the browser and validate single people record search
        Given The app is open on "localhost"
        When I search valid "<people>"
        Then I verify that searched "<people>" has "<Gender>","<Birthyear>","<Eyecolor>","<Skincolor>"
        Examples:
        |people|Gender|Birthyear|Eyecolor|Skincolor|
        |Leia Organa|female|19BBY|brown|light|

    
   Scenario Outline: Open the browser and validate single planet  record search
        Given The app is open on "localhost"
        When I search valid planet "<planet>"
        Then I verify that searched planet "<planet>" has "<population>","<climate>","<gravity>"
        Examples:
        |planet|population|climate|gravity|
        |Alderaan|2000000000|temperate| 1 standard |  
