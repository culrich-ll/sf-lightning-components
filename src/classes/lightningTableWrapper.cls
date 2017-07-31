/**
* Wrapper class for the lightning record table
* 
* @Author  Cecilia Ulrich
* @version 1.0
* @since   2017-7-20
*/ 

global class lightningTableWrapper {
    @AuraEnabled
    public Integer page { get;set; }

    @AuraEnabled
    public Integer total { get;set; }

    @AuraEnabled
    public List<sObject> sObjectrecords { get;set; }
}