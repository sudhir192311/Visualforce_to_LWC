import { LightningElement, wire, api } from 'lwc';
import queryRelatedContacts from '@salesforce/apex/AccountControllerLwc.queryRelatedContacts';
import queryAccountsByEmployeeNumber from '@salesforce/apex/AccountListControllerLwc.queryAccountsByEmployeeNumber';
export default class AccountInfo extends LightningElement {
    @api recordId;
    @wire(queryRelatedContacts, { accountId: '$recordId' })
    contacts;

    @wire(queryAccountsByEmployeeNumber, { numberOfEmployees: '$numberOfEmployees' })
    accounts;
}