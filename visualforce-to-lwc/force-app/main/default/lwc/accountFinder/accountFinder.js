import { LightningElement, wire } from 'lwc';
// import { NavigationMixin } from 'lightning/navigation';
import queryAccountsByRevenue from '@salesforce/apex/AccountListControllerLwc.queryAccountsByRevenue';
export default class AccountFinder extends LightningElement {
    annualRevenue = null;
    handleChange(event) {
        this.annualRevenue = event.detail.value;
    }
    reset() {
        this.annualRevenue = null;
    }

    // handleButtonClick() {
    //     this[NavigationMixin.Navigate]({
    //         type: 'standard__objectPage',
    //         attributes: {
    //             objectApiName: 'Contact',
    //             actionName: 'list'
    //         }
    //     });
    // }

    @wire(queryAccountsByRevenue, { annualRevenue: '$annualRevenue' })
    accounts;
}