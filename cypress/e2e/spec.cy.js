



import {
	Home, Login , AddToCart , CheckingCart ,Checkout, Address, placeOrder
}from '../e2e/ListOfSelectors.cy'
import { assert } from 'chai';
describe('Testcase01',() => {
	
	
	it('buying product',()=>{
          Home();
		  cy.log('opend home successfully');
		  cy.wait(3000);
		  Login();
		  cy.log(cy.url());
		cy.url().should('include','/inventory.html');
		  cy.log('logged in successfully');
		   cy.wait(3000);
		 AddToCart();
		  cy.log('added sauce lab backpack to cart successfully');
		   cy.wait(3000);
		  if(CheckingCart()){
			  cy.log('cart content verified successfully');
		  }
		   cy.wait(3000);
		  Checkout();
		  Address();
		  cy.log('address added successfully');
		   cy.wait(3000);
		   placeOrder();
		  cy.log('placed order successfully');
		  
	})
		
		
	})
	
	

