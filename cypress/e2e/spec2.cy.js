describe('Login Test', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com'); // Điều hướng đến trang đăng nhập
  });
  
  it('Login with valid credentials', () => {
    cy.get('[data-test="username"]').type('standard_user'); // Nhập tên người dùng
    cy.get('[data-test="password"]').type('secret_sauce'); // Nhập mật khẩu
    cy.get('[data-test="login-button"]').click(); // Nhấn nút đăng nhập

    // Kiểm tra xem đã đăng nhập thành công hay chưa
    cy.url().should('include', '/inventory.html');
  });
});