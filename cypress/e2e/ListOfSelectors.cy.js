

const Elements = {
	
	Url :'https://www.saucedemo.com/',
	UsernameElement :'input[id="user-name"]',
	Usernametxt :'standard_user',
	Passwordtxt :'secret_sauce',
	PasswordElement :'input[id="password"]',
	LoginButton :'input[id="login-button"]',
	backpackProduct :'button[id="add-to-cart-sauce-labs-backpack"]',
	clickOnCart :'a[class="shopping_cart_link"]',
	//BackpackText :'div[class="inventory_item_name"]'
	checkOutElement :'button[id="checkout"]',
	firstNameElement : 'input[id="first-name"]',
	lastNameElement : 'input[id="last-name"]',
	zipCodeNumberElement : 'input[id="postal-code"]',
	firstNametxt :'Devdatta',
	LastNametxt :'n',
	ZipCodeNumber :'110000',
	continueButton:'input[id="continue"]',
	finishButton :'button[id="finish"]'
	
}

export const Home=()=>{
	cy.visit(Elements.Url);
}
export const Login=()=>{
	cy.get(Elements.UsernameElement).type(Elements.Usernametxt);
	cy.get(Elements.PasswordElement).type(Elements.Passwordtxt);
	cy.get(Elements.LoginButton).click();
	
	
	
}
export const AddToCart=()=>{
	cy.get(Elements.backpackProduct).click();
	
}

export const CheckingCart=()=>{
	cy.get(Elements.clickOnCart).click();
}
export const verifyingCartContent=()=>{
	cy.get(Elements.BackpackText).should('contains','Sauce Labs Backpack');
	
}

export const Checkout=()=>{
	cy.get(Elements.checkOutElement).click();
}
export const Address=()=>{
	cy.get(Elements.firstNameElement).type(Elements.firstNametxt);
	cy.get(Elements.lastNameElement).type(Elements.LastNametxt);
	cy.get(Elements.zipCodeNumberElement).type(Elements.ZipCodeNumber);
	cy.get(Elements.continueButton).click();
	
}
export const placeOrder=()=>{
	cy.get(Elements.finishButton).click();
	
}