/// <reference types="Cypress" />

describe('User Settings', () => {

    it('should navigate to User Settings', () => {
      cy.visit('/settings'); // Replace with the correct URL
      cy.get('button#user-settings').click();
      cy.url().should('include', '/user-settings');
    });
  
    it('should update display name', () => {
      cy.get('input#display-name').clear().type('New Name');
      cy.get('button#save-changes').click();
      cy.contains('Your details have been updated').should('be.visible');
    });
  
    it('should show an error for an empty display name', () => {
      cy.get('input#display-name').clear().type('');
      cy.get('button#save-changes').click();
      cy.get('div#error-message').should('contain', 'Name cannot be empty').should('be.visible');
    });
  
    it('should update email address', () => {
      cy.get('input#email').clear().type('newemail@example.com');
      cy.get('button#save-changes').click();
      cy.contains('Your details have been updated').should('be.visible');
    });
  
    it('should show an error for an empty email address', () => {
      cy.get('input#email').clear().type('');
      cy.get('button#save-changes').click();
      cy.get('div#error-message').should('contain', 'Email cannot be empty').should('be.visible');
    });
  
    it('should show an error for an invalid email address', () => {
      cy.get('input#email').clear().type('invalidemail.com');
      cy.get('button#save-changes').click();
      cy.get('div#error-message').should('contain', 'Please enter a valid email address').should('be.visible');
    });
    it('should update the password using the old and new password fields', () => {
        cy.get('input#old-password').clear().type('CurrentPassword123');
        cy.get('input#new-password').clear().type('NewPassword123!');
        cy.get('button#save-changes').click();
        cy.get('.toast').should('contain', 'Your password has been updated').and('be.visible');
        cy.get('.toast').should('not.be.visible').wait(5000); // Assuming the toast disappears after 5 seconds
    });
      
    it('should show an error if the old password is incorrect', () => {
        cy.get('input#old-password').clear().type('WrongPassword123');
        cy.get('input#new-password').clear().type('NewPassword123!');
        cy.get('button#save-changes').click();
        cy.get('.toast').should('contain', 'The old password is incorrect').and('be.visible');
        cy.get('.toast').should('not.be.visible').wait(5000); // Assuming the toast disappears after 5 seconds
    });
      
    it('should show an error if the new password is invalid or weak', () => {
        cy.get('input#old-password').clear().type('CurrentPassword123');
        cy.get('input#new-password').clear().type('weakpass');
        cy.get('button#save-changes').click();
        cy.get('.toast').should('contain', 'Password must include at least one special character').and('be.visible');
        cy.get('.toast').should('not.be.visible').wait(5000); // Assuming the toast disappears after 5 seconds
      
    });

    it('should show an error if the new password is invalid or weak', () => {
        cy.get('input#old-password').clear().type('');
        cy.get('input#new-password').clear().type('');
        cy.get('button#save-changes').click();
        cy.get('.toast').should('contain', 'Password cannot be empty').and('be.visible');
        cy.get('.toast').should('not.be.visible').wait(5000); // Assuming the toast disappears after 5 seconds
    });
      
  
    it('should change avatar', () => {
      cy.get('select#avatar').select('Avatar Option');
      cy.get('button#save-changes').click();
      cy.contains('Your details have been updated').should('be.visible');
    });
  
  });
  